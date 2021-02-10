const express       = require('express'),
      app           = express(),
      getWeather    = require( './controllers/get-weather' ),
      syncWeather   = require( './controllers/sync-weather' ),
      spotifyPlayer = require( './controllers/get-spotify-player' )

      
app.use( '/weather/v1/sync-weather', syncWeather )

app.use( '/weather/v1/get-weather', getWeather )

app.use( '/spotify/v1/player', spotifyPlayer )

app.listen( 3000, () => {
    console.log('server on port 3000');
})