const express = require('express');
const path = require('path');

const productRouter = require('./routers/ProductRouter');
const usersRouter = require("./routers/UserRouter");
const app = express();

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "public")));

app.use("/products", productRouter);
app.use("/users", usersRouter);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, "views", "error404.html"));
})

app.listen(3000, ()=>console.log("Listening on port 3000"));