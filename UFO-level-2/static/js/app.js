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
// data.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");

//   Object.entries(ufoReport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
// data.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");
//   Object.entries(ufoReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#form-control");

button.on("click", runEnter);


// Create the function to run when the button is clicked
function runEnter() {

 //remove any children from the table body 
  tbody.html("")

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value").toLowerCase();

  // Print the value to the console
  console.log(inputValue);
 
  // Filter the data to equal the input value (by date)
   
  var filteredData = tableData.filter(report => report.datetime === inputValue || report.city === inputValue || report.state === inputValue ||
    report.country === inputValue || report.shape === inputValue || report.durationMinutes === inputValue);

  console.log(filteredData);

  filteredData.forEach(function(input) {
      console.log(input)
      var row = tbody.append("tr");
      Object.entries(input).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
      });
    });

};

