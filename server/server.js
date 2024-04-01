//LOAD ENV VAIABLES
if(process.env.NODE_ENV != 'production'){
    require("dotenv").config();
}

//IMPORT DEPENDENCIES
const express = require('express');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require('./config/connectToDb');
const notesController = require('./controllers/notesControllers');
const UserController = require('./controllers/usersControllers');
const requireAuth = require('./middleware/requireAuth')

//CREATE AN EXPRESS APP
const app = express();

//CONFIGURE EXPRESS APP
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: true,
    credentials: true
}));

//CONNECT TO DATABASE
connectToDb();

//ROUTING
app.post('/signup', UserController.signup);
app.post("/login", UserController.login);
app.get("/logout", UserController.logout);
app.get("/check-auth", requireAuth, UserController.checkAuth)

app.get('/notes', requireAuth, notesController.fetchNotes);
app.get('/notes/:id', requireAuth, notesController.fetchNote);
app.post('/notes', requireAuth, notesController.createNote);
app.put('/notes/:id', requireAuth, notesController.updateNote);
app.delete("/notes/:id", requireAuth, notesController.deleteNote);

//START OUR SERVER
app.listen(process.env.PORT);