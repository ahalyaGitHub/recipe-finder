const express = require('express');
const router = express.Router();
const path = require('path');
const Meal = require('../models/meals');

// Serve the initial HTML page
router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Search meals by name
router.get('/meals', async (req, res) => {
    let query = {};
    if (req.query.name) {
        query.name = { $regex: new RegExp(req.query.name, 'i') }; // Case-insensitive search
    }

    try {
        const meals = await Meal.find(query);
        res.json(meals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a meal by ID
router.get('/meals/:id', async (req, res) => {
    try {
        const meal = await Meal.findById(req.params.id);
        if (!meal) return res.status(404).json({ message: 'Meal not found' });
        res.json(meal);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
