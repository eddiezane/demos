var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

sendgrid.send({
  to: 'eddiezane@sendgrid.com',
  from: 'eddie.zaneski@sendgrid.com',
  subject: 'HackTech Yo!',
  text: 'Sending emails for teh lulz'
}, function(err, json) {
  if (err) { return console.log(err); }
  console.log(json);
});
