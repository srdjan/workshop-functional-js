function Person() {
    this.name;
    this.canTalk = true;
    this.greet = function() {
        if (this.canTalk) {
            console.log("Hi, I'm " + this.name);
        }
    };
};

function Employee(name, title) {
    this.name = name;
    this.title = title;
    this.greet = function() {
        console.log("Hi, I'm " + this.name + ", the " + this.title);
    };
};
Employee.prototype = new Person();

function Mime(name) {
    this.name = name;
    this.canTalk = false;
};
Mime.prototype = new Person();

var bob = new Employee('Bob','Builder');
bob.greet();

var mime = new Mime('Mime');
mime.greet();