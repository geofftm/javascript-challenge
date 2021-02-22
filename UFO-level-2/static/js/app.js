// from data.js
var tableData = data;
console.log(tableData)
// YOUR CODE HERE!

// Get a reference to the table body

var tbody = d3.select("tbody");

//Use d3 to update each cell's text

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

  // Get the value property of the input element from each filter value
  var date = d3.select("#date").property("value");
  var city = d3.select("#city").property("value").toLowerCase();
  var state = d3.select("#state").property("value").toLowerCase();
  var country = d3.select("#country").property("value").toLowerCase();
  var shape = d3.select("#shape").property("value").toLowerCase();

 // Filter the data to equal the input value
   
  var filteredData = tableData.filter(report => report.datetime === date || report.city === city || report.state === state ||
    report.country === country || report.shape === shape);

  console.log(filteredData);

  // if (date) {
  //   filteredData = tableData.filter(report => report.datetime === date)
  // }

  // if (city) {
  //   filteredData = tableData.filter(report => report.city === city)
  // }

  // if (state) {
  //   filteredData = tableData.filter(report => report.state === state)
  // }

  // if (country) {
  //   filteredData = tableData.filter(report => report.country === country)
  // }

  // if (shape) {
  //   filteredData = tableData.filter(report => report.shape === shape)
  // }


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

