---
title: image 3
tags: image-gallery
categories: 
- vietnam
- day
image: image-3.jpg
alt: image 3 alt text
---
entry for image three goes here.

the buttons to filter the gallery are inside `<form>`. if you don't want the tagging system, simply

- delete the `<form>` element
- delete the css styling for `form`
  - this includes the area with `form:has([name=...`
  - remember to delete the bit inside of `@media (prefers-color-scheme: dark) {}` too
- remove the `category` attributes from the `<section>` elements

to remove the popups

- delete the line that starts with `<input class="modal-toggle"`
- delete the line that starts with `<label class="modal-open"`, then delete its closing tag (before `<dialog>`)
- delete the entire `<dialog>` element inside of `<section>`
- delete css that starts with `.modal`
- delete the javascript

Photo by [Hanna Lazar](https://unsplash.com/@potokvarte?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash){target='_blank'} on [Unsplash](https://unsplash.com/photos/cityscape-with-construction-and-diverse-building-styles-33hJ58BqH6I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash){target='_blank'}