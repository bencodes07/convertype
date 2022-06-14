const resultBtn = document.getElementById('resultBtn');
const result = document.querySelector('.resultValue');
const resultP = document.querySelector('.resultP');
var resultValue;


resultBtn.addEventListener('click', () => {
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const amount = document.getElementById('amount').value;

  var headers = new Headers();
  headers.append("apikey", "hdvqEEZX6zSaOe8Q5gA1bstM3Ohx0HTX");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: headers,
  };

  fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
    .then(response => response.text())
    .then(result => toJson(result.trim()))
    .catch(error => console.log('error', error));


  function toJson(result) {
    const output = JSON.parse(result);
    console.log(output.result);
    resultValue = output.result;
  }

  setTimeout(() => {
    result.innerHTML = resultValue + ' ' + to;
    resultP.innerHTML = amount + ' ' + from + " =";
  }, 3000);
});



const swap = document.querySelector('.switch');

swap.addEventListener('click', (e) => {
  const inputType = document.querySelector('#from');
  const resultType = document.querySelector('#to');

  let inputTemp;
  let resultTemp;

  inputTemp = inputType.selectedIndex;
  resultTemp = resultType.selectedIndex;

  resultType.selectedIndex = inputTemp;
  inputType.selectedIndex = resultTemp;
});
