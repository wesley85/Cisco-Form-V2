const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const http = require('http');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  const fromEmail = 'Wesley Seitz';
  const toEmail = 'wseitz@west.com';

  const transporter = nodemailer.createTransport({
    host: 'smtp.icallinc.com',
    port: 25
  });
   transporter.sendMail({
    from: fromEmail, // sender address
    to: toEmail, // list of receivers
    subject: 'Cisco Headset Order Form', // Subject line
    // text: 'change to what you would like to use', // plain text body
    html: `
    <h3>Cisco Headset Order Form</h3>
        <p>First Name: ${req.body.fname}<br/>
        Last Name: ${req.body.lname}<br/>
        Email: ${req.body.email}<br/>
        Phone: ${req.body.phone}<br/>
        PO Number: ${req.body.ponum}<br/>
        Headset 531: ${req.body.prod531}<br/>
        Headset 532: ${req.body.prod532}<br/>
        Headset 561 Standard Base: ${req.body.prod561sb}<br/>
        Headset 561 Multi Base: ${req.body.prod561mb}<br/>
        Headset 562 Standard Base: ${req.body.prod562sb}<br/>
        Headset 562 Multi Base: ${req.body.prod562mb}<br/>
        Total Count: ${req.body.totalcount}</p>
    <p>notes:<br/>${req.body.note}</p>
    ` // html body
  });
  const response = {}
  response.status = 200
  if (response.status === 200) {
    actions.setStatus( {success: 'Email sent !'} )
    actions.resetForm()
  }
}).listen(port);
console.log(`Server listening on port ${port}`);