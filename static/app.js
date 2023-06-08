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
  
    // Top 10 most happy
    var trace = {
      x: countries.slice(0, 10),
      y: happinessScores.slice(0, 10),
      type: 'hbar',
      marker: {
        color: "green"
      }
    };
  
    // Combining the trace into an array
    var graphData = [trace];
  
    // Layout configuration
    var layout_best = {
      title: '10 Highest Happiness Scores by Country',
      xaxis: {
        autorange: 'reversed',
        tickangle: 30
      },
      yaxis: { 
        title: 'Happiness Score' 
      },
    };
  
    // Plotting the bar graph
    Plotly.newPlot('plot_good', graphData, layout_best);
    

    // Top 10 least happy
    var trace_worst = {
      x: countries.slice(-10),
      y: happinessScores.slice(-10),
      type: 'hbar',
      marker: {
        color: "blue"
      }
    };

    var graphDataWorst = [trace_worst];

    var layout_worst = {
      title: '10 lowest Happiness Scores by Country',
      yaxis: {
        title: 'Happiness Score'
      }
    };

    Plotly.newPlot('plot_bad', graphDataWorst, layout_worst)
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