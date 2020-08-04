const timeTable = [
  ['9:00-17:00'], // 8
  ['11:30-13:30', '14:00-16:00'], // 2 + 2
  ['8:00-16:00'], // 8
  ['11:00-23:50'], // 12h: 50
  ['03:00-23:10'], // 20 h : 10
  ['06:00-11:00'], // 5 
];

// 40h / tygodniowo?

const convertTimeRangeToMinutes = timeRange => timeRange.split('-').map(hourWithMinutesAsString => {
  const hourWithMinutes = hourWithMinutesAsString.split(':').map(hourMinutePart => {
    return parseInt(hourMinutePart);
  }).reduce((accumulator, currentValue) => {
    return accumulator * 60 + currentValue;
  });
  return hourWithMinutes;
}).reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  return currentValue-accumulator;
} );

console.log(timeTable[3][0]);
console.log(convertTimeRangeToMinutes(timeTable[3][0]));








