//import express
const express = require('express');
//import mongoose
const mongoose=require('mongoose');
// import model
const Subject = require('./models/Subjects');
//import body-parser
const bodyParser= require('body-parser');


require('dotenv/config');
//execute express
const app = express();
//middlewares
app.use(bodyParser.json());
//Routes
//get

    app.get('/', (req, res) => {
        Subject.find({},function(err, todos) {
            if (err) {
                console.log(err);
            } else {
                res.json(todos);
            }
        });
    });
    app.get('/:subject', (req, res) => {
        Subject.find({'subject' : req.params.subject},function(err, todos) {
            if (err) {
                console.log(err);
            } else {
                res.json(todos);
            }
        });
    });
    //delete
    app.delete('/:subject', (req, res) => {
        Subject.remove({'subject' : req.params.subject},function(err, todos) {
            if (err) {
                console.log(err);
            } else {
                res.json(todos);
            }
        });
    });
    //update
    app.patch('/:subject', (req, res) => {
        Subject.update({'subject' : req.params.subject},{$set: {'subject' : req.body.subject}},function(err, todos) {
            if (err) {
                console.log(err);
            } else {
                res.json(todos);
            }
        });
    });
//post
app.post('/sub',(req,res)=>{
    
    const subjectModel = new Subject({
        subject : req.body.subject,
        teacher : req.body.teacher
    });
    console.log(subjectModel);
    subjectModel.save()
            .then ( data =>{
                res.jsoon(data);
            })
            .catch(err=>{
                res.json({messare : err});
            })
});
//connection to DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
     ()=>{
    console.log('connected to data base');
});
// how to start listening to the server
app.listen(3000);