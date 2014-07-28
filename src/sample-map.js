require('../node_modules/functionaljs').expose(global);

var show = console.log;

function sqr(n) { 
  return n*n; 
};

show(map(sqr, [1, 2, 3, 4, 5]));