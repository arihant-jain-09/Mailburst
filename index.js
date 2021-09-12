const express=require('express');
const mongoose=require('mongoose');
const cookieSession=require('cookie-session');
const passport=require('passport');
const keys=require('./config/keys');
const cors=require('cors');
require('./models/User');
require('./models/Survey');
require('./services/passport');
// mongodb://127.0.0.1:27017/emaily

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(keys.sendGridKey);
// const msg = {
//   to: 'jain.ari2000@gmail.com', // Change to your recipient
//   from: '2019213@iiitdmj.ac.in', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })

const serverStatus = () => {
  return { 
     state: 'up', 
     dbState: mongoose.STATES[mongoose.connection.readyState] 
  }
};

mongoose.connect(keys.mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true },()=>{console.log('connected to mongodb');})
console.log(mongoose.connection.readyState);
const app=express();
app.use(cookieSession({
    maxAge:30 * 24 * 60 * 60 *1000,
    keys: [keys.cookieKey],
    // sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax', // must be 'none' to enable cross-site delivery
    // secure: process.env.NODE_ENV === "production", // must be true if sameSite='none'
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV ==='production'){
  app.use(express.static('client/build'));
  const path=require('path');
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}
const PORT=process.env.PORT || 5000;
app.listen(PORT);

app.use('/api/uptime', require('express-healthcheck')({
  healthy: serverStatus
}));


