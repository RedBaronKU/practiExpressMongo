const { response } = require('express');
const express=require('express');
const app=express();
const { v4: uuid } = require('uuid'); 
const methodOverride=require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}))

let commentData=[
    {
        id:uuid(),
        username:'single',
        comment:'Who let the dogs out',

    },
    {
        id:uuid(),
        username:'goofy',
        comment:'lorem ipsum dolores hijanji fourtam',
    },
    {
        id: uuid(),
        username:'Donald Duck',
        comment: 'Quack Quack!!',
    }
]
app.set('view port','ejs');

app.get('/comments',(req,res)=>{
    res.render('comments.ejs',{commentData})
})

app.get('/comments/new',(req,res)=>{
    res.render('newcomment.ejs')    
})

app.post('/comments',(req,res)=>{
    let {username,comment} = req.body;
    commentData.push({id:uuid(),username,comment});
    res.render('comments.ejs',{commentData})
})
app.get('/comment/individual/:id',(req,res)=>{
    const {id}=req.params;
    const comment=commentData.find(c=>c.id===id);
    res.render('individualComment.ejs',{comment})     
})
app.get('/updateComment/:id',(req,res)=>{
    const {id}=req.params;
    const comment=commentData.find(c=>c.id===id);
    res.render('updateComment.ejs',{comment})     
})
app.patch('/comments/:id',(req,res)=>{
    const newComment=req.body.comment;
    const {id}=req.params;
    const found=commentData.find(c=>c.id===id);
    found.comment=newComment;
    res.redirect('/comments')     
})
app.delete('/comments/:id',(req,res)=>{
    const{id}=req.params;
    commentData=commentData.filter(c=>c.id!=id);
    res.render('comments.ejs',{commentData});
    
})
app.listen(8080,()=>{
    console.log("listening on port 8080");
})
