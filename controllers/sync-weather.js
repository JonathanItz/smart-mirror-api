const express       = require( 'express' ),
      router        = express.Router(),
      axios         = require( 'axios' ),
      WeatherModel  = require( '../models/weather' ),
      fs            = require('fs'),
      path          = require('path');
      keys          = JSON.parse( fs.readFileSync( path.join( __dirname, '../keys.json' ), 'utf8' ) )

router.use ( ( req, res ) => {
    const key = keys.weather

    const endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=41.5929&lon=-93.6063&units=imperial&appid=${ key }&exclude=minutely,hourly`

    axios.get( endpoint )
        .then(function ( { data } ) {
            const now = new Date();

            // Create an instance of model WeatherModel
            var WeatherInstance = new WeatherModel( { weather: data, date_updated: now } );

            // Save the new model instance, passing a callback
            WeatherInstance.save( function ( err ) {
                if( err ) return res.json( { success: false } )
                return res.json( { success: true, data } )
            });
        })
        .catch( function( err ) {
            console.log('err', err);
        })
})

module.exports = router