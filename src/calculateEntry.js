const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const adult = entrants.filter((a) => a.age >= 18 && a.age < 50).length;
  const child = entrants.filter((a) => a.age < 18).length;
  const senior = entrants.filter((a) => a.age >= 50).length;
  const obj = {
    adult,
    child,
    senior,
  };
  return obj;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  const resumo = countEntrants(entrants);
  const total = (resumo.adult * prices.adult) + (resumo.child * prices.child)
  + (resumo.senior * prices.senior);

  return total;
}

module.exports = { calculateEntry, countEntrants };
