window.onload = () => {
    // copy below to add more pages
    fetch('/resources/scripts/sidebox.html') // the page we want to use for our blog post navigation
    .then(data => {
      return data.text()
    })
    .then( data => {
      document.getElementById("side").innerHTML = data; // inserts to element id="side"
    })
    // copy end

const header = document.getElementById("header");
const footer = document.getElementById("footer");

function myFunction(x) {
  if (x.matches) { // If media query matches
      $('#main').each(function(){ //loop through each element with the .dynamic-height class
          $(this).css({
              'padding-top' : header.offsetHeight + 10 +'px',
              'padding-bottom' : footer.offsetHeight +'px',
              'padding-left' : '0px',
              'padding-right' : '0px',
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

}