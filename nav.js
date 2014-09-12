OTToMeme.mod.nav = true;
OTToMeme.mod.history = !History;
/* show graphics */
OTToMeme.addNav = function(){
	var div = document.createElement('div');
	OTToMeme.sh.parentNode.insertBefore(div, OTToMeme.sh);
	div.outerHTML = '<div id="navbtns"><button style="visibility: visible;" id="prev">&lt;</button><button style="visibility: visible;" id="next">&gt;</button></div>';

	document.getElementById('prev').addEventListener('click',OTToMeme.prev, false);
	document.getElementById('next').addEventListener('click',OTToMeme.next, false);
}
OTToMeme.showNav = function(){
	var prev = document.getElementById('prev')
	, next = document.getElementById('next');
	if (this.historyx > 0) {
		prev.style.visibility = 'visible';
	} else {
		prev.style.visibility = 'hidden';
		prev.blur();
	}
	if (this.historyx == this.memes.meme.length-1) {
		next.style.visibility = 'hidden';
		next.blur();
	} else {
		next.style.visibility = 'visible';
	}
};
if (OTToMeme.mod.controls) {
	document.addEventListener('keydown', OTToMeme.keyHist, false);
	document.addEventListener('keydown', OTToMeme.pressNew, false);
}
/* create and manipulate history */
OTToMeme.addHistory = function(snowman) {
	var history = this.memes.meme[this.memes.meme.length-1];
	history[1] = snowman;
	this.pushURL(history);
}
OTToMeme.pushURL = function(hstory) {
	history.pushState({r:this.GET.r||0,t:this.GET.t,h:hstory,e:this.GET.e}, null, '?'+
		(this.GET.n ? 'n='+this.GET.n+'&u='+(this.GET.u===true?this.GET.u:false) : 'r='+(this.GET.r||0)+'&t='+this.GET.t)
		+location.hash);
}
OTToMeme.replaceURL = function() {
	history.replaceState({r:this.GET.r||0,t:this.GET.t,h:(history.state&&history.state.h||this.memes.meme[this.memes.meme.length-1]),e:this.GET.e}, null, '?'+
		(this.GET.n ? 'n='+this.GET.n+'&u='+(this.GET.u===true?this.GET.u:false) : 'r='+(this.GET.r||0)+'&t='+this.GET.t)
		+location.hash);
}
OTToMeme.clickToEnd = function() {
	var i = history.length;
	/* could not figure out another way to skip to end
	   as a too high number does nothing
	   and a too low number doesn't go to the end. */
	while (i > 0) {
		history.go(i--);
	}
}
/* arrows */
OTToMeme.prev = function(e){
	if (e.preventDefault) e.preventDefault();
	e.cancelBubble = false;
	if (OTToMeme.historyx > 0) {
		OTToMeme.setSnowCap(OTToMeme.memes.meme[--OTToMeme.historyx]);
	}
}
OTToMeme.next = function(e){
	if (e.preventDefault) e.preventDefault();
	e.cancelBubble = false;
	if (OTToMeme.historyx !== OTToMeme.memes.meme.length-1) {
		OTToMeme.setSnowCap(OTToMeme.memes.meme[++OTToMeme.historyx]);
	}
};
window.addEventListener("popstate", function(e) {
	if (e.state && e.state.h) OTToMeme.setSnowCap(e.state.h);
}, false);
