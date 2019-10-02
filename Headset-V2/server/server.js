'use strict';
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is running');
    console.log(`Server listening on port ${port}`)
});

// Below is for axios and mail sender

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/form', (req, res) => {
        // async..await is not allowed in global scope, must use a wrapper
async function main() {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.icallinc.com',
        port: 25,
        secure: false, // true for 465, false for other ports
        auth: false
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Wesley Seitz" <wseitz@west.com>', // sender address
        to: 'wseitz@west.com', // list of receivers
        subject: 'Cisco Headset Order Form', // Subject line
        // text: req.body.message, // plain text body
        html: `
        <h3>Cisco Headset Order Form</h3>
            <p>First Name: ${req.body.fname}<br/>
            Last Name: ${req.body.lname}<br/>
            Email: ${req.body.email}<br/>
            Phone: ${req.body.phone}<br/>
            PO Number: ${req.body.ponum}<br/>
            Headset 531: ${req.body.prod531}<br/>
            Headset 532: ${req.body.prod532}<br/>
            Headset 561 standard Base: ${req.body.prod561sb}<br/>
            Headset 561 Multi Base: ${req.body.prod561mb}<br/>
            Headset : ${req.body.prod562sb}<br/>
            Headset : ${req.body.prod562mb}<br/>
            Total Count: ${req.body.totalcount}</p>
        <p>notes:<br/>${req.body.note}</p>
        ` // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

main().catch(console.error);

    })