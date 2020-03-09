//sanity
console.log('pokebtl1-script.js loaded');

//reference the elements needed
const move1Btn = document.querySelector('#move1');
const move2Btn = document.querySelector('#move2');
const move3Btn = document.querySelector('#move3');
const move4Btn = document.querySelector('#move4');
const move1Des = document.querySelector('#move1-description');
const move2Des = document.querySelector('#move2-description');
const move3Des = document.querySelector('#move3-description');
const move4Des = document.querySelector('#move4-description');
const tyHP = document.querySelector('#ty-hp');
const blastHP = document.querySelector('#blast-hp');
const tyStatus = document.querySelector('#ty-status');
const blastStatus = document.querySelector('#blast-status');

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
        acc: 100,
        pp: 15,
        type: 'Fire'
    },
    move2: {
        name: 'Wild Charge',
        pwr: 90,
        acc: 100,
        pp: 15,
        type: 'Electric'
    },
    move3: {
        name: 'Extrasensory',
        pwr: 80,
        acc: 100,
        pp: 20,
        type: 'Psychic'
    },
    move4: {
        name: 'Brick Break',
        pwr: 75,
        acc: 100,
        pp: 15,
        type: 'Fighting'
    }

};

//create an object for blastoise similar to the one for typholsion
const blastoise = {
    name: 'Blastoise',
    type: 'Water',
    hp: 299,
    atk: 171,
    def: 236,
    sp_atk: 206,
    sp_def: 246,
    spd: 192,
    move1: {
        name: 'Hydro Pump',
        type: 'Water',
        pwr: 110,
        acc: 80,
        pp: 8
    },
    move2:{
        name: 'Dragon Pulse',
        type: 'Dragon',
        pwr: 85,
        acc: 100,
        pp: 16
    },
    move3: {
        name: 'Flash Cannon',
        type: 'Steel',
        pwr: 80,
        acc: 100,
        pp: 16
    },
    move4: {
        name: 'Dark Pulse',
        type: 'Dark',
        pwr: 80,
        acc: 100,
        pp: 15
    }
};

//add the name of typholsion's move1 to the move1Btn on the html
move1Btn.innerHTML = typholsion.move1.name;
//add the name of typholsion's move2 to the move2Btn
move2Btn.innerHTML = typholsion.move2.name;
//add the name of typholsion's move3 to the move3Btn
move3Btn.innerHTML = typholsion.move3.name;
//add the name of typholsion's move4 to the move4Btn
move4Btn.innerHTML = typholsion.move4.name;
//add the class type-fire to the move1Btn
move1Btn.classList.add('type-fire');
//add the class type-electric to teh move2Btn
move2Btn.classList.add('type-electric');
//add the class type-psychic to the move3Btn
move3Btn.classList.add('type-psychic');
//add the class type-figthing to the move4btn
move4Btn.classList.add('type-fighting');

//create a variable for blastoise's turn and set ti equal to 0
let blastTurn = 0;
//create a variable for critical hit chance and set it equal to 0
let criticalHitChance = 0;
//create a variable for critical hit modifier
const criticalHit = 2;
//create a variable for super effective modifier
const superEff = 2;
//create a variable for not very effective modifier
const notVeryEff = 0.5
//create a variable for burn chance and set it equal to 0
let burnChance = 0;
//create a variable for damage to opponent
let damageToOpp = 0;

//create a function to use move1 when the move1Btn is clicked
const useFlamethrower = event => {
    alert(`${typholsion.name} used ${typholsion.move1.name}!`);
    //generate a random number between 1 and 100 and set it to criticalHitChance for typholosion's attack
    criticalHitChance = Math.round(99 * Math.random() + 1);
    //alert the user that the move is not very effective if the move type is fire
    if (typholsion.move1.type === 'Fire'){
        alert("It's not very effective");
        //alert the user that the hit was critical if criticalHitChance is no greater than 6
        if (criticalHitChance <= 6){
            alert('Critical Hit!')
            //store the damage dealt into the damageToOpp variable using the appropriate modifiers
         damageToOpp = Math.round(((((((2 * 100) / 5) + 2) * typholsion.move1.pwr * (typholsion.sp_atk / blastoise.sp_def)) / 50) + 2) * 
        (notVeryEff*criticalHit));
        } else {
             damageToOpp = Math.round(((((((2 * 100) / 5) + 2) * typholsion.move1.pwr * (typholsion.sp_atk / blastoise.sp_def)) / 50) + 2) * 
        notVeryEff);
        }
    }
    //reflect the change in blastoise's hp
    blastoise.hp -= damageToOpp;
    blastHP.innerHTML = `${blastoise.hp}/299`;
    //generate a random
}


//Create a function to add the description of flamethrower to the move1Btn and show it
const flamethrowerDescription = event => {
    move1Des.innerText = `${typholsion.move1.name}\nType: ${typholsion.move1.type}\nPower: ${typholsion.move1.pwr}\nPP: ${typholsion.move1.pp}/15\n\nThe target is scorched with an intense blast of fire. This may leave the target burned.`;
    move1Des.removeAttribute('hidden');
}

//create a function to hide the description of moves
const hideMoveDescription = event => {
    move1Des.setAttribute('hidden',true);
}

//add the useFlamethrower function to the move1Btn as an event 
move1Btn.addEventListener('click',useFlamethrower);
//add the flamethowerDescription to the move1Btn as an event when the mouse hovers over the button
move1Btn.addEventListener('mouseover',flamethrowerDescription);
//add the hideMoveDescription to the move1Btn as an event when the mouse is not hovering over the button
move1Btn.addEventListener('mouseout', hideMoveDescription);