const fs = require('fs');
const csv = require('csv-parser');

const filePath = '/path/to/your/csv/file.csv';

fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => {
        console.log(data);
    })
    .on('end', () => {
        console.log('CSV file successfully processed.');
    });
