///////////////////////////////////////////////
//
// draggable windows
//
///////////////////////////////////////////////

// if you have multiple .draggable elements
// get all draggie elements
var draggableElems = document.querySelectorAll(".draggable");
// array of Draggabillies
var draggies = [];
// init Draggabillies
for (var i = 0, len = draggableElems.length; i < len; i++) {
	var draggableElem = draggableElems[i];
	var draggie = new Draggabilly(draggableElem, {
		handle: ".window-header"
	});
	draggies.push(draggie);
}

// get all windows
var activeWindow = document.querySelector('.window_container');
var windows = document.querySelectorAll(".window_container");

var init = function(){
	for (var i = 0; i < windows.length; i++){
		var w = windows[i];
		console.log(w);

        // on click
		w.addEventListener("mouseover", function(e){
            // reset z-index of all windows to 10
			activeWindow.style.zIndex = 10;
            // get the window being clicked
			activeWindow = e.target.closest('.window_container');
            // bring to top (by setting z-index to 100)
			activeWindow.style.zIndex = 100;
		})
		console.log(activeWindow)
	}
}

init();

///////////////////////////////////////////////
//
// mobile sidebar
//
///////////////////////////////////////////////

let burger = document.getElementById("open");

// Setup our function to run on various events
var toggleSidebar = function (event) {
  // Do something...
    document.getElementById('leftcolumn').classList.toggle('open')
    document.getElementById('ham4').classList.toggle('active')
};

burger.addEventListener('click', toggleSidebar, false);
burger.addEventListener('keydown', (event) => {
  let key = event.code;
  if (key == "Escape" || key == "Enter") {
      toggleSidebar(event);
  }
});

///////////////////////////////////////////////
//
// copy buttons
//
///////////////////////////////////////////////

// Get the text field initial value
var buttonLink = document.getElementById("button88");
var buttonLinkValue = buttonLink.value;

function copyText() {

// Select the text field
buttonLink.select();
buttonLink.setSelectionRange(0, 99999); // For mobile devices

	// Copy the text inside the text field
navigator.clipboard.writeText(buttonLink.value);

// Alert the copied text
buttonLink.value = "Copied!";
setTimeout(function(){
	buttonLink.value = buttonLinkValue;
}, 2000);
} 

///////////////////////////////////////////////
//
// preloader
// https://nenrikido.neocities.org/blog/post/making-a-preloader/
//
///////////////////////////////////////////////

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
loader.style.display = "none";
});

//Fade out, optional
var s = document.getElementById("preloader").style;
s.opacity = 1;
(function fade() {
(s.opacity -= 0.1) < 0 ? (s.display = "none") : setTimeout(fade, 40);
})();

///////////////////////////////////////////////
//
// leaves
// https://github.com/jhammann/sakura
//
///////////////////////////////////////////////

const isReducedMotionEnabled = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let sakura;

if (!isReducedMotionEnabled) {
	sakura = new Sakura('body', {});
}

leavesButton = document.querySelector('#leavesButton');
leavesButton.addEventListener('click', () => {
	if (sakura.el.getAttribute('data-sakura-anim-id') === "") {
		sakura.start();
	} else {
		sakura.stop();
	}
})