const nodemailer = require('nodemailer');

function sendEmail() {

    let transport = nodemailer.createTransport({
        host: 'in-v3.mailjet.com',
        port: 587,
        auth: {
            user: 'ff586614ece0c0035d77994550637bc6',
            pass: '01f9a15ca9bb288d7e3529137b532e01'
        }
    });

    const message = {
        from: 'rakimdevcraig@gmail.com', // Sender address
        to: 'rakimcraig617@gmail.com',         // List of recipients
        subject: 'Price for the macbook has dropped below your target!!', // Subject line
        text: 'Go and get your macbook at its new low price!!' // Plain text body
    };
    transport.sendMail(message, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info);
        }
    });
}
module.exports = sendEmail
