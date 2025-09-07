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
document.onkeydown = function(e) { e.keyCode === 27 && document.querySelector('.modal-toggle:checked + .modal .modal-close').click() }

// add event listener (on change) to all toggles
Array.prototype.slice.call(document.querySelectorAll('.modal-toggle')).forEach(function(toggle) { toggle.addEventListener('change', function(event) {
  // allow only one checked toggle
  Array.prototype.slice.call(document.querySelectorAll('.modal-toggle:not(#' + event.target.id + ')')).forEach(function(diff) { diff.checked = false })
  // when modal is opened, add class to the body
  document.body.className = event.target.checked ? 'modal-opened' : '' }) })