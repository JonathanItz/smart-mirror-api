const express = require( 'express' ),
      router = express.Router(),
      WeatherModel = require( '../models/weather' ),
      axios = require( 'axios' )

router.use( ( req, res ) => {
    const isProduction = req.headers.host === 'localhost:3000' ?false:true
    const protocol = req.protocol,
          host     = req.headers.host,
          route    = 'weather/v1/sync-weather',
          endPoint = `${ protocol }://${ host }/${ route }`;
    const apiEndpoint = endPoint ;

    WeatherModel.findOne().sort( { date_updated: -1 } ).exec( {}, ( err, data ) => {
        const dateUpdated = new Date( data.date_updated )
        const oneHour     = 60 * 60 * 1000
        const oneHourAgo  = new Date() - oneHour

        // Check if last call was an hour ago. Update database if one hour has passed.
        if( oneHourAgo > dateUpdated ) {
            // Fetch new data
            axios.get( apiEndpoint )
                .then(function ( { data } ) {
                    console.log('fetched data from api');
                    return res.json( data )
                })
        } else {
            // Use current data
            console.log('fetched data from database');
            return res.json( data )
        }
    });
})

module.exports = router