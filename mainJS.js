$(document).ready(function () {
  var jsonDataUrl = "companies.json";

  var companiesTable = $("#myTable tbody");

  $.getJSON(jsonDataUrl, function (data) {

    var companiesData = {}; // Object to store company details by name

    // Organize JSON data by company name
    for (var i = 0; i < data.length; i++) {
      if (data[i] && data[i].hasOwnProperty("name")) {
        var companyName = data[i].name;
        companiesData[companyName] = data[i];
      }
    }
    for (var companyName in companiesData) {
        if (companiesData.hasOwnProperty(companyName)) {
          var companyDetails = companiesData[companyName];
  
          // Create a clickable tag for the company name
          var clickableCompanyName = $("<a href='#' class='company-name'>").text(companyName);
  
          var newRow = $("<tr>")
            .append($("<td>").append(clickableCompanyName))
            .append($("<td>").text(companyDetails.owner))
            .append($("<td>").text(companyDetails.phone))
            .append($("<td>").text(companyDetails.email));
  
          companiesTable.append(newRow);
        }
      }
    // Add click event to the company name tags
    $(".company-name").click(function (event) {
        event.preventDefault();
        var clickedCompanyName = $(this).text();
        var clickedCompanyDetails = companiesData[clickedCompanyName];
        
        localStorage.setItem('myObject', JSON.stringify(clickedCompanyDetails));
        
        window.location.href = 'mainIndex.html';
      });
    $("#myTable").DataTable({
      responsive: true
    });
  });
});
