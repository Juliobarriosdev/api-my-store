const nodemailer = require("nodemailer");
const { config } = require('./config/config')

// async..await is not allowed in global scope, must use a wrapper
async function mailSend() {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: config.emailFrom,
      pass: config.emailKeyPass
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: config.emailFrom, // sender address
    to: "julio.barrios.ml2@gmail.com", // list of receivers
    subject: "Hola", // Subject line
    text: "Hola??", // plain text body
    html: "<b>Hola??</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

mailSend();
