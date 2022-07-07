const express = require('express');
const  path = require('path');

const router = express.Router();

router.get("/add", (req, res, next)=>{
    res.sendFile(path.join(__dirname, "..", "views", "usersForm.html"));
});

router.post("/add", (req, res)=>{
    res.send("User has been added!")
})

module.exports = router;