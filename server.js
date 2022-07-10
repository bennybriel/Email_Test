const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')
const username ="bennybriel@gmail.com";
const password ="lppabgfyghxyrmar";
const recepient ="olatemiji@gmail.com";
// initialize nodemailer
var transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth:{
            user: username,
            pass: password
        }
    }
);

// point to the template folder
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./views/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
};

// use a template file with nodemailer
transporter.use('compile', hbs(handlebarOptions))


var mailOptions = {
    from: '"Bennybriel" <bennybriel@gmail.com>', // sender address
    to: recepient, // list of receivers
    subject: 'Welcome!',
    template: 'email', // the name of the template file i.e email.handlebars
    context:{
        name: "Bennybriel Technologies", // replace {{name}} with Adebola
        company: 'Company' // replace {{company}} with My Company
    }
};

// trigger the sending of the E-mail
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});