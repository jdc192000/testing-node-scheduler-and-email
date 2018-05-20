console.log("starting")

var schedule = require('node-schedule');

var jobSchedule = (require('./jobSchedule.js')).rule;

var test = require('./test.js').testFunction;

var job = schedule.scheduleJob(jobSchedule, function () {

  var d = new Date();

  console.log('Running testFunction per schedule in jobSchedule.js!');

  test();

  console.log("============");
  console.log(d);
  console.log("jobScheduler");
  console.log("============");
  // console.log(jobSchedule);

});
