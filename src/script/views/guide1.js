var tplGuide1 = require("../tpl/guide1.string");
SPA.defineView("guide1",{
	html : tplGuide1,
	plugins : ["delegated"],
	bindActions : {
		"goto.guide" : function(){
			SPA.open("guide");
		}
	}
});
