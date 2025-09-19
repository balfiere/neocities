---
title: site building resources
layout: resources.liquid
staus: valid
---

{% resourcesContainer "premade themes and layouts" %}

- [cepheus's themes](https://cepheus.neocities.org/content/layouts){target='_blank'}
- [cinni's themes](https://cinni.net/?z=/theme/layouts){target='_blank'}
- [EGGRAMEN's CSS Test Pages](https://eggramen.neocities.org/code/css_testpages){target='_blank'}
- [fool lovers' themes](https://foollovers.com/te/index.html){target='_blank'}
- [kalechips' layout thrift store](https://kalechips.net/projects/layouts/){target='_blank'}
- [REPTH themes](https://repth.neocities.org/theme){target='_blank'}
- [ribo.zone's layouts](https://ribo.zone/free/layouts/){target='_blank'}
- sadgrl.online's [premade layouts](https://codepen.io/sadness97/full/XJbLxZM) and [layout builder](https://codepen.io/sadness97/full/XJbLxNj){target='_blank'}
- [teppy's layouts & tips](https://teppyslayouts.neocities.org/){target='_blank'}
- [tentacool's directory](https://codesharing.neocities.org/){target='_blank'}
- [ThemeKing's Retro HTML Web Templates](https://themekings.net/retro-html-templates.html#free){target='_blank'}
- [Templates | Wasp Nest](https://punkwasp.neocities.org/creations/templates/){target='_blank'}
- [xandra's layouts](https://xandra.cc/foryou#layouts){target='_blank'}
- [petrapixel's layout generator](https://petrapixel.neocities.org/coding/layout-generator){target='_blank'}
- [Wish Glows' layouts](https://wishglows.neocities.org/layouts){target='_blank'}
- [5493's themes](https://5493.neocities.org/themes){target='_blank'}
- [Almost Sweet's themes](https://almostsweet.neocities.org/design){target='_blank'}

{% endresourcesContainer %}

{% resourcesContainer "static site generators" %}

static site generators are applications that can create full html files by inserting text into preconfigured templates. useful if you use the same html format across multiple pages.

[microblog.py](https://notabug.org/likho/microblog.py){target='_blank'}
: a simple microblog generator using python for use with static sites. very easy to configure and use. i use this for my [microblog](/microblog/index.html){target='_blank'}. i currently recommend using the [cfg-update](https://notabug.org/likho/microblog.py/src/cfg-update){target='_blank'} branch, which lets you [configure the timestamp](https://likho.neocities.org/microblog/tags/programming/#70){target='_blank'}.

[Zonelots](https://codeberg.org/01bbl/Zonelots){target='_blank'}
: uses javascript to generate a blog for static hosting, also easy to use and works well with neocities.

[Eleventy](https://www.11ty.dev/){target='_blank'}
: a simple static site generator. this is the generator i use for this resource site. i recommend [this tutorial](https://whiona.weblog.lol/2023/10/my-neocities-workflow:-using-eleventy-and-the-cli-to-speed-up-development){target='_blank'} if you need an easy to use guide on how to set it up for use with neocities.

[Hugo](https://gohugo.io/){target='_blank'}
: another lightweight static site generator. a walkthrough on how it was used to build a neocities site can be found [here](https://haddock.neocities.org/making-my-site/). if you write posts in obsidian, [this plugin](https://github.com/kirito41dd/obsidian-hugo-publish) can be used to convert the files for use with hugo.

[Quartz](https://quartz.jzhao.xyz/){target='_blank'}
: a static site generator that turns markdown files into a website. built for use with obsidian but not required. this is what i use for my <a href="/notes/">notebook</a>.

[Obsidian Digital Garden Plugin](https://dg-docs.ole.dev/){target='_blank'}
: another static site generator built for obsidian. has instructions for deploying to vercel and netlify, providers that also offer free static site hosting.

{% endresourcesContainer %}
{% resourcesContainer "css frameworks" %}

css frameworks are premade, ready to use stylesheets that can speed up the development of your website by doing a lot of the styling for you. you can sometimes download them to host on your website, but many will have a link that you can put right into the head of your html file without needing to download them.
			  
[dropin-minimal-css](https://github.com/dohliam/dropin-minimal-css){target='_blank'}
: see how a webpage looks with different minimal stylesheets. good for people looking to quickly publish long-form written content on their site (like a blog, essay, tutorial, etc), want it to look nice without writing their own CSS, and want to preview many different options.

[sakura.css](https://oxal.org/projects/sakura/){target='_blank'}
: my personal favorite minimal css framework.

[Terminal CSS](https://terminalcss.xyz/){target='_blank'}
: minimal css framework that mimics the look of a terminal.

[NES.css](https://nostalgic-css.github.io/NES.css/){target='_blank'}
: framework inspired by the 8-bit graphics of the NES era.

[PSone.css](https://micah5.github.io/PSone.css/){target='_blank'}
: framework inspired by NES.css that takes its styling from popular playstation 1 games.

[XP.css](https://botoxparty.github.io/XP.css/){target='_blank'}
: replicates windows XP.

[98.css](https://jdan.github.io/98.css/){target='_blank'}
: replicates windows 98.

[7.css](https://khang-nd.github.io/7.css/){target='_blank'}
: replicate windows 7.

[normalize.css](https://necolas.github.io/normalize.css/){target='_blank'}
: a stylesheet that helps different browsers render elements more consistently.

[A Modern CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/){target='_blank'}
: another css reset that i like using.

[Pico CSS](https://picocss.com/){target='_blank'}
: somewhere between a css reset and lightweight framework, emphasizes responsiveness and semantic html.

{% endresourcesContainer %}
{% resourcesContainer "code snippets" %}

[PetraPixel's Widgets](https://petrapixel.neocities.org/coding/widgets){target='_blank'}
: a variety of widgets that don't rely on external scripts so they can be used by free accounts. includes widgets for status.cafe, last.fm, and pollcode.

[MelonKing's Frame-Link System](https://forum.melonland.net/index.php?topic=115.0){target='_blank'}
: if you use iframes on your site, this lets you link to a page and it will open inside of your desired iframe. i have this set up on my personal site homepage (for example, [this link](/main/?z=/main/contact.html) opens my /main/contact.html page inside the iframe of my /main/index.html page)

[FreeFrontend](https://freefrontend.com/){target='_blank'}
: a ton of different html, css, and javascript examples, neatly organized and all with codepens linked.

[Kalechips' code snippets](https://kalechips.net/stuff/snippets){target='_blank'}
: some simple code snippets with a focus on accessibility.

[You Don't Need jQuery](https://github.com/camsong/You-Dont-Need-jQuery){target='_blank'}
: github page with examples of how to do common jQuery commands in vanilla javascript.

[vuvuzela's code snippets](https://vuvuzela.dreamwidth.org/tag/code){target='_blank'}
: very 2015 tumblr sidebar style code snippets for displaying links and small amounts of text next to images (usually of favorite fictional characters).

[Hover.css](https://ianlunn.github.io/Hover/){target='_blank'}
: a css hover effect library.

[Animate.css](https://animate.style/){target='_blank'}
: a css animation library.

[my code snippets](https://kwaamfan.neocities.org/main/?z=/main/codes){target='_blank'}
: i have some of my own code snippets on my personal site. includes a wii menu style media gallery, pictochat style microblog/changelog, draggable and collapsible windows, and more.

{% endresourcesContainer %}
{% resourcesContainer "javascript libraries" %}

[Rough Notation](https://roughnotation.com/){target='_blank'}
: a small javascript library for creating animations with a handdrawn look.

[Tippy.js](https://atomiks.github.io/tippyjs/){target='_blank'}
: a library for creating tooltips, elements that appear when hovering over other elements.

[Draggabilly](https://draggabilly.desandro.com/){target='_blank'}
: makes elements draggable. i use this to make windows moveable on my [main](/main/) page, and i wrote a demo page on how to use it [here](/codes/mydraggabillydemo.html).

[GSAP](https://gsap.com/){target='_blank'}
: an animation library. i used their [scroll plugin](https://gsap.com/scroll/){target='_blank'} to create my [favorite places](/places/) page.

[Freezeframe.js](https://github.com/ctrl-freaks/freezeframe.js){target='_blank'}
: control playing and pausing of animated gifs with mouse hover or click events.

{% endresourcesContainer %}
{% resourcesContainer "online tools" %}
			
[ezgif](https://ezgif.com/){target='_blank'}
: create, crop, resize, reverse, split and convert between animated image files like gifs, webp, apng, avif, and mp4 online.

[Dither Me This](https://doodad.dev/dither-me-this/){target='_blank'}
: online tool to decrease the file size of images using dithering. lots of nice looking presets, and supports transparent images.

[Pixel Art Scaler](https://lospec.com/pixel-art-scaler/){target='_blank'}
: a tool that scales pixel art to bigger sizes while keeping edges sharp.

[coolLabs Fonts](https://fonts.coollabs.io/){target='_blank'}
: replace google fonts in your code with an alternative that doesn't log user data.

[Online @font-face generator](https://transfonter.org/){target='_blank'}
: convert fonts to css @font-face formats with CSS and HTML sample files. you can use this tool to convert ttf fonts to woff/woff2 so you can host and use them on your neocities site if you have a free account and can't upload ttf fonts.

[google webfonts helper](https://gwfh.mranftl.com/fonts){target='_blank'}
: online tool that helps you self host google fonts by downloading them in woff2 format and generating @font-face css.

[glassmorphism generator](https://css.glass/){target='_blank'}
: generate css code that mimics glass.

[CSS Gradient](https://cssgradient.io/){target='_blank'}
: generate css gradients.

[Toptal's CSS3 Generator Tool](https://www.toptal.com/developers/css3maker){target='_blank'}
: generate borders, box-shadow, text-shadow, transitions, transformations, and more.

[CSSmatic's Border Radius Generator](https://www.cssmatic.com/border-radius){target='_blank'}
: generate css border radius, including the ability to control each corner separately.

[CSS3Generator by @RandyJensen](https://css3generator.com/){target='_blank'}
: another css generator; this supports generating columns and flexbox.

[CSS3 Transform](https://css-transform.moro.es/){target='_blank'}
: visualize and generate css transformations.

[Flexbox Playground](https://flexbox.tech/){target='_blank'}
: interactive way to see how different flexbox settings work.

{% endresourcesContainer %}
{% resourcesContainer "learn" %}

[Interneting Is Hard](https://internetingishard.netlify.app/){target='_blank'}
: straightforward, easy to read guide to web development suitable for beginners.

[freeCodeCamp](https://www.freecodecamp.org/){target='_blank'}
: has a variety of project based courses that teach you to code, plus thousands of tutorials. if you're new to building a website i recommend their responsive web design course.

[The Odin Project](https://www.theodinproject.com/){target='_blank'}
: a more in depth course on web development.

[Codepip Games](https://codepip.com/games/){target='_blank'}
: a collection of online games that teach you html, css, javascript, or sql.

[PetraPixel's tutorials](https://petrapixel.neocities.org/coding/how-to-make-a-website){target='_blank'}
: beginner webdev tutorials aimed at indie web users looking to code websites from scratch.

{% endresourcesContainer %}
{% resourcesContainer "other" %}

- [scripted](https://scripted.neocities.org/){target='_blank'}
- [Skye Journey](https://luvrksknskyejourney.org/filesystem/resources/index.html){target='_blank'}

{% endresourcesContainer %}
