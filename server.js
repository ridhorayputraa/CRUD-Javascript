
const port = 9001;
const express = require("express");
const server = express();
const bodyParser = require('body-parser')
const heroController = require("./controler/hero.controler")
const skinController = require("./controler/skin.controler" )

 

server.use(bodyParser.urlencoded({extended: false}) )
server.set("view engine", "ejs")
server.set("views", "view")


server.use("/hero", heroController);
server.use("/skin", skinController);




server.use("/", (request, response) => {
  response.render('home');
})




server.listen(port, () => {
  console.log("server running on " + port);
})
