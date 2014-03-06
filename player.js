
$(document).ready(function(){
$('#listen_live').html('<span style="font-size:1em;display:block;line-height:1em;">Click here for the <span style="color:#cc0000;">WRIR</span> live stream!</span> ');
if((navigator.userAgent.match(/iPhone/im)) || (navigator.userAgent.match(/iPod/im)) || (navigator.userAgent.match(/iPad/im))) {
    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                mp3: "http://wrir.serverroom.us:7722/wrir",
            });
        },
        ended: function (event) {
            $(this).jPlayer("play");
        },
        swfPath: "http://www.wrir.org/tunein",
        supplied: "mp3, oga",
  solution: "html",
  cssSelectorAncestor: "",
  wmode: "window",
      noVolume: {
     ipad: /ipad/,
    iphone: /iphone/,
    ipod: /ipod/,
      android_pad: /none/,
      android_phone: /none/,
      blackberry: /none/,
      windows_ce: /none/,
      iemobile: /none/,
      webos: /none/,
      playbook: /none/
    } 
    })
    .bind($.jPlayer.event.play, function() { // pause other instances of player when current one play
            $(this).jPlayer("pauseOthers");
            $.jPlayer.timeFormat.showHour = true;
    });

} else {
    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                mp3: "http://wrir.serverroom.us:7722/wrir",
            });
        },
        ended: function (event) {
            $(this).jPlayer("play");
        },
        swfPath: "http://www.wrir.org/tunein",
        supplied: "mp3, oga",
        solution: "flash,html",
        cssSelectorAncestor: "",
        wmode: "window",    
        noVolume: {
          ipad: /none/,
          iphone: /none/,
          ipod: /none/,
          android_pad: /none/,
          android_phone: /none/,
          blackberry: /none/,
          windows_ce: /none/,
          iemobile: /none/,
          webos: /none/,
          playbook: /none/
        }     
      }).bind($.jPlayer.event.play, function() {
      $(this).jPlayer("pauseOthers");
      $.jPlayer.timeFormat.showHour = true;
    });
    }
     showListing(aoShows);
     resizeCheck();
});

function resizeCheck(){
  var h = ($('#menubar').css( "height" ));
  //$('.showlist').css('margin-top', ''+h+'')
  $('#showlist').css('margin-top', ''+h+'')
}

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-4649064-1']);
  _gaq.push(['_setDomainName', 'wrir.org']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


 function trackOutboundLink(link, category, action) { 
 
    try { 
   _gaq.push(['_trackEvent', category , action]); 
    } catch(err){}
 
   setTimeout(function() {
      document.location.href = link.href;
   }, 100);

 }
function showListing(list) {
  var month=new Array();
  var day=new Array();
  month[0]="Jan.";
  month[1]="Feb.";
  month[2]="Mar.";
  month[3]="Apr.";
  month[4]="May.";
  month[5]="June";
  month[6]="July";
  month[7]="Aug.";
  month[8]="Sept";
  month[9]="Oct.";
  month[10]="Nov.";
  month[11]="Dec.";
  day[0]="Sunday";
  day[1]="Monday";
  day[2]="Tuesday";
  day[3]="Wednesday";
  day[4]="Thursday";
  day[5]="Friday";
  day[6]="Saturday";
  for (var i=0;i<list.shows.length;i++){
    var ds = list.shows[i].datestamp;
    var date = new Date(list.shows[i].dateunix);
    var d = date.getDate();
    var m = month[date.getMonth()]; 
    var td = date.getDay();
    var todayD = new Date();
    var today = new Date().getDay();
    var diff =  Math.floor(( Date.parse(todayD) - Date.parse(date) ) / 86400000);
    if (today == td && diff < 7){var dy = 'Today'} else if (today == td+1 && diff < 7){var dy = 'Yesterday'} else {var dy = day[date.getDay()]; }
    var t = date.getHours(); 
    var mins = date.getMinutes();  
    if (mins == 0){mins = '00'}
    if (t>12){t = (t-12)+':'+mins+' pm'} else if (t==12){t=12+':'+mins+' pm'}else{t=t+':'+mins+' am'}
    var mp3 = list.shows[i].mp3;
    var oga = list.shows[i].oga;
    var title = list.shows[i].title;
    var presenter = list.shows[i].presenter;
    var poster = list.shows[i].poster;
    if (poster == ''){poster = 'http://wrir.org/assets/img/placeholder-shows.jpg'} 
    var url = list.shows[i].showurl;
    $("#showlist").append(
    '<div class="show '+list.shows[i].type+'" id="show_'+ds+'"><div class="show_controls"><div class="play_button"><div class="glyphicon glyphicon-play show_mp3" onclick="playShow(&#34;'+mp3+'&#34;,&#34;'+title+'&#34;,&#34;'+presenter+'&#34;,&#34;'+poster+'&#34;,&#34;'+url+'&#34;,&#34;'+oga+'&#34;)"></div></div><div class="more_button" onclick="javascript:getMore(&#34;'+url+'&#34;,&#34;'+ds+'&#34;)"><div class="glyphicon glyphicon-plus-sign showpage"></div></div></div><div class="show_image"><img src="'+poster+'"></div><div class="show_dj">'+title+' '+presenter+'</div><div class="show_date">'+dy+', '+m+' '+d+' @&nbsp;</div><div class="show_title"> '+t+'</div><div id="'+ds+'"></div></div></div>');
  }
}
function playShow(mp3, title, presenter, poster, url, oga){
  $("#jquery_jplayer_1").jPlayer("stop").jPlayer("clearMedia").jPlayer("setMedia", {"mp3": mp3, "oga": oga}).jPlayer("play");
  $("#player_showtitle").html(title+' '+presenter);
  $("#player_description").html('');//$("#player_description").html(title+' '+presenter);
  $("#player_poster").html('<img src="'+poster+'" />');
  _gaq.push(['_trackEvent', 'Archive Player', title]);
  resizeCheck();
}
function getMore(url, id){
  if (url == ''){
     $('#show_'+id+' .show_dj').append(' - No further information at this time.');
     $('#show_'+id+' .show_page').css('display', 'none')
    return false;
  }
  var h = $('#menubar').height()
  if($('#'+id+'').is(':empty')){
  $('#show_'+id+' .show_page').css('border-color','#333333');
  $('#show_'+id+' .more_button .glyphicon').toggleClass('glyphicon-plus-sign').toggleClass('glyphicon-download');
  //window.open(url, '_blank');
  //return false;
  $.ajax({
    url: url, 
    cache: false,
    success: function(response) {
        var result = $(response).find("#content .block");
        $('#'+id+'').html('') ;
        $('#'+id+'').append(result);
        $('.recent_button .recent_more_button').addClass('glyphicon glyphicon-circle-arrow-down')
        $('.recent_button').bind('click', function(){
        $('#show_'+id+' .recent_blog_entries').toggle();
        $('#show_'+id+' .recent_button_close').toggle();
        $('.recent_button .recent_more_button').toggleClass('glyphicon-circle-arrow-down').toggleClass('glyphicon-circle-arrow-up');
        $('#show_'+id+' .recent_more_button_close_top').toggle();
        $('html,body').animate({scrollTop: $('#show_'+id+' .recent_button').offset().top-h});
      });
        $('.recent_button_close').bind('click', function(){
        $('#show_'+id+' .recent_blog_entries').toggle();
        $('#show_'+id+' .recent_button_close').toggle();
        $('.recent_button .recent_more_button').toggleClass('glyphicon-circle-arrow-down').toggleClass('glyphicon-circle-arrow-up');
        $('#show_'+id+' .recent_more_button_close_top').toggle();
        $('html,body').animate({scrollTop: $('#show_'+id+'').offset().top-h});
      });
      $('#show_'+id+' .show_page').css('border-color','#dddddd');
      $('#show_'+id+' .more_button .glyphicon').toggleClass('glyphicon-minus-sign').toggleClass('glyphicon-download');
      $('html,body').animate({scrollTop: $('#show_'+id+'').offset().top-h});

      }
  });

} else { 
  $('#show_'+id+' .more_button .glyphicon').toggleClass('glyphicon-plus-sign').toggleClass('glyphicon-minus-sign');
  $('#'+id).html('');
  $('html,body').animate({scrollTop: $('#show_'+id+'').offset().top-h});}
}

function volumeMenu() {
  var top = $('#sidemenu_container').css('top');
  if(top  == '0px'){
    $('#sidemenu_container').css('top','-100px')
    $('#menubar').css('top','0px')
  }else{
    $('#timemenu_container').css('top','-100px')
  $('#sidemenu_container').css('top','0px')
  $('#menubar').css('top','100px')
}
}

function timeMenu() {
  var top = $('#timemenu_container').css('top');
  if(top  == '0px'){
    $('#timemenu_container').css('top','-100px')
    $('#menubar').css('top','0px')

  }else{
    $('#sidemenu_container').css('top','-100px')
  $('#timemenu_container').css('top','0px')
  $('#menubar').css('top','100px')
}
}
