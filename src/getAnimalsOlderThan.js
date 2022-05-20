const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.filter((a) => a.name === animal)[0].residents.every((b) => b.age >= age);
}

module.exports = getAnimalsOlderThan;
