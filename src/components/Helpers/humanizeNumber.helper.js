export function humanizeNumber(number) {
    if (!isNumber(number)) return number;

    var strNumberParts = number.toString().split('.');

    var strNumber = strNumberParts[0]?.split('').reverse().join('');
    var rest = strNumberParts[1] === undefined ? '' : '.' + strNumberParts[1];

    var result = [];
    while (strNumber.length) {
        result.push(strNumber.substr(0, 3) + ' ');
        strNumber = strNumber.substr(3);
    }

    return result.join('').split('').reverse().join('') + rest;
}

const isNumber = (numberCandidate) => {
	return typeof numberCandidate === 'number' ? true: false
}