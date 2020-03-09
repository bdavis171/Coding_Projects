//sanity
console.log('script.js loaded');

//create an object for typholsion with the following properties: name, type, hp,atk,def,sp_atk,sp_def,,spd,move1,move2,move3,move4
const typholsion = {
    name: 'Typhlosion',
    type: 'Fire',
    hp: 297,
    atk: 204,
    def: 192,
    sp_atk: 254,
    sp_def: 206,
    spd: 236,
    //each move will be an object with the following properties: name,pwr, acc, pp,type
    move1: {
        name: 'Flamethrower',
        pwr: 90,
        acc: 1,
        pp: 15,
        type: 'Fire'
    },
    move2: {
        name: 'Wild Charge',
        pwr: 90,
        acc: 1,
        pp: 15,
        type: 'Electric'
    },
    move3: {
        name: 'Extrasensory',
        pwr: 80,
        acc: 1,
        pp: 20,
        type: 'Psychic'
    },
    move4: {
        name: 'Brick Break',
        pwr: 75,
        acc: 1,
        pp: 15,
        type: 'Fighting'
    }

};