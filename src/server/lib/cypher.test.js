import Cypher from './cypher';

describe('Cypher', () => {

  it('expect numericode to equals string', () => {

    let numericode = '10 1 22 27 19 3 18 9 16 20';
    let decrypte = Cypher.decrypte(numericode);
    expect(decrypte).toEqual('JAVASCRIPT');

    numericode = '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27';
    decrypte = Cypher.decrypte(numericode);
    expect(decrypte).toEqual('ABCDEFGHIJKLMNOPQRSTUVWXYZA');

    numericode = '8 5 324 8748 295245 730 23 405 13122 12 108';
    decrypte = Cypher.decrypte(numericode);
    expect(decrypte).toEqual('HELLO WORLD');

    numericode = 'INVALID_CHARACTER';
    decrypte = Cypher.decrypte(numericode);
    expect(decrypte).toEqual('?');

  });

  it('expect getCharacterByIndex is working as expected ', () => {
    const A = Cypher.getCharacterByIndex(1);
    expect(A).toEqual('A');

    const whitespace = Cypher.getCharacterByIndex(-1);
    expect(whitespace).toEqual(' ');

    const error = Cypher.getCharacterByIndex(-2);
    expect(error).toEqual('?');
  });

  it('expect parseSingleNumber is working as expected ', () => {

    let test = '216'; // 216/27=8
    let result = Cypher.parseSingleNumber(test);
    expect(result).toEqual(8);

    test = '215'; // invalid number
    result = Cypher.parseSingleNumber(test);
    expect(result).toEqual(-1);
  });

});
