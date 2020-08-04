const timeTable = [
  [ '9:00-17:00', '07:15-07:20' ], // 8h 5m
  [ '11:30-13:30', '14:00-16:00' ], // 2 + 2
  [ '8:00-16:00' ], // 8
  [ '11:00-23:50' ], // 12h: 50
  [ '03:00-23:10' ], // 20 h : 10
  [ '06:00-11:00' ], // 5
];

// 40h / tygodniowo?

const convertTimeRangeToMinutes = timeRange => timeRange
  .split('-')
  .map(hourWithMinutesAsString => hourWithMinutesAsString
    .split(':')
    .map(hourMinutePart => +hourMinutePart)
    .reduce((hours, minutes) => hours * 60 + minutes)
  )
  .reduce((startTimestampAsMinutes, endTimestampAsMinutes) => endTimestampAsMinutes - startTimestampAsMinutes);

console.log(timeTable[3][0]);
console.log(convertTimeRangeToMinutes(timeTable[3][0]));








