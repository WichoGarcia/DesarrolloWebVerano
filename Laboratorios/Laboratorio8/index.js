var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

var path = require('path');

app.use(express.urlencoded({extended : true}));
app.use(express.json());


var tables =[
    {
        name: "luis",
        phone: 55555555,
        mail: "luis@desarrolloweb.com",
        id: 1
    }
];
var waitinglist=[
    {
        name: "luis",
        phone: 55555555,
        mail: "luis@desarrolloweb.com",
        id: 1
    }
];

app.get("/",function(req,res){
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"home.html"));
})

app.get("/tables",function(req,res){
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"tables.html"));
})
app.get("/reserve",function(req,res){
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"reserve.html"));
})


app.get("/api/tables",function(req,res){
return res.json(tables);
})

app.get("/api/waitlist",function(req,res){
    return res.json(waitinglist);
})

app.post("/api/clear",function(req,res){
    tables=[];
    waitinglist=[];
    res.json(tables);
    res.json(waitinglist);
})

app.post("/api/tables", function(req, res) {

    var newTable = req.body;

    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newTable);
  
    tables.push(newTable);
  
    res.json(newTable);
  });

  app.post("/api/waitlist", function(req, res) {

    var newTable = req.body;

    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newTable);
  
    waitinglist.push(newTable);
  
    res.json(newTable);
  });

app.listen(PORT,function(){
    console.log("App listening on PORT :"+PORT);
})