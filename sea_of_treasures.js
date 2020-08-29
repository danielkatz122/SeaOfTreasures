(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"sea_of_treasures_atlas_1", frames: [[1032,375,204,201],[1490,457,204,201],[1821,758,68,21],[1425,740,122,80],[1549,740,52,76],[1760,736,59,70],[2006,299,28,15],[2006,252,34,45],[1947,652,79,80],[2006,206,37,44],[1238,375,95,90],[1658,736,100,100],[2006,316,23,15],[1436,660,220,78],[1203,717,220,78],[2001,734,45,49],[1338,0,350,204],[1436,522,52,97],[1690,0,350,204],[1947,734,52,97],[1696,457,143,277],[1338,206,150,314],[1603,740,45,49],[171,626,203,175],[1841,457,196,193],[1032,578,169,222],[581,626,109,170],[376,626,203,175],[1238,522,196,193],[0,626,169,222],[692,626,109,170],[1841,652,104,104],[1287,467,45,50],[1238,467,47,50],[1490,206,170,249],[1662,206,170,249],[1834,206,170,249],[0,0,221,373],[0,375,170,249],[223,0,221,373],[172,375,170,249],[446,0,221,373],[344,375,170,249],[669,0,221,373],[516,375,170,249],[892,0,221,373],[688,375,170,249],[1115,0,221,373],[860,375,170,249],[803,626,106,167],[911,626,106,167],[2042,7,2,4],[2042,0,3,5],[2031,316,11,10]]},
		{name:"sea_of_treasures_atlas_2", frames: [[1174,1857,565,156],[1401,1378,565,156],[1773,0,267,314],[1741,1536,267,314],[1344,0,213,477],[0,0,235,473],[1128,0,214,478],[1128,480,220,464],[944,946,214,479],[0,1227,234,472],[679,0,224,480],[679,482,224,480],[470,1596,242,436],[1160,946,213,477],[958,1427,214,479],[0,749,233,476],[1559,0,212,474],[236,1161,232,466],[1570,476,207,462],[721,964,221,471],[905,0,221,471],[905,473,221,471],[1602,940,221,373],[1174,1425,225,430],[235,749,267,410],[0,475,408,272],[0,1701,358,288],[237,0,408,272],[410,274,267,410],[1375,946,225,430],[1779,316,221,373],[1825,691,221,373],[470,1161,249,433],[714,1596,242,436],[1350,479,218,465]]},
		{name:"sea_of_treasures_atlas_3", frames: [[556,418,671,187],[556,607,671,187],[0,795,258,473],[0,1270,237,479],[0,321,276,472],[1019,796,237,501],[520,1268,243,483],[779,796,238,502],[1307,0,347,391],[640,0,332,416],[1307,393,302,427],[765,1300,250,451],[1656,0,347,391],[974,0,331,416],[1611,393,302,427],[1017,1517,250,451],[260,795,258,473],[1531,1517,236,474],[278,321,276,472],[520,796,257,470],[239,1270,239,472],[0,0,638,319],[1258,822,318,371],[1258,1195,368,320],[1628,1195,368,320],[1578,822,318,371],[1769,1517,260,430],[1269,1517,260,431]]},
		{name:"sea_of_treasures_atlas_4", frames: [[1298,0,748,529],[1298,531,748,529],[1298,1062,540,403],[1298,1467,540,403],[0,1420,1296,503],[0,0,1247,708],[0,710,1247,708]]},
		{name:"sea_of_treasures_atlas_5", frames: [[0,0,1247,708],[0,710,1247,708]]},
		{name:"sea_of_treasures_atlas_6", frames: [[0,0,1247,708],[0,710,1247,708]]},
		{name:"sea_of_treasures_atlas_7", frames: [[0,0,1247,708],[0,710,1247,708]]},
		{name:"sea_of_treasures_atlas_8", frames: [[0,0,1247,708],[0,710,1247,708]]},
		{name:"sea_of_treasures_atlas_9", frames: [[0,0,1247,708],[0,710,1247,708]]},
		{name:"sea_of_treasures_atlas_10", frames: [[0,0,1247,708],[0,710,1247,708]]},
		{name:"sea_of_treasures_atlas_11", frames: [[0,0,1247,708],[0,710,1247,708]]},
		{name:"sea_of_treasures_atlas_12", frames: [[0,0,1247,708],[0,710,1247,708]]},
		{name:"sea_of_treasures_atlas_13", frames: [[0,0,1247,708],[0,710,1247,708]]},
		{name:"sea_of_treasures_atlas_14", frames: [[0,0,1247,708],[0,710,1247,708]]},
		{name:"sea_of_treasures_atlas_15", frames: [[0,710,1247,708],[0,0,1248,708]]},
		{name:"sea_of_treasures_atlas_16", frames: [[0,0,703,1336],[705,0,703,1336],[0,1338,1248,708]]},
		{name:"sea_of_treasures_atlas_17", frames: [[0,0,809,1665],[811,0,747,1314]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_172 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_171 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_170 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_169 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_367 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_167 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_166 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_366 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_164 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_163 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_162 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_365 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_160 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_364 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_363 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_362 = function() {
	this.initialize(ss["sea_of_treasures_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_361 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_360 = function() {
	this.initialize(ss["sea_of_treasures_atlas_17"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_159 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_158 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_157 = function() {
	this.initialize(ss["sea_of_treasures_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_156 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_155 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_154 = function() {
	this.initialize(ss["sea_of_treasures_atlas_16"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_153 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_152 = function() {
	this.initialize(ss["sea_of_treasures_atlas_16"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_359 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_150 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_358 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_357 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_356 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_355 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_354 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_353 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_352 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_351 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_350 = function() {
	this.initialize(ss["sea_of_treasures_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_349 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_348 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_141 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_140 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_347 = function() {
	this.initialize(ss["sea_of_treasures_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_346 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_132 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_345 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_344 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_343 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_342 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_341 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_340 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_339 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_338 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_337 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_336 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_335 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_334 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_333 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_332 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_331 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_330 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_329 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_328 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_327 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_326 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_325 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_110 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_324 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_323 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_322 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_106 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_321 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_104 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_320 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_319 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_318 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_317 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_316 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_315 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_314 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_313 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_312 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_311 = function() {
	this.initialize(ss["sea_of_treasures_atlas_17"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_93 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_310 = function() {
	this.initialize(img.CachedBmp_310);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2423,577);


(lib.CachedBmp_91 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_90 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_309 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_308 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_307 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_306 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_305 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_304 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_303 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_302 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_301 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_300 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_299 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_298 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_297 = function() {
	this.initialize(ss["sea_of_treasures_atlas_3"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_296 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_295 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_294 = function() {
	this.initialize(ss["sea_of_treasures_atlas_2"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_293 = function() {
	this.initialize(ss["sea_of_treasures_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(img.CachedBmp_51);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2616,1497);


(lib.CachedBmp_292 = function() {
	this.initialize(ss["sea_of_treasures_atlas_15"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_291 = function() {
	this.initialize(ss["sea_of_treasures_atlas_14"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_290 = function() {
	this.initialize(ss["sea_of_treasures_atlas_14"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_289 = function() {
	this.initialize(ss["sea_of_treasures_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_288 = function() {
	this.initialize(ss["sea_of_treasures_atlas_13"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_287 = function() {
	this.initialize(ss["sea_of_treasures_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_286 = function() {
	this.initialize(ss["sea_of_treasures_atlas_12"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_285 = function() {
	this.initialize(ss["sea_of_treasures_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_284 = function() {
	this.initialize(ss["sea_of_treasures_atlas_11"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_283 = function() {
	this.initialize(ss["sea_of_treasures_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_282 = function() {
	this.initialize(ss["sea_of_treasures_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_281 = function() {
	this.initialize(ss["sea_of_treasures_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_280 = function() {
	this.initialize(ss["sea_of_treasures_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_279 = function() {
	this.initialize(ss["sea_of_treasures_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_278 = function() {
	this.initialize(ss["sea_of_treasures_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_277 = function() {
	this.initialize(ss["sea_of_treasures_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_276 = function() {
	this.initialize(ss["sea_of_treasures_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_275 = function() {
	this.initialize(ss["sea_of_treasures_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_274 = function() {
	this.initialize(ss["sea_of_treasures_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_273 = function() {
	this.initialize(ss["sea_of_treasures_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_272 = function() {
	this.initialize(ss["sea_of_treasures_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_271 = function() {
	this.initialize(ss["sea_of_treasures_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_270 = function() {
	this.initialize(ss["sea_of_treasures_atlas_16"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_269 = function() {
	this.initialize(ss["sea_of_treasures_atlas_15"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_268 = function() {
	this.initialize(ss["sea_of_treasures_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(img.CachedBmp_49);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2628,1454);


(lib.Path_11 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Path_1_3 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Path_7 = function() {
	this.initialize(ss["sea_of_treasures_atlas_1"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Path_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F4F51").s().p("AgJBUQgughgsgvQgyg3gRgtQA1A4BIBCQAtAvAkgEQAtgEBRhHQguA/gqAZQgZAPgXAAQgVAAgSgNg");
	this.shape.setTransform(16.65,9.7068);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,33.3,19.4), null);


(lib.Path_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B4CBD6").s().p("AgHAxIgYgPQgYgPgJgEQgJgEgdgHIgGgBQgdgGgNgUQgJgNgBgRQgBgQAIgMIACgEQgBAJACAKQAEAXAcAQQANAHAUAFIAiAHQAOAEAQAMIAZAWQAnAeAbgbQAGgGAQgXQANgTAMgHQgjAmAFAbQABAIAEAFQAFAFAHgCQAKgCAOgTQAPgVAKgcQADgKACgJIACAGQAGAXgWAoQgWAngTAGQgIACgJAAQgjAAg6glg");
	this.shape.setTransform(16.1334,8.59);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0.1,0,32.199999999999996,17.2), null);


(lib.Path_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B4CBD6").s().p("AAAAcQgDgBgBgDIAAgBQgFAEgCgGIAAgCQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAABgBQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgIAIgNQAKgSAIgDIACAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABIAFgBQABAAAAAAQAAABABAAQAAAAABABQAAAAAAABIAAADIABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAIACACIAAACQAFgCACADQABACgCAEQgCAEgEAFQgFAGgIAYQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape.setTransform(2.4902,2.9417);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,5,5.9), null);


(lib.Path_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006BB0").s().p("AgcA8QgIgFADgRQAEgYAMgYQAPgeASgPQANgKAEAGQACACAAAFQgBgEgDgBQgHgBgQAQQgUAYgMAjQgOAnASAGIgCAAQgDAAgDgCg");
	this.shape.setTransform(3.4383,6.2149);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,6.9,12.4), null);


(lib.Path_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFBFBF").s().p("AhDATIgBgEQAPABAZgEQAxgHAwgXIAAAEQhBAhhBAAIgGAAg");
	this.shape.setTransform(6.925,1.878);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,13.9,3.8), null);


(lib.Path_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40B2BE").s().p("AhKATIAGgFQAMACAXgEQAsgHA3gXIAJACQg0AZg2AIQgSACgOAAIgLAAg");
	this.shape.setTransform(7.5,1.8975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,15,3.8), null);


(lib.Path_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#61C1CA").s().p("AgRgeIAIgCIAIgCIATA/IgSAGQgCgPgPgyg");
	this.shape.setTransform(1.825,3.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,3.7,6.9), null);


(lib.Path_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5AB252").s().p("AguA0QAwgcAYgPQASgKgFgLQgCgDgNgNIgYgXIAIgHQAVAYAKANQAJALgBAFQgBAGgPAKIhIAwg");
	this.shape.setTransform(4.7053,5.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,9.4,11.8), null);


(lib.Path_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BBCE7").s().p("AgRAhIAagjQADgFACgKQACgLABgEQABgBAAABIgBARQgBALgFAEQgLAQgQASIgBAAIAAgBg");
	this.shape.setTransform(1.8,3.3479);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,3.6,6.7), null);


(lib.Path_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BBCE7").s().p("AgCAGIgYgNIABAAQARAHALADIAYAEIAAABIgPAAQgJAAgFgCg");
	this.shape.setTransform(2.675,0.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,5.4,1.7), null);


(lib.Path_4_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F4F51").s().p("AhKDeIhQhNQgvgtgNgVQgQgZAUglQAQgeA8hGQBKhWAyg1QBEg/A/AxQAoAfAcA+QASApAJAoQALAzgIAlQgHAmg0BCQgqA1gtApQgkAhglABIgBAAQgmAAgjgkg");
	this.shape.setTransform(22.2715,25.8044);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_0, new cjs.Rectangle(0.1,0,44.4,51.7), null);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F4F51").s().p("AhKDeIhQhNQgvgsgNgVQgQgZAUgmQAQgeA8hGQBLhWAxg1QBEg/A/AxQAoAfAcA+QASApAJAoQALAzgHAlQgIAmg0BCQgqA0gtAqQgkAhgkABIgBAAQgnAAgjgkg");
	this.shape.setTransform(22.2806,25.8294);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0.1,0,44.4,51.7), null);


(lib.Path_3_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C6C6").s().p("AAGAaIgBgBQgeAJgPgDIAXgTQALgLAHgJIAAgBIgRgOIAQAAIACgpIABgLIARgIIACAlIACgBIgCAoQgBAKADAIQABAGAHAOIgCABIAAABIAGAWIAFAWIgJAHQgKgTgQgng");
	this.shape.setTransform(4.1,8.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_4, new cjs.Rectangle(0,0,8.2,16.8), null);


(lib.Path_3_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E11F26").s().p("AhpANIANgJIAEAUIAMAtQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQATgRAbgTIAXgPQAEgDABADIAAAIQAAAHABAGQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABgBQAbgjAOgQQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQgKgZgKg9IAEgGIBMBrIguAtIiOA9g");
	this.shape.setTransform(10.6,10.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_3, new cjs.Rectangle(0,0,21.2,21.3), null);


(lib.Path_3_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BBCE7").s().p("AgQAYQgBgHALgQQAKgOANgKIABABIgcAlIgDAEQgDADAAACIAAAAIAAAAg");
	this.shape.setTransform(1.7489,2.4313);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,3.5,4.9), null);


(lib.Path_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCBF10").s().p("AAHAJIgigXIAUgEQARAWASAPQgKgCgLgIg");
	this.shape.setTransform(2.825,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,5.7,3.8), null);


(lib.Path_3_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F4F51").s().p("AhKC1IhQhNQgvgtgNgVQgQgZAUgkQAQgfA8hGIAHgHQgLAWgBAPQgCAUANAPQAQATAcgNQAfgOAPAHQAHAEAMAJQALAHAKgDQAOgEAEgVQABgEgBgHIgCgLQgBgIAGgFQAHgFAHAEQAGAEAJANQAFAIAFAPQAGAQADAHQADAGAOAEIATADQAbAGAagNQAYgNAGgjQAEgWgEglQgEgpgOghQAIANAJATQASApAJAoQALAzgIAmQgHAlg0BCQgqA1gtApQgkAhglABIgBAAQgmAAgjgkg");
	this.shape.setTransform(22.2715,21.7263);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_0, new cjs.Rectangle(0.1,0,44.4,43.5), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F4F51").s().p("AhKC1IhQhNQgvgsgNgVQgQgZAUglQAQgfA8hGIAHgHQgLAWgBAPQgCAUANAPQAQATAcgNQAggOAOAHQAHAEAMAJQALAHAKgDQAHgCAFgIQAFgHABgIQABgEgBgHIgCgLQgBgIAHgFQAHgFAHAEQAFAEAJANQAFAIAFAPQAGAQADAHQAEAGANAEIATAEQAcAFAZgNQAYgNAGgjQAEgWgEglQgDglgPglQAMAVAFALQASApAJAoQALAzgHAmQgIAlg0BCQgqA0gtAqQgkAhgkABIgBAAQgnAAgjgkg");
	this.shape.setTransform(22.2806,21.7263);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0.1,0,44.4,43.5), null);


(lib.Path_2_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F4F51").s().p("AgtB4Qg9gUgshAQgWgggKgbQA3ArBVAvQA+AjApgMQAngMAWg6QAchLAhhPQgXB7gQBIQgMA2g0APQgTAFgWAAQglAAgvgPg");
	this.shape.setTransform(18.325,13.4829);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_6, new cjs.Rectangle(0,0,36.7,27), null);


(lib.Path_2_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0098AF").s().p("AATA5IgzgfQgKgFgmgJQglgJgMgdQgMgbAOgXQAFgJAIgJIAVAQIAmAbICXByIAnAcIgDACQgIACgJAAQgkAAg8gmg");
	this.shape.setTransform(13.4657,9.488);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_5, new cjs.Rectangle(0,0,27,19), null);


(lib.Path_2_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2EDF8").s().p("AgHBEIgYgQQgYgPgJgDQgJgEgdgHIgGgBQgdgHgNgUQgJgNgBgQQgBgQAIgNQAKgRAPgLQAYgSAcAIQAXAGAcAVQASAMADABQAFABAaAAQAyAAATAHQAXAIAKAFQARAJAHALQAEAGADAJQAGAWgWAoQgWAngTAGQgIADgJAAQgjAAg6glg");
	this.shape.setTransform(16.1334,10.4297);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_4, new cjs.Rectangle(0.1,0,32.199999999999996,20.9), null);


(lib.Path_2_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBCD08").s().p("AABgKIADgOIAOAMIgjAlg");
	this.shape.setTransform(1.825,2.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_3, new cjs.Rectangle(0,0,3.7,5), null);


(lib.Path_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7ECFDF").s().p("AgigfQAcgEAUAQQASANADATQgWAKgbAJg");
	this.shape.setTransform(3.525,3.259);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,7.1,6.5), null);


(lib.Path_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E11F26").s().p("AheBCQAggNAOgJQAKgGAHgMIALgYIACAXQAAAAAAABQABAAAAAAQAAAAABAAQAAgBAAAAIAVgNQAOgHAGgGQANgOAOgYQAIgQAGgRIAdAoIgvAsIiMA9g");
	this.shape.setTransform(9.5,7.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,19,14.7), null);


(lib.Path_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BBCE7").s().p("AgCgLIABgBIABABQACAFABATQgFgNAAgLg");
	this.shape.setTransform(0.275,1.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,0.6,2.5), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F4F51").s().p("AgtB4Qg9gUgshAQgWgggKgbQA3ArBVAwQA+AiApgMQAngMAVg6QAdhLAhhPQgYB8gPBHQgMA2g0APQgTAFgWAAQgmAAgugPg");
	this.shape.setTransform(18.325,13.4829);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,36.7,27), null);


(lib.Path_1_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F4F51").s().p("AAdB2QiLgWhThCQgpgggOgdQAoAQA0ARQBpAlA7ALQBEAMAsgVQAigRAlgvQAqg4AQgnQgDAYgGAeQgNA8gVAdQgbAngyAcQgtAbgnAAIgQgBg");
	this.shape.setTransform(24.875,11.912);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_5, new cjs.Rectangle(0,0,49.8,23.8), null);


(lib.Path_1_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0098AF").s().p("AgSAQQgpgegagbQgogoAMgEIATAOIAlAbICtCCQhLgag7gsg");
	this.shape.setTransform(11.6102,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0,0,23.3,17.2), null);


(lib.Path_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7ECFDF").s().p("AhBAYIgHgCIgEgLQARABAbgDQA1gIA1gZIADANIgEADQgwAWgxAIQgTADgOAAIgIgBg");
	this.shape.setTransform(7.65,2.4611);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,15.3,4.9), null);


(lib.Path_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7ECFDF").s().p("AgfAlQgDgNAEgQQAJgfAlgNQAPAxADAPQgjAJgWAAIgIAAg");
	this.shape.setTransform(3.3857,3.7223);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,6.8,7.5), null);


(lib.Path_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BBCE7").s().p("AgkgFIAAgBQAhACAHABQAPADASAGQgZgGgwgFg");
	this.shape.setTransform(3.7625,0.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,7.5,1.3), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F4F51").s().p("AAdB2QiLgWhThCQgpgggOgdQAoAQA0ARQBoAlA8ALQBDAMAsgVQAjgRAkgvQArg4AQgnQgDAYgGAeQgOA9gUAcQgcAngxAcQguAbgmAAIgQgBg");
	this.shape.setTransform(24.875,11.912);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,49.8,23.8), null);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F4F51").s().p("AgIBUQgvghgsgvQgyg3gRgtQA1A4BJBCQArAvAmgDQAsgFBRhHQgtA/grAZQgZAPgXAAQgVAAgRgNg");
	this.shape.setTransform(16.65,9.7259);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,33.3,19.5), null);


(lib.Group_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_172();
	this.instance.setTransform(0,0,0.2675,0.2675);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,54.6,53.8), null);


(lib.Group_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEEEE5").s().p("AAHgnQgDgEgpATIgDgGQAZgLATgFQAJgCAEALIAJAgQAGASAIAgIgHACQgUhLgGgLg");
	this.shape.setTransform(4.05,4.659);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,8.1,9.4), null);


(lib.Group_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFBFBF").s().p("AARBKIg4iVQAKABAQgCIA1CZQgOAAgJgDg");
	this.shape.setTransform(3.975,7.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,8,15.4), null);


(lib.Group_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C6C6").s().p("AADAjIgXhHQAGACAMAAIAXBHQgIAAgKgCg");
	this.shape.setTransform(2.1,3.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_0, new cjs.Rectangle(0,0,4.2,7.5), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F4F51").s().p("AhYE5QgogIhAgiQhAghgngiQgwgogFgPQgLgbAigwQAxhIAjhLQgCgQAAgSQABgkAKgIIBIhAIgOg4IAbAcIBQBcQAqAuAfAOQAmARApgOQAngNA0gsQhHBGgnAJQgsAKhHgtIhOg+QgLgIgCACQgCACAFAQQgQgYgNAFIghAYQgTANAYAwIA6BhQAnBCBCAcQBUAkBxgmQAPgFgGAJQgGAJgUALQg8AhhEgJQhDgTghgZQgVgRg0hAQgzg8gLgBQgQgDgKBDQgKBKAIAjQAIAlAkAsQAnAuAxAPQA1AQBlgIQBcgHArgaQANgIA1g2QAjgiAIgkQAHgfgFhOIgHh3QgEgsgIAUIhHCwQAGgwAhhcQAbhLAGgZQAHgegQARQgOAPATglIAthVIACgDQgbA6ATAnIAZAwQAPAngBAwQAAAlAFBqQADBfgKAgQgLAhglAaIg5AgIgYAUQgJAHgZgCQgNgBh1AJQg9AFglAAQgbAAgOgDg");
	this.shape.setTransform(35.2252,31.5536);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0.1,0,70.30000000000001,63.1), null);


(lib.Group_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F4F51").s().p("AhYE5QgogHhBgjQg/ghgoghQgvgogGgPQgKgbAhgxQAyhHAjhMQgCgQAAgSQABgjAKgJQAQgOA3gxIgNg4QANALAOAQQAeAhAyA7QAqAuAfAPQAmAQApgNQAngNA0gsQhHBGgoAJQgrAJhHgtIhPg9QgKgJgDADQgCACAFAQQgPgZgOAFIggAYQgTAOAYAvIA6BiQAnBBBBAcQBUAkBxgmQAQgFgGAJQgGAJgUAMQg8AghEgIQhDgTghgaQgVgQg1hAQgyg8gLgCQgQgDgKBEQgKBJAIAkQAIAlAkArQAnAuAxAPQA1AQBlgHQBbgHAsgbQALgHA3g2QAjgjAIgkQAHgfgFhNIgHh3QgEgsgIATIhHCxIAHgkQALguAVg6QAbhKAGgaQAHgfgQASQgOAPATglIAthVIABgDQgZA6ASAmIAYAxQAQAngBAvQAAAmAFBpQADBggKAfQgLAhgmAaIg4AgIgYAVQgJAHgZgCQgPgBhzAIQhAAEglAAQgZAAgNgCg");
	this.shape.setTransform(35.2593,31.537);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0.1,0,70.4,63.1), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_171();
	this.instance.setTransform(0,0,0.2675,0.2675);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,54.6,53.8), null);


(lib.Group_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACC0CA").s().p("AAAAcQgDgBgBgDIAAgCQgFAFgCgGIAAgDQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgGAEgIQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQADgGAGgIIAJgNQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIADAAQgOAHgEAVQAAABAAABQAAAAAAABQAAAAABABQAAAAABAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBQAEgTALgFQgHAFgGASQgBAAAAABQAAABABAAQAAABAAAAQABABAAAAQABABABAAQAAAAAAAAQAAgBABAAQAAAAABgBQAHgTAIgFIABgBIAAABQgJAKgHAPQgBABAAABQAAAAABABQAAAAAAABQABAAAAABQABAAABAAQAAAAABAAQAAAAABgBQAAAAABgBQAHgQAJgIIABgCQAAACgBADQgCAFgEAFQgFAGgIAXQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape.setTransform(2.4787,2.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,5,5.9), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40B2BE").s().p("AgNgdIALgEQAFAYALAoIgLADg");
	this.shape.setTransform(1.425,3.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,2.9,6.9), null);


(lib.metalDetectorStend = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(20,1,1).p("A2r1OMAtXAqd");
	this.shape.setTransform(145.2,135.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(13,1,1).p("AgNgdIAIARIATAq");
	this.shape_1.setTransform(291.8,274.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(7,1,1).p("ALyk/QADgJAEgJQAxhrBDAAQBFAAAvBrQAeBCALBVQAGApABAtIlGAAQACh+AlhdgAR0AkQgCAZgDAUQgaCaiRBkQiNBhkpALQiqAGlSgNQgwAAjIAGQihAEhhgDQkpgLiNhhQiBhZgqiHQgCgHgCgHQgHgbgGgiAxchjQBBhzD1hYQFOh4HYAAQG0AAE+BnARvguQACAWABAXAxzgBQAAgXADgXQAEgjAIgiQAEgQAEgP");
	this.shape_2.setTransform(402.875,283.5833);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AiiCsQACh+AlhcIAHgTQAxhqBDAAQBEAAAwBqQAdBCAMBVQAFApABAtg");
	this.shape_3.setTransform(490.65,256.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AslEiQjbhPhMhkQgHgcgFgiQAFAiAHAcQgaglgJgmQgDgMAAgNQABgWACgWQgCAWgBAWIAAgLQgBgQAEgRQAFgcAQgZIAUArIgUgrQBAhzD1hYQFOh4HXAAQG1AAE+BnQglBegCB+IFGAAQgBgugFgpQBUBBAQBLQADARAAAQIAAALQgBgWgCgWQACAWABAWQgLCjlDB0QlNB4nYAAQnXAAlOh4gAlQh6QiPAuAABDQAABBCPAvQCQAvDKAAQDLAACPgvQCQgvAAhBQAAhDiQguQiPgvjLAAQjKAAiQAvgARzALIAAAAg");
	this.shape_4.setTransform(402.75,282.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.metalDetectorStend, new cjs.Rectangle(-10,-10,530.4,341.6), null);


(lib.Scene_1_trash = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// trash
	this.instance = new lib.CachedBmp_310();
	this.instance.setTransform(31.1,414.75,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(429).to({_off:false},0).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1242.6,703.3);


(lib.Scene_1_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text.lineHeight = 128;
	this.text.lineWidth = 84;
	this.text.parent = this;
	this.text.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_1.lineHeight = 128;
	this.text_1.lineWidth = 84;
	this.text_1.parent = this;
	this.text_1.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_2.lineHeight = 128;
	this.text_2.lineWidth = 84;
	this.text_2.parent = this;
	this.text_2.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_3.lineHeight = 128;
	this.text_3.lineWidth = 84;
	this.text_3.parent = this;
	this.text_3.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_4.lineHeight = 128;
	this.text_4.lineWidth = 84;
	this.text_4.parent = this;
	this.text_4.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_5.lineHeight = 128;
	this.text_5.lineWidth = 84;
	this.text_5.parent = this;
	this.text_5.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_6.lineHeight = 128;
	this.text_6.lineWidth = 84;
	this.text_6.parent = this;
	this.text_6.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_6);
	}

	this.text_7 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_7.lineHeight = 128;
	this.text_7.lineWidth = 84;
	this.text_7.parent = this;
	this.text_7.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_7);
	}

	this.text_8 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_8.lineHeight = 128;
	this.text_8.lineWidth = 84;
	this.text_8.parent = this;
	this.text_8.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_8);
	}

	this.text_9 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_9.lineHeight = 128;
	this.text_9.lineWidth = 84;
	this.text_9.parent = this;
	this.text_9.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_9);
	}

	this.text_10 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_10.lineHeight = 128;
	this.text_10.lineWidth = 84;
	this.text_10.parent = this;
	this.text_10.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_10);
	}

	this.text_11 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_11.lineHeight = 128;
	this.text_11.lineWidth = 84;
	this.text_11.parent = this;
	this.text_11.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_11);
	}

	this.text_12 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_12.lineHeight = 128;
	this.text_12.lineWidth = 84;
	this.text_12.parent = this;
	this.text_12.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_12);
	}

	this.text_13 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_13.lineHeight = 128;
	this.text_13.lineWidth = 84;
	this.text_13.parent = this;
	this.text_13.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_13);
	}

	this.text_14 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_14.lineHeight = 128;
	this.text_14.lineWidth = 84;
	this.text_14.parent = this;
	this.text_14.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_14);
	}

	this.text_15 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_15.lineHeight = 128;
	this.text_15.lineWidth = 84;
	this.text_15.parent = this;
	this.text_15.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_15);
	}

	this.text_16 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_16.lineHeight = 128;
	this.text_16.lineWidth = 84;
	this.text_16.parent = this;
	this.text_16.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_16);
	}

	this.text_17 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_17.lineHeight = 128;
	this.text_17.lineWidth = 84;
	this.text_17.parent = this;
	this.text_17.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_17);
	}

	this.text_18 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_18.lineHeight = 128;
	this.text_18.lineWidth = 84;
	this.text_18.parent = this;
	this.text_18.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_18);
	}

	this.text_19 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_19.lineHeight = 128;
	this.text_19.lineWidth = 84;
	this.text_19.parent = this;
	this.text_19.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_19);
	}

	this.text_20 = new cjs.Text("ש", "normal 800 96px 'Assistant'", "#000066");
	this.text_20.lineHeight = 128;
	this.text_20.lineWidth = 84;
	this.text_20.parent = this;
	this.text_20.setTransform(595.55,9.6,0.9999,0.9999);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_20);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש",color:"#000066"}}]},519).to({state:[{t:this.text_1,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש",color:"#000066"}},{t:this.text,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו",color:"#000066"}}]},2).to({state:[{t:this.text_2,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש",color:"#000066"}},{t:this.text_1,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו",color:"#000066"}},{t:this.text,p:{scaleX:0.9997,scaleY:0.9997,x:499.2,y:9.2,text:"מ",color:"#000066"}}]},2).to({state:[{t:this.text_3,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש",color:"#000066"}},{t:this.text_2,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו",color:"#000066"}},{t:this.text_1,p:{scaleX:0.9997,scaleY:0.9997,x:499.2,y:9.2,text:"מ",color:"#000066"}},{t:this.text,p:{scaleX:0.9998,scaleY:0.9998,x:450.15,y:9.05,text:"ר",color:"#000066"}}]},2).to({state:[{t:this.text_4,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש",color:"#000066"}},{t:this.text_3,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו",color:"#000066"}},{t:this.text_2,p:{scaleX:0.9997,scaleY:0.9997,x:499.2,y:9.2,text:"מ",color:"#000066"}},{t:this.text_1,p:{scaleX:0.9998,scaleY:0.9998,x:450.15,y:9.05,text:"ר",color:"#000066"}},{t:this.text,p:{scaleX:0.9998,scaleY:0.9998,x:420.95,y:9.4,text:"י",color:"#000066"}}]},2).to({state:[{t:this.text_5,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש",color:"#000066"}},{t:this.text_4,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו",color:"#000066"}},{t:this.text_3,p:{scaleX:0.9997,scaleY:0.9997,x:499.2,y:9.2,text:"מ",color:"#000066"}},{t:this.text_2,p:{scaleX:0.9998,scaleY:0.9998,x:450.15,y:9.05,text:"ר",color:"#000066"}},{t:this.text_1,p:{scaleX:0.9998,scaleY:0.9998,x:420.95,y:9.4,text:"י",color:"#000066"}},{t:this.text,p:{scaleX:0.9998,scaleY:0.9998,x:364.7,y:6.8,text:"ם",color:"#000066"}}]},2).to({state:[{t:this.text_6,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש",color:"#000066"}},{t:this.text_5,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו",color:"#000066"}},{t:this.text_4,p:{scaleX:0.9997,scaleY:0.9997,x:499.2,y:9.2,text:"מ",color:"#000066"}},{t:this.text_3,p:{scaleX:0.9998,scaleY:0.9998,x:450.15,y:9.05,text:"ר",color:"#000066"}},{t:this.text_2,p:{scaleX:0.9998,scaleY:0.9998,x:420.95,y:9.4,text:"י",color:"#000066"}},{t:this.text_1,p:{scaleX:0.9998,scaleY:0.9998,x:364.7,y:6.8,text:"ם",color:"#000066"}},{t:this.text,p:{scaleX:0.9997,scaleY:0.9997,x:688.3,y:110.9,text:"ע",color:"#000066"}}]},2).to({state:[{t:this.text_7,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש",color:"#000066"}},{t:this.text_6,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו",color:"#000066"}},{t:this.text_5,p:{scaleX:0.9997,scaleY:0.9997,x:499.2,y:9.2,text:"מ",color:"#000066"}},{t:this.text_4,p:{scaleX:0.9998,scaleY:0.9998,x:450.15,y:9.05,text:"ר",color:"#000066"}},{t:this.text_3,p:{scaleX:0.9998,scaleY:0.9998,x:420.95,y:9.4,text:"י",color:"#000066"}},{t:this.text_2,p:{scaleX:0.9998,scaleY:0.9998,x:364.7,y:6.8,text:"ם",color:"#000066"}},{t:this.text_1,p:{scaleX:0.9997,scaleY:0.9997,x:688.3,y:110.9,text:"ע",color:"#000066"}},{t:this.text,p:{scaleX:0.9998,scaleY:0.9998,x:638.7,y:110.8,text:"ל",color:"#000066"}}]},2).to({state:[{t:this.text_8,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש",color:"#000066"}},{t:this.text_7,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו",color:"#000066"}},{t:this.text_6,p:{scaleX:0.9997,scaleY:0.9997,x:499.2,y:9.2,text:"מ",color:"#000066"}},{t:this.text_5,p:{scaleX:0.9998,scaleY:0.9998,x:450.15,y:9.05,text:"ר",color:"#000066"}},{t:this.text_4,p:{scaleX:0.9998,scaleY:0.9998,x:420.95,y:9.4,text:"י",color:"#000066"}},{t:this.text_3,p:{scaleX:0.9998,scaleY:0.9998,x:364.7,y:6.8,text:"ם",color:"#000066"}},{t:this.text_2,p:{scaleX:0.9997,scaleY:0.9997,x:688.3,y:110.9,text:"ע",color:"#000066"}},{t:this.text_1,p:{scaleX:0.9998,scaleY:0.9998,x:638.7,y:110.8,text:"ל",color:"#000066"}},{t:this.text,p:{scaleX:0.9998,scaleY:0.9998,x:535.9,y:110.8,text:"ה",color:"#000066"}}]},2).to({state:[{t:this.text_9,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש",color:"#000066"}},{t:this.text_8,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו",color:"#000066"}},{t:this.text_7,p:{scaleX:0.9997,scaleY:0.9997,x:499.2,y:9.2,text:"מ",color:"#000066"}},{t:this.text_6,p:{scaleX:0.9998,scaleY:0.9998,x:450.15,y:9.05,text:"ר",color:"#000066"}},{t:this.text_5,p:{scaleX:0.9998,scaleY:0.9998,x:420.95,y:9.4,text:"י",color:"#000066"}},{t:this.text_4,p:{scaleX:0.9998,scaleY:0.9998,x:364.7,y:6.8,text:"ם",color:"#000066"}},{t:this.text_3,p:{scaleX:0.9997,scaleY:0.9997,x:688.3,y:110.9,text:"ע",color:"#000066"}},{t:this.text_2,p:{scaleX:0.9998,scaleY:0.9998,x:638.7,y:110.8,text:"ל",color:"#000066"}},{t:this.text_1,p:{scaleX:0.9998,scaleY:0.9998,x:535.9,y:110.8,text:"ה",color:"#000066"}},{t:this.text,p:{scaleX:0.9998,scaleY:0.9998,x:505.8,y:110.7,text:"י",color:"#000066"}}]},2).to({state:[{t:this.text_10,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש"}},{t:this.text_9,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו",color:"#000066"}},{t:this.text_8,p:{scaleX:0.9997,scaleY:0.9997,x:499.2,y:9.2,text:"מ",color:"#000066"}},{t:this.text_7,p:{scaleX:0.9998,scaleY:0.9998,x:450.15,y:9.05,text:"ר",color:"#000066"}},{t:this.text_6,p:{scaleX:0.9998,scaleY:0.9998,x:420.95,y:9.4,text:"י",color:"#000066"}},{t:this.text_5,p:{scaleX:0.9998,scaleY:0.9998,x:364.7,y:6.8,text:"ם",color:"#000066"}},{t:this.text_4,p:{scaleX:0.9997,scaleY:0.9997,x:688.3,y:110.9,text:"ע",color:"#000066"}},{t:this.text_3,p:{scaleX:0.9998,scaleY:0.9998,x:638.7,y:110.8,text:"ל",color:"#000066"}},{t:this.text_2,p:{scaleX:0.9998,scaleY:0.9998,x:535.9,y:110.8,text:"ה",color:"#000066"}},{t:this.text_1,p:{scaleX:0.9998,scaleY:0.9998,x:505.8,y:110.7,text:"י",color:"#000066"}},{t:this.text,p:{scaleX:0.9998,scaleY:0.9998,x:448.2,y:110.65,text:"ם",color:"#000066"}}]},2).to({state:[{t:this.text_11,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש"}},{t:this.text_10,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו"}},{t:this.text_9,p:{scaleX:0.9997,scaleY:0.9997,x:499.2,y:9.2,text:"מ",color:"#000066"}},{t:this.text_8,p:{scaleX:0.9998,scaleY:0.9998,x:450.15,y:9.05,text:"ר",color:"#000066"}},{t:this.text_7,p:{scaleX:0.9998,scaleY:0.9998,x:420.95,y:9.4,text:"י",color:"#000066"}},{t:this.text_6,p:{scaleX:0.9998,scaleY:0.9998,x:364.7,y:6.8,text:"ם",color:"#000066"}},{t:this.text_5,p:{scaleX:0.9997,scaleY:0.9997,x:688.3,y:110.9,text:"ע",color:"#000066"}},{t:this.text_4,p:{scaleX:0.9998,scaleY:0.9998,x:638.7,y:110.8,text:"ל",color:"#000066"}},{t:this.text_3,p:{scaleX:0.9998,scaleY:0.9998,x:535.9,y:110.8,text:"ה",color:"#000066"}},{t:this.text_2,p:{scaleX:0.9998,scaleY:0.9998,x:505.8,y:110.7,text:"י",color:"#000066"}},{t:this.text_1,p:{scaleX:0.9998,scaleY:0.9998,x:448.2,y:110.65,text:"ם",color:"#000066"}},{t:this.text,p:{scaleX:0.9998,scaleY:0.9998,x:961.6,y:229,text:"נ",color:"#000000"}}]},2).to({state:[{t:this.text_12,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש"}},{t:this.text_11,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו"}},{t:this.text_10,p:{scaleX:0.9997,scaleY:0.9997,x:499.2,y:9.2,text:"מ"}},{t:this.text_9,p:{scaleX:0.9998,scaleY:0.9998,x:450.15,y:9.05,text:"ר",color:"#000066"}},{t:this.text_8,p:{scaleX:0.9998,scaleY:0.9998,x:420.95,y:9.4,text:"י",color:"#000066"}},{t:this.text_7,p:{scaleX:0.9998,scaleY:0.9998,x:364.7,y:6.8,text:"ם",color:"#000066"}},{t:this.text_6,p:{scaleX:0.9997,scaleY:0.9997,x:688.3,y:110.9,text:"ע",color:"#000066"}},{t:this.text_5,p:{scaleX:0.9998,scaleY:0.9998,x:638.7,y:110.8,text:"ל",color:"#000066"}},{t:this.text_4,p:{scaleX:0.9998,scaleY:0.9998,x:535.9,y:110.8,text:"ה",color:"#000066"}},{t:this.text_3,p:{scaleX:0.9998,scaleY:0.9998,x:505.8,y:110.7,text:"י",color:"#000066"}},{t:this.text_2,p:{scaleX:0.9998,scaleY:0.9998,x:448.2,y:110.65,text:"ם",color:"#000066"}},{t:this.text_1,p:{scaleX:0.9998,scaleY:0.9998,x:961.6,y:229,text:"נ",color:"#000000"}},{t:this.text,p:{scaleX:0.9997,scaleY:0.9997,x:902.4,y:228.65,text:"ה",color:"#000000"}}]},2).to({state:[{t:this.text_13,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש"}},{t:this.text_12,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו"}},{t:this.text_11,p:{scaleX:0.9997,scaleY:0.9997,x:499.2,y:9.2,text:"מ"}},{t:this.text_10,p:{scaleX:0.9998,scaleY:0.9998,x:450.15,y:9.05,text:"ר"}},{t:this.text_9,p:{scaleX:0.9998,scaleY:0.9998,x:420.95,y:9.4,text:"י",color:"#000066"}},{t:this.text_8,p:{scaleX:0.9998,scaleY:0.9998,x:364.7,y:6.8,text:"ם",color:"#000066"}},{t:this.text_7,p:{scaleX:0.9997,scaleY:0.9997,x:688.3,y:110.9,text:"ע",color:"#000066"}},{t:this.text_6,p:{scaleX:0.9998,scaleY:0.9998,x:638.7,y:110.8,text:"ל",color:"#000066"}},{t:this.text_5,p:{scaleX:0.9998,scaleY:0.9998,x:535.9,y:110.8,text:"ה",color:"#000066"}},{t:this.text_4,p:{scaleX:0.9998,scaleY:0.9998,x:505.8,y:110.7,text:"י",color:"#000066"}},{t:this.text_3,p:{scaleX:0.9998,scaleY:0.9998,x:448.2,y:110.65,text:"ם",color:"#000066"}},{t:this.text_2,p:{scaleX:0.9998,scaleY:0.9998,x:961.6,y:229,text:"נ",color:"#000000"}},{t:this.text_1,p:{scaleX:0.9997,scaleY:0.9997,x:902.4,y:228.65,text:"ה",color:"#000000"}},{t:this.text,p:{scaleX:0.9995,scaleY:0.9995,x:857.45,y:227.85,text:"נ",color:"#000000"}}]},2).to({state:[{t:this.text_14,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש"}},{t:this.text_13,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו"}},{t:this.text_12,p:{scaleX:0.9997,scaleY:0.9997,x:499.2,y:9.2,text:"מ"}},{t:this.text_11,p:{scaleX:0.9998,scaleY:0.9998,x:450.15,y:9.05,text:"ר"}},{t:this.text_10,p:{scaleX:0.9998,scaleY:0.9998,x:420.95,y:9.4,text:"י"}},{t:this.text_9,p:{scaleX:0.9998,scaleY:0.9998,x:364.7,y:6.8,text:"ם",color:"#000066"}},{t:this.text_8,p:{scaleX:0.9997,scaleY:0.9997,x:688.3,y:110.9,text:"ע",color:"#000066"}},{t:this.text_7,p:{scaleX:0.9998,scaleY:0.9998,x:638.7,y:110.8,text:"ל",color:"#000066"}},{t:this.text_6,p:{scaleX:0.9998,scaleY:0.9998,x:535.9,y:110.8,text:"ה",color:"#000066"}},{t:this.text_5,p:{scaleX:0.9998,scaleY:0.9998,x:505.8,y:110.7,text:"י",color:"#000066"}},{t:this.text_4,p:{scaleX:0.9998,scaleY:0.9998,x:448.2,y:110.65,text:"ם",color:"#000066"}},{t:this.text_3,p:{scaleX:0.9998,scaleY:0.9998,x:961.6,y:229,text:"נ",color:"#000000"}},{t:this.text_2,p:{scaleX:0.9997,scaleY:0.9997,x:902.4,y:228.65,text:"ה",color:"#000000"}},{t:this.text_1,p:{scaleX:0.9995,scaleY:0.9995,x:857.45,y:227.85,text:"נ",color:"#000000"}},{t:this.text,p:{scaleX:0.9997,scaleY:0.9997,x:827.7,y:227.55,text:"י",color:"#000000"}}]},2).to({state:[{t:this.text_15,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש"}},{t:this.text_14,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו"}},{t:this.text_13,p:{scaleX:0.9997,scaleY:0.9997,x:499.2,y:9.2,text:"מ"}},{t:this.text_12,p:{scaleX:0.9998,scaleY:0.9998,x:450.15,y:9.05,text:"ר"}},{t:this.text_11,p:{scaleX:0.9998,scaleY:0.9998,x:420.95,y:9.4,text:"י"}},{t:this.text_10,p:{scaleX:0.9998,scaleY:0.9998,x:364.7,y:6.8,text:"ם"}},{t:this.text_9,p:{scaleX:0.9997,scaleY:0.9997,x:688.3,y:110.9,text:"ע",color:"#000066"}},{t:this.text_8,p:{scaleX:0.9998,scaleY:0.9998,x:638.7,y:110.8,text:"ל",color:"#000066"}},{t:this.text_7,p:{scaleX:0.9998,scaleY:0.9998,x:535.9,y:110.8,text:"ה",color:"#000066"}},{t:this.text_6,p:{scaleX:0.9998,scaleY:0.9998,x:505.8,y:110.7,text:"י",color:"#000066"}},{t:this.text_5,p:{scaleX:0.9998,scaleY:0.9998,x:448.2,y:110.65,text:"ם",color:"#000066"}},{t:this.text_4,p:{scaleX:0.9998,scaleY:0.9998,x:961.6,y:229,text:"נ",color:"#000000"}},{t:this.text_3,p:{scaleX:0.9997,scaleY:0.9997,x:902.4,y:228.65,text:"ה",color:"#000000"}},{t:this.text_2,p:{scaleX:0.9995,scaleY:0.9995,x:857.45,y:227.85,text:"נ",color:"#000000"}},{t:this.text_1,p:{scaleX:0.9997,scaleY:0.9997,x:827.7,y:227.55,text:"י",color:"#000000"}},{t:this.text,p:{scaleX:0.9996,scaleY:0.9996,x:765.6,y:226.15,text:"ם",color:"#000000"}}]},2).to({state:[{t:this.text_16,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש"}},{t:this.text_15,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו"}},{t:this.text_14,p:{scaleX:0.9997,scaleY:0.9997,x:499.2,y:9.2,text:"מ"}},{t:this.text_13,p:{scaleX:0.9998,scaleY:0.9998,x:450.15,y:9.05,text:"ר"}},{t:this.text_12,p:{scaleX:0.9998,scaleY:0.9998,x:420.95,y:9.4,text:"י"}},{t:this.text_11,p:{scaleX:0.9998,scaleY:0.9998,x:364.7,y:6.8,text:"ם"}},{t:this.text_10,p:{scaleX:0.9997,scaleY:0.9997,x:688.3,y:110.9,text:"ע"}},{t:this.text_9,p:{scaleX:0.9998,scaleY:0.9998,x:638.7,y:110.8,text:"ל",color:"#000066"}},{t:this.text_8,p:{scaleX:0.9998,scaleY:0.9998,x:535.9,y:110.8,text:"ה",color:"#000066"}},{t:this.text_7,p:{scaleX:0.9998,scaleY:0.9998,x:505.8,y:110.7,text:"י",color:"#000066"}},{t:this.text_6,p:{scaleX:0.9998,scaleY:0.9998,x:448.2,y:110.65,text:"ם",color:"#000066"}},{t:this.text_5,p:{scaleX:0.9998,scaleY:0.9998,x:961.6,y:229,text:"נ",color:"#000000"}},{t:this.text_4,p:{scaleX:0.9997,scaleY:0.9997,x:902.4,y:228.65,text:"ה",color:"#000000"}},{t:this.text_3,p:{scaleX:0.9995,scaleY:0.9995,x:857.45,y:227.85,text:"נ",color:"#000000"}},{t:this.text_2,p:{scaleX:0.9997,scaleY:0.9997,x:827.7,y:227.55,text:"י",color:"#000000"}},{t:this.text_1,p:{scaleX:0.9996,scaleY:0.9996,x:765.6,y:226.15,text:"ם",color:"#000000"}},{t:this.text,p:{scaleX:0.9997,scaleY:0.9997,x:694.3,y:225.9,text:"י",color:"#000000"}}]},2).to({state:[{t:this.text_17,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש"}},{t:this.text_16,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו"}},{t:this.text_15,p:{scaleX:0.9997,scaleY:0.9997,x:499.2,y:9.2,text:"מ"}},{t:this.text_14,p:{scaleX:0.9998,scaleY:0.9998,x:450.15,y:9.05,text:"ר"}},{t:this.text_13,p:{scaleX:0.9998,scaleY:0.9998,x:420.95,y:9.4,text:"י"}},{t:this.text_12,p:{scaleX:0.9998,scaleY:0.9998,x:364.7,y:6.8,text:"ם"}},{t:this.text_11,p:{scaleX:0.9997,scaleY:0.9997,x:688.3,y:110.9,text:"ע"}},{t:this.text_10,p:{scaleX:0.9998,scaleY:0.9998,x:638.7,y:110.8,text:"ל"}},{t:this.text_9,p:{scaleX:0.9998,scaleY:0.9998,x:535.9,y:110.8,text:"ה",color:"#000066"}},{t:this.text_8,p:{scaleX:0.9998,scaleY:0.9998,x:505.8,y:110.7,text:"י",color:"#000066"}},{t:this.text_7,p:{scaleX:0.9998,scaleY:0.9998,x:448.2,y:110.65,text:"ם",color:"#000066"}},{t:this.text_6,p:{scaleX:0.9998,scaleY:0.9998,x:961.6,y:229,text:"נ",color:"#000000"}},{t:this.text_5,p:{scaleX:0.9997,scaleY:0.9997,x:902.4,y:228.65,text:"ה",color:"#000000"}},{t:this.text_4,p:{scaleX:0.9995,scaleY:0.9995,x:857.45,y:227.85,text:"נ",color:"#000000"}},{t:this.text_3,p:{scaleX:0.9997,scaleY:0.9997,x:827.7,y:227.55,text:"י",color:"#000000"}},{t:this.text_2,p:{scaleX:0.9996,scaleY:0.9996,x:765.6,y:226.15,text:"ם",color:"#000000"}},{t:this.text_1,p:{scaleX:0.9997,scaleY:0.9997,x:694.3,y:225.9,text:"י",color:"#000000"}},{t:this.text,p:{scaleX:0.9996,scaleY:0.9996,x:664,y:225.35,text:"ו",color:"#000000"}}]},2).to({state:[{t:this.text_18,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש"}},{t:this.text_17,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו"}},{t:this.text_16,p:{scaleX:0.9997,scaleY:0.9997,x:499.2,y:9.2,text:"מ"}},{t:this.text_15,p:{scaleX:0.9998,scaleY:0.9998,x:450.15,y:9.05,text:"ר"}},{t:this.text_14,p:{scaleX:0.9998,scaleY:0.9998,x:420.95,y:9.4,text:"י"}},{t:this.text_13,p:{scaleX:0.9998,scaleY:0.9998,x:364.7,y:6.8,text:"ם"}},{t:this.text_12,p:{scaleX:0.9997,scaleY:0.9997,x:688.3,y:110.9,text:"ע"}},{t:this.text_11,p:{scaleX:0.9998,scaleY:0.9998,x:638.7,y:110.8,text:"ל"}},{t:this.text_10,p:{scaleX:0.9998,scaleY:0.9998,x:535.9,y:110.8,text:"ה"}},{t:this.text_9,p:{scaleX:0.9998,scaleY:0.9998,x:505.8,y:110.7,text:"י",color:"#000066"}},{t:this.text_8,p:{scaleX:0.9998,scaleY:0.9998,x:448.2,y:110.65,text:"ם",color:"#000066"}},{t:this.text_7,p:{scaleX:0.9998,scaleY:0.9998,x:961.6,y:229,text:"נ",color:"#000000"}},{t:this.text_6,p:{scaleX:0.9997,scaleY:0.9997,x:902.4,y:228.65,text:"ה",color:"#000000"}},{t:this.text_5,p:{scaleX:0.9995,scaleY:0.9995,x:857.45,y:227.85,text:"נ",color:"#000000"}},{t:this.text_4,p:{scaleX:0.9997,scaleY:0.9997,x:827.7,y:227.55,text:"י",color:"#000000"}},{t:this.text_3,p:{scaleX:0.9996,scaleY:0.9996,x:765.6,y:226.15,text:"ם",color:"#000000"}},{t:this.text_2,p:{scaleX:0.9997,scaleY:0.9997,x:694.3,y:225.9,text:"י",color:"#000000"}},{t:this.text_1,p:{scaleX:0.9996,scaleY:0.9996,x:664,y:225.35,text:"ו",color:"#000000"}},{t:this.text,p:{scaleX:0.9997,scaleY:0.9997,x:600.15,y:224.95,text:"ת",color:"#000000"}}]},2).to({state:[{t:this.text_19,p:{scaleX:0.9999,scaleY:0.9999,x:595.55,y:9.6,text:"ש"}},{t:this.text_18,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו"}},{t:this.text_17,p:{scaleX:0.9997,scaleY:0.9997,x:499.2,y:9.2,text:"מ"}},{t:this.text_16,p:{scaleX:0.9998,scaleY:0.9998,x:450.15,y:9.05,text:"ר"}},{t:this.text_15,p:{scaleX:0.9998,scaleY:0.9998,x:420.95,y:9.4,text:"י"}},{t:this.text_14,p:{scaleX:0.9998,scaleY:0.9998,x:364.7,y:6.8,text:"ם"}},{t:this.text_13,p:{scaleX:0.9997,scaleY:0.9997,x:688.3,y:110.9,text:"ע"}},{t:this.text_12,p:{scaleX:0.9998,scaleY:0.9998,x:638.7,y:110.8,text:"ל"}},{t:this.text_11,p:{scaleX:0.9998,scaleY:0.9998,x:535.9,y:110.8,text:"ה"}},{t:this.text_10,p:{scaleX:0.9998,scaleY:0.9998,x:505.8,y:110.7,text:"י"}},{t:this.text_9,p:{scaleX:0.9998,scaleY:0.9998,x:448.2,y:110.65,text:"ם",color:"#000066"}},{t:this.text_8,p:{scaleX:0.9998,scaleY:0.9998,x:961.6,y:229,text:"נ",color:"#000000"}},{t:this.text_7,p:{scaleX:0.9997,scaleY:0.9997,x:902.4,y:228.65,text:"ה",color:"#000000"}},{t:this.text_6,p:{scaleX:0.9995,scaleY:0.9995,x:857.45,y:227.85,text:"נ",color:"#000000"}},{t:this.text_5,p:{scaleX:0.9997,scaleY:0.9997,x:827.7,y:227.55,text:"י",color:"#000000"}},{t:this.text_4,p:{scaleX:0.9996,scaleY:0.9996,x:765.6,y:226.15,text:"ם",color:"#000000"}},{t:this.text_3,p:{scaleX:0.9997,scaleY:0.9997,x:694.3,y:225.9,text:"י",color:"#000000"}},{t:this.text_2,p:{scaleX:0.9996,scaleY:0.9996,x:664,y:225.35,text:"ו",color:"#000000"}},{t:this.text_1,p:{scaleX:0.9997,scaleY:0.9997,x:600.15,y:224.95,text:"ת",color:"#000000"}},{t:this.text,p:{scaleX:0.9997,scaleY:0.9997,x:552.6,y:224.6,text:"ר",color:"#000000"}}]},2).to({state:[{t:this.text_20},{t:this.text_19,p:{scaleX:0.9997,scaleY:0.9997,x:564.5,y:9.55,text:"ו"}},{t:this.text_18,p:{scaleX:0.9997,scaleY:0.9997,x:499.2,y:9.2,text:"מ"}},{t:this.text_17,p:{scaleX:0.9998,scaleY:0.9998,x:450.15,y:9.05,text:"ר"}},{t:this.text_16,p:{scaleX:0.9998,scaleY:0.9998,x:420.95,y:9.4,text:"י"}},{t:this.text_15,p:{scaleX:0.9998,scaleY:0.9998,x:364.7,y:6.8,text:"ם"}},{t:this.text_14,p:{scaleX:0.9997,scaleY:0.9997,x:688.3,y:110.9,text:"ע"}},{t:this.text_13,p:{scaleX:0.9998,scaleY:0.9998,x:638.7,y:110.8,text:"ל"}},{t:this.text_12,p:{scaleX:0.9998,scaleY:0.9998,x:535.9,y:110.8,text:"ה"}},{t:this.text_11,p:{scaleX:0.9998,scaleY:0.9998,x:505.8,y:110.7,text:"י"}},{t:this.text_10,p:{scaleX:0.9998,scaleY:0.9998,x:448.2,y:110.65,text:"ם"}},{t:this.text_9,p:{scaleX:0.9998,scaleY:0.9998,x:961.6,y:229,text:"נ",color:"#000000"}},{t:this.text_8,p:{scaleX:0.9997,scaleY:0.9997,x:902.4,y:228.65,text:"ה",color:"#000000"}},{t:this.text_7,p:{scaleX:0.9995,scaleY:0.9995,x:857.45,y:227.85,text:"נ",color:"#000000"}},{t:this.text_6,p:{scaleX:0.9997,scaleY:0.9997,x:827.7,y:227.55,text:"י",color:"#000000"}},{t:this.text_5,p:{scaleX:0.9996,scaleY:0.9996,x:765.6,y:226.15,text:"ם",color:"#000000"}},{t:this.text_4,p:{scaleX:0.9997,scaleY:0.9997,x:694.3,y:225.9,text:"י",color:"#000000"}},{t:this.text_3,p:{scaleX:0.9996,scaleY:0.9996,x:664,y:225.35,text:"ו",color:"#000000"}},{t:this.text_2,p:{scaleX:0.9997,scaleY:0.9997,x:600.15,y:224.95,text:"ת",color:"#000000"}},{t:this.text_1,p:{scaleX:0.9997,scaleY:0.9997,x:552.6,y:224.6,text:"ר",color:"#000000"}},{t:this.text,p:{scaleX:0.9997,scaleY:0.9997,x:516.25,y:224.45,text:"!",color:"#000000"}}]},2).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1048,356.6);


(lib.REDmetalDetector = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(20,1,1).p("A2r1OMAtXAqd");
	this.shape.setTransform(145.2,135.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(13,1,1).p("AgNgdIAIARIATAq");
	this.shape_1.setTransform(291.8,274.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(7,1,1).p("ALyk/QADgJAEgJQAxhrBDAAQBFAAAvBrQAeBCALBVQAGApABAtIlGAAQACh+AlhdgAR0AkQgCAZgDAUQgaCaiRBkQiNBhkpALQiqAGlSgNQgwAAjIAGQihAEhhgDQkpgLiNhhQiBhZgqiHQgCgHgCgHQgHgbgGgiAxchjQBBhzD1hYQFOh4HYAAQG0AAE+BnARvguQACAWABAXAxzgBQAAgXADgXQAEgjAIgiQAEgQAEgP");
	this.shape_2.setTransform(402.875,283.5833);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AiiCsQACh+AlhcIAHgTQAxhqBDAAQBEAAAwBqQAdBCAMBVQAFApABAtg");
	this.shape_3.setTransform(490.65,256.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AslEiQjbhPhMhkQgHgcgFgiQAFAiAHAcQgaglgJgmQgDgMAAgNQABgWACgWQgCAWgBAWIAAgLQgBgQAEgRQAFgcAQgZQBAhzD1hYQFOh4HXAAQG1AAE+BnQglBegCB+IFGAAQgBgugFgpQBUBBAQBLQADARAAAQIAAALQgBgWgCgWQACAWABAWQgLCjlDB0QlNB4nYAAQnXAAlOh4gAlQh6QiPAuAABDQAABBCPAvQCQAvDKAAQDLAACPgvQCQgvAAhBQAAhDiQguQiPgvjLAAQjKAAiQAvgAxGgrIgUgrgARzALIAAAAg");
	this.shape_4.setTransform(402.75,282.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.REDmetalDetector, new cjs.Rectangle(-10,-10,530.4,341.6), null);


(lib.metalDetector = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(20,1,1).p("A2r1OMAtXAqd");
	this.shape.setTransform(133.35,242.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(13,1,1).p("AgNgdIAIARIATAq");
	this.shape_1.setTransform(279.95,381.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(7,1,1).p("ALyk/QADgJAEgJQAxhrBDAAQBFAAAvBrQAeBCALBVQAGApABAtIlGAAQACh+AlhdgAxchjQBBhzD1hYQFOh4HYAAQG0AAE+BnARvguQACAWABAXAxzgBQAAgXADgXQAEgjAIgiQAEgQAEgPAR0AkQgCAZgDAUQgaCaiRBkQiNBhkpALQiqAGlSgNQgwAAjIAGQihAEhhgDQkpgLiNhhQiBhZgqiHQgCgHgCgHQgHgbgGgi");
	this.shape_2.setTransform(391.025,390.1833);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AiiCsQADh+AkhdIAIgSQAwhqBDAAQBEAAAvBqQAeBCAMBUQAFApABAug");
	this.shape_3.setTransform(478.8,362.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AslEiQjchPhKhlQgIgbgGghQAGAhAIAbQgcgjgHgoQgEgLAAgNQABgWACgXQgCAXgBAWIgBgLQABgRADgRQAFgaAQgaQBBhzD0hYQFOh4HXAAQG1AAE+BnQgkBdgDB+IFGAAQgBgtgFgpQBUBAAQBMQADAQAAARIAAALQgBgWgCgWQACAWABAWQgKCjlEB0QlNB4nYAAQnXAAlOh4gAlQh7QiPAvAABDQAABCCPAuQCQAvDKAAQDLAACPgvQCQguAAhCQAAhDiQgvQiPgujLAAQjKAAiQAugAxHgsIgTgqgARzALIAAAAg");
	this.shape_4.setTransform(390.9,388.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("Awd1ZMAgyAqnIAFAGIADAFIABABAQEUzIATAS");
	this.shape_5.setTransform(93.55,243.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(13,1,1).p("AgNgdIAGANIACAEIABAEIASAm");
	this.shape_6.setTransform(199.65,381.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(7,1,1).p("ALyk/QADgJAEgJQAxhrBDAAQBFAAAvBrQAeBCALBVQAGApABAtIlGAAQACh+AlhdgARvguQACAWABAXAxchjQAAgBABAAQADgGAEgGQgEADgDADQgCABgBABQgCACgBABQgIAIALgCQAAAAABAAQABgBABAAQAAAAABAAQA3gNCgg2QAUgHAAgQQgEgXgBgNQgCgRAIgPQARgdA6gUQAAAAAAAAQDAhAEhghQDEgWB+AAQG0AAE+BnAxzgBQAAgXADgXQADgfAHgdQABgFABgEQAEgQAEgPAtuj+QgjAVg0AfQhsBAgjAaQBHhrDnhTQACgBABAAQAGAAhRAxgAR0AkQgCAZgDAUQgaCaiRBkQiNBhkpALQiqAGlSgNQgwAAjIAGQihAEhhgDQkpgLiNhhQiBhZgqiHQgCgHgCgHQgHgbgHgi");
	this.shape_7.setTransform(310.725,390.1833);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AiiCsQACh+AlhdIAHgSQAxhqBDAAQBEAAAvBqQAeBCAMBUQAFApABAug");
	this.shape_8.setTransform(398.5,362.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AslEiQjchPhLhlQgHgbgHghQAHAhAHAbQgIgKgGgLQgPgagGgcQgCgLgBgNQABgWACgXQgCAXgBAWIgBgLQABgRADgRQAFgYANgYIACAAIgBgBIACgDIABAEIgBAAIgBAAIABAAIABAAIATAmIgTgmQA3gNCgg3QAVgHgBgQIgFgjQgCgSAJgPIhYA0QhsBBgjAZQBHhrDnhTIADgBQg5AUgRAdIABgBIABAAIABgBIAAAAIADgCQBKgtgGAAIAAAAQDAhAEighQDDgWB9AAQG1AAE+BnQglBdgCB+IFGAAQgBgtgFgpQBUBAAQBMQAEAQgBARIAAALQAAgWgDgWQADAWAAAWQgLCjlDB0QlNB4nYAAQnXAAlOh4gAlQh7IgDACQiMAuAABCQAABCCPAuQCQAvDKAAQDLAACPgvQCQguAAhCQAAhDiQgvQiPgujLAAQjKAAiQAugARzALIAAAAgAtsjxIAAAAgAsikiQAGAAhKAtIgDACIAAAAIgBABIgBAAIgBABQARgdA5gUg");
	this.shape_9.setTransform(310.6,388.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(13,1,1).p("AghgqIABACIACAFIARAiAAaAaIAGAMIACAF");
	this.shape_10.setTransform(166,428.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(20,1,1).p("At/5MMAa8AxCIADAEIA3BHIAEAGIAFAFIAAABANmYmIATAS");
	this.shape_11.setTransform(79.7,271.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(7,1,1).p("AsvkvIAAAAQDAhAEhghQDEgWB+AAQG0AAE+BnQADgJAEgJQAxhrBDAAQBFAAAvBrQAeBCALBVQAGApABAtIlGAAQACh+AlhdARoAkQgCAZgDAUQgaCaiRBkQiNBhkpALQiqAGlSgNQgwAAjIAGQihAEhhgDQkpgLiNhhQiBhZgqiHQgCgHgCgHQgHgbgHgiAxnhfQAAgBABAAQA3gNCgg2QAUgHAAgQQgEgXgBgNQgCgRAJgPQAQgdA6gUQAGAAhQAxQgkAVg0AfQhsBAgjAaQBHhrDnhTQACgBABAAAxnhiQADgIAEgGQgEADgDADAwjgTIgCACIgEADQgIAIALgCIACAAAw7BVQABgWACgYQAEgeAHgdIACgJQACgKAGgVARjguQACAWABAX");
	this.shape_12.setTransform(275.425,433.9833);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AiiCsQADh+AkhdIAIgSQAwhqBDAAQBEAAAwBqQAdBCALBVQAGApABAtg");
	this.shape_13.setTransform(362,406.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AsxEiQieg5hThDIAAAJIgIgRQgbgXgTgZQgHgbgHgiQAHAiAHAbIgOgVIAAgoIAAiDIAAgDIABACIgBABIABgBQA3gNCgg1QAUgIAAgQIgFgkQgCgRAJgPIhYA1QhsA/gjAbQBHhsDnhTIADgBIAAAAQDAhAEhghQDEgWB+AAQG0AAE+BnQglBegCB9IFGAAQgBgtgGgpQBVBBAQBLQADARAAAQIAAALQgBgWgCgWQACAWABAWQgLCjlDB0QlNB4nXAAQnYAAlOh4gAlch7IgDACQiMAuAABCQAABBCPAvQCQAvDLAAQDKAACPgvQCQgvAAhBQAAhDiQgvQiPgujKAAQjLAAiQAugAw3A1IgDAtIADgtQAGgZAMgYIACAAIgBgBIACgDIgCgEIACgCIgCACIgGgMIAIgfIgIAfIgTgRIATARIgCAKQgHAcgEAfIAAAAgAwsgGIg3hIIgCgFIACAFIgDgEIADAEIAQAjIgQgjgAsukiQg6AUgQAdIACgCIABAAIABAAIAEgDIABgBIAAAAQBGgrgFAAIAAAAgARnALIAAAAgAwqgQgAxjhOgAsukiQAFAAhGArIAAAAIgBABIgEADIgBAAIgBAAIgCACQAQgdA6gUg");
	this.shape_14.setTransform(275.325,432.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(7,1,1).p("ALyk/QADgJAEgJQAxhrBDAAQBFAAAvBrQAeBCALBVQAGApABAtIlGAAQACh+AlhdgARvguQACAWABAXAxUhwQgEADgDADQgCABgBABQgCACgBABQgIAIALgCQAAAAABAAQABgBABAAQAAAAABAAQA3gNCgg2QAUgHAAgQQgEgXgBgNQgCgRAIgPQARgdA6gUQAAAAAAAAQDAhAEhghQDEgWB+AAQG0AAE+BnAxchjQAAgBABAAQADgGAEgGQBHhrDnhTQACgBABAAQAGAAhRAxQgjAVg0AfQhsBAgjAaAxzgBQAAgXADgXQADgfAHgdQABgFABgEQAEgQAEgPAR0AkQgCAZgDAUQgaCaiRBkQiNBhkpALQiqAGlSgNQgwAAjIAGQihAEhhgDQkpgLiNhhQiBhZgqiHQgCgHgCgHQgHgbgHgi");
	this.shape_15.setTransform(310.725,390.1833);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AslEiQjchPhLhlQgHgbgHghQAHAhAHAbQgIgKgGgLQgPgagGgcQgCgLgBgNQABgWACgXQgCAXgBAWIgBgLQABgRADgRQAFgYANgYIACAAIgBgBIACgDIABAEIgBAAIgBAAIABAAIABAAQA3gNCgg3QAVgHgBgQIgFgjQgCgSAJgPIABgBIABAAIABgBIAAAAIADgCQBKgtgGAAIAAAAIAAAAQAGAAhKAtIgDACIAAAAIgBABIgBAAIgBABQARgdA5gUIAAAAQDAhAEighQDDgWB9AAQG1AAE+BnQglBdgCB+IFGAAQgBgtgFgpQBUBAAQBMQAEAQgBARIAAALQAAgWgDgWQADAWAAAWQgLCjlDB0QlNB4nYAAQnXAAlOh4gAlQh7IgDACQiMAuAABCQAABCCPAuQCQAvDKAAQDLAACPgvQCQguAAhCQAAhDiQgvQiPgujLAAQjKAAiQAugAxGgsIgTgmgARzALIAAAAgAslkhIADgBQg5AUgRAdIhYA0QhsBBgjAZQBHhrDnhTgAtsjxIAAAAg");
	this.shape_16.setTransform(310.6,388.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AslEiQjchPhLhlQgHgbgHghQAHAhAHAbQgIgKgGgLQgPgagGgcQgCgLgBgNQABgWACgXQgCAXgBAWIgBgLQABgRADgRQAFgYANgYIACAAIgBgBIACgDIABAEIgBAAIgBAAIABAAIABAAQA3gNCgg3QAVgHgBgQIgFgjQgCgSAJgPIhYA0QhsBBgjAZQBHhrDnhTIADgBQg5AUgRAdIABgBIABAAIABgBIAAAAIADgCQBKgtgGAAIAAAAQDAhAEighQDDgWB9AAQG1AAE+BnQglBdgCB+IFGAAQgBgtgFgpQBUBAAQBMQAEAQgBARIAAALQAAgWgDgWQADAWAAAWQgLCjlDB0QlNB4nYAAQnXAAlOh4gAlQh7IgDACQiMAuAABCQAABCCPAuQCQAvDKAAQDLAACPgvQCQguAAhCQAAhDiQgvQiPgujLAAQjKAAiQAugAxGgsIgTgmgARzALIAAAAgAtsjxIAAAAgAsikiQAGAAhKAtIgDACIAAAAIgBABIgBAAIgBABQARgdA5gUg");
	this.shape_17.setTransform(310.6,388.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(13,1,1).p("AgMgeIAGANIADAEIABAEIACAFIADAFAAAADIANAc");
	this.shape_18.setTransform(190.5,302.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(20,1,1).p("APqO3IATARAwDvdIf+evIAEAGIAEAEIABAB");
	this.shape_19.setTransform(87.175,202.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(7,1,1).p("ALwk/QAEgJAEgJQAwhrBEAAQBEAAAwBrQAdBCAMBVQAFApABAtIlGAAQADh+AkhdgARzAkQgCAZgEAUQgaCaiQBkQiOBhkpALQipAGlSgNQgxAAjHAGQihAEhhgDQkpgLiOhhQiBhZgpiHQgCgHgCgHQgDgJgCgKQgCgGgBgGARtguQADAWABAXAslkvIABAAQC/hAEighQDDgWB+AAQG0AAE+BnAtvj+QARgdA5gUAtvj+QgjAVg0AfQhtBAgiAaQBGhrDnhTQACgBABAAQAGAAhQAxgAxWhiQABABACgBQA6gPCUgyQAVgHAAgQQgEgXgCgNQgCgRAJgPAxahlIAAgBIAHgLIgHAFIgCACIgEADQgIAIALgCIACAAIABAAIABgBIADAAIADgBAxygDQABgWACgYQAEgeAHgeIACgJQACgKAGgVAxTBAIgHge");
	this.shape_20.setTransform(301.575,311.1333);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AiiCsQACh+AlhdIAHgSQAxhqBDAAQBEAAAwBqQAdBCALBVQAGApABAtg");
	this.shape_21.setTransform(389.2,283.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AsnEiQjbhPhLhkIgFgUIgDgMIADAMIAFAUIgIgMIAAgHIgEgGQgNgYgHgdQgCgKgBgOIADgsIgDAsIgBgKQAAgRAEgRQAFgZANgYIABAAIABAAIABgBIADAAIADgBIAAACIAAAAIgBAAIAAAAIAAAAIgCgBIAAAAIAAAAIACABIAAAAIAAAAIABAAIAAAAQA6gPCVgzQAUgHAAgQIgFgkQgDgRAJgPIhXA1QhsA/gjAbQBGhsDnhTIAEgBQg6AUgRAdQARgdA6gUIAAAAQC/hAEighQDDgWB/AAQGzAAE/BnQglBegDB9IFHAAQgCgtgFgpQBVBBAPBLQAEARAAAQIAAALQgBgWgDgWQADAWABAWQgLCjlDB0QlNB4nXAAQnYAAlPh4gAlRh7IgEACQiLAugBBCQAABBCQAvQCQAvDKAAQDKAACQgvQCQgvgBhBQABhDiQgvQiQgujKAAQjKAAiQAugAxSBNIgHgegAxIgrIgNgcgAxVhPIADAGIgDgGIgDgGgAtujxIADgCIABAAIAAAAIAEgDIACgBIAAAAQBGgrgFAAQAFAAhGArIAAAAIgCABIgEADIAAAAIgBAAIgDACIAAAAgARyALIAAAAgAxahUIgBgBIACgDIABADIgBABgAxYhVg");
	this.shape_22.setTransform(301.45,309.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(7,1,1).p("ALyk/QADgJAEgJQAxhrBDAAQBFAAAvBrQAeBCALBVQAGApABAtIlGAAQACh+AlhdgARvguQACAWABAXAxchjQAAgBABAAQADgGAEgGQgEADgDADQgCABgBABQgCACgBABQgIAIALgCQAAAAABAAQABgBABAAQAAAAABAAQA3gNCgg2QAUgHAAgQQgEgXgBgNQgCgRAIgPQARgdA6gUQAAAAAAAAQDAhAEhghQDEgWB+AAQG0AAE+BnAxzgBQAAgXADgXQADgfAHgdQABgFABgEQAEgQAEgPAxUhwQBHhrDnhTQACgBABAAQAGAAhRAxQgjAVg0AfQhsBAgjAagAR0AkQgCAZgDAUQgaCaiRBkQiNBhkpALQiqAGlSgNQgwAAjIAGQihAEhhgDQkpgLiNhhQiBhZgqiHQgCgHgCgHQgHgbgHgi");
	this.shape_23.setTransform(310.725,390.1833);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AslEiQjchPhLhlQgHgbgHghQAHAhAHAbQgIgKgGgLQgPgagGgcQgCgLgBgNQABgWACgXQgCAXgBAWIgBgLQABgRADgRQAFgYANgYIACAAIgBgBIACgDIABAEIgBAAIgBAAIABAAIABAAIATAmIgTgmQA3gNCgg3QAVgHgBgQIgFgjQgCgSAJgPIABgBIABAAIABgBIAAAAIADgCQBKgtgGAAIAAAAIAAAAQAGAAhKAtIgDACIAAAAIgBABIgBAAIgBABQARgdA5gUIAAAAQDAhAEighQDDgWB9AAQG1AAE+BnQglBdgCB+IFGAAQgBgtgFgpQBUBAAQBMQAEAQgBARIAAALQAAgWgDgWQADAWAAAWQgLCjlDB0QlNB4nYAAQnXAAlOh4gAlQh7IgDACQiMAuAABCQAABCCPAuQCQAvDKAAQDLAACPgvQCQguAAhCQAAhDiQgvQiPgujLAAQjKAAiQAugARzALIAAAAgAslkhIADgBQg5AUgRAdIhYA0QhsBBgjAZQBHhrDnhTgAtsjxIAAAAg");
	this.shape_24.setTransform(310.6,388.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},8).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},8).to({state:[{t:this.shape_16},{t:this.shape_8},{t:this.shape_15},{t:this.shape_6},{t:this.shape_5}]},8).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},8).to({state:[{t:this.shape_17},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},8).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},8).to({state:[{t:this.shape_24},{t:this.shape_8},{t:this.shape_23},{t:this.shape_6},{t:this.shape_5}]},8).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},8).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,93.4,534.2,388.6);


(lib.childdown2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_323();
	this.instance.setTransform(0.15,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childdown2, new cjs.Rectangle(0.2,0,121,218), null);


(lib.child6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_316();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.child6, new cjs.Rectangle(0,0,106,237), null);


(lib.child5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_315();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.child5, new cjs.Rectangle(0,0,128.5,235), null);


(lib.child4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_314();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.child4, new cjs.Rectangle(0,0,116,233), null);


(lib.child3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_313();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.child3, new cjs.Rectangle(0,0,103.5,231), null);


(lib.child2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_312();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.child2, new cjs.Rectangle(0,0,119.5,236), null);


(lib.child1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_311();
	this.instance.setTransform(0,-0.6,0.0865,0.0865);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.child1, new cjs.Rectangle(0,-0.6,64.7,113.69999999999999), null);


(lib.Path_9_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A7A8AB").s().p("AANisQhRhahkghQAGgDAlgFQADAIANAJIATAMQByBQAwBKQAcAtARA1QAPArAJA8QACAPAIAGQAGADAMAAQABBGgTAyQgUA3grAYQBaknili1g");
	this.shape_1.setTransform(16.9275,30.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_1, new cjs.Rectangle(0,0,33.9,60.8), null);


(lib.Path_8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABoCgQgDgEgEgcQgXiAhbhZQgvgtgqgTQgFgNAYAJQAYAKAhAZQBaBFAZBSQAVBHABAwQABAOgCAAIgCgCg");
	this.shape_1.setTransform(10.7019,16.105);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_1, new cjs.Rectangle(0,0,21.5,32.3), null);


(lib.Path_7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLALIgBgNQAMADAIgMQAFALAAACQgHAKgKAAIgHgBg");
	this.shape.setTransform(1.2773,1.2221);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_1, new cjs.Rectangle(0,0,2.6,2.5), null);


(lib.Path_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A7A8AB").s().p("AAghXQAAhFgPgnQAmBCgYCNQgXCKgvAuQBIiTgBiIg");
	this.shape_1.setTransform(4.0395,19.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0,0,8.1,39.3), null);


(lib.Path_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A7A8AB").s().p("AARgIQAKgNAGgKQgGAWgUASQgSATgVAEQAcgQAVgYg");
	this.shape_1.setTransform(3.275,3.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0,0,6.6,6.4), null);


(lib.Path_4_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABJgSQgQhIgmACQgjADgmA8QgUAegMAdQAMggATgfQAmhCAjgEQAogEATBHQASBBgPBDQAFg+gMg4g");
	this.shape_1.setTransform(8.7035,10.0366);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_2, new cjs.Rectangle(0,0,17.4,20.1), null);


(lib.Path_3_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAxAGQgRgNgQAEQgVAFg7AMIgUgyQAcgHArgCQAcgCATAVQAMAMAnA9QgagggKgJg");
	this.shape_1.setTransform(8.45,4.6449);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_5, new cjs.Rectangle(0,0,16.9,9.3), null);


(lib.Path_2_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2AtQAOg7AhAGQA1AJBWAEQgKgPgMgWQgWgsgCgdQBPAvASASIAHBOQgZAEgiAEQhEAIgsgCQgTABgXgBQgRAHgVAvQAAgfAHgeg");
	this.shape_1.setTransform(12.625,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0_1, new cjs.Rectangle(0,0,25.3,21.2), null);


(lib.Path_2_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A7A8AB").s().p("AgtBTQAQhUAJglQAGgbALgKQALgLASAGQAPAEAEAPQgFgFgHgDQgTgFgMAKQgJAKgHAcIgWBtg");
	this.shape_1.setTransform(4.55,8.3305);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_7, new cjs.Rectangle(0,0,9.1,16.7), null);


(lib.Path_1_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAnQgMgPAFgaQAHgaAJgPQAEgGAAABQABACgFAGQgHARgCARQgHAiATAFIAAAQQgHgCgFgIg");
	this.shape_1.setTransform(1.1661,4.8923);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2_1, new cjs.Rectangle(0.1,0,2.1999999999999997,9.8), null);


(lib.Path_1_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A7A8AB").s().p("AgpBNIAWhtQAGgcALgKQALgKASAFQAIADAFAFQAIAYgVAgIg7BZg");
	this.shape_1.setTransform(4.2237,7.7805);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1_1, new cjs.Rectangle(0,0,8.5,15.6), null);


(lib.Path_1_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A7A8AB").s().p("AgrD0QgigIgGhNQgHhNAYhkQAYhlAohCQAnhCAhAIQAIACAHAGQggAGgkBAQgjBAgWBcQgVBXADBIQACBHAYAXIgFABIgGgBg");
	this.shape_1.setTransform(8.5046,24.4568);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0_1, new cjs.Rectangle(0,0,17.1,49), null);


(lib.Path_1_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8AE00").s().p("AijgFIAsA5IAPgeQARgdAFgBQAEgBAbAJIAZAIIAFgiQAGghAEgEQAGgEAYACIAXhAQAahBAHgEIAMAFQAPAGAQAIQgBA3AvBYQhfgNgUgCQgpgDgHANQgFANgQByIgPBwg");
	this.shape_1.setTransform(16.375,19.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_6, new cjs.Rectangle(0,0,32.8,39.7), null);


(lib.Path_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7A8AB").s().p("AgpBNIAWhtQAGgcALgKQALgKASAFQAIADAFAFQAIAYgVAgIg7BZg");
	this.shape.setTransform(4.2237,7.7805);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,8.5,15.6), null);


(lib.Path_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8AE00").s().p("AB3EuQhDgRgbAEQgTAEgZAPIgWAPQgigIhQglIhJgiIhWA+QgNAIgygLQgggHgegKQCmilAJjQQAGh8guhvIAYgEQA0BkgEB3QgHC1iMC+IA0AKID4iOIBDCHQBWglCIgpQBzgiAegUQAsgdALhGQAJg8gNhXQgOhhgihSQCECwhSEPQhIBLgoAmQg0AwgXAJIhmgZg");
	this.shape_1.setTransform(43.9674,32.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,88,65.3), null);


(lib.Group_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4D5D6").s().p("AgdEpIhOhCIBpoCQATgGAkgJQAjA5AHBMQALBzg3CIQAaAMAfAIQgsBnhZBag");
	this.shape_1.setTransform(10.775,29.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_1, new cjs.Rectangle(0,0,21.6,59.8), null);


(lib.Group_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4D5D6").s().p("AAFBNIhNhDIAShXQA0A0BDAcIAIADQgdAlgjAjg");
	this.shape_1.setTransform(7.275,7.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_1, new cjs.Rectangle(0,0,14.6,15.7), null);


(lib.Path_4_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglADQAdgLASgCQASgCAPAIQAHAEAEADIgQAGQgQgNgeAEQgPACgMAFIgRAEQgEAAATgIg");
	this.shape_2.setTransform(4.9992,1.1594);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_3, new cjs.Rectangle(-0.3,0.1,10.700000000000001,2.1999999999999997), null);


(lib.Path_3_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A7A8AB").s().p("AgWAZQg+gCgcgLQgOgGgCgFQAAgBAAAAQAAAAgBAAQAAgBAAAAQABgBAAgBQAVARBSACQBKACAhgFQAggGAJgQQAFgJgCgGQAHALgGAMQgJARghAGQgWADgqAAIgrAAg");
	this.shape_2.setTransform(12.9685,2.5391);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_6, new cjs.Rectangle(0,0,26,5.1), null);


(lib.Path_2_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhHA1QAFgKALgQQAYgdAhgXIgxg4QAsAVAmAOIADADQAgAeACAMQABAFgFAAIhKBOg");
	this.shape_2.setTransform(7.2327,8.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0_2, new cjs.Rectangle(0,0,14.5,16.4), null);


(lib.Path_2_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A7A8AB").s().p("AhTAUQgCgJAYgLQAXgMAigHQAigHAaABQAaABACAKQAAACgBADQgKgFgWAAQgYAAgbAGQgdAHgWAIQgWAKgFAJQgEgDgBgDg");
	this.shape_2.setTransform(8.3734,2.6118);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_8, new cjs.Rectangle(0,0,16.8,5.2), null);


(lib.Path_1_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAZQgSgCgFgFQgGgFAFgEQAFgEAVgJQAWgLAYgGQAYgHgSALIg3AVQgFACACAFQACAFAKAGQAHADgIAAIgHAAg");
	this.shape_2.setTransform(4.4917,2.448);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2_2, new cjs.Rectangle(0.1,0,8.8,5), null);


(lib.Path_1_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAjIAHgJQgdgggSggQgJgQgDgKIAjACQAnA7AnBCIgCACQgjgQgYgOg");
	this.shape_2.setTransform(5.725,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1_2, new cjs.Rectangle(0,0,11.5,13), null);


(lib.Path_1_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A7A8AB").s().p("AhQASQAFgJAWgJQAWgJAdgHQAbgGAYAAQAWAAAKAFQgFAJgWAJQgWAJgdAHQgbAGgXAAIgEAAQgUAAgJgFg");
	this.shape_2.setTransform(8.075,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0_2, new cjs.Rectangle(0,0,16.2,4.6), null);


(lib.Path_1_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A7A8AB").s().p("AlgA4QgEggBmggQBlghCSgQQCRgQBqALQBqALAEAfQAAAHgDAFQgYgZhjgIQhmgHiBAOQiEAOhjAdQhgAdgQAdQgFgFgBgGg");
	this.shape_2.setTransform(35.3442,6.7509);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_7, new cjs.Rectangle(0,0,70.7,13.5), null);


(lib.Path_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiDAyQgqgdA4gkQBBgsCngbQg7ANg7ATQh3AngFAgQgCAcA6APQBEARCEgDQAiABgWAFQgVAFgtABIgSABQh2AAhGglg");
	this.shape_1.setTransform(14.858,8.6606);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0_2, new cjs.Rectangle(-0.1,0,30,17.3), null);


(lib.Path_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A7A8AB").s().p("AhQASQAFgJAWgJQAWgJAdgHQAbgGAYAAQAWAAAKAFQgFAJgWAJQgWAJgdAHQgbAGgXAAIgEAAQgUAAgJgFg");
	this.shape_2.setTransform(8.075,2.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,16.2,4.6), null);


(lib.Group_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7A8AB").s().p("Aj8BRQgzgJgYgMQFEAADEhKQBjgmAigmIACAkQgaAbg0AZQhPAkh8AWQgxAGgPAIQgNAHARAHQg+AHg3AAQhCAAg4gKg");
	this.shape.setTransform(32.8,9.0659);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,65.6,18.2), null);


(lib.Group_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8AE00").s().p("AkLEoQg8gRgOgQQgKgMAJgXQAIgTgEgKQgDgFgYgeIgCgEQA0AlCwAjQBSAIApgQQAYgLAXgdQgngBglgNQgZgJghgTQBYAaAlgDQA3gEBZg2QB2hKAZgSQAxghgHgOQgGgNg6gCQgQgBhsAAIBDgGQBDgKgBgRQgBgRALgSIAagvQAQgfAAgOQABgLgMggQgsAdhTAbQheAfhlAPQkJAkivhfIgJgYIMLhLQANA8ANAgQAKAYgCAIQgCAIgVASQgSARAJAcQAHAVAiA1QAZAmgOAaQgHAOgMAGIAdAPQAcAUgCAaQgDAfggAeQggAehDAiQhiAyjNASQhVAIg+AAQhNAAgpgMg");
	this.shape.setTransform(43.4817,30.7803);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5_1, new cjs.Rectangle(0,0,87,61.6), null);


(lib.Group_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A7A8AB").s().p("AgYAtQhRgDgWgRQAFgPBGgaQA9gXAdgEQAXgDAPAGQAMAFAVATQAMAKAGAJQACAHgEAIQgJASghAFQgXAEgsAAIgoAAgAAZgVIhqAhQgCABAEAGQAEAFAHAEQAOAHBugNQAdgDAFgJQAGgJgVgPQgNgKgIgBIgFgBQgJAAgPAFg");
	this.shape_2.setTransform(12.7808,4.5368);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_2, new cjs.Rectangle(0,0,25.6,9.1), null);


(lib.Group_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_93();
	this.instance.setTransform(0,0,0.1163,0.1163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0,74.2,37.1), null);


(lib.can = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDC043").s().p("AgfgCQgDgCgFAAIAAgKQA1AFAkgNQAFgCAFAAQAAAFgCACQhBAmg0AEQAqgNgOgOg");
	this.shape.setTransform(1503,1849.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6C99A").s().p("AgngEQAigBAjABIAKAAIAAAEQgoAFgnAAIAAgJg");
	this.shape_1.setTransform(1528,1844.5625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5C795").s().p("AgsgGQAtACArADIABAEIgKABQgPADgNAAQgfAAgUgNg");
	this.shape_2.setTransform(1567.5,1844.7582);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3BC84").s().p("AipgFQAyAAAxAFIABAEIgKAAQgRACgOAAQgkAAgXgLgABQAEIAAgJIBQAAIAKAAIAAAFQgkAEglAAIgRAAg");
	this.shape_3.setTransform(626,1894.7353);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#919597").s().p("AiXSUQjijRjujHQnmmXnjmbIAAgKQCSgcB9gzQAEgBAFAAQAAAFgDADIAAAAQKbi8GdntQC1jXCXjyQIlFaJwELQCjBHCQBWQlHG2lkGYQmfHgnEG7IAAAKQhvgihLhFg");
	this.shape_4.setTransform(356.5,1709.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D2DBE0").s().p("AgCgZIgBgKIAHBHIgGg9g");
	this.shape_5.setTransform(793.3689,909.6922);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D4DBE1").s().p("AAABAQgGhAABhAQAQAJgGAfIgBAKQgBAhABAkIAAAKIgEgBg");
	this.shape_6.setTransform(794.6359,892.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#646569").s().p("AsMMBQADgDgBgFQI7lFGynLQE8lODumbQgjDShxC1QgBAEAAAFQiYDyi1DWQmdHtqaC8g");
	this.shape_7.setTransform(303.85,1619);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BDBEC0").s().p("AAABFQgFhFAAhFQAQA0gHBNIAAAKIgEgBg");
	this.shape_8.setTransform(242.625,1466.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2E3E5").s().p("AkrDJIABgKQAGhOgRg0IAAgKQABhJgLhCIA8AJIAKABQAvAQBIgLQABAAAAgFIAKgBQDegzBhiyQAFAAABACQBPCeAjDHQiODVlFArQgWACgTAAQh1AAAGhsg");
	this.shape_9.setTransform(273,1453.0429);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D8D8DA").s().p("AAACHQgEiGAAiHIAJAAIAAEDIAAAKg");
	this.shape_10.setTransform(0.5,1325.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C8C8CA").s().p("AgFA8IAAiBIAJAAIAAAKQAHBMgQA1IAAgKg");
	this.shape_11.setTransform(1.6125,1281.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B6B7B9").s().p("AEJHvIAAmGQARC8gMDUIgFAAIAAgKgAkNmKQgFg2AAg4IAKAAIAABkIAAAKIgFAAg");
	this.shape_12.setTransform(195.5104,1425.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C9CACC").s().p("AgFAeIAAhFIAJAAIAAAKQAHAugQAXIAAgKg");
	this.shape_13.setTransform(169.6125,1364.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2E3E4").s().p("AkXE4IAAgKIAAhjIAAgKIAAg9QASgWgIgwIAAgKIAAgKIAAhFQCfrCF/nhQACgCAFgBQh+Eih7FVQiiHDA6IsQAQCbBWBhQBVBfCIAtIAAGFIAAAKIAAAGQn2jVgbq1g");
	this.shape_14.setTransform(197,1354.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3C3D41").s().p("AqqcEQiWhEi1AyIAAgKIAAgoQCVrqCLrqQB8qYCopdQB7m8FNjgQDQiLE6A/QEEA0ChCaQA6CEgMDGQgiIZjgFdQlfIilqITQlqIWlgIeQgFAAgEgCg");
	this.shape_15.setTransform(414.41,860.295);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5A5B5F").s().p("Axae1QCVrrCRrwQCQrrCdreQB6pBF/k2QB5hkDQABQKCAECeH3QigibkEg0Qk7g/jQCMQlNDfh6G8QioJdh9KZQiLLqiVLqIAAAoIAAAKQhZAphGA7QgkAfgYAAQgUAAgLgVg");
	this.shape_16.setTransform(399.5,851.8039);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#747579").s().p("EgPZBLjQErpVECp6QEEp9DZqiQDcqmClrSQCoreBjsZQBjsegNuGQgMtsiEr8QhPnMiCmaQFGI5B7MMQB5L9gVOUQgUNrhsMIQhvMZiqLNQitLajnKUQjoKakxJPQj8HnluFsg");
	this.shape_17.setTransform(529.6297,983.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E1E1E3").s().p("AgMAFQA0g7g0BLg");
	this.shape_18.setTransform(171.3313,674.5765);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#88898D").s().p("EgUVBewQlNgbipjFQkOk6iFnAQiHnGg3oNQg4oWAIpUIACkiQAeoqA6oOQA7oQBVntQBXn5BwnRQByneCGnJQCEm/CWm6QCTmvCnmlQCmmgC+mGQDCmMDflpQDglqEElFQEDlFFTj5QDQiaFMgRQElgPCgCIQE7EMCZGrQCbG0BFIAQBGIGADJFQADJLguIWQguIghNH6QhNH+hjHhQhlHoh5HNQh7HRiNG7QiOG8iiGpQihGmi5GVQi1GPjSF8QjOF2jyFaQjvFWkjEmQkiEnnQBtQg0AMg3AAQgTAAgUgCgEgHYBCPIAAAKQAABGAFBGIAFAAQgHB/CfgVQFGgqCNjWQgjjHhPifQgBgCgFAAQhgCzjfAyIgKABIgKAAIhuAAIgKgBIg8gJQALBCgBBKgEgS3A2/IAFAAQAcK1H2DUIAAgFIAFAAQANjUgSi8QiIgshVhfQhXhhgQibQg5otCinDQB8lVB9kiQgFAAgCADQmAHhifLCIAABGIAAAKIgKAAIAABGIAAAKIAAA8IAAAKIgKAAQAAA4AFA2gEAQ/g6GQl+E3h7JAQidLeiQLsQiRLxiULpQAYAuBCg3QBGg8BZgpQC2gxCVBDQAEACAFAAQFhodFroWQFqoTFfojQDfldAioZQANjGg7iEQidn3qDgDIgGAAQjLAAh5Big");
	this.shape_19.setTransform(289.2842,1034.1805);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E4E4E6").s().p("AdzLTQhBs7i/q3QiqpslZmwQjJj7mDg4QjUgei3BAQnqCrlMFTQm6HElYImQlBIDkcIYIAAgQQEXpnFHo2QFIo5GgneQFrmhJFi7QCKgsCwAPQEwAYC0CaQHkGcDeKnQDaKfBJM1QBONshsM4QgbDVghDPQAjtfhDtZg");
	this.shape_20.setTransform(380.1483,623.7953);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D3DBE0").s().p("AAGAwQgQgFAGhaIAJAAQgBAiABAjIAAAKIABAQg");
	this.shape_21.setTransform(794.45,794.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D3DADF").s().p("AgEAlIgBhZQAYA7gXAug");
	this.shape_22.setTransform(793.6378,778.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FABE7A").s().p("Ag2AFIAAgJIBjAAIAKAAIgBAEQgxAFgyAAIgJAAg");
	this.shape_23.setTransform(910.5,298.6021);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F9AA51").s().p("AgsAFIAAgJIBPAAIAKAAIgBAEQglAFgmAAIgNAAg");
	this.shape_24.setTransform(937.5,297.6071);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FBCB93").s().p("AAeAFQgjgBgiABIAAgJQAigBAjABIAKAAIAAAJIgKAAg");
	this.shape_25.setTransform(929,297.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FAC485").s().p("AgngEQAigBAjABIAKAAIgBAEQgnAFgnAAIAAgJg");
	this.shape_26.setTransform(894,299.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B9BABD").s().p("EgmmBrTQpcikkbn3QlAo5iTrsQiTrsgDt8IAAgKIAAkEIAAgKIAAjmQARg0gHhOIAAgKIAAgKIAAi+QA8tDB/sGQB9r7C3rLQC2rGDlqdQDkqYEXpkQEappFWosQFTooGfnhQGfngJVknQFIiiGiA/QDZAhDEhFQCsg8C4gqQLYimLyiGQBGgMA7gRQELJ0DJK8QDHKyCHL6QCGL3A3NJQAICDABCLIgKAAQgHBbARAFQARG9gMHVIgFAAIABgKQAGgfgRgJQgBBBAGBBIAFAAQgZK8heJ1Qh0MNi/LEQi9K9j5KJQj3KFkuJOQkwJSlcIlQlbIimEH7QiQhWikhGQpvkMoklaQAAgFACgDQBwi2AkjSQjvGbk8FOQmzHMo6FFQgFAAgFACQh8AyiSAcIAAAKQgagUgbAFQhfAThcAAQh0AAhugegEACIhbtQlLARjRCaQlSD5kEFFQkEFFjgFqQjgFpjBGMQi+GGimGgQioGliTGvQiWG6iDG/QiHHJhyHeQhvHRhXH5QhWHtg6IQQg6IOgeIqIgDEiQgIJUA4IWQA3INCHHGQCFHAEPE6QCoDFFNAbQBLAGBHgQQHQhtEjknQEjkmDwlWQDxlaDPl2QDSl8C1mPQC3mVChmmQCjmpCNm8QCOm7B7nRQB5nNBlnpQBjngBNn+QBMn6AvogQAuoWgDpLQgDpFhGoGQhGoAibm0QiYmrk8kMQiPh7j8AAIg5ACgEAeihC+QCEL8AMNsQANOGhjMeQhjMaioLdQilLSjcKnQjaKikEJ8QkCJ7krJUIAAAKQFulsD8nnQExpPDpqaQDnqUCtrZQCqrNBvsZQBssJAUtrQAVuTh5r+Qh7sLlGo6QCCGbBPHLgEA9pgQ0QAOCBgOiLIAAAKgEAFshe0QGDA4DJD7QFZGwCqJsQC/K3BBM8QBDNZgjNfQAhjPAbjVQBss4hOtsQhJs2jaqfQjeqnnkmcQi0iakwgYQiwgPiKAsQpFC7lrGhQmgHelII5QlHI2kXJoIAAAQQEcoZFBoDQFYomG6nEQFMlTHrirQB7gsCKAAQBBAABEAKgEA9qgkWIAAAQQAYgugZg8IABBagEgjsg1EIAAAQQAegqgEAAQgDAAgXAagEgXgBDPIBuAAIAKAAQAAAFgBAAQgeAFgZAAQgkAAgcgKg");
	this.shape_27.setTransform(398.5148,1014.7736);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9BB73").s().p("AhAgFQBAgBBBAGIAAAEIgKAAQgUACgSAAQgvAAgigLg");
	this.shape_28.setTransform(977.5,297.7128);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FBC07C").s().p("AgQAbQgDgCAAgFQATgUAOgbQABgCAFAAQAAAFgBAFQgJAcgTAVQgFAAgCgDg");
	this.shape_29.setTransform(1641,679.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FABC74").s().p("AgWAUQgCgDAAgFIAxgiIAAAGQAAAEgCADIglAfQgFAAgDgCg");
	this.shape_30.setTransform(1687.5,602.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FABE76").s().p("AgYAHQAWgQAbgIIAAAGQAAAEgCABQgXAMgYALIAAgKg");
	this.shape_31.setTransform(1709.5,583.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FBC585").s().p("AhTAAIgBgEICfAAIAKAAQgqAJgyAAQgkAAgogFg");
	this.shape_32.setTransform(1748.5,572.6104);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FABD76").s().p("Ag0AtIAAgKQA0gmAogxQACgCAFAAIAGAAQgtA8g8AxIAAgKg");
	this.shape_33.setTransform(1697.25,448.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FBC486").s().p("ACPLuIAAgKQCcADiIAGIgKABIgKAAgAjgrsIgCgBIAGAAIBoAAIAKAAIAUAAIAKAAIAAAFQglAFggAAQgrAAgkgJg");
	this.shape_34.setTransform(1765.6671,500.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FBC587").s().p("A3aIuIgBgKIAAgKIAIBAIgHgsgAWCpZQCPgBhTAMIgWABQgaAAgMgMg");
	this.shape_35.setTransform(1779.0357,634.29);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EFAA66").s().p("Ag7gEIBtAAIAKAAQAAAEgBAAQgeAFgZAAQgjAAgcgJg");
	this.shape_36.setTransform(1681,353.5983);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC3D00").s().p("EghOAbbQmKnzmOnzQirjVigjgQHnGYGzHMQGzHLFRIsQCODsBUEjQmKnSmTn9gAzhCCIAAgKQAmosDImKQACgEAAgEQgGNVgqNhQgVGzgfGpQiMrfAAtrgEAZIgk+QsQh7reihQgTgEgLgPQJihuJ2BcQLWBrJ9C+QEiBXEpBKQtugRr8h4g");
	this.shape_37.setTransform(1672,629.1248);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EFAF6E").s().p("Ag7gEIBtAAIAKAAIgBAEQg7AEg7ABIAAgJg");
	this.shape_38.setTransform(1648,353.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DF5A00").s().p("EBBKB6FQrHi9rNi0QrLizsvhQIAAgFQgsgEgugBIgKAAIksAAIgKAAQgkgBgiABIAAAKIgKABQhKAFhCAOQgFAAgEACQglANg2gFIAAAKQjSA2i2BRQpsEVn7GEQnYiAm0imQqGj3pwkQQpukPpnkeQpekbphkfQlIDZk8DkIwTLsQiDBeh3BrQiwCekpAmIgKAAIhQAAIAAAKIgKAAIiMAAIAAgFQgxgEgzgBQpLgwn5h8QrTiyqjjcIAAgKQHEm7GfngQFkmZFHm2QGEn7FboiQFcolEwpSQEupPD4qEQD4qJC+q9QC/rEB0sMQBdp2AZq8IAAgKQgBgkABgiIAFAAQANnVgRm9IAAAAIgBgQIAAgKQgBgkABgiQAAiLgJiDQg2tJiHr3QiGr6jHqzQjKq7kLp0IAAgKQERgqEVglIAKgBQAKAAAEAEQCYDdB3ECQEWJhDQK3QDMKrB5MDQB6MIANNzQAHG/gcGUQg7NMiTLpQiULvjSKnQjUKvkGJ/QkCJ3kmJaQkmJYlKI0QlLI1lmIbQllIZl8IDQKBCAKJB5IAKABIRvqMQI7lII1lJQI1lLI6lGIRwqMQI5lHI1lMQDhiEDvh5QEzJMEoJYIJOSsQDtHhD6HRQJ1jnKVj3QKLj1KcjlQKZjlKkjZQKmjaKrjSIVgmkQKrjRKLjyQKNjzIVlsQITlqE2pIQE3pKB2sPQB0sEgTuWQgTtxhjsWQhkshicriQibrkjLq6QjIqyj5qJQhhj+hhkDQGFH7E/I+QFBJAEAJ7QECKACvLWQCtLMBLMwQBMNDgoN+QgmNQh4MFQh5MJiyLJQiIIkifIJQmWGxmcGtQm3HIm/G/Qm/HAnHG4QnHG4neGjQncGhpdEjQrBh4qHisg");
	this.shape_39.setTransform(1450.776,1126.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FBC485").s().p("AhjJsIngAAIAAgKQD0AAD2AFIAAAFIgKAAgAw3JsIhQAAIAAgKQAuABArAEIABAFIgKAAgAsVJjIgKgBIgKAAIAAgKICCAAIAKAAQgjAMgvAAQgSAAgUgBgAKeI6QCUAFiUAAgAQ4IcQAoAAAnAFIABAFIgKAAIgKABIgVABQgbAAgMgMgAKKprIA8AAIAKAAIAUAAIAKAAQAAAFgBAAQgZAFgWAAQgeAAgWgKg");
	this.shape_40.setTransform(1914,514.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FBC487").s().p("AgngEIAUAAIAKAAIAnAAIAKAAQAAAEgBAAQgVAFgRAAQgXAAgRgJg");
	this.shape_41.setTransform(2076,458.6433);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FBC584").s().p("AhKgEIBPAAIAKAAIAyAAIAKAAIAAAEQglAFggAAQgsAAgkgJg");
	this.shape_42.setTransform(2092.5,459.6104);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FBC586").s().p("AovI+QAyAAAxAFIABAFIgKAAIgUAAIgKAAIgVACQgbAAgMgMgAHgpJIA8AAIAKAAIAKAAQAAAFgBAAQgVAGgRAAQgYAAgRgLg");
	this.shape_43.setTransform(2004,515.705);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FAC586").s().p("EglpAFFIgUAAIAAgKQCAABhYAIIgKABIgKAAgEAl0gFEIAKAAIAAAKIAAAKIgBAKQgDAmgCAAQgDAAgBhEg");
	this.shape_44.setTransform(2008,541.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FBC484").s().p("AgEglIAJAAIAAAKIAAAKIgBAKQgDAtgBAAQgDAAgBhLg");
	this.shape_45.setTransform(2237.5,379.8846);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FABD77").s().p("AgngfQAoAWAkAeQADACAAAEIAAAGQgygTgdgtg");
	this.shape_46.setTransform(2222,333.35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FBBE79").s().p("AgTgSQAYAEAMAQQADAEAAAFQAAAFgCABQgGACgFAAQgSAAgIglg");
	this.shape_47.setTransform(2211,325.0281);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FABE78").s().p("EgsdAdgQgEgIAAgKQAMgSASgHIAAAFIgBAKQgEAUgPAKQgFAAgBgCgEArmgdhIAKAAQAWARAZAQQADACAAAFIAAAFQgogKgUgjg");
	this.shape_48.setTransform(1919,504.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FABC76").s().p("AAWAcQgdgZgWggQAqANAQAlQABAEAAAFQgFAAgDgCg");
	this.shape_49.setTransform(2232,342.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FABF7A").s().p("AgdgVIAKAAQAVARAZAPQADABAAAFIAAAGQgkgNgXgfg");
	this.shape_50.setTransform(2187,307.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FABF7C").s().p("AogHCQgFAAgBgCQgOgcgKgeQAcAWAHAmgAIDnBIAKAAQAWASAZAPQADACAAAFIAAAFQglgMgXghg");
	this.shape_51.setTransform(2122.5,343.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FABF7B").s().p("A/PaTQgDgDAAgFQASgcAXgRIAAAFQgBAFgCAEIgcApQgFAAgCgCgAfOwUQgGAAgBgCQgSgmgQgoQAhAgAMAwgAaz5fQgRgOgBgdIAAgKQAdATgEAoIgEABQAAgFgDgCg");
	this.shape_52.setTransform(1859.25,475.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FBC17F").s().p("AABAYQgOgHAHgaIAAgKIAAgKQATAUgFAnIgFAAQAAgFgCgBg");
	this.shape_53.setTransform(2005.6886,241.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FABE79").s().p("AgdgRIAKAAQATAOAdAKQABAAAAAFIAAAFQgngEgUgeg");
	this.shape_54.setTransform(2078,235.85);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FAB76B").s().p("AgBAUQgFAAAAgBQgFgTAAgTQAKAAAHAEQACABAAAFQAAAFACAEQAFAUgOAAIgCAAg");
	this.shape_55.setTransform(1995.1516,187.1082);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F38000").s().p("EiFuCK+QqJh5qBiAQF8oDFloZQFmobFLo1QFKo0EmpYQEmpaECp3QEGp/DUqvQDSqoCUrvQCTrpA7tLQAcmUgHm/QgNtzh6sIQh5sDjMqrQjQq3kWphQh3kCiYjdQgEgEgKAAIAAgKQKbhiLJg0IAKAAQAoAAAogFIAAgFIA8AAIAKAAQA4AAA2gFIAAgFIBQAAIAKAAQAigBAkABIAKAAQAuABAsgGIAAgFIEYAAIAKAAQAvARBJgGIAKgBQMjAhF5HLQBkB7BtB1QGvHPGGH5QGHH5GCH8QEmGDEhGGQEppWFIoxQB0jICpiNQF4AoFXB4QFWB2FSB6QBusRChrfQAhiSBMhoQB+g7C4gBIAKAAQA8gBA8gEIAAgFIDIAAIAKAAQAvARBIgMQABAAAAgFIAAgKIAAgUQDyqODzqIQD1qNEMpsQCVlYDIkbQAOgVAdgHQKXDoJLE0QJME0IaFmQIYFlHrGVQHqGVG4HGQGxG/F2H6QBhEDBhD+QD5KJDIKyQDLK6CbLkQCcLiBkMhQBjMVATNxQATOXh0MEQh2MPk3JKQk2JIoTFqQoVFsqNDzQqLDyqrDRI1gGkQqrDSqmDaQqkDZqZDlQqcDlqLD1QqUD3p2DnQj6nRjtnhIpOysQkopYkzpMQjvB5jhCEQo1FMo5FHIxwKMQo6FGo1FLQo1FJo7FIIxvKMIgKgBgEgRnghFQGOHzGLHzQGRH9GKHSQhUkjiOjsQlPosm0nLQmznLnnmZQChDgCqDVgEAMLg55QjIGKgmItIAAAKQAANrCMLfQAfmoAVm0QArthAFtWQAAAFgCADgEAVHgguIAAAKQAohBAdhLQABgFAAgFQAQgKADgUIABgKQAZgVAFgnIAAgKQAUgVAJgdQABgFAAgFICok3QACgEAAgFIAcgpQACgEAAgFQBpivB7idQACgDAAgFIAmghQACgCAAgFQBJhXBfhDQACgBAAgFQAYgLAYgNQACgBAAgFQDFhnFDAWIAKABIAUAAIAKAAQAqARBEgGIAKgBIAKAAQBEARBcgGIAKgBIBQAAIAKAAQB/gDB7gGIAKgBIAKAAQBdARB1gGIAKgBIHgAAIAKAAQD8gDD4gMIAAgFIAUAAIAKAAQFngQFfgdIAAgFIAKAAQM/hAMLh0QE5gvE9grQgJicgQiaIgFAAIAAgKIAAgKIAAgKQg5qShJqCIAAgKIAAgKIAAgKQgJicgViQQAAgFgBgEQgQgmgrgNQAAgFgCgDQgMgLgQgLQAAgFgCgCQglgegpgXQAAgFgCgDQgRgXgfgJQAAgFgCgDQgMgSgagEQAAgFgCgCQgUgVgcgMQAAgFgCgCQgZgQgXgRQAAgFgCgBIhYg2QAAgFgCgCQgZgQgXgRQAAgFgCgBQgYgPgYgJQAAgFgCgCQgZgPgXgSQAAgFgCgCQnOk1nckmQAAgFgBgBQgdgKgUgOQAAgFgCgBQlqjblujXQAAgFgBgBQgdgLgUgNQAAgFgCgBQgIgEgKAAQAAgFgCgBQgIgEgKAAQAAAUAFATQAAABAFAAQAbERBEDrQAAACAFAAQgHAbAPAHQACABAAAFQBhFOCAEwQAAACAFAAQABAdARAOQACACAAAFQBvD/B7DzQABACAFAAQAQAoASAmQABACAFAAQAVA7AhAxQABACAFAAQAKAeAOAcQABACAFAAQDOF2CuFQIgUAAIgoAAIgKAAIgyAAIAAgFQhGgFhGAAIgKAAIgoAAIAAgFQhKgEhMgBIgKAAIAAgFQljgTlZgaIgKAAIgUAAQlVgnlmggQsthIsAh/IgKAAIgUAAIAAgFQg7AAg3AFIgGAAIACABQkIAZiUCQIAAAKQgFAAgCACQgpAxg0AnIAAAKIAAAKQjqEeh4GMQjQKyhEM8IAACCIAAAKIAAAKIgKAAIAAC0gEgpOg5GQjwmZj1mQQlWoumindQmpnluiBDQtFA8rTCsQAAAFACAEQDwJxDuJyQD4g5EEg1QLhiXLbiwQB/gfCvAYQFnAuDTDSQHBG+F/IAIAAAAgEAc7hWoQALAPATAEQLfChMPB8QL8B3NuARQkohKkjhWQp8i/rXhqQkggrkbAAQlRAAlMA8g");
	this.shape_56.setTransform(1492.8653,916.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F9BD77").s().p("AgdgQIAKAAQATANAdAKQABABAAAEIAAAGQgngFgUgdg");
	this.shape_57.setTransform(2000,188.85);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FBC27F").s().p("EAOxAooIAAi0IAKAAIABAKQAPBhgQh1IAAgKIAAiCQBDs8DRqyQB3mMDrkeQA9gxAsg8IgFAAIAAgKQCUiQEHgZQA+AQBXgMIAAgFQMAB/MtBIQFlAfFWAnIgKAAIg8AAQAmASA9gNQABAAAAgFQFYAaFjATIABAFIgKAAIg8AAQAdASAygNQABAAAAgFQBMABBJAEIABAFIgKAAIgUAAQAdASAygNQABAAAAgFQBGAABFAFIABAFIgKAAIhQAAQA+ARBYgMIAAgFIAoAAIAUAAQivlPjNl2IAFAAQgHgmgcgWQgFAAgCgCQgggxgVg7IAFAAQgMgwghggQgFAAgBgCQh8jzhuj/IAFgBQAEgogdgTIAAAKQgFAAgBgCQh/kwhhlOIAFAAQAFgogUgUIAAAKIAAAKQgFAAAAgCQhEjrgbkRQASACgHgXQgBgEAAgFQAKAAAIAEQACABAAAFIgKAAQAUAfAoAEIAAgFQFuDXFqDbQACABAAAFIgKAAQAUAfAoAEIAAgFQHbEmHPE1QACACAAAFIgKAAQAXAhAlAMIAAgFQAYAJAYAPQACABAAAFIgKAAQAXAgAlANIAAgFIBYA2QACABAAAFIgKAAQAUAjAoAKIAAgFQAbAMAVAVQACACAAAFQAKAxAcgNQACgBAAgFQAfAJARAXQACADAAAFQAdAvAzASIAAgFQAQALAMALQACADAAAFQAWAhAeAZQADACAFAAQAVCQAICcIABAKIgKAAQACCHAHhpIABgKQBJKCA4KRIABAKIgKAAQABB2AIhYIABgKIAFAAQAQCaAJCcQk9Ark5AvQsLB0s/BAIgBgFQgngFgoAAQAQAQAsgFIAKgBIAAAFQlfAdlnAQIgBgFQgxgEgygBQARARArgHIAKAAIAAAFQj5ALj7AEIAAgFQj2gFj0AAIAAAKIgKABQh2AGhcgRIAKABQBIAGAwgRIgKAAIiCAAIAAAKIgKABQh7AGh/ADIgBgFQgrgEgugBIAAAKIgKABQhcAGhEgRIAKgBQCIgGicgDIAAAKIgKABQhEAGgqgRIAKgBQBYgIiAgBIAAAKIgKgBQlDgWjFBnIAAgFQgcAIgWARIAAAKQAAAFgCABQhfBDhJBXIAAgFIgyAjQAAAFADADQACACAFAAQAAAFgCADQh7CdhpCvIAAgFQgWARgSAcQAAAFACADQADACAFAAQAAAFgCAEIioE3QgFAAgBACQgOAbgUAVQAAAFADACQACADAFAAIAAAKQgGAngYAVIAAgFQgSAHgMASQAAAKAEAIQABACAFAAQAAAFgCAFQgcBLgoBBIAAgKgEA8ZAT2QAQAQAsgFQBKgLhpAAIgdAAgEAgSATnQBhAMBIgRIgKAAIigAAIABAFgEBF7ATdQCUAAiUgFgEg8kABSQjTjRlnguQivgYh/AfQrbCvrhCXQkEA1j4A5QjupxjxpxQgBgEAAgFQLTisNFg8QOihDGpHlQGiHdFVItQD1GQDxGZQmAoAnAm+gEAg1gDbQA3gFA7AAIAAAFIgKAAIg0AAIg0AAg");
	this.shape_58.setTransform(1533.5,447.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6E6F73").s().p("EAm1BlMQCxrJB5sJQB4sFAmtRQApt+hNtDQhKswitrMQivrVkCqAQkAp7lBpAQlAo+mEn7Ql2n6mxm/Qm3nGnqmVQnrmVoYllQoblmpLk0QpLk0qXjoIAAgKQHWiRIwg3IAKAAQBPAkAsBNQBRCLCIBXQIiFeILF0QIKF1HtGRQHuGSHGG4QHHG4GcHhQGeHjFaIlQFaIlEYJlQEYJpDUKpQDVKsCNLqQB1JnB7JjQBaG+Iug/IAAH+IAAAKIAABuIAAAKIgKAAQgBA7ABA9IAAAKQgMGOgwFiQhtMajxKOQjxKOmGH6QmFH5o6FFQCfoJCIokg");
	this.shape_59.setTransform(2246.0125,760.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#BABBBD").s().p("AgFA3QgBg8ABg7IAJAAIABAKQAGBHgQAwIAAgKg");
	this.shape_60.setTransform(2665.58,1089.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CCCCCE").s().p("AAABPQgFhPAAhPQAQA+gHBXIAAAKIgEgBg");
	this.shape_61.setTransform(2666.625,1007.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CFCFD1").s().p("AAAAnQgFgnAAgnQAQAWgHAvIAAAKIgEgBg");
	this.shape_62.setTransform(2665.625,976.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E3E4E6").s().p("EAmzA5rQh6r7jArKQi7q5kSpxQkPpslXorQlToomSnwQmOntnHm3QnIm4n/l/QoAmApIk4QgrgWgwgQQgNg1gHg5IAAgKQCDh1DSBUQKBEAINFzQINFyHYGnQHXGmGgHeQGgHgFYIkQFbIoDhKYQDjKgClLnQChLSBENIQAUD4hBDBQhthzghjLg");
	this.shape_63.setTransform(2359.5089,460.1741);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A7A8AC").s().p("EA5aBThIAAn+QouA/ham9Qh7pjh1pnQiNrrjVqsQjUqqkYppQkYpklaolQlaokmenjQmcninGm4QnHm4numRQntmRoKl1QoLl1oileQiIhXhRiLQgshNhPgjIAAgKQF4gxFigDQAoAAAwAQQKjDZJfEfQJhEgIiFZQIlFdHjGcQHkGbGhHdQGiHeFJI4QFII1DZKmQDZKlCxLRQCvLNB7MGQB7MBAxNKQAEBAABBBQAAApAFAnIAFAAIAAC0IAAAKQAABQAFBQIAFABIAAAJQAHEggREGIAAgKgEggRhJWIAAALQAHA5ANA1QAwAPArAXQJIE3IAGAQH/GAHHG3QHHG3GPHtQGSHwFTIoQFXItEPJqQESJyC7K4QDALLB6L6QAhDLBtB0QBBjCgUj4QhEtIihrSQilrnjjqfQjhqZlbooQlYokmgnfQmgnfnYmmQnXmnoNlyQoNlzqBkAQhXgjhKAAQhoAAhMBEg");
	this.shape_64.setTransform(2298.6125,535.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.can, new cjs.Rectangle(0,0,2667.3,1937.1), null);


(lib.tree2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#649632").s().p("AgogdQChA2iNAEIgCAAIgEABQgbAAANg7g");
	this.shape.setTransform(269.0421,137.4093);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#946943").s().p("ADvTcQhEgZhXAZIhLAAQgshbgrheQAAgKgCgBQgdgGAMgqQAAgKgEgHQgdg5gag+QAAgKgDgIQgGgLgKgKQAAgKgCgJQgdh0gvhjQAAgKgDgIQhFjKgtjkQAAgKgDgJQgahPgKhgIgBgTQgaipgYisIgDgVIgEgcIAAgUIAAiIIAAgUIAAk3IAAgUIAAgTQA+g6AMgiQADgLAUiXQAugYgKB/QAJgSAOgFQAACHAJCHQAAABAKAAQARHCBtFuQABADAJAAQBaFbCLEoQAEAIAAAKQAKAUAPAOQAEAFAKAAQAUA6AbA3QACAEAKAAQgNApAeAHQACABAAAJQAAAKAFAFQAFAFAKAAQAdBXA2BAQAEAFAKAAQBKCIBTB/g");
	this.shape_1.setTransform(222.175,248.7593);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#679C3C").s().p("AgDFyIAAkkIgBgTQgGiLhHhLQgKAAgCgEQgIgPAAgUQBAgHAGi7QAAgBBRAvQAXANAAAmQA0CEgqB5IAKAAIAABhIAAATIgBATQgWCthJB4IAAgUg");
	this.shape_2.setTransform(249.8383,153.949);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#619638").s().p("AgwhqIgBgUQgShrgUhrQCWAZAXCWQACAKAAAJQgKABgIgEQgMgGgJgKQAdBhAJB1IABATIAAB1IAAATQgJBFgXA0IgHAQQgOj6hTjFg");
	this.shape_3.setTransform(228.925,141.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#649438").s().p("AlFF2QgxhMgFh6IAAgTIAAjCQAUAAAFgJQAbgrgXAMQh/BChhhVQBYg6BAhSQAEgGAAgKQEfi9HFBHQAJACAKAAQB4BxBtB9QAFAFAAAKQgiA/gVBoQgGAagkiuQAAgJgDgJQgHgVgKgTQgIgCgGACIgFAAIAAABQgOAFgJATQAKh/guAYQgUCXgDAKQgMAig+A5IAAAUIAAATQgKAKgEAMIgGARQgcirAJibQgBAHgEAGQhPCFg1ChIAABOIAAATIgTgBQghgFANg0IgBgUQgZj6A8ijQiLCFgyDeIAAATIABAUQAOCDgiBTQAAgKgEgHQgthagJh/IABgTQAaipAKhfQgBAEgCADQhOBYg2BvIAAATQAAAKgEAHQgGAMgJAKIAABOIAAATIgUAAIAACcIAAAUQAAAJACAKQALA0ggAGQAAgJgFgHg");
	this.shape_4.setTransform(147.075,148.0306);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#619739").s().p("AAvD9QgIieg7hfQAzANgMgWQg5hsgpiHQBiAvA1BbQAEAIAAAJIABAUQALC6gfCQIgKAAg");
	this.shape_5.setTransform(210.5788,140.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#609435").s().p("AiUghQAAgKAEgBQBHgfhLhLIAAgTQgBhRg5ADQAYg8AegYQAEgEAAgKQBpBRA6CCQACAEAKAAQATBEAcA/QABAEAKAAQAuC8A6BQQADAFAKAAQAMApgRAPIgPAMQh/jVjLimg");
	this.shape_6.setTransform(168.7691,69.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6E9C43").s().p("AgcgEIAAgKQgUBEgTBOQAAgKgDgJQgRg7gTg6QAAgKAFgFQAUgVgtgqQAag9A0AMIAAgJQCOAJAWBWQABACAKAAQAAAKgFAGQgPAXgnAAQAAAJAFAFQAFAFAKAAQATAwANAzIAHAbQhChGhZhLg");
	this.shape_7.setTransform(295.175,45.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7BB242").s().p("AuaSsQg+htgUArQg3BzgViGIAAgUIAAg6QAJAAABgCQAri/g1A5IAAgUIAAgnQA2g3gfhAQgEgHAAgLIAAgTIAAgTQBjlRDQj8QAFgGAAgJQByhaB7hQQAGgEAKgBQA2iXBqhhQAGgFAKAAQAJAAAHgFQBvhHimARIAAAUQgKAAgIAEQkPCJh5EeQAAgJACgKQAgkLBAiNQgKAAgEAFQiVCjhuDKIAAgTQgDjHA9iEQgJgBgEAFQiPDIhNEGIgCgTQgejeAeicIgDAEQiaCnAqEJIAAAKQhegqgEiOIAAgKQh/BpgdDXQgrgsADhcIABgdQgxAmhDhDQCIiSAShXIABgUQBpg1ALhAIABgTQCAh0C1hEQADgBAAgKQhOgVCggqQDDgzB7hvQAJgIAGgSQAOgpATgnQAKAAAFgFQCmibjIBSIAAATQgKABgEAFQhQBVhSBVQAAgKADgJQAliZARhZIgDADQhtBzhRCPIABgTQAVjSgCgsQgKAAgEAFQhIBVgfB8QAAAKgFAGQgiAxAAi2IAAgKQhmAQgjC9QghgsAKhcIAEgmQgjAbg/hDICmiJIgdAAQBNg8AjgYQAFgDAAgKQDGgiAognQAFgFAKAAQHiAsDqEkQAFAFAAAKQAAAKgFAEQgdAYgZA7QA6gCABBQIAAAUIAAAJQiCgChUAgQBOA6B1ASQAJACAKgBQDKCoCADUIAOgMQASgOgMgpIAAgUIAAhOQAfhLAYhRQADgKAAgKIAAgTQCSlLFmh9QADgCAAgKQDmghgaA1IAKAAQDIgFAeBBQAEAIAAAKIAAAJQg0gMgaA+QAsApgUAWQgFAFAAAJQgJAAgEgEQgrg4g9glQAJAyAaAgQAEAGAAAJQgJAAgIAFQgMAFgKAKIAAAUQgJgBgFgFQiGiRBaDRQAKAAACAEIAHAPQhYhEjMhEQCMBKA0CgQADAKAAAJQgKAAgDgEQiQjIj8BXQChAsB+BAQA2AcBEAAIATAAIAUAAQgDAhAqgKQAKgDAJAAQDKBuCaCeQAFAFAKAAQgaBQB1B4QAiAjALA4IgTAAQATAxAbAtQACADAKAAQA8CngCClIgHgQQgCgDgKAAQANg1gaAKIgHAEQgqhNgjCuIAAAUIAAATQgKAAgIADQgMAHgJAKQAOihgdhyIgFgSQg1AZhTBwIAAgUIAAgUIAAgTQAhgQgMg/QgCgJAAgKQAnh+hCiEQgUgogLC1IAAAoIAAATQAAAKgEAIQgQAfgTAdQACA5AgAbQAFADAAAKIAAAKQgUAAgTgKQAAAnAWAPQAHAFAKAAQAsA/AEBwIAKAAQA/CPgECWIAAATIgKAAQACgpgfACQAAAnAJAlQAAACAKAAIABATQAMCfggARQAAgKgCgJQgMhJgtAhIAAAUQgLA5gUAsQgOAdAAgBQgbhyAhi+IAAgKQg9AQhLBuIgKAAQBYiRgUkIQgLBWgaA8QhJCiguheQAqhAAPhcQACgJAAgKIAAgTIAAg7IAAgUQAJkCgwDJIAAA5IAAAUIgKAAQACApgfgCIAAAUIAAATQAAAKgFAGQgcAjgGggIAAgTIAAhOQAKAAAAgCQAYhugig/IAAgTIAAgoQAAgKgCgJQgMg2gZgsIgKAAQAqh5g0iEQAAglgXgNQhSgvAAABQgGC6hAAIIAAgUQAAgmgTgVQAAgJgCgKQgXiViXgZQAUBrASBqIABAUIAAATQgFBbg1huQAAgKgEgHQg1hbhjgvQAoCGA6BsQANAXg1gNQgJAAgFgFQgPgPgKgTQAAgKgEgFQhth7h4hyQgKAAgKgBQnFhHkeC9QAAAJgFAHQg/BRhYA5QBhBVB/hCQAXgMgbAsQgGAIgTAAIgKAAQADA0ggAGIAAAUQgXBUACBvQABBrgkBdQgRAtgsinIgBgTQgIhGgegvQAACIAKCIIAJAAQAGB5ApBaQACAEAKAAQAAAJgCABQglAIgUgSQAAgLgFgFQhYhggYiiQAAgJgEgFQgPgOgUgLQABBFAJBDQAAABAKAAQgIBqAqA2QAFAFAAALQAAAJAEAIQBzDiiyjMQg1grATBkQAlC/gWA/QgGghgLgSgASHA7IAAATQAAAKgEAIQgFAMgKAJQBnDPgPj1QAAgBgKAAIAAgTQAEiWg/hTIAADpgAP9CcIACAAQCOgEiig2QgNA+AfgEgAPrg5IAAATQBgCCgQhcQgCgIAAgKQAAgKgCgJQgjiohjhqQAuBuAMCQgAKRlNQBRCECBBVIAKAAQgii+i+gsQAAAKAEAHgAkGkPIAAATQgKAAgHAEQgzAjgxAnQAkAQBigZQACgBAAgKQAKAAAJgDQCFgoBlhKIgBgKIgkAAQiLAAhgAygAIYjZQCxACj/g4QAPA1A/ABgAKKoCQADgBAAgKQAJAAAJgEQAmgQg4gTIgUAAIiIAAIgUAAIAAATIgTAAIgUAAQBVBOB/gvgAplrQQBbA3BWgeQAggLASgIQCThIgXgyIgTgCQgpgHglAAQifAAhfB9g");
	this.shape_8.setTransform(164.6268,124.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#649632").s().p("AgmgdQCeA8iNgCIgCAAIgCABQgdAAAQg7g");
	this.shape_9.setTransform(268.3772,141.7532);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#946943").s().p("ADvTYQhEgahXAaIhLAAQgshbgrhfQAAgKgCAAQgdgHAMgpQAAgKgEgIQgdg5gag+QAAgJgDgIQgGgMgKgKQAAgJgCgKQgdhzgvhkQAAgJgDgJQhFjKgtjkQAAgJgDgJQgahQgKhgIgBgTQgaipgYirIgDgVIgEgdIAAgTIAAiJIAAgTIAAk4IAAgTIAAgUQA+g6AMgiQADgJAQh0IAEgbQAvgWgPB+QAKgSAOgEIAAgCIADABQAACCAJCCQAAABAKAAQARHCBtFtQABADAJAAQBaFcCLEoQAEAIAAAJQAKAUAPAPQAEAEAKAAQAUA7AbA2QACAEAKAAQgNAqAeAHQACAAAAAKQAAAKAFAEQAFAFAKAAQAdBXA2BAQAEAFAKAAQBKCIBTCAg");
	this.shape_10.setTransform(222.175,249.237);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#679C3C").s().p("AgbFzQAGiSAHiSIAAgUQgBiKhDhOQgKgBgCgEQgHgPABgUQBAgEAOi7QAAgBBPAyQAWAOgBAmQAuCGgvB4IAKAAIgFBhIAAATIgCATQgdCshPB0IABgTg");
	this.shape_11.setTransform(249.275,157.499);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#619638").s().p("Ag2hrQABgKgBgJQgOhtgPhsQCVAfARCYIABATQgKAAgIgEQgMgGgJgLQAaBjADB0IAAATIgFB1IAAAUQgMBFgZAyIgIAQQgDj7hLjIg");
	this.shape_12.setTransform(229.225,143.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#649438").s().p("AlZFtQguhOAAh6IABgTIAJjCQATABAGgJQAdgqgYALQiCA9hdhZQBbg2BDhPQAEgGABgKQEmixHCBbQAJACAKAAQBzB3BoCBQAEAGgBAJQgkA+gaBmQgGAbgdiwQAAgJgDgJQgGgVgIgUQgIgCgHACIgBAAIgDgBIAAACQgOAEgKASQAPh+gvAWIgEAbQgWB8gEAJQgNAhhBA3IgBATIgBAUQgKAJgEAMIgHARQgUisAPiaQgCAHgDAFQhVCCg8CeIgDBOIgBATQgKAAgJgCQghgGAPg0IAAgTQgOj8BCifQiQB/g7DaIgBAUIAAATQAICEglBSQAAgKgDgIQgqhbgDh/IACgUQAhinAPhfQgCAFgCADQhRBUg7BsIgBAUQgBAJgEAHQgGALgKAKIgEBOIAAAUIgUgBIgHCcIAAATQgBAKACAJQAJA1ghAFQAAgKgEgHg");
	this.shape_13.setTransform(146.5528,146.7191);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#619739").s().p("AAeD/QgBieg3hhQAzAPgMgXQg0hugjiJQBgAzAxBeQAEAIgBAKIAAATQAEC6gmCPIgKgBg");
	this.shape_14.setTransform(210.4648,142.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#609435").s().p("AiRgoQAAgJAEgCQBJgbhIhOIABgUQAChQg5AAQAbg8AegWQAFgEAAgKQBlBVA1CFQACAEAKABQAQBEAZBBQABADAKABQAmC+A2BSQAEAFAKAAQAKArgSANIgPALQh3jajDiug");
	this.shape_15.setTransform(171.0286,70);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6E9C43").s().p("AgegHIAAgJQgWBCgXBOQAAgLgCgJQgOg7gRg7QAAgKAFgFQAVgUgrgrQAdg9AzAPIABgKQCNAPASBXQABADAKAAQgBAKgEAGQgRAWgmgCQgBAJAFAFQAEAFAKABQASAyAKAzIAGAbQg/hJhVhPg");
	this.shape_16.setTransform(298.725,51.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7BB242").s().p("ATKUHQgWhyAqi9IAAgKQg+AOhQBrIgJAAQBeiPgJkIQgPBWgcA6QhQCggqhgQAtg/AThbQACgJAAgKIABgTIADg7IABgTQATkDg4DHIgDA6IAAAUIgKgBQAAAqgfgEIgBATIgBATQAAAKgFAGQgeAigFggIABgTIAEhOQAKABAAgCQAchtgfhBIABgTIACgnQAAgKgCgJQgJg3gXgtIgKAAQAvh4guiGQABglgWgOQhQgyAAABQgOC6hAAEIABgTQABgmgSgWIgBgTQgRiXiVgfQAPBsANBsQABAJAAAKIgBATQgJBagxhwQABgJgEgIQgxhdhhgzQAjCIA1BuQAMAXg0gPQgKgBgFgFQgNgPgKgTQABgKgEgFQhoiBhzh2QgKgBgJgCQnChakmCxQgBAKgEAGQhDBOhbA2QBdBYCCg8QAYgLgdAqQgGAIgTgBIgKAAQABA0ghAFIgBAUQgaBTgDBvQgDBrgoBbQgTAsglioIgBgUQgEhGgdgwQgFCIAECHIAJABQABB6AlBbQACAEAKAAQgBAKgCAAQglAIgTgUQAAgKgEgFQhVhkgQijQABgJgFgFQgOgPgTgLQgDBEAHBDQAAABAKABQgNBpAoA4QAEAGAAAKQAAAJADAIQBqDnipjUQgzgtAOBlQAdDBgZA9QgEghgKgSQg6hvgVApQg9BxgPiHIABgTQAAgeACgdQAKABAAgCQA0i9g4A2IABgUIACgnQA4g0gchCQgEgHABgKIABgUIABgTQBwlMDbjzQAFgFAAgKQB3hUB+hLQAGgFAKABQA9iVBuhdQAGgFAKABQAJAAAHgEQByhCinAKIgBATQgKAAgHAEQkVB8iFEbQAAgJACgKQArkLBGiKQgJAAgFAEQibCdh2DFIAAgTQAFjGBEiDQgKAAgEAEQiXDChZEDIgBgTQgVjgAliaIgDAEQihCfAeEMIAAAJQhcguACiNIABgKQiEBkglDVQgqguAHhcIADgdQgzAkhBhFQCPiNAVhXIADgTQBrgxANg/IADgTQCEhuC3g8QAEgBAAgKQhNgZCigjQDEgqCAhqQAKgIAHgSQAPgoAVgmQAKAAAFgEQCtiTjMBIIgBAUQgJgBgFAFQhUBThVBRQAAgKADgJQAsiYAVhYIgDADQhxBuhXCMQAAgKABgKQAejQAAgsQgKAAgEAEQhMBSgkB7QgBAKgFAGQgkAvAIi2IAAgKQhnAMgqC8QggguAPhcIAFgmQgkAag8hGICriBIgdgBQBQg5AkgXQAFgDAAgKQDIgZAqglQAFgFAKAAQHfBBDeEtQAEAGAAAKQgBAJgEAEQgfAXgbA7QA6AAgDBQIgBAUIAAAJQiBgIhWAcQBLA+B0AXQAKACAJAAQDECvB2DbIAPgMQASgNgKgqIABgUIADhOQAihKAchQQADgIABgKIABgUQCglFFrhtQADgBAAgKQDogYgdA0IAKAAQDIADAcBDQADAIgBAKIAAAJQgzgOgdA8QArAsgVAUQgGAFAAAKQgJAAgEgGQgog5g8goQAHAyAYAhQAEAHAAAKQgJgBgJAEQgLAFgLAJIgBAUQgJgBgEgFQiBiWBRDUQAKAAACAEIAHAQQhVhIjJhNQCJBQAtCjQACAJAAAKQgKgBgDgEQiHjOkABNQCgAxB6BHQA1AeBEADIATABIAUABQgEAgAqgJQAKgCAJABQDFB2CTCkQAFAGAKAAQgeBPBxB8QAgAkAIA6IgTgBQASAyAYAtQADAEAJABQA1CogJCmIgGgRQgCgDgKgBQAPg0gaAKIgHACQgnhOgrCtIgBATIAAAUQgKgBgJADQgLAGgKAJQAViggZhyIgDgTQg2AXhYBsIABgUIABgTIAAgUQAigOgJg/QgBgKAAgJQAsh+g8iHQgSgpgTC2IgCAnIgBAUQAAAKgFAHQgRAfgUAcQgBA4AfAdQAFAEAAAKIgBAKQgTgBgTgLQgCAnAWAQQAGAFAKABQApBAAABxIAKAAQA4CRgKCWIgBATIgKAAQAEgqggABQgBAnAHAlQABADAKAAIgBAUQAFCeggAQQAAgKgBgJQgJhJguAfIgBAUQgNA4gWArQgOAbgBAAIgBAAgASOBnIAAATQgBAKgEAIQgGALgLAJQBfDTgFj1QAAgBgKAAIABgUQAKiVg7hWIgKDpgAQADCIACAAQCOACifg9QgQA9AfgCgAP3gTIAAATQBZCGgMhdQgBgKABgKQAAgJgBgKQgdinhehuQAqBvAFCRgAKqk2QBLCHB9BbIAJABQgZjAi8g0QAAAKAEAHgAkBkJQg1AggyAlQAjASBjgVQACgBAAgJQAKAAAJgCQCHgkBohEIAAgKQiigPhwA0IgBATIgBAAQgJAAgGAEgAIrjIQCxALj8hEQANA1A+AEgAKqnrQADgBAAgKQAKAAAJgDQAngOg4gWIgTgBIiJgGIgTAAIgBATIgUgBIgTgBQBRBSCBgqgAo7rvQBZA7BXgbQAggJATgIQCVhBgVg0IgSgCQgygKgsAAQiVAAheByg");
	this.shape_17.setTransform(163.5592,125.2793);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#649632").s().p("AgqgcQCjAuiNAKIgCABIgEAAQgaAAAKg5g");
	this.shape_18.setTransform(269.5507,133.0184);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#946943").s().p("ADvTcQhEgZhXAZIhLAAQgshbgrheQAAgKgCgBQgdgGAMgqQAAgKgEgHQgdg5gag+QAAgKgDgIQgGgLgKgKQAAgKgCgJQgdh0gvhjQAAgKgDgIQhFjKgtjkQAAgKgDgJQgahPgKhgIgBgTQgaipgYisIgDgVIgEgcIAAgUIAAiIIAAgUIAAkkIAAgCQADgMAKgKIgBgUIgBgTQA8g9AKgiQADgJAKh4IADgZQAugYgKB/QAJgSAOgFQAACHAJCHQAAABAKAAQARHCBtFuQABADAJAAQBaFbCLEoQAEAIAAAKQAKAUAPAOQAEAFAKAAQAUA6AbA3QACAEAKAAQgNApAeAHQACABAAAJQAAAKAFAFQAFAFAKAAQAdBXA2BAQAEAFAKAAQBKCIBTB/g");
	this.shape_19.setTransform(222.175,248.7593);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#679C3C").s().p("AATFxQgHiSgGiSIgBgTQgMiKhKhIQgKAAgCgEQgIgPgBgTQA/gKgCi7QAAgBBTArQAXAMACAmQA6CBgkB7IAJAAIAEBhIABATQABAKgBAJQgOCuhFB6IgBgTg");
	this.shape_20.setTransform(250.3333,150.3239);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#619638").s().p("AgxhpQgBgKgCgJQgWhrgZhqQCXASAeCWIACATQgKAAgHgDQgNgFgKgKQAiBfAOB0IACAUIAFB1IABATQgGBGgVA0IgGARQgZj6hbjBg");
	this.shape_21.setTransform(229.325,138.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#649438").s().p("AkwF/QgzhJgLh6IgBgTIgJjCQAUgBAFgJQAZgsgWANQh8BGhlhPQBVg+A8hUQAFgGAAgKQEVjKHIAzQAKABAKAAQB8BsByB3QAGAGAAAJQgfBBgRBpQgEAagtisQAAgJgDgJQgIgVgKgTQgJgBgGACIgFAAIAAACQgNAFgJATQAFh/gtAaIgDAhQgKB4gCAJQgLAjg8A7IABAUIABATQgKAKgCANIgBABIgFAQQgkipADibQgCAHgDAFQhJCJgtCjIACBOIABATQgJABgKgCQghgDALg1IgCgTQgkj6A0ikQiECLgpDfIABAUIACATQAUCCgfBVQAAgKgEgHQgxhXgOh/IAAgUQARipAHhgQAAAFgDADQhJBagyByIABATQABAKgEAHQgGAMgJALIAEBOIABATIgTABIAGCcIABATQAAAKADAJQANA0ggAHQAAgJgGgHg");
	this.shape_22.setTransform(147.65,149.235);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#619739").s().p("AA/D6QgPiehAhcQA0AKgNgVQg+hpguiFQBkAqA5BaQAEAHABAJIABATQAUC6gaCSIgHAAIgCAAg");
	this.shape_23.setTransform(210.7896,138.4125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#609435").s().p("AiWgaQgBgJAEgCQBGghhPhIIAAgUQgFhQg5AFQAWg9AcgZQAEgFAAgJQBsBMBAB/QACAEAKAAQAWBDAfA/QABADAKgBQA2C6A9BOQAEAEAKAAQANApgQAPIgOAMQiJjPjRidg");
	this.shape_24.setTransform(166.5038,69.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6E9C43").s().p("AgegBIAAgKQgRBFgQBOQAAgKgDgJQgTg6gXg5QAAgJAFgGQATgWgugoQAXg+A0AKIAAgJQCOACAaBVQAAADALgBQAAAKgFAHQgOAXgmACQAAAIAFAFQAFAFAKAAQAWAvAOAyIAJAbQhFhDhdhHg");
	this.shape_25.setTransform(291.75,39.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7BB242").s().p("AtwSsQhDhpgSArQgzB3gaiFIgBgUIgDg7QAKAAAAgCQAkjBg0A7IAAgTIgDgoQA1g5gjg/QgEgHAAgKIAAgTIgBgUQBTlTDFkGQAEgFAAgLQBvheB3hWQAGgEAKAAQAwiaBlhmQAGgFAJAAQAJgBAIgFQBrhMilAYIABAUQgKABgHAEQkJCUhtElQAAgKABgIQAUkPA6iPQgJAAgFAGQiOCphkDOIgCgTQgLjGA4iIQgKABgDAFQiHDNhCEJIgCgSQgojdAXidIgDAEQiSCtA2EIIAAAJQhgglgKiOIAAgKQh6BvgUDYQgtgqgBhdIAAgdQgwAohGg/QCDiZANhXIABgTQBmg7AHhAIABgTQB7h5CyhMQADgBAAgKQhPgSCegxQDAg6B2h1QAJgJAGgSQALgqASgnQAJgBAGgFQCfihjFBZIABAUQgJABgFAEQhMBahOBYQAAgKABgJQAfibANhZIgCADQhnB3hMCTIAAgUQANjSgFgsQgKABgEAGQhEBXgZB9QAAAKgFAHQgfAygJi1IAAgKQhlATgaC/QgkgqAHhdIACgnQgiAdhChAICfiPIgdABQBMhAAhgaQAFgDAAgJQDFgrAlgpQAFgFAJAAQHlAXD2EYQAFAFAAAKQAAAKgDAFQgdAZgWA8QA5gEAFBQIAAAUIABAJQiCADhSAkQBQA3B2ANIATAAQDSCdCIDQIAOgMQARgPgOgpIgBgUIgDhOQAchNAUhSQADgIgBgLIgBgTQCElRFgiNQADgCgBgJQDmgsgZA3IAKgBQDIgPAiBAQADAIAAAKIABAKQg1gLgXA/QAvAogUAWQgEAGAAAKQgKAAgDgFQgug3g+ghQALAxAbAfQAEAFABAKQgJABgIAFQgMAFgJALIABAUQgKAAgFgFQiNiLBkDMQAJAAADAEIAIAPQhbhAjPg7QCQBDA6CfQADAIABAKQgKAAgEgEQiXjBj5BiQCjAkCBA7QA3AaBEgCIATgBIATgBQAAAfApgLQAJgDAKAAQDOBlChCXQAEAFAKgBQgWBRB7BzQAjAhAOA5IgUABQAWAvAcArQADAEAJAAQBECjAFClIgHgQQgDgDgKAAQAMg1gaAMIgHAEQguhLgbCwIABATIABATQgLABgHAEQgMAGgIALQAGiighhwIgGgSQg0AbhOBzIgCgTIAAgTIgBgUQAggRgPg+QgCgKAAgJQAiiBhIiBQgWgngDC2IABAnIABATQABAKgEAIQgOAggSAeQAEA5AhAZQAFAEABAKIAAAKQgTAAgTgIQACAmAVAPQAIAEAJgBQAvA+AKBvIAKAAQBECMADCWIABATIgKAAQABgpggAEQABAnALAkQABADAKgBIABAUQATCcggATQAAgKgCgJQgPhIgrAkIABATQgJA5gSAtQgNAegBgCQgfhvAZjAIAAgKQg9AShGByIgKABQBRiWgekGQgIBWgYA9QhCCmgxhdQAnhCALhcQABgKAAgKIgBgTIgCg6IgBgTQgCkEgoDLIACA6IABATIgJAAQAEAqgggBIABAUIABATQABAKgFAGQgbAlgIggIAAgTIgDhPQAJAAABgCQAThuglg+IgBgTIgCgoQAAgJgDgKQgOg2gagpIgKAAQAkh7g6iBQgBgmgYgMQhUgrAAABQADC6hAAKIgBgUQgCgkgTgUIgDgTQgeiWiYgSQAZBqAWBrQADAKAAAJIAAASQAABbg7hrQAAgJgEgHQg6hahlgqQAvCFA+BpQAOAWg1gLQgJAAgGgEQgPgOgLgUQAAgJgFgGQhyh1h9htQgKABgKgCQnIgzkVDKQABAKgFAGQg8BThVA+QBkBRB9hIQAWgNgZAsQgFAJgUABIgKAAQAGA1ggAHIABAUQgTBVAGBuQAGBsgfBeQgQAtg0ikIgBgUQgLhFghguQAGCIARCHIAJAAQALB6AtBXQACADAJAAQABAJgCABQgkALgVgTQAAgKgGgEQhchcgfihQAAgKgFgEQgPgOgUgJQAEBEAMBCQAAABAKAAQgEBrAsAzQAGAGAAAKQAAAKAEAIQB+Dci6jFQg4goAYBkQAtC8gTBBQgIghgLgTgAR9gcIABASQAAAKgDAHQgFAMgJALQBwDKgbjzQABgCgLABIAAgTQgDiWhChRIAKDqgAP3BKIACgBQCOgJikgwQgLA/AfgFgAPbiKIACATQBmB+gVhaIgCgUQAAgJgDgKQgrilhnhmQAzBsARCPgAkdkqIAAAUQgJABgHAEQgxAlgwApQAlAOBggdQACgBAAgJQAKgBAJgEQCDguBjhOIgBgKIgDAAQihAAhqA9gAJ3mOQBVCACFBPIAKAAQgqi9jAgkQABAKAFAIgAICkXQCygEkCguQASA0A+gCgAJUp1IiIAHIgTAAIABATIgUABIgUABQBZBKB8g0QADgCAAgJQAKgBAHgEQAmgSg5gRIgUABgAqPraQBeAzBUgiQAfgMARgKQCQhNgZgyQgJABgKgCQgfgEgcAAQitAAheCJg");
	this.shape_26.setTransform(165.8,128.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-3.4,331.3,376.59999999999997);


(lib.tree1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#845A3B").s().p("AgnCiIAAgUIAAhOQAxh8gKi6IAAgUQAJAAAFgFQAEgFAAgJIAUAAQAMEThEEdQgCALgDAAQgIAAgIh8g");
	this.shape.setTransform(136.4644,190.4101);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#65993B").s().p("AhFFgQgziOAPjSQAAgJAEgIQA7iBg/AKIAAgTIAAgnQAihdBOgyQAEgDAAgKQA1AFAcgUQAHgEAKAAIgCATQgJBNgwAoQABBEAJBDQAAABAKAAQADA1gLgQQgpg9gwCMIAAAUIAAATIgBAUQgNCXgZCNQAAgKgDgIg");
	this.shape_1.setTransform(102.1045,140.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E5131").s().p("AgiDWIAAgTIAAkQIAAgUIAAg6QAhgGgEg0IAJAAQAAAJADAJQBDDIhZC+IAAATIgTAAg");
	this.shape_2.setTransform(141.8464,140.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#65993E").s().p("AibCSIAAgTIAAibQAshIgMgVQgDgFgJAAIAAgTIAAgTQDMjBhSDDQgVAygEBAQAxhVAvgyQAigkAsgXQAKAJAGAMIACAFQACAGAAAHIgKAAQAEA0ghAGIAAA6IAAAUQgKAAgBADQgjB0gzBeQAAAKgFAHQgYAmAJi/IAAgKQhQAHgkCfIAAATIAAAUQAAAJgCAKQgKAlgIAAQgNAAgGhzg");
	this.shape_3.setTransform(126.625,139.395);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#977137").s().p("AnbUfQAQgWAPgcIEWnvIAAgTQAdgUAIgnQACgJAAgKQBciPA8iqQADgJAAgJIAAgUQBFhqAbiTQACgKAAgKQAJAAAFgEQAFgFAAgKIAAgUIAAgSQBSirAZjtQAAgBAKAAQAKChALgwQBFkegMkTIAAgUQBai+hEjIQgDgJAAgKQAAgHgBgFQBaCNAbDKIABAUIAABOIAAATIAADXIAAATIAAATQgHE7hHD7IAAAlIAAAUIgBATQgRCBgoBpIAAAnIAAAUQAAAJgFAFQgFAFgKAAIAAAUIAAATIgJAAQACBlgzAkIAAA6IAAATIgKAAQAEA1ghAGIAAATIAAAUQgKAAAAACQhAEAh5C+IAAAUIAAATQgKAAAAACQgQBBgaAxg");
	this.shape_4.setTransform(106.275,248.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#77AA41").s().p("AiPK9QgJAAgEgEQgvg+gShZIAAgnQhNCagBiaIAAgUIAAg6QAKAAABgDQAniJgyADQAAgJgEgEQgdgWAOg+QAyibA/iKQAEgIAAgKQAKAAADgEQAyhEg/AhIAAgTIAAgUQAfADgCgqIAKAAQBHAXgdhSQgDgJAAgKIAAgTQATgKAPgPQAFgEAAgKQBEgQAshnQAEgIAAgKIAAgTQAJgKAMgGQAIgDAKAAQAcCJAeAJIAFgdQAdimAshEQA6gLAqgYQAHgEAKAAQAAAJgFAFQgFAFgKAAQAACJASB1IACATQgKAAgBADQhMDngLEjQgth3gHiHQgOj2gyCqIAABhIAAAUIgUAAQAABXAKBWQAAABAKAAIAAAnIAAATQhZgwgbjfIAAATQACErAiCwIgDgEQhph/gti9QgPCDAVBXQAZBvANBVQAHAshuiSQAHDGAqCYg");
	this.shape_5.setTransform(55.2721,179.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6BA340").s().p("AhpBbQBGhMgUg4QgBgDgKAAQAAgKgFgFQgYgZgKgmIA7AAIATAAQCogJgtAlQgsAlARA0QgXAigbAeQg6BCghAAQgXAAgKgig");
	this.shape_6.setTransform(70.9648,45.5123);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#609741").s().p("AhDAgQhEAwgpBJIgSAiQAFhjhdg4QB+hJB+hIQAygdAygHQBogPAMgIQA/grAhAhQgJAAgFAFQhoBXg4g1QgJBXBrgaQAIgCALAAIAAATIgUAAIg7AAQAKAnAZAYQAEAEAAAKQAAAKgEAFQgjAigmAdQgLAAAAACQgHAegpgMQAAgeAKgZIAJgXQhFgxgvDNIAAAJQhHg2A0hvg");
	this.shape_7.setTransform(45.75,39.7665);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7EB741").s().p("Aq2KGIAAAUIAAATQgKAAgCgEQgTgjgcAUIAAgUIAAgnQAigsAVg3QAEgIAAgKQAJAAABgCQANgzgXgZIAAgTQAggGgLg1QgCgJAAgKIAAgUQBciNBTiDIgPgIQgEgCAAgKQC5i4EIhoQAJgDAKAAQBgAABggKQABAAAAgKQAtg0A9gXQAtgSgFgOQgZhNigBEIgTAAQAAgKAFgFQAJgKgig1QAAgKAEgCQBqg3iVAcQgRg0AsglQAtglioAJIAAgUQD0gVjEg5IAKgTQG9BHCTF2QACADAJAAQABAnAJAlQAAACAKAAQAKA6ASA4QABADAKAAIAABhIAAAUQAUCtBSh2QAIgMgTAoQggA/g7AcQgsAYgiAjQgwAzgxBVQADhAAWgzQBSjCjNDAIAAAUIAAATIgKAAQACAqgfgDQgKAAAAgBQgJhDAAhEQAvgoAKhNIABgUIAKAAQAEhriDBrQAAAKAFAFQAFAFAKAAQAAAJgFADQhPAyghBeIAAAnIAAATQAAAKgFAFQgFAEgKAAIAABiIAAATQgJAAgFgEQgFgFAAgKIgCgTQgSh1AAiJQAKAAAFgFQAFgFAAgJQAAgKAEgHQBSh4AfhNQgKAAgIAEQiKBKhOCIIAAATIAAAUQgrBEgdCmIgFAdQgegJgciJQAAgKACgJQAjiVApiPQgKAAgDAEQhWCMg5CnQgFBQAeglQAEgFAKAAQAAAKgEAIQgtBnhEAQIAAgUQAhgPgMg/QgCgJAAgKIABgTQASkuhNDMIAABhIAAAUQAAAKgFAFQgFAEgKAAQAABOAKBNQAAABAKAAQAAAKADAJQAdBShHgXQAAgJgEgJQgWg1gNhBQAAgKgEgCQgdgOANg0IABgUQAGj0hBDhIAAAnIAAATQAABOAJBNQABABAJAAQgHBCAWAjQAFAGAAAKIAAAUQgKAAgEgFQg8hOgrhdQgnAnAABOQAABYgeBMQgCAFgDAAQgQAAguiCgADJkgQBVBiBzhGIAOgJQgXg0hAAAQgzAAhMAhg");
	this.shape_8.setTransform(75.3561,99.132);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#73AB41").s().p("ADDTWIAAgUIAAgTQAcg8AKhNIABgTQAKAAAAgCQAgiZg9ASIAAAUQAAAJgFAHQhUB/hDguQBfhQAUiaQACgJAAgKQAJAAABgDQAjh5hBggIAAATIAAAUQAFBIgRAmQhQC0hAhfQAnhiASh1IACgTIAAgTQAFj3hAD3IAAATQAAAKgCAIQhICfgDieIABgTQAHjogvixIgJAAQAbDLhMCnIAAAnIAAATQgKAAgCAEQgNAegiAFIABgTQAjmzi/jQIgKAAQBzEiiQEAIAAgUQAbm+jyiwQB/DuhhEcQgBADgJAAIgBgUQgMjJhViCQhLiQAbDfQAcDkg6hdIgBgTQgbjLhaiMIgCgFQgGgMgKgJQA7gcAghAQATgngIALQhSB2gUiuQA1ATAFh0IAAgUQBCixBWicQAEgIAAgJQAKgKAGgMQAEgIAAgJQCdjfD4iIQAEgCAAgKQBTgrBugYQACgBAAgJQB5gYCXAEIATAAQgrAuCcAhQCBAbBZBFIgdAAQCJBagKBpIgKAKQgQgYgDAIQgaA7grBAQgTgUgOggQhnjtAAD6QgKAAgCAEIgIAQQglhQhQiaQgJAAgBACQgHAlARDWIAAAKQhYiIhqh/IgKAAQBJCEgYCNQAAgKgFgIQhQiOiog3QBcBdAqCOQADAJAAAKQDtA/DOBkQAEACAAAKQhSARCPBKQBpA2BrBFQAAAKgFAFQgFAFgKAAQARAqAqANQAJADAKAAQApB5CCCIQAEAFAAAKIAAAKQgTAAgUgKQABAmAPAXQAEAHAAAKQgKAAgBgEQgWgzgtgXIAACIIAAAUQgKAAgCAEIgHAPQhAhchJjHQgKAAgBAEQgeA+g4CAQgKAsgBgsQgBj8iQjDIgKAAQA+C9g0DbQgKAAAAgCQgxkrivimQAAAKAEAHQBSCQgcCrIAAAJQhrjpjLiTQAAAKAFAFQCbClgsELQAAgJgDgJQhtlGlPhnQAAgJgCgBQgvgJgxAAQAGArA1gEIATAAQCMBoBHCqQADAIAAAKQEwCZCXE2QACAEAKAAQAdA5gZArQgEAHAAAKQA9BUAiBvQACAJAAAKIAAATIAAAUIgTAAQAKA6ASA4QABADAKAAIAAAnIAAATIgKAAQACgpgfACQAAAeAJAaQABADAJAAQApCagpBtIAAgdQAAgKgCgJQgjhwgpA1IAAATQAAAKgCAJQggB2g8AAIgDAAgAqkkyQB6B6DgAUQAAgKgFgFQh1h/jlgOQAAAKAFAEgAoHqaQgbAgg5ACQAsAsBbgPQACAAAAgJQAJAAAJgEQCUg2jNgBQgKAAgEAFgAnSsnQBSAZBHAlQAfAQAXALQB9A7AmhGQgKAAgEgFQhQhgiGAAQhBAAhNAXg");
	this.shape_9.setTransform(233.775,123.7751);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#65993B").s().p("AgrFjQg5iMAGjSQgBgJAEgIQA1iDg+ANIgBgTIgCgnQAehfBMg2QAEgDAAgJQA1ACAbgVQAGgFAKAAIAAAUQgHBNgtAqQADBEAMBDQAAABAKgBQAGA1gMgQQgsg7gpCOIAAATIABAUIAAATQgGCZgTCOQgBgKgDgJg");
	this.shape_10.setTransform(101.8083,142.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#65993E").s().p("AiPCVIgBgTIgHibQAphKgNgUQgDgEgKAAIAAgTIgBgTQDDjKhJDGQgTA0gBA/QAthWAtg1QAgglArgZQALAJAGAMIADAEIABADIABAKIgIAAIgCAAIABASQgBAkgbAGIADA6IAAAUIgDAAQgGABgBACQgeB1gvBhQABAKgFAGQgXAoACjAIgBgIQhPAJgeCgIABAUIABATQABAKgDAJQgIAngIAAQgNAAgKhzg");
	this.shape_11.setTransform(126.825,141.3092);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#977137").s().p("AnbUYQAQgXAPgcIEWnvIAAgTQAdgUAIgnQACgJAAgKQBciPA8ipQADgJAAgKIAAgUQBFhqAbiTQACgJAAgKQAJgBAFgEQAFgFAAgKIAAgSIAAgTQBSisAZjtQAAgBAKAAQAKCiALgxQBFkegMkTIAAgUQBai+hEjIQgCgIgBgIQAkA1AcA+QAkBhAQB0IABAUIAABOIAAATIAADXIAAATIAAAUQgHE6hHD7IAAAnIAAASIgBAUQgRCAgoBqIAAAmIAAAUQAAAKgFAEQgFAFgKABIAAATIAAATIgJAAQACBlgzAkIAAA7IAAATIgKAAQAEA0ghAGIAAATIAAAUQgKAAAAADQhAD/h5C+IAAAUIAAAUQgKAAAAABQgQBBgaAyg");
	this.shape_12.setTransform(106.275,249.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7E5131").s().p("AgiDWIAAgTIAAkFIADAAIAAgTIgDg6QAbgHABgkQABgIAAgJIAHgBIgCgJIACAAIACADQAAAIADAHQBDDIhZC+IAAATIgTAAg");
	this.shape_13.setTransform(141.8464,140.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#77AA41").s().p("Ah6LDQgyg8gVhYIgDgnQhFCdgIiaIAAgTIgDg7QAKAAAAgDQAiiLgyAGQAAgKgFgDQgegVALg/QAricA6iNQADgIAAgKQAKAAACgFQAvhGg9AkIgBgTIgBgUQAgABgEgpIAJgBQBJAUghhRQgDgIgBgKIgBgUQATgKAOgQQAFgEAAgKQBDgTAohoQADgIAAgKIgBgUQAJgKAMgGQAHgEAKgBQAiCIAeAHIAEgcQAWioAphGQA5gNApgaQAHgEAKgBQAAAKgEAFQgFAFgKABQAGCIAXB0QACAJAAAKQgJAAgBADQhCDrACEjQgyh1gNiGQgYj1gsCrIAFBiIAAATIgTABQADBYAOBVQAAABAKgBIACAnIAAATQhagtgljdIABAUQAOEqAqCvIgDgFQhvh6g1i6QgJCDAZBWQAeBtARBVQAIAsh0iOQAQDGAwCWIgKABIgBAAQgIAAgEgEg");
	this.shape_14.setTransform(57.3524,183.5775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6BA340").s().p("AhgBfQBDhPgXg3QgBgDgKAAQAAgKgFgFQgagXgLgmIA7gDIATgBQCngPgrAmQgqAnATAzQgVAjgbAgQg4BFghAAQgWAAgLggg");
	this.shape_15.setTransform(67.1642,49.6737);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#609741").s().p("Ag/AnQhCAzglBLIgRAjQABhjhfg1QB6hOB7hNQAxgfAxgJQBngTAMgJQA9guAkAgQgKAAgFAFQhkBbg7gyQgFBXBqgfQAJgCAKgBIABAUIgUABIg6ACQALAmAZAYQAFAFABAJQAAAJgEAFQghAkgmAfQgKAAAAACQgGAegpgKQgCgeAJgZIAJgYQhJgtglDOIABAKQhKgzAvhyg");
	this.shape_16.setTransform(41.925,44.5436);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7EB741").s().p("AqnKWIABATIABAUQgLAAgCgEQgUgigbAVIgBgUIgBgnQAfgtATg4QADgIAAgKQAJgBABgCQALgzgZgYIgBgUQAhgHgOg0QgCgJAAgKIgBgUQBWiRBNiHIgQgHQgEgCAAgJQCxjAEDhzQAJgEAKAAQBggFBggNQAAAAAAgKQArg2A7gaQAtgUgGgOQgchMidBLIgTABQgBgKAFgGQAJgKglg0QAAgKAEgCQBog7iSAiQgUgzApgnQArgmimAPIgCgTQDzggjGgwIAJgUQHAA0CjFvQABADAKAAQACAnAKAkQABACAJAAQAOA6AUA2QABADAJAAIAEBhIACAUQAbCsBNh5QAIgLgSAnQgdBBg6AeQgrAaggAlQgtA0guBXQAAhAAUgzQBKjGjEDJIABAUIAAATIgKAAQAEAqgfgCQgKABAAgBQgMhDgDhEQAtgqAHhNIAAgUIAKgBQgBhrh+BxQABAKAEAEQAGAFAKAAQAAAJgFADQhMA2geBfIACAnIABATQAAAKgFAFQgEAFgKAAIAEBhIABAUQgKAAgEgEQgGgFgBgKQAAgKgBgJQgYh0gFiIQAJgBAFgFQAEgFAAgKQgBgKAFgGQBMh8AchOQgJAAgIAFQiIBQhGCKIABAUIAAATQgpBGgWCoIgDAcQgfgHgiiIQAAgKACgJQAdiWAiiRQgKAAgDAFQhQCPgxCqQgBBQAbgmQAEgFAKAAQAAAKgDAIQgpBohDATIgBgUQAhgRgPg9QgCgKAAgKIgBgTQAFkuhEDPIAEBhIABAUQAAAKgEAFQgFAFgKAAQAEBOANBMQAAABAKAAQAAAKADAIQAhBRhIgUQAAgJgFgIQgYg0gQhBQAAgKgFgCQgdgMALg2IgBgTQgEj0g3DjIACAnIAAATQADBOAOBNQAAABAKAAQgEBBAXAjQAEAGABAKIABATQgJABgFgFQg+hLgwhbQglApADBOQAEBXgaBOQgCAFgEAAQgQAAgzh/gACvk2QBZBeBwhLIANgJQgYgwg7AAQg0AAhPAmg");
	this.shape_17.setTransform(75.75,104.3932);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#73AB41").s().p("AD8TAIgBgTQAZg8AHhPIAAgTQAKAAABgCQAZiag9AVIABATQAAAKgEAHQhPCChFgqQBchUAOicQAAgJAAgKQAKAAABgDQAch7hBgcIABATIAAATQAIBIgPAnQhIC3hDhcQAhhkAOh1QACgJgBgKIgBgUQgFj2g1D5IABAUQAAAJgEAJQg/ChgKidIAAgTQgDjpg2ivIgKABQAlDKhGCqIACAoIAAATQgJAAgBADQgNAfghAGIAAgTQARm1jJjGIgKABQCAEciFEFIgBgTQAHm/j4imQCJDphVEfQAAADgKABIgCgUQgVjIhah+QhRiMAkDdQAmDig+haIgCgTQgVh4grhiQgbg+glg0IgBgCIgCgEIgDgEQgHgMgKgJQA6geAdhBQASgpgIAMQhNB6gbiuQA2AQAAhzIgBgUQA6i0BQigQAEgHgBgKQAJgKAGgMQADgIgBgJQCUjmDxiSQAFgCgBgKQBSgvBtgdQACgBgBgJQB6geCUgCIAUAAQgqAwCeAaQCCAWBcBAIgdACQCNBTgGBqIgJAKQgQgXgDAIQgYA8goBCQgUgTgPggQhxjoAKD6QgKAAgBAFIgIAPQgohOhXiWQgJAAgBACQgFAlAaDWIAAAJQheiDhvh7IgKAAQBOCBgRCOQgBgKgFgIQhUiKisgvQBgBYAwCMQADAJAAAKQDwA1DSBbQAEACABAJQhRAVCSBDQBsAzBsBAQABAKgFAEQgFAGgJAAQASAqArALQAJADAKgBQAuB3CICDQAEAFABAKIABAKQgUAAgUgJQADAmAPAXQAEAGABAJQgJABgCgEQgYgxgugWIAGCIIABAUQgLABgBAEIgHAQQhEhahRjDQgKAAgBAEQgbBAgzCBQgIAtgCgtQgMj7iZi9IgJAAQBFC7gqDdQgKABAAgCQg+kpi2ieQABAKAEAGQBYCNgUCsIAAAJQh2jkjRiLQABALAFAEQCiCfghENQAAgKgDgIQh6lClVhYQAAgKgCAAQgwgHgvACQAHArA0gHIATgBQCRBjBOCnQAEAHABALQE1CLClEvQACAEAKgBQAgA4gYAsQgEAIAAAJQBBBTAnBtQADAIAAAKIABATIABATIgUABQANA6AVA4QABACAJAAIACAnIABATIgKABQAAgpgeADQAAAdALAaQABADAJAAQAwCYglBuIgBgcQAAgKgDgJQgnhugnA2IABAUQABAJgDAJQgbB6g/AAIAAgUgAqskMQB/B0DgAKQAAgKgFgFQh7h6jlgEQABAKAFAFgAoRqAQgKAAgEAEQgaAjg4ADQAtArBcgTQABAAAAgJQAJgBAIgEQCAg1iQAAIgrABgAnwsLQBTAWBIAhQAhAQAXAJQB/A2AjhIQgKABgEgFQhQhWh6AAQhHAAhWAcg");
	this.shape_18.setTransform(233.25,120);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#65993B").s().p("AhaFcQgsiRAYjQQAAgJAEgIQBBh+g/AHIAAgTIACgnQAmhcBQgvQAFgCAAgKQA1AHAdgSQAGgFAKABIgCATQgNBNgxAmQgDBEAGBDQAAABAKABQACA0gLgQQgmg/g2CKIgBATIgBAUIgCATQgTCXgfCMQAAgKgDgIg");
	this.shape_19.setTransform(102.0546,137.8225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#65993E").s().p("AiiCOIABgTIAGibQAwhGgMgWQgCgEgKgBIABgTIABgTQDUi4haC/QgXAygHA/QA0hSAygxQAjgiAtgVQAKAKAFAMIACAFIABANIgCAAIgBAAIgGgBIAAAJQgBAMgCAJQgIAYgWADIgCA6IgBATQgJAAgCADQgoByg3BdQAAAKgFAGQgaAlATi/IAAgJQhRADgrCdIgBAUIgBATQAAAKgDAJQgMAlgIAAQgNAAAAh0g");
	this.shape_20.setTransform(126.175,137.5175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#977137").s().p("AnbUdQAQgWAPgcIEWnvIAAgTQAdgUAIgnQACgJAAgKQBciPA8iqQADgJAAgJIAAgUQBFhqAbiTQACgKAAgKQAJAAAFgEQAFgFAAgKIAAgUIAAgSQBSirAZjtQAAgBAKAAQAKChALgwQBFkegMkTIAAgUQBai+hEjIQgDgJAAgKIAAgIIABAAQAjA3AZBAQAhBiALB2IAAAUQAHAMAFAHIAAA/IAAATIAADXIAAATIAAATQgHE7hHD7IAAAlIAAAUIgBATQgRCBgoBpIAAAnIAAAUQAAAJgFAFQgFAFgKAAIAAAUIAAATIgJAAQACBlgzAkIAAA6IAAATIgKAAQAEA1ghAGIAAATIAAAUQgKAAAAACQhAEAh5C+IAAAUIAAATQgKAAAAACQgQBBgaAxg");
	this.shape_21.setTransform(106.275,249.0125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7E5131").s().p("AgiDWIAAgTIAAkQIAAgUIAAg6QAZgFAEggQACgJABgMIAGAAQAAAJADAJQBDDIhZC+IAAATIgTAAg");
	this.shape_22.setTransform(141.8464,140.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#77AA41").s().p("Ai3KzQgKgBgEgFQgsg/gNhaIABgmQhTCWAGiaIABgUIACg6QAKAAABgCQAtiIgyABQAAgJgEgEQgcgXARg+QA4iYBGiIQADgIABgJQAKAAADgEQA1hChAAfIAAgUIABgTQAgAEgBgqIAKABQBGAagZhUQgDgJAAgKIABgTQAUgJAPgOQAFgEABgKQBFgNAxhkQADgIABgKIABgUQAKgJAMgFQAHgEAKABQAXCKAdAKIAGgcQAlilAvhCQA6gJArgWQAHgEAKABQgBAJgEAFQgGAFgKAAQgGCIANB1IABATQgJAAgCADQhWDkgXEiQgoh6gBiGQgDj2g6CnQgDAxgBAxIgBATIgUgBQgEBYAGBVQAAABAKABIgBAnIgBATQhXg0gRjgIgBATQgLErAaCyIgDgFQhjiEgli+QgUCCARBYQAUBwAKBWQAFAshoiXQgCDGAkCag");
	this.shape_23.setTransform(54.0441,174.9972);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6BA340").s().p("AhtBaQBKhJgSg6QgBgDgKAAQABgKgFgGQgXgZgIgnIA6ADIAUAAQCngBguAjQgtAjAPA0QgZAigdAdQg7A+ghAAQgYAAgJgjg");
	this.shape_24.setTransform(74.5432,41.3107);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#609741").s().p("AhIAYQhHAtgrBIIgTAhQAJhjhag8QCAhDCBhDQA0gaAygFQBogKANgIQBAgpAhAjQgKAAgFAFQhsBRg2g2QgMBVBsgVQAJgCAKABIgBATIgUAAIg6gDQAIAnAXAYQAFAGgBAKQAAAJgFAFQgkAhgoAbQgKAAgBACQgIAdgogOQAAgdAMgZIALgXQhEgzg3DKIgBAKQhFg6A5htg");
	this.shape_25.setTransform(49.925,35.2137);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7EB741").s().p("ArCJ1IgBAUIgBATQgKAAgBgEQgRgkgdASIABgTIABgnQAkgrAYg2QADgIABgKQAJABABgDQAQgygXgaIABgTQAhgFgJg1QgBgJAAgKIABgTQBiiKBZh/IgPgJQgEgCAAgJQDBixENhcQAIgDAKABQBgAEBhgFQABAAAAgKQAvgyA+gVQAugQgFgOQgVhOijA9IgTgBQAAgKAFgFQAKgKgfg2QAAgKAEgCQBsgyiVAVQgPg1AtgiQAugjinABIABgUQD0gKjChBIALgTQG6BaCDF8QABADAJABQgBAnAIAlQAAACAKABQAHA6AQA4QABADAJABIgEBgIgBAUQANCvBXhzQAIgLgUAnQgjA+g8AZQgtAWgkAiQgxAwg1BTQAGhAAYgxQBai/jVC3IgBAUIAAATIgKgBQAAArgfgFQgKAAAAgBQgGhEAChEQAygmAMhMIADgUIAJAAQAKhqiIBlQgBAKAFAFQAFAFAJABQAAAJgFADQhRAvglBcIgCAnIgBATQAAAKgGAEQgEAFgKgBIgEBhIgBAUQgKgBgFgEQgEgGAAgKIgBgTQgNh1AGiIQAKAAAGgFQAEgFABgJQAAgKAFgGQBXh1AihMQgJAAgJAEQiNBEhUCEIgBATIAAAUQguBCglClIgGAcQgdgKgXiKQABgKACgJQAqiTAviOQgKAAgDAEQhcCIhBCkQgIBQAggjQAEgFAKABQgBAKgDAIQgyBkhFANIABgUQAhgOgJg/IgBgTIACgTQAfkthWDJQgDAwgBAxIgBATQAAAKgGAFQgEAEgKAAQgEBOAGBNQABABAJAAQAAAKADAJQAZBUhGgaQAAgKgDgIQgUg2gKhDQAAgJgEgCQgcgPAQg0IABgUQARj0hLDfIgCAmIgBAUQgDBOAGBNQABABAJAAQgKBCAVAkQAEAGAAAKIgBAUQgKgBgEgFQg4hQgnhfQgoAmgEBOQgEBXghBLQgCAFgDAAQgQAAgpiFgADlkJQBRBlB1hAIAPgIQgWg4hHAAQgxAAhHAbg");
	this.shape_26.setTransform(75.0373,93.9711);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#73AB41").s().p("ACMTWIABgTIABgUQAeg5ANhNIACgTQAKAAABgCQAmiXg+APIgBAUQAAAJgFAHQhaB7hBgxQBjhLAbiaQACgJAAgKQAJAAACgCQAnh3g/gjIgBATIAAATQABBJgSAlQhZCwg5hiQAphgAXh0IADgTIABgTQAQj2hJD0IgBATQgBAJgEAIQhOCcAEidIABgTQASjognizIgKgBQATDNhUCkIgCAmIgBATQgJAAgCAEQgPAdgiAEIACgTQA2myi3jWIgKAAQBnElibD5IABgTQAum9jpi7QB0D0htEXQgBADgKAAIABgUQgEjKhPiFQhFiTARDgQAQDIgngvQgFgHgHgMIAAgUQgLh2ghhiQgYhGgjg9IgCgFQgFgMgKgKQA9gaAig+QAVgmgIALQhYBygMivQA1AVAJh0IABgTQBKiuBdiZQAEgHABgJQAKgKAGgLQAEgIABgKQCnjXD9h9QAEgCAAgKQBWgoBugTQACAAABgKQB6gSCWAKIAUABQguAtCbAnQCAAhBWBJIgdgBQCFBegPBqIgLAJQgOgZgEAIQgcA6gtA+QgTgVgMghQhdjwgLD5QgKAAgCAEIgJAPQghhShJidQgKAAgBACQgJAkAJDXIgBAKQhSiLhliEIgKAAQBDCGgeCMQABgKgFgIQhJiRilg+QBXBhAjCPQACAJAAAKQDrBKDKBtQADACAAAKQhSANCLBQQBnA7BnBJQAAAKgGAFQgFAEgJAAQAOArAqAPQAJAEAKAAQAjB6B8COQAFAGgBAJIAAAKQgUgBgTgLQAAAmANAYQAEAHgBAKQgJgBgBgDQgUg0gsgZIgGCIIAAATQgKAAgDAEIgIAPQg8hfhAjJQgKgBgBAEQghA8g+B9QgMAsACgsQAJj7iHjKIgJAAQA1C/g9DZQgKgBAAgBQgkktioiuQAAAKAEAIQBLCTgjCpIAAAKQhijujEicQAAAKAEAGQCUCrg4EJQABgJgDgJQhelKlLh2QABgKgCAAQgvgMgxgCQAEArA1gBIAUABQCHBuA/CtQAEAIgBAKQEoCmCKE8QACAEAKABQAbA6gbAqQgFAHAAAKQA5BXAdBwQACAJAAAKIgBATIgBAUIgTgBQAHA7AQA4QABADAKAAIgCAnIgBAUIgJgBQADgogfAAQgCAeAIAaQABADAKABQAhCcgtBqIABgdQABgKgCgJQgehxgrAzIgBAUQAAAJgDAJQgkByg6AAIgGgBgAqXlWQB0CADfAdQABgKgFgFQhviEjkgYQgBAKAFAEgAm6p1QABAAABgJQAJAAAJgDQCWgwjMgKQgKAAgFAEQgcAgg5gBQAqAuBcgLgAmwtBQBRAcBGAoQAeASAXAMQB6BAAphEQgKgBgEgFQhRhpiRAAQg6AAhFARg");
	this.shape_27.setTransform(233.8525,127.5243);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape}]},3).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape}]},3).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-3.6,329,383.6);


(lib.sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC5A").ss(7,1,1).p("ACml/IBWjvADrk7IDMjNAE4D3ICRBNAFAjVIERiIAFig7IDmgRAFzBdIErBFAi3l/IgqiAABRl/IgRiAAg2mZIg8jmAkdk7IiJjWAmEjEIiAhEAmVg7IkIgrAmECAIiRARAhZGRIgiDvAAmF4IA8CiAjQGJIhWB3ACeFNICRDVAk/EJIjWCA");
	this.shape.setTransform(67,64);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFCC00","#FFCC66"],[0,1],0,0,0,0,0,34.3).s().p("AjuDuQhihiAAiMQAAiLBihiQBjhjCLAAQCMAABiBjQBjBiAACLQAACMhjBiQhiBjiMAAQiLAAhjhjg");
	this.shape_1.setTransform(64.425,62.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFCC5A").ss(7,1,1).p("AGAi3ICAgqAE8kdIDWiJADFmEIBEiAAGABRICAgRAGACmIDvBWAGag2IDmg8Ah/mEIgRiRAmIjQIh3hWAmQhZIjvgiAl3AmIiiA8AlMCeIjVCRAkIk/IiAjWAA8FiIARDmAhdFzIhEErAE8DrIDNDMAj2E4IhNCRADVFAICJERAA8mVIArkI");
	this.shape_2.setTransform(67,64);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFCC00","#FFCC66"],[0,1],0,0,0,0,0,34.3).s().p("AjtDuQhjhiAAiMQAAiLBjhjQBjhiCKAAQCMAABjBiQBiBjAACLQAACMhiBiQhjBjiMAAQiKAAhjhjg");
	this.shape_3.setTransform(68.3,61.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFCC5A").ss(7,1,1).p("ADRmIIBWh3AFAkIIDWiAAGEDFICBBEAGEh/ICSgRAGWA8IEIArABamQIAijvAgml3Ig7iiAk3j2IiRhNAlhA8IjmARAidlMIiRjVAlyhdIkrhEAhQGAIARCAAilGAIhWDvAA3GaIA8DmAC3GAIArCAAEeE8ICJDWAjqE8IjMDNAk/DVIkRCJ");
	this.shape_4.setTransform(67,64);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFCC00","#FFCC66"],[0,1],0,0,0,0,0,34.3).s().p("AjtDvQhjhkAAiLQAAiLBjhiQBihjCLAAQCMAABjBjQBiBiAACLQAACLhiBkQhjBiiMAAQiLAAhihig");
	this.shape_5.setTransform(69.575,65.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFCC5A").ss(7,1,1).p("AD3k3IBNiRAGJDRIB3BWAF4gmICig7AGRBaIDvAiAFNidIDViRAg7lhIgRjmAl/ilIjvhWAk7jqIjNjMAl/hQIiAARAmZA3IjmA8Al/C3IiAArAjVk/IiIkRAjEGEIhECBAg7GWIgrEIAEJFAICADWACAGEIARCSAk7EeIjWCJABdlyIBFkr");
	this.shape_6.setTransform(67,64);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFCC00","#FFCC66"],[0,1],0,0,0,0,0,34.3).s().p("AjuDvQhihjAAiMQAAiLBihiQBjhjCLAAQCLAABjBjQBjBiAACLQAACMhjBjQhjBiiLAAQiLAAhjhig");
	this.shape_7.setTransform(65.7,66.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFCC5A").ss(7,1,1).p("ACml/IBWjvADrk7IDMjNAE4D3ICRBNAFig7IDmgRAFAjVIERiIAFzBdIErBFABRl/IgRiAAg2mZIg8jmAi3l/IgqiAAmEjEIiAhEAkdk7IiJjWAmVg7IkIgrAmECAIiRARAAmF4IA8CiAhZGRIgiDvAjQGJIhWB3ACeFNICRDVAk/EJIjWCA");
	this.shape_8.setTransform(67,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},6).to({state:[{t:this.shape_5},{t:this.shape_4}]},6).to({state:[{t:this.shape_7},{t:this.shape_6}]},6).to({state:[{t:this.shape_1},{t:this.shape_8}]},6).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-6.5,141,141);


(lib.sea2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBFFFD").s().p("EgxhACZQBWFFHzk+QK9lyJKiAQF/hUFOAUQD+APDwAxQBWARBUAWQD5BAETBxQCdBBETB7QDpBmCbAmQDMAyC9gXQDVgaQxBFIA/AEQiLAAiCACQtUAOjVAaQi9AXjMgyQiagmjqhlQkTh9idg/QkThyj5hAQlAhSlXgVQtNgyyIJkQj3CeiRAAQi5AAgXj+g");
	this.shape.setTransform(320.975,40.7074);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8BD8E5").s().p("EgynAKaIAEhaIAjsIIAAgEIABAIQApHFIvllQSIplNNAyQFXAVFABSQD5BAETByQCdBAETB9QDqBlCaAmQDMAyC9gXQDVgaNUgOQCCgCCLAAIBkABQk1B9k+CnQjmB5ipBPQioBPihA2QihA1kbAiQkbAiqym5Qqxm4nLgbQnLgb1UJZIqJhKIgFBlIgvgFIgNEuIgWgCg");
	this.shape_1.setTransform(323.975,75.733);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBFFFD").s().p("EgxhADKQBWGtHzmkQK9noJKiqQF/huFOAaQD+AUDwBAQBWAYBUAcQD5BUETCWQCdBVETCjQDpCGCbAyQDMBCC9geQDVgiQxBbIA/AGQiLAAiCACQtUATjVAiQi9AfjMhCQiagzjqiFQkTilidhUQkTiWj5hUQlAhslXgcQtNhDyIMpQj3DQiRAAQi5AAgXlPg");
	this.shape_2.setTransform(320.975,30.9695);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8BD8E5").s().p("EgynANuIAEh2IAjwAIAAgFIABAKQApJWIvnXQSIsqNNBDQFXAcFABsQD5BUETCWQCdBVETClQDqCFCaAzQDMBCC9gfQDVgiNUgTQCCgCCLAAIBkAAQk1Cmk+DdQjmCfipBoQioBoihBHQihBHkbAtQkbAsqypFQqxpFnLgkQnLgj1UMYIqJhhIgFCGIgvgIIgNGPIgWgDg");
	this.shape_3.setTransform(323.975,77.1689);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},5).to({state:[{t:this.shape_1},{t:this.shape}]},6).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-22.7,648,188);


(lib.sea1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2E0F8").s().p("AyJKpQmugfhugNQhvgNmFgpQkUh8ichBQkThxj5hAQlChSlXgVQtNgzxME9IqJhKIgHCWQgSAIgTALIABgYIADgwIANkuIAvAFIJaBFQVUpZHLAbQHLAbKyG4QKyG5EbgiQEbgiChg1QChg2CohPQCphPDmh5QTIqDQ8ghQRngiNxJ5QCYBsDUgcQChgVDkhrQCBg+Dqh7QC9hcIgjnQIgjoCjDyQCkDyAOAKQANAKBLAQIgIHzIgPAAIgChlQhcAshxAQQhpAOidgGQh1gEjygVQmQgkhggHQhdgIi7AiQjoAuiCAWQn0BVoyAbQozAauOCHQuNCGtwAzQomAgl3AAQjfAAihgLg");
	this.shape.setTransform(646.05,75.4115);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBFFFD").s().p("EBkTAO0IAAukIgYgBIAInzQhLgQgNgKQgOgKijjyQikjyogDoQofDni9BcQjrB7iBA+QjkBsihAVQjUAciXhtQtxp5xnAiQw9AhzHKEQjmB5ipBOQioBPiiA2QihA1kaAiQkbAiqym4Qqym5nMgbQnLgb1UJaIpZhFIAEhlIKJBKQVUpaHLAbQHLAbKyG5QKzG4EbgiQEagiChg1QChg2CohOQCphPDmh5QE+inE1h+QNuloMjgYQRngiNxJ5QCYBtDUgcQChgVDkhsQCBg+Dqh7QC9hcE1iuQEziuFiAwQFiAwA7CSQA7CTBLAQIgPNFIgLKzg");
	this.shape_1.setTransform(651.8,94.8311);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B2E0F8").s().p("AyJM6QmuglhugQQhvgQmFgxQkUiXichOQkTiKj5hOQlChjlXgaQtNg9xMGAIqJhaIgHC3QgSAJgTANIABgdIADg6IANlvIAvAHIJaBTQVUrYHLAgQHLAhKyIWQKyIWEbgoQEbgpChhBQChhCCohgQCphgDmiSQTIsNQ8gnQRngqNxMBQCYCDDUgiQChgaDkiCQCBhLDqiWQC9hvIgkYQIgkZCjElQCkElAOAMQANANBLAUIgIJdIgPgBIgCh6QhcA2hxATQhpARidgHQh1gFjygaInwg0QhdgJi7ApQjoA4iCAbQn0BmoyAhQozAguOCjQuNCjtwA+QonAnl2AAQjgAAiggOg");
	this.shape_2.setTransform(646.05,66.4443);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBFFFD").s().p("EBkTAR+IAAxrIgYAAIAIpeQhLgUgNgMQgOgMijklQikkmogEZQofEZi9BvQjrCWiBBKQjkCEihAZQjUAiiXiEQtxsAxnApQw9AozHMOQjmCSipBfQioBgiiBBQihBBkaApQkbApqyoVQqyoXnMghQnLgh1ULaIpZhTIAEh7IKJBZQVUrZHLAgQHLAhKyIXQKzIVEbgoQEagpChhBQChhCCohfQCphfDmiTQE+jLE1iZQNum0MjgdQRngqNxMBQCYCEDUgiQChgaDkiDQCBhLDqiWQC9hvE1jTQEzjTFiA6QFiA6A7CyQA7CyBLAUIgPP3IgLNGg");
	this.shape_3.setTransform(651.8,89.9747);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},4).to({state:[{t:this.shape_1},{t:this.shape}]},7).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25,1297.3,230);


(lib.animatecloud4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3EBFF").s().p("A23NYQgOgQgLgSQhfAMhxAAQjEAAiKgkQiLgkAAgyQAAgyCLglQCKgjDEAAQByAABeAMQAqhBBcg2QCmheDrAAQCbAAB8ApQgJgeAAghQAAiBCahbQCbhcDaAAQDFAACSBMQgIgkAAgoQAAibCDhvQCChvC5AAQBfAABSAeQAggtAzglQCKhoDEAAQCQAABxA5QAEizBqh+QBviBCdAAQCdAABuCBQAQASANAUIAAAVIAOAAIAGAKIAAXpg");
	this.shape.setTransform(217.025,85.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.animatecloud4, new cjs.Rectangle(0,0,434.1,171.3), null);


(lib.animatecloud3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#CCCCCC"],[0,1],-153.3,-0.6,0,-153.3,-0.6,357.7).s().p("A+YHeIAAtDQAVgZAegXQBjhICMAAQCNAABjBIQBfBHADBjQBmgfCAAAQCwAAB7A6QAuAVAdAZQBIgRBWAAQClAAB1A+QB1A+AABWQAAAWgIAUQCDgqCxAAQDDAACKAzQCKAzAABIQAAASgJARQBwgXCKAAQDTAACUA1QBTAeAlAkQBUgHBmAAQCvAAB8AUQB8AVAAAcQAAAch8AUQh8AUivAAQhlAAhVgHQgKAKgNAJg");
	this.shape.setTransform(194.525,47.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.animatecloud3, new cjs.Rectangle(0,0,389.1,95.7), null);


(lib.animatecloud2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtfFLQgwgGglgOQg6gYAAghQAAgiA6gXQA6gYBSAAQAWAAAUACQAIg+AgguQAsg/A+AAQAZAAAWAKQAIg5AigsQAug7BAAAQAzABAoAlQAPhSAghEQA+iABXAAQBXAAA8CAQAVArAOAyQAigSAnAAQBaAABABZQAyBGALBZQAwgaA6ABQBjAABGBMQAnArASA0QAegCAhAAQByAABRAaQBRAaAAAlQAAAlhRAaQg6AThMAFIgZABIgTAAIAAABg");
	this.shape.setTransform(100.725,38.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.animatecloud2, new cjs.Rectangle(0,0,201.5,77.4), null);


(lib.animatecloud1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBEBEB").s().p("Ap2GGQiVgBhsgPQhwgQgBgWQABgWBwgQQAZgEAbgDIgLgFQhNgnAAg4QAAg4BNgnQAzgaBBgJQAFhzBphTQBvhYCdAAQAhAAAeAEQASg7AkgyQBHhkBlAAQBkAABHBkQA3BMAOBlQAbgIAeAAQBXAAA9BCQA9BBAABdQAAAogLAiQAvgLA1AAQBrAABLAqQBMApAAA7IgBANIAdAAQBLAAA2ARQA1ARAAAYQAAAYg1AQQg2AShLAAQgvAAglgGQgYgFgUgGQgOAGgOAFIj+ABQjbAnj/AAQkHAAktgpg");
	this.shape.setTransform(100.05,43.1378);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.animatecloud1, new cjs.Rectangle(0,0,200.1,86.3), null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.trashBag1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path();
	this.instance.setTransform(70.45,93.15,1.8693,1.8693,0,0,0,16.6,9.8);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "screen";

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(69.3,157.35,1.8693,1.8693,0,0,0,24.8,12);
	this.instance_1.alpha = 0.5;
	this.instance_1.compositeOperation = "screen";

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(72.85,123.55,1.8693,1.8693,0,0,0,18.3,13.5);
	this.instance_2.alpha = 0.5;
	this.instance_2.compositeOperation = "screen";

	this.instance_3 = new lib.Group_1();
	this.instance_3.setTransform(71.25,124.85,1.8693,1.8693,0,0,0,27.4,26.9);
	this.instance_3.compositeOperation = "multiply";

	this.instance_4 = new lib.Path_3();
	this.instance_4.setTransform(78.35,62.5,1.8693,1.8693,0,0,0,22.3,21.8);
	this.instance_4.alpha = 0.5;
	this.instance_4.compositeOperation = "multiply";

	this.instance_5 = new lib.Path_4();
	this.instance_5.setTransform(78.35,54.8,1.8693,1.8693,0,0,0,22.3,25.9);
	this.instance_5.alpha = 0.5;
	this.instance_5.compositeOperation = "multiply";

	this.instance_6 = new lib.Group_2();
	this.instance_6.setTransform(65.55,128,1.8693,1.8693,0,0,0,35.1,31.6);
	this.instance_6.alpha = 0.5;
	this.instance_6.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F4F51").s().p("AhYHxQgogIhAghQhAgignghQgwgogFgPQgLgbAigxQAxhHAjhMIgCgiQABgkAKgJIBIg+IgPg+QgEgCgDgFQgIgKAAgOQgCguBDhGICEibQAzg6AhgXQA5gnAqAZQAkAeAkA+QATAhAjBLQAcA5ABAPQADAagaAtQgkBEAVAsQAQAbAJAVQAPAngBAvIAFCQQADBggKAfQgLAhglAaIg5AhIgYAUQgJAHgZgCQgNgBh1AIQg9AFglAAQgbAAgOgDg");
	this.shape.setTransform(65.792,93.472,1.8693,1.8693);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.trashBag1, new cjs.Rectangle(0,0,131.6,186.9), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhKDeIhQhNQgvgtgNgVQgQgZAUglQAQgeA8hGQBKhWAyg1QBEg/A/AxQAoAfAcA+QAsBkgOBFQgHAmg0BCQgqA1gtApQgkAhglABIgBAAQgmAAgjgkg");
	mask.setTransform(23.9779,25.8044);

	// Layer_3
	this.instance = new lib.Path_14();
	this.instance.setTransform(24.15,46.3,1,1,0,0,0,16.2,8.7);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.CachedBmp_170();
	this.instance_1.setTransform(9.05,34.7,0.2675,0.2675);

	this.instance_2 = new lib.Group_0();
	this.instance_2.setTransform(7.75,36.85,1,1,0,0,0,2.5,3);
	this.instance_2.alpha = 0.5;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Path_13();
	this.instance_3.setTransform(7.85,36.8,1,1,0,0,0,2.6,3);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.Path_12();
	this.instance_4.setTransform(35.45,48.15,1,1,0,0,0,3.5,6.3);
	this.instance_4.alpha = 0.3984;
	this.instance_4.compositeOperation = "multiply";

	this.instance_5 = new lib.CachedBmp_169();
	this.instance_5.setTransform(7.75,33.7,0.2675,0.2675);

	this.instance_6 = new lib.Path_1_4();
	this.instance_6.setTransform(21.45,44.95,1,1,0,0,0,11.7,8.7);
	this.instance_6.alpha = 0.3984;
	this.instance_6.compositeOperation = "multiply";

	this.instance_7 = new lib.Path_2_5();
	this.instance_7.setTransform(21.25,45.65,1,1,0,0,0,13.5,9.6);
	this.instance_7.alpha = 0.3984;
	this.instance_7.compositeOperation = "multiply";

	this.instance_8 = new lib.Path_2_4();
	this.instance_8.setTransform(24.15,44.4,1,1,0,0,0,16.2,10.5);
	this.instance_8.alpha = 0.5;

	this.instance_9 = new lib.Path_11();
	this.instance_9.setTransform(11.25,35.65);

	this.instance_10 = new lib.Path_1_3();
	this.instance_10.setTransform(12.95,47);

	this.instance_11 = new lib.Path_2_3();
	this.instance_11.setTransform(10.9,42.65,1,1,0,0,0,1.9,2.5);
	this.instance_11.compositeOperation = "screen";

	this.instance_12 = new lib.Group();
	this.instance_12.setTransform(6.85,31.45,1,1,0,0,0,1.4,3.5);
	this.instance_12.alpha = 0.8984;

	this.instance_13 = new lib.Path_10();
	this.instance_13.setTransform(8.45,35.95,1,1,0,0,0,7,1.9);
	this.instance_13.compositeOperation = "multiply";

	this.instance_14 = new lib.Path_3_4();
	this.instance_14.setTransform(13.35,42.45,1,1,0,0,0,4.2,8.4);
	this.instance_14.compositeOperation = "multiply";

	this.instance_15 = new lib.Group_2_0();
	this.instance_15.setTransform(4.55,44.6,1,1,0,0,0,2.1,3.8);
	this.instance_15.alpha = 0.6992;
	this.instance_15.compositeOperation = "multiply";

	this.instance_16 = new lib.CachedBmp_367();
	this.instance_16.setTransform(2.5,28.2,0.2675,0.2675);

	this.instance_17 = new lib.Group_3();
	this.instance_17.setTransform(5.45,45,1,1,0,0,0,4,7.7);
	this.instance_17.compositeOperation = "multiply";

	this.instance_18 = new lib.CachedBmp_167();
	this.instance_18.setTransform(1.45,34.05,0.2675,0.2675);

	this.instance_19 = new lib.Group_4();
	this.instance_19.setTransform(4.35,30.05,1,1,0,0,0,4.1,4.7);
	this.instance_19.compositeOperation = "multiply";

	this.instance_20 = new lib.Path_9();
	this.instance_20.setTransform(7.85,34.2,1,1,0,0,0,7.5,1.9);
	this.instance_20.alpha = 0.8984;

	this.instance_21 = new lib.Path_1_2();
	this.instance_21.setTransform(8.05,35,1,1,0,0,0,7.7,2.5);
	this.instance_21.alpha = 0.8984;

	this.instance_22 = new lib.Path_8();
	this.instance_22.setTransform(7.7,31.3,1,1,0,0,0,1.9,3.5);
	this.instance_22.alpha = 0.8984;

	this.instance_23 = new lib.Path_1_1();
	this.instance_23.setTransform(4.25,32,1,1,0,0,0,3.4,3.8);
	this.instance_23.alpha = 0.8984;

	this.instance_24 = new lib.Path_2_2();
	this.instance_24.setTransform(11.05,31,1,1,0,0,0,3.6,3.3);
	this.instance_24.alpha = 0.8984;

	this.instance_25 = new lib.CachedBmp_166();
	this.instance_25.setTransform(0,24.1,0.2675,0.2675);

	this.instance_26 = new lib.Path_7();
	this.instance_26.setTransform(6.1,27.4);

	this.instance_27 = new lib.CachedBmp_366();
	this.instance_27.setTransform(17.3,24.7,0.2675,0.2675);

	this.instance_28 = new lib.Path_2_1();
	this.instance_28.setTransform(15.75,39.55,1,1,0,0,0,9.6,7.4);
	this.instance_28.compositeOperation = "multiply";

	this.instance_29 = new lib.Path_3_3();
	this.instance_29.setTransform(14.65,36.2,1,1,0,0,0,10.7,10.7);
	this.instance_29.compositeOperation = "multiply";

	this.instance_30 = new lib.CachedBmp_164();
	this.instance_30.setTransform(3.95,25.5,0.2675,0.2675);

	this.instance_31 = new lib.Path_6();
	this.instance_31.setTransform(26.45,24.75,1,1,0,0,0,4.8,5.9);
	this.instance_31.compositeOperation = "multiply";

	this.instance_32 = new lib.CachedBmp_163();
	this.instance_32.setTransform(21.3,18.85,0.2675,0.2675);

	this.instance_33 = new lib.Path_0();
	this.instance_33.setTransform(35.05,28.65);
	this.instance_33.compositeOperation = "screen";

	this.instance_34 = new lib.Path_1_0();
	this.instance_34.setTransform(38.45,30.7,1,1,0,0,0,3.8,0.7);
	this.instance_34.compositeOperation = "screen";

	this.instance_35 = new lib.Path_2_0();
	this.instance_35.setTransform(28.4,51.1,1,1,0,0,0,0.3,1.3);
	this.instance_35.compositeOperation = "screen";

	this.instance_36 = new lib.Path_3_2();
	this.instance_36.setTransform(28.05,42.4,1,1,0,0,0,1.8,2.5);
	this.instance_36.compositeOperation = "screen";

	this.instance_37 = new lib.Path_4_1();
	this.instance_37.setTransform(34.25,32,1,1,0,0,0,2.7,0.8);
	this.instance_37.compositeOperation = "screen";

	this.instance_38 = new lib.Path_5();
	this.instance_38.setTransform(37.15,40.6,1,1,0,0,0,1.9,3.4);
	this.instance_38.compositeOperation = "screen";

	this.instance_39 = new lib.CachedBmp_162();
	this.instance_39.setTransform(17.65,29.5,0.2675,0.2675);

	this.instance_40 = new lib.CachedBmp_365();
	this.instance_40.setTransform(16.95,28.15,0.2675,0.2675);

	this.instance_41 = new lib.Path_3_1();
	this.instance_41.setTransform(29.65,47.9,1,1,0,0,0,2.9,1.9);
	this.instance_41.alpha = 0.3984;
	this.instance_41.compositeOperation = "multiply";

	this.instance_42 = new lib.CachedBmp_160();
	this.instance_42.setTransform(26.8,45.95,0.2675,0.2675);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(1.8,18.9,41.900000000000006,32.800000000000004), null);


(lib.childmetalDetectorstend6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.metalDetectorStend();
	this.instance.setTransform(112.25,159.55,0.2807,0.2807,45,0,0,255.5,160.6);

	this.instance_1 = new lib.CachedBmp_359();
	this.instance_1.setTransform(-0.2,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childmetalDetectorstend6, new cjs.Rectangle(-0.2,0.1,199,246), null);


(lib.childmetalDetectorstend5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_150();
	this.instance.setTransform(99.4,137.25,0.5,0.5);

	this.instance_1 = new lib.metalDetectorStend();
	this.instance_1.setTransform(133.6,157.5,0.2807,0.2807,45,0,0,255.5,160.6);

	this.instance_2 = new lib.CachedBmp_358();
	this.instance_2.setTransform(-0.2,0.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childmetalDetectorstend5, new cjs.Rectangle(-0.2,0.2,220.29999999999998,243.8), null);


(lib.childmetalDetectorstend4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.metalDetectorStend();
	this.instance.setTransform(123.65,157.7,0.2807,0.2807,45,0,0,255.5,160.6);

	this.instance_1 = new lib.CachedBmp_357();
	this.instance_1.setTransform(-0.1,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childmetalDetectorstend4, new cjs.Rectangle(-0.1,0.1,210.29999999999998,244.1), null);


(lib.childmetalDetectorstend3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.metalDetectorStend();
	this.instance.setTransform(111.9,160.35,0.2807,0.2807,45,0,0,255.5,160.6);

	this.instance_1 = new lib.CachedBmp_356();
	this.instance_1.setTransform(-0.05,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childmetalDetectorstend3, new cjs.Rectangle(0,0.1,198.4,246.8), null);


(lib.childmetalDetectorstend2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.metalDetectorStend();
	this.instance.setTransform(124.8,155.55,0.2807,0.2807,45,0,0,255.5,160.6);

	this.instance_1 = new lib.CachedBmp_355();
	this.instance_1.setTransform(0,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childmetalDetectorstend2, new cjs.Rectangle(0,0.1,211.3,242), null);


(lib.childmetalDetectorstend1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.metalDetectorStend();
	this.instance.setTransform(144.5,156.1,0.2807,0.2807,45,0,0,255.5,160.6);

	this.instance_1 = new lib.CachedBmp_354();
	this.instance_1.setTransform(0.1,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childmetalDetectorstend1, new cjs.Rectangle(0.1,0.1,230.9,242.5), null);


(lib.Scene_1_can = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// can
	this.instance = new lib.can();
	this.instance.setTransform(936.65,669.65,0.0096,0.0096,0,0,0,1342.9,980);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(335).to({_off:false},0).wait(148));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,949.4,678.9);


(lib.REDchild_metalDetector3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.REDmetalDetector();
	this.instance.setTransform(170.6,202.2,0.3069,0.3069,0,0,0,254.8,161.2);

	this.instance_1 = new lib.child3();
	this.instance_1.setTransform(51.7,115.5,1,1,0,0,0,51.7,115.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.REDchild_metalDetector3, new cjs.Rectangle(0,0,252.1,254.5), null);


(lib.REDchild_metalDetector1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.REDmetalDetector();
	this.instance.setTransform(544.15,560.2,0.8845,0.8845,0,0,0,255.2,160.8);

	this.instance_1 = new lib.child1();
	this.instance_1.setTransform(190.65,328.75,5.7779,5.7779,0,0,0,33,56.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.REDchild_metalDetector1, new cjs.Rectangle(0,-3.4,778.7,714.6), null);


(lib.headchild = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.REDmetalDetector();
	this.instance.setTransform(158.9,201.5,0.3069,0.3069,0,0,0,254.8,161.2);

	this.instance_1 = new lib.CachedBmp_353();
	this.instance_1.setTransform(0,0.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headchild, new cjs.Rectangle(0,0.1,240.4,253.70000000000002), null);


(lib.child_metalDetector6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.metalDetector();
	this.instance.setTransform(171.4,204.95,0.3109,0.3109,0,0,0,243.3,267.4);

	this.instance_1 = new lib.child6();
	this.instance_1.setTransform(53,118.5,1,1,0,0,0,53,118.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.child_metalDetector6, new cjs.Rectangle(0,0,253.9,258.1), null);


(lib.child_metalDetector5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hand
	this.instance = new lib.CachedBmp_132();
	this.instance.setTransform(98.95,136.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// metalDetector
	this.instance_1 = new lib.metalDetector();
	this.instance_1.setTransform(193.8,200.95,0.3109,0.3109,0,0,0,243.3,267.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// child
	this.instance_2 = new lib.child5();
	this.instance_2.setTransform(64.2,117.6,1,1,0,0,0,64.2,117.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.child_metalDetector5, new cjs.Rectangle(0,0,276.3,254.1), null);


(lib.child_metalDetector4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.metalDetector();
	this.instance.setTransform(184.35,204,0.3109,0.3109,0,0,0,243.3,267.4);

	this.instance_1 = new lib.child4();
	this.instance_1.setTransform(58,116.5,1,1,0,0,0,58,116.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.child_metalDetector4, new cjs.Rectangle(0,0,266.8,257.1), null);


(lib.child_metalDetector3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.metalDetector();
	this.instance.setTransform(168.95,201.25,0.3109,0.3109,0,0,0,243.3,267.4);

	this.instance_1 = new lib.child3();
	this.instance_1.setTransform(51.7,115.5,1,1,0,0,0,51.7,115.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.child_metalDetector3, new cjs.Rectangle(0,0,251.4,254.4), null);


(lib.child_metalDetector2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.metalDetector();
	this.instance.setTransform(184.3,204.75,0.3109,0.3109,0,0,0,243.3,267.4);

	this.instance_1 = new lib.child2();
	this.instance_1.setTransform(59.9,118,1,1,0,0,0,59.9,118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.child_metalDetector2, new cjs.Rectangle(0,0,266.8,257.9), null);


(lib.child_metalDetector1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.metalDetector();
	this.instance.setTransform(857.2,524.6,0.8308,0.8308,0,0,0,300.4,213.8);

	this.instance_1 = new lib.child1();
	this.instance_1.setTransform(456.15,328.75,5.7779,5.7779,0,0,0,33,56.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.child_metalDetector1, new cjs.Rectangle(265.5,-3.4,764.7,714.4), null);


(lib.childjump5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.metalDetectorStend();
	this.instance.setTransform(128,197.4,0.2807,0.2807,45,0,0,255.5,160.6);

	this.instance_1 = new lib.CachedBmp_345();
	this.instance_1.setTransform(-0.4,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childjump5, new cjs.Rectangle(-0.4,0.1,214.9,283.79999999999995), null);


(lib.childjump3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.metalDetectorStend();
	this.instance.setTransform(128.3,188.5,0.2807,0.2807,45,0,0,255.5,160.6);

	this.instance_1 = new lib.CachedBmp_344();
	this.instance_1.setTransform(-0.4,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childjump3, new cjs.Rectangle(-0.4,0.1,215.20000000000002,274.9), null);


(lib.childjump2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.metalDetectorStend();
	this.instance.setTransform(123.55,159.1,0.2807,0.2807,45,0,0,255.5,160.6);

	this.instance_1 = new lib.CachedBmp_343();
	this.instance_1.setTransform(-0.3,0.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childjump2, new cjs.Rectangle(-0.3,0.1,210.4,245.5), null);


(lib.childjump1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.metalDetectorStend();
	this.instance.setTransform(122.5,174,0.2807,0.2807,45,0,0,255.5,160.6);

	this.instance_1 = new lib.CachedBmp_342();
	this.instance_1.setTransform(-0.25,0.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childjump1, new cjs.Rectangle(-0.2,0.1,209.2,260.4), null);


(lib.childdownbag5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_332();
	this.instance.setTransform(48.7,114.4,0.5,0.5);

	this.instance_1 = new lib.trashBag1();
	this.instance_1.setTransform(62.25,181.5,0.4717,0.4717,0,0,0,65.8,93.5);

	this.instance_2 = new lib.CachedBmp_331();
	this.instance_2.setTransform(0.1,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childdownbag5, new cjs.Rectangle(0.1,0.1,173.5,225.5), null);


(lib.childdownbag4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_330();
	this.instance.setTransform(45.15,117.7,0.5,0.5);

	this.instance_1 = new lib.trashBag1();
	this.instance_1.setTransform(58.85,181.55,0.4717,0.4717,0,0,0,65.8,93.5);

	this.instance_2 = new lib.CachedBmp_329();
	this.instance_2.setTransform(0.1,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childdownbag4, new cjs.Rectangle(0.1,0.1,165.5,225.5), null);


(lib.childdownbag3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_328();
	this.instance.setTransform(44.25,108.55,0.5,0.5);

	this.instance_1 = new lib.trashBag1();
	this.instance_1.setTransform(42.8,181.5,0.4717,0.4717,0,0,0,65.8,93.5);

	this.instance_2 = new lib.CachedBmp_327();
	this.instance_2.setTransform(0.05,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childdownbag3, new cjs.Rectangle(0.1,0.1,151,225.5), null);


(lib.childdownbag2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_326();
	this.instance.setTransform(42.75,113.1,0.5,0.5);

	this.instance_1 = new lib.trashBag1();
	this.instance_1.setTransform(31.05,179.25,0.4717,0.4717,0,0,0,65.8,93.5);

	this.instance_2 = new lib.CachedBmp_325();
	this.instance_2.setTransform(4.45,0.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childdownbag2, new cjs.Rectangle(0,0.2,129.5,225.5), null);


(lib.childdownbag1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_110();
	this.instance.setTransform(47.9,111.15,0.5,0.5);

	this.instance_1 = new lib.trashBag1();
	this.instance_1.setTransform(31.05,178.85,0.4717,0.4717,0,0,0,65.8,93.5);

	this.instance_2 = new lib.CachedBmp_324();
	this.instance_2.setTransform(15.15,0.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childdownbag1, new cjs.Rectangle(0,0.2,127.2,240), null);


(lib.childbag6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.trashBag1();
	this.instance.setTransform(31.05,199.45,0.4717,0.4717,0,0,0,65.8,93.5);

	this.instance_1 = new lib.CachedBmp_322();
	this.instance_1.setTransform(29.8,0.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childbag6, new cjs.Rectangle(0,0.1,136.3,243.4), null);


(lib.childbag5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_106();
	this.instance.setTransform(36.95,137.4,0.5,0.5);

	this.instance_1 = new lib.trashBag1();
	this.instance_1.setTransform(31.05,197.4,0.4717,0.4717,0,0,0,65.8,93.5);

	this.instance_2 = new lib.CachedBmp_321();
	this.instance_2.setTransform(30.05,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childbag5, new cjs.Rectangle(0,0.1,159.1,241.4), null);


(lib.childbag4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_104();
	this.instance.setTransform(50.75,150.55,0.5,0.5);

	this.instance_1 = new lib.trashBag1();
	this.instance_1.setTransform(31.05,197.6,0.4717,0.4717,0,0,0,65.8,93.5);

	this.instance_2 = new lib.CachedBmp_320();
	this.instance_2.setTransform(31.9,0.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childbag4, new cjs.Rectangle(0,0.1,149.9,241.6), null);


(lib.childbag3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.trashBag1();
	this.instance.setTransform(31.05,197.65,0.4717,0.4717,0,0,0,65.8,93.5);

	this.instance_1 = new lib.CachedBmp_319();
	this.instance_1.setTransform(31.1,0.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childbag3, new cjs.Rectangle(0,0.1,138.1,241.6), null);


(lib.childbag2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.trashBag1();
	this.instance.setTransform(31.05,198.95,0.4717,0.4717,0,0,0,65.8,93.5);

	this.instance_1 = new lib.CachedBmp_318();
	this.instance_1.setTransform(32,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childbag2, new cjs.Rectangle(0,0.1,148.5,242.9), null);


(lib.childbag1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.trashBag1();
	this.instance.setTransform(31.05,185.8,0.4717,0.4717,0,0,0,65.8,93.5);

	this.instance_1 = new lib.CachedBmp_317();
	this.instance_1.setTransform(31.9,0.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childbag1, new cjs.Rectangle(0,0.1,169.9,236), null);


(lib.Group_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7A8AB").s().p("AhUCRQgDhIAVhWQAWhcAkhBQAjhAAggFQAYAYACBGQADBIgVBYQgVBcgkBAQgjA/ghAGQgYgXgChIg");
	this.shape.setTransform(11.1253,24.9);

	this.instance_1 = new lib.Path_1_0_1();
	this.instance_1.setTransform(8.5,24.4,1,1,0,0,0,8.5,24.4);
	this.instance_1.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,19.7,49), null);


(lib.Group_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A7A8AB").s().p("AjgBHQhkgIgYgZQAQgdBggcQBjgeCEgOQCBgOBmAHQBjAIAYAZQgQAdhgAdQhjAdiEAOQhUAJhIAAQgnAAgjgCg");
	this.shape_1.setTransform(35.525,9.675);

	this.instance = new lib.Path_1_7();
	this.instance.setTransform(35.4,6.8,1,1,0,0,0,35.4,6.8);
	this.instance.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4_1, new cjs.Rectangle(0,0,70.7,17), null);


(lib.cloud4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.animatecloud4();
	this.instance.setTransform(217,85.6,1,1,0,0,0,217,85.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:223.35},0).wait(1).to({x:229.7},0).wait(1).to({x:236.05},0).wait(1).to({x:242.45},0).wait(1).to({x:248.8},0).wait(1).to({x:255.15},0).wait(1).to({x:261.5},0).wait(1).to({x:267.9},0).wait(1).to({x:274.25},0).wait(1).to({x:280.6},0).wait(1).to({x:287},0).wait(1).to({x:293.35},0).wait(1).to({x:299.7},0).wait(1).to({x:306.05},0).wait(1).to({x:312.45},0).wait(1).to({x:318.8},0).wait(1).to({x:325.15},0).wait(1).to({x:331.55},0).wait(1).to({x:337.9},0).wait(1).to({x:344.25},0).wait(1).to({x:350.6},0).wait(1).to({x:357},0).wait(1).to({x:363.35},0).wait(1).to({x:369.7},0).wait(1).to({x:376.1},0).wait(1).to({x:382.45},0).wait(1).to({x:388.8},0).wait(1).to({x:395.15},0).wait(1).to({x:401.55},0).wait(1).to({x:407.9},0).wait(1).to({x:414.25},0).wait(1).to({x:420.65},0).wait(1).to({x:427},0).wait(1).to({x:433.35},0).wait(1).to({x:439.7},0).wait(1).to({x:446.1},0).wait(1).to({x:452.45},0).wait(1).to({x:458.8},0).wait(1).to({x:465.15},0).wait(1).to({x:471.55},0).wait(1).to({x:477.9},0).wait(1).to({x:484.25},0).wait(1).to({x:490.65},0).wait(1).to({x:497},0).wait(1).to({x:503.35},0).wait(1).to({x:509.7},0).wait(1).to({x:516.1},0).wait(1).to({x:522.45},0).wait(1).to({x:528.8},0).wait(1).to({x:535.2},0).wait(1).to({x:541.55},0).wait(1).to({x:547.9},0).wait(1).to({x:554.25},0).wait(1).to({x:560.65},0).wait(1).to({x:567},0).wait(1).to({x:573.35},0).wait(1).to({x:579.75},0).wait(1).to({x:586.1},0).wait(1).to({x:592.45},0).wait(1).to({x:598.8},0).wait(1).to({x:605.2},0).wait(1).to({x:611.55},0).wait(1).to({x:617.9},0).wait(1).to({x:624.3},0).wait(1).to({x:630.65},0).wait(1).to({x:637},0).wait(1).to({x:643.35},0).wait(1).to({x:649.75},0).wait(1).to({x:656.1},0).wait(1).to({x:662.45},0).wait(1).to({x:668.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,885.9,171.3);


(lib.cloud3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.animatecloud3();
	this.instance.setTransform(194.5,47.8,1,1,0,0,0,194.5,47.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:188.75},0).wait(1).to({x:183},0).wait(1).to({x:177.25},0).wait(1).to({x:171.45},0).wait(1).to({x:165.7},0).wait(1).to({x:159.95},0).wait(1).to({x:154.15},0).wait(1).to({x:148.4},0).wait(1).to({x:142.65},0).wait(1).to({x:136.85},0).wait(1).to({x:131.1},0).wait(1).to({x:125.35},0).wait(1).to({x:119.55},0).wait(1).to({x:113.8},0).wait(1).to({x:108.05},0).wait(1).to({x:102.25},0).wait(1).to({x:96.5},0).wait(1).to({x:90.75},0).wait(1).to({x:84.95},0).wait(1).to({x:79.2},0).wait(1).to({x:73.45},0).wait(1).to({x:67.65},0).wait(1).to({x:61.9},0).wait(1).to({x:56.15},0).wait(1).to({x:50.4},0).wait(1).to({x:44.6},0).wait(1).to({x:38.85},0).wait(1).to({x:33.1},0).wait(1).to({x:27.3},0).wait(1).to({x:21.55},0).wait(1).to({x:15.8},0).wait(1).to({x:10},0).wait(1).to({x:4.25},0).wait(1).to({x:-1.5},0).wait(1).to({x:-7.3},0).wait(1).to({x:-13.05},0).wait(1).to({x:-18.8},0).wait(1).to({x:-24.6},0).wait(1).to({x:-30.35},0).wait(1).to({x:-36.1},0).wait(1).to({x:-41.9},0).wait(1).to({x:-47.65},0).wait(1).to({x:-53.4},0).wait(1).to({x:-59.2},0).wait(1).to({x:-64.95},0).wait(1).to({x:-70.7},0).wait(1).to({x:-76.45},0).wait(1).to({x:-82.25},0).wait(1).to({x:-88},0).wait(1).to({x:-93.75},0).wait(1).to({x:-99.55},0).wait(1).to({x:-105.3},0).wait(1).to({x:-111.05},0).wait(1).to({x:-116.85},0).wait(1).to({x:-122.6},0).wait(1).to({x:-128.35},0).wait(1).to({x:-134.15},0).wait(1).to({x:-139.9},0).wait(1).to({x:-145.65},0).wait(1).to({x:-151.45},0).wait(1).to({x:-157.2},0).wait(1).to({x:-162.95},0).wait(1).to({x:-168.75},0).wait(1).to({x:-174.5},0).wait(1).to({x:-180.25},0).wait(1).to({x:-186.05},0).wait(1).to({x:-191.8},0).wait(1).to({x:-197.55},0).wait(1).to({x:-203.35},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-397.8,0,786.9000000000001,95.7);


(lib.cloud2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.animatecloud1();
	this.instance.setTransform(100,43.1,1,1,0,0,0,100,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:107.6},0).wait(1).to({x:115.25},0).wait(1).to({x:122.85},0).wait(1).to({x:130.5},0).wait(1).to({x:138.1},0).wait(1).to({x:145.75},0).wait(1).to({x:153.35},0).wait(1).to({x:161},0).wait(1).to({x:168.6},0).wait(1).to({x:176.25},0).wait(1).to({x:183.85},0).wait(1).to({x:191.5},0).wait(1).to({x:199.15},0).wait(1).to({x:206.75},0).wait(1).to({x:214.4},0).wait(1).to({x:222},0).wait(1).to({x:229.65},0).wait(1).to({x:237.25},0).wait(1).to({x:244.9},0).wait(1).to({x:252.5},0).wait(1).to({x:260.15},0).wait(1).to({x:267.75},0).wait(1).to({x:275.4},0).wait(1).to({x:283.05},0).wait(1).to({x:290.65},0).wait(1).to({x:298.3},0).wait(1).to({x:305.9},0).wait(1).to({x:313.55},0).wait(1).to({x:321.15},0).wait(1).to({x:328.8},0).wait(1).to({x:336.4},0).wait(1).to({x:344.05},0).wait(1).to({x:351.65},0).wait(1).to({x:359.3},0).wait(1).to({x:366.95},0).wait(1).to({x:374.55},0).wait(1).to({x:382.2},0).wait(1).to({x:389.8},0).wait(1).to({x:397.45},0).wait(1).to({x:405.05},0).wait(1).to({x:412.7},0).wait(1).to({x:420.3},0).wait(1).to({x:427.95},0).wait(1).to({x:435.55},0).wait(1).to({x:443.2},0).wait(1).to({x:450.85},0).wait(1).to({x:458.45},0).wait(1).to({x:466.1},0).wait(1).to({x:473.7},0).wait(1).to({x:481.35},0).wait(1).to({x:488.95},0).wait(1).to({x:496.6},0).wait(1).to({x:504.2},0).wait(1).to({x:511.85},0).wait(1).to({x:519.45},0).wait(1).to({x:527.1},0).wait(1).to({x:534.75},0).wait(1).to({x:542.35},0).wait(1).to({x:550},0).wait(1).to({x:557.6},0).wait(1).to({x:565.25},0).wait(1).to({x:572.85},0).wait(1).to({x:580.5},0).wait(1).to({x:588.1},0).wait(1).to({x:595.75},0).wait(1).to({x:603.35},0).wait(1).to({x:611},0).wait(1).to({x:618.65},0).wait(1).to({x:626.25},0).wait(1).to({x:633.9},0).wait(1).to({x:641.5},0).wait(1).to({x:649.15},0).wait(1).to({x:656.75},0).wait(1).to({x:664.4},0).wait(1).to({x:672},0).wait(1).to({x:679.65},0).wait(1).to({x:687.25},0).wait(1).to({x:694.9},0).wait(1).to({x:702.55},0).wait(1).to({x:710.15},0).wait(1).to({x:717.8},0).wait(1).to({x:725.4},0).wait(1).to({x:733.05},0).wait(1).to({x:740.65},0).wait(1).to({x:748.3},0).wait(1).to({x:755.9},0).wait(1).to({x:763.55},0).wait(1).to({x:771.15},0).wait(1).to({x:778.8},0).wait(1).to({x:786.45},0).wait(1).to({x:794.05},0).wait(1).to({x:801.7},0).wait(1).to({x:809.3},0).wait(1).to({x:816.95},0).wait(1).to({x:824.55},0).wait(1).to({x:832.2},0).wait(1).to({x:839.8},0).wait(1).to({x:847.45},0).wait(1).to({x:855.05},0).wait(1).to({x:862.7},0).wait(1).to({x:870.35},0).wait(1).to({x:877.95},0).wait(1).to({x:885.6},0).wait(1).to({x:893.2},0).wait(1).to({x:900.85},0).wait(1).to({x:908.45},0).wait(1).to({x:916.1},0).wait(1).to({x:923.7},0).wait(1).to({x:931.35},0).wait(1).to({x:938.95},0).wait(1).to({x:946.6},0).wait(1).to({x:954.25},0).wait(1).to({x:961.85},0).wait(1).to({x:969.5},0).wait(1).to({x:977.1},0).wait(1).to({x:984.75},0).wait(1).to({x:992.35},0).wait(1).to({x:1000},0).wait(1).to({x:1007.6},0).wait(1).to({x:1015.25},0).wait(1).to({x:1022.85},0).wait(1).to({x:1030.5},0).wait(1).to({x:1038.15},0).wait(1).to({x:1045.75},0).wait(1).to({x:1053.4},0).wait(1).to({x:1061},0).wait(1).to({x:1068.65},0).wait(1).to({x:1076.25},0).wait(1).to({x:1083.9},0).wait(1).to({x:1091.5},0).wait(1).to({x:1099.15},0).wait(1).to({x:1106.75},0).wait(1).to({x:1114.4},0).wait(1).to({x:1122.05},0).wait(1).to({x:1129.65},0).wait(1).to({x:1137.3},0).wait(1).to({x:1144.9},0).wait(1).to({x:1152.55},0).wait(1).to({x:1160.15},0).wait(1).to({x:1167.8},0).wait(1).to({x:1175.4},0).wait(1).to({x:1183.05},0).wait(1).to({x:1190.65},0).wait(1).to({x:1198.3},0).wait(1).to({x:1205.95},0).wait(1).to({x:1213.55},0).wait(1).to({x:1221.2},0).wait(1).to({x:1228.8},0).wait(1).to({x:1236.45},0).wait(1).to({x:1244.05},0).wait(1).to({x:1251.7},0).wait(1).to({x:1259.3},0).wait(1).to({x:1266.95},0).wait(1).to({x:1274.55},0).wait(1).to({x:1282.2},0).wait(1).to({x:1289.85},0).wait(1).to({x:1297.45},0).wait(1).to({x:1305.1},0).wait(1).to({x:1312.7},0).wait(1).to({x:1320.35},0).wait(1).to({x:1327.95},0).wait(1).to({x:1335.6},0).wait(1).to({x:1343.2},0).wait(1).to({x:1350.85},0).wait(1).to({x:1358.45},0).wait(1).to({x:1366.1},0).wait(1).to({x:1373.75},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1473.9,86.3);


(lib.cloud1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.animatecloud2();
	this.instance.setTransform(100.7,38.7,1,1,0,0,0,100.7,38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:95.4},0).wait(1).to({x:90.1},0).wait(1).to({x:84.8,y:38.65},0).wait(1).to({x:79.5},0).wait(1).to({x:74.2,y:38.6},0).wait(1).to({x:68.85},0).wait(1).to({x:63.55,y:38.55},0).wait(1).to({x:58.25},0).wait(1).to({x:52.95,y:38.5},0).wait(1).to({x:47.65},0).wait(1).to({x:42.35,y:38.45},0).wait(1).to({x:37},0).wait(1).to({x:31.7,y:38.4},0).wait(1).to({x:26.4},0).wait(1).to({x:21.1,y:38.35},0).wait(1).to({x:15.8},0).wait(1).to({x:10.5},0).wait(1).to({x:5.15,y:38.3},0).wait(1).to({x:-0.15},0).wait(1).to({x:-5.45,y:38.25},0).wait(1).to({x:-10.75},0).wait(1).to({x:-16.05,y:38.2},0).wait(1).to({x:-21.35},0).wait(1).to({x:-26.7,y:38.15},0).wait(1).to({x:-32},0).wait(1).to({x:-37.3,y:38.1},0).wait(1).to({x:-42.6},0).wait(1).to({x:-47.9,y:38.05},0).wait(1).to({x:-53.25},0).wait(1).to({x:-58.55,y:38},0).wait(1).to({x:-63.85},0).wait(1).to({x:-69.15},0).wait(1).to({x:-74.45,y:37.95},0).wait(1).to({x:-79.75},0).wait(1).to({x:-85.1,y:37.9},0).wait(1).to({x:-90.4},0).wait(1).to({x:-95.7,y:37.85},0).wait(1).to({x:-101},0).wait(1).to({x:-106.3,y:37.8},0).wait(1).to({x:-111.6},0).wait(1).to({x:-116.95,y:37.75},0).wait(1).to({x:-122.25},0).wait(1).to({x:-127.55,y:37.7},0).wait(1).to({x:-132.85},0).wait(1).to({x:-138.15,y:37.65},0).wait(1).to({x:-143.45},0).wait(1).to({x:-148.8},0).wait(1).to({x:-154.1,y:37.6},0).wait(1).to({x:-159.4},0).wait(1).to({x:-164.7,y:37.55},0).wait(1).to({x:-170},0).wait(1).to({x:-175.35,y:37.5},0).wait(1).to({x:-180.65},0).wait(1).to({x:-185.95,y:37.45},0).wait(1).to({x:-191.25},0).wait(1).to({x:-196.55,y:37.4},0).wait(1).to({x:-201.85},0).wait(1).to({x:-207.2,y:37.35},0).wait(1).to({x:-212.5},0).wait(1).to({x:-217.8,y:37.3},0).wait(1).to({x:-223.1},0).wait(1).to({x:-228.4},0).wait(1).to({x:-233.7,y:37.25},0).wait(1).to({x:-239.05},0).wait(1).to({x:-244.35,y:37.2},0).wait(1).to({x:-249.65},0).wait(1).to({x:-254.95,y:37.15},0).wait(1).to({x:-260.25},0).wait(1).to({x:-265.55,y:37.1},0).wait(1).to({x:-270.9},0).wait(1).to({x:-276.2,y:37.05},0).wait(1).to({x:-281.5},0).wait(1).to({x:-286.8,y:37},0).wait(1).to({x:-292.1},0).wait(1).to({x:-297.45,y:36.95},0).wait(1).to({x:-302.75},0).wait(1).to({x:-308.05},0).wait(1).to({x:-313.35,y:36.9},0).wait(1).to({x:-318.65},0).wait(1).to({x:-323.95,y:36.85},0).wait(1).to({x:-329.3},0).wait(1).to({x:-334.6,y:36.8},0).wait(1).to({x:-339.9},0).wait(1).to({x:-345.2,y:36.75},0).wait(1).to({x:-350.5},0).wait(1).to({x:-355.8,y:36.7},0).wait(1).to({x:-361.15},0).wait(1).to({x:-366.45,y:36.65},0).wait(1).to({x:-371.75},0).wait(1).to({x:-377.05,y:36.6},0).wait(1).to({x:-382.35},0).wait(1).to({x:-387.65},0).wait(1).to({x:-393,y:36.55},0).wait(1).to({x:-398.3},0).wait(1).to({x:-403.6,y:36.5},0).wait(1).to({x:-408.9},0).wait(1).to({x:-414.2,y:36.45},0).wait(1).to({x:-419.55},0).wait(1).to({x:-424.85,y:36.4},0).wait(1).to({x:-430.15},0).wait(1).to({x:-435.45,y:36.35},0).wait(1).to({x:-440.75},0).wait(1).to({x:-446.05,y:36.3},0).wait(1).to({x:-451.4},0).wait(1).to({x:-456.7,y:36.25},0).wait(1).to({x:-462},0).wait(1).to({x:-467.3},0).wait(1).to({x:-472.6,y:36.2},0).wait(1).to({x:-477.9},0).wait(1).to({x:-483.25,y:36.15},0).wait(1).to({x:-488.55},0).wait(1).to({x:-493.85,y:36.1},0).wait(1).to({x:-499.15},0).wait(1).to({x:-504.45,y:36.05},0).wait(1).to({x:-509.75},0).wait(1).to({x:-515.1,y:36},0).wait(1).to({x:-520.4},0).wait(1).to({x:-525.7,y:35.95},0).wait(1).to({x:-531},0).wait(1).to({x:-536.3,y:35.9},0).wait(1).to({x:-541.65},0).wait(1).to({x:-546.95},0).wait(1).to({x:-552.25,y:35.85},0).wait(1).to({x:-557.55},0).wait(1).to({x:-562.85,y:35.8},0).wait(1).to({x:-568.15},0).wait(1).to({x:-573.5,y:35.75},0).wait(1).to({x:-578.8},0).wait(1).to({x:-584.1,y:35.7},0).wait(1).to({x:-589.4},0).wait(1).to({x:-594.7,y:35.65},0).wait(1).to({x:-600},0).wait(1).to({x:-605.35,y:35.6},0).wait(1).to({x:-610.65},0).wait(1).to({x:-615.95,y:35.55},0).wait(1).to({x:-621.25},0).wait(1).to({x:-626.55},0).wait(1).to({x:-631.85,y:35.5},0).wait(1).to({x:-637.2},0).wait(1).to({x:-642.5,y:35.45},0).wait(1).to({x:-647.8},0).wait(1).to({x:-653.1,y:35.4},0).wait(1).to({x:-658.4},0).wait(1).to({x:-663.75,y:35.35},0).wait(1).to({x:-669.05},0).wait(1).to({x:-674.35,y:35.3},0).wait(1).to({x:-679.65},0).wait(1).to({x:-684.95,y:35.25},0).wait(1).to({x:-690.25},0).wait(1).to({x:-695.6,y:35.2},0).wait(1).to({x:-700.9},0).wait(1).to({x:-706.2},0).wait(1).to({x:-711.5,y:35.15},0).wait(1).to({x:-716.8},0).wait(1).to({x:-722.1,y:35.1},0).wait(1).to({x:-727.45},0).wait(1).to({x:-732.75,y:35.05},0).wait(1).to({x:-738.05},0).wait(1).to({x:-743.35,y:35},0).wait(1).to({x:-748.65},0).wait(1).to({x:-753.95,y:34.95},0).wait(1).to({x:-759.3},0).wait(1).to({x:-764.6,y:34.9},0).wait(1).to({x:-769.9},0).wait(1).to({x:-775.2,y:34.85},0).wait(1).to({x:-780.5},0).wait(1).to({x:-785.85,y:34.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-886.5,-3.9,1088,81.30000000000001);


(lib.trashBag2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_15();
	this.instance.setTransform(70.25,93.25,1.8691,1.8691,0,0,0,16.7,9.7);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "screen";

	this.instance_1 = new lib.Path_1_5();
	this.instance_1.setTransform(69.25,157.65,1.8691,1.8691,0,0,0,25,12);
	this.instance_1.alpha = 0.5;
	this.instance_1.compositeOperation = "screen";

	this.instance_2 = new lib.Path_2_6();
	this.instance_2.setTransform(72.4,123.95,1.8691,1.8691,0,0,0,18.3,13.6);
	this.instance_2.alpha = 0.5;
	this.instance_2.compositeOperation = "screen";

	this.instance_3 = new lib.Group_5();
	this.instance_3.setTransform(70.9,125.1,1.8691,1.8691,0,0,0,27.4,26.9);
	this.instance_3.compositeOperation = "multiply";

	this.instance_4 = new lib.ClipGroup();
	this.instance_4.setTransform(76.5,58.3,1.8691,1.8691,0,0,0,23.2,27.6);

	this.instance_5 = new lib.Path_3_0();
	this.instance_5.setTransform(78.15,62.55,1.8691,1.8691,0,0,0,22.3,21.7);
	this.instance_5.alpha = 0.5;
	this.instance_5.compositeOperation = "multiply";

	this.instance_6 = new lib.Path_4_0();
	this.instance_6.setTransform(78.15,54.9,1.8691,1.8691,0,0,0,22.3,25.8);
	this.instance_6.alpha = 0.5;
	this.instance_6.compositeOperation = "multiply";

	this.instance_7 = new lib.Group_1_0();
	this.instance_7.setTransform(65.8,128.1,1.8691,1.8691,0,0,0,35.4,31.5);
	this.instance_7.alpha = 0.5;
	this.instance_7.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F4F51").s().p("AhYHyQgogIhBgiQg/ghgogiQgvgogGgPQgKgbAhgwQAyhIAjhMIgCgiQABgkAKgJQAQgNA3gxIgPg9QgDgCgEgFQgHgKgBgPQgBgtBDhHICEibQAzg5AhgXQA5goAqAZQAkAeAkA/QATAgAjBLQAbA6ACAOQADAagaAuQgkBDAVAtQAQAbAIAUQAQAngBAwIAFCQQADBfgKAgQgLAhgmAaIg4AgIgYAUQgJAHgZgCQgPgBhzAIQhAAFglAAQgZAAgNgCg");
	this.shape.setTransform(65.7361,93.4427,1.8691,1.8691);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.trashBag2, new cjs.Rectangle(-0.2,0.1,131.79999999999998,187), null);


(lib.tinStart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_153();
	this.instance.setTransform(117.8,410.1,0.5,0.5);

	this.text = new cjs.Text("start", "24px 'Showcard Gothic'", "#2E2976");
	this.text.lineHeight = 35;
	this.text.lineWidth = 76;
	this.text.parent = this;
	this.text.setTransform(10.75,215.45,4.4494,4.4494);

	this.instance_1 = new lib.CachedBmp_152();
	this.instance_1.setTransform(0.15,-0.45,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_155();
	this.instance_2.setTransform(117.8,410.1,0.5,0.5);

	this.text_1 = new cjs.Text("start", "24px 'Showcard Gothic'", "#0033FF");
	this.text_1.lineHeight = 35;
	this.text_1.lineWidth = 76;
	this.text_1.parent = this;
	this.text_1.setTransform(10.75,214.25,4.4494,4.4494);

	this.instance_3 = new lib.CachedBmp_154();
	this.instance_3.setTransform(0.15,-0.5,0.5,0.5);

	this.instance_4 = new lib.Path_4_3();
	this.instance_4.setTransform(187.55,349.7,4.3,4.3,0,0,0,5,1.3);
	this.instance_4.alpha = 0.6992;

	this.instance_5 = new lib.Path_1_2_2();
	this.instance_5.setTransform(140.45,366.05,4.3,4.3,0,0,0,4.5,2.6);
	this.instance_5.alpha = 0.6992;

	this.instance_6 = new lib.Path_0_2();
	this.instance_6.setTransform(35.75,374.2,4.2991,4.2991,0,0,0,14.8,8.8);
	this.instance_6.alpha = 0.6992;

	this.instance_7 = new lib.Path_1_1_2();
	this.instance_7.setTransform(22,444.3,4.2991,4.2991,0,0,0,5.7,6.8);
	this.instance_7.alpha = 0.5;

	this.instance_8 = new lib.Path_2_0_2();
	this.instance_8.setTransform(45.15,535,4.2991,4.2991,0,0,0,7.2,8.4);
	this.instance_8.alpha = 0.5;

	this.instance_9 = new lib.Group_7();
	this.instance_9.setTransform(160.8,522.75,4.2991,4.2991,0,0,0,37.1,18.9);
	this.instance_9.compositeOperation = "multiply";

	this.instance_10 = new lib.CachedBmp_159();
	this.instance_10.setTransform(117.95,343.2,0.5,0.5);

	this.instance_11 = new lib.Group_2_2();
	this.instance_11.setTransform(172.25,366.05,4.2991,4.2991,0,0,0,13,4.6);
	this.instance_11.compositeOperation = "multiply";

	this.instance_12 = new lib.Path_3_6();
	this.instance_12.setTransform(171.6,374.85,4.2991,4.2991,0,0,0,13.2,2.6);
	this.instance_12.compositeOperation = "multiply";

	this.instance_13 = new lib.Path_17();
	this.instance_13.setTransform(75.65,389.2,4.2971,4.2971,0,0,0,8.3,2.9);
	this.instance_13.compositeOperation = "multiply";

	this.instance_14 = new lib.Path_1_0_2();
	this.instance_14.setTransform(75.65,389.2,4.2971,4.2971,0,0,0,8.3,2.9);
	this.instance_14.compositeOperation = "multiply";

	this.instance_15 = new lib.Path_2_8();
	this.instance_15.setTransform(74.6,384.45,4.2971,4.2971,0,0,0,8.5,2.9);
	this.instance_15.compositeOperation = "multiply";

	this.instance_16 = new lib.Group_4_1();
	this.instance_16.setTransform(137.85,366.85,4.2991,4.2991,0,0,0,35.4,8.6);
	this.instance_16.alpha = 0.5;
	this.instance_16.compositeOperation = "multiply";

	this.instance_17 = new lib.CachedBmp_158();
	this.instance_17.setTransform(-28.6,320.3,0.5,0.5);

	this.instance_18 = new lib.Group_5_1();
	this.instance_18.setTransform(156.75,485.55,4.2991,4.2991,0,0,0,43.1,30.9);
	this.instance_18.compositeOperation = "multiply";

	this.instance_19 = new lib.CachedBmp_157();
	this.instance_19.setTransform(-28.55,352.9,0.5,0.5);

	this.instance_20 = new lib.Group_6();
	this.instance_20.setTransform(190.5,587.1,4.2991,4.2991,0,0,0,32.9,9.3);
	this.instance_20.compositeOperation = "multiply";

	this.instance_21 = new lib.CachedBmp_156();
	this.instance_21.setTransform(51.4,547.85,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_364();
	this.instance_22.setTransform(117.95,343.2,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_363();
	this.instance_23.setTransform(-28.6,320.3,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_362();
	this.instance_24.setTransform(-28.55,352.9,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_361();
	this.instance_25.setTransform(51.4,547.85,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_360();
	this.instance_26.setTransform(-34.7,-186.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.text_1},{t:this.instance_2}]},1).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_26},{t:this.instance_25},{t:this.instance_20},{t:this.instance_24},{t:this.instance_18},{t:this.instance_23},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_22},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-186.3,404.5,853.9000000000001);


(lib.Scene_1_startScene = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// startScene
	this.text = new cjs.Text("\"אוצרות\"", "bold 96px 'Assistant ExtraBold'", "#2F2A76");
	this.text.textAlign = "center";
	this.text.lineHeight = 193;
	this.text.lineWidth = 548;
	this.text.parent = this;
	this.text.setTransform(928.5,281.1);

	this.start = new lib.tinStart();
	this.start.name = "start";
	this.start.setTransform(277.3,378.6,1,1,0,0,0,177.8,333.9);
	new cjs.ButtonHelper(this.start, 0, 1, 2, false, new lib.tinStart(), 3);

	this.instance = new lib.CachedBmp_293();
	this.instance.setTransform(609.45,477.75,0.5,0.5);

	this.text_1 = new cjs.Text("ים של ", "bold 96px 'Assistant ExtraBold'", "#2F2A76");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 193;
	this.text_1.lineWidth = 511;
	this.text_1.parent = this;
	this.text_1.setTransform(938.1,194.4);

	this.instance_1 = new lib.CachedBmp_51();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text_1},{t:this.instance},{t:this.start},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_startScene, new cjs.Rectangle(-0.5,-0.5,1308,748.5), null);


(lib.Scene_1_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// background
	this.instance = new lib.tree2();
	this.instance.setTransform(1223.2,397.6,1,1.1238,0,0,0,164.6,211);

	this.instance_1 = new lib.tree1();
	this.instance_1.setTransform(102.8,412.75,1,1,0,0,0,163.7,226.1);

	this.instance_2 = new lib.sea2();
	this.instance_2.setTransform(312.3,397.65,1,1,0,0,0,323.9,71.3);

	this.instance_3 = new lib.sea1();
	this.instance_3.setTransform(638.85,447.95,1,1,0,0,0,648.6,94.8);

	this.instance_4 = new lib.cloud2();
	this.instance_4.setTransform(488.8,74.3,0.4705,0.5587,0,0,180);

	this.instance_5 = new lib.cloud2();
	this.instance_5.setTransform(1237.6,48.65,1,1,0,0,0,100,43.1);

	this.instance_6 = new lib.cloud2();
	this.instance_6.setTransform(100,48.65,1,1,0,0,0,100,43.1);

	this.instance_7 = new lib.cloud1();
	this.instance_7.setTransform(1075.6,139.8,0.5317,0.5657);

	this.instance_8 = new lib.cloud1();
	this.instance_8.setTransform(916.55,160.5,0.5317,0.5657);

	this.instance_9 = new lib.cloud1();
	this.instance_9.setTransform(680.7,81);

	this.instance_10 = new lib.sun();
	this.instance_10.setTransform(857.25,109.3,1,1,0,0,0,67,64);

	this.instance_11 = new lib.cloud3();
	this.instance_11.setTransform(1084.5,256.4,1,1.6172,0,0,180,194.5,47.9);

	this.instance_12 = new lib.cloud3();
	this.instance_12.setTransform(191.1,283.85,1,1,0,0,0,194.5,47.8);

	this.instance_13 = new lib.cloud4();
	this.instance_13.setTransform(247.55,272.15,1.1527,0.6867,0,0,180,217,85.7);

	this.instance_14 = new lib.cloud4();
	this.instance_14.setTransform(1063.95,246.05,1,1,0,0,0,217,85.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E29756").s().p("EhluANZIAAgoIAA3kIAAgiIAAAAIAqgPIAZgIQLLjjMsD6UAIDgDWA9pATtICnAAIG8AAQJIjBJ6h3QBrgSBrgSQFvg9F/gkQCngQCqgLQIhgkJBALQU8iIU7G+IAkAMIAALGg");
	this.shape.setTransform(636.425,641.4268);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7CF9C").s().p("AbjMxIimAAUg9ogTtgIEADWQsrj5rLDjIAAi5IAAAAQHgiiDyg0QGdhZFpBeQC1g/Gdg0QIghEI+APQZ/AsS9LMIBEATICMAlIGGBsQFvhnG2AyQCQAQC4AnQBlAVBxAcQCDAhCUApIGpB7IAuANQl/AklvA9QhrAShrAUQp5B2pIDBg");
	this.shape_1.setTransform(431.1,591.907);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ECAF76").s().p("AJ6LYQpBgLohAkQiqALimAQIgugNImqh7QiTgpiDghQhxgchlgVQi4gniRgQQm2gyluBnImHhsQElh1Dci6QAnghAlgjQHakbKjjPQBrghBwgfQCfgrCogoQEMg/EQg2QMOibM0hPQPfhgH6AGQA6ABAzACIAhABIIKATIAOAAIAYABMAAAAgFQ08nA07CJg");
	this.shape_2.setTransform(952.675,551.0341);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBDFB7").s().p("AAJKwIhDgTQy9rK6AgsQo+gQogBFQmdAzi1A+QlphcmdBYQjyA0ngChIgBAAIAAC5IgZAIIABiWIAErMIAAgPIgyAAQAbgSAZgOQATgKASgIQB2g1BJA0QBiBFEhASQEgASDYhSQDYhTIWhAQIXhAF8AYQF9AXB5AlQB4AkCkBHQCHBaCAAzQFUCHMyAgQMxAfSHhHIPVg6IBkANIDcAdQhwAfhsAhQqiDNnbEcQgkAjgnAhQjcC7klB0gEBglgLQQgzgCg5AAQBHgIBHALIgigBg");
	this.shape_3.setTransform(606.5125,519.487);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2E0F8").s().p("AgPFnIAfrNIgFLNg");
	this.shape_4.setTransform(-11.525,516.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBFFFD").s().p("A2hKSQsygglUiHQiAgziHhaQikhHh4gkQh5gll9gXQl8gYoXBAQoWBAjYBTQjYBSkggSQkhgShihFQhJg0h2A1IAGiWIKJBKQRNk8NNAyQFXAVFBBSQD6BAETBxQCcBBEUB8QGFApBvANQBuANGuAfQGtAeNwgzQLGgpLahgQCugWCvgaQGTg8FPgmQGlgwE5gPQIzgbH0hVQCCgWDoguQC7ghBcAHQBhAHGQAkQDxAVB2AEQCdAGBpgOQBxgQBcgsIACBlIoJgTQhHgMhHAIQn6gGvgBgQszBPsPCbQkQA2kMA/QipAnieAsIjcgcIhkgOIvVA6QslAxqAAAQkaAAj5gJgEhlBADLIAmtlQAEA0ALApIgiMIg");
	this.shape_5.setTransform(633.525,439.3734);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#53A0D4").s().p("EBk9AK/IAOtFQhLgQg6iTQg7iTligvQligwk0CuQk1Cui9BcQjqB6iBA9QjkBtihAVQjUAciYhtQtwp4xoAiQsiAYtvFoIhjgBIg/gEQwyhGjVAaQi8AYjMgzQibgmjphlQkUh8ichBQkThxj5hBQhVgVhWgRMCZiAAAIB+AAIAAV8gEhmfAK/IAA18IBkAAIc/AAQpJCAq+FyQnyE+hXlFIgBgHIAAAEQgLgqgEgzIgmNlIATAAIgEBZIAWACIgDAxg");
	this.shape_6.setTransform(640.025,403.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFFFFF","#0099FF"],[0,1],0,24.7,0,0,24.7,661).s().p("Eg0sAaCQjwgxj+gPQlOgUl/BUI8/AAIAA3dIgPAAIAA8mMDJlAAAIAAdBIAGAAIAAXCg");
	this.shape_7.setTransform(637.975,166.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E29756").s().p("EhluANZIAAgoIAA3kIAAgiIAAAAIAqgPIAZgIQLLjjMsD6UAIDgDWA9pATtICnAAIG8AAQJIjBJ6h3QBrgSBrgSQFvg9F/gkQGUA1ChgaIFrg3QDJgeFKAGQU8iIU7G+IAkAMIAALGg");
	this.shape_8.setTransform(636.425,641.4268);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ECAF76").s().p("AJ6LYQlKgGjKAeIlqA3QihAamTg1IgugNImqh7QiTgpiDghQhxgchlgVQi4gniRgQQm2gyluBnImHhsQElh1Dci6QAnghAlgjQHakbKjjPQBrghBwgfQCfgrCogoQEMg/EQg2QMOibM0hPQPfhgH6AGQA6ABAzACIAhABIIKATIAOAAIAYABMAAAAgFQ08nA07CJg");
	this.shape_9.setTransform(952.675,551.0341);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E29756").s().p("EhluANZIAAgoIAA3kIAAgiIAAAAIAqgPIAZgIQLLjjMsD6UAIDgDWA9pATtICnAAIG8AAQJIjBJ6h3QBrgSBrgSQFvg9F/gkQGUCeChgxQChgyDKg7QDJg6FKAGQU8iIU7G+IAkAMIAALGg");
	this.shape_10.setTransform(636.425,641.4268);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ECAF76").s().p("AJ6LYQlKgGjKA6QjIA7iiAyQihAymTifIgugNImqh7QiTgpiDghQhxgchlgVQi4gniRgQQm2gyluBnImHhsQElh1Dci6QAnghAlgjQHakbKjjPQBrghBwgfQCfgrCogoQEMg/EQg2QMOibM0hPQPfhgH6AGQA6ABAzACIAhABIIKATIAOAAIAYABMAAAAgFQ08nA07CJg");
	this.shape_11.setTransform(952.675,551.0341);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E29756").s().p("EhluANZIAAgoIAA3kIAAgiIAAAAIAqgPIAZgIQLLjjMsD6UAIDgDWA9pATtICnAAIG8AAQJIjBJ6h3QBrgSBrgSQFvg9F/gkQG1EKCZhNQCYhNDChVQDBhVFKAGQU8iIU7G+IAkAMIAALGg");
	this.shape_12.setTransform(636.425,641.4268);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ECAF76").s().p("AJ6LYQlKgGjCBVQjABViZBOQiZBNm0kLIgugNImqh7QiTgpiDghQhxgchlgVQi4gniRgQQm2gyluBnImHhsQElh1Dci6QAnghAlgjQHakbKjjPQBrghBwgfQCfgrCogoQEMg/EQg2QMOibM0hPQPfhgH6AGQA6ABAzACIAhABIIKATIAOAAIAYABMAAAAgFQ08nA07CJg");
	this.shape_13.setTransform(952.675,551.0341);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E29756").s().p("EhluANZIAAgoIAA3kIAAgiIAAAAIAqgPIAZgIQLLjjMsD6UAIDgDWA9pATtICnAAIG8AAQJIjBJ6h3QBrgSBrgSQFvg9F/gkQG/F4CWhqQCXhpC+hvQC/hwFKAGQU8iIU7G+IAkAMIAALGg");
	this.shape_14.setTransform(636.425,641.4268);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ECAF76").s().p("As4L6IgugNImqh6QiTgqiDggQhxgchlgWQi4gmiRgQQm2gyluBmImHhsQElh0Dci7QAnghAlgjQHakbKjjOQBrghBwgfQCfgsCognQEMg/EQg2QMOibM0hPQPfhgH6AGQA6AAAzACIAhABIIKATIAOABIAYABMAAAAgFQ08nA07CJQlKgHi/BwQi+BxiWBpQghAXgvAAQioAAldkng");
	this.shape_15.setTransform(952.675,552.7934);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E29756").s().p("EhluANZIAAgoIAA3kIAAgiIAAAAIAqgPIAZgIQLLjjMsD6UAIDgDWA9pATtICnAAIG8AAQJIjBJ6h3QBrgSBrgSQFvg9F/gkQHuG9CZhmQCYhlCliWQCliWFKAGQU8iIU7G+IAkAMIAALGg");
	this.shape_16.setTransform(636.425,641.4268);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ECAF76").s().p("As4LYIgugNImqh7QiTgpiDghQhxgchlgVQi4gniRgQQm2gyluBnImHhsQElh1Dci6QAnghAlgiQHakcKjjPQBrghBwgfQCfgrCogoQEMg/EQg2QMOibM0hPQPfhfH6AFQA6ABAzACIAhABIIKATIAOAAIAYABMAAAAgFQ08m/07CIQlKgGilCWQikCXiZBlQgcATgoAAQiwAAmSlrg");
	this.shape_17.setTransform(952.675,556.2302);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E29756").s().p("EhluANZIAAgoIAA3kIAAgiIAAAAIAqgPIAZgIQLLjjMsD6UAIDgDWA9pATtICnAAIG8AAQJIjBJ6h3QBrgSBrgSQFvg9F/gkQHuI3CZhNQCYhMCljtQCljrFKAGQU8iIU7G+IAkAMIAALGg");
	this.shape_18.setTransform(636.425,641.4268);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ECAF76").s().p("As4KTIgugNImqh7QiTgpiDghQhxgchlgVQi4gmiRgRQm2gyluBnImHhsQElh0Dci6QAnghAlgjQHakcKjjPQBrggBwgfQCfgsCogoQEMg/EQg2QMOiaM0hQQPfhfH6AFQA6ABAzACIAhABIIKATIAOABIAYAAMAAAAgFQ08m/07CIQlKgGilDsQikDtiZBNQgSAJgXAAQiqAAmzn1g");
	this.shape_19.setTransform(952.675,563.1018);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_5},{t:this.shape_9},{t:this.shape_3},{t:this.shape_1},{t:this.shape_8},{t:this.shape_4},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},299).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_9},{t:this.shape_5},{t:this.shape_3},{t:this.shape_1},{t:this.shape_8},{t:this.shape_4},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},5).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_5},{t:this.shape_11},{t:this.shape_3},{t:this.shape_1},{t:this.shape_10},{t:this.shape_4},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},5).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_5},{t:this.shape_13},{t:this.shape_3},{t:this.shape_1},{t:this.shape_12},{t:this.shape_4},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},6).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_5},{t:this.shape_15},{t:this.shape_3},{t:this.shape_1},{t:this.shape_14},{t:this.shape_4},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},6).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_5},{t:this.shape_17},{t:this.shape_3},{t:this.shape_1},{t:this.shape_16},{t:this.shape_4},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},6).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_5},{t:this.shape_19},{t:this.shape_3},{t:this.shape_1},{t:this.shape_18},{t:this.shape_4},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},6).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_5},{t:this.shape_17},{t:this.shape_3},{t:this.shape_1},{t:this.shape_16},{t:this.shape_4},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},148).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_5},{t:this.shape_15},{t:this.shape_3},{t:this.shape_1},{t:this.shape_14},{t:this.shape_4},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_5},{t:this.shape_13},{t:this.shape_3},{t:this.shape_1},{t:this.shape_12},{t:this.shape_4},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_5},{t:this.shape_11},{t:this.shape_3},{t:this.shape_1},{t:this.shape_10},{t:this.shape_4},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_9},{t:this.shape_5},{t:this.shape_3},{t:this.shape_1},{t:this.shape_8},{t:this.shape_4},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_5},{t:this.shape_9},{t:this.shape_3},{t:this.shape_1},{t:this.shape_8},{t:this.shape_4},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.9,0,1448.8000000000002,727.1);


(lib.endTincopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_349();
	this.instance.setTransform(101.9,71.5,0.5,0.5);

	this.instance_1 = new lib.Path_8_1();
	this.instance_1.setTransform(275.4,47.75,2.9031,2.5783,0,0,0,10.7,16.2);
	this.instance_1.alpha = 0.6992;

	this.instance_2 = new lib.Path_7_1();
	this.instance_2.setTransform(31.35,150.8,2.9028,2.5781,0,0,0,1.3,1.4);
	this.instance_2.alpha = 0.6992;

	this.instance_3 = new lib.Path_1_2_1();
	this.instance_3.setTransform(22.5,140.5,2.9028,2.5781,0,0,0,1.3,5);
	this.instance_3.alpha = 0.6992;

	this.instance_4 = new lib.Path_2_0_1();
	this.instance_4.setTransform(226.2,46.5,2.9028,2.5781,0,0,0,12.7,10.8);
	this.instance_4.alpha = 0.5;

	this.instance_5 = new lib.Path_3_5();
	this.instance_5.setTransform(119.2,46.1,2.9028,2.5781,0,0,0,8.6,5);
	this.instance_5.alpha = 0.5;

	this.instance_6 = new lib.Path_4_2();
	this.instance_6.setTransform(42.85,65.3,2.9028,2.5781,0,0,0,8.8,10.3);
	this.instance_6.alpha = 0.6992;

	this.instance_7 = new lib.Path_5_1();
	this.instance_7.setTransform(35,168.2,2.9028,2.5781,0,0,0,3.4,3.4);
	this.instance_7.compositeOperation = "multiply";

	this.instance_8 = new lib.Path_6_1();
	this.instance_8.setTransform(61.45,102.2,2.9028,2.5781,0,0,0,4.2,19.8);
	this.instance_8.compositeOperation = "multiply";

	this.instance_9 = new lib.CachedBmp_348();
	this.instance_9.setTransform(18.2,107.5,0.5,0.5);

	this.instance_10 = new lib.Path_0_1();
	this.instance_10.setTransform(47.05,90.6,2.9022,2.5775,0,0,0,4.4,8.2);
	this.instance_10.compositeOperation = "multiply";

	this.instance_11 = new lib.Path_1_1_1();
	this.instance_11.setTransform(47.05,90.6,2.9022,2.5775,0,0,0,4.4,8.2);
	this.instance_11.compositeOperation = "multiply";

	this.instance_12 = new lib.Path_2_7();
	this.instance_12.setTransform(45.65,88.75,2.9022,2.5775,0,0,0,4.7,8.7);
	this.instance_12.compositeOperation = "multiply";

	this.instance_13 = new lib.Group_1_1();
	this.instance_13.setTransform(33.55,107.5,2.9028,2.5781,0,0,0,10.1,24.7);
	this.instance_13.alpha = 0.5;
	this.instance_13.compositeOperation = "multiply";

	this.instance_14 = new lib.CachedBmp_141();
	this.instance_14.setTransform(-0.1,38.45,0.5,0.5);

	this.instance_15 = new lib.Group_2_1();
	this.instance_15.setTransform(38.8,170.8,2.9028,2.5781,0,0,0,7.4,8.1);
	this.instance_15.compositeOperation = "multiply";

	this.instance_16 = new lib.Group_3_1();
	this.instance_16.setTransform(48.65,113.8,2.9028,2.5781,0,0,0,10.8,30.1);
	this.instance_16.compositeOperation = "multiply";

	this.instance_17 = new lib.CachedBmp_140();
	this.instance_17.setTransform(18.1,33.75,0.5,0.5);

	this.instance_18 = new lib.Path_16();
	this.instance_18.setTransform(168.85,117.1,2.9025,2.5778,0,0,0,44.1,33);
	this.instance_18.compositeOperation = "multiply";

	this.instance_19 = new lib.Path_1_6();
	this.instance_19.setTransform(190.95,53.55,2.9025,2.5778,0,0,0,16.5,20);
	this.instance_19.compositeOperation = "multiply";

	this.instance_20 = new lib.Path_9_1();
	this.instance_20.setTransform(261.9,79.25,2.9028,2.5781,0,0,0,17,30.7);
	this.instance_20.compositeOperation = "multiply";

	this.instance_21 = new lib.CachedBmp_347();
	this.instance_21.setTransform(41.9,-0.1,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_352();
	this.instance_22.setTransform(101.9,71.55,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_351();
	this.instance_23.setTransform(18.2,107.5,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_350();
	this.instance_24.setTransform(41.9,-0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_24},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_23},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_22}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.1,312,201.5);


(lib.childtrashbag3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.trashBag2();
	this.instance.setTransform(29.2,197,0.4427,0.4427,0,0,0,65.8,93.5);

	this.instance_1 = new lib.CachedBmp_346();
	this.instance_1.setTransform(29.5,0.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childtrashbag3, new cjs.Rectangle(0,0.1,136.5,239.5), null);


(lib.childdowntrashbag5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_341();
	this.instance.setTransform(48.75,114.45,0.5,0.5);

	this.instance_1 = new lib.trashBag2();
	this.instance_1.setTransform(61,181.9,0.4427,0.4427,0,0,0,65.8,93.5);

	this.instance_2 = new lib.CachedBmp_340();
	this.instance_2.setTransform(0.05,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childdowntrashbag5, new cjs.Rectangle(0.1,0.1,173.5,223.20000000000002), null);


(lib.childdowntrashbag4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_339();
	this.instance.setTransform(45.15,117.7,0.5,0.5);

	this.instance_1 = new lib.trashBag2();
	this.instance_1.setTransform(60.7,181.9,0.4427,0.4427,0,0,0,65.8,93.5);

	this.instance_2 = new lib.CachedBmp_338();
	this.instance_2.setTransform(0.1,0.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childdowntrashbag4, new cjs.Rectangle(0.1,0.1,166,223.20000000000002), null);


(lib.childdowntrashbag3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_337();
	this.instance.setTransform(44.25,108.55,0.5,0.5);

	this.instance_1 = new lib.trashBag2();
	this.instance_1.setTransform(44.65,181.9,0.4427,0.4427,0,0,0,65.8,93.5);

	this.instance_2 = new lib.CachedBmp_336();
	this.instance_2.setTransform(0,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childdowntrashbag3, new cjs.Rectangle(0,0.1,151,223.20000000000002), null);


(lib.childdowntrashbag2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_335();
	this.instance.setTransform(40.35,113.1,0.5,0.5);

	this.instance_1 = new lib.trashBag2();
	this.instance_1.setTransform(29.2,178.7,0.4427,0.4427,0,0,0,65.8,93.5);

	this.instance_2 = new lib.CachedBmp_334();
	this.instance_2.setTransform(2.05,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childdowntrashbag2, new cjs.Rectangle(0,0.1,127.1,225.5), null);


(lib.childdowntrashbag1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.trashBag2();
	this.instance.setTransform(29.2,177.55,0.4427,0.4427,0,0,0,65.8,93.5);

	this.instance_1 = new lib.CachedBmp_333();
	this.instance_1.setTransform(12.95,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.childdowntrashbag1, new cjs.Rectangle(0,0.1,125,240), null);


(lib.Scene_1_endScene = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// endScene
	this.instance = new lib.trashBag2();
	this.instance.setTransform(123.3,602.1,0.8555,0.8555,0,0,180,65.6,93.5);

	this.instance_1 = new lib.CachedBmp_268();
	this.instance_1.setTransform(97.05,319.25,0.5,0.5);

	this.instance_2 = new lib.cloud2();
	this.instance_2.setTransform(1237.6,48.65,1,1,0,0,0,100,43.1);

	this.instance_3 = new lib.cloud2();
	this.instance_3.setTransform(100,48.65,1,1,0,0,0,100,43.1);

	this.instance_4 = new lib.cloud1();
	this.instance_4.setTransform(680.7,81);

	this.instance_5 = new lib.sun();
	this.instance_5.setTransform(857.25,109.3,1,1,0,0,0,67,64);

	this.instance_6 = new lib.tree2();
	this.instance_6.setTransform(1223.2,397.6,1,1.1238,0,0,0,164.6,211);

	this.instance_7 = new lib.tree1();
	this.instance_7.setTransform(102.8,412.75,1,1,0,0,0,163.7,226.1);

	this.instance_8 = new lib.sea2();
	this.instance_8.setTransform(310.9,398.75,1,1,0,0,0,323.9,71.3);

	this.instance_9 = new lib.sea1();
	this.instance_9.setTransform(640.6,451.35,1,1,0,0,0,648.6,94.8);

	this.instance_10 = new lib.CachedBmp_49();
	this.instance_10.setTransform(-16,-0.3,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_269();
	this.instance_11.setTransform(97.05,319.25,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_270();
	this.instance_12.setTransform(97.05,319.25,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_271();
	this.instance_13.setTransform(97.05,319.25,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_272();
	this.instance_14.setTransform(97.05,319.2,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_273();
	this.instance_15.setTransform(97.05,319.2,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_274();
	this.instance_16.setTransform(97.05,319.25,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_275();
	this.instance_17.setTransform(97.05,319.2,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_276();
	this.instance_18.setTransform(97.05,319.2,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_277();
	this.instance_19.setTransform(97.05,319.2,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_278();
	this.instance_20.setTransform(97.05,319.2,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_279();
	this.instance_21.setTransform(97.05,319.2,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_280();
	this.instance_22.setTransform(97.05,319.2,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_281();
	this.instance_23.setTransform(97.05,319.2,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_282();
	this.instance_24.setTransform(97.05,319.2,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_283();
	this.instance_25.setTransform(97.05,319.2,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_284();
	this.instance_26.setTransform(97.05,319.2,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_285();
	this.instance_27.setTransform(97.05,319.2,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_286();
	this.instance_28.setTransform(97.05,319.2,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_287();
	this.instance_29.setTransform(97.05,319.2,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_288();
	this.instance_30.setTransform(97.05,319.2,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_289();
	this.instance_31.setTransform(97.05,319.15,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_290();
	this.instance_32.setTransform(97.05,319.2,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_291();
	this.instance_33.setTransform(97.05,319.15,0.5,0.5);

	this.playagain = new lib.endTincopy();
	this.playagain.name = "playagain";
	this.playagain.setTransform(902.5,440.7);
	new cjs.ButtonHelper(this.playagain, 0, 1, 1);

	this.instance_34 = new lib.CachedBmp_292();
	this.instance_34.setTransform(97.05,319.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},519).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_11},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_12},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_13},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_14},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_15},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_16},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_17},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_18},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_19},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_20},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_21},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_22},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_23},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_24},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_25},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_26},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_27},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_28},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_29},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_30},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_31},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_32},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_33},{t:this.instance}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_34},{t:this.instance},{t:this.playagain}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.9,-0.3,1448.8000000000002,727);


(lib.Scene_1_child = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// child
	this.instance = new lib.child_metalDetector1();
	this.instance.setTransform(-232.95,538.65,0.3634,0.3634,0,0,0,386.1,336.6);
	this.instance._off = true;

	this.instance_1 = new lib.child_metalDetector2();
	this.instance_1.setTransform(66.65,545.25,1,1,0,0,0,133.3,128.9);
	this.instance_1._off = true;

	this.instance_2 = new lib.child_metalDetector3();
	this.instance_2.setTransform(94.95,543.55,1,1,0,0,0,125.7,127.2);
	this.instance_2._off = true;

	this.instance_3 = new lib.child_metalDetector4();
	this.instance_3.setTransform(110.65,542.2,1,1,0,0,0,133.4,128.6);
	this.instance_3._off = true;

	this.instance_4 = new lib.child_metalDetector5();
	this.instance_4.setTransform(123.15,537.8,1,1,0,0,0,138.1,127);
	this.instance_4._off = true;

	this.instance_5 = new lib.child_metalDetector6();
	this.instance_5.setTransform(154.15,539.8,1,1,0,0,0,126.9,129);
	this.instance_5._off = true;

	this.instance_6 = new lib.REDchild_metalDetector1();
	this.instance_6.setTransform(869.4,548.65,0.3581,0.3607,0,0,0,389.2,356.1);

	this.instance_7 = new lib.REDchild_metalDetector3();
	this.instance_7.setTransform(900.3,547.5,1,1,0,0,0,126,127.3);

	this.instance_8 = new lib.headchild();
	this.instance_8.setTransform(884,548.75,1,1,0,0,0,120.2,126.9);

	this.instance_9 = new lib.REDmetalDetector();
	this.instance_9.setTransform(951.95,613.85,0.3096,0.3096,0,0,0,255.3,161);

	this.instance_10 = new lib.CachedBmp_294();
	this.instance_10.setTransform(792.85,431.6,0.5,0.5);

	this.instance_11 = new lib.childdown2();
	this.instance_11.setTransform(848.25,548.35,1,1,0,0,0,60.5,109);

	this.instance_12 = new lib.CachedBmp_295();
	this.instance_12.setTransform(786.45,439.25,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_296();
	this.instance_13.setTransform(786.45,440.6,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_298();
	this.instance_14.setTransform(817.75,547.55,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_297();
	this.instance_15.setTransform(786.45,441.65,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_300();
	this.instance_16.setTransform(817.75,547.55,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_299();
	this.instance_17.setTransform(786.45,442.25,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_301();
	this.instance_18.setTransform(800.25,444.1,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_60();
	this.instance_19.setTransform(786.45,532.7,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_302();
	this.instance_20.setTransform(800.25,444.1,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_62();
	this.instance_21.setTransform(786.45,532.7,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_303();
	this.instance_22.setTransform(800.25,444.1,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_64();
	this.instance_23.setTransform(786.45,532.7,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_304();
	this.instance_24.setTransform(800.25,444.1,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_66();
	this.instance_25.setTransform(786.45,532.7,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_305();
	this.instance_26.setTransform(800.25,444.1,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_68();
	this.instance_27.setTransform(786.5,532.7,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_306();
	this.instance_28.setTransform(800.25,444.1,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_70();
	this.instance_29.setTransform(786.5,532.7,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_307();
	this.instance_30.setTransform(800.25,444.1,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_72();
	this.instance_31.setTransform(786.55,532.7,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_308();
	this.instance_32.setTransform(800.25,444.1,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_74();
	this.instance_33.setTransform(786.55,532.7,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_76();
	this.instance_34.setTransform(795.75,442.2,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_77();
	this.instance_35.setTransform(760.25,443.15,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_78();
	this.instance_36.setTransform(742.65,457.6,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_79();
	this.instance_37.setTransform(728.3,481.8,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_80();
	this.instance_38.setTransform(705.9,509.25,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_81();
	this.instance_39.setTransform(713.6,501.6,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_82();
	this.instance_40.setTransform(705.9,509.35,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_83();
	this.instance_41.setTransform(728.3,481.8,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_84();
	this.instance_42.setTransform(742.65,457.6,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_85();
	this.instance_43.setTransform(760.25,443.15,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_86();
	this.instance_44.setTransform(795.75,442.2,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_309();
	this.instance_45.setTransform(800.25,444.1,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_87();
	this.instance_46.setTransform(786.6,532.65,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_89();
	this.instance_47.setTransform(787.65,441.95,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_90();
	this.instance_48.setTransform(787.65,422.75,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_91();
	this.instance_49.setTransform(787.65,411.55,0.5,0.5);

	this.instance_50 = new lib.childmetalDetectorstend3();
	this.instance_50.setTransform(893,540.1,1,1,0,0,0,99.2,123.4);

	this.instance_51 = new lib.childjump1();
	this.instance_51.setTransform(893.5,547.05,1,1,0,0,0,104.5,130.3);

	this.instance_52 = new lib.childjump2();
	this.instance_52.setTransform(915.35,529.85,1,1,0,0,0,105,122.8);

	this.instance_53 = new lib.childjump3();
	this.instance_53.setTransform(981.8,510.1,1,1,0,0,0,107.4,137.5);

	this.instance_54 = new lib.childjump5();
	this.instance_54.setTransform(1091.05,530.65,1,1,0,0,0,107.2,142);

	this.instance_55 = new lib.childmetalDetectorstend4();
	this.instance_55.setTransform(1104.85,509.05,1,1,0,0,0,105,122.1);

	this.instance_56 = new lib.childmetalDetectorstend5();
	this.instance_56.setTransform(1118.75,509.15,1,1,0,0,0,110,122);

	this.instance_57 = new lib.childmetalDetectorstend6();
	this.instance_57.setTransform(1154.15,510.15,1,1,0,0,0,99.4,123);

	this.instance_58 = new lib.childmetalDetectorstend1();
	this.instance_58.setTransform(1168.1,507.8,1,1,0,0,0,115.5,121.3);

	this.instance_59 = new lib.childmetalDetectorstend2();
	this.instance_59.setTransform(1188.9,508.05,1,1,0,0,0,105.7,121);

	this.instance_60 = new lib.childbag1();
	this.instance_60.setTransform(1368.95,532.8,1,1,0,0,0,85,118.1);

	this.instance_61 = new lib.childbag2();
	this.instance_61.setTransform(1350.75,536.2,1,1,0,0,0,74.2,121.5);

	this.instance_62 = new lib.childbag3();
	this.instance_62.setTransform(1326.7,535.6,1,1,0,0,0,69.1,120.9);

	this.instance_63 = new lib.childbag4();
	this.instance_63.setTransform(1310.7,535.55,1,1,0,0,0,74.9,120.8);

	this.instance_64 = new lib.childbag5();
	this.instance_64.setTransform(1298.5,535.45,1,1,0,0,0,79.6,120.7);

	this.instance_65 = new lib.childbag6();
	this.instance_65.setTransform(1197.8,536.6,1,1,0,0,0,68.2,121.8);

	this.instance_66 = new lib.childdownbag1();
	this.instance_66.setTransform(1008.9,534.3,1,1,0,0,0,63.6,120.1);

	this.instance_67 = new lib.childdownbag2();
	this.instance_67.setTransform(1010,534.3,1,1,0,0,0,64.7,112.8);

	this.instance_68 = new lib.childdownbag3();
	this.instance_68.setTransform(1009.5,540.75,1,1,0,0,0,75.6,112.8);

	this.instance_69 = new lib.childdownbag4();
	this.instance_69.setTransform(1002.2,551.9,1,1,0,0,0,82.9,112.8);

	this.instance_70 = new lib.childdownbag5();
	this.instance_70.setTransform(984.15,564.1,1,1,0,0,0,86.7,112.8);

	this.instance_71 = new lib.childdowntrashbag5();
	this.instance_71.setTransform(979.35,574.1,1,1,0,0,0,86.7,111.6);

	this.instance_72 = new lib.childdowntrashbag4();
	this.instance_72.setTransform(1002.2,550.9,1,1,0,0,0,82.9,111.6);

	this.instance_73 = new lib.childdowntrashbag3();
	this.instance_73.setTransform(1009.45,539.55,1,1,0,0,0,75.5,111.6);

	this.instance_74 = new lib.childdowntrashbag2();
	this.instance_74.setTransform(1008.8,534.35,1,1,0,0,0,63.5,112.8);

	this.instance_75 = new lib.childdowntrashbag1();
	this.instance_75.setTransform(1007.9,534.35,1,1,0,0,0,62.6,120.1);

	this.instance_76 = new lib.childtrashbag3();
	this.instance_76.setTransform(1003.75,534.4,1,1,0,0,0,68.3,119.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_4}]},8).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_4}]},8).to({state:[{t:this.instance_5}]},8).to({state:[{t:this.instance}]},8).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},8).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_10},{t:this.instance_9,p:{regY:161,rotation:0,x:951.95,y:613.85,regX:255.3}}]},2).to({state:[{t:this.instance_11},{t:this.instance_9,p:{regY:161.2,rotation:-14.9971,x:959.4,y:601.65,regX:255.3}}]},2).to({state:[{t:this.instance_12},{t:this.instance_9,p:{regY:161.3,rotation:-22.2183,x:958.45,y:601.7,regX:255.4}}]},2).to({state:[{t:this.instance_13},{t:this.instance_9,p:{regY:161.6,rotation:-28.6934,x:956.9,y:599.35,regX:255.5}}]},2).to({state:[{t:this.instance_15},{t:this.instance_9,p:{regY:161.6,rotation:-28.6934,x:956.9,y:608.95,regX:255.5}},{t:this.instance_14}]},2).to({state:[{t:this.instance_17},{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_16}]},2).to({state:[{t:this.instance_19},{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_18}]},37).to({state:[{t:this.instance_21},{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_20}]},2).to({state:[{t:this.instance_23},{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_22}]},2).to({state:[{t:this.instance_25},{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_24}]},2).to({state:[{t:this.instance_27},{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_26}]},2).to({state:[{t:this.instance_29},{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_28}]},2).to({state:[{t:this.instance_31},{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_30}]},2).to({state:[{t:this.instance_33},{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_32}]},2).to({state:[{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_34}]},2).to({state:[{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_35}]},1).to({state:[{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_36}]},1).to({state:[{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_37}]},1).to({state:[{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_38}]},1).to({state:[{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_39}]},1).to({state:[{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_40}]},4).to({state:[{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_41}]},1).to({state:[{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_42}]},1).to({state:[{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_43}]},1).to({state:[{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_44}]},1).to({state:[{t:this.instance_46},{t:this.instance_9,p:{regY:161.7,rotation:-34.4373,x:956.95,y:601.8,regX:255.5}},{t:this.instance_45}]},1).to({state:[{t:this.instance_47},{t:this.instance_9,p:{regY:161.8,rotation:-19.4378,x:957,y:601.8,regX:255.7}}]},1).to({state:[{t:this.instance_48},{t:this.instance_9,p:{regY:161.9,rotation:-4.4381,x:957.05,y:601.8,regX:255.7}}]},1).to({state:[{t:this.instance_49},{t:this.instance_9,p:{regY:162.1,rotation:10.5595,x:939.5,y:601.9,regX:256}}]},1).to({state:[{t:this.instance_50,p:{x:893,y:540.1}}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52,p:{x:915.35,y:529.85}}]},1).to({state:[{t:this.instance_52,p:{x:940.95,y:507.45}}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_52,p:{x:1021.6,y:501.85}}]},1).to({state:[{t:this.instance_52,p:{x:1047.2,y:511.45}}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_50,p:{x:1088.45,y:512}}]},2).to({state:[{t:this.instance_55,p:{x:1104.85,y:509.05}}]},3).to({state:[{t:this.instance_56,p:{x:1118.75,y:509.15}}]},3).to({state:[{t:this.instance_57,p:{x:1154.15,y:510.15}}]},3).to({state:[{t:this.instance_58,p:{x:1168.1,y:507.8}}]},3).to({state:[{t:this.instance_59,p:{x:1188.9,y:508.05}}]},3).to({state:[{t:this.instance_50,p:{x:1214.1,y:509.75}}]},3).to({state:[{t:this.instance_55,p:{x:1230.7,y:511.1}}]},3).to({state:[{t:this.instance_56,p:{x:1244.65,y:511}}]},3).to({state:[{t:this.instance_57,p:{x:1278.05,y:514.1}}]},3).to({state:[{t:this.instance_58,p:{x:1291.35,y:512.35}}]},3).to({state:[{t:this.instance_59,p:{x:1313,y:512.6}}]},3).to({state:[{t:this.instance_50,p:{x:1339.7,y:515}}]},3).to({state:[{t:this.instance_55,p:{x:1357.8,y:513.7}}]},3).to({state:[{t:this.instance_56,p:{x:1371.05,y:513.6}}]},3).to({state:[]},3).to({state:[{t:this.instance_60,p:{x:1368.95,y:532.8}}]},4).to({state:[{t:this.instance_61,p:{x:1350.75,y:536.2}}]},2).to({state:[{t:this.instance_62,p:{x:1326.7,y:535.6}}]},2).to({state:[{t:this.instance_63,p:{x:1310.7,y:535.55}}]},2).to({state:[{t:this.instance_64,p:{x:1298.5,y:535.45}}]},2).to({state:[{t:this.instance_64,p:{x:1298.5,y:535.45}}]},2).to({state:[{t:this.instance_60,p:{x:1273.5,y:532.85}}]},2).to({state:[{t:this.instance_61,p:{x:1254,y:536.2}}]},2).to({state:[{t:this.instance_62,p:{x:1232.3,y:535.6}}]},2).to({state:[{t:this.instance_63,p:{x:1218.6,y:535.5}}]},2).to({state:[{t:this.instance_65,p:{x:1197.8,y:536.6}}]},2).to({state:[{t:this.instance_64,p:{x:1187.7,y:537.55}}]},2).to({state:[{t:this.instance_60,p:{x:1161.55,y:536.05}}]},2).to({state:[{t:this.instance_61,p:{x:1140.35,y:538.15}}]},2).to({state:[{t:this.instance_62,p:{x:1117.35,y:537.55}}]},2).to({state:[{t:this.instance_63,p:{x:1103.65,y:537.5}}]},2).to({state:[{t:this.instance_65,p:{x:1082.7,y:536.65}}]},2).to({state:[{t:this.instance_64,p:{x:1072.95,y:537.6}}]},2).to({state:[{t:this.instance_60,p:{x:1049.1,y:535}}]},2).to({state:[{t:this.instance_61,p:{x:1027.5,y:536.2}}]},2).to({state:[{t:this.instance_62,p:{x:1002.9,y:535.6}}]},2).to({state:[{t:this.instance_66}]},2).to({state:[{t:this.instance_67}]},2).to({state:[{t:this.instance_68}]},2).to({state:[{t:this.instance_69}]},2).to({state:[{t:this.instance_70,p:{x:984.15,y:564.1}}]},2).to({state:[{t:this.instance_70,p:{x:979.35,y:575.3}}]},2).to({state:[{t:this.instance_70,p:{x:977.75,y:583.3}}]},2).to({state:[{t:this.instance_71,p:{x:979.35,y:574.1}}]},2).to({state:[{t:this.instance_71,p:{x:984.15,y:562.9}}]},2).to({state:[{t:this.instance_72}]},2).to({state:[{t:this.instance_73}]},2).to({state:[{t:this.instance_74}]},2).to({state:[{t:this.instance_75}]},2).to({state:[{t:this.instance_76}]},2).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(5).to({x:-213.45},0).wait(5).to({x:-193.95},0).wait(5).to({x:-174.45},0).wait(5).to({x:-154.95},0).wait(5).to({x:-135.45},0).wait(5).to({x:-115.95},0).wait(5).to({x:-96.45},0).wait(5).to({x:-76.95},0).wait(5).to({x:-57.45},0).to({_off:true},5).wait(25).to({_off:false,x:66.6,y:532.75},0).to({_off:true},5).wait(25).to({_off:false,x:181.2,y:529.7},0).to({_off:true},5).wait(25).to({_off:false,x:295,y:531.3},0).to({_off:true},5).wait(34).to({_off:false,x:413.8,y:469.6},0).to({_off:true},5).wait(25).to({_off:false,x:535.55,y:466.9},0).to({_off:true},5).wait(37).to({_off:false,x:656.7,y:564.8},0).to({_off:true},7).wait(265));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51).to({_off:false},0).to({_off:true},5).wait(25).to({_off:false,x:185.35,y:539.9},0).to({_off:true},5).wait(25).to({_off:false,x:299.95,y:536.3},0).to({_off:true},5).wait(25).to({_off:false,x:413.75,y:518.4},0).to({_off:true},8).wait(31).to({_off:false,x:536.5,y:476.2},0).to({_off:true},5).wait(25).to({_off:false,x:654.4,y:473.5},0).to({_off:true},5).wait(39).to({_off:false,x:775.45,y:570},0).to({_off:true},5).wait(260));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56).to({_off:false},0).to({_off:true},5).wait(25).to({_off:false,x:210.9,y:538.2},0).to({_off:true},5).wait(25).to({_off:false,x:324.75,y:534.6},0).to({_off:true},5).wait(28).to({_off:false,x:438.1,y:497.2},0).to({_off:true},8).wait(28).to({_off:false,x:564,y:474.5},0).to({_off:true},5).wait(25).to({_off:false,x:681.2,y:492.05},0).to({_off:true},8).wait(36).to({_off:false,x:801,y:568.3},0).to({_off:true},5).wait(255));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(61).to({_off:false},0).to({_off:true},5).wait(25).to({_off:false,x:225.8,y:537.3},0).to({_off:true},5).wait(25).to({_off:false,x:340.25,y:536.5},0).to({_off:true},5).wait(31).to({_off:false,x:455.55,y:479.1},0).to({_off:true},8).wait(25).to({_off:false,x:581.45,y:475.9},0).to({_off:true},5).wait(28).to({_off:false,x:698.65,y:512.95},0).to({_off:true},8).wait(33).to({_off:false,x:815.3,y:567.95},0).to({_off:true},5).wait(250));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66).to({_off:false},0).to({_off:true},5).wait(25).to({_off:false,x:236.35,y:534.85},0).to({_off:true},5).wait(25).to({_off:false,x:351.85,y:536},0).to({_off:true},5).wait(34).to({_off:false,x:470.3,y:477.5},0).to({_off:true},5).wait(25).to({_off:false,x:593.85,y:472.05},0).to({_off:true},5).wait(31).to({_off:false,x:711.45,y:530.85},0).to({_off:true},8).wait(30).to({_off:false,x:824.55,y:546.85},0).to({_off:true},8).wait(242));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(71).to({_off:false},0).to({_off:true},5).wait(25).to({_off:false,x:267.05,y:536.75},0).to({_off:true},5).wait(25).to({_off:false,x:382.55,y:538},0).to({_off:true},5).wait(34).to({_off:false,x:501,y:475.5},0).to({_off:true},5).wait(25).to({_off:false,x:623.1,y:474.05},0).to({_off:true},5).wait(34).to({_off:false,x:742.15,y:552.35},0).to({_off:true},8).wait(30).to({_off:false,x:855.25,y:548.85},0).to({_off:true},5).wait(237));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276.7,0,1757.9,700.8);


// stage content:
(lib.sea_of_treasures = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,23,45,67,89,111,133,155,177,199,221,243,264,282,300,311,322,335,371,567];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.start = this.startScene.start;
		var self=this;
		self.stop();
		
		self.start.addEventListener("click",startPlaying);
		
		function startPlaying()
		{
				self.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		playSound("Beep");
		playSound("SeaSound");
	}
	this.frame_23 = function() {
		playSound("Beep");
	}
	this.frame_45 = function() {
		playSound("Beep");
	}
	this.frame_67 = function() {
		playSound("Beep");
	}
	this.frame_89 = function() {
		playSound("Beep");
	}
	this.frame_111 = function() {
		playSound("Beep");
	}
	this.frame_133 = function() {
		playSound("Beep");
	}
	this.frame_155 = function() {
		playSound("Beep");
	}
	this.frame_177 = function() {
		playSound("Beep");
	}
	this.frame_199 = function() {
		playSound("Beep");
	}
	this.frame_221 = function() {
		playSound("Beep");
	}
	this.frame_243 = function() {
		playSound("Beep");
	}
	this.frame_264 = function() {
		playSound("Beep");
	}
	this.frame_282 = function() {
		playSound("Beepfast");
	}
	this.frame_300 = function() {
		playSound("digging");
	}
	this.frame_311 = function() {
		playSound("digging");
	}
	this.frame_322 = function() {
		playSound("digging");
	}
	this.frame_335 = function() {
		playSound("angry");
	}
	this.frame_371 = function() {
		playSound("jump");
	}
	this.frame_567 = function() {
		this.playagain = this.endScene.playagain;
		this.___loopingOver___ = true;
		var self=this;
		self.stop();
		
		self.playagain.addEventListener("click",playagain);
		
		function playagain()
		{
				self.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(22).call(this.frame_23).wait(22).call(this.frame_45).wait(22).call(this.frame_67).wait(22).call(this.frame_89).wait(22).call(this.frame_111).wait(22).call(this.frame_133).wait(22).call(this.frame_155).wait(22).call(this.frame_177).wait(22).call(this.frame_199).wait(22).call(this.frame_221).wait(22).call(this.frame_243).wait(21).call(this.frame_264).wait(18).call(this.frame_282).wait(18).call(this.frame_300).wait(11).call(this.frame_311).wait(11).call(this.frame_322).wait(13).call(this.frame_335).wait(36).call(this.frame_371).wait(196).call(this.frame_567).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1).to({regX:0.1,regY:0.1,scaleX:0.6033,scaleY:0.6033,x:380.7,y:488.95},0).wait(1).to({regX:0,regY:0,scaleX:0.6027,scaleY:0.6027,x:380.4033,y:488.6073},0).wait(1).to({scaleX:0.6021,scaleY:0.6021,x:380.1565,y:488.3147},0).wait(1).to({scaleX:0.6015,scaleY:0.6015,x:379.9098,y:488.022},0).wait(1).to({scaleX:0.6009,scaleY:0.6009,x:379.6631,y:487.7294},0).wait(1).to({scaleX:0.6003,scaleY:0.6003,x:379.4164,y:487.4367},0).wait(1).to({scaleX:0.5997,scaleY:0.5997,x:379.1697,y:487.144},0).wait(1).to({scaleX:0.5991,scaleY:0.5991,x:378.9229,y:486.8514},0).wait(1).to({scaleX:0.5984,scaleY:0.5984,x:378.6762,y:486.5587},0).wait(1).to({scaleX:0.5978,scaleY:0.5978,x:378.4295,y:486.266},0).wait(1).to({scaleX:0.5972,scaleY:0.5972,x:378.1828,y:485.9734},0).wait(1).to({scaleX:0.5966,scaleY:0.5966,x:377.936,y:485.6807},0).wait(1).to({scaleX:0.596,scaleY:0.596,x:377.6893,y:485.3881},0).wait(1).to({scaleX:0.5954,scaleY:0.5954,x:377.4426,y:485.0954},0).wait(1).to({scaleX:0.5948,scaleY:0.5948,x:377.1959,y:484.8027},0).wait(1).to({scaleX:0.5942,scaleY:0.5942,x:376.9491,y:484.5101},0).wait(1).to({scaleX:0.5936,scaleY:0.5936,x:376.7024,y:484.2174},0).wait(1).to({scaleX:0.593,scaleY:0.593,x:376.4557,y:483.9248},0).wait(1).to({scaleX:0.5924,scaleY:0.5924,x:376.209,y:483.6321},0).wait(1).to({scaleX:0.5917,scaleY:0.5917,x:375.9622,y:483.3394},0).wait(1).to({scaleX:0.5911,scaleY:0.5911,x:375.7155,y:483.0468},0).wait(1).to({scaleX:0.5905,scaleY:0.5905,x:375.4688,y:482.7541},0).wait(1).to({scaleX:0.5899,scaleY:0.5899,x:375.2221,y:482.4615},0).wait(1).to({scaleX:0.5893,scaleY:0.5893,x:374.9753,y:482.1688},0).wait(1).to({scaleX:0.5887,scaleY:0.5887,x:374.7286,y:481.8761},0).wait(1).to({scaleX:0.5881,scaleY:0.5881,x:374.4819,y:481.5835},0).wait(1).to({scaleX:0.5875,scaleY:0.5875,x:374.2352,y:481.2908},0).wait(1).to({scaleX:0.5869,scaleY:0.5869,x:373.9884,y:480.9981},0).wait(1).to({scaleX:0.5863,scaleY:0.5863,x:373.7417,y:480.7055},0).wait(1).to({scaleX:0.5857,scaleY:0.5857,x:373.495,y:480.4128},0).wait(1).to({scaleX:0.5851,scaleY:0.5851,x:373.2483,y:480.1202},0).wait(1).to({scaleX:0.5844,scaleY:0.5844,x:373.0015,y:479.8275},0).wait(1).to({scaleX:0.5838,scaleY:0.5838,x:372.7548,y:479.5348},0).wait(1).to({scaleX:0.5832,scaleY:0.5832,x:372.5081,y:479.2422},0).wait(1).to({scaleX:0.5826,scaleY:0.5826,x:372.2614,y:478.9495},0).wait(1).to({scaleX:0.582,scaleY:0.582,x:372.0146,y:478.6569},0).wait(1).to({scaleX:0.5814,scaleY:0.5814,x:371.7679,y:478.3642},0).wait(1).to({scaleX:0.5808,scaleY:0.5808,x:371.5212,y:478.0715},0).wait(1).to({scaleX:0.5802,scaleY:0.5802,x:371.2745,y:477.7789},0).wait(1).to({scaleX:0.5796,scaleY:0.5796,x:371.0277,y:477.4862},0).wait(1).to({scaleX:0.579,scaleY:0.579,x:370.781,y:477.1936},0).wait(1).to({scaleX:0.5784,scaleY:0.5784,x:370.5343,y:476.9009},0).wait(1).to({scaleX:0.5777,scaleY:0.5777,x:370.2876,y:476.6082},0).wait(1).to({scaleX:0.5771,scaleY:0.5771,x:370.0408,y:476.3156},0).wait(1).to({scaleX:0.5765,scaleY:0.5765,x:369.7941,y:476.0229},0).wait(1).to({scaleX:0.5759,scaleY:0.5759,x:369.5474,y:475.7302},0).wait(1).to({scaleX:0.5753,scaleY:0.5753,x:369.3007,y:475.4376},0).wait(1).to({scaleX:0.5747,scaleY:0.5747,x:369.054,y:475.1449},0).wait(1).to({scaleX:0.5741,scaleY:0.5741,x:368.8072,y:474.8523},0).wait(1).to({scaleX:0.5735,scaleY:0.5735,x:368.5605,y:474.5596},0).wait(1).to({scaleX:0.5729,scaleY:0.5729,x:368.3138,y:474.2669},0).wait(1).to({scaleX:0.5723,scaleY:0.5723,x:368.0671,y:473.9743},0).wait(1).to({scaleX:0.5717,scaleY:0.5717,x:367.8203,y:473.6816},0).wait(1).to({scaleX:0.571,scaleY:0.571,x:367.5736,y:473.389},0).wait(1).to({scaleX:0.5704,scaleY:0.5704,x:367.3269,y:473.0963},0).wait(1).to({scaleX:0.5698,scaleY:0.5698,x:367.0802,y:472.8036},0).wait(1).to({scaleX:0.5692,scaleY:0.5692,x:366.8334,y:472.511},0).wait(1).to({scaleX:0.5686,scaleY:0.5686,x:366.5867,y:472.2183},0).wait(1).to({scaleX:0.568,scaleY:0.568,x:366.34,y:471.9257},0).wait(1).to({scaleX:0.5674,scaleY:0.5674,x:366.0933,y:471.633},0).wait(1).to({scaleX:0.5668,scaleY:0.5668,x:365.8465,y:471.3403},0).wait(1).to({scaleX:0.5662,scaleY:0.5662,x:365.5998,y:471.0477},0).wait(1).to({scaleX:0.5656,scaleY:0.5656,x:365.3531,y:470.755},0).wait(1).to({scaleX:0.565,scaleY:0.565,x:365.1064,y:470.4623},0).wait(1).to({scaleX:0.5643,scaleY:0.5643,x:364.8596,y:470.1697},0).wait(1).to({scaleX:0.5637,scaleY:0.5637,x:364.6129,y:469.877},0).wait(1).to({scaleX:0.5631,scaleY:0.5631,x:364.3662,y:469.5844},0).wait(1).to({scaleX:0.5625,scaleY:0.5625,x:364.1195,y:469.2917},0).wait(1).to({scaleX:0.5619,scaleY:0.5619,x:363.8727,y:468.999},0).wait(1).to({scaleX:0.5613,scaleY:0.5613,x:366.9994,y:468.9042},0).wait(1).to({scaleX:0.5607,scaleY:0.5607,x:370.1261,y:468.8094},0).wait(1).to({scaleX:0.5601,scaleY:0.5601,x:373.2528,y:468.7145},0).wait(1).to({scaleX:0.5595,scaleY:0.5595,x:376.3795,y:468.6197},0).wait(1).to({scaleX:0.5589,scaleY:0.5589,x:379.5062,y:468.5249},0).wait(1).to({scaleX:0.5583,scaleY:0.5583,x:382.6329,y:468.43},0).wait(1).to({scaleX:0.5576,scaleY:0.5576,x:385.7596,y:468.3352},0).wait(1).to({scaleX:0.557,scaleY:0.557,x:388.8863,y:468.2403},0).wait(1).to({scaleX:0.5564,scaleY:0.5564,x:392.0129,y:468.1455},0).wait(1).to({scaleX:0.5558,scaleY:0.5558,x:395.1396,y:468.0507},0).wait(1).to({scaleX:0.5552,scaleY:0.5552,x:398.2663,y:467.9558},0).wait(1).to({scaleX:0.5546,scaleY:0.5546,x:401.393,y:467.861},0).wait(1).to({scaleX:0.554,scaleY:0.554,x:404.5197,y:467.7662},0).wait(1).to({scaleX:0.5534,scaleY:0.5534,x:407.6464,y:467.6713},0).wait(1).to({scaleX:0.5528,scaleY:0.5528,x:410.7731,y:467.5765},0).wait(1).to({scaleX:0.5522,scaleY:0.5522,x:413.8998,y:467.4816},0).wait(1).to({scaleX:0.5516,scaleY:0.5516,x:417.0265,y:467.3868},0).wait(1).to({scaleX:0.551,scaleY:0.551,x:420.1531,y:467.292},0).wait(1).to({scaleX:0.5503,scaleY:0.5503,x:423.2798,y:467.1971},0).wait(1).to({scaleX:0.5497,scaleY:0.5497,x:426.4065,y:467.1023},0).wait(1).to({scaleX:0.5491,scaleY:0.5491,x:429.5332,y:467.0075},0).wait(1).to({scaleX:0.5485,scaleY:0.5485,x:432.6599,y:466.9126},0).wait(1).to({scaleX:0.5479,scaleY:0.5479,x:435.7866,y:466.8178},0).wait(1).to({scaleX:0.5473,scaleY:0.5473,x:438.9133,y:466.7229},0).wait(1).to({scaleX:0.5467,scaleY:0.5467,x:442.04,y:466.6281},0).wait(1).to({scaleX:0.5461,scaleY:0.5461,x:445.1667,y:466.5333},0).wait(1).to({scaleX:0.5455,scaleY:0.5455,x:448.2933,y:466.4384},0).wait(1).to({scaleX:0.5449,scaleY:0.5449,x:451.42,y:466.3436},0).wait(1).to({scaleX:0.5443,scaleY:0.5443,x:454.5467,y:466.2488},0).wait(1).to({scaleX:0.5436,scaleY:0.5436,x:457.6734,y:466.1539},0).wait(1).to({scaleX:0.543,scaleY:0.543,x:460.8001,y:466.0591},0).wait(1).to({scaleX:0.5424,scaleY:0.5424,x:463.9268,y:465.9643},0).wait(1).to({scaleX:0.5418,scaleY:0.5418,x:467.0535,y:465.8694},0).wait(1).to({scaleX:0.5412,scaleY:0.5412,x:470.1802,y:465.7746},0).wait(1).to({scaleX:0.5406,scaleY:0.5406,x:473.3069,y:465.6797},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:476.4335,y:465.5849},0).wait(1).to({scaleX:0.5394,scaleY:0.5394,x:479.5602,y:465.4901},0).wait(1).to({scaleX:0.5388,scaleY:0.5388,x:482.6869,y:465.3952},0).wait(1).to({scaleX:0.5382,scaleY:0.5382,x:485.8136,y:465.3004},0).wait(1).to({scaleX:0.5376,scaleY:0.5376,x:488.9403,y:465.2056},0).wait(1).to({scaleX:0.5369,scaleY:0.5369,x:492.067,y:465.1107},0).wait(1).to({scaleX:0.5363,scaleY:0.5363,x:495.1937,y:465.0159},0).wait(1).to({scaleX:0.5357,scaleY:0.5357,x:498.3204,y:464.921},0).wait(1).to({scaleX:0.5351,scaleY:0.5351,x:501.4471,y:464.8262},0).wait(1).to({scaleX:0.5345,scaleY:0.5345,x:504.5737,y:464.7314},0).wait(1).to({scaleX:0.5339,scaleY:0.5339,x:507.7004,y:464.6365},0).wait(1).to({scaleX:0.5333,scaleY:0.5333,x:510.8271,y:464.5417},0).wait(1).to({scaleX:0.5327,scaleY:0.5327,x:513.9538,y:464.4469},0).wait(1).to({scaleX:0.5321,scaleY:0.5321,x:517.0805,y:464.352},0).wait(1).to({scaleX:0.5315,scaleY:0.5315,x:520.2072,y:464.2572},0).wait(1).to({scaleX:0.5309,scaleY:0.5309,x:522.4212,y:464.6636},0).wait(1).to({scaleX:0.5302,scaleY:0.5302,x:524.6352,y:465.07},0).wait(1).to({scaleX:0.5296,scaleY:0.5296,x:526.8491,y:465.4764},0).wait(1).to({scaleX:0.529,scaleY:0.529,x:529.0631,y:465.8827},0).wait(1).to({scaleX:0.5284,scaleY:0.5284,x:531.2771,y:466.2891},0).wait(1).to({scaleX:0.5278,scaleY:0.5278,x:533.4911,y:466.6955},0).wait(1).to({scaleX:0.5272,scaleY:0.5272,x:535.7051,y:467.1019},0).wait(1).to({scaleX:0.5266,scaleY:0.5266,x:537.9191,y:467.5083},0).wait(1).to({scaleX:0.526,scaleY:0.526,x:540.133,y:467.9147},0).wait(1).to({scaleX:0.5254,scaleY:0.5254,x:542.347,y:468.3211},0).wait(1).to({scaleX:0.5248,scaleY:0.5248,x:544.561,y:468.7275},0).wait(1).to({scaleX:0.5242,scaleY:0.5242,x:546.775,y:469.1339},0).wait(1).to({scaleX:0.5236,scaleY:0.5236,x:548.989,y:469.5403},0).wait(1).to({scaleX:0.5229,scaleY:0.5229,x:551.203,y:469.9466},0).wait(1).to({scaleX:0.5223,scaleY:0.5223,x:553.417,y:470.353},0).wait(1).to({scaleX:0.5217,scaleY:0.5217,x:555.6309,y:470.7594},0).wait(1).to({scaleX:0.5211,scaleY:0.5211,x:557.8449,y:471.1658},0).wait(1).to({scaleX:0.5205,scaleY:0.5205,x:560.0589,y:471.5722},0).wait(1).to({scaleX:0.5199,scaleY:0.5199,x:562.2729,y:471.9786},0).wait(1).to({scaleX:0.5193,scaleY:0.5193,x:564.4869,y:472.385},0).wait(1).to({scaleX:0.5187,scaleY:0.5187,x:566.7009,y:472.7914},0).wait(1).to({scaleX:0.5181,scaleY:0.5181,x:568.9149,y:473.1978},0).wait(1).to({scaleX:0.5175,scaleY:0.5175,x:571.1288,y:473.6042},0).wait(1).to({scaleX:0.5169,scaleY:0.5169,x:573.3428,y:474.0105},0).wait(1).to({scaleX:0.5162,scaleY:0.5162,x:575.5568,y:474.4169},0).wait(1).to({scaleX:0.5156,scaleY:0.5156,x:577.7708,y:474.8233},0).wait(1).to({scaleX:0.515,scaleY:0.515,x:579.9848,y:475.2297},0).wait(1).to({scaleX:0.5144,scaleY:0.5144,x:582.1988,y:475.6361},0).wait(1).to({scaleX:0.5138,scaleY:0.5138,x:584.4127,y:476.0425},0).wait(1).to({scaleX:0.5132,scaleY:0.5132,x:586.6267,y:476.4489},0).wait(1).to({scaleX:0.5126,scaleY:0.5126,x:588.8407,y:476.8553},0).wait(1).to({scaleX:0.512,scaleY:0.512,x:591.0547,y:477.2617},0).wait(1).to({scaleX:0.5114,scaleY:0.5114,x:593.2687,y:477.6681},0).wait(1).to({scaleX:0.5108,scaleY:0.5108,x:595.4827,y:478.0744},0).wait(1).to({scaleX:0.5102,scaleY:0.5102,x:597.6967,y:478.4808},0).wait(1).to({scaleX:0.5095,scaleY:0.5095,x:599.9106,y:478.8872},0).wait(1).to({scaleX:0.5089,scaleY:0.5089,x:602.1246,y:479.2936},0).wait(1).to({scaleX:0.5083,scaleY:0.5083,x:604.3386,y:479.7},0).wait(1).to({scaleX:0.5077,scaleY:0.5077,x:606.5526,y:480.1064},0).wait(1).to({scaleX:0.5071,scaleY:0.5071,x:608.7666,y:480.5128},0).wait(1).to({scaleX:0.5065,scaleY:0.5065,x:610.9806,y:480.9192},0).wait(1).to({scaleX:0.5059,scaleY:0.5059,x:613.1946,y:481.3256},0).wait(1).to({scaleX:0.5053,scaleY:0.5053,x:615.4085,y:481.732},0).wait(1).to({scaleX:0.5047,scaleY:0.5047,x:617.6225,y:482.1383},0).wait(1).to({scaleX:0.5041,scaleY:0.5041,x:619.8365,y:482.5447},0).wait(1).to({scaleX:0.5035,scaleY:0.5035,x:622.0505,y:482.9511},0).wait(1).to({scaleX:0.5028,scaleY:0.5028,x:624.2645,y:483.3575},0).wait(1).to({scaleX:0.5022,scaleY:0.5022,x:626.4785,y:483.7639},0).wait(1).to({scaleX:0.5016,scaleY:0.5016,x:628.6924,y:484.1703},0).wait(1).to({scaleX:0.501,scaleY:0.501,x:630.9064,y:484.5767},0).wait(1).to({scaleX:0.5004,scaleY:0.5004,x:633.1204,y:484.9831},0).wait(1).to({scaleX:0.4998,scaleY:0.4998,x:635.3344,y:485.3895},0).wait(1).to({scaleX:0.4992,scaleY:0.4992,x:637.5484,y:485.7959},0).wait(1).to({scaleX:0.4986,scaleY:0.4986,x:639.7624,y:486.2022},0).wait(1).to({scaleX:0.498,scaleY:0.498,x:641.9764,y:486.6086},0).wait(1).to({scaleX:0.4974,scaleY:0.4974,x:644.1903,y:487.015},0).wait(1).to({scaleX:0.4968,scaleY:0.4968,x:646.4043,y:487.4214},0).wait(1).to({scaleX:0.4962,scaleY:0.4962,x:648.6183,y:487.8278},0).wait(1).to({scaleX:0.4955,scaleY:0.4955,x:650.8323,y:488.2342},0).wait(1).to({scaleX:0.4949,scaleY:0.4949,x:653.0463,y:488.6406},0).wait(1).to({scaleX:0.4943,scaleY:0.4943,x:655.2603,y:489.047},0).wait(1).to({scaleX:0.4937,scaleY:0.4937,x:657.4742,y:489.4534},0).wait(1).to({scaleX:0.4931,scaleY:0.4931,x:659.6882,y:489.8598},0).wait(1).to({scaleX:0.4925,scaleY:0.4925,x:661.9022,y:490.2661},0).wait(1).to({scaleX:0.4919,scaleY:0.4919,x:664.1162,y:490.6725},0).wait(1).to({scaleX:0.4913,scaleY:0.4913,x:666.3302,y:491.0789},0).wait(1).to({scaleX:0.4907,scaleY:0.4907,x:668.5442,y:491.4853},0).wait(1).to({scaleX:0.4901,scaleY:0.4901,x:670.7582,y:491.8917},0).wait(1).to({scaleX:0.4895,scaleY:0.4895,x:672.9721,y:492.2981},0).wait(1).to({scaleX:0.4888,scaleY:0.4888,x:675.1861,y:492.7045},0).wait(1).to({scaleX:0.4882,scaleY:0.4882,x:677.4001,y:493.1109},0).wait(1).to({scaleX:0.4876,scaleY:0.4876,x:679.6141,y:493.5173},0).wait(1).to({scaleX:0.487,scaleY:0.487,x:681.8281,y:493.9237},0).wait(1).to({scaleX:0.4864,scaleY:0.4864,x:684.0421,y:494.33},0).wait(1).to({scaleX:0.4858,scaleY:0.4858,x:686.2561,y:494.7364},0).wait(1).to({scaleX:0.4852,scaleY:0.4852,x:688.47,y:495.1428},0).wait(1).to({scaleX:0.4846,scaleY:0.4846,x:690.684,y:495.5492},0).wait(1).to({scaleX:0.484,scaleY:0.484,x:692.898,y:495.9556},0).wait(1).to({scaleX:0.4834,scaleY:0.4834,x:695.112,y:496.362},0).wait(1).to({scaleX:0.4828,scaleY:0.4828,x:698.5371,y:496.5513},0).wait(1).to({scaleX:0.4821,scaleY:0.4821,x:701.9621,y:496.7407},0).wait(1).to({scaleX:0.4815,scaleY:0.4815,x:705.3872,y:496.93},0).wait(1).to({scaleX:0.4809,scaleY:0.4809,x:708.8122,y:497.1194},0).wait(1).to({scaleX:0.4803,scaleY:0.4803,x:712.2373,y:497.3087},0).wait(1).to({scaleX:0.4797,scaleY:0.4797,x:715.6624,y:497.4981},0).wait(1).to({scaleX:0.4791,scaleY:0.4791,x:719.0874,y:497.6874},0).wait(1).to({scaleX:0.4785,scaleY:0.4785,x:722.5125,y:497.8768},0).wait(1).to({scaleX:0.4779,scaleY:0.4779,x:725.9375,y:498.0661},0).wait(1).to({scaleX:0.4773,scaleY:0.4773,x:729.3626,y:498.2555},0).wait(1).to({scaleX:0.4767,scaleY:0.4767,x:732.7877,y:498.4448},0).wait(1).to({scaleX:0.4761,scaleY:0.4761,x:736.2127,y:498.6342},0).wait(1).to({scaleX:0.4754,scaleY:0.4754,x:739.6378,y:498.8235},0).wait(1).to({scaleX:0.4748,scaleY:0.4748,x:743.0628,y:499.0128},0).wait(1).to({scaleX:0.4742,scaleY:0.4742,x:746.4879,y:499.2022},0).wait(1).to({scaleX:0.4736,scaleY:0.4736,x:749.913,y:499.3915},0).wait(1).to({scaleX:0.473,scaleY:0.473,x:753.338,y:499.5809},0).wait(1).to({scaleX:0.4724,scaleY:0.4724,x:756.7631,y:499.7702},0).wait(1).to({scaleX:0.4718,scaleY:0.4718,x:760.1882,y:499.9596},0).wait(1).to({scaleX:0.4712,scaleY:0.4712,x:763.6132,y:500.1489},0).wait(1).to({scaleX:0.4706,scaleY:0.4706,x:767.0383,y:500.3383},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:770.4633,y:500.5276},0).wait(1).to({scaleX:0.4694,scaleY:0.4694,x:773.8884,y:500.717},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,x:777.3135,y:500.9063},0).wait(1).to({scaleX:0.4681,scaleY:0.4681,x:780.7385,y:501.0957},0).wait(1).to({scaleX:0.4675,scaleY:0.4675,x:784.1636,y:501.285},0).wait(1).to({scaleX:0.4669,scaleY:0.4669,x:787.5886,y:501.4744},0).wait(1).to({scaleX:0.4663,scaleY:0.4663,x:791.0137,y:501.6637},0).wait(1).to({scaleX:0.4657,scaleY:0.4657,x:794.4388,y:501.853},0).wait(1).to({scaleX:0.4651,scaleY:0.4651,x:797.8638,y:502.0424},0).wait(1).to({scaleX:0.4645,scaleY:0.4645,x:801.2889,y:502.2317},0).wait(1).to({scaleX:0.4639,scaleY:0.4639,x:804.7139,y:502.4211},0).wait(1).to({scaleX:0.4633,scaleY:0.4633,x:808.139,y:502.6104},0).wait(1).to({scaleX:0.4627,scaleY:0.4627,x:811.5641,y:502.7998},0).wait(1).to({scaleX:0.4621,scaleY:0.4621,x:814.9891,y:502.9891},0).wait(1).to({scaleX:0.4614,scaleY:0.4614,x:818.4142,y:503.1785},0).wait(1).to({scaleX:0.4608,scaleY:0.4608,x:821.8392,y:503.3678},0).wait(1).to({scaleX:0.4602,scaleY:0.4602,x:825.2643,y:503.5572},0).wait(1).to({scaleX:0.4596,scaleY:0.4596,x:828.6894,y:503.7465},0).wait(1).to({scaleX:0.459,scaleY:0.459,x:832.1144,y:503.9359},0).wait(1).to({scaleX:0.4584,scaleY:0.4584,x:835.5395,y:504.1252},0).wait(1).to({scaleX:0.4578,scaleY:0.4578,x:838.9646,y:504.3146},0).wait(1).to({scaleX:0.4572,scaleY:0.4572,x:842.3896,y:504.5039},0).wait(1).to({scaleX:0.4566,scaleY:0.4566,x:845.8147,y:504.6932},0).wait(1).to({scaleX:0.456,scaleY:0.456,x:849.2397,y:504.8826},0).wait(1).to({scaleX:0.4554,scaleY:0.4554,x:852.6648,y:505.0719},0).wait(1).to({scaleX:0.4547,scaleY:0.4547,x:856.0899,y:505.2613},0).wait(1).to({scaleX:0.4541,scaleY:0.4541,x:859.5149,y:505.4506},0).wait(1).to({scaleX:0.4535,scaleY:0.4535,x:862.94,y:505.64},0).wait(1).to({scaleX:0.4529,scaleY:0.4529,x:866.365,y:505.8293},0).wait(1).to({scaleX:0.4523,scaleY:0.4523,x:869.7901,y:506.0187},0).wait(1).to({scaleX:0.4517,scaleY:0.4517,x:873.2152,y:506.208},0).wait(1).to({scaleX:0.4511,scaleY:0.4511,x:876.6402,y:506.3974},0).wait(1).to({scaleX:0.4505,scaleY:0.4505,x:880.0653,y:506.5867},0).wait(1).to({scaleX:0.4499,scaleY:0.4499,x:883.4903,y:506.7761},0).wait(1).to({scaleX:0.4493,scaleY:0.4493,x:886.9154,y:506.9654},0).wait(1).to({scaleX:0.4487,scaleY:0.4487,x:887.4899,y:508.5423},0).wait(1).to({scaleX:0.448,scaleY:0.448,x:888.0643,y:510.1192},0).wait(1).to({scaleX:0.4474,scaleY:0.4474,x:888.6388,y:511.6961},0).wait(1).to({scaleX:0.4468,scaleY:0.4468,x:889.2132,y:513.273},0).wait(1).to({scaleX:0.4462,scaleY:0.4462,x:889.7877,y:514.8499},0).wait(1).to({scaleX:0.4456,scaleY:0.4456,x:890.3621,y:516.4267},0).wait(1).to({scaleX:0.445,scaleY:0.445,x:890.9366,y:518.0036},0).wait(1).to({scaleX:0.4444,scaleY:0.4444,x:891.511,y:519.5805},0).wait(1).to({scaleX:0.4438,scaleY:0.4438,x:892.0855,y:521.1574},0).wait(1).to({scaleX:0.4432,scaleY:0.4432,x:892.6599,y:522.7343},0).wait(1).to({scaleX:0.4426,scaleY:0.4426,x:893.2344,y:524.3112},0).wait(1).to({scaleX:0.442,scaleY:0.442,x:893.8088,y:525.8881},0).wait(1).to({scaleX:0.4414,scaleY:0.4414,x:894.3833,y:527.465},0).wait(1).to({scaleX:0.4407,scaleY:0.4407,x:894.9577,y:529.0419},0).wait(1).to({scaleX:0.4401,scaleY:0.4401,x:895.5322,y:530.6188},0).wait(1).to({scaleX:0.4395,scaleY:0.4395,x:896.1066,y:532.1956},0).wait(1).to({scaleX:0.4389,scaleY:0.4389,x:896.6811,y:533.7725},0).wait(1).to({scaleX:0.4383,scaleY:0.4383,x:897.2555,y:535.3494},0).wait(1).to({scaleX:0.4377,scaleY:0.4377,x:897.83,y:536.9263},0).wait(1).to({scaleX:0.4371,scaleY:0.4371,x:898.4044,y:538.5032},0).wait(1).to({scaleX:0.4365,scaleY:0.4365,x:898.9789,y:540.0801},0).wait(1).to({scaleX:0.4359,scaleY:0.4359,x:899.5533,y:541.657},0).wait(1).to({scaleX:0.4353,scaleY:0.4353,x:900.1278,y:543.2339},0).wait(1).to({scaleX:0.4347,scaleY:0.4347,x:900.7022,y:544.8108},0).wait(1).to({scaleX:0.434,scaleY:0.434,x:901.2767,y:546.3877},0).wait(1).to({scaleX:0.4334,scaleY:0.4334,x:901.8511,y:547.9645},0).wait(1).to({scaleX:0.4328,scaleY:0.4328,x:902.4256,y:549.5414},0).wait(1).to({scaleX:0.4322,scaleY:0.4322,x:903,y:551.1183},0).wait(1).to({scaleX:0.4316,scaleY:0.4316,x:903.5745,y:552.6952},0).wait(1).to({scaleX:0.431,scaleY:0.431,x:904.1489,y:554.2721},0).wait(1).to({scaleX:0.4304,scaleY:0.4304,x:904.7234,y:555.849},0).wait(1).to({scaleX:0.4298,scaleY:0.4298,x:905.2978,y:557.4259},0).wait(1).to({scaleX:0.4292,scaleY:0.4292,x:905.8723,y:559.0028},0).wait(1).to({scaleX:0.4286,scaleY:0.4286,x:906.4467,y:560.5797},0).wait(1).to({scaleX:0.428,scaleY:0.428,x:907.0212,y:562.1566},0).wait(1).to({scaleX:0.4273,scaleY:0.4273,x:907.5956,y:563.7334},0).wait(1).to({scaleX:0.4267,scaleY:0.4267,x:908.1701,y:565.3103},0).wait(1).to({scaleX:0.4261,scaleY:0.4261,x:908.7445,y:566.8872},0).wait(1).to({scaleX:0.4255,scaleY:0.4255,x:909.319,y:568.4641},0).wait(1).to({scaleX:0.4249,scaleY:0.4249,x:909.8934,y:570.041},0).wait(1).to({scaleX:0.4243,scaleY:0.4243,x:910.4679,y:571.6179},0).wait(1).to({scaleX:0.3495,scaleY:0.3495,x:919.0754,y:593.7254},0).wait(1).to({scaleX:0.2747,scaleY:0.2747,x:927.6829,y:615.8329},0).wait(1).to({scaleX:0.1999,scaleY:0.1999,x:936.2903,y:637.9403},0).wait(1).to({scaleX:0.1251,scaleY:0.1251,x:944.8978,y:660.0478},0).wait(1).to({scaleX:0.1252,scaleY:0.1252,x:944.9998,y:660.0896},0).wait(1).to({scaleX:0.1254,scaleY:0.1254,x:945.1018,y:660.1313},0).wait(1).to({scaleX:0.1256,scaleY:0.1256,x:945.2038,y:660.1731},0).wait(1).to({scaleX:0.1257,scaleY:0.1257,x:945.3058,y:660.2148},0).wait(1).to({scaleX:0.1259,scaleY:0.1259,x:945.4077,y:660.2566},0).wait(1).to({scaleX:0.1261,scaleY:0.1261,x:945.5097,y:660.2983},0).wait(1).to({scaleX:0.1262,scaleY:0.1262,x:945.6117,y:660.3401},0).wait(1).to({scaleX:0.1264,scaleY:0.1264,x:945.7137,y:660.3818},0).wait(1).to({scaleX:0.1266,scaleY:0.1266,x:945.8157,y:660.4236},0).wait(1).to({scaleX:0.1267,scaleY:0.1267,x:945.9177,y:660.4653},0).wait(1).to({scaleX:0.1269,scaleY:0.1269,x:946.0196,y:660.5071},0).wait(1).to({scaleX:0.127,scaleY:0.127,x:946.1216,y:660.5488},0).wait(1).to({scaleX:0.1272,scaleY:0.1272,x:946.2236,y:660.5905},0).wait(1).to({scaleX:0.1274,scaleY:0.1274,x:946.3256,y:660.6323},0).wait(1).to({scaleX:0.1275,scaleY:0.1275,x:946.4276,y:660.674},0).wait(1).to({scaleX:0.1277,scaleY:0.1277,x:946.5296,y:660.7158},0).wait(1).to({scaleX:0.1279,scaleY:0.1279,x:946.6315,y:660.7575},0).wait(1).to({scaleX:0.128,scaleY:0.128,x:946.7335,y:660.7993},0).wait(1).to({scaleX:0.1282,scaleY:0.1282,x:946.8355,y:660.841},0).wait(1).to({scaleX:0.1284,scaleY:0.1284,x:946.9375,y:660.8828},0).wait(1).to({scaleX:0.1285,scaleY:0.1285,x:947.0395,y:660.9245},0).wait(1).to({scaleX:0.1287,scaleY:0.1287,x:947.1415,y:660.9663},0).wait(1).to({scaleX:0.1289,scaleY:0.1289,x:947.2434,y:661.008},0).wait(1).to({scaleX:0.129,scaleY:0.129,x:947.3454,y:661.0498},0).wait(1).to({scaleX:0.1292,scaleY:0.1292,x:947.4474,y:661.0915},0).wait(1).to({scaleX:0.1294,scaleY:0.1294,x:947.5494,y:661.1333},0).wait(1).to({scaleX:0.1295,scaleY:0.1295,x:947.6514,y:661.175},0).wait(1).to({scaleX:0.1297,scaleY:0.1297,x:947.7534,y:661.2168},0).wait(1).to({scaleX:0.1299,scaleY:0.1299,x:947.8553,y:661.2585},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:947.9573,y:661.3003},0).wait(1).to({scaleX:0.1302,scaleY:0.1302,x:948.0593,y:661.342},0).wait(1).to({scaleX:0.1304,scaleY:0.1304,x:948.1613,y:661.3838},0).wait(1).to({scaleX:0.1305,scaleY:0.1305,x:948.2633,y:661.4255},0).wait(1).to({scaleX:0.1307,scaleY:0.1307,x:948.3653,y:661.4673},0).wait(1).to({scaleX:0.1815,scaleY:0.1815,x:943.8155,y:643.7338},0).wait(1).to({scaleX:0.2323,scaleY:0.2323,x:939.2658,y:626.0004},0).wait(1).to({scaleX:0.2831,scaleY:0.2831,x:934.716,y:608.267},0).wait(1).to({scaleX:0.3339,scaleY:0.3339,x:930.1663,y:590.5336},0).wait(1).to({scaleX:0.3848,scaleY:0.3848,x:925.6165,y:572.8002},0).wait(1).to({scaleX:0.4356,scaleY:0.4356,x:921.0668,y:555.0668},0).wait(1).to({scaleX:0.4369,scaleY:0.4369,x:922.4902,y:554.3946},0).wait(1).to({scaleX:0.4382,scaleY:0.4382,x:923.9136,y:553.7224},0).wait(1).to({scaleX:0.4395,scaleY:0.4395,x:925.337,y:553.0502},0).wait(1).to({scaleX:0.4407,scaleY:0.4407,x:926.7604,y:552.378},0).wait(1).to({scaleX:0.442,scaleY:0.442,x:928.1838,y:551.7058},0).wait(1).to({scaleX:0.4433,scaleY:0.4433,x:929.6072,y:551.0336},0).wait(1).to({scaleX:0.4446,scaleY:0.4446,x:931.0306,y:550.3615},0).wait(1).to({scaleX:0.4459,scaleY:0.4459,x:932.454,y:549.6893},0).wait(1).to({scaleX:0.4472,scaleY:0.4472,x:933.8774,y:549.0171},0).wait(1).to({scaleX:0.4485,scaleY:0.4485,x:935.3008,y:548.3449},0).wait(1).to({scaleX:0.4498,scaleY:0.4498,x:936.7242,y:547.6727},0).wait(1).to({scaleX:0.4511,scaleY:0.4511,x:938.1476,y:547.0005},0).wait(1).to({scaleX:0.4524,scaleY:0.4524,x:939.571,y:546.3283},0).wait(1).to({scaleX:0.4537,scaleY:0.4537,x:940.9944,y:545.6561},0).wait(1).to({scaleX:0.455,scaleY:0.455,x:942.4178,y:544.984},0).wait(1).to({scaleX:0.4563,scaleY:0.4563,x:943.8412,y:544.3118},0).wait(1).to({scaleX:0.4576,scaleY:0.4576,x:945.2646,y:543.6396},0).wait(1).to({scaleX:0.4588,scaleY:0.4588,x:946.688,y:542.9674},0).wait(1).to({scaleX:0.4601,scaleY:0.4601,x:948.1114,y:542.2952},0).wait(1).to({scaleX:0.4614,scaleY:0.4614,x:949.5348,y:541.623},0).wait(1).to({scaleX:0.4627,scaleY:0.4627,x:950.9582,y:540.9508},0).wait(1).to({scaleX:0.464,scaleY:0.464,x:952.3816,y:540.2786},0).wait(1).to({scaleX:0.4653,scaleY:0.4653,x:953.805,y:539.6064},0).wait(1).to({scaleX:0.4666,scaleY:0.4666,x:955.2284,y:538.9343},0).wait(1).to({scaleX:0.4679,scaleY:0.4679,x:956.6518,y:538.2621},0).wait(1).to({scaleX:0.4692,scaleY:0.4692,x:958.0752,y:537.5899},0).wait(1).to({scaleX:0.4705,scaleY:0.4705,x:959.4986,y:536.9177},0).wait(1).to({scaleX:0.4718,scaleY:0.4718,x:960.922,y:536.2455},0).wait(1).to({scaleX:0.4731,scaleY:0.4731,x:962.3454,y:535.5733},0).wait(1).to({scaleX:0.4744,scaleY:0.4744,x:963.7688,y:534.9011},0).wait(1).to({scaleX:0.4756,scaleY:0.4756,x:965.1922,y:534.2289},0).wait(1).to({scaleX:0.4769,scaleY:0.4769,x:966.6156,y:533.5568},0).wait(1).to({scaleX:0.4782,scaleY:0.4782,x:968.039,y:532.8846},0).wait(1).to({scaleX:0.4795,scaleY:0.4795,x:969.4624,y:532.2124},0).wait(1).to({scaleX:0.4884,scaleY:0.4884,x:963.5736,y:529.3037},0).wait(1).to({scaleX:0.4973,scaleY:0.4973,x:957.6847,y:526.3951},0).wait(1).to({scaleX:0.5061,scaleY:0.5061,x:951.7959,y:523.4864},0).wait(1).to({scaleX:0.515,scaleY:0.515,x:945.9071,y:520.5778},0).wait(1).to({scaleX:0.5239,scaleY:0.5239,x:940.0183,y:517.6691},0).wait(1).to({scaleX:0.5327,scaleY:0.5327,x:934.1295,y:514.7605},0).wait(1).to({scaleX:0.5416,scaleY:0.5416,x:928.2407,y:511.8519},0).wait(1).to({scaleX:0.5505,scaleY:0.5505,x:922.3518,y:508.9432},0).wait(1).to({scaleX:0.5594,scaleY:0.5594,x:916.463,y:506.0346},0).wait(1).to({scaleX:0.5682,scaleY:0.5682,x:910.5742,y:503.1259},0).wait(1).to({scaleX:0.5771,scaleY:0.5771,x:904.6854,y:500.2173},0).wait(1).to({scaleX:0.586,scaleY:0.586,x:898.7966,y:497.3086},0).wait(1).to({scaleX:0.5948,scaleY:0.5948,x:892.9077,y:494.4},0).wait(1).to({scaleX:0.6037,scaleY:0.6037,x:887.0189,y:491.4913},0).wait(1).to({scaleX:0.6126,scaleY:0.6126,x:881.1301,y:488.5827},0).wait(1).to({scaleX:0.6214,scaleY:0.6214,x:875.2413,y:485.674},0).wait(1).to({scaleX:0.6303,scaleY:0.6303,x:869.3525,y:482.7654},0).wait(1).to({scaleX:0.6392,scaleY:0.6392,x:863.4637,y:479.8568},0).wait(1).to({scaleX:0.648,scaleY:0.648,x:857.5748,y:476.9481},0).wait(1).to({scaleX:0.6569,scaleY:0.6569,x:851.686,y:474.0395},0).wait(1).to({scaleX:0.6658,scaleY:0.6658,x:845.7972,y:471.1308},0).wait(1).to({scaleX:0.6747,scaleY:0.6747,x:839.9084,y:468.2222},0).wait(1).to({scaleX:0.6835,scaleY:0.6835,x:834.0196,y:465.3135},0).wait(1).to({scaleX:0.6924,scaleY:0.6924,x:828.1307,y:462.4049},0).wait(1).to({scaleX:0.7013,scaleY:0.7013,x:822.2419,y:459.4962},0).wait(1).to({scaleX:0.7101,scaleY:0.7101,x:816.3531,y:456.5876},0).wait(1).to({scaleX:0.719,scaleY:0.719,x:810.4643,y:453.6789},0).wait(1).to({scaleX:0.7279,scaleY:0.7279,x:804.5755,y:450.7703},0).wait(1).to({scaleX:0.7367,scaleY:0.7367,x:798.6867,y:447.8617},0).wait(1).to({scaleX:0.7456,scaleY:0.7456,x:792.7978,y:444.953},0).wait(1).to({scaleX:0.7545,scaleY:0.7545,x:786.909,y:442.0444},0).wait(1).to({scaleX:0.7634,scaleY:0.7634,x:781.0202,y:439.1357},0).wait(1).to({scaleX:0.7722,scaleY:0.7722,x:775.1314,y:436.2271},0).wait(1).to({scaleX:0.7811,scaleY:0.7811,x:769.2426,y:433.3184},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:763.3537,y:430.4098},0).wait(1).to({scaleX:0.7988,scaleY:0.7988,x:757.4649,y:427.5011},0).wait(1).to({scaleX:0.8077,scaleY:0.8077,x:751.5761,y:424.5925},0).wait(1).to({scaleX:0.8166,scaleY:0.8166,x:745.6873,y:421.6838},0).wait(1).to({scaleX:0.8254,scaleY:0.8254,x:739.7985,y:418.7752},0).wait(1).to({scaleX:0.8343,scaleY:0.8343,x:733.9097,y:415.8666},0).wait(1).to({scaleX:0.8432,scaleY:0.8432,x:728.0208,y:412.9579},0).wait(1).to({scaleX:0.8521,scaleY:0.8521,x:722.132,y:410.0493},0).wait(1).to({scaleX:0.8609,scaleY:0.8609,x:716.2432,y:407.1406},0).wait(1).to({scaleX:0.8698,scaleY:0.8698,x:710.3544,y:404.232},0).wait(1).to({scaleX:0.8787,scaleY:0.8787,x:704.4656,y:401.3233},0).wait(1).to({scaleX:0.8875,scaleY:0.8875,x:698.5767,y:398.4147},0).wait(1).to({scaleX:0.8964,scaleY:0.8964,x:692.6879,y:395.506},0).wait(1).to({scaleX:0.9053,scaleY:0.9053,x:686.7991,y:392.5974},0).wait(1).to({scaleX:0.9141,scaleY:0.9141,x:680.9103,y:389.6887},0).wait(1).to({scaleX:0.923,scaleY:0.923,x:675.0215,y:386.7801},0).wait(1).to({scaleX:0.9319,scaleY:0.9319,x:669.1327,y:383.8715},0).wait(1).to({scaleX:0.9408,scaleY:0.9408,x:663.2438,y:380.9628},0).wait(1).to({scaleX:0.9496,scaleY:0.9496,x:657.355,y:378.0542},0).wait(1).to({scaleX:0.9585,scaleY:0.9585,x:651.4662,y:375.1455},0).wait(1).to({scaleX:0.9674,scaleY:0.9674,x:645.5774,y:372.2369},0).wait(1).to({scaleX:0.9762,scaleY:0.9762,x:639.6886,y:369.3282},0).wait(1).to({scaleX:0.9851,scaleY:0.9851,x:633.7998,y:366.4196},0).wait(1).to({scaleX:0.994,scaleY:0.994,x:627.9109,y:363.5109},0).wait(1).to({scaleX:0.9785,scaleY:0.9785,x:638.275,y:368.5161},0).wait(1).to({scaleX:0.963,scaleY:0.963,x:648.639,y:373.5212},0).wait(1).to({scaleX:0.9476,scaleY:0.9476,x:659.0031,y:378.5263},0).wait(1).to({scaleX:0.9321,scaleY:0.9321,x:669.3671,y:383.5314},0).wait(1).to({scaleX:0.9167,scaleY:0.9167,x:679.7312,y:388.5365},0).wait(1).to({scaleX:0.9012,scaleY:0.9012,x:690.0952,y:393.5416},0).wait(1).to({scaleX:0.8857,scaleY:0.8857,x:700.4593,y:398.5468},0).wait(1).to({scaleX:0.8703,scaleY:0.8703,x:710.8233,y:403.5519},0).wait(1).to({scaleX:0.8548,scaleY:0.8548,x:721.1874,y:408.557},0).wait(1).to({scaleX:0.8393,scaleY:0.8393,x:731.5514,y:413.5621},0).wait(1).to({scaleX:0.8239,scaleY:0.8239,x:741.9154,y:418.5672},0).wait(1).to({scaleX:0.8084,scaleY:0.8084,x:752.2795,y:423.5723},0).wait(1).to({scaleX:0.7929,scaleY:0.7929,x:762.6435,y:428.5775},0).wait(1).to({scaleX:0.7775,scaleY:0.7775,x:773.0076,y:433.5826},0).wait(1).to({scaleX:0.762,scaleY:0.762,x:783.3716,y:438.5877},0).wait(1).to({scaleX:0.7465,scaleY:0.7465,x:793.7357,y:443.5928},0).wait(1).to({scaleX:0.7311,scaleY:0.7311,x:804.0997,y:448.5979},0).wait(1).to({scaleX:0.7156,scaleY:0.7156,x:814.4638,y:453.6031},0).wait(1).to({scaleX:0.7002,scaleY:0.7002,x:824.8278,y:458.6082},0).wait(1).to({scaleX:0.6847,scaleY:0.6847,x:835.1919,y:463.6133},0).wait(1).to({scaleX:0.6692,scaleY:0.6692,x:845.5559,y:468.6184},0).wait(1).to({scaleX:0.6538,scaleY:0.6538,x:855.92,y:473.6235},0).wait(1).to({scaleX:0.6383,scaleY:0.6383,x:866.284,y:478.6286},0).wait(1).to({scaleX:0.6228,scaleY:0.6228,x:876.648,y:483.6338},0).wait(1).to({scaleX:0.6074,scaleY:0.6074,x:887.0121,y:488.6389},0).wait(1).to({scaleX:0.5919,scaleY:0.5919,x:897.3761,y:493.644},0).wait(1).to({scaleX:0.5764,scaleY:0.5764,x:907.7402,y:498.6491},0).wait(1).to({scaleX:0.561,scaleY:0.561,x:918.1042,y:503.6542},0).wait(1).to({scaleX:0.5646,scaleY:0.5646,x:914.4454,y:502.9628},0).wait(1).to({scaleX:0.5682,scaleY:0.5682,x:910.7865,y:502.2715},0).wait(1).to({scaleX:0.5719,scaleY:0.5719,x:907.1276,y:501.5801},0).wait(1).to({scaleX:0.5755,scaleY:0.5755,x:903.4688,y:500.8887},0).wait(1).to({scaleX:0.5791,scaleY:0.5791,x:899.8099,y:500.1973},0).wait(1).to({scaleX:0.5827,scaleY:0.5827,x:896.1511,y:499.5059},0).wait(1).to({scaleX:0.5864,scaleY:0.5864,x:892.4922,y:498.8145},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:888.8333,y:498.1231},0).wait(1).to({scaleX:0.5936,scaleY:0.5936,x:885.1745,y:497.4317},0).wait(1).to({scaleX:0.5972,scaleY:0.5972,x:881.5156,y:496.7403},0).wait(1).to({scaleX:0.6009,scaleY:0.6009,x:877.8567,y:496.0489},0).wait(1).to({scaleX:0.6045,scaleY:0.6045,x:874.1979,y:495.3575},0).wait(1).to({scaleX:0.6081,scaleY:0.6081,x:870.539,y:494.6661},0).wait(1).to({scaleX:0.6117,scaleY:0.6117,x:866.8802,y:493.9748},0).wait(1).to({scaleX:0.6154,scaleY:0.6154,x:863.2213,y:493.2834},0).wait(1).to({scaleX:0.619,scaleY:0.619,x:859.5624,y:492.592},0).wait(1).to({scaleX:0.6226,scaleY:0.6226,x:855.9036,y:491.9006},0).wait(1).to({scaleX:0.6263,scaleY:0.6263,x:852.2447,y:491.2092},0).wait(1).to({scaleX:0.6299,scaleY:0.6299,x:848.5858,y:490.5178},0).wait(1).to({scaleX:0.6335,scaleY:0.6335,x:844.927,y:489.8264},0).wait(1).to({scaleX:0.6371,scaleY:0.6371,x:841.2681,y:489.135},0).wait(1).to({scaleX:0.6408,scaleY:0.6408,x:837.6093,y:488.4436},0).wait(1).to({scaleX:0.6444,scaleY:0.6444,x:833.9504,y:487.7522},0).wait(1).to({scaleX:0.648,scaleY:0.648,x:830.2915,y:487.0608},0).wait(1).to({scaleX:0.6376,scaleY:0.6376,x:838.8872,y:490.406},0).wait(1).to({scaleX:0.6272,scaleY:0.6272,x:847.4828,y:493.7512},0).wait(1).to({scaleX:0.6167,scaleY:0.6167,x:856.0785,y:497.0964},0).wait(1).to({scaleX:0.6063,scaleY:0.6063,x:864.6742,y:500.4416},0).wait(1).to({scaleX:0.5959,scaleY:0.5959,x:873.2698,y:503.7868},0).wait(1).to({scaleX:0.5855,scaleY:0.5855,x:881.8655,y:507.132},0).wait(1).to({scaleX:0.575,scaleY:0.575,x:890.4611,y:510.4772},0).wait(1).to({scaleX:0.5646,scaleY:0.5646,x:899.0568,y:513.8224},0).wait(1).to({scaleX:0.5542,scaleY:0.5542,x:907.6524,y:517.1676},0).wait(1).to({scaleX:0.5438,scaleY:0.5438,x:916.2481,y:520.5128},0).wait(1).to({scaleX:0.5333,scaleY:0.5333,x:924.8438,y:523.858},0).wait(1).to({scaleX:0.5229,scaleY:0.5229,x:933.4394,y:527.2032},0).wait(1).to({scaleX:0.5125,scaleY:0.5125,x:942.0351,y:530.5484},0).wait(1).to({scaleX:0.5333,scaleY:0.5333,x:928.8667,y:523.4533},0).wait(1).to({scaleX:0.554,scaleY:0.554,x:915.6982,y:516.3582},0).wait(1).to({scaleX:0.5748,scaleY:0.5748,x:902.5298,y:509.2631},0).wait(1).to({scaleX:0.5956,scaleY:0.5956,x:889.3614,y:502.168},0).wait(1).to({scaleX:0.6164,scaleY:0.6164,x:876.193,y:495.0729},0).wait(1).to({scaleX:0.6371,scaleY:0.6371,x:863.0245,y:487.9778},0).wait(1).to({scaleX:0.6579,scaleY:0.6579,x:849.8561,y:480.8827},0).wait(1).to({scaleX:0.6787,scaleY:0.6787,x:836.6877,y:473.7877},0).wait(1).to({scaleX:0.6994,scaleY:0.6994,x:823.5193,y:466.6926},0).wait(1).to({scaleX:0.7202,scaleY:0.7202,x:810.3508,y:459.5975},0).wait(1).to({scaleX:0.741,scaleY:0.741,x:797.1824,y:452.5024},0).wait(1).to({scaleX:0.7618,scaleY:0.7618,x:784.014,y:445.4073},0).wait(1).to({scaleX:0.7825,scaleY:0.7825,x:770.8456,y:438.3122},0).wait(1).to({scaleX:0.8033,scaleY:0.8033,x:757.6771,y:431.2171},0).wait(1).to({scaleX:0.8241,scaleY:0.8241,x:744.5087,y:424.122},0).wait(1).to({scaleX:0.8448,scaleY:0.8448,x:731.3403,y:417.0269},0).wait(1).to({scaleX:0.8656,scaleY:0.8656,x:718.1719,y:409.9318},0).wait(1).to({scaleX:0.8864,scaleY:0.8864,x:705.0034,y:402.8368},0).wait(1).to({scaleX:0.9071,scaleY:0.9071,x:691.835,y:395.7417},0).wait(1).to({scaleX:0.9279,scaleY:0.9279,x:678.6666,y:388.6466},0).wait(1).to({scaleX:0.9487,scaleY:0.9487,x:665.4982,y:381.5515},0).wait(1).to({scaleX:0.9695,scaleY:0.9695,x:652.3297,y:374.4564},0).wait(1).to({scaleX:0.9902,scaleY:0.9902,x:639.1613,y:367.3613},0).wait(48).to({scaleX:1,scaleY:1,x:640,y:360},0).wait(1));

	// text_obj_
	this.text = new lib.Scene_1_text();
	this.text.name = "text";
	this.text.depth = 0;
	this.text.isAttachedToCamera = 0
	this.text.isAttachedToMask = 0
	this.text.layerDepth = 0
	this.text.layerIndex = 0
	this.text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text).wait(519).to({regX:5.5,regY:10.8,scaleX:1.0099,scaleY:1.0099,y:-0.05},0).wait(49));

	// endScene_obj_
	this.endScene = new lib.Scene_1_endScene();
	this.endScene.name = "endScene";
	this.endScene.depth = 0;
	this.endScene.isAttachedToCamera = 0
	this.endScene.isAttachedToMask = 0
	this.endScene.layerDepth = 0
	this.endScene.layerIndex = 1
	this.endScene.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.endScene).wait(519).to({regX:5.5,regY:10.8,scaleX:1.0099,scaleY:1.0099,y:-0.05},0).wait(48).to({regX:0,regY:0,scaleX:1,scaleY:1,y:0},0).wait(1));

	// startScene_obj_
	this.startScene = new lib.Scene_1_startScene();
	this.startScene.name = "startScene";
	this.startScene.setTransform(653.5,373.8,1,1,0,0,0,653.5,373.8);
	this.startScene.depth = 0;
	this.startScene.isAttachedToCamera = 0
	this.startScene.isAttachedToMask = 0
	this.startScene.layerDepth = 0
	this.startScene.layerIndex = 2
	this.startScene.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.startScene).to({_off:true},1).wait(567));

	// can_obj_
	this.can = new lib.Scene_1_can();
	this.can.name = "can";
	this.can.depth = 0;
	this.can.isAttachedToCamera = 0
	this.can.isAttachedToMask = 0
	this.can.layerDepth = 0
	this.can.layerIndex = 3
	this.can.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.can).wait(335).to({regX:790.6,regY:542.4,scaleX:4.3048,scaleY:4.3048,y:0.25},0).to({_off:true},148).wait(85));

	// child_obj_
	this.child = new lib.Scene_1_child();
	this.child.name = "child";
	this.child.depth = 0;
	this.child.isAttachedToCamera = 0
	this.child.isAttachedToMask = 0
	this.child.layerDepth = 0
	this.child.layerIndex = 4
	this.child.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.child).wait(1).to({regX:-5.5,regY:271.7,scaleX:1.6575,scaleY:1.6575,x:-0.1},0).wait(5).to({regX:-4.6,regY:271.4,scaleX:1.666,scaleY:1.666,x:0.05,y:0.1},0).wait(5).to({regX:-3.9,regY:271,scaleX:1.6745,scaleY:1.6745,x:-0.05,y:0.05},0).wait(5).to({regX:-3.3,regY:270.6,scaleX:1.683,scaleY:1.683,x:-0.1,y:0},0).wait(5).to({regX:-2.5,regY:270.3,scaleX:1.6917,scaleY:1.6917,x:-0.05,y:0.1},0).wait(5).to({regX:-1.8,regY:269.9,scaleX:1.7005,scaleY:1.7005,x:0},0).wait(5).to({regX:-1.1,regY:269.6,scaleX:1.7093,scaleY:1.7093,x:-0.05},0).wait(5).to({regX:-0.4,regY:269.2,scaleX:1.7182,scaleY:1.7182,x:-0.1,y:0},0).wait(5).to({regX:0.3,regY:268.8,scaleX:1.7273,scaleY:1.7273,x:0,y:0.1},0).wait(5).to({regX:0.9,regY:268.4,scaleX:1.7364,scaleY:1.7364,x:-0.05,y:-0.05},0).wait(5).to({regX:1.8,regY:268.1,scaleX:1.7457,scaleY:1.7457,x:0.1,y:0.1},0).wait(5).to({regX:2.4,regY:267.7,scaleX:1.755,scaleY:1.755,x:-0.05,y:0},0).wait(5).to({regX:3.1,regY:267.3,scaleX:1.7644,scaleY:1.7644,x:-0.1,y:0.05},0).wait(5).to({regX:3.9,regY:266.9,scaleX:1.7739,scaleY:1.7739,x:0,y:-0.1},0).wait(5).to({regX:11.3,regY:267,scaleX:1.7836,scaleY:1.7836,x:-0.05,y:0},0).wait(5).to({regX:28.9,regY:267.6,scaleX:1.7933,scaleY:1.7933,x:0.05,y:0.05},0).wait(5).to({regX:46.4,regY:268.2,scaleX:1.8032,scaleY:1.8032,x:0,y:-0.05},0).wait(5).to({regX:64,regY:268.8,scaleX:1.8131,scaleY:1.8131,x:-0.05,y:0},0).wait(5).to({regX:81.6,regY:269.5,scaleX:1.8232,scaleY:1.8232,x:0,y:0.05},0).wait(5).to({regX:99.2,regY:270.1,scaleX:1.8333,scaleY:1.8333},0).wait(5).to({regX:116.8,regY:270.7,scaleX:1.8436,scaleY:1.8436,x:0.05,y:0},0).wait(5).to({regX:134.4,regY:271.4,scaleX:1.8541,scaleY:1.8541,y:0.1},0).wait(5).to({regX:152,regY:271.9,scaleX:1.8646,scaleY:1.8646,x:0.1,y:-0.1},0).wait(5).to({regX:169.6,regY:272.6,scaleX:1.8752,scaleY:1.8752,x:0.15,y:0.05},0).wait(5).to({regX:185.3,regY:274.2,scaleX:1.886,scaleY:1.886,x:0},0).wait(5).to({regX:198.3,regY:277.3,scaleX:1.8969,scaleY:1.8969,x:0.1,y:0},0).wait(5).to({regX:211.3,regY:280.4,scaleX:1.9079,scaleY:1.9079,x:-0.05,y:-0.1},0).wait(5).to({regX:224.3,regY:283.6,scaleX:1.9191,scaleY:1.9191,x:0.05,y:0.05},0).wait(5).to({regX:237.4,regY:286.7,scaleX:1.9303,scaleY:1.9303,x:0,y:0},0).wait(8).to({regX:258.2,regY:291.7,scaleX:1.9486,scaleY:1.9486,x:0.05},0).wait(8).to({regX:279.1,regY:296.7,scaleX:1.9673,scaleY:1.9673,x:0.15},0).wait(8).to({regX:299.9,regY:301.7,scaleX:1.9864,scaleY:1.9864,x:0.1,y:0.05},0).wait(5).to({regX:312.9,regY:304.9,scaleX:1.9984,scaleY:1.9984,y:0.1},0).wait(5).to({regX:325.9,regY:308,scaleX:2.0107,scaleY:2.0107,x:0,y:0.05},0).wait(5).to({regX:338.9,regY:311.1,scaleX:2.023,scaleY:2.023,x:0.1,y:0.1},0).wait(5).to({regX:351.9,regY:314.2,scaleX:2.0356,scaleY:2.0356,x:-0.1,y:0.15},0).wait(5).to({regX:364.9,regY:317.3,scaleX:2.0483,scaleY:2.0483,x:0.05,y:0.05},0).wait(5).to({regX:377.9,regY:320.4,scaleX:2.0611,scaleY:2.0611,x:-0.1,y:-0.05},0).wait(5).to({regX:393.4,regY:323.2,scaleX:2.0742,scaleY:2.0742,x:0,y:0.1},0).wait(5).to({regX:412.4,regY:325.2,scaleX:2.0873,scaleY:2.0873,x:-0.1,y:0},0).wait(5).to({regX:431.6,regY:327.2,scaleX:2.1007,scaleY:2.1007,x:0.1},0).wait(5).to({regX:450.6,regY:329.3,scaleX:2.1142,scaleY:2.1142,x:0},0).wait(8).to({regX:481.2,regY:332.5,scaleX:2.1362,scaleY:2.1362,x:0.1},0).wait(8).to({regX:511.7,regY:335.8,scaleX:2.1587,scaleY:2.1587,x:0.15,y:0.05},0).wait(8).to({regX:542.2,regY:339.1,scaleX:2.1816,scaleY:2.1816,x:0,y:0.15},0).wait(8).to({regX:572.7,regY:342.3,scaleX:2.205,scaleY:2.205,y:0.05},0).wait(7).to({regX:599.4,regY:345.2,scaleX:2.2259,scaleY:2.2259},0).wait(5).to({regX:604.2,regY:354.2,scaleX:2.2411,scaleY:2.2411,y:0},0).wait(5).to({regX:609,regY:363.2,scaleX:2.2565,scaleY:2.2565,y:0.1},0).wait(5).to({regX:613.9,regY:372.2,scaleX:2.2722,scaleY:2.2722,x:0.1,y:0.05},0).wait(8).to({regX:621.6,regY:386.5,scaleX:2.2976,scaleY:2.2976,x:0,y:0},0).wait(5).to({regX:626.4,regY:395.5,scaleX:2.3138,scaleY:2.3138,x:0.15},0).wait(2).to({regX:628.3,regY:399.1,scaleX:2.3203,scaleY:2.3203,x:0},0).wait(2).to({regX:630.3,regY:402.7,scaleX:2.3269,scaleY:2.3269,x:0.1},0).wait(2).to({regX:632.1,regY:406.3,scaleX:2.3335,scaleY:2.3335,x:-0.1,y:0.05},0).wait(2).to({regX:634.1,regY:409.9,scaleX:2.3401,scaleY:2.3401,x:0.15,y:0.15},0).wait(2).to({regX:636.1,regY:413.5,scaleX:2.3468,scaleY:2.3468,x:0.1,y:0},0).wait(2).to({regX:638,regY:417.1,scaleX:2.3536,scaleY:2.3536,x:0.15,y:0.15},0).wait(2).to({regX:695.4,regY:467.9,scaleX:2.8615,scaleY:2.8615,x:0,y:0},0).wait(2).to({regX:808.4,regY:566,scaleX:5.0039,scaleY:5.0039,x:0.3},0).wait(37).to({regX:790.6,regY:542.4,scaleX:4.3048,scaleY:4.3048,x:0,y:0.25},0).wait(2).to({regX:716.4,regY:470.3,scaleX:2.9947,scaleY:2.9947,y:0},0).wait(2).to({regX:642.4,regY:398.3,scaleX:2.296,scaleY:2.296,x:0.1,y:0.1},0).wait(2).to({regX:643.5,regY:395.9,scaleX:2.2824,scaleY:2.2824,x:0.15,y:-0.1},0).wait(2).to({regX:644.6,regY:393.7,scaleX:2.269,scaleY:2.269,x:-0.1,y:0},0).wait(2).to({regX:645.9,regY:391.4,scaleX:2.2557,scaleY:2.2557,x:0.1,y:0.05},0).wait(2).to({regX:647.1,regY:389.2,scaleX:2.2427,scaleY:2.2427,x:0.15,y:0.15},0).wait(2).to({regX:648.2,regY:386.9,scaleX:2.2297,scaleY:2.2297,x:0},0).wait(2).to({regX:649.5,regY:384.6,scaleX:2.217,scaleY:2.217,x:0.1},0).wait(1).to({regX:650.1,regY:383.4,scaleX:2.2106,scaleY:2.2106,y:-0.1},0).wait(1).to({regX:650.6,regY:382.3,scaleX:2.2044,scaleY:2.2044,x:-0.1,y:0},0).wait(1).to({regX:651.3,regY:381.2,scaleX:2.1981,scaleY:2.1981,x:0.1,y:0.1},0).wait(1).to({regX:651.9,regY:380,scaleX:2.1918,scaleY:2.1918,y:0.05},0).wait(1).to({regX:652.5,regY:378.9,scaleX:2.1857,scaleY:2.1857,y:0},0).wait(4).to({regX:654.8,regY:374.3,scaleX:2.1613,scaleY:2.1613,x:0.05},0).wait(1).to({regX:655.5,regY:373.2,scaleX:2.1552,scaleY:2.1552,x:0.15},0).wait(1).to({regX:656,regY:372,scaleX:2.1492,scaleY:2.1492},0).wait(1).to({regX:656.6,regY:370.9,scaleX:2.1433,scaleY:2.1433,x:0.05,y:-0.1},0).wait(1).to({regX:657.2,regY:369.8,scaleX:2.1374,scaleY:2.1374,x:0,y:0.05},0).wait(1).to({regX:657.8,regY:368.7,scaleX:2.1315,scaleY:2.1315,y:0.1},0).wait(1).to({regX:658.4,regY:367.6,scaleX:2.1256,scaleY:2.1256},0).wait(1).to({regX:659,regY:366.4,scaleX:2.1198,scaleY:2.1198,y:0.05},0).wait(1).to({regX:659.6,regY:365.3,scaleX:2.114,scaleY:2.114,y:0.15},0).wait(1).to({regX:660.2,regY:364.1,scaleX:2.1082,scaleY:2.1082,x:0.05,y:0},0).wait(1).to({regX:660.8,regY:362.9,scaleX:2.1025,scaleY:2.1025,x:0,y:-0.1},0).wait(1).to({regX:661.4,regY:361.8,scaleX:2.0968,scaleY:2.0968,y:0},0).wait(1).to({regX:662,regY:360.7,scaleX:2.0911,scaleY:2.0911,x:0.15},0).wait(1).to({regX:662.6,regY:359.6,scaleX:2.0855,scaleY:2.0855,x:0.05,y:0.05},0).wait(1).to({regX:651,regY:353.4,scaleX:2.0476,scaleY:2.0476,y:0},0).wait(1).to({regX:639.5,regY:347.4,scaleX:2.0111,scaleY:2.0111,x:0.1,y:0.1},0).wait(1).to({regX:627.9,regY:341.3,scaleX:1.9759,scaleY:1.9759},0).wait(2).to({regX:604.8,regY:329.1,scaleX:1.9089,scaleY:1.9089,y:0.15},0).wait(3).to({regX:570,regY:310.8,scaleX:1.8167,scaleY:1.8167,x:0.05,y:0.1},0).wait(3).to({regX:535.4,regY:292.4,scaleX:1.7329,scaleY:1.7329,x:0.1,y:0.05},0).wait(3).to({regX:500.7,regY:274.1,scaleX:1.6565,scaleY:1.6565},0).wait(3).to({regX:466,regY:255.9,scaleX:1.5865,scaleY:1.5865,x:0,y:0},0).wait(3).to({regX:431.3,regY:237.6,scaleX:1.5223,scaleY:1.5223,x:0.05,y:0.1},0).wait(3).to({regX:396.6,regY:219.3,scaleX:1.463,scaleY:1.463},0).wait(3).to({regX:361.9,regY:201,scaleX:1.4082,scaleY:1.4082},0).wait(3).to({regX:327.2,regY:182.7,scaleX:1.3573,scaleY:1.3573,x:0},0).wait(3).to({regX:292.4,regY:164.3,scaleX:1.31,scaleY:1.31,x:-0.1,y:-0.05},0).wait(3).to({regX:257.8,regY:146,scaleX:1.2659,scaleY:1.2659,x:0},0).wait(3).to({regX:223.1,regY:127.7,scaleX:1.2246,scaleY:1.2246,y:0},0).wait(3).to({regX:188.3,regY:109.4,scaleX:1.186,scaleY:1.186,x:-0.05,y:0.05},0).wait(3).to({regX:153.7,regY:91.1,scaleX:1.1497,scaleY:1.1497,x:0,y:0},0).wait(3).to({regX:119,regY:72.8,scaleX:1.1156,scaleY:1.1156,x:-0.05},0).wait(3).to({regX:84.3,regY:54.6,scaleX:1.0834,scaleY:1.0834,x:0,y:0.05},0).wait(4).to({regX:38,regY:30.1,scaleX:1.0434,scaleY:1.0434},0).wait(2).to({regX:15,regY:17.9,scaleX:1.0244,scaleY:1.0244,x:0.05},0).wait(2).to({regX:-8.1,regY:5.6,scaleX:1.0061,scaleY:1.0061,x:-0.05,y:0},0).wait(2).to({regX:32.3,regY:26.9,scaleX:1.0384,scaleY:1.0384,x:0,y:0.05},0).wait(2).to({regX:72.9,regY:48,scaleX:1.0728,scaleY:1.0728,x:0.05},0).wait(2).to({regX:113.4,regY:69,scaleX:1.1097,scaleY:1.1097,y:-0.1},0).wait(2).to({regX:153.8,regY:90.3,scaleX:1.1491,scaleY:1.1491,x:-0.05,y:0},0).wait(2).to({regX:194.4,regY:111.4,scaleX:1.1915,scaleY:1.1915,x:0,y:0.05},0).wait(2).to({regX:234.9,regY:132.6,scaleX:1.237,scaleY:1.237,y:0.1},0).wait(2).to({regX:275.4,regY:153.8,scaleX:1.2863,scaleY:1.2863,y:0.05},0).wait(2).to({regX:315.9,regY:174.8,scaleX:1.3395,scaleY:1.3395,x:-0.1,y:-0.1},0).wait(2).to({regX:356.5,regY:196,scaleX:1.3974,scaleY:1.3974,x:0.05,y:0.05},0).wait(2).to({regX:397.1,regY:217.2,scaleX:1.4606,scaleY:1.4606,x:0.1,y:0.1},0).wait(2).to({regX:437.5,regY:238.3,scaleX:1.5297,scaleY:1.5297,x:0.05,y:0},0).wait(2).to({regX:478.1,regY:259.4,scaleX:1.6056,scaleY:1.6056,x:0},0).wait(2).to({regX:518.6,regY:280.6,scaleX:1.6895,scaleY:1.6895,y:0.1},0).wait(2).to({regX:559.1,regY:301.7,scaleX:1.7827,scaleY:1.7827,y:0.05},0).wait(2).to({regX:547.1,regY:297.7,scaleX:1.7599,scaleY:1.7599,x:-0.05,y:0.1},0).wait(2).to({regX:535.2,regY:293.7,scaleX:1.7377,scaleY:1.7377,x:0.05,y:0},0).wait(2).to({regX:523.2,regY:289.7,scaleX:1.7161,scaleY:1.7161},0).wait(2).to({regX:511.3,regY:285.7,scaleX:1.695,scaleY:1.695,x:0.1,y:0.1},0).wait(2).to({regX:499.3,regY:281.7,scaleX:1.6744,scaleY:1.6744,x:0.05,y:0.05},0).wait(2).to({regX:487.3,regY:277.7,scaleX:1.6544,scaleY:1.6544,x:0,y:-0.05},0).wait(2).to({regX:475.4,regY:273.7,scaleX:1.6347,scaleY:1.6347,x:0.1,y:0},0).wait(2).to({regX:463.4,regY:269.7,scaleX:1.6156,scaleY:1.6156,x:-0.05},0).wait(2).to({regX:451.4,regY:265.8,scaleX:1.5969,scaleY:1.5969,x:0,y:0.1},0).wait(2).to({regX:439.5,regY:261.7,scaleX:1.5786,scaleY:1.5786,y:0},0).wait(2).to({regX:427.6,regY:257.8,scaleX:1.5607,scaleY:1.5607,x:0.1},0).wait(2).to({regX:415.6,regY:253.8,scaleX:1.5432,scaleY:1.5432,x:0.05,y:0.05},0).wait(2).to({regX:446.1,regY:267.9,scaleX:1.5945,scaleY:1.5945,y:-0.05},0).wait(2).to({regX:476.7,regY:282.2,scaleX:1.6494,scaleY:1.6494,x:0.1,y:0.1},0).wait(2).to({regX:507.2,regY:296.4,scaleX:1.7081,scaleY:1.7081,x:0.05,y:0.15},0).wait(2).to({regX:537.7,regY:310.5,scaleX:1.7712,scaleY:1.7712,x:0,y:-0.05},0).wait(2).to({regX:568.2,regY:324.8,scaleX:1.8391,scaleY:1.8391,y:0.15},0).wait(2).to({regX:598.8,regY:338.9,scaleX:1.9124,scaleY:1.9124,x:0.15,y:0},0).to({_off:true},24).wait(49));

	// trash_obj_
	this.trash = new lib.Scene_1_trash();
	this.trash.name = "trash";
	this.trash.depth = 0;
	this.trash.isAttachedToCamera = 0
	this.trash.isAttachedToMask = 0
	this.trash.layerDepth = 0
	this.trash.layerIndex = 5
	this.trash.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.trash).wait(429).to({regX:15,regY:17.9,scaleX:1.0244,scaleY:1.0244,x:0.05,y:0.05},0).to({_off:true},90).wait(49));

	// background_obj_
	this.background = new lib.Scene_1_background();
	this.background.name = "background";
	this.background.depth = 0;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 6
	this.background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1).to({regX:-5.5,regY:271.7,scaleX:1.6575,scaleY:1.6575,x:-0.1},0).wait(299).to({regX:864.9,regY:615,scaleX:7.9873,scaleY:7.9873,x:0.45,y:0.4},0).wait(5).to({regY:614.9,scaleX:7.9341,scaleY:7.9341,y:0},0).wait(5).to({regX:864.8,regY:614.8,scaleX:7.8826,scaleY:7.8826,x:0},0).wait(6).to({regY:614.7,scaleX:7.8215,scaleY:7.8215,x:0.4},0).wait(6).to({regX:864.7,regY:614.6,scaleX:7.7612,scaleY:7.7612,x:0},0).wait(6).to({regX:864.8,regY:614.5,scaleX:7.702,scaleY:7.702,x:0.4},0).wait(6).to({regX:827.6,regY:578.4,scaleX:5.51,scaleY:5.51,x:-0.3,y:0.3},0).wait(148).to({regX:421.6,regY:255.8,scaleX:1.5519,scaleY:1.5519,x:0.1,y:0},0).wait(2).to({regX:430.8,regY:260.9,scaleX:1.5685,scaleY:1.5685,x:0,y:0.1},0).wait(2).to({regX:461.4,regY:275,scaleX:1.6215,scaleY:1.6215,x:0.1,y:0},0).wait(2).to({regX:491.9,regY:289.3,scaleX:1.6782,scaleY:1.6782,x:0,y:0.1},0).wait(2).to({regX:522.5,regY:303.4,scaleX:1.7391,scaleY:1.7391,y:-0.05},0).wait(2).to({regX:553,regY:317.7,scaleX:1.8045,scaleY:1.8045,x:0.1,y:0.1},0).wait(2).to({regX:583.5,regY:331.9,scaleX:1.875,scaleY:1.875,x:0},0).to({_off:true},25).wait(49));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Ehljg5zMDLHAAAMAAABznMjLHAAAg");
	this.shape.setTransform(640,360);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhljA50MAAAhznMDLHAAAMAAABzng");
	this.shape_1.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(568));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(630.8,359,676.7,389);
// library properties:
lib.properties = {
	id: 'A0C45601A1111F46BB60B0FAF96A36F6',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_310.png?1598694121964", id:"CachedBmp_310"},
		{src:"images/CachedBmp_51.png?1598694121964", id:"CachedBmp_51"},
		{src:"images/CachedBmp_49.png?1598694121964", id:"CachedBmp_49"},
		{src:"images/sea_of_treasures_atlas_1.png?1598694121252", id:"sea_of_treasures_atlas_1"},
		{src:"images/sea_of_treasures_atlas_2.png?1598694121254", id:"sea_of_treasures_atlas_2"},
		{src:"images/sea_of_treasures_atlas_3.png?1598694121256", id:"sea_of_treasures_atlas_3"},
		{src:"images/sea_of_treasures_atlas_4.png?1598694121256", id:"sea_of_treasures_atlas_4"},
		{src:"images/sea_of_treasures_atlas_5.png?1598694121257", id:"sea_of_treasures_atlas_5"},
		{src:"images/sea_of_treasures_atlas_6.png?1598694121257", id:"sea_of_treasures_atlas_6"},
		{src:"images/sea_of_treasures_atlas_7.png?1598694121257", id:"sea_of_treasures_atlas_7"},
		{src:"images/sea_of_treasures_atlas_8.png?1598694121258", id:"sea_of_treasures_atlas_8"},
		{src:"images/sea_of_treasures_atlas_9.png?1598694121258", id:"sea_of_treasures_atlas_9"},
		{src:"images/sea_of_treasures_atlas_10.png?1598694121258", id:"sea_of_treasures_atlas_10"},
		{src:"images/sea_of_treasures_atlas_11.png?1598694121259", id:"sea_of_treasures_atlas_11"},
		{src:"images/sea_of_treasures_atlas_12.png?1598694121259", id:"sea_of_treasures_atlas_12"},
		{src:"images/sea_of_treasures_atlas_13.png?1598694121259", id:"sea_of_treasures_atlas_13"},
		{src:"images/sea_of_treasures_atlas_14.png?1598694121260", id:"sea_of_treasures_atlas_14"},
		{src:"images/sea_of_treasures_atlas_15.png?1598694121260", id:"sea_of_treasures_atlas_15"},
		{src:"images/sea_of_treasures_atlas_16.png?1598694121261", id:"sea_of_treasures_atlas_16"},
		{src:"images/sea_of_treasures_atlas_17.png?1598694121261", id:"sea_of_treasures_atlas_17"},
		{src:"sounds/angry.mp3?1598694121964", id:"angry"},
		{src:"sounds/Beep.mp3?1598694121964", id:"Beep"},
		{src:"sounds/Beepfast.mp3?1598694121964", id:"Beepfast"},
		{src:"sounds/digging.mp3?1598694121964", id:"digging"},
		{src:"sounds/jump.mp3?1598694121964", id:"jump"},
		{src:"sounds/SeaSound.mp3?1598694121964", id:"SeaSound"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A0C45601A1111F46BB60B0FAF96A36F6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;