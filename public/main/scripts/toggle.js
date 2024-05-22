document.getElementById("open").addEventListener("click", function () {
    document.getElementById('leftcolumn').classList.toggle('open')
    document.getElementById('open-icon').classList.toggle('close')
    return false;
  })