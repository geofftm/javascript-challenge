// from data.js
var tableData = data;
console.log(tableData)
// YOUR CODE HERE!

// Get a reference to the table body

var tbody = d3.select("tbody");

// Step 1: Loop Through `data` and console.log each weather report object
// data.forEach(function(ufoReport) {
//   console.log(ufoReport);
// });

// Step 2:  Use d3 to append one table row `tr` for each weather report object

// data.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");
// });

// Step 3:  Use `Object.entries` to console.log each weather report value
data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");

  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
  });
});