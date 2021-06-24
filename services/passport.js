const passport = require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const SpotifyStrategy=require('passport-spotify').Strategy;
const keys=require('../config/keys');
const mongoose=require('mongoose');
const User=mongoose.model('users');

passport.serializeUser((user,done)=>{
    done(null,user.id);
})

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        console.log(user);
        done(null,user);
    }).catch((err)=>console.log(err))
})
//google
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL:"/auth/google/callback"
},(accessToken,refreshToken,profile,done)=>{
    User.findOne({googleId:profile.id}).then((results)=>{
        if(results) {
            done(null,results)
        }
        else {
            new User({googleId:profile.id}).save()
            .then((user)=>{
                console.log(user);
                done(null,user)
            })
            .catch((err)=>{console.log(err)})
        }
    }).catch((err)=>{console.log(err)})
}));

//spotify
passport.use(new SpotifyStrategy({
    clientID: keys.spotifyClientID,
    clientSecret: keys.spotifyClientSecret,
    callbackURL:"/auth/spotify/callback"
},(accessToken,refreshToken,expire,profile,done)=>{
    console.log(profile);
    User.findOne({spotifyId:profile.id}).then((results)=>{
        if(results) {
            done(null,results)
        }
        else {
            new User({spotifyId:profile.id}).save()
            .then((user)=>{
                console.log(user);
                done(null,user)
            })
            .catch((err)=>{console.log(err)})
        }
    }).catch((err)=>{console.log(err)})
}));
