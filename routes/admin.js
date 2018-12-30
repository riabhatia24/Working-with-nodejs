const express = require('express');

const router = express.Router();

router.use('/add-product', (req, res, next)=> {
    console.log("In the middleleware");
    res.send('<form action ="/product" method="POST"><input type text="text" name="title"><button type ="submit">Set</button></form>');
     
   });
  
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/'); 
     
     
   });


module.exports = router;