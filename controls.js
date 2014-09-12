OTToMeme.mod.controls = true;
/* use keyboard */
OTToMeme.keyHist = function(e){
	if (!e.altKey && !e.shiftKey && e.ctrlKey) {
	/* step frame forward/reverse */
		if (e.keyCode === 37) {
			OTToMeme.prev(e);
		} else if (e.keyCode === 39) {
			OTToMeme.next(e);
		};
	}
};
if (!OTToMeme.cm.title) {
	OTToMeme.cm.title = "Or press Enter.";
}
OTToMeme.pressNew = function(e){
	if (!e.altKey && !e.shiftKey && !e.ctrlKey) {
	/* step frame forward/reverse */
		if (e.keyCode === 13) {
			if (OTToMeme.mod.nav) OTToMeme.clickToEnd();
			OTToMeme.setSnowCap();
		};
	}
}
