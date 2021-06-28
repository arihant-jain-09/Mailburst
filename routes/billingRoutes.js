const keys=require('../config/keys');
const stripe=require('stripe')(keys.stripeSecretKey);
const mongoose=require('mongoose');
// const User=mongoose.model('users');
const requireLogin=require('../middlewares/requireLogin');
module.exports=(app)=>{
    app.post('/api/stripe',requireLogin, async(req,res)=>{
        
        console.log('req: ',req.body);
        const {id}=req.body;
        const charge=await stripe.charges.create({
            amount:500,
            currency:'INR',
            description:'50 for 5 credits',
            source:id,
        });
        // const results=await User.updateOne({googleId:req.user.googleId},{credits:(req.user.credits + (charge.amount / 100))});
        // console.log(results);
        req.user.credits = req.user.credits+5;
        const user=await req.user.save();
        res.send(user);
    })
} 