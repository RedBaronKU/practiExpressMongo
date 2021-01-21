const express=require('express');
const redditData=require('./data.json');
const app=express();
app.set('view engine','ejs')


app.get('/:subreddit',(req,res)=>{
    const topic=req.params;
    const data=redditData[topic.subreddit];
    res.render('subreddit_copy.ejs',{...data})
})

app.listen(8080,()=>{
    console.log("listening on port 8080");
})
