let http = require ("http");
const { esPar } = require("./esPar.js");

console.log(esPar(2));
console.log(esPar(3));
console.log(esPar(101));
console.log(esPar(201));
console.log(esPar(202));
console.log(esPar(100));

http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end("¿Qué pasa si borro esto?");
})

.listen(8081);