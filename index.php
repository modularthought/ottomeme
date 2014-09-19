<?php
$meme = "";
?>
<!DOCTYPE html>
<html>
<head>
	<title>OTToMeme</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
<h1>OTToMeme</h1>
<div id="ottomeme">
	<div id="tellmeme">
		<a id="clickmeme" href="/ottomeme/"><img src="glr_meme3.png" alt="Clique to Enjoy This Comique!"></a>
		<!-- link/page does not work without javascript. create server code to fix that. -->
	</div>
	<div id="memeblock">
		<div id="memeoverlay" title="WAIT FOR IT.  CHECKING FOR MUSTARD."></div>
		<img id="memeframe" src="../timedragson/img/0001.png" alt="frame 1 from 1190: &quot;Time&quote;" width="553" height="395">
		<svg id="memeline" xmlns="http://www.w3.org/2000/svg" width="549" height="391" version="1.1">
			<!-- <path d="M 0,240 C 15,240 7,220 10,210" /> -->
			<!-- <path d="M 0,240 C 5,230 3,220 5,210" /> -->
			<!-- px: 10, 15, 20, 25, 30
			 dialogue appears to be 10/15 clearance of objects, 10 to 30 for dialogue that isn't clearing objects
			 	px: 2, 3, 5
			 dialogue line appears to be 3 from dialogue, 3 to 5 from head
			 the shape of the line curves near the head and is usually straight near the text, but may also slightly curve.
			  degrees: 70, 74, 76, 78, 80, 83, 90
			 -->
		</svg>
		<span id="memeloc"><span id="memetxt">WAIT FOR IT.<br/><br/>CHECKING FOR MUSTARD.<noscript><?=$meme?></noscript><!-- noscript will replace "WAIT FOR IT..." when php is ready --></span></span>
		<!-- integrate http://mrob.com/time/automome/butan.php into "memetxt" through a php call. this is temporary until I can get a native OTToMeme perl or php implementation installed -->
	</div>
	<div id="sharing">
		<div id="bbblock">
			<h2>BBCode:</h2>
			<textarea id="bbcode" spellcheck="false"></textarea>
		</div>
	</div>
</div>

<script type="text/javascript" src="ottomeme.js"></script>
<script type="text/javascript" src="parse.js"></script>
<script type="text/javascript" src="choose.js"></script>
<script type="text/javascript" src="frame.js"></script>
<script type="text/javascript" src="html.js"></script>
<script type="text/javascript" src="sharing.js"></script>
<script type="text/javascript" src="controls.js"></script>
<script type="text/javascript" src="nav.js"></script>
<script type="text/javascript" src="options.js"></script>

<script type="text/javascript">OTToMeme.run();</script>
<!-- <canvas id="canvas" width="553" height="395"></canvas> -->
<script type="text/javascript">
// var canvas = document.getElementById('canvas');
// var ctx    = canvas.getContext('2d');

// var data   = '<svg xmlns="http://www.w3.org/2000/svg" width="553" height="395">' +
//                '<foreignObject width="100%" height="100%">' +
//                  document.getElementById('memeblock').outerHTML.replace(/<div/
//                  	,'<div xmlns="http://www.w3.org/1999/xhtml"') +
//                '</foreignObject>' +
//              '</svg>';

// var DOMURL = window.URL || window.webkitURL || window;

// var img = new Image();
// var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
// var url = DOMURL.createObjectURL(svg);

// img.onload = function () {
//   ctx.drawImage(img, 0, 0);
//   DOMURL.revokeObjectURL(url);
// }

// img.src = url;
</script>
</body>
</html>
