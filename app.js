const express = require("express");
const path = require('path');


const app = new express();

// ================================================================
// APP UTILITIES SETUP:
// ================================================================
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// ================================================================
// Serve static assets and use routes:
// ================================================================
app.use("/js/", express.static(path.join(__dirname, 'public', 'js')));
app.use("/img/", express.static(path.join(__dirname, 'public', 'img')));
app.use("/css/", express.static(path.join(__dirname, 'public', 'css')));
app.use("/docs/", express.static(path.join(__dirname, 'public', 'docs')));
// Use routes:
//-----------------------------------------------------------------
app.use(require('./routes/index'));


// ================================================================
// START EXPRESS APP:
// ================================================================
const port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log(`Server is running at Port: ${port}`);
});