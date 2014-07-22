var pet = function(name) { // The outer function defines a variable called "name"
        var getName = function() {
            return name; // The inner function closes over "name", the variable of the outer function
        }
        return getName; // Return the inner function, thereby exposing it to outer scopes
    }

var myPet = pet("Vivie");
console.log(myPet);
console.log(myPet());
