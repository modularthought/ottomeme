OTToMeme.mod.choose = true;
/* words */
OTToMeme.populateSandR = function(regex,snowindex){
	if (/^<[\w\d-]+>$/.test(regex)) {
		regex = this.memes.regex[regex.substr(1, regex.length-2)];
	}
	regex = regex.split('/');
	this.regularSnow[snowindex] = {
			s: new RegExp(regex[0].replace(/\{/g,'[').replace(/\}/g,']'), regex[2])
			, r: regex[1]
		};
}
OTToMeme.setLiterals = function(snowballindex,snowball){
  /* convert literals and percentages and add to literal class */
	var rem = []; /* keep track of @percent's to remove */
	var f, at, add;

	this.memes.class['literal'+snowballindex] = [];
	for (var i = 0, snow = snowball, slen = snowball.length; i < slen; i++) {
		if (snow[i].indexOf('@') != -1) {
		/* checks for percentInclude */
			snow[i] = snow[i].split('@');
			if (Math.random() < snow[i][1]) {
			/* randomly adds to a removal queue based on percentage */
				rem.push(i);
			};
			snow[i] = snow[i][0];
		};
		if ((at = snow[i].indexOf('/')) != -1) {
		/* check for regex pattern */
			this.populateSandR(snow[i].substr(at+1),i);
			snow[i] = snow[i].substr(0,at);
		};
		if (f = snow[i].match(/^\$(\d)/)) {
		/* set to literalize previous match */
			snow[i] = this.snowflakes[f[1]];
		};
		if (typeof snow[i] == 'string' && snow[i] == snow[i].toUpperCase()) {
		/* adds literal to class */
			this.memes.class['literal'+snowballindex].push(snow[i]);
			snow[i] = 'literal'+snowballindex;
		};
	};
	if (snowball.length !== rem.length) {
	/* if snowball and rem queue are not same length, remove freely */
		for (var k = rem.length-1; k >= 0; k--) {
			snowball.splice(rem[k],1);
			this.regularSnow.splice(rem[k],1);
		};
	} else if (snowball.length > 1) {
	/* else only remove randomly a single one, but this needs changed to a while (snowball) */
		var srem = this.findRandom(rem.length);
		snowball.splice(rem[srem],1);
		this.regularSnow.splice(rem[srem],1);
	};
	return snowball;
}
OTToMeme.conjugate = function(obj,conj,snow){
	if (/^noun/.test(snow)){
		if (conj.indexOf('singular') == -1 &&
			conj.indexOf('plural') == -1 &&
			conj.indexOf('compar') == -1 &&
			conj.indexOf('superl') == -1) {
			conj.push('singular');
		}
	} else if (/^adjective/.test(snow)){
		if (conj.indexOf('desc') == -1 &&
			conj.indexOf('compar') == -1 &&
			conj.indexOf('superl') == -1) {
			conj.push('desc');
		}
	} else if (/^adverb/.test(snow)){
		if (conj.indexOf('adverb') == -1) {
			conj.push('adverb');
		}
	} else if (/^verb/.test(snow)){
		if (conj.indexOf('inf') == -1 &&
			conj.indexOf('present') == -1 &&
			conj.indexOf('cont') == -1 &&
			conj.indexOf('past') == -1 &&
			conj.indexOf('perfect') == -1) {
			conj.push('inf');
		}
	}
	var str = [], i, lconj = conj;
	var olf = this.findRandom(obj.syn);
	if ((i = lconj.indexOf('article')) > -1) {
		str.push(obj[lconj[i]][olf]);
		lconj = lconj.join(',').replace(/article,?/,'').split(',');
	}
	for (var i = 0; i < lconj.length; i++) {
		str.push(obj[lconj[i]][olf]);
	};
	return str.join(' ');
}
OTToMeme.convertToLiteral = function(rephrase,snowball){
	var snowindex = this.findRandom(snowball.length)
	, attr = snowball[snowindex].split('--')
	, snow = attr[0].split('-')
	, flake, regsnow = this.regularSnow;
	attr = attr[1] ? attr[1].split('-') : null;
	var ttag = true;
	var conj = snow.slice(1);
	snow = snow[0];
	var snowflake = '';

	var snowballl = snowball.join(',').replace(/literal\d+,?/g,'').replace(/,$/,'');
	if (/^\$\d/.test(rephrase)) {
		snowflake = this.snowflakes[rephrase.match(/^\$(\d)/)[1]];
	} else if (/^t:/.test(snowballl)) {
		var fln = this.findRandom(snowball.length);
		var snowf = snowball[fln];
		var snowflake = this.buildSnowman(this.memes.template[snowf.substr(2)]);
	} else {
		do {
			var fln = this.findRandom(this.memes.class[snow].length);
			flake = this.memes.class[snow][fln];
			if (attr) {
				for (var i = 0; i < attr.length; i++) {
					if (/^!/.test(attr[i])) {
						ttag = flake.attr ? flake.attr.indexOf(attr[i].substr(1)) > -1 : true;
					} else {
						ttag = flake.attr ? flake.attr.indexOf(attr[i]) == -1 : true;
					}
					if (ttag) break;
				};
			} else {
				ttag = false;
			}
		} while (ttag || (this.snowvoid.indexOf(snowballl) > -1 && this.snowflakes.indexOf(flake) > -1))
					//  && this.snowflakes.indexOf(flake) > -1
		this.snowvoid.push(snowballl);
		snowflake = (typeof this.memes.class[snow][fln] == 'string') ?
					this.memes.class[snow][fln] :
					this.conjugate(this.memes.class[snow][fln],conj,snow);
	}
	if (regsnow && regsnow[snowindex]) {
		snowflake = snowflake.replace(regsnow[snowindex].s,regsnow[snowindex].r);
	};
	this.snowflakes.push(snowflake || flake);
	if (!/^t:/.test(snowballl)) {
		snowflake = snowflake.replace(/\*/g,'%2A')
							.replace(/\&/g,'%26')
							.replace(/</g,'%3C')
							.replace(/>/g,'%3E')
							.replace(/"/g,'%22')
							.replace(/'/g,'%27');
	}
	return snowflake;
}
/* templates */
OTToMeme.chooseWhich = (function() {
	var i = 0, j;
	return function(seq){
		j = j || this.GET.t || i;
		if (seq) {
			if (j == this.memes.templates.length) j = 0;
			return this.GET.t = j++;
		} else {
			return isNaN(this.GET.t) ? this.memes.templates.length-1 : this.GET.t;
		}
	};
})()
OTToMeme.buildSnowman = function(tsnowman, sr, frame){
	var reBracket = /\[[^\]]+\]/, rephrase;

	tsnowman = tsnowman[this.findRandom(tsnowman.length)];
	var snowballs = tsnowman.match(/\[[^\]]+\]/g);
	this.snowflakes = [];
	for (var s = 0, slen = snowballs.length; s < slen; s++) {
		this.regularSnow = []; /* flush regsnow obj on each bracket (snowball) iteration */
		var snowball = rephrase = snowballs[s].substr(1,snowballs[s].length-2);
			/* save without surrounding brackets */
		snowball = snowball.split(/, ?/);
		snowball = this.setLiterals(s,snowball);
		var snowflake = this.convertToLiteral(rephrase,snowball);
		tsnowman = tsnowman.replace(reBracket, snowflake);
	};
	tsnowman = tsnowman
				.replace(/(?:[\.!?] ?|^)(?: ?[,_᐀-ᙿᢰ-ᣵ-])+([.!?])/g,function(match,p1){
					switch (p1) {
						case '.': return match.replace(/.$/,'ᐨ');
						case '!': return match.replace(/!$/,'ᐦ');
						case '?': return match.replace(/\?$/,'ᐤ');
					}
				})
					/* fixes Beanish punctuation for exclusively Beanish sentences */
				.replace(/^\^#.+?#\$/,'')
					/* removes pre-template operations */
				.split('``'); /* splits post-template function into array */
	tsnowman = tsnowman[1] ? this.postProcess(tsnowman, frame) : tsnowman[0];
	var dm = (new Date).getMinutes().toString();
	if (dm == 0 || dm == 1 || dm == 30 || dm == 31) {
		/* special ONG function */
		var ongre = /([^AEIOU]|\b)\*?[AOU](?:[NM]?G|[NM]G?)\*?([^EDC]|\b)/;
		if (ongre.test(tsnowman) || !sr--) {
			return tsnowman.replace(ongre,'$1*'+(dm==0||dm==30?'O':'U')+'NG*$2');
		} else {
			return this.buildSnowman(this.chooseMeme());
		}
	} else {
		return tsnowman;
	}
}
OTToMeme.delayShow = function(history){
	this.tf.removeEventListener('load',this.delayShow);
	this.setSnowMeme(history);
}
OTToMeme.setSnowMeme = function(hstory, frame){
	var ssnowman;
	if (!hstory) {
		try {
			ssnowman = this.buildSnowman(this.chooseMeme(), 27, frame);
			this.GET.e = false;
		} catch(e){
			ssnowman = "I'M SORRY.  YOUR MEME COULD NOT BE FOUND.  TRY MAKING ANOTHER SANDCASTLE."; /* maybe set this to select from meme e404 (although only having this available on errors would make it too rare). maybe like: "[t:e404]  TRY MAKING ANOTHER SANDCASTLE." to make it clear that this is not just a meme but an error. */
			/* also errors could pop up an error log icon to inform user what the error is so they can post it or send it to me */
			/* actually, making it say the error, such as "MEME #7200 COULD NOT BE FOUND..." is directly useable to be sent to me. "MEME TEMPLATE XKCD377 NOT FOUND..." etc. */
			this.GET.r = 0;
			this.GET.e = true;
			console.log(this.templatetrack)
		}
		if (this.mod.nav) this.addHistory(ssnowman);
	}
	if (this.mod.html) this.showSnowmeme(hstory || [,ssnowman]);
	if (this.mod.sharing) this.bb2(hstory || [,ssnowman]);
	return ssnowman;
}
/* randomness */
OTToMeme.chooseMeme = function(){
	var ilm;
	if (typeof this.GET.n === 'string' && this.memes.template[this.GET.n]) {
		this.GET.r = 1;
		if (this.mod.options && document.getElementById('mo')) document.getElementById('mo').checked = true;
		return this.templatetrack = this.memes.template[this.GET.n];
	}
	if (this.mod.nav) {
		if (this.GET.r === 1) {
			return this.templatetrack = this.memes.templates[this.chooseWhich(false)]
		} else if (this.GET.r === -1) {
			return this.templatetrack = this.memes.templates[this.chooseWhich(true)]
		}
	}
	this.GET.t = this.keepTrack(this.memetrack,this.memes.templates);
	return this.templatetrack = this.memes.templates[this.memetrack[this.memetrack.length-1]]
}
OTToMeme.keepTrack = function(track,arr){
	var tname, lim = 27, shiftlim = lim;
	do {
		tname = this.findRandom(arr.length);
	} while (track.indexOf(tname) != -1 ||
		track.indexOf(tname) >= track.length - shiftlim-- );
	if (track.length == lim) {
		track.shift();
		/* remove oldest */
	};
	track.push(tname);
	return +tname;
}
OTToMeme.findRandom = function(length){
	return Math.random()*length|0;
	/* this has a problem if the length is really low, like 2. why? */
}
/* change result */
OTToMeme.postProcess = function(meme, frame) {
	if (this.process[meme[1]]) {
		return this.process[meme[1]](meme[0], frame) || meme[0];
	} else {
		return meme[0];
	}
}
OTToMeme.process = {
	pcre: /%([^%]*)%/gi
	, softBreak: function(meme) {
	 	// needs fixed for &amp; escapes as well.
		return meme.replace(/%2A/g,'*').replace(/\B/g,'\u200b').replace(/\*/g,'%2A');
	}
	, incrc: function(meme) {
		var pc = function(){
			var i = 0;
			return function (match,p1,index){
				for (var j = 0, twos = '', more = OTToMeme.more++; j < more; j++) {
					twos += '$2';
				};
				if (OTToMeme.more >= p1.length) {
					OTToMeme.more = 0;
				}
				switch (i++) {
					case 0: return p1.replace(/([AEIOU])([^AEIOU])([^AEIOU]*)([AEIOU])/,'$1$2'+twos+'$3$4');
					default: return match;
				}
			}
		}();
		return meme.replace(this.pcre,pc);
	}
	, unrealify: function(meme){
		var suffix = ['','SOME','FUL','NESS','ITUDE','ED','ISH','MOLP'];
		var prefix = ['','','','','','','','','','','','RAPTOR']
		var as = OTToMeme.findRandom(suffix.length);
		var ap = OTToMeme.findRandom(prefix.length);
		return meme.replace(/"([^"]+)"/,'"'+prefix[ap]+'$1'+suffix[as]+'"').replace(/([^AEIOU])EED/g,'$1ED');
	}
	, dawgify: function(meme){
		meme = meme.match(/(SUP )(.+?),(.+)$/i);
		var sup = meme[1], dawg = meme[2];
		meme = meme[3];
		dawg = dawg.replace(/O\b/gi,'OH')
					.replace(/\bA|A\b/gi,'UH')
					.replace(/EA/gi,'EE')
					.replace(/X/gi,'KS')
					.replace(/CK/gi,'KK')
					.replace(/C|CH/gi,'K')
					.replace(/UR/gi,'R')
					.replace(/IR/gi,'UR')
					.replace(/ER/gi,'A')
					.replace(/TH/gi,'D')
					.replace(/EW/gi,'U')
					.replace(/CU/gi,'KYU')
					.replace(/EST/gi,'IST')
					.replace(/([^AEIOU])\1/gi,'$1')
					.replace(/Y\b/gi,'EE')
					.replace(/WH/gi,'W')
					.replace(/^/gi,'')
					.replace(/I([^AEIOU])E\b/gi,'IE$1')
					.replace(/O([^AEIOU])E\b/gi,'OA$1')
					.replace(/U([^AEIOU])E\b/gi,'YOO$1');
		return sup+dawg+","+meme;
	}
	, ooh: function(meme) {
		var ooh = meme.split('  ')[0], is = meme.split('  ')[1]
		, modulo = [3,5];
		// var tis = is;
		for (var i = 0, sf = 0, tis = ''; i < is.length; i++) {
			if (/%[23][ACE267]/.test(is.substr(i,3))) {
				tis += is.substr(i,3);
				i+=2;
				continue;
			}
			if (i == 0) {
				if (Math.random()*2|0) {
					tis += "="+is[i];
					sf++;
				} else {
					tis += is[i];
				}
			} else if (!(i % modulo[(Math.random()*2|0)])) {
				tis += "="+is[i];
				sf++;
			} else {
				tis += is[i];
			}
		};
		is = tis + (sf % 2 ? "=" : "");
		var oohtxt = ooh+"  "+is;
		for (var i = 0, oohis = ""; i < oohtxt.length; i++) {
			/* loop to add html squiggly marks */
			if (/%[23][ACE267]/.test(oohtxt.substr(i,3))) {
				oohis += oohtxt.substr(i,3);
				i+=2;
				continue;
			} else if (oohtxt.substr(i,1) == '=') {
				oohis += oohtxt.substr(i,1);
				continue;
			} else {
				oohis += (Math.random()*2|0 ? '`' : '^') + oohtxt[i];
			}
		};
		return oohis.replace(/[\^`]([= ])/g,'$1'); // fix by counting = and adding at end of string
	}
	, np: function(meme, frame) {
		var fr, res = /^$/, rer = '';
		if (/^prickly|^POTM|^lucky|^bean[y2]|^t1i/.test(frame[1])) {
			meme = meme.replace(/GEEKWAGON|AUBRONWOOD|GLR|GREAT LORD RANDALL/,'MSCHA');
			// change GLR|GREAT LORD RANDALL to WAVENEY|TMAN2ND|SILENTTIMER|?
			// and: res = /LOGGED/; rer = 'CREATED';
		}
		switch (true && OTToMeme.mod.frame) {
			case (/GEEKWAGON/.test(meme)):
				fr = OTToMeme.getFrameOffset(frame[0],'g');
				// if (frame[0] == '256a') {"DOESN'T EXIST!!"}
				break;
			case (/AUBRONWOOD/.test(meme)):
				fr = OTToMeme.getFrameOffset(frame[0],'a');
				break;
			case (/GLR/.test(meme)):
			case (/GREAT LORD RANDALL/.test(meme)):
				fr = (frame[1]+"").replace(/\B/g,'\u00ad');
				res = /LOGGED/; rer = 'CREATED';
				break;
			case (/MSCHA/.test(meme)):
			default:
				fr = frame[0];
		}
		var pc = function(){
			var i = 0;
			return function (match,p1,index){
				switch (i++) {
					case 0: return (fr || OTToMeme.findRandom(3101)+1);
					default: return p1;
				}
			}
		}();
		return meme.replace(this.pcre,pc).replace(res,rer);
	}
	, spoiler: function(meme){
		var pc = function(){
			var i = 0;
			return function (match,p1,index){
				switch (i++) {
					case 0: return '#'+p1+'#';
					default: return p1;
				}
			}
		}();
		return meme.replace(this.pcre,pc);
	}
}
