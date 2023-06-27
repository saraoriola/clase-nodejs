// Importar el módulo 'http'
let http = require("http");

// Crear un servidor HTTP
http.createServer((req, res) => {
  // Establecer el encabezado de la respuesta HTTP con el código de estado 200 (OK) y el tipo de contenido como HTML
  res.writeHead(200, { "Content-Type": "text/html" });

  // Enviar la respuesta al cliente con el cuerpo del mensaje
  res.end("Mi primer script en The Bridge!!! 🥳");
})

// Hacer que el servidor escuche en el puerto 8080
.listen(8080);
