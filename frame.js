OTToMeme.mod.frame = true;
OTToMeme.chooseFrame = (function() {
	var i = 0, j;
	return function(seq){
		j = j || this.GET.f || i;
		if (seq) {
			if (j == addmeme.length) j = 0;
			return this.GET.f = j++;
		} else {
			return this.captrack[this.captrack.length-1];
		}
			
	};
})()
OTToMeme.setCap = function(history){
	var cap, fno;
	if (!history) {
		this.keepTrack(this.captrack,addmeme);
		cap = this.cap = addmeme[this.chooseFrame(this.GET.f)];
		this.memes.meme.push([this.cap]);
		this.historyx = this.memes.meme.length-1;
	} else {
		cap = history[0];
	}
	if (this.mod.nav && this.mod.history) this.showNav();
	// this.getImage(cap,history);
	fno = parseInt(cap[0],10);
	if (this.mod.sharing) this.bb1(cap);
	// this.tf.addEventListener('load',function(history){OTToMeme.delayShow(history)}(history));
	this.tf.setAttribute('src',this.setURL(cap)+'.png');
	this.tf.setAttribute('alt','frame '+cap[0]+' from '+this.setTitle(cap[1]));
	if (fno > 2386 && fno < 2481 || fno == 3076 ||
	    (cap[1].indexOf("t1i-") == 0 &&
	     (fno == 242 || fno == 243 || fno == 835))) {
		this.ml.style.color = 'rgb(128,128,128)';
		this.mt.style.backgroundColor = 'transparent';
	} else {
		this.ml.style.color = 'rgb(0,0,0)';
		this.mt.style.backgroundColor = "";
	};
	return cap;
}
OTToMeme.getFrameOffset = function(frame,type){
	var sp = (frame+"").split(/\b/)
	, fint = +sp[0]
	, cn = fint;
	if (type == 'g') {
		if (fint > 255 && fint < 259) {
			if (fint == 256) {
				if (sp[1] == 'a') {
					cn = fint - 3;
				}
			} else if (fint == 257) {
				if (sp[1] == 'a') {
					cn = fint - 3;
				}
			} else if (fint == 258) {
				if (sp[1] == 'a') {
					cn = fint - 3;
				}
			}
		} else if (fint >= 2440) {
			if (fint == 2440) {
				switch (sp[1]) {
					case 'a': cn = fint + 1; break;
					case 'b': cn = fint + 2; break;
					case 'c': cn = fint + 3; break;
					case 'd': cn = fint + 4; break;
					case 'e': cn = fint + 5; break;
					default: cn = fint + 0;
				}
			} else {
				cn = fint + 5;
			}
		}
	} else if (type == 'a') {
		if (fint > 255 && fint < 2440) {
			if (fint == 256) {
				if (sp[1] == 'a') {
					cn = fint + 0;
				} else {
					cn = fint + 3;
				}
			} else if (fint == 257) {
				if (sp[1] == 'a') {
					cn = fint + 0;
				} else {
					cn = fint + 3;
				}
			} else if (fint == 258) {
				if (sp[1] == 'a') {
					cn = fint + 0;
				} else {
					cn = fint + 3;
				}
			} else {
				cn = fint + 3;
			}
		} else if (fint >= 2440) {
			if (fint == 2440) {
				switch (sp[1]) {
					case 'a': cn = fint + 4; break;
					case 'b': cn = fint + 5; break;
					case 'c': cn = fint + 6; break;
					case 'd': cn = fint + 7; break;
					case 'e': cn = fint + 8; break;
					default: cn = fint + 3;
				}
			} else {
				cn = fint + 8;
			}
		}
	} else { /* if 'm' */
		cn = sp[0];
	}
	return cn;
}
OTToMeme.getImage = function(xcap,xhistory){
	var xhr = new XMLHttpRequest()
	, cap = xcap, history = xhistory;
	xhr.open('GET',this.setURL(cap[0])+cap[1]+'.png',true);
	xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				// console.log(((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304))
				var fno = parseInt(cap[0],10);
				OTToMeme.tf.setAttribute('src',OTToMeme.setURL(cap[0])+cap[1]+'.png');
				OTToMeme.tf.setAttribute('alt','frame '+cap[0]+' from 1190: "Time"');
				if (fno > 2386 && fno < 2481 || fno == 3076) {
					OTToMeme.ml.style.color = 'rgb(128,128,128)';
				};
				if (OTToMeme.mod.sharing) {
					OTToMeme.bb1(cap);
				}
				OTToMeme.delayShow(history);
			};
		};
	xhr.send(null);
}
OTToMeme.setURL = function(fno){
	/* returns the url (tat or time) and subfolder plus filename (minus .png) */
	if (/^prickly/.test(fno[1])) return this.taturl + (this.online?'':'pricklymolp/') + fno[1] + fno[0];
	if (/^POTM/.test(fno[1])) return this.taturl + (this.online?'':'potm/') + fno[1] + fno[0];
	if (/^lucky/.test(fno[1])) return this.taturl + (this.online?'':'lucky/') + fno[1] + fno[0];
	if (/^bean[y2]/.test(fno[1])) return this.taturl + (this.online?'':'beanies/') + fno[1] + fno[0];
	if (/^t1i/.test(fno[1])) return this.taturl + (this.online?'':'t1i/') + fno[1] + fno[0];
	return (fno[0] === 1 || fno[0] == "256a" || fno[0] == "257a" || fno[0] == "258a") ? "../timedragson/img/"+fno[1] : this.url+fno[1];
		/* this check is for apocryphal frames and frame 1. none are available from xkcd */
}
OTToMeme.setTitle = function(frn){
	/* like the above, a match is found to indicate the frame number and tat status for use with the alt tag */
	if (/^prickly|^POTM|^lucky|^bean[y2]|^t1i/.test(frn)) {
		return 'Time After "Time" ('+frn.match(/^prickly|^POTM|^lucky|^bean[y2]|^t1i/)[0]+')';
	} else {
		return '1190: "Time"';
	}
}
