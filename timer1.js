const args = process.argv.splice(2);  //  pull entered arguments into array

for (let i of args) {
  let timeInSeconds = parseInt(i);
  
  if (timeInSeconds < 0 || Number.isNaN(timeInSeconds)) {  //  skip any negative, or non-number entries
    continue;
  }

  let delay = timeInSeconds * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay);
}


