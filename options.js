OTToMeme.mod.options = true;
OTToMeme.addOptions = function(){
	var div = document.createElement('div')
	, checkstr = ' checked="checked"'
	, r = OTToMeme.GET.r; r = isNaN(r) ? 0 : r;
	OTToMeme.sh.parentNode.insertBefore(div, OTToMeme.sh);
	div.outerHTML = '<div id="settings">'
			+'<form id="options">'
				+'<div>Redundancy is: <label for="re" title="Random mode."><input type="radio" id="re" name="re" value="0"'+(r==0?checkstr:'')+' accesskey="r"/>Redundant</label> <label for="mo" title="Repeat template."><input type="radio" id="mo" name="re" value="1"'+(r==1?checkstr:'')+' accesskey="m"/>Molpish</label> <label for="fr" title="Sequential mode."><input type="radio" id="fr" name="re" value="-1"'+(r==-1?checkstr:'')+' accesskey="f"/>Fractal</label></div>'
				+'<div><label for="hc">Check box if you are heretical enough to view heretical memes: <input type="checkbox" id="hc" value="u"'+(OTToMeme.GET.u?checkstr:'')+' accesskey="h"/></label></div>'
			+'</form>'
		+'</div>';

	document.getElementById('options').addEventListener('change',function(e){
		if (e.target.id !== 'hc') return;
		if (e.target.checked) {
			if (!OTToMeme.memes.category["h_templates"]) {
				OTToMeme.retrieve('templates_heretical.sc',OTToMeme.readyTemplateOther,"templateh");
			}
			OTToMeme.GET.u = true;
			OTToMeme.memes.templates = [].concat(OTToMeme.memes.category["m_templates"]
			,OTToMeme.memes.category["h_templates"]);
			OTToMeme.trackdip.length = OTToMeme.memes.templates.length;
		} else {
			OTToMeme.GET.u = false;
			OTToMeme.memes.templates = [].concat(OTToMeme.memes.category["m_templates"]);
		}
	});
	document.getElementById('options').addEventListener('change',function(e) {
		OTToMeme.GET.r = +e.target.value;
		OTToMeme.GET.n = null;
		// OTToMeme.GET.t // this needs an assignment, but not in popstate where it would get overwritten by clickToEnd(). // problem is that that template is not repeated or fractalled, but only the one at the end of the history array.
		OTToMeme.replaceURL();
	});
};
if (OTToMeme.mod.nav) {
	document.addEventListener('DOMContentLoaded', OTToMeme.addOptions);
}
