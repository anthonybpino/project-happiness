$.ajax({
  type:"GET",
  dataType: "json",
  //data:am',
  url: "http://127.0.0.1:5000/api/v1.0/countries",
  success: function(data){
      buf1=data;
      console.log(data);
  }
})
       
  

