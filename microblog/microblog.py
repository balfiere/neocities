
import sys, os, traceback
import dateutil.parser
from time import strftime, localtime

# returns html-formatted string
def make_buttons(btn_dict, msg_id):
    buttons = "<div class=\"buttons\">"
    fmt = "<a href=\"%s\">[%s]</a>"
    for key in btn_dict:
        url = btn_dict[key] 
        if url[-1] == '=':
        # then interpret it as a query string
            url += str(msg_id)
        buttons += fmt % (url,key)
    buttons += "</div>"
    return buttons

# apply div classes for use with .css
def make_post(num, timestamp, conf, msg):
    fmt  = conf["format"]
    if "buttons" in conf:
        b = make_buttons(conf["buttons"], num)
    else:
        b = ""
    return fmt.format(
        __timestamp__=timestamp, __num__=num, __msg__=msg, __btn__=b)

def make_gallery(indices, w, conf=None):
    tag = []
    if indices == []:
        return tag
    template = '''
<div class=\"panel\">
    <a href=\"%s\"><img src=\"%s\" class=\"embed\"></a>
</div>
''' 
    tag.append("<div class=\"gallery\">")
    for index in reversed(indices):
        image = w.pop(index)
        is_path = image[0] == '.' or image[0] == '/'
        if conf and not is_path:
            thumb = "%s/%s" % (conf["path_to_thumb"], image)
            full = "%s/%s" % (conf["path_to_fullsize"], image)
            tag.append(template % (full,thumb))
            continue
        elif not conf and not is_path:
            msg = ("Warning: no path defined for image %s!" % image)
            print(msg,file=sys.stderr)
        else: 
            pass
        tag.append(template % (image, image))
    tag.append("</div>")
    return tag

# apply basic HTML formatting - only div class here is gallery
from html.parser import HTMLParser
class My_Html_Parser(HTMLParser):
    def __init__(self, ignore_list):
        super().__init__()
        self.stack        = []
        self.completed_by = ""
        # ignore common inline tags
        self.ignore = ignore_list

    '''

    def handle_starttag(self, tag, attrs):
        self.stack.append(tag)
        self.is_completed_by = ""

    def handle_endtag(self, tag):
        # remove an item == tag from the end of the list
        i    = len(self.stack) - 1
        last = self.stack[i]
        while i > -1:
            if tag == last:
                self.stack.pop(i)
                break
            i -= 1
            last = self.stack[i]
        if self.stack == [] and tag not in self.ignore:
            self.completed_by = "</%s>" % tag

    '''

from html import escape
def markup(message, config):
    def is_image(s, image_formats):
        l = s.rsplit('.', maxsplit=1)
        if len(l) < 2:
            return False
        # Python 3.10.5
        # example result that had to be filtered:
        # string:   started. 
        # result:   ['started', '']
        if l[1] == str(''):
            return False
        #print(s, l, file=sys.stderr)
        if l[1] in image_formats:
            return True
        return False

    def automarkup(list_of_words):
        images = []
        tags   = []
        for i in range(len(list_of_words)):
            word  = list_of_words[i]
            # don't help people click http
            if word.find("src=") == 0 or word.find("href=") == 0:
                continue
            elif word.find("https://") != -1: 
                w = escape(word)
                new_word = ("<a href=\"%s\">%s</a>") % (w, w)
                list_of_words[i] = new_word
            elif word.find("#") != -1 and len(word) > 1:
                # split by unicode blank character if present
                # allows tagging such as #fanfic|tion
                w = word.split(chr(8206)) 
                # w[0] is the portion closest to the #
                tags.append(w[0])
                new_word = "<span class=\"hashtag\">%s</span>" % (w[0])
                if len(w) > 1:
                    new_word += w[1]
                list_of_words[i] = new_word
            elif is_image(word, config["accepted_images"]):
                images.append(i)
        return list_of_words, images, tags

    tags   = [] # list of strings
    output = []
    gallery = []
    ptags = config["tag_paragraphs"]
    ignore = []
    if "inline_tags" in config:
        ignore = config["inline_tags"]
    parser = My_Html_Parser(ignore)
    sep = ""
    if "line_separator" in config:
        sep = config["line_separator"]
    for line in message:
        images = [] # list of integers
        parser.feed(line)
        if parser.stack == [] \
        and (parser.completed_by == "" or parser.completed_by not in line):
            words, images, t = automarkup(line.split())
            tags += t
            if len(images) > 0: 
                # function invokes pop() which modifies list 'words'
                gc = config["gallery"] if "gallery" in config else None
                gallery = make_gallery(images, words, gc)
            elif ptags and len(words) > 0:
                words.insert(0,"<p>")
                words.append("</p>")
            output.append(" ".join(words))
        elif "pre" in parser.stack \
        and ("<pre>" not in line \
        and "<code>" not in line and "</code>" not in line):
            output.append(escape(line))
        else: # <pre> is in the parser.stack
            output.append(line.strip())
        # avoid paragraph with an image gallery
        if len(gallery) > 0:
            output.append("".join(gallery))
            gallery = []
    return sep.join(output), tags

class Post:
    def __init__(self, ts, msg):
        self.timestamp = ts.strip() # string
        self.message = msg  # list

    # format used for sorting
    def get_epoch_time(self):
        t = dateutil.parser.parse(self.timestamp)
        return int(t.timestamp())

    # format used for display
    def get_short_time(self, form):
        if form == "":
            form = "%y %b %d"
        t = dateutil.parser.parse(self.timestamp)
        return t.strftime(form)

def parse_txt(filename):
    content   = []
    with open(filename, 'r') as f:
        content = f.readlines()
    posts   = [] # list of posts - same order as file
    message = [] # list of lines
    #  {-1 = init;; 0 = timestamp is next, 1 = message is next}
    state       = -1 
    timestamp   = ""
    for line in content:
        if state == -1:
            state = 0
            continue
        elif state == 0:
            timestamp = line
            state = 1
        elif state == 1:
            if len(line) > 1:
                message.append(line)
            else:
                p = Post(timestamp, message)
                posts.append(p)
                # reset
                message = []
                state = 0 
    return posts

def get_posts(posts, config, newest = None):
    taginfos = []
    tagcloud = dict() # (tag, count)
    tagged   = dict() # (tag, index of message)
    total = len(posts)
    count = total
    index = count # - 1
    timeline = []
    df = ""
    subset = []
    if "date_format" in config:
        df = config["date_format"]
    for post in posts:
        markedup, tags = markup(post.message, config)
        count -= 1
        index -= 1
        timeline.append(
            make_post(count, post.get_short_time(df), config, markedup)
        )
        for tag in tags:
            if tagcloud.get(tag) == None:
                tagcloud[tag] = 0
            tagcloud[tag] += 1
            if newest is not None and (total - (1 + count)) < newest:
                subset.append(tag)
            if newest is None \
            or newest is not None and tag in subset:
                if tagged.get(tag) == None:
                    tagged[tag] = []
                tagged[tag].append(index)
    # print(tagged, file=sys.stderr)
    return timeline, tagcloud, tagged

def make_tagcloud(d, rell):
    sorted_d = {k: v for k, 
                v in sorted(d.items(), 
                key=lambda item: -item[1])}
    output = []
    fmt = "<span class=\"hashtag\"><a href=\"%s\">%s(%i)</a></span>"
    #fmt    = "<span class=\"hashtag\">%s(%i)</span>"
    for key in d.keys():
        link = rell % key[1:]
        output.append(fmt % (link, key, d[key]))
    return output

class Paginator:
    def __init__(self, post_count, ppp, loc=None):
        if post_count <= 0:
            raise Exception
        if not loc:
            loc = "pages"
        if loc and not os.path.exists(loc):
            os.mkdir(loc)
        self.TOTAL_POSTS = post_count
        self.PPP = ppp
        self.TOTAL_PAGES = int(post_count/self.PPP)
        self.SUBDIR      = loc
        self.FILENAME = "%i.html"
        self.written = []

    def toc(self, current_page=None, path=None): #style 1
        if self.TOTAL_PAGES < 1:
            return "[no pages]"
        if path == None:
            path = self.SUBDIR
        # For page 'n' do not create an anchor tag
        fmt = "<a href=\"%s\">[%i]</a>" #(filename, page number)
        anchors = []
        for i in reversed(range(self.TOTAL_PAGES)):
            if i != current_page:
                x = path + "/" + (self.FILENAME % i)
                anchors.append(fmt % (x, i))
            else:
                anchors.append("<b>[%i]</b>" % i)
        return "\n".join(anchors)

    # makes one page
    def singlepage(self, template, tagcloud, timeline_, i=None, p=None):
        tc  = "\n".join(tagcloud)
        tl  = "\n\n".join(timeline_)
        toc = self.toc(i, p)
        return template.format(
            postcount=self.TOTAL_POSTS, tags=tc, pages=toc, timeline=tl
        )

    def paginate(self, template, tagcloud, timeline, is_tagline=False):
        outfile = "%s/%s" % (self.SUBDIR, self.FILENAME)
        l = len(timeline)
        for i in range(0, self.TOTAL_PAGES):
            fn = outfile % i
            with open(fn, 'w') as f:
                self.written.append(fn)
                prev = l - (self.PPP * i)
                curr = l - self.PPP * (i+1)
                sliced = timeline[curr:prev]
                f.write(self.singlepage(template, tagcloud, sliced, i, "."))
        return

import argparse
if __name__ == "__main__":
    def sort(filename):
        def export(new_content, new_filename):
            with open(new_filename, 'w') as f:
                print(file=f)
                for post in new_content:
                    print(post.timestamp, file=f)
                    print("".join(post.message), file=f)
            return
        posts = parse_txt(filename)
        posts.sort(key=lambda e: e.get_epoch_time())
        outfile = ("%s.sorted" % filename)
        print("Sorted text written to ", outfile)
        export(reversed(posts),  outfile)

    def get_args():
        p = argparse.ArgumentParser()
        p.add_argument("template", help="an html template file")
        p.add_argument("content", help="text file for microblog content")
        p.add_argument("--sort", action="store_true", \
            help="sorts content from oldest to newest"
                " (this is a separate operation from page generation)")
        p.add_argument("--skip-fetch", action="store_true", \
            help="skips fetching profile data from remote sources;"
                 " has no effect if webring is not enabled")
        p.add_argument("--new-posts", type=int, nargs='?',
            help="generate pages based only on new entries; " \
                "if I wrote 5 new posts then --new-posts=5'")
        args = p.parse_args()
        if args.sort:
            sort(args.content)
            exit()
        return args.template, args.content, args.skip_fetch, args.new_posts

    # assume relative path
    def demote_css(template, css_list,  level=1):
        prepend = ""
        if level == 1:
            prepend = '.'
        else:
            for i in range(level):
                prepend = ("../%s" % prepend)
        tpl = template
        for css in css_list:
            tpl = tpl.replace(css, ("%s%s" % (prepend, css) ))
        return tpl

    def writepage(template, timeline, tagcloud, config, subdir = None, paginate = True):
        count  = len(timeline)
        html   = ""
        with open(template,'r') as f:
            html = f.read()
        try:
            p      = config["postsperpage"]
            pagectrl = Paginator(count, p, subdir)
        except ZeroDivisionError as e:
            print("error: ",e, ". check 'postsperpage' in config", file=sys.stderr)
            exit()
        except Exception as e:
            print("error: ",e, ("(number of posts = %i)" % count), file=sys.stderr)
            exit()
        index = config["nonpaginated_page"]
        latest = timeline[:pagectrl.PPP]
        link_from_top    = "./tags/%s/"  + index
        link_from_subdir = "../tags/%s/" + index
        link_from_tagdir = "../%s/"      + index
        cloud = ""
        level = 1
        is_tagline = False
        if subdir == None: # if top level page
            cloud = make_tagcloud(tagcloud, link_from_top)
            print(pagectrl.singlepage(html, cloud, latest))
            cloud = make_tagcloud(tagcloud, link_from_subdir)
        else:
            if subdir != "webring": # timelines per tag
                is_tagline = True
                level += 1
                cloud    = make_tagcloud(tagcloud, link_from_tagdir)
            else:
                cloud    = make_tagcloud(tagcloud, link_from_subdir)
            demoted  = demote_css(html, config["relative_css"], level)
            filename = "%s/%s" % (subdir, index)
            with open(filename, 'w') as f: # landing page for tag
                pagectrl.written.append(filename)
                page = pagectrl.singlepage(demoted, cloud, latest, p=".")
                f.write(page)
        if paginate:
            pagectrl.paginate(
                demote_css(html, config["relative_css"], level), 
                cloud, timeline, is_tagline)
        return pagectrl.written

    import toml
    def load_settings():
        s = dict()
        filename = "settings.toml"
        if os.path.exists(filename):
            with open(filename, 'r') as f:
                s = toml.loads(f.read())
        else:
            s = None
        return s

    import json
    def export_profile(post_count, last_update, config):
        if "profile" not in config:
            return
        p = config["profile"]
        p["post-count"] = post_count
        p["last-updated"] = last_update
        if "username" not in p or "url" not in p:
            print("Warning: no profile exported", file=sys.stderr)
            return
        with open(config["file_output"], 'w') as f:
            print(json.dumps(p), file=f)

    def get_webring(f_cfg): 
        import pycurl
        from io import BytesIO
        def get_proxy():
            proxy = ""
            if "http_proxy" in os.environ:
                proxy = os.environ["http_proxy"]
            elif "https_proxy" in os.environ:
                proxy = os.environ["https_proxy"]
            host = proxy[proxy.rfind('/') + 1: proxy.rfind(':')]
            port = proxy[proxy.rfind(':') + 1:]
            foo = proxy.find("socks://") >= 0 or proxy.find("socks5h://")
            return host, int(port), foo

        def fetch(url_list):
            curl = pycurl.Curl() 
            if "http_proxy" in os.environ or "https_proxy" in os.environ:
                hostname, port_no, is_socks = get_proxy()
                curl.setopt(pycurl.PROXY, hostname)
                curl.setopt(pycurl.PROXYPORT, port_no)
                if is_socks:
                    curl.setopt(pycurl.PROXYTYPE, pycurl.PROXYTYPE_SOCKS5_HOSTNAME)
            datum = []
            meta  = []
            for url in url_list:
                buf = BytesIO()
                curl.setopt(curl.WRITEDATA, buf)
                curl.setopt(pycurl.URL, url)
                try:
                    curl.perform()
                    datum.append(buf)
                    meta.append(curl.getinfo(curl.CONTENT_TYPE))
                except pycurl.error as e:
                    print(e,": ", url, file=sys.stderr)
                # print(buf.getvalue(),"\n\t", curl.getinfo(curl.CONTENT_TYPE), file=sys.stderr)
            curl.close()
            assert(len(datum) == len(meta))
            return datum, meta

        def to_json(curl_outs):
            json_objs = []
            for buf in curl_outs:
                try:
                    json_objs.append(json.loads(buf.getvalue()))
                except Exception as e:
                    print(e)
            return json_objs

        def render(profiles, template, date_format):
            rendered = []
            SHORT_BIO_LIMIT = 150
            for profile in profiles:
                try:
                    epoch_timestamp = profile["last-updated"]
                    if not isinstance(epoch_timestamp, int):
                        epoch_timestamp = 0
                    post_count = profile["post-count"]
                    if not isinstance(post_count, int):
                        post_count = 0
                    self_desc = profile["short-bio"]
                    if len(profile["short-bio"]) >= SHORT_BIO_LIMIT:
                        self_desc = profile["short-bio"][:SHORT_BIO_LIMIT] + "..."
                    foo = template.format(
                        __avatar__=escape(profile["avatar"]),
                        __handle__=escape(profile["username"]),
                        __url__=escape(profile["url"]),
                        __post_count__ = post_count,
                        __shortbio__= escape(self_desc),
                        __lastupdated__= strftime(
                            date_format, localtime(epoch_timestamp)) )
                    rendered.append(foo)
                except KeyError as e:
                    print("remote profile is missing key: ", e, file=sys.stderr)
                    print("\tsource: ", profile, file=sys.stderr)
            return rendered

        def get_avatars(profiles, save_path, img_src):
            import hashlib
            imgs, info = fetch([p["avatar"] for p in profiles])
            length = len(imgs)
            if length != len(profiles) or length == 0:
                print("error in retrieving images", file=sys.stderr)
                return
            for i in range(0,length):
                content_type  = info[i].split('/')
                ext           = content_type.pop()
                if content_type.pop() != "image":
                    print("\tskip: not an image", file=sys.stderr)
                    continue
                data  = imgs[i].getvalue()
                h = hashlib.sha1(data).hexdigest()
                filename = "%s.%s" % (h, ext)
                path     = "%s/%s" % (save_path, filename)
                profiles[i]["avatar"] = "%s/%s" % (img_src, filename)
                if not os.path.isfile(path):
                    with open(path, "wb") as f:
                        f.write(data)

        j, m = fetch(f_cfg["list"])
        list_of_json_objs = to_json(j)
        if list_of_json_objs == []:
            print("no remote profiles loaded", file=sys.stderr)
            return []
        if f_cfg["internal-avatars"]["enabled"]:
            a = f_cfg["internal-avatars"]["local_path_to_avatars"]
            b = f_cfg["internal-avatars"]["path_to_avatars"]
            get_avatars(list_of_json_objs, a, b)
        try:
            list_of_json_objs.sort(key=lambda e: e["last-updated"], reverse=True)
        except KeyError: pass
        return render(list_of_json_objs, f_cfg["format"], f_cfg["date_format"])

    def main():
        tpl, content, skip_fetch, new = get_args()
        cfg = load_settings()
        if cfg == None:
            print("exit: no settings.toml found.", file=sys.stderr)
            return
        if "post" not in cfg:
            print("exit: table 'post' absent in settings.toml", file=sys.stderr)
            return
        if "page" not in cfg:
            print("exit: table 'page' absent in settings.toml", file=sys.stderr)
            return
        p = parse_txt(content)
        tl, tc, tg = get_posts(p, cfg["post"], new)
        if tl == []:
            return
        # main timeline
        updated = []
        updated += writepage(tpl, tl, tc, cfg["page"], 
            paginate=True if new is None else False)
        # timeline per tag
        if tc != dict() and tg != dict():
            if not os.path.exists("tags"):
                os.mkdir("tags")
        tl.reverse()
        for key in tg.keys():
            tagline = []
            for index in tg[key]:
                tagline.append(tl[index])
            # [1:] means to omit hashtag from dir name
            wp = True
            if new is not None \
            and len(tagline) > cfg["page"]["postsperpage"]:
                wp = False
            updated += writepage(
                tpl, tagline, tc, cfg["page"], \
                subdir="tags/%s" % key[1:], \
                paginate=wp) 
        if "webring" in cfg:
            if cfg["webring"]["enabled"] == True:
                export_profile(
                    len(p), p[0].get_epoch_time(), cfg["webring"] )
            if not skip_fetch:
                fellows = get_webring(cfg["webring"]["following"] )
                if fellows != []:
                    updated += writepage(
                        tpl, fellows, tc, cfg["page"], subdir="webring")
        with open("updatedfiles.txt", 'w') as f:
            for filename in updated:
                print(filename, file=f) # sys.stderr)
            if "latestpages" in cfg:
                for page in cfg["latestpages"]:
                    print(page, file=f)
    try:
        main()
    except KeyError as e:
        traceback.print_exc()
        print("\n\tA key may be missing from your settings file.", file=sys.stderr)
    except dateutil.parser._parser.ParserError:
        traceback.print_exc()
        print("\n\tFailed to interpret a date from string..",
              "\n\tYour file of posts may be malformed.",
              "\n\tCheck if your file starts with a line break.", file=sys.stderr)
    except toml.decoder.TomlDecodeError:
        traceback.print_exc()
        print("\n\tYour configuration file is malformed.")
    except FileNotFoundError as e:
        traceback.print_exc()
        print("\n\tA potential cause is attempting to save a file to a folder that does not exist.")
