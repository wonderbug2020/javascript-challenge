// from data.js
var tableData = data;

// YOUR CODE HERE!
//get the button
var button = d3.select("#filter-btn");

// get the form
var form = d3.select("form");

// get event handlers
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();  // inhibit page refersh for the form
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  // filter the data based on the input date:
  var filteredData = tableData.filter(getdate => getdate.datetime === inputValue);
  // Get a reference to the table body
  var tbody = d3.select("tbody");
  tbody.html("");
    filteredData.forEach(function(filteredData) {
      var row = tbody.append("tr");
    });
    filteredData.forEach(function(filteredData) {

      var row = tbody.append("tr");
      Object.entries(filteredData).forEach(function([key, value]) {

        var cell = row.append("td");
        cell.text(value);
      });
    });
}
