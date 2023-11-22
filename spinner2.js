process.stdout.write('hello from spinner2.js... \rheyyy\n');
const spinnerChars = ['|', '/', '-', '\\', '|'];
let timeItv = 200;
for(const char of spinnerChars) {
  setTimeout(() =>{ 
    process.stdout.write('\r' + char + '   ');
  }, timeItv);
  timeItv += 200;
}