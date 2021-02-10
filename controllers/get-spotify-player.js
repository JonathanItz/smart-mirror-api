const express       = require( 'express' ),
      router        = express.Router(),
      SpotifyWebApi = require('spotify-web-api-node')

router.use( ( req, res ) => {
    console.log('hi');
    res.send( 'done' )
})

module.exports = router