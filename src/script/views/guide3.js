var tplGuide3 = require("../tpl/guide3.string");
SPA.defineView("guide3",{
	html : tplGuide3,
	plugins : ["delegated"],
	bindActions : {
		"goto.guide2" : function(){
			SPA.open("guide2");
		}
	}
});
