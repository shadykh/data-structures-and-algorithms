'use strict';

const StackAndQueue = require('../../Data-Structures/JavaScript/stacksAndQueues/stacks-and-queues');

class AnimalShelter{
    constructor() {
        this.dog = new StackAndQueue.Queue();
        this.cat = new StackAndQueue.Queue();
    }

    enqueue(animal){
        if(!animal){return '⚠️The passing value is not valid.⚠️'};

        if (animal.type === 'dog'){
            return this.dog.enqueue(animal);
        }

        if (animal.type === 'cat'){
            return this.cat.enqueue(animal);
        }
    }

    dequeue(pref){
        if(!pref){return '⚠️The passing pref is not valid.⚠️'};

        if(pref.type === 'dog'){
            return this.dog.dequeue();
        }

        if(pref.type === 'cat'){
            return this.dog.dequeue();
        }

        return null;
    }
}

module.exports = AnimalShelter;