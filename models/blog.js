const mongoose= require('mongoose');


const blogSchema= new mongoose.Schema({
    title:String,
    image:String,
    body:String,
    created: {type:Date,default:Date.now},//stores date when blog post was created, if no date, then default to current date
})

module.exports=mongoose.model('Blog', blogSchema);//creates model using the schema blogSchema
