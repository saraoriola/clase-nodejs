const logger = require('logplease').create('esPar');

exports.esPar = (numero) => {
  if (numero % 2 === 0) {
    logger.info(`El número es par`);
    return true;
  } else {
    logger.error(`El número no es par`);
    return false;
  }
};