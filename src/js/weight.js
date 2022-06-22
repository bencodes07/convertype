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


// Calculating units of weight

const btn = document.getElementById('resultBtn');
const resultValue = document.querySelector('.resultValue');

btn.addEventListener('click', calcWeight);

function calcWeight() {
  let input = document.getElementById('input').value;
  let inputType = document.getElementById('inputType').value;
  let resultType = document.getElementById('resultType').value;
  let resultP = document.querySelector('.resultP');

  if (input === '') return alert('Please enter a value');

  if (inputType == 'Tonne') {
    // Centimeter
    if(resultType == 'Tonne') {
      if(input > 1) {
        resultValue.innerText = input + " " + resultType + "s";
        resultP.innerText = input + " " + inputType + "s" + " =";
      } else {
        resultValue.innerText = input + " " + resultType;
        resultP.innerText = input + " " + inputType + " =";
      }
    } 
    // Meter
    else if(resultType == 'Kilogram') {
      let calcResult = input * 1000;
      if(calcResult > 1) {
        resultValue.innerText = calcResult + " " + resultType + "s";
        resultP.innerText = input + " " + inputType + "s" + " =";
      } else {
        resultValue.innerText = calcResult + " " + resultType;
        resultP.innerText = input + " " + inputType + " =";
      }
    }
    // Kilometer
    else if(resultType == 'Gram') {
      let calcResult = input * 1000000;
      if(calcResult > 1) {
        resultValue.innerText = calcResult + " " + resultType + "s";
        resultP.innerText = input + " " + inputType + "s" + " =";
      } else {
        resultValue.innerText = calcResult + " " + resultType;
        resultP.innerText = input + " " + inputType + " =";
      }
    }
    // Yards
    else if(resultType == 'Milligram') {
      let calcResult = input * 1000000000;
      if(calcResult > 1) {
        resultValue.innerText = calcResult + " " + resultType + "s";
        resultP.innerText = input + " " + inputType + "s" + " =";
      } else {
        resultValue.innerText = calcResult + " " + resultType;
        resultP.innerText = input + " " + inputType + " =";
      }
    }
    // Miles
    else if(resultType == 'Pound') {
      let calcResult = input * 2204.62;
      if(calcResult > 1) {
        resultValue.innerText = calcResult + " " + resultType + "s";
        resultP.innerText = input + " " + inputType + "s" + " =";
      } else {
        resultValue.innerText = calcResult + " " + resultType;
        resultP.innerText = input + " " + inputType + " =";
      }
    }
    // Foot 
    else if(resultType == 'Ounce') {
      let calcResult = input * 35274;
      if(calcResult > 1) {
        resultValue.innerText = calcResult + " " + resultType + "s";
        resultP.innerText = input + " " + inputType + "s" + " =";
      } else {
        resultValue.innerText = calcResult + " " + resultType;
        resultP.innerText = input + " " + inputType + " =";
      }
    }

  } else if (inputType === 'Kilogram') {
      // Centimeter
      if(resultType == 'Tonne') {
        let calcResult = input / 1000;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Meter
      else if(resultType == 'Kilogram') {
        if(input > 1) {
          resultValue.innerText = input + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = input + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Kilometer
      else if(resultType == 'Gram') {
        let calcResult = input * 1000;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Yards
      else if(resultType == 'Milligram') {
        let calcResult = input * 1000000;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Miles 
      else if(resultType == 'Pound') {
        let calcResult = input * 2.205;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Foot
      else if(resultType == 'Ounce') {
        let calcResult = input * 35.274;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }

  } else if (inputType === 'Gram') {
      // Centimeter
      if(resultType == 'Tonne') {
        let calcResult = input / 1000000;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Meter
      else if(resultType == 'Kilogram') {
        let calcResult = input / 1000;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Kilometer
      else if(resultType == 'Gram') {
        if(input > 1) {
          resultValue.innerText = input + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = input + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Yards
      else if(resultType == 'Milligram') {
        let calcResult = input * 1000;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Miles
      else if(resultType == 'Pound') {
        let calcResult = input / 454;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Foot
      else if(resultType == 'Ounce') {
        let calcResult = input / 28.35;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
  } else if (inputType === 'Milligram') {
      // Centimeter
      if(resultType == 'Tonne') {
        let calcResult = input / 1000000000;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Meter
      else if(resultType == 'Kilogram') {
        let calcResult = input / 1000000;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Kilometer
      else if(resultType == 'Gram') {
        let calcResult = input / 1000;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Yards
      else if(resultType == 'Milligram') {
        if(input > 1) {
          resultValue.innerText = input + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = input + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Miles
      else if(resultType == 'Pound') {
        let calcResult = input / 453592;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Foot
      else if(resultType == 'Ounce') {
        let calcResult = input / 28350;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
  } else if (inputType === 'Pound') {
      // Centimeter
      if(resultType == 'Tonne') {
        let calcResult = input / 2205;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Meter
      else if(resultType == 'Kilogram') {
        let calcResult = input / 2.205;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Kilometer
      else if(resultType == 'Gram') {
        let calcResult = input * 454;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Yards
      else if(resultType == 'Milligram') {
        let calcResult = input * 453592;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Miles
      else if(resultType == 'Pound') {
        if(input > 1) {
          resultValue.innerText = input + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = input + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Foot
      else if(resultType == 'Ounce') {
        let calcResult = input * 16;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
  } else if (inputType === 'Ounce') {
      // Centimeter
      if(resultType == 'Tonne') {
        let calcResult = input / 35274;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Meter
      else if(resultType == 'Kilogram') {
        let calcResult = input / 35.274;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Kilometer
      else if(resultType == 'Gram') {
        let calcResult = input * 28.35;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Yards
      else if(resultType == 'Milligram') {
        let calcResult = input * 28350;
        if(calcResult > 1) {
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Miles
      else if(resultType == 'Pound') {
        let calcResult = input / 16;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Foot
      else if(resultType == 'Ounce') {
        if(input > 1) {
          resultValue.innerText = input + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = input + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
  };
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