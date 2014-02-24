$(document).ready(function () {
    $('#basecampbox').hover(
     function () {
       $("#headline").addClass("hideMe");
        $("#basecamp,.basecamparrow").toggleClass("hideMe"); 
     },   
     function () {
       $("#headline").removeClass("hideMe");
         $("#basecamp,.basecamparrow").toggleClass("hideMe"); 
     });
        
    $('#highrisebox').hover(
     function () {
       $("#headline").addClass("hideMe");
        $("#highrise,.highrisearrow").toggleClass("hideMe"); 
     },   
     function () {
        $("#headline").removeClass("hideMe");
         $("#highrise,.highrisearrow").toggleClass("hideMe"); 
     });
    
    $('#campfirebox').hover(
     function () {
       $("#headline").addClass("hideMe");
        $("#campfire,.campfirearrow").toggleClass("hideMe"); 
     },   
     function () {
        $("#headline").removeClass("hideMe");
         $("#campfire,.campfirearrow").toggleClass("hideMe");
     });
});
