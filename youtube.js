$(document).ready(function(){
    var q = "html tutorial";
    var apiKey = "AIzaSyBtEGrAAbCzoM_cBNXOGsblU2-NQjvmqfk";
    var queryYTURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=' + apiKey + '&maxResults=' + 3 + '&type=video&q=' + q + '&t=jsonc';

    function runYTQuery(queryYTURL) {

        $.ajax({
          url: queryYTURL,
          method: 'GET'
        }).done(function(YTData) {  
          
            for (i = 0; i < 3; i++) {

            var src="https://www.youtube.com/embed/" + YTData.items[i].id.videoId;
            var img_src = YTData.items[i].snippet.thumbnails.high.url;

            var iframe = $("<iframe>");
            iframe.attr("class","embed-responsive-item");
            iframe.attr("src",src);


            var img_tag = $("<img>");
            img_tag.attr("class", "img-fluid z-depth-1 img");
            img_tag.attr("src", img_src);
            img_tag.attr("alt", "video");
            img_tag.attr("data-toggle", "modal");
            img_tag.attr("data-target", "#modal"+i);
            

            var video = 'video'+i;
            $('.'+video).append(iframe);

            var img = 'image'+i;
            $('.'+img).append(img_tag);

          }
        });
    }
    runYTQuery(queryYTURL);
});