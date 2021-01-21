var express=require('express')
var app=express();
// app.use(()=>
// {
//     console.log("We Got a request")
// });
app.listen(8083,()=>{
    console.log("Listening!!!");
})
app.get('/cat/:catname/:catID', (req, res) => {
    const{catname,catID}=req.params;
    res.send(`Meow, says ${catname} with ID of: ${catID}, poor kitty`);
})
app.get('*',(req,res)=>{
    res.send("Chal nikal");
})
