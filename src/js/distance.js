const result = document.querySelector('.result');

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

  if (inputType == 'Centimeter') {
    // Centimeter
    if(resultType == 'Centimeter') {
      if(input > 1) {
        resultValue.innerText = input + " " + resultType + "s";
        resultP.innerText = input + " " + inputType + "s" + " =";
      } else {
        resultValue.innerText = input + " " + resultType;
        resultP.innerText = input + " " + inputType + " =";
      }
    } 
    // Meter
    else if(resultType == 'Meter') {
      let calcResult = input / 100;
      if(calcResult > 1) {
        resultValue.innerText = calcResult + " " + resultType + "s";
        resultP.innerText = input + " " + inputType + "s" + " =";
      } else {
        resultValue.innerText = calcResult + " " + resultType;
        resultP.innerText = input + " " + inputType + " =";
      }

    }
    // Kilometer
    else if(resultType == 'Kilometer') {
      let calcResult = input / 100000;
      if(calcResult > 1) {
        resultValue.innerText = calcResult + " " + resultType + "s";
        resultP.innerText = input + " " + inputType + "s" + " =";
      } else {
        resultValue.innerText = calcResult + " " + resultType;
        resultP.innerText = input + " " + inputType + " =";
      }
    }
    // Yards
    else if(resultType == 'Yard') {
      let calcResult = input / 91.44;
      if(calcResult > 1) {
        resultValue.innerText = calcResult + " " + resultType + "s";
        resultP.innerText = input + " " + inputType + "s" + " =";
      } else {
        resultValue.innerText = calcResult + " " + resultType;
        resultP.innerText = input + " " + inputType + " =";
      }
    }
    // Miles
    else if(resultType == 'Mile') {
      let calcResult = input / 160934.4;
      if(calcResult > 1) {
        resultValue.innerText = calcResult + " " + resultType + "s";
        resultP.innerText = input + " " + inputType + "s" + " =";
      } else {
        resultValue.innerText = calcResult + " " + resultType;
        resultP.innerText = input + " " + inputType + " =";
      }
    }
    // Foot 
    else if(resultType == 'Foot') {
      let calcResult = input / 30.48;
      if(calcResult > 1) {
        resultValue.innerText = calcResult + " " + resultType + "s";
        resultP.innerText = input + " " + inputType + "s" + " =";
      } else {
        resultValue.innerText = calcResult + " " + resultType;
        resultP.innerText = input + " " + inputType + " =";
      }
    }
    // Inch
    else if(resultType == 'Inch') {
      let calcResult = input / 2.54;
      if(calcResult > 1) {
        resultValue.innerText = calcResult + " " + resultType + "s";
        resultP.innerText = input + " " + inputType + "s" + " =";
      } else {
        resultValue.innerText = calcResult + " " + resultType;
        resultP.innerText = input + " " + inputType + " =";
      }
    }

  } else if (inputType === 'Meter') {
      // Centimeter
      if(resultType == 'Centimeter') {
        let calcResult = input * 100;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Meter
      else if(resultType == 'Meter') {
        if(input > 1) {
          resultValue.innerText = input + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = input + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Kilometer
      else if(resultType == 'Kilometer') {
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
      else if(resultType == 'Yard') {
        let calcResult = input / 0.9144;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Miles 
      else if(resultType == 'Mile') {
        let calcResult = input / 1609.34;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Foot
      else if(resultType == 'Foot') {
        let calcResult = input / 0.3048;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Inch
      else if(resultType == 'Inch') {
        let calcResult = input / 0.0254;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }

  } else if (inputType === 'Kilometer') {
      // Centimeter
      if(resultType == 'Centimeter') {
        let calcResult = input * 100000;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Meter
      else if(resultType == 'Meter') {
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
      else if(resultType == 'Kilometer') {
        if(input > 1) {
          resultValue.innerText = input + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = input + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Yards
      else if(resultType == 'Yard') {
        let calcResult = input * 1093.61;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Miles
      else if(resultType == 'Mile') {
        let calcResult = input / 1.60934;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Foot
      else if(resultType == 'Foot') {
        let calcResult = input * 3280.84;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Inch
      else if(resultType == 'Inch') {
        let calcResult = input * 39370.1;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
  } else if (inputType === 'Yard') {
      // Centimeter
      if(resultType == 'Centimeter') {
        let calcResult = input * 91.44;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Meter
      else if(resultType == 'Meter') {
        let calcResult = input * 0.9144;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Kilometer
      else if(resultType == 'Kilometer') {
        let calcResult = input / 1093.61;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Yards
      else if(resultType == 'Yard') {
        if(input > 1) {
          resultValue.innerText = input + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = input + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Miles
      else if(resultType == 'Mile') {
        let calcResult = input / 1760;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Foot
      else if(resultType == 'Foot') {
        let calcResult = input * 3;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Inch
      else if(resultType == 'Inch') {
        let calcResult = input * 36;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
  } else if (inputType === 'Mile') {
      // Centimeter
      if(resultType == 'Centimeter') {
        let calcResult = input * 160934;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Meter
      else if(resultType == 'Meter') {
        let calcResult = input * 1609.34;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Kilometer
      else if(resultType == 'Kilometer') {
        let calcResult = input / 0.62137;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Yards
      else if(resultType == 'Yard') {
        let calcResult = input * 1760;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Miles
      else if(resultType == 'Mile') {
        if(input > 1) {
          resultValue.innerText = input + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = input + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Foot
      else if(resultType == 'Foot') {
        let calcResult = input * 5280;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Inch
      else if(resultType == 'Inch') {
        let calcResult = input * 63360;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }

  } else if (inputType === 'Foot') {
      // Centimeter
      if(resultType == 'Centimeter') {
        let calcResult = input * 3048;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Meter
      else if(resultType == 'Meter') {
        let calcResult = input * 0.3048;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Kilometer
      else if(resultType == 'Kilometer') {
        let calcResult = input / 3280.84;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Yards
      else if(resultType == 'Yard') {
        let calcResult = input * 3;
        if(calcResult > 1) {
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Miles
      else if(resultType == 'Mile') {
        let calcResult = input / 5280;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Foot
      else if(resultType == 'Foot') {
        if(input > 1) {
          resultValue.innerText = input + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = input + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Inch
      else if(resultType == 'Inch') {
        let calcResult = input * 12;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
  } else if (inputType === 'Inch') {
      // Centimeter
      if(resultType == 'Centimeter') {
        let calcResult = input * 2.54;
        if(calcResult > 1) {
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Meter
      else if(resultType == 'Meter') {
        let calcResult = input * 0.0254;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Kilometer
      else if(resultType == 'Kilometer') {
        let calcResult = input / 39370;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Yards
      else if(resultType == 'Yard') {
        let calcResult = input * 0.0277778;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Miles
      else if(resultType == 'Mile') {
        let calcResult = input / 63360;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      } 
      // Foot
      else if(resultType == 'Foot') {
        let calcResult = input * 0.083333;
        if(calcResult > 1) {
          resultValue.innerText = calcResult + " " + resultType + "s";
          resultP.innerText = input + " " + inputType + "s" + " =";
        } else {
          resultValue.innerText = calcResult + " " + resultType;
          resultP.innerText = input + " " + inputType + " =";
        }
      }
      // Inch
      else if(resultType == 'Inch') {
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