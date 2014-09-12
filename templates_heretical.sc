# @azule credit only if noted.
# these are mostly taken from @mrob27, but some may be uncredited to @Link
begin h_templates:
# ---------------------------- @azule's additions ----------------------------
template confused:
# @azule. Common phrase used on Wikipedia and elsewhere to note a similarly spelled or confused word.
[noun].  ~NOT TO BE CONFUSED WITH [noun].~
[verb_intr-cont].  ~NOT TO BE CONFUSED WITH [verb_intr-cont].~
template livingbra:
# @azule. The IT Crowd.
IT CAN NEVER GO BAD.  IT'S A ~LIVING [noun]~.
template regularone:
# @azule. Not sure of origin. Possibly AAoOD.
IS THAT [noun-article/^(AN? )(\W)?({^AEIOU}{BCDFGHJKLMNPQRSTVWXYZ}?|{AEIOU}{BCDFGHJKLMNPQRSTVWXYZ})/$1$2$3-$3-$3-$3-$3/]?  NO, IT'S JUST A REGULAR ONE.
template growontrees:
# @azule.
# MONEY DON'T GROW ON TREES.
[nouns] DON'T [GROW, verb_intr-inf@0.3] ON [TREES, BAOBABS].
# ---------- @mrob27 and @Link and the original Automeme's additions ----------
template e404:
^#[404-NOT FOUND@0.33, 408-REQUEST TIMEOUT@0.5, 503-UNAVAILABLE]#$[$0/-.*$//] - [noun, noun_character] [$0/^.*-//]
template fewxshort:
... [XE, noun_character--!group]'S [JUST @0.5,]A FEW [noun-plural] [SHY@0.5, SHORT] OF [noun-article-singular].
template allyourbase:
ALL YOUR [noun-singular] ARE BELONG TO [US@0.2, noun-singular, noun_mass, noun_character].
template killwbrain:
ALSO, I CAN [verb_tr-inf] YOU WITH MY [noun-singular].
template grabmyx:
# @Link.
[noun_character], GRAB MY [noun-singular, noun-plural]
template wildappears:
A WILD [noun-singular] [APPEARED@0.5, APPEARS]!
template attackweakpt:
ATTACK ITS WEAK POINT FOR [adjective] [noun-singular, noun-plural, noun_mass].
template betterxmyy:
# from @mrob27's list. supertemplate by @azule.
BETTER [verb_tr-inf] MY OWN [noun-singular, noun_mass].
[t:ott-thus]  BETTER [verb_tr-inf] MY OWN [noun-singular, noun_mass].
template ceilingcat:
CEILING [noun--animal, noun_character] IS WATCHING YOU [verb_tr-inf, verb_intr-inf].
CEILING [noun-singular, noun_character] IS WATCHING [noun_character] [verb_tr-inf] [noun-article-singular, noun_place, noun_character].
template fingmagnets:
CH%2ARPING [noun-plural], HOW DO THEY WORK?
template xallthethings:
[verb_tr-inf] *ALL* THE [noun-plural, noun_mass]!
I [verb_tr-past] *ALL* THE [noun-plural, noun_mass]!
template consider:
[t:consider1a, t:consider2, t:consider3]
template beanymore:
COULD [noun-plural, noun_mass, noun_character] *BE* ANY MORE [adjective]?
template crouching:
CROUCHING [RAPTORCAT@0.1, noun-singular], HIDDEN [DRAGON@0.1, noun-singular]
template dialx:
^#[noun-singular, noun-plural, noun_mass, noun_character][$0/<nodef>]#$DIAL [$1/^(?:\W)?(.).+$/$1/] FOR [$1].
template xharder:
[verbs-inf] HARD 2: ~[$0] HARDER~
template hatebeautiful:
DON'T [HATE@0.3, verb_tr-inf] ME BECAUSE I'M [FLUTTERBEEWINGISH@0.2, WINGISH@0.25, adjective].
template thinkofthex:
EVERY TIME YOU [MAKE A PUN@0.2, verb_intr-inf], [RANDALL@0.3, THE GLR@0.4, noun_character] [verb_tr-present] [noun-article--animal].  PLEASE, THINK OF THE [$3/^AN? //].
template momenttotalk:
EXCUSE ME [SIR, MA'AM],  DO YOU HAVE A MOMENT TO TALK ABOUT [noun_character, noun-plural, noun_definite/^/THE /, noun_mass]?
template floatlikea:
[verbs-inf] LIKE [A FLUTTERBEE@0.2, noun-article-singular], [verbs-inf] LIKE [A BEESNAKE@0.2, noun-article-singular].
template ggw:
IT'S ~[noun-plural--animal] GONE WILD[@0.3, %20II@0.3, %20III@0.3, %204@0.3, %205@0.3, %206@0.4, %207]!~
template dontletfriends:
[FRIENDS@0.5, noun-plural] DON'T LET [$0] [verb_tr-inf] [noun-plural, noun_mass].
template yearnfree:
[BRING@0.5, GIVE] ME YOUR [adjective--negative], YOUR [adjective--negative], YOUR [adjective] [noun-plural] YEARNING TO [t:yearnfree1, t:yearnfree2].
template gotx:
GOT [noun_mass, noun_mass, noun-plural]?
template arethenewx:
[noun-singular, noun_mass] IS THE NEW [noun-singular, noun_mass].
[noun-plural] ARE THE NEW [noun-plural].
template shipahoy:
[RAFTCASTLE AHOY!  @0.2, ]HAST [SEEN@0.5, verb_tr-past] THE [adjective] [WHALPY@0.33, noun-singular]?
template havetux:
HAVE [noun], WILL [TIME-TRAVEL@0.1, TRAVEL@0.4, verb_intr-inf].
template basicallyrun:
HELLO, I'M [noun_character].  BASICALLY, [RUN@0.4, verb_intr-inf]!
template preparetodie:
HELLO. MY NAME IS [noun_character].  YOU [verb_tr-past] MY [noun-singular, noun-plural, noun_mass].  PREPARE TO [DIE@0.4, verb_intr-inf].
template getpragnent:
HOW IS [noun-singular, noun_mass] FORMED? HOW [noun-singular, noun_mass, noun_character] GET [PRAGNENT@0.33, adjective]?
template accidentally:
I ACCIDENTALLY [noun-article-singular, noun_mass, noun_definite/<defize>, noun_place], IS THIS [BAD@0.33, DANGEROUS@0.5, ENDISH@0.5, adjective--negative]?
template iambest:
I AM *[BEST@0.3, MOLPIEST@0.3, adjective-superl] [noun-singular, noun_mass]*, THE [$0] [$1] EVER!
template hearmey:
I AM [noun_character], HEAR ME [ROAR@0.5, verb_intr-inf]!
template finglove:
I CH%2ARPING LOVE [noun-plural, noun_mass, verb_intr-cont]!
template thuglife:
I DIDN'T CHOOSE THE [noun-singular, noun_mass, noun_definite, noun_place/<nodef>] LIFE;  THE [$0] LIFE CHOSE ME.
template dontalways:
I DON'T ALWAYS [verb_intr-inf],  BUT WHEN I DO, I [PREFER@0.2, verb_tr-inf] [noun-plural, noun_mass].
I DON'T ALWAYS [verb_tr-inf] [noun_mass, noun-plural],  BUT WHEN I DO, I [PREFER@0.2, verb_tr-inf] [noun-plural, noun_mass].
template lackxdisturb:
I FIND YOUR LACK OF [noun-plural, noun_mass] DISTURBING.
template ifxiswrong:
IF [verbs-cont, verbs-cont, verbs-cont, verbs-cont, noun_character, noun_mass, noun-singular/<defize>] IS WRONG, I DON'T WANT TO BE RIGHT.
IF [verb_tr-cont] [YOU@0.3, noun_character, noun_mass, noun-plural, noun-article-singular] IS WRONG, I DON'T WANT TO BE RIGHT.
template newoverlords:
# @azule added "bots" to end of phrase.
I, FOR ONE, WELCOME OUR NEW [noun-singular] [OVERLORDS, BOTS].
template canhas:
I CAN HAS [noun-singular].
I HAS [noun-article-singular]. YOU CAN HAS MY [$0/^AN? //].
template reportedcrime:
I HAVE REPORTED YOU TO [noun_character] FOR [STEALING@0.5, verb_tr-cont] [noun-plural, noun_mass] AS IT IS A CRIME.
template coveredin:
I LIKE MY [MEN@0.25, WOMEN@0.33, noun-plural, noun_mass] LIKE I LIKE MY [noun-plural, noun_mass]:  COVERED IN [noun-plural, noun_mass].
template ireallymeanx:
I'M GOING TO [verb_tr-inf] [MY@0.5, THIS] [noun-singular], AND BY '[$0]' I MEAN '[verb_tr-inf]', AND BY '[$2]' I MEAN '[noun_mass, noun-plural]'.
template inur:
I'M IN [YOUR@0.3, UR@0.5] [noun-singular, noun_mass], [verb_tr-cont] [$0] [noun-plural, noun_mass].
template eatedit:
I MADE YOU [noun-article-singular], BUT I [verb_tr-past] IT.
template sorrydave:
I'M SORRY, [noun_character/<nodef>].  I'M AFRAID I CAN'T [DO@0.15, verb_tr-inf] THAT.
template insoviet:
^#[RUSSIA, noun_place][$0/^/SOVIET /]#$IN [$1/SOVIET THE/THE SOVIET/], [noun-singular, noun_mass, noun_character] [verb_tr-present] *YOU*.
template instantx:
INSTANT [noun-singular, noun-plural, noun_mass],  JUST ADD [noun-plural, noun_mass].
template whatyoudidthere:
I SEE WHAT [YOU@0.5, noun_character] [verb_tr-past] THERE
template xtiemnao:
IS IT CAN BE [noun-singular] TIEM NAO PLEES?
template doesntafraid:
I THINK [noun_character] IS A PRETTY [TREEISH@0.2, MOLPISH@0.3, adjective] [XUY@0.1, noun-singular].  'XEH [verb_tr-present] [noun-plural, noun_mass, noun_character] AND DOESN'T AFRAID OF ANYTHING.
template superx:
IT'S [noun-article-singular]. IT'S [noun-article-singular]. IT'S *SUPER[noun-singular]!*
template supereffective:
[PIKACHU@0.2, noun_character] USED [noun_mass, verbs-inf]!  [IT'S SUPER EFFECTIVE!@0.5, IT'S NOT VERY EFFECTIVE...@0.7, ...BUT IT FAILED!]
template allthewaydown:
IT'S [noun-plural, noun_mass] ALL THE WAY DOWN.
template thinktherefoream:
I [verb_intr-inf], THEREFORE I [verb_intr-inf, AM@0.1].
I [THINK@0.5, verb_intr-inf], THEREFORE I [verb_intr-inf].
template jarofx:
I'VE GOT A JAR OF [noun-plural, noun_mass, noun_mass]! I'VE GOT A JAR OF [$0]!  AND GUESS WHAT'S INSIDE IT!
template getinthecar:
GREAT LORD [RANDALL, =DAVEAN=], IT'S [noun-article-singular]!  GET IN THE [CAR@0.33, RAFTCASTLE@0.2, noun-singular, noun_mass]!
template keepcalm:
KEEP CALM AND [MOLPY@0.2, verbs-inf] ON.
REMAIN [CALM@0.2, adjective] AND [verbs-inf] [noun_mass, noun-plural].
template mathishard:
[verb_intr-cont] IS HARD, LET'S GO [verb_intr-inf].
template maxresults:
MAXIMUM [noun-plural, noun_mass] YIELDS MAXIMUM [noun-plural, noun_mass]
template bringtotheyard:
# @Link.
MY [noun-singular] BRINGS ALL THE [noun-plural] TO [THE YARD@0.5, noun_place].
template socash:
MY [noun_definite, noun_mass] JUST [verb_tr-past] ME;  M%2ASTARD WAS SO [CASH@0.5, adjective].
template kingdomfor:
[noun-article-singular],  [$0]!  MY KINGDOM FOR [$0]!
template youarethe:
NO, [noun-singular, noun_mass, noun_character/<nodef>].  *YOU* ARE THE [noun-plural, noun_mass].
template theybex:
NOOOO!  THEY BE [verb_tr-cont/ING/IN'/] MY [noun-singular, noun-plural, noun_mass]!
template xiscutex:
[noun_character, noun] IS A CUTE [$0/<nodef>].
template notsureif:
NOT SURE IF [verb_intr-cont] OR JUST [verb_intr-cont, adjective].
template ihavextoy:
NOW IF YOU'LL EXCUSE ME, I HAVE [noun-article-singular, noun-plural, noun_mass] TO [verb_tr-inf].
template timeforallgoodx:
NOW IS THE TIME FOR ALL [TREEISH@0.33, MOLPISH@0.5, GOOD, adjective--positive] [noun-plural--animal] TO COME TO THE AID OF [noun-article-singular, noun_place].
template inxnoonecanx:
^#[noun_place]#$IN [$0], [NO-ONE@0.5, NOMOLPY] CAN [SEE@0.5, HEAR] YOU [verbs-inf].
template notgoodwithx:
OH [GLR,GL=D=]  HOW DID [THIS@0.5, noun-plural, noun_mass, noun_character] GET HERE  I AM NOT GOOD WITH [noun-plural, noun_mass]
template haiixedyoury:
OH HAI, I [verb_tr-past] YOUR [noun-singular, noun-plural, noun_mass].
template onedoesnotsimply:
ONE DOES NOT SIMPLY [verb_intr-inf] INTO [MORDOR@0.3, noun_place].
template oneringtobind:
^#[noun_place]#$ONE [noun-singular] TO [RULE@0.75, verb_tr-inf] THEM ALL,  ONE [$1] TO FIND THEM.  ONE [$1] TO [BRING@0.7, verb_tr-inf] THEM ALL AND IN [$0] BIND THEM.
template onexdoesnot:
ONE [noun-singular] DOES NOT [noun-article-singular] MAKE.
template inspaaaace:
[noun-plural, noun_mass, noun_character]...  IN SPAAAACE!
template xonmyy:
[noun-plural, noun_mass]?  [IN@0.5, ON] *MY* [noun-singular, noun_mass]?
template protip:
PROTIP: TO [DEFEAT@0.15, verb_tr-inf] THE [noun-singular, noun_mass], [verb_tr-inf] IT UNTIL IT [verb_intr-present].
template pushbutton:
PUSH BUTTON, RECEIVE [noun-singular, noun-plural, noun_mass].
template xwithyoury:
[noun_character], [verb_tr-inf] [noun-singular, noun-plural/<defize>]...  WITH YOUR [noun-singular, noun-plural, noun_mass]!
template savexridey:
SAVE [noun-article-singular],  [EAT@0.12, RIDE@0.15, verb_tr-inf] [noun-article-singular].
template savetheworld:
[SAVE@0.5, verb_tr-inf] THE [noun-singular, noun-plural, noun_mass], [$0] THE WORLD.
template xhappens:
[adjective] [noun] HAPPENS.
[noun, verb_tr-inf] HAPPENS.
template uliek:
SO, I HERD U [LIEK@0.25, verb_tr-inf] [noun-plural, noun_mass].
template thanksforallthex:
SO LONG AND THANKS FOR ALL THE [noun-plural--positive, noun_mass--positive].
template thexysyou:
SOMETIMES YOU [verb_tr-inf] THE [noun-singular],  SOMETIMES THE [$1] [$0/$/S/] YOU.
template spiderman:
# @azule removed second word.
^#[noun-article-singular]#$[$0/^AN? //]MAN DOES WHATEVER [$0] CAN.
template speaksoftly:
SPEAK [SOFTLY@0.4, adjective/$/LY/] AND CARRY [A SEAISH@0.4, adjective-article] [THWAPSTICK@0.2, noun-singular].
template suddenly1000s:
SUDDENLY, [noun-plural]. THOUSANDS OF THEM!
template shoveit:
TAKE THIS [noun] AND CH%2ARP IT!
template discuss:
[TAWK AMONGST YOA-XELVES.  @0.5,][I'LL GIVE YOO A TOAPIC...  @0.5, ][t:discuss-sub1, t:discuss-sub2]  DISCUSS.
template inanotherx:
THANK YOU [noun_character], BUT OUR [noun-singular, noun_mass] IS IN ANOTHER [noun_own/<nodef>].
template fingsnakes:
THAT'S IT!  I HAVE HAD IT WITH THESE MOLPYCH%2ARPING [noun-plural] ON THIS MOLPYCH%2ARPING [RAFTCASTLE@0.15, noun_own/<nodef>]!
template thisisanx:
THAT'S NOT [noun-article]...  *THIS* IS [$0]!
template smallstep:
THAT'S ONE RIVERISH [noun-singular] FOR [noun-article], ONE SEAISH [$0] FOR [$1/^ *AN? +//]KIND.
template bestpartisxinyoury:
THE [MOLPIEST@0.25, adjective-superl--positive] PART OF [MOLPYING UP@0.2, verbs-cont--positive] IS [noun_mass, noun-plural] IN YOUR [noun--positive].
template buckstopshere:
THE [noun] STOPS HERE.
template xisalie:
THE [noun-singular] IS A LIE.
template fightclub:
THE FIRST RULE OF [noun_mass] IS, YOU DON'T TALK ABOUT [$0].  THE SECOND RULE OF [$0] IS, YOU DON'T TALK ABOUT [$0].
THE FIRST RULE OF [noun-singular] CLUB IS, YOU DON'T TALK ABOUT [$0] CLUB.  THE SECOND RULE OF [$0] CLUB IS, YOU DON'T TALK ABOUT [$0] CLUB.
template argumentinvalid:
THERE IS [noun-article-singular] IN MY [BEARD@0.33, noun-singular, noun_mass], YOUR ARGUMENT IS INVALID.
template nocrying:
^#[noun_place]#$THERE'S NO [%2A%2ADISHNESS@0.33, SADNESS@0.5, CRYING] IN [$0]!
template norest:
# @azule removed "said the GLR" from middle of phrase.
THERE IS NO [noun_mass, noun-singular] FOR THE [adjective--negative].
template thedroidslookingfor:
THESE AREN'T THE [noun-plural] YOU'RE [verb_intr-cont] FOR.
template theyhatin:
^#[verbs-cont][verbs-cont]#$THEY SEE ME [$0/ING/IN'/],  THEY [HATIN'@0.33, $1/ING/IN'/].
template madeofxandy:
THIS IS [adjective-article] [noun-singular].  IT IS MADE OF [noun-plural, noun_mass] AND [noun-plural, noun_mass].
template imustxit:
THIS IS [adjective] [noun-singular], I MUST [verb_tr-inf] IT.
template shopped:
THIS [LOOKS@0.5, IS] [PHOTOSHOPPED@0.2, SHOOPED@0.1, OTTIFIED@0.25, OTCOLORISED@0.33, adjective, verb_tr-perfect].  I CAN TELL BY THE [noun-singular, noun-plural, noun_mass] AND FROM HAVING SEEN A LOT OF [noun-plural, noun_mass] IN MY DIP.
template brainonx:
THIS IS YOUR [BRAIN@0.35, noun-singular].  ~AND THIS IS YOUR [$0] ON [noun-plural, noun_mass].~  _ANY QUESTIONS_?
template threadjack:
THIS [NEEDLE-PULLED THING@0.5, noun-singular] IS NOW ABOUT [noun-plural, noun_character] AND [noun-plural, noun_character][.@0.5, .  DISCUSS.]
template tobornot2b:
TO [verb_tr-inf, verb_intr-inf] OR NOT TO [$0], THAT IS THE QUESTION.
template notinxanymore:
# from @Link's list.
[noun_character--single], I'VE GOT A FEELING WE'RE NOT IN [noun_place] ANYMORE.
template nostinkin:
^#[CH*RPING@0.33, STINKING@0.5, verbs-cont]#$[noun-plural, noun_mass]?  WE DON'T NEED NO [$0/ING/IN'/g] [$1].
template fmegently:
WELL CH%2ARP ME [adjective/$/LY/] WITH [noun-article-singular].
template biggerboat:
WE'RE GONNA NEED A MORE [SEAISH@0.3, adjective] [noun-singular].
template secretlyreplaced:
WE'VE SECRETLY REPLACED [noun_character]'S [noun-singular, noun_mass] WITH [noun-article-singular, noun_mass].  LET'S SEE IF XE NOTICES...
template whatare:
WHAT *ARE* [noun-plural]?  WE JUST DON'T KNOW.
template floatsyourboat:
WHATEVER [verb_tr-present] YOUR [RAFTCASTLE@0.25, SHIPCASTLE@0.33, noun-singular, noun-plural, noun_mass].
template staysinx:
WHAT HAPPENS IN [noun_place], STAYS IN [$0].
template youarexandy:
# @Link.
WHAT THE CH%2ARP?  YOU ARE [noun-singular, noun_mass, noun_character].  AND [adjective].
template whoneedsenemies:
WITH [noun-plural] LIKE [THIS@0.5, THESE], WHO NEEDS [noun-plural, noun_mass]?
template solastx:
[verbs-cont] IS [JUST @0.5,]SO *LAST [noun_time--!nowish]*.
template yallgot:
Y'ALL GOT ANY MORE OF THEM [noun-plural]?
template yesvirginia:
YES [VIRGINIA@0.2, noun_character/<nodef>],  THERE *IS* [noun_definite/<defize>, noun_definite/<defize>, noun-article-singular].
template takeoutof:
^#[noun_place]#$YOU CAN TAKE [noun_character, noun-article-singular] OUT OF [$0],  BUT YOU CAN'T TAKE [$0] OUT OF [$1].
template andeatittoo:
YOU CAN'T [verb_tr-inf] YOUR [noun_mass, noun-singular] AND [verb_tr-inf] IT TOO.
template pickwithgreatercare:
YOU HAVE [verb_tr-past] MOST OF A RIVERISH [noun_definite].  PLEASE PICK YOUR [noun-plural, noun_mass] WITH GREATER CARE.
template diebythesword:
YOU [LIVE@0.3, verbs-inf] BY THE [PUNSAW@0.25, THWAPSTICK@0.3, noun], YOU [DIE@0.3, verbs-inf] BY THE [$1].
template youwouldntsteal:
YOU WOULDN'T [DOWNLOAD@0.5, verb_tr-inf] [A RAFTCASTLE@0.3, noun-article-singular].
template wawlpy:
YO WAWLPY, I HEARD YOU LIKE [t:wawlpy1, t:wawlpy2, t:wawlpy3] SO YOU CAN [verb_intr-inf] WHILE YOU [$1].
template seriousbusiness:
# @azule changed to always include BUSINESS.
[noun-singular, noun_character] IS SERIOUS [,noun-singular/$/ /]BUSINESS.
template thexofthez:
[noun-article-singular, noun_character] IS THE [noun-singular, noun_mass] OF [noun/<defize>].
[noun-plural] ARE THE [noun-plural, noun_mass] OF [noun/<defize>].
# @mrob27's version
IF [noun-plural] ARE THE [noun-plural] OF [noun/<defize>],  AND [$1] ARE THE [noun-plural] OF [noun/<defize>],  WHY ARE WE STILL [verb_tr-cont] [$0]?
template gtfo:
[noun-plural--positive, noun_mass--positive] OR GTCO!
template xaresuperior:
[adjective] [noun-plural] ARE *SUPERIOR*.
template xisthecancer:
^#[noun-article-singular, noun_mass/<defize>, noun_character]#$[$0/^THE /THIS /] IS THE [BACONSEMENCOFFEEBABYCANCER@0.2, noun-singular, noun_mass] THAT IS [%2A%2ADING@0.33, KILLING@0.5, CH%2ARPING] [noun-plural, noun_mass, noun_character].
template xthem:
[verb_tr-inf] YOUR CH%2ARPING [noun-plural].  [$0] THEM!
template xcatisx:
^#[noun-article-singular, adjective]#$[$0/^AN? //]MEOWLPY IS [$0].
template kissing:
^#[verbs-cont][$0/ //]#$[noun_character] AND [noun_character], SITTING IN A [NEAT @0.33, WOW@0.5,]TREE,  [$1/\B/-/g].
template notsomuch:
[noun-article-singular--positive, noun_mass--positive, noun_character] IS [adjective--positive].  [noun-article-singular--negative, noun_mass--negative, noun_character]? NOT SO MUCH.
template nicethings:
^#[noun_character, noun_mass/<defize>, noun-article-singular]#$[$0/^THE /THIS /] IS WHY WE CAN'T HAVE [MOLPISH@0.2, NICE@0.25, adjective] THINGS.
end h_templates:
# ----------- Subtemplates (only accessible through template calls) -----------
template consider1:
CONSIDER THE [noun-plural]
template consider1a:
[t:consider1] OF [noun_place]
template consider2:
AND WHY DO YOU WORRY ABOUT [noun-plural]?  [t:consider1, t:consider1a], HOW THEY [verb_tr-inf]:  THEY NEITHER [verb_tr-inf] NOR [verb_tr-inf].
template consider3:
I HAVEN'T GOT *ANYTHING* AGAINST THE [noun-plural]!  [t:consider1].
template yearnfree1:
[verb_tr-inf] [noun-plural, noun_mass]
template yearnfree2:
[verb_intr-inf] [FREE@0.5, MOLPISHLY]
template discuss-sub1:
THE [adjective] [noun-plural] WERE NEITHER [$0] NOR [$1].
template discuss-sub2:
^#[noun-article-singular]#$THE [adjective] [adjective] [$0/^AN? //] WAS NEITHER [$1] NOR [$2] NOR [$0].
template wawlpy1:
^#[noun-article]#$[$0] SO WE PUT [$0] IN YOUR [$0/^AN? //]
template wawlpy2:
^#[noun-article]#$[$0] SO WE PUT SOME [$1] IN YOUR [$0/^AN? //]
template wawlpy3:
[noun_mass] SO WE PUT SOME [$0] IN YOUR [$0]
