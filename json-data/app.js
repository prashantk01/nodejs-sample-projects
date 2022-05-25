const fs = require('fs')

// read data 
const databuffer = fs.readFileSync('data.json');

// data buffer
console.log(databuffer);

//convert data into string to read
const dataString = databuffer.toString();
console.log(dataString);
console.log(dataString.book);

// make data object to read properties

const data = JSON.parse(dataString);
console.log(data);
console.log(data.book);

data.book = "book-2";

const newdataString = JSON.stringify(data);
fs.writeFileSync('data.json', newdataString);
