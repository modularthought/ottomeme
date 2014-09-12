OTToMeme.mod.html = true;
OTToMeme.decodeURL = function (match, p1){
	var str = String.fromCharCode(parseInt("0x"+p1,16));
	/* sanitize for html */
	return str.replace(/\&/g,'&amp;')
			  .replace(/</g,'&lt;')
			  .replace(/>/g,'&gt;')
			  .replace(/"/g,'&quot;')
			  .replace(/'/g,'&apos;');
}
OTToMeme.toHTML = function(snowman){
	var addAcc = function(a,b){
		return (a*1000+b*1000)/1000;
	}
	, minusAcc = function(a,b){
		return (a*1000-b*1000)/1000;
	};

	this.snowmeme = (snowman||this.memes.meme[this.memes.meme.length-1][1]);
	/* start of ooh */
	for (var i = 0, snowtemp = this.snowmeme, off = 0, sd = 1, reooh = /([\^`])(.)/; i < snowtemp.length && /\^|`/.test(snowtemp); i++) {
		if (snowtemp.match(reooh)[1] == '^') {
			snowtemp = snowtemp.replace(reooh, '<spanup:'+(off=addAcc(off,0.085*sd))+'em;">$2</span>');
		} else if (snowtemp.match(reooh)[1] == '`') {
			snowtemp = snowtemp.replace(reooh, '<spanup:'+(off=minusAcc(off,0.085*sd))+'em;">$2</span>');
		}
		if (Math.abs(off*100) > 55) {
			sd *= -1;
		}
	};
	this.snowmeme = snowtemp;
	/* end of ooh */
	this.snowmeme = this.toHtml(this.snowmeme);
	return this.snowmeme;
}
OTToMeme.showSnowmeme = function(history){
	var snowmeme = this.snowmeme;
	if (!history) {
		// this.memes.meme[this.memes.meme.length-1][1] = this.snowmeme;
	} else {
		snowmeme = history[1];
	}
	snowmeme = this.toHTML(snowmeme);
	this.mt.innerHTML = snowmeme.replace(/\bi\b/gi,'\u0406');
	if (this.GET.e) {
		this.mt.style.backgroundColor = 'rgba(221,50,50,0.75)';
	}
	// this.mo.setAttribute('title', snowmeme.replace(/<\/?[^>]+>/g,'').toUpperCase() );
	this.mo.setAttribute('title', this.toPlain(this.buildSnowman(this.memes.template["xkcd1190-sub"])));
		/* update title text for image */
	// if (this.mod.sharing) this.bb2(this.snowmeme);
		/* update bbcode selection box */
	// return snowmeme;
}
OTToMeme.spoiler = function(e){
	if (e.target.nodeName.toLowerCase() !== 'input' && e.target.type !== 'button') return;
	// consider disabling OTToMeme.pressNew when input is in focus (to be able to use return):
	// document.removeEventListener('keydown', OTToMeme.pressNew, false);
	var self = e.target;
	if (self.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display != '') {
		self.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = '';
		self.innerText = '';
		self.value = 'Hide';
	} else {
		self.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = 'none';
		self.innerText = '';
		self.value = 'Show';
	};
};
document.getElementById('memetxt').addEventListener('click',OTToMeme.spoiler);