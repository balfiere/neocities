---
title: image 4
tags: image-gallery
categories: 
- thailand
- night
image: image-4.jpg
alt: image 4 alt text
sort: 4
---

entry for image four goes here.

each image and its popup are inside of a `<section>` in the `<div id="image-grid-container">` element. each `<section>` **must** have a unique `modal-entry-{entry}`. this is how the page knows which popup to open when you click on a given image.

this `modal-entry-{entry}` is used in three places for every `<section>`:

*   the `id` of the `<input>`
*   the `for` attribute of the `<label>` that wraps the image
*   the `for` attribute of the `<label>` that wraps the page behind the popup when it is open

Photo by [Theo Topolevsky](https://unsplash.com/@theotopolevsky?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash){target='_blank'} on [Unsplash](https://unsplash.com/photos/a-shopping-cart-is-parked-on-the-side-of-the-street-zgP8AbxBO8c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash){target='_blank'}
