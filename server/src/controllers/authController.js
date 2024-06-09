import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { createUser, findUserByGoogleId } from '../models/userModel.js';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await findUserByGoogleId(profile.id);
        if (!user) {
          user = await createUser(profile.id, profile.displayName, profile.emails[0].value);
        }
        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await findUserById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

const authController = {
  googleAuth: passport.authenticate("google", { scope: ["profile", "email"] }),
  googleCallback: passport.authenticate("google", {
    failureRedirect: "/login",
    successRedirect: "/dashboard",
  }),
  logout: (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).send("Error logging out");
      }
      res.redirect("/");
    });
  },
};

export default authController;
