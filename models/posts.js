const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema  =  new Schema({
    
   postId:{
      type: String,
      unique: true,
      required:true,
      maxlenght: 10}, 

title: {
   type: String,
   required:true,
   maxlenght: 10}, 

content:{
   type: String,
   required:true}, 

});
module.exports = mongoose.model('posts',postSchema);