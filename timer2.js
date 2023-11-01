const readline = require('readline');


const setTimer = function(number) {

  if (number === 'b') {
    return 0;
  }

  let timeInSeconds = parseInt(number);

  if (timeInSeconds < 0 || timeInSeconds === NaN) {  //  skip any negative, or non-number entries
    return;
  }

  let delay = timeInSeconds * 1000;

  return delay;
};


const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.on('line', (input) => {
  let delay = setTimer(input);
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay);
});