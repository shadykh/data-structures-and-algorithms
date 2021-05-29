/**
 * require the node for the linked-list
 */

const Node = require('./node.js');


class Stack {

    constructor() {
        this.top = null;
    }

    push(value){
        if(!value){return '⚠️The passing value is not valid.⚠️'};

        let node = new Node(value);

        node.next = this.top;
        this.top = node;
        return this;
    }

    pop(){
        if(!this.top){return '⚠️The Stack is empty⚠️. You can not pop from it ❌'};

        let popped = this.top;
        this.top = this.top.next;
        popped.next = null;
        return popped.value;
    }

    peek(){
        if(!this.top){return '⚠️The Stack is empty.⚠️ You can not use the peek ❌'};

        return this.top.value;
    }

    isEmpty(){
        if(!this.top)
        {return true}
        else
        {return false}
    }
}


class Queue {

    constructor() {
        this.front = null;
        this.back = null;
    }

    enqueue(value){
        if(!value){return '⚠️The passing value is not valid.⚠️'};

        let node = new Node(value);

        if(this){
            this.front = node;
            this.back = node;
        }else{
            node.back.next = node;
            this.back = node;
            return this;
        }
    }

    dequeue(){
        if(!this.front){return '⚠️The Queue is empty⚠️. You can not dequeue from it ❌'};

        let dequeued = this.front;
        this.front = this.front.next;
        dequeued.next = null;
        return dequeued.value;
    }

    peek(){
        if(!this.front){return '⚠️The Queue is empty.⚠️ You can not use the peek ❌'};

        return this.front.value;
    }

    isEmpty(){
        if(!this.front)
        {return true}
        else
        {return false}
    }
}

module.exports = {
    Stack: Stack,
    Queue: Queue,
};