OTToMeme.mod.sharing = true;
OTToMeme.bbdiv = document.getElementById('bbcode');
OTToMeme.bbfr = '';
OTToMeme.bbm = '';
OTToMeme.bbt = '';
OTToMeme.bb1 = function(nf) {
	this.bbfr = "[img]"+this.setURL(nf)+".png[/img]\n";
}
OTToMeme.bb2 = function(history) {
	if (!history) {
		// this.memes.meme[this.memes.meme.length-1][1] = this.snowmeme;
	} else {
		snowmeme = history[1];
	}
	/* start of ooh */
	/* needs figured out for bbcode */
	for (var i = 0, snowtemp = snowmeme, off = 0, sd = 1, reooh = /([\^`])(.)/; i < snowtemp.length && /\^|`/.test(snowtemp); i++) {
		if (snowtemp.match(reooh)[1] == '^') {
			snowtemp = snowtemp.replace(reooh, '[sup]$2[/sup]');
		} else if (snowtemp.match(reooh)[1] == '`') {
			snowtemp = snowtemp.replace(reooh, '[sub]$2[/sub]');
		} else {
			snowtemp = snowtemp.replace(reooh, '$2');
		}
	};
	snowmeme = snowtemp;
	/* end of ooh */
	// var reoohfloat = /<span class="oohfloat" style="top: ?(-?\d(?:\.\d+)?)em;">(.+?)<\/span>/g;
				// .replace(reoohfloat, function(match,p1,p2){
				// 	if (+p1 > 0) {
				// 		return match.replace(reoohfloat,'[sup]$2[/sup]');
				// 	} else if (+p1 < 0) {
				// 		return match.replace(reoohfloat,'[sub]$2[/sub]');
				// 	} else {
				// 		return match.replace(reoohfloat,'$2');
				// 	}
				// })
	this.bbm = this.toBbcode(snowmeme);
	this.bbdiv.value = '[quote="[url=http://xkcd.modularthought.com/ottomeme/]OTToMeme[/url]"][center]'+this.bbfr+this.bbm+'[/center][/quote]';
}
OTToMeme.selectIt = function() {
	this.bbdiv.select();
}
OTToMeme.addSelect = function() {
	/* creates a text select button with onclick event */
	var btn = document.createElement('button');
	document.getElementById('bbblock').insertBefore(btn,this.bbdiv);
	btn.outerHTML = '<button id="bbselect">Select BBCode</button>';
	/* add & Copy (when I learn how to do that) */
	document.getElementById('bbselect').addEventListener('click',OTToMeme.selectIt);
};
document.addEventListener('DOMContentLoaded', OTToMeme.addSelect);
OTToMeme.re_u = /_(.*?)_/g;
OTToMeme.re_i = /~(.*?)~/g;
OTToMeme.re_b = /[*](.*?)[*]/g;
OTToMeme.re_l = /\=(.*?)\=/g;
OTToMeme.re_s = /^#(.*?)#/g;
OTToMeme.re_e = /%([\da-fA-F]{2})/g;
OTToMeme.re__ = / {2,}/g;
OTToMeme.toMarkdown = function(meme){
	/* it starts in markdown, but maybe it could be retrofitted to a markdown standard */
	return meme.replace(re_e, this.decodeURL)
				.toUpperCase();
}
OTToMeme.toHtml = function(meme){
	return meme.replace(this.re_u,'<u>$1</u>')
				.replace(this.re_i,'<em>$1</em>')
				.replace(this.re_b,'<strong>$1</strong>')
				.replace(this.re_l,'<span class="smallcap">$1</span>')
				.replace(this.re_s,'<div class="spoiler"><div class="quotetitle"><b>Spoiler:</b> <input type="button" value="Show" accesskey="s" /></div><div class="quotecontent"><div style="display: none;">$1</div></div></div>')
				.replace(/<spanup:/g,'<span class="oohfloat" style="top: ')
				.replace(this.re_e, this.decodeURL)
				.replace(this.re__,'<br/><br/>');
}
OTToMeme.toBbcode = function(meme){
	return meme.replace(this.re_u,'[u]$1[/u]')
				.replace(this.re_i,'[i]$1[/i]')
				.replace(this.re_b,'[b]$1[/b]')
				.replace(this.re_l,'[size=85]$1[/size]')
				.replace(this.re_s,'[spoiler]$1[/spoiler]')
				.replace(this.re_e, this.decodeURL)
				.replace(this.re__,'\n\n');
}
OTToMeme.toPlain = function(meme){
	return meme.replace(this.re_u,'$1')
				.replace(this.re_i,'$1')
				.replace(this.re_b,'$1')
				.replace(this.re_l,'$1')
				.replace(this.re_s,'$1')
				.replace(/`|\^/g,'')
				.replace(this.re_e, this.decodeURL)
				.toUpperCase();
}
