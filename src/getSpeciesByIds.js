const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const resultado = [];

  ids.forEach((element) => {
    const especie = species.find((a) => a.id === element);
    resultado.push(especie);
  });

  return resultado;
}

module.exports = getSpeciesByIds;
