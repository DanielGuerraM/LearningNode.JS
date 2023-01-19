const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'danielguerracode@gmail.com',
        pass: 'cahnybvmnprqnglh' 
    }
});

var mailOptions = {
    from: 'danielguerracode@gmail.com',
    to: 'daniguerra805@gmail.com, 1022002619.dc@gmail.com',
    subject: 'Sending email using Node.js',
    html: '<h1>Hi</h1><p>That was easy!</p>' 
};

transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent: ' + info.response);
    }
});