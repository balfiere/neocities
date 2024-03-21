var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const header = document.getElementById("header");
const footer = document.getElementById("footer");

function myFunction(x) {
  if (x.matches) { // If media query matches
      $('#main').each(function(){ //loop through each element with the .dynamic-height class
          $(this).css({
              'padding-top' : header.offsetHeight + 10 +'px',
              'padding-bottom' : footer.offsetHeight +'px'
          });
      });
  } else {
    $('#main').each(function(){ //loop through each element with the .dynamic-height class
      $(this).css({
          'padding' : '15px 12px 5px 0px',
      });
  });
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 900px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
}); 