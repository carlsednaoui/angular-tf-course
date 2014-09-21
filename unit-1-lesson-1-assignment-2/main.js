function calculate(e) {
  
  // get vars for convenience
  var numberOne = parseInt(document.getElementById('number-one').value);
  var numberTwo = parseInt(document.getElementById('number-two').value);

  // int check
  if (isNaN(numberOne) || isNaN(numberTwo)) {
    return;
  }

  var task = e.currentTarget.attributes['data-operation'].value;
  var taskSymbol;
  var operation;

  if (task === 'add') {
    taskSymbol = '+'
    operation = numberOne + numberTwo;
  } else {
    taskSymbol = '-'
    operation = numberOne - numberTwo;
  }

  var result = [
    numberOne,
    taskSymbol,
    numberTwo,
    '=',
    operation].join(' ');

  // add response to DOM
  document.getElementById('result').innerHTML = result;

  // prevent form submission
  e.preventDefault();
  e.stopPropagation();

}

// attach listeners
document.getElementById('add-numbers').addEventListener('click', calculate, false);
document.getElementById('subtract-numbers').addEventListener('click', calculate, false);
