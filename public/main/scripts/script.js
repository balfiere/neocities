


///////////////////////////////////////////////
//
// preloader
// https://nenrikido.neocities.org/blog/post/making-a-preloader/
// + show windows if javascript enabled
//
///////////////////////////////////////////////

var loader = document.getElementById("preloader");
var windows = document.querySelectorAll(".window_container");
loader.style.display = "flex";


function toggleWindowsDisplay() {
    var displayStyle = window.innerWidth > 840 ? "unset" : "none";
    for (var i = 0; i < windows.length; i++) {
        windows[i].style.display = displayStyle;
    }
}

window.addEventListener("load", function () {
    loader.style.display = "none";
	toggleWindowsDisplay();
});

//Fade out, optional
var s = document.getElementById("preloader").style;
s.opacity = 1;
(function fade() {
(s.opacity -= 0.1) < 0 ? (s.display = "none") : setTimeout(fade, 40);
})();

window.addEventListener("resize", toggleWindowsDisplay);


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

function copyText() {
// Get the text field
var buttonLink = document.getElementById("button88");
var buttonLinkValue = buttonLink.value;

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
// load json data
//
///////////////////////////////////////////////

function appendCurrent(current, container) {
	if (current.length == 0) {
		const item = document.createElement('li');
		item.textContent = "nothing!";
		container.appendChild(item);
	} else {
		current.forEach(game => {
		const item = document.createElement('li');
		item.textContent = game;
		container.appendChild(item);
    });
	}
}

fetch('./scripts/currently.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(currently => {
    const playing = document.getElementById('currentlyplaying');
	appendCurrent(currently.playing, playing);

    const reading = document.getElementById('currentlyreading');
	appendCurrent(currently.reading, reading);

    const watching = document.getElementById('currentlywatching');
	appendCurrent(currently.watching, watching);

    const listening = document.getElementById('currentlylistening');
	appendCurrent(currently.listening, listening);

    const making = document.getElementById('currentlymaking');
	appendCurrent(currently.making, making);

  })
  .catch(error => {
    console.error('Failed to load JSON:', error);
  });

fetch('./scripts/todo.json')
  .then(response => {
	return response.json();
  })
  .then(todo => {
	const todoList = document.getElementById('todo');
	todo.todo.forEach(item => {
		const todoItem = document.createElement('li');
		todoItem.textContent = item;
		todoList.appendChild(todoItem);
	})
	todo.done.forEach(item => {
		const todoItem = document.createElement('li');
		todoItem.innerHTML = item.strike();
		todoList.appendChild(todoItem);
	})
  })
  .catch(error => {
	console.error('Failed to load JSON:', error);
  });

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