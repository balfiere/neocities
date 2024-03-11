window.onload = () => {
    // copy below to add more pages
    fetch('/scripts/sidebox.html') // the page we want to use for our blog post navigation
    .then(data => {
      return data.text()
    })
    .then( data => {
      document.getElementById("side").innerHTML = data; // inserts to element id="blognav"
    })
    // copy end
}