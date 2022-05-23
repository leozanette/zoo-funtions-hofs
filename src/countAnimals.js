const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const newObj = {};
  const residentesTotal = species.map((a) => a.residents.length);
  const especieTotal = species.map((a) => a.name);

  especieTotal.forEach((a, b) => { newObj[a] = residentesTotal[b]; });

  if (animal === undefined) {
    return newObj;
  }

  const especie = animal.specie;
  const sexo = animal.sex;
  const residentes = species.find((a) => a.name === especie).residents;
  const mascFem = residentes.filter((a) => a.sex === sexo);

  if (sexo === undefined) {
    return residentes.length;
  } return mascFem.length;
}

module.exports = countAnimals;
