const moment = require('moment')
const chalk = require('chalk')

let now = moment()
let day = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
let dayOfYear = moment().format('DDDo')

let hours = moment().format('H')
let minutes = moment().format('m')
let seconds = moment().format('s')

secondsInDay = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)

let timezone = function() {
  if (moment().isDST() === true) {
    return chalk.green('is')
  } else return chalk.red('is not')
}

let leapyear = function() {
  if (moment().isLeapYear() === true) {
    return chalk.green('is')
  } else return chalk.red('is not')
}

console.log(`It is ${chalk.blue(day)}.`)
console.log(`It is the ${chalk.magenta(dayOfYear)} day of the year.`)
console.log(`It is ${chalk.cyan(secondsInDay)} seconds into the day.`)
console.log(`It ${timezone()} during Daylight Savings Time.`)
console.log(`It ${leapyear()} a leap year.`)
