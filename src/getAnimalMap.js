const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getNamesSpecies = (nome) => species.filter((a) => a.name === nome)
  .map((b) => b.residents)[0].map((c) => c.name);
const getNamesSpeciesF = (nome) => species.filter((a) => a.name === nome)
  .map((b) => b.residents)[0].filter((c) => c.sex === 'female').map((d) => d.name);
const getNamesSpeciesM = (nome) => species.filter((a) => a.name === nome)
  .map((b) => b.residents)[0].filter((c) => c.sex === 'male').map((d) => d.name);

function anAr(location, sex) {
  const array = [];
  species.filter((a) => a.location === location).map((a) => a.name).forEach((a) => {
    const nomes = getNamesSpecies(a);
    const nomesF = getNamesSpeciesF(a);
    const nomesM = getNamesSpeciesM(a);
    if (sex === undefined) {
      return array.push({ [a]: nomes });
    }
    if (sex === 'female') {
      return array.push({ [a]: nomesF });
    }
    if (sex === 'male') {
      return array.push({ [a]: nomesM });
    }
  });
  return array;
}
function anSo(location, sex) {
  const array = [];
  species.filter((a) => a.location === location).map((a) => a.name).forEach((a) => {
    const nomes = getNamesSpecies(a).sort();
    const nomesF = getNamesSpeciesF(a).sort();
    const nomesM = getNamesSpeciesM(a).sort();
    if (sex === undefined) {
      return array.push({ [a]: nomes });
    }
    if (sex === 'female') {
      return array.push({ [a]: nomesF });
    }
    if (sex === 'male') {
      return array.push({ [a]: nomesM });
    }
  });
  return array;
}

function getAnimalMap(o) {
  if (o === undefined || o.includeNames === undefined) {
    return {
      NE: species.filter((a) => a.location === 'NE').map((a) => a.name),
      NW: species.filter((a) => a.location === 'NW').map((a) => a.name),
      SE: species.filter((a) => a.location === 'SE').map((a) => a.name),
      SW: species.filter((a) => a.location === 'SW').map((a) => a.name),
    };
  }
  if (o.sorted === undefined) {
    return {
      NE: anAr('NE', o.sex), NW: anAr('NW', o.sex), SE: anAr('SE', o.sex), SW: anAr('SW', o.sex),
    };
  }
  if (o.sorted === true) {
    return {
      NE: anSo('NE', o.sex), NW: anSo('NW', o.sex), SE: anSo('SE', o.sex), SW: anSo('SW', o.sex),
    };
  }
}

module.exports = getAnimalMap;
