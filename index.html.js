console.info("Parsing index.html.js");

System.register("index",["myBundledMainModule","./myModule.js","myNamedModule"], function (_export, _context) {
  var myBundledMainModule;
  var myModule;
  var myNamedModule;
  console.info("Initializing module index.html.js");		
  return {
    setters: [
		function (_dep) {myBundledMainModule = _dep;},
		function (_dep) {myModule = _dep;},
		function (_dep) {myNamedModule = _dep;}
	],
    execute: function () {
      console.info("Executing module index.html.js");
	  
	  try{myBundledMainModule.Foo();}catch(e){console.error(e.message);}
	  try{myModule.Foo();}catch(e){console.error(e.message);}
	  try{myNamedModule.Foo();}catch(e){console.error(e.message);}
		
      _export({
      });
    }
  };
},/*optional metas*/ [
  /*optional meta for dependency*/ {assert: {type: 'javascript'}},
]);