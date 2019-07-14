const express=require('express');
const mongoose = require('mongoose');
const config=require('./config/dev');
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');

const rentalRouter = require('./routes/rentals');

const app = express();
mongoose.connect(config.DB_URI,{ useNewUrlParser: true }).then(()=>{
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
});

const PORT=process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log("server running");
})

app.use('/api/v1/rentals/',rentalRouter);
// app.get('/rentals',function(req,res){
//     res.json({'success':true});
//     });

