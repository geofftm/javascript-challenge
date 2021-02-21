// from data.js
var tableData = data;
console.log(tableData)
// YOUR CODE HERE!

// Get a reference to the table body

var tbody = d3.select("tbody");


// Use d3 to update each cell's text

data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'form-control'
var inputField = d3.select("#form-control");

button.on("click", runEnter);


// Create the function to run when the button is clicked
function runEnter() {

 //remove any children from the table body 
  tbody.html("")

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);
 
  // Filter the data to equal the input value (by date)
  var filteredData = tableData.filter(report => report.datetime === inputValue);

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

