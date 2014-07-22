var Person = {
    name: undefined,
    canTalk: true,
    greet: function() {
        if (this.canTalk) {
            console.log("Hi, I'm " + this.name);
        }
    }
};

var Employee = Object.create(Person);
Employee.title = undefined;
Employee.greet = function() {
    console.log("Hi, I'm " + this.name + ", the " + this.title);
};

var bob = Object.create(Employee, {
    name: {
        value: "Bob"
    },
    title: {
        value: "Builder"
    }
});
bob.greet();

function Mime(name) {
    this.name = name;
    this.canTalk = false;
};
Mime.prototype = Object.create(Person);

var mime = new Mime('Mime');
mime.greet();