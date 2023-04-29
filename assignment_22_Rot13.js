const UPMIN = 'A'.charCodeAt(0);
const UPMAX = 'Z'.charCodeAt(0);
const LOWMIN = 'a'.charCodeAt(0);
const LOWMAX = 'z'.charCodeAt(0);
const ROTATE = 13;

function rotate(start, end, charCode) {
  let added = charCode + ROTATE;
  let rolledOver = (added % end) + start - 1;
  return (added > end ? rolledOver : added);
}

function rot13(string) {
  let rotatedString = '';

  for (let index = 0; index < string.length; index++) {
    code = string.charCodeAt(index);
    if (code >= UPMIN && code <= UPMAX) code = rotate(UPMIN, UPMAX, code);
    if (code >= LOWMIN && code <= LOWMAX) code = rotate(LOWMIN, LOWMAX, code);
    rotatedString += String.fromCharCode(code);
  }

  return rotatedString
}
