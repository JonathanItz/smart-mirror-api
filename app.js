const express = require('express'),
      app = express(),
      getWeather = require( './controllers/get-weather' ),
      syncWeather = require( './controllers/sync-weather' )

      
app.use( '/weather/v1/sync-weather', syncWeather )

app.use( '/weather/v1/get-weather', getWeather )


app.listen( 3000, () => {
    console.log('server on port 3000');
})