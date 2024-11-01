const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./routes/router'); // Adjust the path if needed

const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mealdb', {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to the database');
});

// Use the router
app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
