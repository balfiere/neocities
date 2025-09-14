
# microblog.py

Simple and stylish text-to-html microblog generator.

## Requirements

    python3 dateutil toml curl pycurl make urllib

* `dateutil`, `toml`, `pycurl` are Python modules. 
* `make` (optional), method for invoking the script. 
* `urllib` (optional), for uploading multiple files to neocities (`neouploader.py`).

## Usage

The following generates a sample page `result.html`.

    cp example/Makefile .
    make

Using `make` is uptional; it does the following within a new directory:

    cp example/settings.toml ./settings.toml
    cp example/timeline.css ./timeline.css
    cp example/default.tpl ./template.tpl
    cp example/demo.txt ./content.txt
    python microblog.py ./template.tpl ./content.txt > result.html

This script generate a text file after operation.

* `updatedfiles.txt`, a list of files updated by the script for use in automated uploads.

### Writing Content

See `example/demo.txt`.

The content file is a plain text file of posts. Each post has two types of information: timestamp and message. For example:

    
    Thu Mar 17 11:11:11 PM EDT 2022
    Today I ate ice cream.
    It was strawberry flavored. 
    #TouchingGrass
    
    Thu Mar 16 2:22:22 PM EDT 2022
    I took these pictures.
    /images/1.jpg /images/2.jpg /images/3.jpg
    
    

* the first line of the file must be empty (newline character only).
* the two last lines of the file must be empty
* html can be placed in the message for embedded videos and rich text

## Configuration

Settings are read from `settings.toml`. See `example/settings.toml`.

Configuration options as understood by the script are tentative and may change in the future.

### A key may be missing from your settings file (KeyError)

>I'm getting KeyError when I run the program

>This script is throwing KeyError after I ran git pull

In most cases, this means I added new configuration options. You can resolve this error by copying and pasting the missing keys from `example/settings.toml` to `settings.toml`.

The following command shows differences between the files.

    diff settings.toml example/settings.toml

## Anything else

This is a script I wrote for personal use. The output can be seen on [https://likho.neocities.org/microblog/index.html](https://likho.neocities.org/microblog/index.html). I figure someone else may want to use it for their own personal websites, so it is published. 

It works for me and my workflow; therefore, it is simple and involves little lines of code. But I am still open to comments, questions, or suggestions.
