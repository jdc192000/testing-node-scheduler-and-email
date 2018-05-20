var jobSchedule = (require('./jobSchedule.js')).rule;

const sendmail = require('sendmail')();

var foo = function () {
    console.log("This output is from test.js!  It workes! " + jobSchedule.second);

    console.log("texting");

    sendmail({
        from: 'no_reply@KUbootCamp.com',
        to: '9136602900@vtext.com',
        subject: '',
        html: 'Mail of test sendmail',
    }, function (err, reply) {
    });
}

exports.testFunction = foo;