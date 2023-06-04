$(function() {
    var csvPath = "../happiness_merged_cleaned.csv";
  
    // Use the jQuery ajax method to read the CSV file and parse into an array
    $.ajax({
      url: csvPath,
      dataType: "text",
      success: function(data) {
        var dataArray = data.split("\n");
        var dataObjects = [];

        for (var i = 0; i < dataArray.length; i++) {
          var dataObject = {};
          var dataRow = dataArray[i].split(",");
          for (var j = 0; j < dataRow.length; j++) {
            dataObject[dataRow[j]] = dataRow[j];
          }
          dataObjects.push(dataObject);
        }
  
        // Make sure dataObjects has appropriate arrays in console
        console.log(dataObjects);
      }
    });
  });

