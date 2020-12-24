const express=require("express");
const bodyParser=require("body-parser");


const app= express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.get('/bmiCalculator',function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post('/',function(req,res) // for calculator
{
  var one=Number(req.body.num1);
  var two=Number(req.body.num2);
  var ans=one+two;
  res.send("Your BMI is  "+ans);
});
app.post('/bmiCalculator',function(req,res) // for bmiCalculator
{
  var wei=Number(req.body.weight);
  var hei=Number(req.body.height);
  var ans=wei/(hei*hei);
  res.send("BMI is : "+ans);
});

app.listen(3000,function()
{
  console.log("server started");
});
