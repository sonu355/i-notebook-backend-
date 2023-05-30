const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
    
    res.json([]) //The res.json method serializes the JavaScript object into JSON format and sends it as the response to the client making the HTTP request.
})

module.exports = router