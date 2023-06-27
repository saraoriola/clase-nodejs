let http = require("http");

const logger = require('logplease').create('utils');

logger.debug(`Hola Mundo de Node`);
logger.info(`Noticias de última hora, Node.js me encanta!!`);
logger.warn(`Tirando warnings como campeones`);
logger.error(`Algo no está bien!!!`);

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("Mi primer script en The Bridge!!!");
})

.listen(8080);