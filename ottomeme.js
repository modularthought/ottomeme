"use strict";

String.prototype.toMixedCase = function() {
	var t = '';
	for (var i = 0; i < this.length; i++) {
		if (Math.round(Math.random())) {
			t += this[i].toUpperCase();
		} else {
			t += this[i].toLowerCase();
		};
	};
	return t;
};
/* shiv for IE<9 */
if (!window.addEventListener) {
	/* needs tested */
	window.addEventListener = function(eventtype,callback,alwaysfalse){
		window.attachEvent("on"+eventtype, callback);
	}
};
if (!Array.isArray) {
	Array.isArray = function(arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	};
}

var addmeme;
var OTToMeme = {
	  tf: document.getElementById('memeframe')
	, ml: document.getElementById('memeloc')
	, dl: document.getElementById('memeline')
	, mo: document.getElementById('memeoverlay')
	, mt: document.getElementById('memetxt')
	, cm: document.getElementById('clickmeme')
	, sh: document.getElementById('sharing')
	, memes: {template:{}, class:{}, regex:{}, meme:[], category:{}}
	, mod: {} /* modules */
	// , snowcap: ''
	// , snowman: ''
	// , snowballs: []
	// , snowball: []
	// , snow: []
	// , snowflake: ''
	// , flake: ''
	// , snowtracks: []
	// , snowtrail: ''
	, historyx: 0
	, snowvoid: []
	, memetrack: []
	, regularSnow: []
	, snowmeme: ''
	, snowflakes: []
	, cap: ''
	, captrack: []
	, templatetrack: ''
	, more: 1
	, trail: 0
	, online: (location.protocol === 'http:')
	, manifest: {
		    classes: "20140905"+"0312"
		 , template: "20140908"+"0242"
		, templateh: "20140908"+"0310"
		   , frames: "20140831"+"1713"
	}
	, GET: (function() {
			var loc = {}, locA;
			var str = document.location.search ? document.location.search.split('?')[1] : '';
			locA = str.split('&');
			for (var i = 0; i < locA.length; i++) {
				var l = locA[i].split('=');
				if (!isNaN(l[1])) {
					loc[l[0]] = +l[1];
				} else if (l[1] === 'true') {
					loc[l[0]] = true;
				} else if (l[1] === 'false') {
					loc[l[0]] = false;
				} else {
					loc[l[0]] = l[1];
				}
			};
			return loc;
		})()
	, taturl: (location.protocol === 'https:' ? 'https://xkcd.mscha.org/otcstories/' :
		location.protocol === 'http:' ? 'http://xkcd.mscha.org/otcstories/' :
			'../../../../Downloads/TimeAfterTime/')
	, url:
		(location.protocol === 'https:' ? 'https://imgs.xkcd.com/comics/time/' :
		location.protocol === 'http:' ? 'http://imgs.xkcd.com/comics/time/' :
			'../../../../Pictures/Time/hash/')
	, setURL: function(fno){
		if (/^prickly/.test(fno[1])) return this.taturl + (this.online?'':'pricklymolp/') + fno[1] + fno[0];
		if (/^POTM/.test(fno[1])) return this.taturl + (this.online?'':'potm/') + fno[1] + fno[0];
		if (/^lucky/.test(fno[1])) return this.taturl + (this.online?'':'lucky/') + fno[1] + fno[0];
		if (/^bean[y2]/.test(fno[1])) return this.taturl + (this.online?'':'beanies/') + fno[1] + fno[0];
		if (/^t1i/.test(fno[1])) return this.taturl + (this.online?'':'t1i/') + fno[1] + fno[0];
		return (fno[0] === 1 || fno[0] == "256a" || fno[0] == "257a" || fno[0] == "258a") ? "../timedragson/img/"+fno[1] : this.url+fno[1];
	}
	, setTitle: function(frn){
		if (/^prickly|^POTM|^lucky|^bean[y2]|^t1i/.test(frn)) {
			return 'Time After "Time" ('+frn.match(/^prickly|^POTM|^lucky|^bean[y2]|^t1i/)[0]+')';
		} else {
			return '1190: "Time"';
		}
	}
	, earray: []
	, start: function(earray){
		this.queue = this.earray.length;
		for (var i = 0; i < earray.length; i++) {
			this.retrieve(earray[i][0],earray[i][1],earray[i][2]);
		};
	}
	, queue: 0
	, run: function() {
		this.earray.push(['classes.dict',this.readyClass,"classes"]);
		this.earray.push(['templates.sc',this.readyTemplate,"template"]);
		if (this.mod.frame) {
			this.earray.push(['frames.json',this.readyFrames,"frames"]);
		}
		if (this.GET.u) {
			this.earray.push(['templates_heretical.sc',this.readyTemplateOther,"templateh"]);
		}
		this.start(this.earray);
		this.execute();
	}
}
