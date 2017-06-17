$(document).ready(function() {
  window.location.reload(true);
  $("#search").on("click", function() {
    //assign contents of the inputbox to the sTerm variable.
    var sTerm = $("#input").val();
    //create wikipedia search string
    var Surl = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch="+sTerm+"&srnamespace=0&srwhat=text&titles=Main%20Page&callback=?" 
    //get JSON data and create a search result for each entry
    $.getJSON(Surl, function(data) { 
         $.each(data.query.search,function(i,item){
           var wiki = '<div class="entry">'+
    '<div class="title">'+item.title+'</div>'+
    '<div class="snippet">'+item.snippet+'</div></div>';
            $("#result").append(wiki);

         });
    });
  });
});
