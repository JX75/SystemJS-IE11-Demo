/* Named registry: one module per file, can be loaded with a map or preloaded */

console.info("Parsing myNamedModule.js");


System.register("myNamedModule",[], function (_export, _context) {
  console.info("Registering module  myNamedModule (myNamedModule.js)");
  
  return {
    setters: [
		],
    execute: function () {
      console.info("Executing module myNamedModule (myNamedModule.js)");		
	  
	  function Foo(){
		  console.log("Calling Foo in myNamedModule (myNamedModule.js)");
	  }
		
      _export({
		  Foo: Foo
      });
    }
  };
},/*optional metas*/ [
  /*optional meta for dependency*/ {assert: {type: 'javascript'}},
]);