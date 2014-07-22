var log = console.log;

function C(){}

var o = new C();
log(o instanceof C);//-> true, because: Object.getPrototypeOf(o) === C.prototype

var str = new String("aaaa");
log(str instanceof Object);
log(str instanceof Function);

var arr = [];
log(arr instanceof Object);
log(arr instanceof Function);


log(Object instanceof Function); //-> since Object is a ctor function
