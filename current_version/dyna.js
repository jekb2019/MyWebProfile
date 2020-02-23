$(function( ) {
  $("#skills-link").on("click",function(){
    $("#skill").click();
  })
  $("#contact-me").on("click",function(){
    $("#contact").click();
  })

  $("#specific-skills").hide();
  $("#specific-education").hide();
  $("#specific-contact").hide();

  $("#skill").on("click",function(){
    $("#specific-skills").slideToggle(200,"linear");
    $("#specific-education").slideUp(200,"linear");
    $("#specific-contact").slideUp(200,"linear");
  });
  $("#education").on("click",function(){
    $("#specific-education").slideToggle(200,"linear");
    $("#specific-skills").slideUp(200,"linear");
    $("#specific-contact").slideUp(200,"linear");
  });
  $("#contact").on("click",function(){
    $("#specific-contact").slideToggle(200,"linear");
    $("#specific-education").slideUp(200,"linear");
    $("#specific-skills").slideUp(200,"linear");
  });

});
