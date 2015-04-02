String.prototype.capitalize = function(){
    return this[0].toUpperCase() + this.slice(1);
}

String.prototype.isBlank = function(){
    return this.trim().length === 0;
}

String.prototype.words = function(){
    return this.split(/\s+/);
}

String.prototype.format = function(){
    var newString = this;
    if (arguments[0] instanceof Object){
        for (var property in arguments[0]) {
            if (arguments[0].hasOwnProperty(property)) {
                newString = newString.replace('{' + property +'}', arguments[0][property]);
            }
        }
    }else if(arguments.length >= 1){
        for(var i = 0; i < arguments.length; i++){
            newString = newString.replace('{}', arguments[i]);
        }
    }else{
        throw 'Error!';
    }

    return newString;
}

Array.prototype.head = function(){
    return this[0];
}

Array.prototype.tail = function(){
    var newArray = this.slice();
    newArray.shift();
    return newArray;
}

Array.prototype.last = function(){
    return this[this.length - 1];
}

Array.prototype.range = function(start, end){
    var newArray = [];
    for(var i = start; i <= end; i++){
        newArray.push(i);
    }

    return newArray;
}

Array.prototype.sum = function(){
    var sum = 0;
    for(var i = 0; i < this.length; i++){
        sum += this[i];
    }

    return sum;
}

Array.prototype.product = function(){
    var product = 1;
    for(var i = 0; i < this.length; i++){
        product *= this[i];
    }

    return product;
}

Array.prototype.compact = function(){
    return this.filter(Boolean);
}

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)]
}

// console.log('javascript'.capitalize());
// console.log('     '.isBlank());
// console.log("This is    a   very   clever   sentence!".words());

// var result = "Hi, my name is {}. Nice to meet you {}".format('What?', "Good sir!");
// console.log(result);

// var replaces = { "name": "Ivan", "language": "Bulgarian" };
// var result = "Hello there {name}! Do you speak {language}?".format(replaces);
// console.log(result);

// var a = [1, 2, 3];
// console.log(a.head() === 1);
// console.log(a.tail());
// console.log(a.last() === 3);

// console.log(a);

// var a = [];
// console.log(a.range(1,10));
// console.log([1,2,3].sum());
// console.log([1,2,3].product());
// console.log([false, true, 0, "", null, 5, undefined, NaN, "JavaScript"].compact());
console.log([1,2,4].sample());