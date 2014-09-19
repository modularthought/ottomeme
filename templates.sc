# ----------------------------- RegEx definitions -----------------------------
regex intensify:
(?:I?{EY}?|(?:ED)?|({AEIOU}?({GTN}?)))$/$1$2/
regex defize:
^/THE /
regex acronym:
({^ }){^ }+ /$1/g
regex nodef:
^THE //
regex middle-consonant:
({AEIOU})({^AEIOU})({^AEIOU}*)({AEIOU})/$1$2$2$3$4/
regex ooh-vowel:
({A-Z}+?|{᐀-ᙿᢰ-ᣵ})({AEIOU᐀-ᙿᢰ-ᣵ*})({^ }*|$)/$1$2$2$2$2$3/g
regex ooh-consonant:
({AEIOU*})({^AEIOU})({^AEIOU}*)({AEIOU*}?)(\w*\b)/$1$2$2$2$2$3$4$4$4$5/g
regex ooh:
\b(.)(.+?)({^'}?)({^'}?)(.+?)(.)\b/$1$2$3$3$4$4$4$5$6/g
# -------------------- Templates (available for rotation) --------------------
# @azule credit when not noted.
# Template form syntax (using regex to notate) [name = regex (comment)\n [english]]:
# comment		= /^				 #[a starting double # followed by all characters up to newline]
# comment		= /^\s*#.*\n/		(include in file)
				 #[excluding whitespace, a starting single # followed by all characters up to newline]
# postprocess	= /``\w+$/		(execute templates on final draft meme)
				 #[a double ` with :alpha: characters until end of line]
# bold			= /\*[^*]*\*/g
				 #[non-greedy matching pair of *]
# italic		= /~[^~]*~/g
				 #[non-greedy matching pair of ~]
# underline		= /_[^_]*_/g
				 #[non-greedy matching pair of _]
# small-caps	= /=[^=]*=/g
				 #[non-greedy matching pair of =]
# template		= /^[^a-z[\]]*/g
				 #[case sensitive (uppercase only) non-[] characters]
# linebreak		= / {2}/g
				 #[two spaces in a row]
# super			= /\^[^^]/g
				 #[single ^ followed by non ^ character]
# sub			= /\`[^`]/g
				 #[single ` followed by non ` character]
# spoiler		= /#[^#]*#/g
				 #[non-greedy matching pair of #]
# preprocess	= /^\^|#(.*)#\$/	(exclude from final display)
				 #[a starting ^# followed by any characters up to #$]
# replacement	= /\[([^[]*)\]/g
				 #[starting open [ including non-closing ] until closing ]]
# literal		= /^[^a-z[\]]*/
				 #[case sensitive (uppercase only) non-[] characters]
# urlencoded	= /%([\dA-F]{2})/gi
				 #[% followed by two hexadecimal characters]
# history		= /^\$\d/
# class			= /^(\w:)?([a-z][a-z\d_]*)/
# /(-\w+)+/g
# /--/
# /\//g
# alternatives	= literal,history,class
# replacement = ($1 = ,)
# template = (template | replacement)+
# comment | preprocess? template postprocess?
begin n_templates:
template redundant:
# "Redundant spoiler is redundant."
# similar to xcatisx
REDUNDANT [noun] IS REDUNDANT.
template rnm:
# Euphemism meme, constructed by @HES & @mrob27 # RNM = round number milestone
[noun_character] IS [verb_tr-cont] [noun-article-singular, noun_place, noun_character]  =~...IF YOU KNOW WHAT I MEAN.~=
end n_templates:
begin m_templates:
# ---------------------------- OTT specific memes ----------------------------
template noticethex:
DID ANYONE NOTICE THE [JAVASCRIPT@0.2, noun_definite, noun-singular]?
template redundancy:
[REDUNDANCY IS@0.2, noun_mass--positive/$/ IS/, noun-plural--positive/$/ ARE/, REDUNDAKITTY IS@0.1] [MOLPISH@0.5, adjective--positive, MOLPFISH@0.1, MOLPHISH@0.1].
template darkening:
# is this related to '..and all I got was this lousy t-shirt' and by how much?
*I [WAITED@0.8, verb_tr-past--positive] HALF [AN HOUR@0.1, noun_time-article-singular--duration] FOR ONE [DARKENING, verb_tr-cont@0.3] [PIXEL@0.5, noun-singular].*
template nini:
# @Link. @mrob27 adjusted template
NI NI [NI@0.33, NI NI@0.5, NI NI NI] [CHUPACABRA@0.2, noun-singular, noun_mass] [PING-PONG BALL@0.2, noun-singular, noun_mass].
template ott-thus:
[t:xkcd51, t:xkcd109-sub, t:xkcd208, t:xkcd414, t:xkcd550, t:xkcd859, t:xkcd1013, t:xkcd1017, t:xkcd1110a, t:xkcd1171, t:xkcd1190f1018, t:xkcd1278, t:xkcd1393, t:xkcd1401]  ...THUS ENDS [TIME, noun-plural/^/THE /].
template latestvhf:
~[adjective] [noun-singular, noun-plural, noun_mass, verb_tr-cont]~ IS [A HIDDEN TRACK ON@0.25, THE LATEST SINGLE OFF OF, THE NAME OF@0.01] THE [NEWEST, LATEST@0.3] [VHF, VITAL HOTDOG FUNCTION] ALBUM.
template ott-true:
^#[noun-singular, noun_mass, noun_time-singular--duration, noun_definite, noun_character/<nodef>][$0/$|­/ /g][$1/%3C|%3E|{<>}//g]#$OT[$2/<acronym>]:  ONE TRUE [$0].
template ott-metaphor:
# By @Link, a running joke about the OTC originating with early theories explaining xkcd 1190 "Time"
MAYBE [noun_character] [IS PREGNANT@0.2, HAS CANCER@0.25, HAD AN ABORTION@0.33, GOT MARRIED@0.5, GOT DIVORCED]!  MAYBE [THE OTC@0.2, noun-article-singular, noun_mass, noun_place] IS A METAPHOR FOR [THIS@0.1, THAT@0.1, noun-plural, noun_mass]!
template ott-meme:
# @azule, OTT:2062:19#p3636039, added by @mrob27; @azule removed 'SENTENCE' and changed chance of "WELL,".
[WELL%2C @0.5,]ANYTHING *COULD* BE [A MEME@0.2, noun-article-singular], INCLUDING THIS [noun-singular] I JUST [verb_tr-past].
template glr-speech:
# GLR Hugo speech by @Link
[noun, GAZEBO@0.33]. [noun_mass, OINTMENT@0.33]. [noun, HARPSICHORD@0.33]. [noun, CREDENZA@0.33]. [noun, noun_place/<nodef>, BUNGALOW@0.33)].
# ----------------------------- xkcd origin memes -----------------------------
template xkcd1:
I WONDER WHERE I'LL [FLOAT@0.1, verb_intr-inf] NEXT?
template xkcd10:
^#[noun-article-singular, noun_mass-article][$0/ |-|'//g]#$SEMENCOFFEECANCERHELPIMTRAPPEDIN[$1, AMOLPYMOLPYMOLPYMOLPYMOLPYMOLPYMOLPYMOLPYGRAPEVINEGRAPEVINE@0.15]FACTORYSTARSANDBACONBABIESONICE...``softBreak
template xkcd11:
NONE OF THE PLACES I [FLOATED, verb_intr-past@0.5] HAD [noun-plural].
template xkcd37:
THAT'S [A SWEET, adjective-article--positive] ASS-[noun-singular].
template xkcd51:
WE HAD [noun_mass-article--negative] PARTY, BUT IT TURNED OUT NOT TO BE VERY [MOLPISH@0.5, adjective--positive].
template xkcd54:
*[noun_definite/<defize>, noun_mass, verb_intr-cont, noun-singular--mineral]*. IT WORKS, CH*RPIES.
template xkcd109:
*SPOILER ALERT­!*  [t:xkcd109-sub]
template xkcd137:
# @Link chose the base words: CHIRP. THAT. MUSTARD. (which could be construed to be based on CHIRPING MUSTARD.)
*[CHIRP, verb_tr-inf--negative/ /. /g]. THAT. [MUSTARD, noun-singular--negative/ /. /g].*
[t:darkening, t:ott-metaphor, t:xkcd11, t:xkcd51, t:xkcd180, t:xkcd821c2, t:xkcd859]  THIS IS VERY IMPORTANT, SO I WANT TO SAY IT AS CLEARLY AS I CAN:  *[CHIRP, verb_tr-inf--negative/ /. /g]. THAT. [MUSTARD, noun-singular--negative/ /. /g].*
template xkcd149:
[SUDO, MOLPY@0.1] MAKE ME [noun-article-singular].
template xkcd178:
I'M NOT REALLY INTO [noun-plural--positive, noun_mass--positive].
template xkcd180:
IF YOU [DIE@0.3, verb_intr-inf] IN [noun_place], YOU [$0] IN _REAL_ _LIFE_!
template xkcd194:
[noun-plural]: THEY ARE ABOUT ~THIS~ [BIG@0.25, SEAISH@0.33, adjective--positive].  NOW CAN WE _PLEASE_, AS [A CULTURE, THE OTT, A THREAD, A NEEDLE-PULLED THING@0.2], MOVE ON?
template xkcd208:
EVERYMOLPY, STAND BACK.  I KNOW [verb_intr-cont].
# @azule format. from the t-shirt, linked by @ED
/EVERYMOLPY, STAND BACK/  I KNOW [verb_intr-cont].
template xkcd231:
YOU'RE [noun-article-singular, noun_character--single]!
template xkcd285:
[%5B]_[verb_intr-cont--positive, noun-plural--positive, noun_mass--positive] NEEDED_[%5D]
template xkcd325:
# second template in place due to OTTer use.
INSTEAD OF [noun_mass--positive, noun-article-singular--positive], PACKAGE CONTAINED [noun_mass--negative, noun-article-singular--negative].  WOULD NOT [BUY@0.5, verb_intr-inf--positive] AGAIN.
PACKAGE CONTAINED [noun_mass--positive, noun-article-singular--positive].  WOULD [BUY@0.5, verb_intr-inf--positive] AGAIN.
template xkcd349:
IF WE MAKE IT BACK ALIVE, YOU'RE NEVER [verb_tr-cont] ANYTHING AGAIN.
template xkcd378:
_REAL_ [t:xkcd378-sub1]
template xkcd401:
[NEAT­@0.3, adjective--positive]!  I JUST GAVE [noun-article-singular, noun_place] CANCER.
template xkcd405:
I *LIKE* MY [HAT@0.25, noun-singular].
template xkcd414:
OUR COPY OF THE [noun_definite, noun-singular--mineral] HAS A COUPLE MISTRANSLATIONS.  WHICH WE REFUSE TO FIX.
template xkcd442:
THE [noun-singular--positive]'S PRETTY COOL.
template xkcd481:
...I'M [noun-article-singular].  I... I DIDN'T KNOW.
template xkcd528:
WELL, IT'S MOLPIER THAN [noun-plural--negative, noun_mass--negative].
template xkcd550:
SUP [DAWG@0.1, noun_character/<nodef>], I HERD U DIDN'T LIEK [verb_intr-cont--negative], BUT I ACCIDENTALLY IN YOUR [noun-singular].``dawgify
template xkcd595:
I DON'T THINK [verb_tr-cont--negative] [noun-article-singular] COUNTS AS SEXY.
template xkcd598:
CAN YOU TRY TO LOOK... [adjective--negative/Y$//, noun-singular--negative/<intensify>]IER?
template xkcd616:
I DON'T KNOW WHAT YOU JUST SAID BECAUSE I WAS THINKING ABOUT [verb_intr-cont, noun_mass, noun_place, noun_definite/^/THE /, noun-plural].
template xkcd647:
[THE ZANCLEAN FLOOD@0.5, noun_mass--compound] HAPPENED BEFORE I WAS BORN, YET I'M OLD ENOUGH TO HAVE THIS CONVERSATION WITH YOU.
template xkcd703:
~LISTEN UP­!~  THE FIRST RULE OF [noun_mass, noun-singular] CLUB IS THE FIRST RULE OF [$0] CLUB.
template xkcd714:
IN MY [PORN@0.3, SLASH-FICTION@0.2, noun-singular], PEOPLE ~[verb_intr-inf]~.
template xkcd821c2:
I KNOW IT'S NATURAL AND ALL, BUT I REALLY WISH [noun_character] WOULDN'T TRY TO [verb_tr-inf] ME.
template xkcd859:
[adjective--positive/^/AN UN/, adjective-article--negative] [noun-singular] CREATES AN UNRESOLVED TENSION THAT WILL STAY WITH YOU ALL [DAY, noun_time-singular--duration].
template xkcd878:
IT'S THE SECOND RULE OF [noun_mass, noun-plural, noun_place]­:  *NO [NESTING@0.5, verb_intr-cont].*
template xkcd902:
[noun_character--single] AND [noun_character--single] AT [noun_character]'S.
template xkcd915:
WHAT A SURPRISE — ~YOU~ PRAISING [noun-article-singular] [FRAME, NEWPIX].
template xkcd974:
I'M DEVELOPING A SYSTEM TO [PASS YOU@0.5, verb_tr-inf] ARBITRARY [CONDIMENTS@0.2, noun-plural--mineral].
template xkcd979:
WHO WERE YOU, [noun_character/<nodef>]?  ~*WHAT DID YOU SEE?!*~
template xkcd1005:
SERIOUSLY, DON'T SCREW WITH [noun-singular].  IF YOU BREAK THIS [noun_mass, noun_place/THE //], WE ARE _~NOT~_ MAKING YOU A NEW ONE.
template xkcd1013:
[MOLPY@0.8, WAKE] UP, [SHEEPLE@0.8, BAAHMOLPIES@0.8, noun-plural--animal]­!  [$0] UP, [$1]­!  ~*[$0] UP, [$1]!!*~
template xkcd1017:
# modified to be used singularly
I'VE TRIED TO MAKE AN EXTREME SPORT OUT OF... ~[verb_intr-cont]~.
template xkcd1025:
[noun-singular--animal] [verb_tr-cont] [DUNGEON@0.3, noun_definite]  ... DOT CHIRPING MUSTARD DOT COM.
[t:glr-speech, t:xkcd936-sub]  ... DOT CHIRPING MUSTARD DOT COM.
template xkcd1046:
"[noun-singular, adjective, noun_mass, noun_place/<nodef>, verb_intr-cont]" TOTALLY JUST STOPPED SEEMING LIKE A REAL WORD.``unrealify
template xkcd1037-life-in-lab:
[noun_character] AND [noun_character] CREATE [LIFE@0.2, noun-singular, noun_mass, noun_definite/^/THE /] IN LAB:  "THE TRICK WAS [CH*RPING@0.2, verb_intr-cont]".
template xkcd1110a:
I CAME OUT HERE TO CHEW [BEESNAKES@0.6, noun-plural--animal]...  ~AND I'M ALL OUT OF [$0].~
template xkcd1110b:
YOU ~MANIACS­!~  THAT [HUGO AWARD@0.1, verb_intr-cont/$/ TROPHY/, noun-singular--positive/$/ TROPHY/] WAS SUPPOSED TO BE ~MINE!~
template xkcd1134:
^#[noun-article-singular--animal]#$LEAVE [$0/^AN? /THE /].  WHY DID YOU HAVE [$0]?
template xkcd1131:
TO THE SURPRISE OF [noun_character], [NUMBERS CONTINUE, noun-plural/$/ CONTINUE/, noun_mass/$/ CONTINUES/] TO BE BEST SYSTEM FOR DETERMINING WHICH OF TWO THINGS IS [LARGER, adjective-compar, noun-compar].
template xkcd1171:
I GOT 99 [PROBLEMS@0.8, noun-plural--animal], SO I USED [noun-plural]. NOW I HAVE 100 [$0].
#1190 (by frame)
template xkcd1190:
#the title text
"[t:xkcd1190-sub]" IS [noun_time--period, THIS NEWPIX]'S COMMANDMENT.
^%[t:xkcd1190-sub, t:redundant]%$``spoiler
template xkcd1190f408:
I DON'T UNDERSTAND WHAT THE [noun-singular] IS DOING.
template xkcd1190f563:
THE [SEA@0.5, noun-singular] IS [BIG@0.5, adjective--large-positive]. THE [RIVER@0.5, noun-singular] IS [SMALL@0.5, adjective--small-positive].
template xkcd1190f661:
I DON'T KNOW HOW [noun-singular/<defize>, noun_mass] WORKS.
I DON'T KNOW HOW [noun-plural] WORK.
template xkcd1190f833:
IT CAN DO WHATEVER IT WANTS.  IT'S [THE SEA@0.5, noun-singular/<defize>, noun_mass].
template xkcd1190f1018:
IF WE DON'T FIND SOMETHING [TODAY, noun_time--period], WE'LL HAVE TO START USING THE [noun-singular--negative].
template xkcd1190f1073:
THAT'S WHAT THE FIRST PART OF UNDERSTANDING [noun_mass, verb_intr-cont, verb_tr-cont] LOOKS LIKE.
template xkcd1190f1096:
THE [noun-singular] IS EVEN BIGGER THAN IT LOOKED.
template xkcd1190f1130:
OUR [noun-singular] ISN'T [adjective--positive] ENOUGH.
template xkcd1190f1526:
IT'S A PRETTY [BIG@0.5, adjective--large-positive] [SEA@0.5, MEGAN@0.1, noun-singular]. IT PROBABLY KNOWS WHAT IT'S DOING.
template xkcd1190f1622:
IT'S OK!  I WON'T [EAT@0.3, verb_tr-inf] YOU.
template xkcd1190f2115:
YOU COULD SPEND A THOUSAND LIFETIMES STARING AT [SEMEN­COFFEE­CANCER­STAR­SAND­BACON­BABIES­ON­ICE] AND SAND,  THINKING AS HARD AS YOU COULD,  AND YOU'D NEVER GUESS THE WORLD HAD THINGS LIKE [noun-plural] IN IT.
template xkcd1190f2119:
# @mrob27.
MORE [noun_mass, noun-singular]. MAYBE [DIFFERENT@0.5, adjective].
template xkcd1190f2707:
# @azule. also uses f2706
I LEARNED A WORD.  [special_beanish-singular]ᐨ   "[noun_own/<nodef>, verb_intr-inf, adjective]."  =PROBABLY=.
template xkcd1190f2830:
OUR [noun-singular] WAS TOO [SMALL@0.5, adjective--small-positive].
template xkcd1278:
MY HOBBY­:  CONVINCING GENETIC ENGINEERS THAT [noun-plural--animal] WOULD LOOK BETTER IF THEY HAD [noun-singular--animal] TAILS.
template xkcd1289:
WILL [verb_tr-cont] [noun_character, noun_mass, noun-plural, verb_intr-cont@0.1] MAKE US ALL [GENIUSES, MORONS, MORE EMPATHETIC, LESS CARING]?
WILL [noun_mass, noun-plural, noun_place, verb_intr-cont] ALLOW US TO BETTER UNDERSTAND EACH OTHER AND THUS MAKE WAR UNDESIRABLE?
WILL [verb_tr-cont] [noun_character, noun_mass, noun-plural, verb_intr-cont] DESTROY [WHOLE INDUSTRIES, MUSIC, ART]?
WILL [verb_tr-cont] [noun_character, noun_mass, noun-plural, verb_intr-cont] BRING ABOUT WORLD PEACE?
WILL [verb_tr-cont] [noun_character, noun_mass, noun-plural, verb_intr-cont] CAUSE WIDESPREAD ALIENATION BY CREATING A WORLD OF EMPTY EXPERIENCES?
WILL [TEENS, noun_character--otc-couple, noun_character--otc-group] USE [noun_character--!underage, noun_mass, noun-plural--mineral, noun-plural--animal, noun_place] FOR SEX?
template xkcd1317:
I FEEL "PARALYZED" BY [OVERWHELMING EXISTENTIAL DREAD, THE SADNESS, T** **D].  ...AND YET FOR SOME REASON I'M ~*REALLY*~ EXCITED ABOUT [verb_intr-cont, noun-plural, verb_tr-cont, noun_mass, noun_definite/<defize>]?
template xkcd1318:
*ACTUALLY,* [t:redundancy, t:nini, t:rnm, t:xkcd37, t:xkcd178, t:xkcd378, t:xkcd1190f563]
template xkcd1340:
WHOA, IT'S [FRAME , =NP=, NEWPIX ]^%%$!  UNDER [GLR, GREAT LORD RANDALL, MSCHA, GEEKWAGON, AUBRONWOOD]'S SYSTEM, THAT [$0/ //] WILL ~NEVER BE [LOGGED, ONGED] AGAIN!!~``np
template xkcd1393:
^#[noun-singular, noun_place, noun_time--period, noun_mass, noun_time-singular--duration, noun_definite/<defize>][$0/\bTHE\b/Þ/g][$1/<ooh-vowel>]#$...=oo=OO=ooo=O=o=...  [$2/Þ/THE/g] IS [verb_intr-cont/<ooh-consonant>]!``ooh
template xkcd1401:
THE NICE THING ABOUT HEAD^%[noun-plural--animal, TREBUCHETS@0.2, TREBUCHATS@0.2]%$ IS THAT IT'S REALLY EASY TO GET [OTHER PEOPLE, OTTERS] TO BELIEVE IN THEM.``incrc
end m_templates:
# ----------- Subtemplates (only accessible through template calls) -----------
template xkcd378-sub1:
[noun-plural] USE [noun-article-singular, noun_mass].
template xkcd378-sub2:
EXCUSE ME, BUT _REAL_ [t:xkcd378-sub1].  OH YEAH! GOOD OL' C-X M-C M-[$1/^AN? //]...
template xkcd109-sub:
[noun_character] [KILLS@0.8, verb_tr-present--negative, verb_tr-present--positive@0.1] [noun_character] WITH [noun_place, noun-article-singular]!
template xkcd936-sub:
[CORRECT, adjective--positive] [noun_character/<nodef>] [noun-singular] [noun-singular]
template xkcd1190-sub:
[verb_tr-inf/$/ IT./, RUN.@0.5, ...@0.5, ....@0.5, THE END.@0.5, T** **D.@0.5, LOOK OUT!@0.5]
template xkcd1318-sub:
# removed individual templates and instead assigned them all to an array. it works the same.
[noun-plural] SUGGEST IT'S [adjective].
IT'S [noun-article-singular].
IT'S [adjective-article] [noun-singular].
IT'S [noun-article-singular] [verb_tr-perfect] BY THE [noun-singular, adjective] [noun-plural].
IT'S THAT PLUS [adjective] [noun-singular].
IT'S [verb_tr-perfect] IN A [noun-singular] THAT'S [verb_tr-perfect].
