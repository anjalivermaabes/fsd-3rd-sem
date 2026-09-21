import http from 'http';
import fs from 'fs';

const homeData = fs.readFileSync("home.html", "utf8");
const aboutData = fs.readFileSync("about.html", "utf8");
const contactData = fs.readFileSync("contact.html", "utf8");

const server = http.createServer ((req,res) => {
  console.log("Hello World")
  console.log(req.url);
  if(req.url === "/") {
    res.end(homeData);
  } else if(req.url === "/about") {
    res.end(aboutData);
  } else if(req.url === "/contact") {
    res.end(contactData);
  } else {
    res.end("Welcome from server.");
    
  }
})

     server.listen(3001, "127.0.0.1", () => {
         console.log("Server is running http://127.0.0.1:3001");
     });