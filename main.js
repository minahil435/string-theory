/******************
 * YOUR CODE HERE *
 ******************/



function xify(arr) {
  let x = ''
  for (let i = 0; i < arr.length; i++) {
    x = x + 'x'
  }
  return x
}

function yellingChars(arr) {
  let yellingChars = ''
  for (const ch of arr) {
    yellingChars = yellingChars + ch + '!'
  }
  return yellingChars
}

function indexedChars(arr) {
  let indexedChars = ''
  for (index in arr) {
    indexedChars = indexedChars + index + arr[index]
  }
  return indexedChars
}

function numberedChars(arr) {
  let indexedChars = ''
  for (let i = 0; i < arr.length; i++) {
    indexedChars = indexedChars + '(' + (i + 1) + ')' + arr[i]
  }
  return indexedChars
}

function exclaim(arr) {
  let exclaim = ''
  for (const ch of arr) {
    if (ch === '?' || ch === '.') {
      exclaim = exclaim + '!'
    }
    else {
      exclaim = exclaim + ch
    }
  }
  return exclaim
}

function repeatIt(arr, repeat) {
  let repeatIt = ''
  for (let i = 0; i < repeat; i++) {
    repeatIt = repeatIt + arr
  }
  return repeatIt
}

function truncate(arr) {
  let truncate = ''
  if (arr.length > 19) {
    for (let i = 0; i < 15; i++) {
      truncate = truncate + arr[i]
    }
    truncate = truncate + '...'
  }
  else { return arr }
  return truncate
}

function ciEmailify(name) {
  let email = ''
  for (const ch of name.toLowerCase()) {
    if (ch === ' ') {
      email = email + '.'
    }
    else {
      email = email + ch
    }
  }
  return email + "@codeimmersives.com"

}

function reverse(arr) {
  let reverse = ''
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse = reverse + arr[i]
  }
  return reverse

}


function onlyVowels(arr) {
  let onlyVowels = ''
  for (const ch of arr) {
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' || ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U') {
      onlyVowels = onlyVowels + ch
    }
  }
  return onlyVowels
}

function crazyCase(arr) {

  let crazy = ''

  for (let i = 0; i < arr.length; i++) {

    crazy = crazy + ((i % 2 === 0) ? arr[i].toLowerCase() : arr[i].toUpperCase());
  }
  return crazy
}

function titleCase(arr) {
  let titleCase = ''
  let isNewWord = true
  for (const ch of arr) {
    if (isNewWord) {
      titleCase = titleCase + ch.toUpperCase()
      isNewWord = false
    }
    else {
      titleCase = titleCase + ch.toLowerCase()
    }

    if (ch === ' ') {
      isNewWord = true
    }
  }
  return titleCase
}


function camelCase(arr) {
  let camelCase = ''
  let isNewWord = false
  for (const ch of arr) {

    if (ch == ' ') {
      isNewWord = true
    }
    else {
      if (isNewWord) {
        camelCase = camelCase + ch.toUpperCase()
        isNewWord = false
      }
      else {
        camelCase = camelCase + ch.toLowerCase()
      }
    }
  }
  return camelCase
}

function crazyCase2ReturnOfCrazyCase(arr) {
  let i = 0;
  let j = 0;
  let crazy = ''

  while (j < arr.length) {

    if (arr[j] !== ' ') {i = i + 1}
      crazy = crazy + ((i % 2 === 0) ? arr[j].toUpperCase() : arr[j].toLowerCase())
      j = j + 1;
  }

  return crazy
}


/********************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
