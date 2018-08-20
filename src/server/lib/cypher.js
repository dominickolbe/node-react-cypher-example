const secret = [
  // array destructuring to generate a simple array ['A', 'B', ...]
  ...('abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''))
];

// ENUM to handle whitespaces and invalid characters
const CODE = {
  WHITESPACE: -1,
  ERROR: -2,
}

const Cypher = {

  // decrypte numericode string
  decrypte: numericode => {

    const parsed = Cypher.parseNumericode(numericode);
    const decrypte = Cypher.buildString(parsed);

    return decrypte;
  },

  parseNumericode: numericode => {

    // split numericode string into array
    let parsed = numericode.trim().split(' ');

    parsed.forEach((value, index) => {
      // regex to check if is number
      if (/^\d+$/.test(value)) {
        parsed[index] = Cypher.parseSingleNumber(value);
      } else {
        // invalid character
        parsed[index] = CODE.ERROR;
      }
    });

    return parsed;
  },

  parseSingleNumber: number => {

    let i = parseInt(number) || -1;

    // check if greater= then 27 and modulo 0
    if (i >= 27 && i % 27 === 0) {

      // divide until lower= then 27
      while (i >= 27) {
        i = (i / 27).toFixed(0); // avoid floating point errors
      }

      i = parseInt(i);

    } else if (i > 27 && i % 27 !== 0) {
      // invalid number
      i = CODE.WHITESPACE;
    }

    return i;
  },

  buildString: decryptArr => {

    let decrypteString = '';

    // build string from array
    decryptArr.forEach(value => {
      decrypteString += Cypher.getCharacterByIndex(value);
    });

    return decrypteString;
  },

  // return character from secret by index
  getCharacterByIndex: index => {

    switch (index) {
      case CODE.WHITESPACE:
        return ' ';
      case CODE.ERROR:
        return '?';
      default:
        return secret[index - 1];
    }

  },
}

export default Cypher;
