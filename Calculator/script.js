let result = document.getElementById('result');

function getResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    alert('Invalid Calculation');
    result.value = '';
  }
}