const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    googleId:String,
    spotifyId:String,
})
mongoose.model('users',userSchema);