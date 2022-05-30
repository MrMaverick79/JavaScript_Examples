/* Credit Card Checker. */

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];



// fuinction returns true if valid, false if not. Takes array of CC numbers.
function validateCred(arr) {
  //iterate in reverse
  let total = 0;
  //iterate over 1,3,5 etc. This is correct
  for (let counter = arr.length - 1; counter >= 0; counter = counter - 2) {
    total += arr[counter];
  }
  for (let counter2 = arr.length - 2; counter2 >= 0; counter2 = counter2 - 2) {
    if (arr[counter2] * 2 > 9) {
      total += arr[counter2] * 2 - 9;
    } else {
      total += arr[counter2] * 2;
    }
  }
  return total % 10 === 0;
}

//check nested array for which numbers are invalid, and return another nested array of invalid cards.
function findInvalidCards(arrList) {
  let invalidList = [];
  arrList.forEach((element) => {
    if (validateCred(element) != true) {
      invalidList.push(element);
    }
  });
  return invalidList;
}

//Returns list of companies with invalid numbers. Avoiids creaating duplicates. Returns array
function idInvalidCardCompanies(nestedArray) {
  let listOfCompanies = [];
  for (let i in nestedArray){
    const firstIndex = nestedArray[i][0];
    if(validateCred(nestedArray[i]) !== 0 && firstIndex == 3 && listOfCompanies.indexOf('Amex') === -1){
      listOfCompanies.push('Amex');
    }   else if (validateCred(nestedArray[i]) !== 0 && firstIndex == 4 && listOfCompanies.indexOf('Visa') === -1){
       listOfCompanies.push('Visa');
    } else if (validateCred(nestedArray[i]) !== 0 && firstIndex == 5 && listOfCompanies.indexOf('Mastercard') === -1){
       listOfCompanies.push('Mastercard'); 
    } else if (validateCred(nestedArray[i]) !== 0 && firstIndex == 6 && listOfCompanies.indexOf('Discover') === -1){
       listOfCompanies.push('Discover');
    } else if (listOfCompanies.indexOf('Company not found') !== -1) { 
        listOfCompanies.push('Company not found');
    } 
      
    } return listOfCompanies; 
 
  }  


//console.log(validateCred(invalid1));
//console.log(findInvalidCards(batch))
console.log(idInvalidCardCompanies(batch));