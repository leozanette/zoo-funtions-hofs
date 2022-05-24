const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idAnimal = employees.find((a) => a.id === id).responsibleFor[0];
  const animalOldest = species.find((a) => a.id === idAnimal).residents
    .reduce((a, c) => (a.age > c.age ? a : c));
  const resultado = [animalOldest.name, animalOldest.sex, animalOldest.age];

  return resultado;
}

module.exports = getOldestFromFirstSpecies;
