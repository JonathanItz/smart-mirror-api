const mongoose = require( '../config/database' )

const Schema = mongoose.Schema;

// Weather Scheme
const WeatherScheme = new Schema({
    weather: Array,
    date_updated: Date
});

module.exports = mongoose.model( 'Weather', WeatherScheme ); 