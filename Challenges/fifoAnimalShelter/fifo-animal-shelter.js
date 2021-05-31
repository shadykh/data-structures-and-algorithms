'use strict';

const StackAndQueue = require('../../Data-Structures/JavaScript/stacksAndQueues/stacks-and-queues');

class AnimalShelter{
    constructor() {
        this.dog = new StackAndQueue.Queue();
        this.cat = new StackAndQueue.Queue();
    }

    enqueue(animal){
        if(!animal){return '⚠️The passing value is not valid.⚠️'};

        if (animal === 'dog'){
            return this.dog.enqueue(animal);
        }

        if (animal === 'cat'){
            return this.cat.enqueue(animal);
        }
    }

    dequeue(pref){
        if(!pref){return '⚠️The passing pref is not valid.⚠️'};

        if(pref === 'dog'){
            return this.dog.dequeue();
        }

        if(pref === 'cat'){
            return this.dog.dequeue();
        }

        return null;
    }
}

module.exports = AnimalShelter;