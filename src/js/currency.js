const resultBtn = document.getElementById('resultBtn');
const result = document.querySelector('.resultValue');
const resultP = document.querySelector('.resultP');
var resultValue;

function disableButton() {
  // Disable Button for 5sec
  resultBtn.disabled = true;
  resultBtn.style.cursor = 'not-allowed';
  setTimeout(() => {
    resultBtn.disabled = false;
    resultBtn.style.cursor = 'pointer';
  }, 4000);
}

resultBtn.addEventListener('click', () => {

  // Get Currency Values

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


const resultVar = document.querySelector('.result');

window.addEventListener('resize', (e) => {
  setTimeout(() => {
    let inputRect = document.querySelector('.input').getBoundingClientRect().width;
    resultVar.style.width = inputRect + 'px';
    console.log('orientationchange');
  }, 10);
});

window.addEventListener('load', (e) => {
  setTimeout(() => {
    let inputRect = document.querySelector('.input').getBoundingClientRect().width;
    resultVar.style.width = inputRect + 'px';
    console.log('orientationchange');
  }, 10);
});

window.addEventListener('orientationchange', () => {
  setTimeout(() => {
    let inputRect = document.querySelector('.input').getBoundingClientRect().width;
    resultVar.style.width = inputRect + 'px';
    console.log('orientationchange');
  }, 10);
});
