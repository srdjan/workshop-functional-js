require('../node_modules/functionaljs').expose(global);
var show = console.log;

function sqr(n) { 
  return n*n; 
};

// show(map(sqr, [1, 2, 3, 4, 5]));

function splat(fn) {
  return function (list) {
    return Array.prototype.map.call(list, fn);
  }
}

var sqrMap = splat(sqr);
show(sqrMap([1, 2, 3, 4, 5]));
