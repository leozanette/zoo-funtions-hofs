const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // if (ids === undefined) {
  //   return []
  // }
  // return [
  //   ids.forEach(element => species.find((a) => a.id === element))
  // ]
  const resultado = [];

  ids.forEach((element) => {
    const especie = species.find((a) => a.id === element);
    resultado.push(especie);
  });

  return resultado;
}

module.exports = getSpeciesByIds;
