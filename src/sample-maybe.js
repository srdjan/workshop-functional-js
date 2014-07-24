var show = console.log;

function splat(fn) {
    return function(list) {
        return Array.prototype.map.call(list, fn)
    }
}

function get(attr) {
    return function(object) {
        return object[attr];
    }
}

function maybe(fn) {
    return function() {
        var i;

        if (arguments.length === 0) {
            return;
        } else {
            for (i = 0; i < arguments.length; ++i) {
                if (arguments[i] == null) {
                  return arguments[i];
                }
            }
            return fn.apply(this, arguments);
        }
    }
}

var div = function(a, b) {
  return a / b;
};

show(div(2, 0));
show(maybe(div(2, 0))());
// show(splat(maybe(get('oranges')))(inventories));
//show(splat(get('oranges'))(inventories));
