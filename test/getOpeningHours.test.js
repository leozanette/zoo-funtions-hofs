const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('nao receber parametro retorna objeto com todos os dias e horarios', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    const actual = getOpeningHours();
    expect(actual).toStrictEqual(expected);
  });

  it('para segunda-feira deve retornar uma string', () => {
    const expected = 'The zoo is closed';
    const actual = getOpeningHours('Monday', '09:00-AM');
    expect(actual).toStrictEqual(expected);
  });

  it('para terça-feira deve retornar uma string', () => {
    const expected = 'The zoo is open';
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    expect(actual).toStrictEqual(expected);
  });

  it('para quarta-feira a noite deve retornar uma string', () => {
    const expected = 'The zoo is closed';
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    expect(actual).toStrictEqual(expected);
  });

  it('retorna mensagem de erro para dia incorreto', () => {
    expect(() => getOpeningHours('Tue', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('retorna mensagem de erro para o periodo', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('retorna mensagem de erro para a hora', () => {
    expect(() => getOpeningHours('Friday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });

  it('retorna mensagem de erro para o minuto', () => {
    expect(() => getOpeningHours('Friday', '09:x0-AM')).toThrow('The minutes should represent a number');
  });

  it('retorna mensagem de erro para o minuto', () => {
    expect(() => getOpeningHours('Friday', '09:70-AM')).toThrow('The minutes must be between 0 and 59');
  });

  it('retorna mensagem de erro para hora', () => {
    expect(() => getOpeningHours('Friday', '15:00-AM')).toThrow('The hour must be between 0 and 12');
  });
});
