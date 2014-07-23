var _ = require("underscore");

var words = ["bla", "muu", "tatta"];

function firstTwoChars(words) {
    return _.map(words, function(word) {
        return _.first(word, 2);
    });
}

console.log(firstTwoChars(words));
