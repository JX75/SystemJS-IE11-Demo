/* Named registry: several modules can be bundled in a file if the bundled is directly loaded in the HTML file (not through a map) */

console.info("Parsing myBundle.js");

System.register("myBundledSecondaryModule1",[], function (_export, _context) {
  console.info("Registering module myBundledSecondaryModule1 (in myBundle.js)");		
  return {
    setters: [function () {
    }],
    execute: function () {
      console.info("Executing module myBundledSecondaryModule1 (in myBundle.js)");		
	  
	  function Foo(){
		  console.log("Calling Foo in myBundledSecondaryModule1 (in myBundle.js)");
	  }
		
      _export({
		  Foo: Foo
      });
    }
  };
},/*optional metas*/ [
  /*optional meta for dependency*/ {assert: {type: 'javascript'}},
]);

System.register("myBundledSecondaryModule2",[], function (_export, _context) {
  console.info("Registering module myBundledSecondaryModule2 (in myBundle.js)");		
  return {
    setters: [function () {
    }],
    execute: function () {
      console.info("Executing module myBundledSecondaryModule2 (in myBundle.js)");		
	  
	  function Foo(){
		  console.log("Calling Foo in myBundledSecondaryModule2 (in myBundle.js)");
	  }
		
      _export({
		  Foo: Foo
      });
    }
  };
},/*optional metas*/ [
  /*optional meta for dependency*/ {assert: {type: 'javascript'}},
]);

System.register("myBundledMainModule",["myBundledSecondaryModule1","myBundledSecondaryModule2"], function (_export, _context) {
  console.info("Registering module myBundledMainModule (in myBundle.js)");
  var myBundledSecondaryModule1;
  var myBundledSecondaryModule2;
  
  return {
    setters: [
		function (dep1) {myBundledSecondaryModule1 = dep1;},
		function (dep2) {myBundledSecondaryModule2 = dep2;}
		],
    execute: function () {
      console.info("Executing module myBundledMainModule (in myBundle.js)");		
	  
	  function Foo(){
		  console.log("Calling Foo in myBundledMainModule (in myBundle.js)");
		  try {
			  myBundledSecondaryModule1.Foo();
			  myBundledSecondaryModule2.Foo();
		  } catch(e){console.Error(e.message);}
	  }
		
      _export({
		  Foo: Foo
      });
    }
  };
},/*optional metas*/ [
  /*optional meta for dependency*/ {assert: {type: 'javascript'}},
]);