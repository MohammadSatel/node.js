const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (number) => {
    console.log('You entered: ' + number);

    fs.writeFile('output.txt', number, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Number saved to output.txt');
    });

    rl.close();
});
