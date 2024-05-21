const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const nodemailerSendgrid = require("nodemailer-sendgrid");
const mailTransport = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: functions.config().sendgrid.apikey,
  })
);

exports = module.exports = functions.https.onCall((data, context) => {
  const mailOptions = {
    from: data.from,
    to: data.to,
    replyTo: data.email,
    subject: "BrendanEnglish.com Contact",
    html:
      '<div style="padding: 1.5em 3em; background: #f9f9f9; border-left: 3px solid #FE5F55;"><h1 style="color: #1b8ab3; font-weight: 300;">BrendanEnglish.com Contact</h1><h4 style="color: #003A77; font-weight: 400;"><strong>From:</strong> ' +
      data.name +
      ' - <a href="mailto:' +
      data.email +
      '">' +
      data.email +
      "</a></h4><p><strong>Message:</strong><br />" +
      data.message +
      "</p></div>",
  };

  return mailTransport
    .sendMail(mailOptions)
    .then(() => {
      return { success: true };
    })
    .catch((error) => {
      console.error("There was an error while sending the email: ", error);
      return { success: false };
    });
});
