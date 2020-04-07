//Hard Challenge

var Person = (function() {
    var ssid = "ghhyijh"
    function Person(name) {
        this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
};

return Person; 
}());
var p = new Person('Jaron');
console.log(p.getName())
