// $.ajax({
//   type:"GET",
//   dataType: "json",
//   url: "http://127.0.0.1:5000/api/v1.0/countries",
//   success: beta
// })
       
// function beta(data){
//   buf1=data;
//   console.log(data);
// }


// Define the URL of the JSON data
var url = "http://127.0.0.1:5000/api/v1.0/countries";
// Create an empty array to store the JSON data
var data = [];
// Use AJAX to get the JSON data from the URL
$.ajax({
  url: url,
  method: "GET",
  success: function(result) {
    // Loop through the JSON data
    for (var i = 0; i < result.length; i++) {
      // Add the JSON data to the array
      data.push(result[i]);
    }
  },
  error: function(error) {
    console.log(error);
  }
});
console.log(data);

