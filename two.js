const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your first name: ', (firstName) => {
    rl.question('Enter your last name: ', (lastName) => {
        const fullName = `${firstName} ${lastName}`;
        console.log(`Your full name is: ${fullName}`);

        fs.writeFile('fullName.txt', fullName, (err) => {
            if (err) {
                console.error('Error saving full name:', err);
            } else {
                console.log('Full name saved to fullName.txt');
            }
            rl.close();
        });
    });
});
