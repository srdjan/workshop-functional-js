function first(num, word) {
    var result = [];
    if (word.length >= num) {
        for (var i = 0; i < num; i++) {
            result.push(word.substring(i, i + 1));
        }
    }
    return result;
}

var words = ["bla", "muu", "tatta"];

function firstTwoChars(words) {
    var result = [];
    for (var i = 0; i < words.length; i++) {
        var arr = [];
        arr.push(first(2, words[i]));
        result.push(arr);
    }
    return result;
}

console.log(firstTwoChars(words));
