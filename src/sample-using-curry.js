// function curry(fn) {
//     var args = Array.prototype.slice(arguments, 1);
//     return function() {
//         return fn.apply(this, args.concat(Array.prototype.slice(arguments, 0)));
//     }
// }
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}

var first = function(num, word) {
   if(arguments.length === 1) {
      return first.bind(undefined, num);
   }
   var result = [];
   if (word.length >= num) {
       for (var i = 0; i < num; i++) {
           result.push(word.substring(i, i + 1));
       }
   }
   return result;
}


var words = ["bla", "muu", "tatta"];
var first2 = first(2);
console.log(first2("vasva"));
[2, 5, , 9].forEach(console.log);
var result = words.forEach(first2);
console.log(words);