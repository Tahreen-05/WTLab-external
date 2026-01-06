const http = require('http');
const os = require('os');
const fs = require('fs');
//OS MODULES
console.log("platform:", os.platform());
console.log("architecture:", os.arch());
console.log("hostname:", os.hostname());
console.log("ostype:", os.type());
//fs modules
fs.writeFileSync("demo.txt", "This is the inital content");
fs.appendFileSync("demo.txt", "file appended successfully");
const data = fs.readFileSync("demo.txt", "utf-8");
console.log("\nfile content", data);
fs.open("demo.txt", "r", (err, fd) => {
    if (err) throw err;
    console.log("Opened successfully");

});
fs.rename("demo.txt", "sample.txt", () => {
    console.log("renamed successfully");
});
//http
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'plain/text' });
    res.write("node.js is writing");
    res.end()
});
server.listen(8080, () => {
    console.log("running at 8080");
})