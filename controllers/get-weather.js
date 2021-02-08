const express = require( 'express' ),
      router = express.Router()

router.use( ( req, res ) => {
    res.json( [ 'Endpoint to get weather' ] )
})

module.exports = router