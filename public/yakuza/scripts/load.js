window.onload = () => {
    // copy below to add more pages
    fetch('/yakuza/scripts/linksleft.html') // the page we want to use for our blog post navigation
    .then(data => {
      return data.text()
    })
    .then( data => {
      document.getElementById("leftcolumn-inner").innerHTML = data; // inserts to element id="side"
    })
    // copy end

    // copy below to add more pages
    fetch('/yakuza/scripts/linksright.html') // the page we want to use for our blog post navigation
    .then(data => {
      return data.text()
    })
    .then( data => {
      document.getElementById("rightcolumn-inner").innerHTML = data; // inserts to element id="side"
    })
    // copy end

}