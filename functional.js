let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota", "West Virginia"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));


[1, 2, 3, 4].map(function(n) { return n * n; });
[1, 2, 3, 4].map( (n) => { return n * n; });
[1, 2, 3, 4].map(n => n * n);

function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}

console.log(functionalUrls(states));

function fullUrl(states) {
  return states.map(state => "https://example.com/".concat(urlify(state)));
}

console.log(fullUrl(states));

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

function functionalDakotas(elements) {
  return elements.filter(element => element.split(/\s+/).includes(/\w?(dakota)\w?/) === 1);
}
console.log(functionalDakotas(states));

console.log(fullUrl(functionalSingles(states)));
