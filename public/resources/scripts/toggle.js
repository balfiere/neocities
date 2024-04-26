document.getElementById("open").addEventListener("click", function () {
  document.getElementById('side').classList.toggle('open')
  document.getElementById('open-icon').classList.toggle('close')
  document.getElementById('open').classList.toggle('buttonclose')
  return false;
})