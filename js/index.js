$(document).ready(function() {
  $("#search").on("click", function() {
    var sTerm = $("#input").val(); //assign contents of the iputbox to the sTerm variable.
    var Surl = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch="+sTerm+"&srnamespace=0&srwhat=text&titles=Main%20Page&callback=?" 
    $.getJSON(Surl, function(data) { //get JSON data
         $.each(data.query.search,function(i,item){
           var wiki = '<div class="entry">'+
    '<div class="title">'+item.title+'</div>'+
    '<div class="snippet">'+item.snippet+'</div></div>';
            $("#result").append(wiki);

         });
    });
  });
});