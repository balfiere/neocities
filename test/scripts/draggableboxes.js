// code from https://codepen.io/sadness97/pen/KKobMWx
// here you tell InteractJS which class of items you'd like to be draggable
interact('.draggable')
  .draggable({
    listeners: {
      // when a user drags the object ('on dragmove') run this function
      move: dragMoveListener,
      // call this function on every dragend event
      end (event) {
        console.log("item dropped!")
      }
    }
  })

function dragMoveListener (event) {
  // all this stuff gets the position of the item while it's being dragged
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the position attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener

//show/hide windows
$(document).ready(function(){
    $(".d-min").click(function(){
        $(".window_description").hide();
    });
    
    $(".d-max").click(function(){
        $(".window_description").show();
    });
    
    //$(".d-x").click(function(){
    //    $(".window_container").hide();
    //});
    
    //
    
});