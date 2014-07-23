require('../node_modules/functionaljs').expose(global);

var show = console.log;

var first = function(num, word) {
  return function(word) {
    var result = [];
    if (word.length >= num) {
        for (var i = 0; i < num; i++) {
            result.push(word.substring(i, i + 1));
        }
    }
    return result;
  }
}

var words = ["bla", "muu", "tatta"];

show(map(first(2), words)); 
