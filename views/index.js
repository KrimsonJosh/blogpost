import express from "express";
import bodyParser from "body-parser";


const app=express()
const port=3000;

app.use(bodyParser.urlencoded({extended: True}));


app.get("/" , (req,res) =>  {
    res.render("index.ejs");

})


app.post("/blogs", (req,res) =>{
    res.render("index.ejs");

})


app.listen(port,  () => {
    console.log(`Listening on port ${port}.`);
})