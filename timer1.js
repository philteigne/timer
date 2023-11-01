const args = process.argv.splice(2);  //  pull entered arguments into array

for (let i of args) {
  if (i < 0 || typeof i !== 'number') {  //  skip any negative, or non-number entries
    continue;
  }
  let delay = i * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay);
}


