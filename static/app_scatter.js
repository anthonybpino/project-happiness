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

    // Since getting the JSON from flask was a success, start setting variables for the data
    var countries = data.map(item => item.country);
    var happinessScores = data.map(item => item['happiness_score']);
    var subregions = data.map(item => item.sub_region);


    //Scatterplot GDP starts here
    //Set gdp variable for plotting
    var gdp = data.map(item => item.gdp_per_capita);
    
    
    var trace2 = {
      x: gdp,
      y: happinessScores,
      text: countries,
      hovertemplate: "Happiness Score: %{x}, GDP Per Cap: %{y}, Country: %{text}",
      type: "scatter",
      mode: "markers",
      marker: {
        color: "green"
      }
    };

    // Combining the trace into an array
    var graphData2 = [trace2];

    // Layout configuration
    var layout_best = {
      title: 'Happiness vs GDP Per Capita',
      xaxis: {
        tickangle: 30,
        title: "GDP Per Capita"
      },
      yaxis: { 
        title: 'Happiness' 
      },
    };

    //Plot scatter plot
    Plotly.newPlot('plot_scatter_gdp', graphData2, layout_best);
    //End Scatterplot GDP

    //Start Scatter plot generosity
    
    var generosity = data.map(item => item.generosity);
    
    var trace3 = {
      x: generosity,
      y: happinessScores,
      text: countries,
      hovertemplate: "Happiness Score: %{x}, Generosity: %{y}, Country: %{text}",
      type: "scatter",
      mode: "markers",
      marker: {
        color: "green"
      }
    };

    // Combining the trace into an array
    var graphData3 = [trace3];

    // Layout configuration
    var layout_best = {
      title: 'Happiness vs Generosity',
      xaxis: {
        tickangle: 30,
        title: "Generosity"
      },
      yaxis: { 
        title: 'Happiness' 
      },
    };

    
    Plotly.newPlot('plot_scatter_generosity', graphData3, layout_best);
    //End of scatter plot generosity

    //Start scatter plot freedom to make life choices
    
    var freedom = data.map(item => item.freedom_to_make_life_choices);
        
    var trace4 = {
      x: freedom,
      y: happinessScores,
      text: countries,
      hovertemplate: "Happiness Score: %{x}, Freedom of Choice: %{y}, Country: %{text}",
      type: "scatter",
      mode: "markers",
      marker: {
        color: "green"
      }
    };

    // Combining the trace into an array
    var graphData4 = [trace4];

    // Layout configuration
    var layout_best = {
      title: 'Happiness vs Freedom to Make Life Choices',
      xaxis: {
        tickangle: 30,
        title: "Freedom"
      },
      yaxis: { 
        title: 'Happiness' 
      },
    };


    Plotly.newPlot('plot_scatter_freedom', graphData4, layout_best);
    //End of scatter plot freedom
    
    //Start scatter plot healthy_life_expectancy
        
    var healthy = data.map(item => item.healthy_life_expectancy);
            
    var trace5 = {
      x: healthy,
      y: happinessScores,
      text: countries,
      hovertemplate: "Happiness Score: %{x}, Healthy Life Expectancy: %{y}, Country: %{text}",
      type: "scatter",
      mode: "markers",
      marker: {
        color: "green"
      }
    };

    // Combining the trace into an array
    var graphData5 = [trace5];

    // Layout configuration
    var layout_best = {
      title: 'Happiness vs Healthy Life Expectancy',
      xaxis: {
        tickangle: 30,
        title: "Healthy Life Expectancy"
      },
      yaxis: { 
        title: 'Happiness' 
      },
    };


    Plotly.newPlot('plot_scatter_healthy', graphData5, layout_best);
    //End of scatter plot healthy


     //Start of scatter plot perceptions_of_corruption
        
    var corruption = data.map(item => item.perceptions_of_corruption);
            
    var trace6 = {
      x: corruption,
      y: happinessScores,
      text: countries,
      hovertemplate: "Happiness Score: %{x}, Corruption: %{y}, Country: %{text}",
      type: "scatter",
      mode: "markers",
      marker: {
        color: "green"
      }
    };

    // Combining the trace into an array
    var graphData6 = [trace6];

    // Layout configuration
    var layout_best = {
      title: 'Happiness vs Perception of Corruption',
      xaxis: {
        tickangle: 30,
        title: "Perception of Corruption"
      },
      yaxis: { 
        title: 'Happiness' 
      },
    };


    Plotly.newPlot('plot_scatter_corruption', graphData6, layout_best);
    //End of scatter plot corruption

    //Start of scatter plot social support
        
    var support = data.map(item => item.social_support);
            
    var trace7 = {
      x: support,
      y: happinessScores,
      text: countries,
      hovertemplate: "Happiness Score: %{x}, Social Support: %{y}, Country: %{text}",
      type: "scatter",
      mode: "markers",
      marker: {
        color: "green"
      }
    };

    // Combining the trace into an array
    var graphData7 = [trace7];

    // Layout configuration
    var layout_best = {
      title: 'Happiness vs Social Support',
      xaxis: {
        tickangle: 30,
        title: "Social Support"
      },
      yaxis: { 
        title: 'Happiness' 
      },
    };


    Plotly.newPlot('plot_scatter_support', graphData7, layout_best);
    //End of scatter plot social support


    // Top 10 most happy bar chart
    var trace = {
      x: countries,
      y: happinessScores.slice(0, 10),
      type: "bar",
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
       // autorange: 'reversed',
        tickangle: 30
      },
      yaxis: { 
        title: 'Happiness Score' 
      },
    };
  
    // Plotting the bar graph
    Plotly.newPlot('plot_good', graphData, layout_best);
    

    // Top 10 least happy bar chart
    var trace_worst = {
      x: countries.slice(-10),
      y: happinessScores.slice(-10),
      type: 'bar',
      marker: {
        color: "blue"
      }
    };

    var graphDataWorst = [trace_worst];

    var layout_worst = {
      title: '10 Lowest Happiness Scores by Country',
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


