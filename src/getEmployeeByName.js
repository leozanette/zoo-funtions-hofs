const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const result = {};

  const funcionario = employees.find((a) => a.firstName === employeeName
    || a.lastName === employeeName);

  if (employeeName === undefined) {
    return result;
  }

  return funcionario;
}

module.exports = getEmployeeByName;
