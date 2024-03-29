//show/hide windows
$(document).ready(function(){
    $(".minimize").click(function(){
        $(this).closest(".window_interior").find(".window_description").hide();
    });
    
    $(".maximize").click(function(){
        $(this).closest(".window_interior").find(".window_description").show();
    });
    
});

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