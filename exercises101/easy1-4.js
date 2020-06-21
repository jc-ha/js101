// easy1-4.js

console.clear();
let rlSync = require('readline-sync');
const SQM_TO_SQFT = 10.7639;
let areaInM;
let areaInFt;

function invalidNumber(num) {
  return num.trim() === '' ||
         Number.isNaN(Number(num)) ||
         num <= 0;
}

let width = rlSync.question('Enter width please: '); 
while (invalidNumber(width)) {
  width = rlSync.question('Not a valid number. Please try again: ');
}

let length = rlSync.question('Enter length please: ');
while (invalidNumber(length)) {
  length = rlSync.question('Not a valid number. Please try again: ');
}

let measurementType = rlSync.question(
  'Are these measurements in meters or feet?\n1) Meters 2) Feet\n');
while (!['1', '2'].includes(measurementType)) {
  measurementType = rlSync.question(
    'You must select 1 for meters or 2 for feet.\n');
}

if (measurementType === '1') {
  areaInM = parseFloat(width) * parseFloat(length);
  areaInFt = areaInM * SQM_TO_SQFT;
  console.log(
  `The area of the room is ${areaInM.toFixed(2)} sqm (${areaInFt.toFixed(2)} sqft).`
  );
} else /*if (measurementType === '2')*/ {
  areaInFt = parseFloat(width) * parseFloat(length);
  areaInM = areaInFt / SQM_TO_SQFT;
  console.log(
  `The area of the room is ${areaInFt.toFixed(2)} sqft (${areaInM.toFixed(2)} sqm).`
  );
}
