function MutablePoint3d(x, y, z){
    this.getX = function(){
        return x;
    }
    this.getY = function(){
        return y;
    }
    this.getZ = function(){
        return z;
    }

    //mooove MUST BE IN THE CONSTRUCTOR in order to see it in this constructor function
    this.move = function(dx, dy, dz){
        x += dx;
        y += dy;
        z += dz;
    }
}

function ImmutablePoint3d(x, y, z){
    this.getX = function(){
        return x;
    }
    this.getY = function(){
        return y;
    }
    this.getZ = function(){
        return z;
    }
}

//immutable => returns the instance
ImmutablePoint3d.prototype.move = function(dx, dy, dz){
    return new ImmutablePoint3d(this.getX() + dx, this.getY() + dy, this.getZ() + dz);
}

MutablePoint3d.prototype.toString = function(){
    return [this.getX(), this.getY(), this.getZ()].join(', '); 
}

//code
var p1 = new MutablePoint3d(0, 0, 0);

p1.move(0, 0, -1);

console.log(p1.getX());
console.log(p1.getY());
console.log(p1.getZ());
console.log(p1.toString());
