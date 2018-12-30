const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
    console.log("In the middleleware2");
    res.send('<html>Hello</html>');  
   });




   
module.exports = router;