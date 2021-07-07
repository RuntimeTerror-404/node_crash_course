// import http module
const http = require("http");

// create server using http
http
  .createServer((req, res) => {
    // write response to browser
    res.write("Hello world from node.js");
    res.end();
  })
  .listen(5000, () => console.log("Server running..."));
