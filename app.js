let express = require('express'),
    bodyParser = require('body-parser');

// import mongoose from 'mongoose';
// import routes from './routes/index.js';

const app = express();

/**
 * Connect to the database
 */
// mongoose.connect('mongodb://localhost');

/**
 * Middleware
 */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// catch 400
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(400).send(`Error: ${res.originUrl} not found`);
    next();
});

// catch 500
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send(`Error: ${err}`);
    next();
});

app.route('/notes').get('notebook');

/**
 * Register the routes
 */

// routes(app);

module.exports = app;