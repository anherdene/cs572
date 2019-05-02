var EventEmitter = require('events');

class Gym extends EventEmitter{

    constructor(){
        super();
        setInterval( this.boom.bind(this),1000)
    }

    boom(){
        this.emit('boom');
    }
}

let gym1 = new Gym()
gym1.on('boom', _=>console.log('Athlete is working out'));
