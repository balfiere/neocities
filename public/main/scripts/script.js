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

var init = function () {
  for (var i = 0; i < windows.length; i++) {
    var w = windows[i];
    console.log(w);

    // on click
    w.addEventListener("mouseover", function (e) {
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

var toggleSidebar = function (event) {
  document.getElementById('ham4').classList.toggle('active')
};

burger.addEventListener('click', toggleSidebar, false);
burger.addEventListener('keydown', (event) => {
  let key = event.code;
  if (key == "Escape" || key == "Enter") {
    toggleSidebar(event);
    document.getElementById('menu-toggle').checked = !document.getElementById('menu-toggle').checked
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
  setTimeout(function () {
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
    item.textContent = "nothing </3";
    container.appendChild(item);
  } else {
    current.forEach(game => {
      const item = document.createElement('li');
      item.textContent = game;
      container.appendChild(item);
    });
  }
}

fetch('./scripts/windows.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(
    json => {
      const playing = document.getElementById('currentlyplaying');
      appendCurrent(json.playing, playing);

      const reading = document.getElementById('currentlyreading');
      appendCurrent(json.reading, reading);

      const watching = document.getElementById('currentlywatching');
      appendCurrent(json.watching, watching);

      const listening = document.getElementById('currentlylistening');
      appendCurrent(json.listening, listening);

      const making = document.getElementById('currentlymaking');
      appendCurrent(json.making, making);

      const other = document.getElementById('currentlyother');
      appendCurrent(json.other, other);

      const todoList = document.getElementById('todo');
      json.todo.forEach(item => {
        const todoItem = document.createElement('li');
        todoItem.textContent = item;
        todoList.appendChild(todoItem);
      })
      json.done.forEach(item => {
        const todoItem = document.createElement('li');
        todoItem.innerHTML = item.strike();
        todoList.appendChild(todoItem);
      })

      const buttonwall = document.getElementById('buttonwall');
      const buttonArray = json.buttons;
      buttonArray.forEach(button => {
        // if the button is animated (value 3 is 1)
        const picture = document.createElement('picture');
        const source = document.createElement('source');
        const img = document.createElement('img');
        if (button[2] == 1) {
          source.srcset = "images/88x31/" + button[0] + ".png";
          source.media = "(prefers-reduced-motion)";
          img.src = "images/88x31/" + button[0] + ".gif";
          img.alt = button[1];
          picture.appendChild(source);
          picture.appendChild(img);
        } else {
          img.src = "images/88x31/" + button[0] + ".png";
          img.alt = button[1];
        }
        // if has a link (there are 4 values in the array)
        if (button.length == 4) {
          const link = document.createElement('a');
          link.href = button[3];
          link.target = "_blank";
          // if the button is animated (value 3 is 1)
          if (button[2] == 1) {
            link.appendChild(picture);
          } else {
            link.appendChild(img);
          }
          buttonwall.appendChild(link);
        } else {
          // if the button is animated (value 3 is 1)
          if (button[2] == 1) {
            buttonwall.appendChild(picture);
          } else {
            buttonwall.appendChild(img);
          }
        }
      })
    }
  )
  .catch(error => {
    console.error('Failed to load JSON:', error);
  });

///////////////////////////////////////////////
//
// leaves
// https://github.com/jhammann/sakura
//
///////////////////////////////////////////////

/*!
 * Sakura.js 1.0.0
 * Vanilla JS version of jQuery-Sakura: Make it rain - sakura petals.
 *
 * Copyright 2019-2019 Jeroen Hammann
 *
 * Released under the MIT License
 *
 * Released on: January 9, 2019
 */
"use strict";

var Sakura = function Sakura(selector, options) {
  var _this = this;

  if (typeof selector === 'undefined') {
    throw new Error('No selector present. Define an element.');
  }

  this.el = document.querySelector(selector); // Defaults for the option object, which gets extended below.

  var defaults = {
    className: 'sakura',
    // Classname of the petal. This corresponds with the css.
    fallSpeed: 2,
    // Speed factor in which the petal falls.
    maxSize: 14,
    // The maximum size of the petal.
    minSize: 9,
    // The minimum size of the petal.
    delay: 700,
    // Delay between petals.
    gradientColorStart: 'rgba(181, 255, 220, 0.7)',
    // Gradient color start (rgba).
    gradientColorEnd: 'rgba(120, 197, 161, 0.7)',
    // Gradient color end (rgba).
    gradientColorDegree: 120,
    // Gradient degree angle.
    lifeTime: 700,
    // The life time of the petals (0 is infinity).

  }; // Merge defaults with user options.

  var extend = function extend(originalObj, newObj) {
    Object.keys(originalObj).forEach(function (key) {
      if (newObj && Object.prototype.hasOwnProperty.call(newObj, key)) {
        var origin = originalObj;
        origin[key] = newObj[key];
      }
    });
    return originalObj;
  };

  this.settings = extend(defaults, options); // Hide horizontal scrollbars on the target element.

  this.el.style.overflowX = 'hidden'; // Random array element

  function randomArrayElem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  } // Random integer


  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } // Check for animation events.


  var prefixes = ['webkit', 'moz', 'MS', 'o', ''];

  function PrefixedEvent(element, type, callback) {
    for (var p = 0; p < prefixes.length; p += 1) {
      var animType = type;

      if (!prefixes[p]) {
        animType = type.toLowerCase();
      }

      element.addEventListener(prefixes[p] + animType, callback, false);
    }
  } // Check if the element is in the viewport.


  function elementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }

  this.createPetal = function () {
    if (_this.el.dataset.sakuraAnimId) {
      setTimeout(function () {
        window.requestAnimationFrame(_this.createPetal);
      }, _this.settings.delay);
    } // Name the animations. These have to match the animations in the CSS file.


    var animationNames = {
      blowAnimations: ['blow-soft-left', 'blow-medium-left', 'blow-soft-right', 'blow-medium-right'],
      swayAnimations: ['sway-0', 'sway-1', 'sway-2', 'sway-3', 'sway-4', 'sway-5', 'sway-6', 'sway-7', 'sway-8']
    }; // Get one random animation of each type and randomize fall time of the petals

    var blowAnimation = randomArrayElem(animationNames.blowAnimations);
    var swayAnimation = randomArrayElem(animationNames.swayAnimations);

    var fallTime = (document.documentElement.clientHeight * 0.007 + Math.round(Math.random() * 5)) * _this.settings.fallSpeed; // Create animations


    var animationsArr = ["fall ".concat(fallTime, "s linear 0s 1"), "".concat(blowAnimation, " ").concat((fallTime > 30 ? fallTime : 30) - 20 + randomInt(0, 20), "s linear 0s infinite"), "".concat(swayAnimation, " ").concat(randomInt(2, 4), "s linear 0s infinite")];
    var animations = animationsArr.join(', '); // Create petal and give it a random size.

    var petal = document.createElement('div');
    petal.classList.add(_this.settings.className);
    var height = randomInt(_this.settings.minSize, _this.settings.maxSize);
    var width = height - Math.floor(randomInt(0, _this.settings.minSize) / 3);
    petal.style.background = "linear-gradient(".concat(_this.settings.gradientColorDegree, "deg, ").concat(_this.settings.gradientColorStart, ", ").concat(_this.settings.gradientColorEnd, ")");
    petal.style.webkitAnimation = animations;
    petal.style.animation = animations;
    petal.style.borderRadius = "".concat(randomInt(_this.settings.maxSize, _this.settings.maxSize + Math.floor(Math.random() * 10)), "px ").concat(randomInt(1, Math.floor(width / 4)), "px");
    petal.style.height = "".concat(height, "px");
    petal.style.left = "".concat(Math.random() * document.documentElement.clientWidth - 100, "px");
    petal.style.marginTop = "".concat(-(Math.floor(Math.random() * 20) + 15), "px");
    petal.style.width = "".concat(width, "px"); // Remove petals of which the animation ended.

    PrefixedEvent(petal, 'AnimationEnd', function () {
      if (!elementInViewport(petal)) {
        petal.remove();
      }
    }); // Remove petals that float out of the viewport.

    PrefixedEvent(petal, 'AnimationIteration', function () {
      if (!elementInViewport(petal)) {
        petal.remove();
      }
    }); // Add the petal to the target element.

    _this.el.appendChild(petal);
  };

  this.el.setAttribute('data-sakura-anim-id', window.requestAnimationFrame(this.createPetal));
};

Sakura.prototype.start = function () {
  var animId = this.el.dataset.sakuraAnimId;

  if (!animId) {
    this.el.setAttribute('data-sakura-anim-id', window.requestAnimationFrame(this.createPetal));
  } else {
    throw new Error('Sakura is already running.');
  }
};

Sakura.prototype.stop = function () {
  var _this2 = this;

  var graceful = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var animId = this.el.dataset.sakuraAnimId;

  if (animId) {
    window.cancelAnimationFrame(animId);
    this.el.setAttribute('data-sakura-anim-id', '');
  } // Remove all current blossoms at once.
  // You can also set 'graceful' to true to stop new petals from being created.
  // This way the petals won't be removed abruptly.


  if (!graceful) {
    setTimeout(function () {
      var petals = document.getElementsByClassName(_this2.settings.className);

      while (petals.length > 0) {
        petals[0].parentNode.removeChild(petals[0]);
      }
    }, this.settings.delay + 50);
  }
};

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