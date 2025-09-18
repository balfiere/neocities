---
title: image 5
tags: image-gallery
categories: 
- china
- day
image: image-5.jpg
alt: image 5 alt text
---

entry for image five goes here.

furthermore, each `<section>` should have a `category` attribute. this is the tagging system. the gallery will still work even if a `<section>` is missing it, that photo just won't be selected by any tag.

the `category` attribute can take as many values as you want it to, just put a space between each tag. obviously this means your tags can't have a space in them, but you can always put a space in the `<label>` element that shows your tag name.

every time you use a new tag in your gallery, you must do the following:

- in the html, search for `<form>` and add a new `<label><input type="checkbox" name="tag">#tag</label>` inside of it, replacing `tag` with your new tag. this adds a new button at the top of your page.
- in the css, search for `form:has([name`. add a new `form:has([name="tag"]:checked)~#image-grid-container section:not([category~="tag"])` but replace `tag` with your new tag. this is how clicking a button closes `<section>`s that don't have the corresponding tag. if you forget this, the button you added in the last step won't do anything.

Photo by [billow926](https://unsplash.com/@billow926?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash){target='_blank'} on [Unsplash](https://unsplash.com/photos/man-in-white-t-shirt-riding-on-black-motorcycle-during-daytime-YTJDGgCTREc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash){target='_blank'}