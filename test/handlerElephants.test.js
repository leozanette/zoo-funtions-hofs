const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('parâmetro diferente de string retorna texto de erro', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    const actual = handlerElephants(5);
    expect(actual).toStrictEqual(expected);
  });

  it('sem parametro retorna undefined', () => {
    const expected = undefined;
    const actual = handlerElephants();
    expect(actual).toStrictEqual(expected);
  });

  it('parametro count retorna 4', () => {
    const expected = 4;
    const actual = handlerElephants('count');
    expect(actual).toStrictEqual(expected);
  });

  it('parametro averageAge retorna 10.5', () => {
    const expected = 10.5;
    const actual = handlerElephants('averageAge');
    expect(actual).toBeCloseTo(expected);
  });

  it('parametro names retorna array com os nomes', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    const actual = handlerElephants('names');
    expect(actual).toStrictEqual(expected);
  });

  it('parametro location retorna posição dos elefantes no zoo', () => {
    const expected = 'NW';
    const actual = handlerElephants('location');
    expect(actual).toStrictEqual(expected);
  });

  it('parametro popularity retorna popularidade dos elefantes', () => {
    const expected = 5;
    const actual = handlerElephants('popularity');
    expect(actual).toStrictEqual(expected);
  });
});
