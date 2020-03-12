//This program will simmulate a pokemon battle between Typhlosion, the Volcano Pokemon, and Blastoise, the Shellfish Pokemon.

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

//create an object for typholsion with the following properties: name, type, hp,atk,def,sp_atk,sp_def,,spd,move1,move2,move3,move4
//NOTE: This is a BAD match up, adjust typholsion's hp and atk stats later for a more fair chance
const typholsion = {
    name: 'Typhlosion',
    type: 'Fire',
    hp: 322,
    atk: 204,
    def: 192,
    sp_atk: 254,
    sp_def: 231,
    spd: 236,
    //each move will be an object with the following properties: name,pwr, acc, type
    move1: {
        name: 'Flamethrower',
        pwr: 90,
        acc: 100,
        type: 'Fire'
    },
    move2: {
        name: 'Wild Charge',
        pwr: 90,
        acc: 100,
        type: 'Electric'
    },
    move3: {
        name: 'Extrasensory',
        pwr: 80,
        acc: 100,
        type: 'Psychic'
    },
    move4: {
        name: 'Brick Break',
        pwr: 75,
        acc: 100,
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
        acc: 80
    },
    move2: {
        name: 'Dragon Pulse',
        type: 'Dragon',
        pwr: 85,
        acc: 100
    },
    move3: {
        name: 'Flash Cannon',
        type: 'Steel',
        pwr: 80,
        acc: 100
    },
    move4: {
        name: 'Dark Pulse',
        type: 'Dark',
        pwr: 80,
        acc: 100
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
const superEff = 1.5;
//create a variable for not very effective modifier
const notVeryEff = 0.5
//create a variable for damage to opponent
let damageToOpp = 0;
//create a variable for damage received
let damageReceived = 0;
//create a variable for move accuracy and set it equal to 0. this will determine whether or not a move will hit
let moveAccuracy = 0;
//create a function to calculate damage for special attacks
const calculateSpDamage = (power, userSpAtk, targetSpDef) => {
    return Math.round(((((((2 * 100) / 5) + 2) * power * (userSpAtk / targetSpDef)) / 50) + 2));
}
//create a function to calculate damage for physical attacks
const calculatePhyDamage = (power, userAtk, targetDef) => {
    return Math.ceil(((((((2 * 100) / 5) + 2) * power * (userAtk / targetDef)) / 50) + 2));
}
//create a function to use move1 when the move1Btn is clicked
const useFlamethrower = event => {//this is a special atttack move, use calculateSpDamage to find the damage
    alert(`${typholsion.name} used ${typholsion.move1.name}!`);
    //generate a random number between 1 and 100 and set it to the moveAccuracy variable for typholsion's attack
    moveAccuracy = Math.round(99 * Math.random() + 1);
    //set a condition for it the moveAccuracy is greater than the acc of move1
    if (moveAccuracy > typholsion.move1.acc) {
        alert('The attack missed...');
        damageReceived = 0;
    }
    else {
        //generate a random number between 1 and 100 and set it to criticalHitChance for typholosion's attack
        criticalHitChance = Math.round(99 * Math.random() + 1);
        alert("It's not very effective");
        //alert the user that the hit was critical if criticalHitChance is no greater than 6
        if (criticalHitChance <= 6) {
            alert('Critical Hit!')
            //store the damage dealt into the damageToOpp variable using the appropriate modifiers
            damageToOpp = calculateSpDamage(typholsion.move1.pwr, typholsion.sp_atk, blastoise.sp_def) * (notVeryEff * criticalHit);
        } else {
            damageToOpp = calculateSpDamage(typholsion.move1.pwr, typholsion.sp_atk, blastoise.sp_def) * notVeryEff;
        }
    }



    //reflect the change in blastoise's hp
    blastoise.hp -= damageToOpp;
    blastHP.innerHTML = `HP: ${blastoise.hp}/299`;
    //generate a random between 1 and 4 and set it to blastTurn
    blastTurn = Math.round(3 * Math.random() + 1);

    //generate a number for moveAccuracy for blastoise's attacks
    moveAccuracy = Math.round(99 * Math.random() + 1);
    //have blastoise use it's move1 if blastTurn is 1
    if (blastTurn === 1) {//this is a special attack move, use calculateSpDamage to find the damage
        alert(`${blastoise.name} used ${blastoise.move1.name}!`);
        if (moveAccuracy > blastoise.move1.acc) {
            alert('The attack missed...');
            damageReceived = 0;
        }
        else {
            alert("It's super effective!")
            //generate another number for critical hit chance for blastoise's attacks
            criticalHitChance = Math.round(99 * Math.random() + 1);
            if (criticalHitChance <= 6) {
                alert('Critical Hit!');
                //store damage received into the damageReceived variable using the appropriate modifiers
                damageReceived = calculateSpDamage(blastoise.move1.pwr, blastoise.sp_atk, typholsion.sp_def) * (superEff * criticalHit);
            }
            else {
                damageReceived = calculateSpDamage(blastoise.move1.pwr, blastoise.sp_atk, typholsion.sp_def) * (superEff);
            }
        }

    }
    //have blastoise use it's move2 if blastTurn is 2
    else if (blastTurn === 2) {//this is a special attack move, use calculateSpDamage to find the damage
        alert(`${blastoise.name} used ${blastoise.move2.name}!`);
        if (moveAccuracy > blastoise.move2.acc) {
            alert('The attack missed...');
            damageReceived = 0;
        }
        else {
            criticalHitChance = Math.round(99 * Math.random() + 1);
            if (criticalHitChance <= 6) {
                alert('Critical Hit!');
                damageReceived = calculateSpDamage(blastoise.move2.pwr, blastoise.sp_atk, typholsion.sp_def) * (criticalHit);
            }
            else {
                damageReceived = calculateSpDamage(blastoise.move2.pwr, blastoise.sp_atk, typholsion.sp_def);
            }
        }
    }
    //have blastoise use it's move3 if blastTurn is 3
    else if (blastTurn === 3) {//this is a special attack move, use calculateSpDamage to find the damage
        alert(`${blastoise.name} used ${blastoise.move3.name}!`);
        if (moveAccuracy > blastoise.move3.acc) {
            alert('The attack missed...');
            damageReceived = 0;
        }
        else {
            alert('Not very effective!')
            criticalHitChance = Math.round(99 * Math.random() + 1);
            if (criticalHitChance <= 6) {
                alert('Critical Hit!');
                damageReceived = calculateSpDamage(blastoise.move3.pwr, blastoise.sp_atk, typholsion.sp_def) * (criticalHit * notVeryEff);
            }
            else {
                damageReceived = calculateSpDamage(blastoise.move3.pwr, blastoise.sp_atk, typholsion.sp_def) * notVeryEff;
            }
        }
    }
    //have blastoise use it's move4 if blastTurn is 4
    else {//this is a special attack move, use calculateSpDamage to find the damage
        alert(`${blastoise.name} used ${blastoise.move4.name}!`);
        if (moveAccuracy > blastoise.move4.acc) {
            alert('The attack missed...');
            damageReceived = 0;
        }
        else {
            criticalHitChance = Math.round(99 * Math.random() + 1);
            if (criticalHitChance <= 6) {
                alert('Critical Hit!');
                damageReceived = calculateSpDamage(blastoise.move4.pwr, blastoise.sp_atk, typholsion.sp_def) * (criticalHit);
            }
            else {
                damageReceived = calculateSpDamage(blastoise.move4.pwr, blastoise.sp_atk, typholsion.sp_def);
            }
        }
    }

    //reflect the changes to typhlosion's hp
    typholsion.hp -= damageReceived;
    tyHP.innerHTML = `HP: ${typholsion.hp}/322`;

}

//create a function to use move2 similar to the previous function when clicked
const useWildCharge = event => {//This is a physical attacking move, use calculatePhyDamage to find the damage
    alert(`${typholsion.name} used ${typholsion.move2.name}!`);
    moveAccuracy = Math.round(99 * Math.random() + 1);
    if (moveAccuracy > typholsion.move2.acc) {
        alert('The attack missed...');
    }
    else {
        alert("It's super effective!");
        criticalHitChance = Math.round(99 * Math.random() + 1);
        if (criticalHitChance <= 6) {
            alert('Critical Hit!');
            damageToOpp = calculatePhyDamage(typholsion.move2.pwr,typholsion.atk,blastoise.def) * (criticalHit * superEff);
            alert('Typholsion took damage due to recoil!');
            typholsion.hp -= Math.ceil((damageToOpp * 0.25));
            tyHP.innerHTML = `HP: ${typholsion.hp}/322`;
        }
        else
        damageToOpp = calculatePhyDamage(typholsion.move2.pwr,typholsion.atk,blastoise.def) *  superEff;
        alert('Typholsion took damage due to recoil!');
        typholsion.hp -= (damageToOpp * 0.25);
        tyHP.innerHTML = `HP: ${typholsion.hp}/322`;
    }
    blastoise.hp -= damageToOpp;
    blastHP.innerHTML = `HP: ${blastoise.hp}/299`;
    
    blastTurn = Math.round(3 * Math.random() + 1);

   
    moveAccuracy = Math.round(99 * Math.random() + 1);
    if (blastTurn === 1) {
        alert(`${blastoise.name} used ${blastoise.move1.name}!`);
        if (moveAccuracy > blastoise.move1.acc) {
            alert('The attack missed...');
            damageReceived = 0;
        }
        else {
            alert("It's super effective!")
            criticalHitChance = Math.round(99 * Math.random() + 1);
            if (criticalHitChance <= 6) {
                alert('Critical Hit!');
                damageReceived = calculateSpDamage(blastoise.move1.pwr, blastoise.sp_atk, typholsion.sp_def) * (superEff * criticalHit);
            }
            else {
                damageReceived = calculateSpDamage(blastoise.move1.pwr, blastoise.sp_atk, typholsion.sp_def) * (superEff);
            }
        }

    }
    else if (blastTurn === 2) {
        alert(`${blastoise.name} used ${blastoise.move2.name}!`);
        if (moveAccuracy > blastoise.move2.acc) {
            alert('The attack missed...');
            damageReceived = 0;
        }
        else {
            criticalHitChance = Math.round(99 * Math.random() + 1);
            if (criticalHitChance <= 6) {
                alert('Critical Hit!');
                damageReceived = calculateSpDamage(blastoise.move2.pwr, blastoise.sp_atk, typholsion.sp_def) * (criticalHit);
            }
            else {
                damageReceived = calculateSpDamage(blastoise.move2.pwr, blastoise.sp_atk, typholsion.sp_def);
            }
        }
    }
    else if (blastTurn === 3) {
        alert(`${blastoise.name} used ${blastoise.move3.name}!`);
        if (moveAccuracy > blastoise.move3.acc) {
            alert('The attack missed...');
            damageReceived = 0;
        }
        else {
            alert('Not very effective!')
            criticalHitChance = Math.round(99 * Math.random() + 1);
            if (criticalHitChance <= 6) {
                alert('Critical Hit!');
                damageReceived = calculateSpDamage(blastoise.move3.pwr, blastoise.sp_atk, typholsion.sp_def) * (criticalHit * notVeryEff);
            }
            else {
                damageReceived = calculateSpDamage(blastoise.move3.pwr, blastoise.sp_atk, typholsion.sp_def) * notVeryEff;
            }
        }
    }
    else {
        alert(`${blastoise.name} used ${blastoise.move4.name}!`);
        if (moveAccuracy > blastoise.move4.acc) {
            alert('The attack missed...');
            damageReceived = 0;
        }
        else {
            criticalHitChance = Math.round(99 * Math.random() + 1);
            if (criticalHitChance <= 6) {
                alert('Critical Hit!');
                damageReceived = calculateSpDamage(blastoise.move4.pwr, blastoise.sp_atk, typholsion.sp_def) * (criticalHit);
            }
            else {
                damageReceived = calculateSpDamage(blastoise.move4.pwr, blastoise.sp_atk, typholsion.sp_def);
            }
        }
    }

    typholsion.hp -= damageReceived;
    tyHP.innerHTML = `HP: ${typholsion.hp}/322`;
}

//create a function to use move3
const useExtrasensory = event => {
    alert(`${typholsion.name} used ${typholsion.move3.name}!`);
    moveAccuracy = Math.round(99 * Math.random() + 1);
    if (moveAccuracy > typholsion.move3.acc) {
        alert('The attack missed...');
    }
    else {
        criticalHitChance = Math.round(99 * Math.random() + 1);
        if (criticalHitChance <= 6) {
            alert('Critical Hit!');
            damageToOpp = calculateSpDamage(typholsion.move3.pwr,typholsion.sp_atk,blastoise.sp_def) * criticalHit;
        }
        else
        damageToOpp = calculateSpDamage(typholsion.move3.pwr,typholsion.sp_atk,blastoise.sp_def);
    }
    blastoise.hp -= damageToOpp;
    blastHP.innerHTML = `HP: ${blastoise.hp}/299`;

    //generate a number between 1 and 100 and store in a variable called flinch
    let flinch = Math.round(99 * Math.random() + 1);
    //create a condition for blastoise to Flinch if the variable is no greater than 10
    if (flinch <= 10 ){
        alert('The opponent flinched!');
    }
    //continue as normal if not
    else {
        blastTurn = Math.round(3 * Math.random() + 1);

   
    moveAccuracy = Math.round(99 * Math.random() + 1);
    if (blastTurn === 1) {
        alert(`${blastoise.name} used ${blastoise.move1.name}!`);
        if (moveAccuracy > blastoise.move1.acc) {
            alert('The attack missed...');
            damageReceived = 0;
        }
        else {
            alert("It's super effective!")
            criticalHitChance = Math.round(99 * Math.random() + 1);
            if (criticalHitChance <= 6) {
                alert('Critical Hit!');
                damageReceived = calculateSpDamage(blastoise.move1.pwr, blastoise.sp_atk, typholsion.sp_def) * (superEff * criticalHit);
            }
            else {
                damageReceived = calculateSpDamage(blastoise.move1.pwr, blastoise.sp_atk, typholsion.sp_def) * (superEff);
            }
        }

    }
    else if (blastTurn === 2) {
        alert(`${blastoise.name} used ${blastoise.move2.name}!`);
        if (moveAccuracy > blastoise.move2.acc) {
            alert('The attack missed...');
            damageReceived = 0;
        }
        else {
            criticalHitChance = Math.round(99 * Math.random() + 1);
            if (criticalHitChance <= 6) {
                alert('Critical Hit!');
                damageReceived = calculateSpDamage(blastoise.move2.pwr, blastoise.sp_atk, typholsion.sp_def) * (criticalHit);
            }
            else {
                damageReceived = calculateSpDamage(blastoise.move2.pwr, blastoise.sp_atk, typholsion.sp_def);
            }
        }
    }
    else if (blastTurn === 3) {
        alert(`${blastoise.name} used ${blastoise.move3.name}!`);
        if (moveAccuracy > blastoise.move3.acc) {
            alert('The attack missed...');
            damageReceived = 0;
        }
        else {
            alert('Not very effective!')
            criticalHitChance = Math.round(99 * Math.random() + 1);
            if (criticalHitChance <= 6) {
                alert('Critical Hit!');
                damageReceived = calculateSpDamage(blastoise.move3.pwr, blastoise.sp_atk, typholsion.sp_def) * (criticalHit * notVeryEff);
            }
            else {
                damageReceived = calculateSpDamage(blastoise.move3.pwr, blastoise.sp_atk, typholsion.sp_def) * notVeryEff;
            }
        }
    }
    else {
        alert(`${blastoise.name} used ${blastoise.move4.name}!`);
        if (moveAccuracy > blastoise.move4.acc) {
            alert('The attack missed...');
            damageReceived = 0;
        }
        else {
            criticalHitChance = Math.round(99 * Math.random() + 1);
            if (criticalHitChance <= 6) {
                alert('Critical Hit!');
                damageReceived = calculateSpDamage(blastoise.move4.pwr, blastoise.sp_atk, typholsion.sp_def) * (criticalHit);
            }
            else {
                damageReceived = calculateSpDamage(blastoise.move4.pwr, blastoise.sp_atk, typholsion.sp_def);
            }
        }
    }

    typholsion.hp -= damageReceived;
    tyHP.innerHTML = `HP: ${typholsion.hp}/322`; 
    }
}






//Create a function to add the description of flamethrower to the move1Btn and show it
const flamethrowerDescription = event => {
    move1Des.innerText = `${typholsion.move1.name}\nType: ${typholsion.move1.type}\nPower: ${typholsion.move1.pwr}\n\nThe target is scorched with an intense blast of fire.`;
    move1Des.removeAttribute('hidden');
}

//create a function to add the description of wild charge to the move2Btn and show it
const wildChargeDescription = event => {
    move2Des.innerText = `${typholsion.move2.name}\nType: ${typholsion.move2.type}\nPower: ${typholsion.move2.pwr}\n\nThe user shrouds itself in electricity and smashes into its target. This also damages the user a little.`;
    move2Des.removeAttribute('hidden');
}

//create a funciton to add the description of extrasensory to the move3Btn and show it
const extrasensoryDescription = event => {
    move3Des.innerText = `${typholsion.move3.name}\nType: ${typholsion.move3.type}\nPower: ${typholsion.move3.pwr}\n\nThe user attacks with an odd, unseeable power. This may also make the target flinch.`;
    move3Des.removeAttribute('hidden');
}

//create a function to add the description of brick break to the mve4Btn and show it
const brickBreakDescription = event => {
    move4Des.innerText = `${typholsion.move4.name}\nType: ${typholsion.move4.type}\nPower: ${typholsion.move4.pwr}\n\nThe user attacks with a swift chop.`;
    move4Des.removeAttribute('hidden');
}
//create a function to hide the description of moves
const hideMoveDescription = event => {
    move1Des.setAttribute('hidden', true);
    move2Des.setAttribute('hidden',true);
    move3Des.setAttribute('hidden',true);
    move4Des.setAttribute('hidden',true);
}

//add the useFlamethrower function to the move1Btn as an event 
move1Btn.addEventListener('click', useFlamethrower);
//add the flamethowerDescription to the move1Btn as an event when the mouse hovers over the button
move1Btn.addEventListener('mouseover', flamethrowerDescription);
//add the hideMoveDescription to the move1Btn as an event when the mouse is not hovering over the button
move1Btn.addEventListener('mouseout', hideMoveDescription);

//add the useWildCharge function to the move2Btn as an event
move2Btn.addEventListener('click',useWildCharge);
//add the wildChargeDescription to the move2Btn as an event when mouse hovers over
move2Btn.addEventListener('mouseover',wildChargeDescription);
//add the hideMoveDescription to the move2Btn as an event when mouse is not over it
move2Btn.addEventListener('mouseout',hideMoveDescription);

//add the useExtrasensory function to the move3Btn as an event
move3Btn.addEventListener('click', useExtrasensory);
//add the extrasensoryDescription to the move3Btn as an event when mouse hovers over
move3Btn.addEventListener('mouseover',extrasensoryDescription);
//add the hideMoveDescription to the move3Btn
move3Btn.addEventListener('mouseout',hideMoveDescription);

//add the useBrickBreak function to the move4Btn as an event
// move4Btn.addEventListener('click', useBrickBreak);
//add the brickBreakDescription to the move4Btn as an event when mouse hovers over
move4Btn.addEventListener('mouseover',brickBreakDescription);
//add the hideMoveDescription to the move4tn
move4Btn.addEventListener('mouseout',hideMoveDescription);

