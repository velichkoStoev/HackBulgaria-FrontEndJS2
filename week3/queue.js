var queue = (function(){
    var arr = [];

    return {
        push: function(item){
            arr.push(item);
        },
        pop: function(){
            return arr.shift();
        },
        isEmpty: function(){
            return arr.length === 0;
        }
    }
})();

// var queue = new Queue();
queue.push(2);
queue.push(3);
console.log(queue.isEmpty());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.isEmpty());