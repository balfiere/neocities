---
title: language learning tools
layout: resources.liquid
staus: valid
---
{% resourcesContainer "anki" %}

[Anki](https://apps.ankiweb.net/){target='_blank'}
: android, and ios. highly customizable, with access to a ton of different user made [plug-ins](https://ankiweb.net/shared/addons){target='_blank'} and [decks](https://ankiweb.net/shared/decks){target='_blank'}. i recommend using the FSRS algorithm for scheduling your cards instead of the default SM-2 scheduler, which you can learn about [here](https://github.com/open-spaced-repetition/fsrs4anki){target='_blank'}.

[FSRS4Anki Helper](https://ankiweb.net/shared/info/759844606){target='_blank'}
: add-on to help customize your card schedule if you use the FSRS algorithm.

[ReColor](https://ankiweb.net/shared/info/688199788){target='_blank'}
: lets you customize the color palette of anki.

[Pass/Fail](https://ankiweb.net/shared/info/876946123){target='_blank'}
: removes the easy and hard buttons, so you only have to decide between passing or failing a card.

[Opening the same window multiple time](https://ankiweb.net/shared/info/354407385){target='_blank'}
: lets you open multiple instances of the same window type (browse, add, edit, etc). personally i add <code>"AddCards": false,</code> to this add-on's default configuration so i don't open dozens of add card windows when i'm sentence mining.

[Generate Batch Audio](https://ankiweb.net/shared/info/1156270186){target='_blank'}
: automatically pull audio from sources like forvo and add them to the selected cards.

[Simple Forvo Audio Downloader](https://ankiweb.net/shared/info/560814150){target='_blank'}
: download audio from forvo and add them to your anki cards. sometimes works better than generate batch audio at pulling audio from forvo.

[Yomichan Forvo Server](https://ankiweb.net/shared/info/580654285){target='_blank'}
: adds forvo as a source for word audio in yomichan. compatible with yomichan forks like yomitan.

[Local Audio Server for Yomichan](https://ankiweb.net/shared/info/1045800357){target='_blank'}
: similar to yomichan forvo server but the audio files are stored locally on your computer, making look ups faster but requires more disk space. compatible with yomichan forks like yomitan.

[VOICEVOX Japanese Text To Speech Audio Generator](https://ankiweb.net/shared/info/366960193){target='_blank'}
: uses VOICEVOX speech synthesis software to generate audio for your anki cards. i'm generally against using TTS software too much when learning a language but VOICEVOX is pretty high quality for a free TTS so i'll use this when i really want a reading of a given sentence. only works with japanese.

[Gemini Speak](https://ankiweb.net/shared/info/480539677){target='_blank'}
: uses google's gemini api to generate audio. has a generous free quota and supports [many languages](https://ai.google.dev/gemini-api/docs/models#supported-languages){target='_blank'} including thai and japanese.

[Minimize to tray](https://ankiweb.net/shared/info/85158043){target='_blank'}
: lets you close the main anki window but leave it running in the background. nice when sentence mining. i like to turn on the option to start anki minimized, then add anki to my startup programs. that way i don't have to remember to open anki every time i want to sentence mine.

[🔗Anki Note Linker](https://ankiweb.net/shared/info/1077002392){target='_blank'}
: lets you add hyperlinks to other anki cards. i use this to link to similar grammar points in other cards.

[ames](https://github.com/eshrh/ames){target='_blank'}
: a script for linux that lets you add screenshots, audio recordings, or text to your last created anki card with a single keystroke. currently only works on X11 but has suggestions on adjusting it for wayland. i have a [fork](https://github.com/balfiere/amesHyprland){target='_blank'} designed specifically for hyprland. i haven't tested it but the animecards site has [a guide](https://animecards.site/media/#windows){target='_blank'} describing how to use sharex to achieve a similar set up on windows. i mainly use this for sentence mining from video games.

{% endresourcesContainer %}
{% resourcesContainer "browser tools and extensions" %}

[Yomitan](https://github.com/themoeway/yomitan){target='_blank'}
: interactive pop-up dictionary. built for japanese but support for other languages is being worked on. some non-japanese dictionaries that work with yomitan can be found [here](https://github.com/MarvNC/yomichan-dictionaries){target='_blank'}.

[Language Reactor](https://www.languagereactor.com/){target='_blank'}
: chrome extension that allows you to view 2 subtitles simultaneously on sites like youtube and netflix as well as their own video viewer. has a built in pop up dictionary. you can track known and unknown words if you pay for a pro membership.

[asbplayer](https://github.com/killergerbah/asbplayer){target='_blank'}
: media player and extension that allows you to easily create anki cards with sentence audio and screenshots. the subtitles in the media player are also text selectable so you can use them with pop up dictionaries like yomitan.

[Filmot](https://filmot.com/){target='_blank'}
: tool that lets you search a word or phrase within the captions and subtitles of over 800 million youtube videos.

[YouGlish](https://youglish.com/){target='_blank'}
: similar to filmot but jumps straight to the section of the video where the word or phrase appears.

[Yomitan PDF Viewer](https://yomitan.wiki/yomitan-pdf-viewer/web/){target='_blank'}
: read pdfs in your browser with yomitan text scanning enabled.

[ッツ Ebook Reader](https://github.com/ttu-ttu/ebook-reader){target='_blank'}
: read ebooks in your browser so tools like yomitan can be used. designed for japanese although works with other languages.

[Vocal Remover and Isolation](https://vocalremover.org/){target='_blank'}
:  removes background music and noise from audio files. i use this with audio clips i've mined that i want to use for shadowing practice.

{% endresourcesContainer %}
{% resourcesContainer "applications" %}

[Mokuro](https://mokuro.moe/){target='_blank'}
: tool that processes manga, creating html files with selectable text so you can easily look words up and create anki flashcards using a browser-based popup dictionary like yomitan. you can find a collection of preprocessed manga [here](https://www.mokuro.moe/manga/){target='_blank'}.

[jidoujisho](https://github.com/lrorpilla/jidoujisho){target='_blank'}
: android app with built in video player and ebook reader that lets you easily look up words and export flashcards to ankidroid. can read/watch local files and online sources like youtube. supports mokuro processed manga as well.

[GoldenDict](https://github.com/goldendict/goldendict){target='_blank'}
: a powerful dictionary app. supports a number of dictionary formats, audio, and automatic scanning in any application. there is a fork, [GoldenDict-ng](https://github.com/xiaoyifang/goldendict-ng){target='_blank'}, that adds anki integration, but on my machine i find the original GoldenDict to be more stable. in addition to [GoldenDict-ng's documentation](https://xiaoyifang.github.io/goldendict-ng/){target='_blank'}, i recommend checking out [tatsumoto's guide](https://tatsumoto.neocities.org/blog/setting-up-goldendict){target='_blank'} on setting it up. you can find a ton of dictionaries and audio repositories for many languages [here](https://cloud.freemdict.com/index.php/s/pgKcDcbSDTCzXCs?path=%2F){target='_blank'}.

[Pot App](https://pot-app.com/en/){target='_blank'}
: app that supports using OCR to recognize text from images. can use both offline OCR built into the system as well as online services. supports linux, windows, and mac.

[Thorium](https://thorium.rocks/){target='_blank'}
: a chromium fork with support for extra codecs. i use it with asbplayer to watch mkv files and other videos that can't be opened in other browsers.

{% endresourcesContainer %}
{% resourcesContainer "texthooking" %}

[agent](https://github.com/0xDC00/agent){target='_blank'}
: uses javascript to extract text from games. works with non visual novel games as well as emulators. games with scripts already written for agent can be found at their [script repository](https://github.com/0xDC00/scripts){target='_blank'}. specific builds of emulators compatible with agent can be found [here](https://github.com/koukdw/emulators/releases/tag/working){target='_blank'}.

[LunaHook](https://web.archive.org/web/20250331024706/https://github.com/HIllya51/LunaHook){target='_blank'}
: just the text hooker portion of LunaTranslator. can no longer be built, but a build of version 6.3.3 from before it went offline can be found [here](https://github.com/Tathagata-0/LunaTranslator/releases){target='_blank'}. a build from version 5.0.0 can be found [here](https://github.com/Crumbler/LunaHookFork/releases/tag/v5.0.0){target='_blank'}. i use LunaHook for most games that can't be hooked with agent.

[LunaTranslator](https://github.com/HIllya51/LunaTranslator/blob/main/.github/README_en.md){target='_blank'}
: a very feature-rich text hooker that also supports OCR over a region of the screen which automatically updates on screen changes or user defined button presses. useful for games that can't be hooked with other methods. i usually only use LunaTranslator if agent and LunaHook don't work since it's more resource intensive and prone to crashes when used inside of wine on linux.

[exSTATic](https://github.com/KamWithK/exSTATic){target='_blank'}
: pulls text from texthookers over a websocket connection and into the browser so browser extensions like yomitan can be used. keeps track of stats like reading time and speed per game. also supports tracking stats from mokuro and ttsu reader.

{% endresourcesContainer %}
