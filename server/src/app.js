import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import router from './routes/index.js';
import db from './config/database.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import expressReactViews from 'express-react-views'; 

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Passport Google Strategy
passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Implement user finding/creating logic here
      console.log(profile);
      return done(null, profile);
    } catch (err) {
      return done(err, null);
    }
  }
));

// Serialize and Deserialize user
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Routes
app.use(router);

// Serve JSX files
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('views', path.join('D:/Project_Proposals/wellbeing_portal/client/src', 'Pages'));
app.set('view engine', 'jsx');
app.engine('jsx', expressReactViews.createEngine());

export default app;
