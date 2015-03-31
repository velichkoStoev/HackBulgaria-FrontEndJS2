function Panda(name, sex){
    this.name = name;
    if(['male', 'female'].indexOf(sex) === -1){
        sex = 'female';
    }
    this.sex = sex;
    this.weight = 20;
}

Panda.prototype.toString = function(){
    return this.name + " is a " + this.sex + " which weighs " + this.weight + " kg"; 
}

Panda.prototype.isFemale = function(){
    return this.sex === 'female';
}

Panda.prototype.isMale = function(){
    return this.sex === 'male';
}

Panda.prototype.eat = function(bamboo){
   var isLazy = this.weight >= 80;
   this.weight += bamboo / 2;
   
   if(this.weight >= 80 && !isLazy) {
     this.name = "Lazy Panda " + this.name;
   }
}

Panda.prototype.mate = function(anotherPanda){
    var motherName = '';
    var fatherName = '';

    if(this.isMale() && anotherPanda.isFemale){
        motherName = anotherPanda.name;
        fatherName = this.name;
    }else if(this.isFemale() && anotherPanda.isMale){
        motherName = this.name;
        fatherName = anotherPanda.name;
    }else{
        throw 'Cannot happen!';
    }

    var newSex = ['female', 'male'][Math.floor(Math.random())]

    var newName = {
        female: motherName + ' ' + fatherName,
        male: fatherName + ' ' + motherName
    }[newSex];

    return new Panda(newName, newSex);
}

//code
var ivo = new Panda("Ivo", "male");

console.log(ivo.weight);
console.log(ivo.isMale());
console.log(ivo.isFemale());
console.log(ivo.toString());

ivo.eat(80);
console.log(ivo.weight === 60);

console.log(ivo.name);

ivo.eat(80);
console.log(ivo.weight === 100);

console.log(ivo.name);

ivo.eat(80);
console.log(ivo.weight === 100);

console.log(ivo.name);

var femalePanda = new Panda('Ivanka', 'female');
console.log(ivo.mate(femalePanda));

var malePanda = new Panda('Ivan', 'male');
// console.log(ivo.mate(malePanda)); //throws exception

