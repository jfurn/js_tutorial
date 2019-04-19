// Reverses a string.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Add function to String object to return true if string is empty of consists only of whitespace (spaces, tabs or newlines)
//This seems to be broken!
String.prototype.isEmpty = function() {
  regexpMatcher = /^\s$/
  return !!this.match(regexpMatcher)
}


// Add a last method to the Array object prototype that returns the last element in the array.
Array.prototype.last = function() {
  return this[this.length-1];
}


// function reverse(string) {
//   return Array.from(string).reverse().join("");
// }

//Defines a Phrase object
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    let lowerCaseContent = string.toLowerCase();
    return lowerCaseContent;
  }

  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

// Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

//Set the prototype of the TranslatedPhrase object to be the same as that of Phrase.
TranslatedPhrase.prototype = new Phrase();


/*Using method chaining, write a function emailParts to return an array of the username and domain for a standard email address of the form username@example.com. Note: Make sure your function returns the same result for USERNAME@EXAMPLE.COM.*/

function emailParts(string) {
  let processedContent = string.toLowerCase();
  return string.split("@");
}
