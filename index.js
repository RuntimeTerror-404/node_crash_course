const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(content);
  //     }
  //   );
  // }

  // // build very basic api
  // if (req.url === "/api/users") {
  //   const users = [
  //     { name: "Mohit", age: 20, Occupation: "Programmer" },
  //     { name: "John Reese", age: 41, Occupation: "CIA Agent" },
  //   ];
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(users));
  // }

  // build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? index.html : req.url
  );
  // extension of file
  const extname = fs.extname(filePath);

  // initial Content-Type
  let contentType = "text/html";

  // define other cases
  switch (extname) {
    case ".js":
      contentType: "text/javascript";
      break;
    case ".css":
      contentType: "text/css";
      break;
    case ".html":
      contentType: "text/html";
      break;
    case ".json":
      contentType: "application/json";
      break;
    case ".png":
      contentType: "image/png";
      break;
    case ".jpg":
      contentType: "image/jpg";
  }
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content, "utf8");
      }
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server is running on ${PORT}`));
