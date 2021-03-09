const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const date = require( __dirname + "/date.js");

let items = ["Buy Food","Cook Food","Eat Food"];
let workItems = [];

app.use(express.static("public"));


app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("view engine", "ejs");


app.get("/", function(req, res) {

let day = date.getDate();

  res.render("list", {
    listTitle: day,
    newListItems: items

  });
})

app.post("/",function(req,res){

 let item = (req.body.newItem);
if( req.body.list === "work"){
  workItems.push(item);
  res.redirect("/work")
}else{
  items.push(item);

   res.redirect("/");

}

  });
  app.get("/work",function(req,res){

    res.render("list", {
      listTitle: "work",
      newListItems: workItems

    });
  })

  app.post("/work",function(req,res){

   let item = (req.body.newItem);

  workItems.push(item);

   res.redirect("/work");

    });

    app.get("/about",function(req,res){
      res.render("about");
    })



app.listen(3000, function() {
  console.log("server started at local host:3000");
})




// switch (day) {
//   case 0:
//     day = "sunday"
//     break;
//   case 1:
//     day = "munday"                     alternative method.
//     break;
//   case 2:
//     day = "tuesday"
//     break;
//   case 3:
//     day = "wednsday"
//     break;
//   case 4:
//     day = "thursday"
//     break;
//   case 5:
//     day = "friday"
//     break;
//   case 6:
//     day = "saturday"
//     break;
//   default:
//
// }
