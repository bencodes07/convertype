var convertBtn = document.getElementById('resultBtn');
var URLinput = document.getElementById('input');

convertBtn.addEventListener('click', () => {
  var format = document.getElementById('inputType');
  console.log(`URL: ${URLinput.value}`);
  sendURL(URLinput.value, format.value.toString());
});

function sendURL(URL, FORMAT) {
  window.location.href = "http://localhost:4000/download?URL=" + URL + "&FORMAT=" + FORMAT;
}