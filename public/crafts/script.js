import { annotate } from './rough-notation.js';

function annotateOnFocus(element, i) {
    for (const event of ["mouseover", "focus"]) {
        element.addEventListener(event, () => {
            i.show();
        });
    }
    for (const event of ["mouseout", "blur"]) {
        element.addEventListener(event, () => {
            i.hide();
        });
    }
}

// hightlight effect on link hover
const links = document.querySelectorAll("a");
const linkAnnotateArray = [];
links.forEach((link, i) => {
    linkAnnotateArray.push(annotate(link, { type: "highlight", color: "rgba(253, 166, 166, 0.3)", padding: 15 }));
    annotateOnFocus(link, linkAnnotateArray[i]);
})
 
// bracket effect on picture hover
const pictures = document.querySelectorAll(".img-box");
const captionAnnotateArray = [];
pictures.forEach((picture, i) => {
    const caption = picture.querySelector(".caption");
    // if prefers dark mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        captionAnnotateArray.push(annotate(caption, { type: 'bracket', color: '#fff', strokeWidth: 4, padding: [10, 10], brackets: ['left', 'right'] }));
    } else {
        captionAnnotateArray.push(annotate(caption, { type: 'bracket', color: '#000', strokeWidth: 4, padding: [10, 10], brackets: ['left', 'right'] }));
    }
    annotateOnFocus(picture, captionAnnotateArray[i]);
})

// close modal on esc key
document.onkeydown = function(event) { 
  if (event.key === "Escape" && document.querySelector('.modal-toggle:checked ~ .modal .modal-close')) {
    document.querySelector('.modal-toggle:checked ~ .modal .modal-close').click()
  }
}

// font switcher function
const fontSwitcher = document.getElementById("font-switcher");
fontSwitcher.addEventListener("click", () => {
    if (fontSwitcher.toggleAttribute("checked")) {
        document.body.style.fontFamily = "IBM Plex Sans Thai";
        document.body.style.fontSize = "1.15rem";
    } else {
        document.body.style.fontFamily = "Reenie Beanie";
        document.body.style.fontSize = "1.75rem";
    }
})