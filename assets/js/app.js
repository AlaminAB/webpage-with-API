


$(document).ready(function(){
// for banner img 
   $.ajax({url: "https://randomuser.me/api/", success: function(result){
      // insert API value in html tag 
      $(".banner").css("background-image", "url(" + result.results[0].picture.large + ")");
      $(".overly-text >h2").html("Hi, I am "+result.results[0].name.first)
    }});


  // first time call 
   $.ajax({url: "https://randomuser.me/api/", success: function(result){
      // insert API value in html tag 
        $('.img-src').attr('src',result.results[0].picture.large);
      $(".name").html(result.results[0].name.first)
      $(".gender").html(result.results[0].gender)
      $(".city").html(result.results[0].location.city)
      $(".email").html(result.results[0].email);
    }});



// button 2
   $(".button1 > button").click(function(){
     $.ajax({url: "https://randomuser.me/api/", success: function(result){
      // insert API value in html tag 
        $('.img-src1').attr('src',result.results[0].picture.large);
      $(".name1").html(result.results[0].name.first)
      $(".gender1").html(result.results[0].gender)
      $(".city1").html(result.results[0].location.city)
      $(".email1").html(result.results[0].email);
    }});
   })



// button 2
    $(".button2 > button").click(function(){
     $.ajax({url: "https://randomuser.me/api/", success: function(result){
      // insert API value in html tag 
        $('.img-src2').attr('src',result.results[0].picture.large);
      $(".name2").html(result.results[0].name.first)
      $(".gender2").html(result.results[0].gender)
      $(".city2").html(result.results[0].location.city)
      $(".email2").html(result.results[0].email);
    }});
   })
  



// button 3
   $(".button3 > button").click(function(){
     $.ajax({url: "https://randomuser.me/api/", success: function(result){
      // insert API value in html tag 
        $('.img-src3').attr('src',result.results[0].picture.large);
      $(".name3").html(result.results[0].name.first)
      $(".gender3").html(result.results[0].gender)
      $(".city3").html(result.results[0].location.city)
      $(".email3").html(result.results[0].email);
    }});
   })

});
