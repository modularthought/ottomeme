"use strict"; /* force variable declarations and other strict code practices */

String.prototype.toMixedCase = function() {
	/* currently not being used as the font is the same in both cases
	   but may get used when the font is updated */
	for (var i = 0, t = ''; i < this.length; i++) {
		/* loops through each character and randomly picks upper or lowercase */
		/* because it's not back and forth some strings of letters may
		   have same case */
		if (Math.round(Math.random())) {
			t += this[i].toUpperCase();
		} else {
			t += this[i].toLowerCase();
		};
		/* this should probably be changed to only lowercase it (as it is all
		   uppercase to begin with), then check previous for same letter (such as
		   double s) to pick opposite case */
	};
	return t;
};
if (!window.addEventListener) {
	/* shiv for IE<9 */
	/* needs tested */
	window.addEventListener = function(eventtype,callback,alwaysfalse){
		window.attachEvent("on"+eventtype, callback);
	}
};
if (!Array.isArray) {
	/* shiv for IE<9 */
	Array.isArray = function(arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	};
}

var addmeme;
	/* houses frames array */ /* this needs non-globalized */
var OTToMeme = {
	/* main object. houses all properties and functions */
	  /* these HTML elements should probably be moved to their own modules to init */
	  cm: document.getElementById('clickmeme') /* a tag for clicking next meme */
	, mo: document.getElementById('memeoverlay') /* overlay that displays the title text, and could be used for a hyperlink as well. */
	, tf: document.getElementById('memeframe') /* the image frame img tag */
	, dl: document.getElementById('memeline') /* unimplemented svg element */
	, ml: document.getElementById('memeloc') /* span container for memetxt, used with css position */
	, mt: document.getElementById('memetxt') /* actual meme text container, used for css boxes and colors */
	, sh: document.getElementById('sharing') /* div for housing sharing, such as bbcode */
	, memes: {template:{}, class:{}, regex:{}, meme:[], category:{}}
		/* this object houses the parsed snowclones files */
	, mod: {} /* modules */ /* used for declaring a module in effect */
	, historyx: 0
	, snowvoid: []
	, memetrack: []
	, regularSnow: [] /* hold regular expressions during the choose stage */
	, snowmeme: ''
	, snowflakes: []
	, cap: ''
	, captrack: []
	, templatetrack: ''
	, more: 1 /* used to keep track of increasing letters in process.incrc(). should probably be moved to a closure */
	, trail: 0
	, trackdip: {dip: (new Date()).getDate() - 1, posted: false, length: 0, lefth: 0}
		/* used for special postprocess "dip" */
	, online: (location.protocol.indexOf(/^https?:/) === 0) /* a boolean used mainly for offline testing of localStorage (disabled) */
	, manifest: {
		/* used to allow downloading of updated files when using localStorage.
		   They're just date stamps for each stored file. They need updated each time the files are changed. */
		    classes: "20140918"+"1657"
		 , template: "20140919"+"1235"
		, templateh: "20140918"+"0836"
		   , frames: "20140831"+"1713"
		     /* frames is the least likely to need updated */
	}
	, GET: (function() {
		/* GET is an object, inited by this anonymous function. It stores the query
		   string from the URL and gets updated as OTToMeme gets used. It only needs to read the URL once as it otherwise gets updated by other functions. */
			var loc = {}, locA
			, str = document.location.search ? document.location.search.split('?')[1] : '';
			  /* store query string to var, everything after the '?' */
			locA = str.split('&');
				/* create an array based on '&', which is the separator between queries */
			for (var i = 0, l; i < locA.length; i++) {
				l = locA[i].split('=');
					/* last split, which is between property=value */
				if (!isNaN(l[1])) {
					/* if a number, force to number (they come stored as strings) */
					loc[l[0]] = +l[1];
				} else if (l[1] === 'true') {
					/* if the word 'true' set to an actual boolean */
					loc[l[0]] = true;
				} else if (l[1] === 'false') {
					/* same as above, but for 'false' */
					loc[l[0]] = false;
				} else {
					/* otherwise simply assign the value as a string to the
					   property (which are directly assigned to the loc object) */
					loc[l[0]] = l[1];
				}
			};
			return loc; /* assign the object to GET. */
						/* GET is now an object containing property-value pairs */
		})()
	, url:
		(location.protocol === 'https:' ? 'http://imgs.xkcd.com/comics/time/' :
		location.protocol === 'http:' ? 'http://imgs.xkcd.com/comics/time/' :
			'../../../../Pictures/Time/hash/')
		/* image url based on protocol used by the page (such as 'file:' for offline (but it doesn't show up there) and 'https' if secure ) */
	/* https versions unavailable from xkcd or mscha.org */
	, taturl: (location.protocol === 'https:' ? 'http://xkcd.mscha.org/otcstories/' :
		location.protocol === 'http:' ? 'http://xkcd.mscha.org/otcstories/' :
			'../../../../Downloads/TimeAfterTime/')
		/* the time after time url (mscha's domain) */
	, earray: [] /* multidimensional array for use with start() */
	, start: function(earray){
		/* execute each retrieve call using the info from the array */
		this.queue = this.earray.length;
		for (var i = 0; i < earray.length; i++) {
			this.retrieve(earray[i][0],earray[i][1],earray[i][2]);
		};
	}
	, queue: 0 /* this queue increases with the earray pushing
			     when each retrieve is successful and downloaded
			     queue is decreased. When back to zero execute actually runs */
	, run: function() {
	  /* this function is called from main page */
		/* the files and callbacks are stored in an array */
		this.earray.push(['classes.dict',this.readyClass,"classes"]);
		this.earray.push(['templates.sc',this.readyTemplate,"template"]);
		if (this.mod.frame) {
			this.earray.push(['frames.json',this.readyFrames,"frames"]);
		}
		if (this.GET.u) {
			this.earray.push(['templates_heretical.sc',this.readyTemplateOther,"templateh"]);
		}
		this.start(this.earray);
			/* run start to actually begin parsing */
		this.execute();
			/* when done, auto start first meme */
	}
}
