var show = console.log;
function first(num, word) {
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
// function firstTwoChars(words) {
//     return _.map(words, function(word) {
//         return _.first(word, 2);
//     });
// }
//
// //-> step 1
// var firstTwoChars-1 = function (words) {
//     return _.map(words, _.first(2)); //-> inverted order of _.first args to _.first(num, word) 
// }

// //-> step 2
// var firstTwoChars-2 = _.map(_.first(2)); //-> inverted order of _.map args to _.map(function, colection) 


require('../../node_modules/functionaljs').expose(global);

var words = ["bla", "muu", "tatta"];

show(map(first(2), words)); 
