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