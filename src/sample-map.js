require('../node_modules/functionaljs').expose(global);

var show = console.log;

show(map(function (n) { 
  return n*n; 
}, [1, 2, 3, 4, 5]));