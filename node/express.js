const express= require('express');
const app=express();

app.get('/',function(req,res){
    // const x={
    //     name:"Riya INdap",
    //     age:19,
    //     education:"B.E in IT"
    // }
    // res.json(x);
    res.send('<h1>Welcome to Express!</h1><p>This is an HTML response.</p>');
});



// app.post('/contact', (req, res) => {    
//     const { name, email } = req.body;    
//     res.send(`Contact form submitted by: ${name},   Email: ${email}`); });

app.listen(3000)