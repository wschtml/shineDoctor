var tplGuide2 = require("../tpl/guide2.string");
SPA.defineView("guide2",{
	html : tplGuide2,
	plugins : ["delegated"],
	bindActions : {
		"goto.guide1" : function(){
			SPA.open("guide1");
		}
	}
});
