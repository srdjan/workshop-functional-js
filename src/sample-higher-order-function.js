show = console.log;

function wrap(tag) {
    var startTag = '<' + tag + '>';
    var endTag = '</' + tag + '>';
    return function(x) {
      return startTag + x + endTag;
    }
}
var bold = wrap('B');
show(bold("This is bold text."));
