const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

// Returns true if input is considered valid, false otherwise
// valid input [b, num > 0]
const isValidInput = function(input) {
  if (input === 'b') {
    return true;
  }

  let validNum = parseInt(input);

  if (validNum > 0) {  //  skip any negative, or non-number entries
    return true;
  }

  return false;
};

// Returns a delay timer given a number inputted
// input 'b' is equal to 0 seconds
// all other numbers are multiplied byt 1000 to convert milliseconds to seconds
const setTimer = function(number) {

  if (number === 'b') {
    return 0;
  }

  let timeInSeconds = parseInt(number);

  let delay = timeInSeconds * 1000;

  return delay;
};

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (input) => {
  if (input === '\u0003') { //  handle ctrl + C by logging exit message, and exiting
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
  if (isValidInput(input)) {
    let delay = setTimer(input);
    setTimeout(() => {
      process.stdout.write('\x07'); //  after specified delay, ring
    }, delay);
  }
});
