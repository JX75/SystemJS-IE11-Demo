/* Named registry: one module per file, can be loaded with a map */

console.info("Parsing myOtherNamedModule.js");


System.register("myOtherNamedModule",[], function (_export, _context) {
  console.info("Registering module myOtherNamedModule (in myOtherNamedModule.js)");
  
  return {
    setters: [
		],
    execute: function () {
      console.info("Executing module myOtherNamedModule (in myOtherNamedModule.js)");		
	  
	  function Foo(){
		  console.log("Calling Foo");
	  }
		
      _export({
		  Foo: Foo
      });
    }
  };
},/*optional metas*/ [
  /*optional meta for dependency*/ {assert: {type: 'javascript'}},
]);