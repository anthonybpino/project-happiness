// Define the URL of the JSON data
var url = "http://127.0.0.1:5000/api/v1.0/countries";

// Create an empty array to store the JSON data
let data = [];

// Use AJAX to get the JSON data from the URL and make plots
$.ajax({
  url: url,
  method: "GET",
  success: function(result) {
    // Loop through the JSON data
    for (var i = 0; i < result.length; i++) {
      // Add the JSON data to the array
      data.push(result[i]);
    }

    // Since getting the JSON from flask was a success, plot what you need
    var countries = data.map(item => item.country);
    var happinessScores = data.map(item => item['happiness_score']);
  
    // Creating the trace for the bar graph
    var trace = {
    x: countries,
    y: happinessScores,
    type: 'bar',
    marker: {
      color: "green"
    }
    };
  
    // Combining the trace into an array
    var graphData = [trace];
  
    // Layout configuration
    var layout = {
      title: 'Happiness Scores by Country',
      yaxis: { 
        title: 'Happiness Score' 
      },
    };
  
    // Plotting the bar graph
    Plotly.newPlot('plot', graphData, layout);
  
  },

  error: function(error) {
    console.log(error);
  }

});

// console.log(data);

// var countries = data.map(item => item.country);
// var happinessScores = data.map(item => item['happiness_score']);

// // Creating the trace for the bar graph
// var trace = {
//   x: countries,
//   y: happinessScores,
//   type: 'bar'
// };

// // Combining the trace into an array
// var graphData = [trace];

// // Layout configuration
// var layout = {
//   title: 'Happiness Scores by Country',
//   xaxis: { title: 'Country' },
//   yaxis: { title: 'Happiness Score' }
// };

// // Plotting the bar graph
// Plotly.newPlot('plot', graphData, layout);

//   // Creating the trace for the bar graph
//   var trace = {
//     x: countries,
//     y: happinessScores,
//     type: 'bar'
//   };

//   // Combining the trace into an array
//   var graphData = [trace];

//   // Layout configuration
//   var layout = {
//     title: 'Happiness Scores by Country',
//     xaxis: { title: 'Country' },
//     yaxis: { title: 'Happiness Score' }
//   };

//   // Plotting the bar graph
//   Plotly.newPlot('plot', graphData, layout);
// } catch (error) {
//   console.error('Error creating bar graph:', error);
// }