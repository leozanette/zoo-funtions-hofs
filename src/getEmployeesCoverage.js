const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeesCoverageUndenfined() {
  const empregados = employees.map((a) => a.id);
  const nome1 = employees.map((a) => a.firstName);
  const nome2 = employees.map((a) => a.lastName);
  const responsavel = employees.map((a) => a.responsibleFor);
  const obj = [];
  empregados.forEach((a, i) => {
    const nomeAnimal = species.filter((c) => responsavel[i].includes(c.id)).map((d) => d.name);
    const localAnimal = species.filter((c) => responsavel[i].includes(c.id)).map((d) => d.location);
    obj.push({
      id: empregados[i],
      fullName: `${nome1[i]} ${nome2[i]}`,
      species: nomeAnimal,
      locations: localAnimal,
    });
  });
  return obj;
}

function getEmployeesCoverage(objeto) {
  const empregados = employees.map((a) => a.id);
  if (objeto === undefined) {
    return getEmployeesCoverageUndenfined();
  }
  if (empregados.includes(objeto.id) === false && objeto.id !== undefined) {
    throw new Error('Informações inválidas');
  }
  const funcionario = employees.find((a) => a.firstName === objeto.name
    || a.lastName === objeto.name || a.id === objeto.id);
  const especies = species.filter((a) => funcionario.responsibleFor.includes(a.id));
  const nome = especies.map((b) => b.name);
  const local = especies.map((b) => b.location);
  return {
    id: funcionario.id,
    fullName: `${funcionario.firstName} ${funcionario.lastName}`,
    species: nome,
    locations: local,
  };
}

module.exports = getEmployeesCoverage;
