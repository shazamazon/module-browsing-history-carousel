const csvToJson = require('convert-csv-to-json');

let fileInputName = 'ShazamazonData.csv'; 
let fileOutputName = 'data.json';

csvToJson.formatValueByType().generateJsonFileFromCsv(fileInputName, fileOutputName);

// console.log(csvToJson.formatValueByType(fileInputName);

