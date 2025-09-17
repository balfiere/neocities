---
title: image 6
tags: image-gallery
categories:
- japan
- night
image: image-6.jpg
alt: image 6 alt text
---

entry for image six goes here.

if you're a lazy person like me and don't want to copy and paste new `<section>` elements for each image then manually update every `modal-entry-{entry}` plus remember to update `form` every time you add a new category, you can use a static site generator like [11ty](https://www.11ty.dev/){target='_blank'} to automatically generate the page from a json file or folder of markdown files. i have a tutorial explaining how to do so from a json file [here](/notes/030-my-notes/building-a-web-page-from-json-data-using-11ty), it should be easy enough to follow even if you have no idea what json is.

this page was generated from markdown files. i don't currently have a tutorial on that, but you can take a look at [this page's source code](https://github.com/balfiere/neocities/tree/main/eleventy/codes/gallery-with-tag-system){target='_blank'} to see how it works (or just straight up use it as a template). i also have a note explaining how one can work with external markdown files in 11ty [here](/notes/030-my-notes/methods-of-using-markdown-with-11ty). to see the function i use to automatically get all categories used in my markdown files, sorting them and returning the number of occurences, see [my 11ty config](https://github.com/balfiere/neocities/blob/main/eleventy/.eleventy.js){target='_blank'}.

Photo by [Fabian Bächli](https://unsplash.com/@fabianbaechli?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash){target='_blank'} on [Unsplash](https://unsplash.com/photos/a-dark-alley-with-a-few-shops-on-the-side-of-it-BdfhE2ST1tE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash){target='_blank'}
