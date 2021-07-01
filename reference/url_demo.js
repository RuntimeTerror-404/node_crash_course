const url = require("url");

const myUrl = new URL("http://mywebsite:8000/hello.html?id=100&status=active");

// serialized url
console.log(myUrl.href);

// root domain
console.log(myUrl.host);

// host name
console.log(myUrl.hostname);

// path name
console.log(myUrl.pathname);

// serialilized query
console.log(myUrl.search);

// params object
console.log(myUrl.searchParams);

// add params
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);
