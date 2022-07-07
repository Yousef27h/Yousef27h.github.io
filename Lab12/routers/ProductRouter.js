const express = require('express');
const path = require('path');

const router = express.Router();

router.get("/add",(req,res,next)=>{

    res.sendFile(path.join(__dirname, '..', 'views','productsPage.html'));
})

router.post("/add",(req,res,next)=>{
    console.log(req.body);
    res.send("Item has been added!")
})

module.exports = router;
