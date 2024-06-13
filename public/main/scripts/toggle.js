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