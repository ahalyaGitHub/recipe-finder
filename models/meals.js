const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    name: { type: String, required: true },
    area: { type: String, required: true },
    instructions: { type: String, required: true },
    thumbnail: { type: String, required: true },
    video: { type: String, required: true },
    ingredients: { type: [String], required: true } // Add ingredients field as an array of strings
});

const Meal = mongoose.model('Meal', mealSchema);
module.exports = Meal;
