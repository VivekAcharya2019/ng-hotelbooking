const express=require('express');

const app = express();

const PORT=process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log("server running");
})

app.get('/rentals',function(req,res){
    res.json({'success':true});
    });

