const express=require('express');
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true, useUnifiedTopology: true,})
.then(()=>{console.log("Connection Open")})
.catch(()=>{console.log("Connection Error")});
const app=express();
app.set('view port','ejs');

var schema=mongoose.Schema;
var movieSchema=new mongoose.Schema({
    title:String,
    Director:String,
    rating: Number,
    Release:String
})

movieSchema.methods.greet=function()
{
    console.log("Hello,");
}

movieSchema.methods.editRelease = function ()
{
    this.Release='2020';
    return this.save();
}
// Dont know why, but method should be above these::::-->>>>
//methods should be declayed before this class
const movie=mongoose.model('Movie',movieSchema); // 'Movie' is translated to movies and as collection in db
//here movie is a model of object(or set), which as a whole will be operated


// ------To insert---------------
// movie.insertMany([
//     {
//         title: 'Amedeus',
//         Director: 'Christopher Nolan',
//         rating:8,
//         Release: '1987'
//     },
//     {
//         title: 'Transformers',
//         Director: 'Tom Cruise',
//         rating:9.8,
//         Release: '2002'
//     },
//     {
//         title: 'Sharknado',
//         Director: 'Firang',
//         rating:7.8,
//         Release: '1997'
//     },
//     {
//         title: 'Army of Ants',
//         Director: 'Army Colonel',
//         rating:8.4,
//         Release: '2007'
//     }
// ])
// .then(data=>console.log(data))
// .catch(err=>console.log(err));



const findMovie= async function(name)
{
    const foundProduct = await movie.findOne({title : name});
    console.log(foundProduct);
    await foundProduct.editRelease();
}

findMovie("Sharknado")
