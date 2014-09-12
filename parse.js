OTToMeme.mod.parse = true;
OTToMeme.retrieve = function (file,callback,manifest) {
	if (OTToMeme.online && 'localStorage' in window && window.localStorage !== null && window.localStorage[file]) {
		if (OTToMeme.manifest[manifest] !== window.localStorage[manifest]) {
			window.localStorage[manifest] = OTToMeme.manifest[manifest];
		} else {
			callback(window.localStorage[file]);
			OTToMeme.execute();
			return;
		}
	};
	var xhr = new XMLHttpRequest();
	xhr.open('GET',file,true);
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4) {
			if (OTToMeme.online && 'localStorage' in window && window.localStorage !== null) {
				window.localStorage[file] = xhr.responseText;
			}
			callback(xhr.responseText);
			OTToMeme.execute();
		};
	};
	xhr.send(null);
}
OTToMeme.execute = function(){
	if (OTToMeme.mod.html && OTToMeme.queue-- == 0) {
		if (OTToMeme.mod.history) OTToMeme.addNav();
		OTToMeme.setSnowCap();
		OTToMeme.cm.addEventListener('click', function(e){
			if (e.preventDefault) e.preventDefault();
			e.cancelBubble = false;
			OTToMeme.cm.blur();
			if (OTToMeme.mod.nav) OTToMeme.clickToEnd();
			OTToMeme.setSnowCap();
		}, false);
	}
};
OTToMeme.readyClass = function(xhr){
	OTToMeme.parseMemes(xhr);
}
OTToMeme.readyFrames = function(xhr){
	addmeme = JSON.parse(xhr);
}
OTToMeme.readyTemplateOther = function(xhr){
	OTToMeme.parseMemes(xhr);
}
OTToMeme.readyTemplate = function(xhr){
	OTToMeme.parseMemes(xhr);
}
OTToMeme.setSnowCap = function(history){
	var frame;
	if (this.mod.frame) frame = this.setCap(history);
	if (this.mod.html) this.setSnowMeme(history, frame);
}
OTToMeme.fillBlanks = function(){
	var reBracket = /^\s*\[[^\]]+\]/;
	for (var x in this.memes.class) {
	/* expand class (and not other) groups */
		var memex = this.memes.class[x];
		var rem = [];
		for (var i = 0, mlen = memex.length; i < mlen; i++) {
		/* check each entry for [] to expand */
			var memexi = memex[i];
			if (typeof memexi == 'string' && reBracket.test(memexi)){
				var meme1 = memexi.substr(1,memexi.length-2).split('--')
				, attr1 = meme1[1]; meme1 = meme1[0];
				for (var j = 0; j < this.memes.class[meme1].length; j++) {
					if (/^!/.test(attr1) && this.memes.class[meme1][j].attr) {
						if (this.memes.class[meme1][j].attr.indexOf(attr1.substr(1)) > -1) continue;
					} else if (this.memes.class[meme1][j].attr && attr1!==undefined) {
						if (this.memes.class[meme1][j].attr.indexOf(attr1) == -1) continue;
					}
				/* cull from other class and add to end of this class */
					memex.push(this.memes.class[meme1][j]);
				};
				rem.push(i);
			};
		};
		for (var k = rem.length-1; k >= 0; k--) {
		/* remove [] when done */
			memex.splice(rem[k],1);
		};
	};
}
OTToMeme.padWordList = function(wordlist, add){
	for (var i = 1; i < add; i++) {
		wordlist[0][i] = wordlist[0][i-1];
		wordlist[1][i] = wordlist[1][i-1];
	};
	return wordlist;
}
OTToMeme.returnSingular = function(words){
	var words = words.split(/\s*,\s*/)
	var art = [], noart = [];
	for (var i = 0; i < words.length; i++) {
		var word = (/^AN? /i.test(words[i]) ? [words[i].split(' ')[0], words[i].split(' ').slice(1).join(' ')] : ['A',words[i]]);
		art.push(word[0]);
		noart.push(word[1]);
	};
	return [art,noart];
}
OTToMeme.returnPlural = function(words,inf){
	/* This can be supplanted by returnConj because plural conjugates the same as verb present */
	var pluralExists = !!words[1];
	var words = words[1] ? words[1] : inf.join(',');
	words = words.split(/\s*,\s*/);
	for (var i = 0, plural = []; i < words.length; i++) {
		var word = (/^AN? /i.test(words[i]) ? words[i].split(' ').slice(1).join(' ') : words[i]);
		plural.push( pluralExists ? word : word.replace(/Y(\W)?$/,'IE$1').replace(/(\W)?$/,'S$1') );
	}
	return plural;
}
OTToMeme.returnConj = function(words,inf,c){
	var conjExists = !!words[c];
	var words = words[c] ? words[c] : inf.join(',');
	words = words.split(/\s*,\s*/);
	for (var i = 0, conj = []; i < words.length; i++) {
		var word = (/^AN? /i.test(words[i]) ? words[i].split(' ').slice(1).join(' ') : words[i]);
		switch (c) {
			// no longer used: switched case 1 and 2 so that var c works with plural(s) as well.
			case 1:
				conj.push( conjExists ? word : word.split(' ')[0].replace(/Y(\W)?$/,'IE$1').replace(/(\W)?$/,'S$1') + (word.split(' ').length > 1 ? ' ' : '') + word.split(' ').slice(1).join(' ') );
				break;
			case 2:
				conj.push( conjExists ? word : word.split(' ')[0]							.replace(/E(R|D)(\W)?$/,'E$1E$2')
							.replace(/([AEIOUY][AEIOUY][^AEIOUY])(\W)?$/,'$1E$2')
							.replace(/([AEIOUY])([BCDGKLMNPRSTV])(\W)?$/,'$1$2$2$3')
							.replace(/E(\W)?$/,'$1')
							.replace(/(\W)?$/,'ING$1') + (word.split(' ').length > 1 ? ' ' : '') + word.split(' ').slice(1).join(' ') );
				break;
			case 3:
			case 4:
				conj.push( conjExists ? word : word.split(' ')[0]							.replace(/E(R|D)(\W)?$/,'E$1E$2')
							.replace(/([AEIOUY][AEIOUY][^AEIOUY])(\W)?$/,'$1E$2')
							.replace(/([AEIOUY])([BCDGKLMNPRSTV])(\W)?$/,'$1$2$2$3')
							.replace(/E(\W)?$/,'$1')
							.replace(/Y(\W)?$/,'I$1').replace(/(\W)?$/,'ED$1') + (word.split(' ').length > 1 ? ' ' : '') + word.split(' ').slice(1).join(' ') );
				break;
		}
	}
	return conj;
}
OTToMeme.returnMoreMost = function(words,m){
	var re1 = /Y$|(SH|AN|RK|NG|ED|NT)$/i
		, re2 = /E?$/i;
	for (var i = 0, comp = []; i < words.length; i++) {
		if (m == 'more') {
			comp.push(words[i]
							.replace(/E(R|D)(\W)?$/,'E$1E$2')
							.replace(/([AEIOUY][AEIOUY][^AEIOUY])(\W)?$/,'$1E$2')
							.replace(/([AEIOUY])([BCDGKLMNPRSTV])(\W)?$/,'$1$2$2$3')
							.replace(/E(\W)?$/,'$1')
							.replace(re1,'$1I').replace(re2,'ER')
													);
		} else if (m == 'most') {
			comp.push(words[i]
							.replace(/E(R|D)(\W)?$/,'E$1E$2')
							.replace(/([AEIOUY][AEIOUY][^AEIOUY])(\W)?$/,'$1E$2')
							.replace(/([AEIOUY])([BCDGKLMNPRSTV])(\W)?$/,'$1$2$2$3')
							.replace(/E(\W)?$/,'$1')
							.replace(re1,'$1I').replace(re2,'EST')
													);
		}
	}
	return comp;
}
OTToMeme.expandEntry = function(tempword,category,attr) {
	if (/^\s*\[[^\]]+\]/.test(tempword)) {
		return tempword;
	}
	var words = tempword.split(/\s*\|\s*/);
	// words = words.split(/\s*,\s*/);
	var singular = this.returnSingular(words[0]);
	if (/^noun$|^noun_mass$/.test(category)) {
		var plural = this.returnPlural(words,singular[1]);
		// var plural = this.returnConj(words,singular[1],1);
		if (plural.length > 1 && singular[1].length == 1) singular = this.padWordList(singular, plural.length);
		return {
			'article': singular[0]
			, 'singular': singular[1]
			, 'plural': plural
			, 'compar': this.returnMoreMost(singular[1],'more')
			, 'superl': this.returnMoreMost(singular[1],'most')
			, 'attr': attr
			, 'syn': singular[1].length
		};
	} else if (/^noun_time$/.test(category)) {
		return {
			'article': singular[0]
			, 'singular': singular[1]
			, 'attr': attr
			, 'syn': singular[1].length
		};
	} else if (/^adjective$/.test(category)) {
		return {
			'article': singular[0]
			, 'desc': singular[1]
			, 'compar': this.returnMoreMost(singular[1],'more')
			, 'superl': this.returnMoreMost(singular[1],'most')
			, 'attr': attr
			, 'syn': singular[1].length
		};
	} else if (/^verb_(in)?tr$/.test(category)) {
		return {
			  'inf': singular[1]
			, 'present': this.returnConj(words,singular[1],1)
			, 'cont': this.returnConj(words,singular[1],2)
			, 'past': this.returnConj(words,singular[1],3)
			, 'perfect': this.returnConj(words,singular[1],4)
			, 'attr': attr
			, 'syn': singular[1].length
		};
	} else {
		return {
			'singular': singular[1]
			, 'attr': attr
			, 'syn': singular[1].length
		};
	}
}
OTToMeme.parseMemes = function(xhr){
	var a = xhr.split('\n');
	for (var i = a.length-1; i >= 0; i--) {
	/* remove comments and empty lines */
		if (/^\s*#.*|^$/.test(a[i])) {
			a.splice(i,1);
		};
	};
	var template, category;
	for (var i = 0, current, logtemplates = false, tname = "", attr, itag, al = a.length; i < al; i++) {
	/* gather class and templates into arrays */
		if (a[i].indexOf(':') == a[i].length-1) {
			/* this needs fixed to not only find : at the end but the whole syntax
			  /^\w+ [\w\d-]+:/.test(a[i]) */
		/* create new class, remove ":" from string */
			current = a[i].substr(0, a[i].length-1);
			switch (0) {
				case current.indexOf('begin '):
					tname = current.substr(6);
					this.memes.category[tname] = [];
					logtemplates = true;
					break;
				case current.indexOf('end '):
					logtemplates = false;
					break;
				case current.indexOf('template '):
					template = current.replace(/^template /,'');
					this.memes.template[template] = [];
					if (logtemplates) {
						this.memes.template[template].name = template;
						this.memes.category[tname].push(this.memes.template[template]);
					}
					break;
				case current.indexOf('regex '):
					break;
				case current.indexOf('class '):
					category = current.replace(/^class /,'').split('--');
					attr = category[1] ? category[1].split('-') : null;
					category = category[0];
					if (!this.memes.class[category]) this.memes.class[category] = [];
				default:;
			}
		} else {
		/* add to class or template */
			switch (0) {
				case current.indexOf('template '):
					this.memes.template[template].push(a[i]);
					break;
				case current.indexOf('regex '):
					this.memes.regex[current.replace(/^regex /,'')] = a[i];
					break;
				case current.indexOf('class '):
					var entry, iattr;
					if (/^\s*\[[^\]]+\]/.test(a[i])) {
						entry = [a[i]];
						iattr = null;
					} else {
						entry = a[i].split('--');
						iattr = entry[1] ? entry[1].split('-') : null;
					}
					this.memes.class[category].push(
							this.expandEntry(
								entry[0]
								, category
								, attr ? iattr ? attr.concat(iattr) : attr : iattr)
						);
				default:;
			}
		};
	};
	this.fillBlanks();
	if (this.GET.u) {
		this.memes.templates = [].concat(this.memes.category["m_templates"]
		,this.memes.category["h_templates"]);
	} else {
		this.memes.templates = [].concat(this.memes.category["m_templates"]);
	}
}
