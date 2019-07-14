const express=require('express');
const mongoose = require('mongoose');
const config=require('./config/dev');

const app = express();
mongoose.connect(config.DB_URI,{ useNewUrlParser: true });

const PORT=process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log("server running");
})

app.get('/rentals',function(req,res){
    res.json({'success':true});
    });

