const express=require('express');
const app=express();

//views wont be detected if in our terminal our process.cwd(current working directory 
// is not where views folder is, hence we use 'path' to set path for views)
const path=require('path');
app.set('views',path.join(__dirname,'/views'));
//__dirname sets the path of where this usingEJS.js file is, which is concatenated by /views

app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.listen(8080,()=>{
    console.log("Listening on port 8080")
})