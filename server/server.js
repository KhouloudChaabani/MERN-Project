const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

app.use(cors({credentials: true,origin: "http://localhost:3000"}),
express.json(),
express.urlencoded({extended:true}),
cookieParser(),
);

require('./config/mongoose.config');
require('./routes/user.route')(app)


const createError = require('http-errors');

const path = require('path');

const logger = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const hbs = require('hbs');
require('./helpers/hbs')(hbs);
require('dotenv').config();

const indexRouter = require('./routes'); 
 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs'); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
	secret: 'my_secret',
	resave: true,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}))
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/pay', indexRouter); 

 
app.use(function (req, res, next) {
    next(createError(404));
});
 
app.use(function (err, req, res, next) { 
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {}; 
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`) );