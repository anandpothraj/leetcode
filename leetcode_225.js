
var MyStack = function() {
    this.queue = [];
};

MyStack.prototype.push = function(x) {
    const size = this.queue.length;
    this.queue.push(x);
    for (let i = 0; i < size; i++) {
        this.queue.push(this.queue.shift());
    }
};

MyStack.prototype.pop = function() {
    return this.queue.shift();
};

MyStack.prototype.top = function() {
    return this.queue[0];
};

MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};

console.log(MyStack(["MyStack","push","push","top","pop","empty"], [[],[1],[2],[],[],[]]));