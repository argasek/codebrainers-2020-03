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


const verifyIfTimeTableContainsNoMoreThan40h = () => {
  let allMinutesPerDayArray=[]
  for(i = 0; i<timeTable.length; i++){
  for(j = 0; j<timeTable[i].length; j++){
    allMinutesPerDayArray.push(convertTimeRangeToMinutes(timeTable[i][j]))
  }
}

  const allMinutes = allMinutesPerDayArray.reduce((o,b) => o+b);
  const allHours = Math.round(allMinutes/60)

  return allHours>40? `Your working time is too long, it is ${allHours} hours!`:
   `Your working time is fine, it is ${allHours} hours`;
}


console.log(verifyIfTimeTableContainsNoMoreThan40h())

// console.log(timeTable[0][1]);
// console.log(convertTimeRangeToMinutes(timeTable[0][1]));








