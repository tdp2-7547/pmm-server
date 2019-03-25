const express = require("express");
const app = express();
const PORT=3000;

app.get("/home", (req,res) => {
    console.log("sending books");
    res.send("Hello World !!!")
});

app.listen(PORT, ()=> {
    console.log("Listening to the port", PORT);
})

process.on('uncaughtException', (err) => {
    console.log("========Uncaught exception========");
    console.log(err);
});

module.exports = app;
