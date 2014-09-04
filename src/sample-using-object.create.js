var log = console.log;

function Person() {
    this.name = undefined;
    this.canTalk = true;
};

Person.prototype.greet = function() {
  if (this.canTalk) {
    console.log("Hi, I'm " + this.name);
  }
}

var bob = new Person();
bob.greet();
