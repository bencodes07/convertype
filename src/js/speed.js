const result = document.querySelector('.result');

if(window.innerWidth <= 800) {
  console.log('Big')
} else {
  window.addEventListener('resize', (e) => {
    setTimeout(() => {
      let inputRect = document.querySelector('.input').getBoundingClientRect().width;
      result.style.width = inputRect + 'px';
      console.log('orientationchange');
    }, 10);
  });
  
  window.addEventListener('load', (e) => {
    setTimeout(() => {
      let inputRect = document.querySelector('.input').getBoundingClientRect().width;
      result.style.width = inputRect + 'px';
      console.log('orientationchange');
    }, 10);
  });
  
  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      let inputRect = document.querySelector('.input').getBoundingClientRect().width;
      result.style.width = inputRect + 'px';
      console.log('orientationchange');
    }, 10);
  });
}



// Calculating units of distance

const btn = document.getElementById('resultBtn');
const resultValue = document.querySelector('.resultValue');

btn.addEventListener('click', calcDistance);

function calcDistance() {
  let input = document.getElementById('input').value;
  let inputType = document.getElementById('inputType').value;
  let resultType = document.getElementById('resultType').value;
  let resultP = document.querySelector('.resultP');

  if (input === '') return alert('Please enter a value');

  if (inputType == 'Meter per second') {
    // Meter per second
    if(resultType == 'Meter per second') {
      if(input > 1) {
        resultValue.innerText = input + " " + "Meters per second";
        resultP.innerText = input + " " + "Meters per second" + " =";
      } else {
        resultValue.innerText = input + " " + resultType;
        resultP.innerText = input + " " + inputType + " =";
      }
    } 
    // Kilometer per hour
    else if(resultType == 'Kilometer per hour') {
      let calcResult = input * 3.6;
      if(calcResult > 1) {
        resultValue.innerText = calcResult + " " + "Kilometers per hour"
        resultP.innerText = input + " " + "Kilometers per hour" + " =";
      } else {
        resultValue.innerText = calcResult + " " + resultType;
        resultP.innerText = input + " " + inputType + " =";
      }

    }
    // Foot per second
    else if(resultType == 'Foot per second') {
      let calcResult = input * 3.28084;
      if(calcResult > 1) {
        resultValue.innerText = calcResult + " " + "Feet per second";
        resultP.innerText = input + " " + "Feet per second" + " =";
      } else {
        resultValue.innerText = calcResult + " " + resultType;
        resultP.innerText = input + " " + inputType + " =";
      }
    }
    // Mile per hour
    else if(resultType == 'Mile per hour') {
      let calcResult = input * 2.237;
      if(calcResult > 1) {
        resultValue.innerText = calcResult + " " + "Miles per hour";
        resultP.innerText = input + " " + "Miles per hour" + " =";
      } else {
        resultValue.innerText = calcResult + " " + resultType;
        resultP.innerText = input + " " + inputType + " =";
      }
    }
    // Miles
    else if(resultType == 'Knot') {
      let calcResult = input * 1.94384;
      if(calcResult > 1) {
        resultValue.innerText = calcResult + " " + "Knots";
        resultP.innerText = input + " " + "Knots" + " =";
      } else {
        resultValue.innerText = calcResult + " " + resultType;
        resultP.innerText = input + " " + inputType + " =";
      }
    }

  } else if (inputType === 'Kilometer per hour') {
      // Meter per second
      if(resultType == 'Meter per second') {
        let calcResult = input / 3.6;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + "Meters per second";
          resultP.innerText = input + " " + "Kilometers per hour" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Kilometer per hour
      else if(resultType == 'Kilometer per hour') {
        if(input > 1) {
          resultValue.innerText = input + " " + "Kilometers per hour";
          resultP.innerText = input + " " + "Kilometers per hour" + " =";
        } else {
          resultValue.innerText = input + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Foot per second
      else if(resultType == 'Foot per second') {
        let calcResult = input / 1.097;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + "Feet per second";
          resultP.innerText = input + " " + "Kilometers per hour" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Mile per hour
      else if(resultType == 'Mile per hour') {
        let calcResult = input / 1.609;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + "Miles per hour";
          resultP.innerText = input + " " + "Kilometers per hour" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Knot 
      else if(resultType == 'Knot') {
        let calcResult = input / 1.852;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + "Kilometers per hour" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }

  } else if (inputType === 'Foot per second') {
      // Meter per second
      if(resultType == 'Meter per second') {
        let calcResult = input / 3.281;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + "Meters per second";
          resultP.innerText = input + " " + "Feet per second" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Kilometer per hour
      else if(resultType == 'Kilometer per hour') {
        let calcResult = input * 1.097;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + "Kilometers per hour";
          resultP.innerText = input + " " + "Feet per second" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Foot per second
      else if(resultType == 'Foot per second') {
        if(input > 1) {
          resultValue.innerText = input + " " + "Feet per second";
          resultP.innerText = input + " " + "Feet per second" + " =";
        } else {
          resultValue.innerText = input + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Mile per hour
      else if(resultType == 'Mile per hour') {
        let calcResult = input / 1.467;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + "Miles per hour";
          resultP.innerText = input + " " + "Feet per second" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Knot
      else if(resultType == 'Knot') {
        let calcResult = input / 1.688;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + "Knots";
          resultP.innerText = input + " " + "Feet per second" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
  } else if (inputType === 'Mile per hour') {
      // Meter per second
      if(resultType == 'Meter per second') {
        let calcResult = input / 2.237;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + "Meters per second";
          resultP.innerText = input + " " + "Miles per hour" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Kilometer per hour
      else if(resultType == 'Kilometer per hour') {
        let calcResult = input * 1.609;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + "Kilometers per hour";
          resultP.innerText = input + " " + "Miles per hour" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Foot per second
      else if(resultType == 'Foot per second') {
        let calcResult = input * 1.467;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + "Feet per second";
          resultP.innerText = input + " " + "Miles per hour" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Mile per hour
      else if(resultType == 'Mile per hour') {
        if(input > 1) {
          resultValue.innerText = input + " " + "Miles per hour";
          resultP.innerText = input + " " + "Miles per hour" + " =";
        } else {
          resultValue.innerText = input + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Knot
      else if(resultType == 'Knot') {
        let calcResult = input / 1.151;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + "Miles per hour" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
  } else if (inputType === 'Knot') {
      // Meter per second
      if(resultType == 'Meter per second') {
        let calcResult = input / 1.944;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + "Meters per second";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Kilometer per hour
      else if(resultType == 'Kilometer per hour') {
        let calcResult = input * 1.852;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + "Kilometers per hour";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Foot per second
      else if(resultType == 'Foot per second') {
        let calcResult = input * 1.688;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + "Feet per second";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Mile per hour
      else if(resultType == 'Mile per hour') {
        let calcResult = input * 1.151;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + "Miles per hour";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Knot
      else if(resultType == 'Knot') {
        if(input > 1) {
          resultValue.innerText = input + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = input + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
    }
  }

// Correct Svg Position

const icon = document.querySelector('.svg');

btn.addEventListener('click', () => {
  setTimeout(() => {
    const inputRect = document.querySelector('#input').getBoundingClientRect();
    console.log(inputRect.y);
    if(inputRect.y == 717.6875) {
      icon.style.marginTop = '453px';
    } else {
      icon.style.marginTop = '478px';
    }
  }, 10);
});


// Swapping Input and Result types
const swap = document.querySelector('.switch');

swap.addEventListener('click', (e) => {
  const inputType = document.querySelector('#inputType');
  const resultType = document.querySelector('#resultType');

  let inputTemp;
  let resultTemp;

  inputTemp = inputType.selectedIndex;
  resultTemp = resultType.selectedIndex;

  resultType.selectedIndex = inputTemp;
  inputType.selectedIndex = resultTemp;
});