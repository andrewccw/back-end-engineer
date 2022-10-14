// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4] // invalid
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3] // invalid
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3] // invalid
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
const validateCred = (card) => {
    let validated = [];
    for (let i = card.length-1; i >= 0; i--) {
        if ((card.length-1-i) % 2 === 1) {
            let num = card[i]*2;
            if (num > 9) {
                validated.push(num-9);
            } else {
                validated.push(num);
            }
        } else {
            validated.push(card[i]);
        }
    }
    let sum = validated.reduce((acc, curr) => acc + curr);
    return sum % 10 === 0;
};

// Test functions:
console.log(validateCred(valid1)); // Should print true
console.log(validateCred(invalid1)); // Should print false

const findInvalidCards = (cards) => {
    let invalid = [];
    for (let card of cards) {
        if (!validateCred(card)) {
            invalid.push(card);
        }
    }
    return invalid;
};

// Test function
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers

const idInvalidCardCompanies = (invalidCards) => {
    let companies = [];
    for (let card of invalidCards) {
        switch (card[0]) {
            case 3:
                if (companies.indexOf('Amex') === -1) {
                    companies.push('Amex');
                }
                break
            case 4:
                if (companies.indexOf('Visa') === -1) {
                    companies.push('Visa');
                }
                break
            case 5:
                if (companies.indexOf('Mastercard') === -1) {
                    companies.push('Mastercard');
                }
                break
            case 6:
                if (companies.indexOf('Discover') === -1) {
                    companies.push('Discover');
                }
                break
            default:
                console.log('Company not found');
        }   
    }
    return companies;
};

// Test function
console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards

const stringToArray = (string) => { // project extension
    let numArr = string.split('').map(num => parseInt(num));
    return numArr;
};

// Test function
console.log(stringToArray('6784330011268422'));

const convertInvalid = (card) => { // project extension
    let validated = [];
    for (let i = card.length-1; i >= 0; i--) {
        if ((card.length-1-i) % 2 === 1) {
            let num = card[i]*2;
            if (num > 9) {
                validated.push(num-9);
            } else {
                validated.push(num);
            }
        } else {
            validated.push(card[i]);
        }
    }
    let sum = validated.reduce((acc, curr) => acc + curr);
    let checkModulo = sum % 10;
    if (checkModulo !== 0) {
        if (checkModulo <= validated[0]) {
            let newNum = validated[0] - checkModulo;
            card[card.length-1] = newNum;
        };
        if (checkModulo > validated[0]) {
            let newNum = (10 - checkModulo) + validated[0];
            card[card.length-1] = newNum;
        }
    }
    return card;
};

// Test function
console.log(validateCred(convertInvalid(invalid1)));
console.log(validateCred(convertInvalid(invalid2)));
console.log(validateCred(convertInvalid(invalid3)));
console.log(validateCred(convertInvalid(invalid4)));
console.log(validateCred(convertInvalid(invalid5)));
console.log(validateCred(convertInvalid(mystery1)));
console.log(validateCred(convertInvalid(mystery3)));
console.log(validateCred(convertInvalid(mystery4)));