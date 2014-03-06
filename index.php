<!DOCTYPE html>
<html>
<head>
  <title>WRIR Tunein Player</title>
  <meta http-equiv="Cache-control" content="must-revalidate">
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="keywords" content="WRIR LIVE STREAM, LIVE, WRIR, 97.3fm, RADIO, COMMUNITY" />
  <meta name="description" content="Audio archive player for WRIR 97.3 FM" />
  
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="/tunein/player.css?ver=3.4.2" type="text/css">
  <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700' rel='stylesheet' type='text/css'>
 


  <script src="http://files.wrir.org/cgi-bin/showlist" type="text/javascript"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js" type="text/javascript"></script>
  <script src="../js/jquery.jplayer.min.js" type="text/javascript"></script>
  <script src="player.js" type="text/javascript"></script>
  <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>

</head>
<body onresize="resizeCheck()">
<div id="sidemenu_container">
  <div id="sideMenu">
  <ul>
    <li><a title="mute" tabindex="1" class="jp-mute glyphicon glyphicon-volume-down" href="javascript:;"></a>
    </li>
    <li class="unmute"><a title="unmute" tabindex="1" class="jp-unmute glyphicon glyphicon-volume-off" href="javascript:;" style="display: none;"></a>
    </li>
    </ul>
    <div class="jp-volume-bar">
            <div class="jp-volume-bar-value"></div>
          </div>
  </div>
</div>

<div id="timemenu_container">
  <div class="jp-current-time"></div>
  <div id="timeMenu">
    <div class="jp-progress">
    <div class="jp-seek-bar">
      <div class="jp-play-bar"></div>
    </div>
  </div>

</div>
  <div class="jp-duration"></div>
</div>
<div id="menubar"> 
  <div id="show_details">
    
    <div id="player_container">
      <div class="jp-audio" id="jp_container_1">
        <div class="jp-type-single">
          <div class="jp-jplayer" id="jquery_jplayer_1" style="width: 0px; height: 0px;"><img id="jp_poster_0" style="width: 0px; height: 0px; display: none;"><object height="1" width="1" id="jp_flash_0" data="http://www.wrir.org/tunein/Jplayer.swf" type="application/x-shockwave-flash" style="width: 0px; height: 0px;"><param name="flashvars" value="jQuery=jQuery&amp;id=jquery_jplayer_1&amp;vol=0.8&amp;muted=false"><param name="allowscriptaccess" value="always"><param name="bgcolor" value="#000000"><param name="wmode" value="window"></object>
        </div>
        <div class="jp-gui jp-interface">
          <ul class="jp-controls">
          <li id="listen_live" onclick="playShow('http://wrir.serverroom.us:7722/wrir',oOnNow.title,' - Live stream',oOnNow.poster)" style="line-height:1em;">Click here to listen <b style="color:#cc0000;">LIVE</b></li>
          <li class="jp-play glyphicon glyphicon-play" href="javascript:;"></li>
          <li class="jp-pause glyphicon glyphicon-pause" href="javascript:;" style="display: none;"></li>
          <!-- <li><a tabindex="1" class="jp-stop" href="javascript:;">stop</a></li> -->
          

          <li class="volumeBar glyphicon glyphicon-volume-up jp-volume-bar-value" onclick="volumeMenu()">
          </li>
          <li id="menu_playTime" onclick="timeMenu()"><div class="jp-time-holder">
            Time<br>
            <div onclick="timeMenu()" class="jp-current-time"></div>
            
          </div>
          </li>
          <li id="menu_donate" onclick="javascript:window.open('https://wrir.wufoo.com/forms/donate/','_blank')">Donate</li>
         
          </ul>
        </div>
        <div class="jp-no-solution" style="display: none;">
        <span>Update Required</span>
        To play the media you will need to either update your browser to a recent version or update your <a target="_blank" href="http://get.adobe.com/flashplayer/">Flash plugin</a>.
        </div></div>

      
    </div>
  </div>
  <div id="player_info">

  <div id="player_showtitle">Welcome to the new WRIR listening portal.</div>
  <div id="player_description">You can now stream all of our volunteer-produced shows for up to 2
weeks after the original air date. Listen live or to an archive. WRIR
is a community-driven radio station. Support our programs by making a
<a href="https://wrir.wufoo.com/forms/donate/" target="_blank">donation to WRIR</a> while you listen.</div>
   </div>
  </div>
  <div>
            
          </div>
          
          <!-- <div id="player_poster"><img src="http://wrir.org/assets/img/placeholder-shows.jpg"></div> -->
 

</div>
 
<!-- <div class="showlist_header">Listen to an archived show</div> -->
<div id="showlist"></div>
</body>

</html>
