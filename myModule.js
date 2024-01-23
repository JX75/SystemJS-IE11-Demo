/* Classical registry: one exported module per file */

console.info("Parsing myModule.js");

/* No name provided when registering */
System.register(/*"myModule",*/[], function (_export, _context) {
  console.info("Registering module myModule.js");
  
  return {
    setters: [
		],
    execute: function () {
      console.info("Executing module myModule.js");		
	  
	  function Foo(){
		  console.log("Calling Foo from myModule.js");
	  }
		
      _export({
		  Foo: Foo
      });
    }
  };
},/*optional metas*/ [
  /*optional meta for dependency*/ {assert: {type: 'javascript'}},
]);