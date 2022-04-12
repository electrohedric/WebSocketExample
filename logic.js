// word list from https://meiert.com/en/blog/the-web-development-glossary/ with a few modifications
// word list embedded in the app for convenience.
// in a real app, this should be read in from a file or database
const WORDLIST = [
    '.gitignore','.htaccess','.htpasswd','.net','/dev/null',
    'a/b','a11y','aaa','above','abstract','abstraction','accelerated','acceptance','access','accessibility','accessible','acm','act','act','action','actionscript','active','activex','adaptive','add','addon','address','adobe','ads.txt','adt','advanced','advertising','aero','affordance','agent','aggregator','agile','agreement','aint','air','ajax','ala','algol','algorithm','algorithmic','all','almost','amaya','amazon','amd','american','amp','analysis','analytics','anchor','and','angular','angularjs','animation','anonymous','another','ansi','anti-pattern','anywhere','aom','apache','apache','apart','api','app','append','apple','applet','application','applications','apt','architecture','archive','argument','aria','arrange','array','arrow','articles','ascii','asi','asp','asp.net','aspect','assert','assigned','assignment','assistive','association','assurance','asynchronous','at-rule','at-spi','atag','atom','atomic','attribute','augmented','authentication','authoring','authority','authorization','automagic','automatic','automation','autonomous','aws',
    'babel','backend','backlink','backlog','bad','bandwidth','bang','banner','base','base64','bash','basic','bdd','beacon','behavior','behavior-driven','below','bem','best','bho','bidi','bidirectional','big','binary','binding','bitmap','bitv','black','black-box','blacklist','blindness','blink','blisk','block','block-level','blog','blogging','blogosphere','blue','bmp','boilerplate','bom','bookmark','boolean','bootstrap','border','bottom-posting','bounce','bound','boundary','bounding','bourne','bower','box','boyscout','bracket','braille','branch','branching','bread','breadcrumb','broken','brotli','browse','browser','browsing','budget','buffer','bug','bugfix','bugzilla','build','built-in','bundles','bundling','bureau','bvt','byte','bezier',
    'cache','call','callback','canonical','canvas','card','caret','carousel','cart','cascade','cascading','case','catch','cbd','cbse','cct','cdn','certificate','cgi','chaining','change','changeset','chaos','character','characteristic','charset','chat','chop','chrome','chromium','chss','cipher','class','cli','click','click-through','clickjacking','client','cloaking','clone','closure','cloud','cls','cluster','cms','cmyk','cname','coalescing','coc','code','coded','codeline','codepen','coding','coercion','coffeescript','collapsed','collapsing','collection','color','comma-separated','command','command-line','command-query','comment','comments','common','commonjs','community','compared','compass','compatibility','compilation','compiler','compiling','complexity','component','component-based','compression','computer','computing','concerns','concurrent','condition','conditional','conduct','cone','confidence','confidentiality','configuration','conflict','conformance','connection','connectivity','consent','conservation','console','consortium','constant','constructor','container','containerization','containing','content','contentful','context','continuous','contract','contrast','control','convention','conversion','cookie','cop','corporate','corporation','cors','cost-per-click','coupling','coverage','cowpaths','cpc','cpu','cqs','craft','crap','crawler','crawling','create','crisis','crm','cron','crontab','cross-origin','cross-site','crud','cscs','csp','csrf','css','css-tricks','cssom','csv','cta','ctr','cumulative','curve','custom','customer','customized','cutting','cvs','cyan','cycle',
    'd3.js','daemon','daily','dark','darknet','dart','data','database','datagram','dau','dave','dbc','dbms','dce','dcl','dcvs','ddl','ddos','dead','debt','debugging','decimal','declaration','declarations','decoration','decryption','deep','defect','definition','degradation','delay','delete','delete','delivery','demilitarized','denial','deno','dependency','deployment','deprecated','deprecation','description','design','destructuring','detection','developer','development','device','devops','dhtml','dialog','digest','digit','digital','directionality','directive','directory','disorder','display','distributed','dither','divitis','dml','dmz','dns','docbook','doctype','document','documentation','dojo','dom','domain','dont','done','doors','doorway','dos','dot','dot-agnostic','double','downtime','dql','dreamweaver','driver','drm','dry','dsms','dsssl','dtd','duck','dup','duplicate','dvcs','dynamic','dyslexia',
    'e-commerce','e2e','ebcdic','ebm','eclipse','ecma','ecmascript','ect','edge','edit','edit','editor','editorconfig','eff','effective','effectiveness','efficiency','electron','electronic','element','elimination','else','emacs','email','embedded','eme','empiricism','empty','encapsulation','encoding','encrypt','encrypted','encryption','end','end-to-end','ending','engine','engineering','enhancement','entity','environment','eof','eol','epic','equivalence','error','ethics','etiquette','european','event','everywhere','evidence-based','exception','exchanges','exclusion','exit','expectation','experience','expert','experts','explorer','express','expression','extended','extensible','extension','extensions','external','extreme',
    'failure','fallback','false','falsy','farm','fat','faux','favicon','favorite','fcp','feature','feed','fid','fifo','file','file-locking','fingerprinting','firebird','firefox','first','first-class','first-order','fitts','fixed','flash','flex','flexbox','float','flock','floss','flow','fluent','fluid','fmp','foft','foit','fold','folksonomy','font','footer','for','foraging','force','foreach','forgery','fork','form','format','formatting','forms','forwarding','fosi','foss','fouc','foundation','fout','fps','fragment','frame','frames','frameset','framework','free','frontend','frontier','frontpage','fsf','ftp','fucking','fugu','full','function','functional',
    'gamma','garbage','garden','gateway','gdpr','gecko','general','generalized','generator','get','gif','gimp','git','github','gitlab','global','glyph','gnu','goal','goanna','golang','golf','google','gopher','gpl','gpu','graceful','graph','grapheme','graphic','graphical','graphics','graphql','greeking','green','green','grid','group','guetzli','gui','guide','guidelines','gulp','gulp.js','gutter','gws','gzip',
    'hack','hackathon','hacker','haml/haml','handlebars','handler','handling','hard','hash','hashbang','hashtag','haslayout','hat','hci','hdd','header','heading','headless','heic','heif','helper','hicks','hick-hyman','hidden','high','higher-order','hints','hit','hits','hoc','hoisting','holey','home','homepage','homesite','hooking','hop','host','houdini','hpr','hsl','hsts','hsv','html','html/css','html5','http','http/2','httpd.conf','https','hue','human-computer','hydration','hyperlink','hyperlink-induced','hypertext','hypothesis-driven',
    'i/o','i18n','iaas','iab','iac','iana','icann','icon','ide','idea','identifier','identity','idl','idle','ietf','iframe','iife','iis','image','imap','immediately','immutable','implement','impression','in','in-app','inclusive','increment','index','indexed','indexeddb','indexing','indicator','industrial','infinite','information','infosec','infrastructure','inheritance','initiative','injection','inline','inline-level','input','input/output','insertion','inspection','instance','instant','institute','integer','integrated','integration','intellectual','intellij','intent','interaction','interactive','interchange','interest','interface','interleaved','internal','international','internationalization','internationalized','internet','interoperability','intersection','interstitial','intranet','intrinsic','inversion','inverted','invisible','invoked','ioc','ios','ipsum','ipv4','ipv6','irc','iri','irl','iso','isoc','isp','itcss','item','ixd','ixda',
    'jakobs','jamstack','jank','jar','jasmine','java','javascript','javaserver','jaws','jdbc','jekyll','jetty','jira','jit','job','joint','jpeg','jpg','jquery','jscript','jslint','json','json-ld','jsp','jsx','just','just-in-time','jws','jwt',
    'k-meleon','kanban','kerberos','kerning','key','key-value','keyword','khtml','knowledge','konqueror','kpi',
    'l10n','lambda','lamp','landing','language','largest','last','latency','latex','launch','law','layer','layout','lazy','lcp','ldap','lead','leading','lean','learning','left-to-right','legibility','less/less','lets','letter-spacing','level','library','license','lifo','ligature','light','lightness','lightweight','limit','line','lines','link','linked','linter','linting','linux','linux','liquid','list','lite','literal','littles','live','load','loading','loc','local','local-part','locale','localization','locator','lock','log','logging','logical','logs','long','long-term','loop','lorem','lossless','lossy','lsb','ltr','lts','lynx',
    'mac','machine','machinery','macos','macos','macromedia','magazine','magenta','mail','main','maintainability','maintenance','makefile','mamp','management','manager','manipulation','manual','manufacturers','map','margin','mark','markdown','marketing','markup','master','masthead','material','mathematical','mathml','mau','md2','md4','md5','md6','mdl','mean','meaningful','measures','media','medium','mega','memoization','menu','merge','merging','message','meta-element','metadata','method','metro','microformat','microsite','microsoft','middleware','mime','minification','minifier','minimal','minimization','minimum','mip','mixin','mobile','mobilegeddon','mocha','modal','mode','model','model-view-controller','model-view-viewmodel','modeling','modernizr','modifier','modular','module','modules','monitoring','monolith','monolithic','monorepo','monthly','mortem','mosaic','movement','moving','mozilla','mpeg','mshtml','msie','multicolumn','multilingual','multimedia','multiple','multipurpose','mustache','mustard','mutable','mutation','mvc','mvp','mvvm','mysql','mysql',
    'n-based','name','names','namespace','nan','national','native','navigation','navigator','nda','negative','neighborhood','nesting','net','netscape','network','newbie','newline','news','nexus','nginx','night','node','node.js','non-disclosure','noob','normalization','normalize.css','normative','nosql','not','notation','notification','npm','nps','null','number','numbers','numeral','numeric','numerical','nuxt.js',
    'obfuscation','object','object-oriented','objectives','observer','obvious','office','offline','ogp','okr','once','once','one-based','one-time','onion','oocss','oop','opacity','open','opening','opera','operable','operand','operating','operations','operator','optimization','optional','orca','order','organization','origin','orphan','orthogonality','osi','ota','otp','out','outline','output','over','overflow','overload','owasp','owner',
    'package','package-lock.json','package.json','packaging','packed','packet','padding','page','pagerank','pages','pagespeed','paint','pair','palpable','paradigm','parallax','parameter','pareto','parkinsons','parser','parsing','party','password','patch','path','pattern','pave','pay-per-click','payload','pbi','pdf','peer','pen','penetration','per','perceivable','perceived','percent','performance','period','perl','permalink','persona','personal','phantomjs','philosophy','phoenix','phone','photographic','photoshop','php','php/perl/python','phpstorm','phrasing','picture','ping','pinging','pixel','pixel-perfect','placeholder','plain-text','plane','player','plugin','png','point','pointer','pointing','policy','polyfill','polymer','pop','pop-under','pop-up','port','portable','portal','position','positive','post','postcss','postels','posting','pour','powershell','ppc','practice','preact','predication','prediction','prefetching','prefix','premature','preprocessor','prerendering','presentation','presto','primitive','principal','principle','print','privacy','private','problem','process','processing','processor','product','production','professionals','program','programming','progress','progressive','project','promise','promoter','prop','properties','property','protection','protocol','prototype','prototyping','provider','prpl','pseudo-class','pseudo-code','pseudo-element','public','pull','push','pwa','pyramid','python',
    'qooxdoo','quality','quantity','query','quic','quick','quirks',
    'race','rails','raku','random','ranking','raster','rate','ratio','rcs','rdbms','rdf','rdsms','react','reactive','reactjs','read','read','read-eval-print','readability','reader','reading','readme','real','reality','really','recidivism','recommendation','recursion','red','red','redesign','redirect','redirection','redressing','redundancy','redux','refactoring','reference','referential','reflow','regex','regression','regular','regulation','rehydration','relational','relationship','relaunch','relay','rem','render','rendering','repeat','repl','replaced','replacement','replicate','replying','repo','repository','representational','request','requirejs','reset','resolution','resource','response','responsibility','responsive','responsiveness','rest','restricted','results','retrieval','review','revision','rfc','rgb','rib','rich','right-to-left','rights','roadmap','robots','robots.txt','robust','robustness','roles','root','rooting','rot','round-trip','router','routine','routing','rpm','rss','rtd','rtf','rtfm','rtl','rtt','rubber-ducking','ruby','rule','rum','run','runtime','rwd','rxjs',
    'safari','same','samurai','sandbox','sass','sassscript','sast','saturation','scalable','scalar','scaled','scent','schema','scm','scope','scoped','score','screen','script','scripting','scroll','scrolling','scrollport','scrum','scss','sea','seamonkey','search','searching','second','section','sectioning','secure','security','security.txt','see','selector','selenium','sem','semantic','semantics','semicolon','semver','seo','separation','serp','server','server-side','service','services','servlet','set','sftp','sgml','shadow','sharding','sharing','shebang','sheet','sheets','shell','shift','shim','shockwave','shortcut','shorthand','side','sign','signature','signed','silk','simple','single','single-page','site','sitemaps','size','sketch','skin','sla','sle','sliding','sloc','sloppy','slot','slug','smacss','small','smashing','sme','smi','smil','smoke','smtp','snap','sniffing','soap','soc','social','society','sockets','soft','software','solution','sorting','soup','source','spa','spacer','spaghetti','spam','spamdexing','spamming','spdy','spec','specification','specificity','speech','speed','spider','splash','splitting','spoofing','spread','sprint','sprite','sql','squad','srgb','ssg','ssh','ssl','ssr','stack','stacking','stand-up','standard','standardization','standards','star','start','state','static','status','storage','story','strategy','stream','streaming','strict','string','structure','structured','stub','studio','style','stylelint','styles','stylesheet','styling','subject-matter','subnav','subnavigation','subroutine','subversion','suit','summary','superuser','support','surface','surfing','svg','svn','swap','switch','sxg','symbol','synchronized','synchronous','syndication','syntax','syslog','system',
    'tab','tabbed','table','tabs','tachyons','tag','tagging','tailoring','tar','tarball','task','tcl','tcp','tdd','tdi','tdz','team','tech','technical','technological','technology','telephony','telnet','template','temporal','ten-second','terminal','terminator','ternary','teslers','test','test-driven','testing','tex','text','the','theme','third','this','thread','three-click','time','timestamp','tiny','tld','tls','tms','to-do','toast','todo','tofu','token','toms','tomcat','toml','tool','tooling','tools','top-level','top-posting','topic','tor','tpm','tracer','tracing','track','tracking','trade','transcompiler','transfer','transformations','transmission','transparency','transpiler','transport','tree','tree-shaking','triangle','trident','trust','trustrank','try','ttfb','tti','ttl','tufu','turbo','twitter','type','typeface','typescript','typing','typography',
    'uaag','uat','ucd','udd','udjo','udp','uglification','umd','uml','uncertainty','undefined','underscore','understandable','unicode','unified','uniform','uninitialized','unit','universal','unix','unix/unix','unstyled','upa','update','upon','urc','uri','url','urn','usability','use','usenet','user','user-centered','user-driven','users','using','utf-16','utf-32','utf-8','utility','uxpa',
    'validation','validator','value','values','variable','vba','vector','velocity','vendor','verification','version','versioning','versions','viable','view','view','viewport','vim','virtual','virtualization','visual','visualization','vocabulary','voice','voiceover','voicexml','void','voip','vpn','vrt','vue','vue.js','vuepress','vuex',
    'w3c','waf','wai','wamp','wap','war','wasm','wasp','waterfall','wau','wcag','web','webassembly','webauthn','webgl','webkit','webkrauts','weblog','webm','webp','webpack','webpagetest','website','websocket','webstorm','webview','weekly','wet','what','whatwg','while','white-box','whitelist','whitespace','whois','wide','widow','window-eyes','windows','windows','wip','wireframe','wireless','with','wml','wora','work','workaround','worker','working','world','worldwideweb','wpo','wrapper','write','www','wysiayg','wysiwyg',
    'x-height','xforms','xhp','xhr','xhtml','xlink','xml','xmlhttprequest','xpath','xpointer','xquery','xsd','xsl','xslt','xsrf','xss','xul',
    'yahoo','yaml','yarn','yarn.lock','yellow','yet','you','yourself','yui',
    'zen','zero-based','zero-indexed','zip','zombie','zone','zsh',
]

/**
 * Return the number of single character differences between 2 strings
 * @param {String} s1
 * @param {String} s2
 */
function difference(s1, s2) {
    let workingSet = [];
    for (let i = 0; i < s1.length; i++) {
        if (workingSet.indexOf(s1[i]) === -1) {
            workingSet.push(s1[i]);
        }
    }
    let diff = 0;
    for (let i = 0; i < workingSet.length; i++) {
        if (s2.indexOf(workingSet[i]) === -1) diff++;
    }
    for (let i = 0; i < s2.length; i++) {
        let index = workingSet.indexOf(s2[i]);
        if (index === -1) {
            diff++;
            workingSet.push(s2[i]);
        }
    }
    return diff;
}

/**
 * Find the best word in the wordlist which is the closest to the word by levenshtein distance
 * @param {String} word word to find the best matches for
 * @param {int} numTop - maximum number of matches to find
 */
async function findTopWords(word, numTop) {
    // asynchronous, so the app does not freeze while searching for everyone's words
    // this just means that instead of returning the array directly, it returns a promise
    // also, in a real app, we might want to employ some serious optimizations here
    // for simplicity, once we break a new record, we only accept words equal to its score
    const bestWords = [];
    let bestDist = 30; // no word can be further than this away
    const TOLERANCE = 10; // allow words which are off from the best, only affects efficiency unless set too low

    for (let i = 0; i < WORDLIST.length; i++) {
        let listed = WORDLIST[i];
        let index = listed.indexOf(word);
        if (index === -1) continue; // not found anywhere inside the string

        // tell the algorithm to stop at dist + 1, so we can still find words of equal best distance
        let distance = Math.abs(word.length - listed.length) + 3 * index;
        if (distance > bestDist + TOLERANCE) {
            continue;
        }

        // keep track of best
        if (distance < bestDist) {
            bestDist = distance;
        }

        bestWords.push(listed);
    }

    function grade(s) {
        return 6 * s.indexOf(word) + difference(s, word);
    }

    bestWords.sort((s1, s2) => {
        let g1 = grade(s1);
        let g2 = grade(s2);
        if (g1 < g2) return -1;
        if (g2 > g1) return 1;
        return 0;
    });

    return bestWords.slice(0, numTop);
}

// make available in main node.js app
module.exports = {
    findTopWords
}
