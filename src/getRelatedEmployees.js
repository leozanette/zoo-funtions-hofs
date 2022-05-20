const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  const managers = [stephanieId, olaId, burlId];
  return managers.some((a) => a === id);
}

function getRelatedEmployees(managerId) {
  const funcionarios = [];

  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  employees.forEach((a) => a.managers.forEach((b) => {
    if (b === managerId) {
      funcionarios.push(`${a.firstName} ${a.lastName}`);
    }
  }));
  return funcionarios;
}

module.exports = { isManager, getRelatedEmployees };
