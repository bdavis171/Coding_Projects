import React, { Component } from 'react';
import Page23 from './Page23';
import Page9 from './Page9';

class Page24 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: {
                hp: 210,
                atk1: {
                    name: 'Starlight Slash',
                    min_dmg: 7,
                    max_dmg: 17
                },
                atk2: {
                    name: 'Magna Flare',
                    min_dmg: 9,
                    max_dmg: 15
                },
                atk3: {
                    name: 'Spark Drive',
                    min_dmg: 8,
                    max_dmg: 19
                }
            },

            maskedWoman: {
                hp: 200,
                atk1: {
                    name: 'Double Shot',
                    min_dmg: 8,
                    max_dmg: 14
                },
                atk2: {
                    name: 'Armor Breaker',
                    min_dmg: 10,
                    max_dmg: 15
                },
                atk3: {
                    name: 'Ultima Burst',
                    min_dmg: 11,
                    max_dmg: 20
                },
            },

            criticalModfier: 1.5,
            battleLog: []


        }
    }


    // handle attack buttons
    handleAttacks = async (event) => {
        let modifier = 1;
        let damageDealt;
        let damageReceived;
        let logEntry = '';
        let criticalMessage = '';
        let enemyAttackChance;

        // use atk1
        if (event.target.name === 'atk1') {
            // roll critical hit chance (5%)
            let criticalChance = Math.ceil(99 * Math.random() + 1);
            if (criticalChance <= 5) {
                modifier = this.state.criticalModfier;
                criticalMessage = 'It was a critical hit!';
            }
            damageDealt = Math.ceil(((this.state.player.atk1.max_dmg - this.state.player.atk1.min_dmg) * Math.random() + this.state.player.atk1.min_dmg) * modifier);
            logEntry = `You used ${this.state.player.atk1.name}! ${criticalMessage} Dealt ${damageDealt} damage!`;
            this.state.battleLog.push(logEntry);
            this.setState({
                battleLog: this.state.battleLog
            })
            this.state.maskedWoman.hp -= damageDealt;
            this.setState({
                maskedWoman: this.state.maskedWoman
            })

            enemyAttackChance = Math.ceil(99 * Math.random() + 1);
            if (enemyAttackChance <= 60) {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.maskedWoman.atk1.max_dmg - this.state.maskedWoman.atk1.min_dmg) * Math.random() + this.state.maskedWoman.atk1.min_dmg) * modifier);
                logEntry = `The Masked Woman used ${this.state.maskedWoman.atk1.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
                this.state.battleLog.push(logEntry);
                this.setState({
                    battleLog: this.state.battleLog
                })
                this.state.player.hp -= damageReceived;
                this.setState({
                    player: this.state.player
                })
            }
            else if (enemyAttackChance > 60 && enemyAttackChance <= 80) {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.maskedWoman.atk2.max_dmg - this.state.maskedWoman.atk2.min_dmg) * Math.random() + this.state.maskedWoman.atk2.min_dmg) * modifier);
                logEntry = `The Masked Woman used ${this.state.maskedWoman.atk2.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
                this.state.battleLog.push(logEntry);
                this.setState({
                    battleLog: this.state.battleLog
                })
                this.state.player.hp -= damageReceived;
                this.setState({
                    player: this.state.player
                })
            }
            else {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.maskedWoman.atk3.max_dmg - this.state.maskedWoman.atk3.min_dmg) * Math.random() + this.state.maskedWoman.atk3.min_dmg) * modifier);
                logEntry = `The Masked Woman used ${this.state.maskedWoman.atk3.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
                this.state.battleLog.push(logEntry);
                this.setState({
                    battleLog: this.state.battleLog
                })
                this.state.player.hp -= damageReceived;
                this.setState({
                    player: this.state.player
                })
            }


        }
        else if (event.target.name === 'atk2') {
            // roll critical hit chance (5%)
            let criticalChance = Math.ceil(99 * Math.random() + 1);
            if (criticalChance <= 5) {
                modifier = this.state.criticalModfier;
                criticalMessage = 'It was a critical hit!';
            }
            damageDealt = Math.ceil(((this.state.player.atk2.max_dmg - this.state.player.atk2.min_dmg) * Math.random() + this.state.player.atk2.min_dmg) * modifier);
            logEntry = `You used ${this.state.player.atk2.name}! ${criticalMessage} Dealt ${damageDealt} damage!`;
            this.state.battleLog.push(logEntry);
            this.setState({
                battleLog: this.state.battleLog
            })
            this.state.maskedWoman.hp -= damageDealt;
            this.setState({
                maskedWoman: this.state.maskedWoman
            })

            enemyAttackChance = Math.ceil(99 * Math.random() + 1);
            if (enemyAttackChance <= 60) {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.maskedWoman.atk1.max_dmg - this.state.maskedWoman.atk1.min_dmg) * Math.random() + this.state.maskedWoman.atk1.min_dmg) * modifier);
                logEntry = `The Masked Woman used ${this.state.maskedWoman.atk1.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
                this.state.battleLog.push(logEntry);
                this.setState({
                    battleLog: this.state.battleLog
                })
                this.state.player.hp -= damageReceived;
                this.setState({
                    player: this.state.player
                })
            }
            else if (enemyAttackChance > 60 && enemyAttackChance <= 80) {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.maskedWoman.atk2.max_dmg - this.state.maskedWoman.atk2.min_dmg) * Math.random() + this.state.maskedWoman.atk2.min_dmg) * modifier);
                logEntry = `The Masked Woman used ${this.state.maskedWoman.atk2.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
                this.state.battleLog.push(logEntry);
                this.setState({
                    battleLog: this.state.battleLog
                })
                this.state.player.hp -= damageReceived;
                this.setState({
                    player: this.state.player
                })
            }
            else {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.maskedWoman.atk3.max_dmg - this.state.maskedWoman.atk3.min_dmg) * Math.random() + this.state.maskedWoman.atk3.min_dmg) * modifier);
                logEntry = `The Masked Woman used ${this.state.maskedWoman.atk3.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
                this.state.battleLog.push(logEntry);
                this.setState({
                    battleLog: this.state.battleLog
                })
                this.state.player.hp -= damageReceived;
                this.setState({
                    player: this.state.player
                })
            }


        }
        else if (event.target.name === 'atk3') {
            // roll critical hit chance (5%)
            let criticalChance = Math.ceil(99 * Math.random() + 1);
            if (criticalChance <= 5) {
                modifier = this.state.criticalModfier;
                criticalMessage = 'It was a critical hit!';
            }
            damageDealt = Math.ceil(((this.state.player.atk3.max_dmg - this.state.player.atk3.min_dmg) * Math.random() + this.state.player.atk3.min_dmg) * modifier);
            logEntry = `You used ${this.state.player.atk3.name}! ${criticalMessage} Dealt ${damageDealt} damage!`;
            this.state.battleLog.push(logEntry);
            this.setState({
                battleLog: this.state.battleLog
            })
            this.state.maskedWoman.hp -= damageDealt;
            this.setState({
                maskedWoman: this.state.maskedWoman
            })

            enemyAttackChance = Math.ceil(99 * Math.random() + 1);
            if (enemyAttackChance <= 60) {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.maskedWoman.atk1.max_dmg - this.state.maskedWoman.atk1.min_dmg) * Math.random() + this.state.maskedWoman.atk1.min_dmg) * modifier);
                logEntry = `The Masked Woman used ${this.state.maskedWoman.atk1.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
                this.state.battleLog.push(logEntry);
                this.setState({
                    battleLog: this.state.battleLog
                })
                this.state.player.hp -= damageReceived;
                this.setState({
                    player: this.state.player
                })
            }
            else if (enemyAttackChance > 60 && enemyAttackChance <= 80) {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.maskedWoman.atk2.max_dmg - this.state.maskedWoman.atk2.min_dmg) * Math.random() + this.state.maskedWoman.atk2.min_dmg) * modifier);
                logEntry = `The Masked Woman used ${this.state.maskedWoman.atk2.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
                this.state.battleLog.push(logEntry);
                this.setState({
                    battleLog: this.state.battleLog
                })
                this.state.player.hp -= damageReceived;
                this.setState({
                    player: this.state.player
                })
            }
            else {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.maskedWoman.atk3.max_dmg - this.state.maskedWoman.atk3.min_dmg) * Math.random() + this.state.maskedWoman.atk3.min_dmg) * modifier);
                logEntry = `The Masked Woman used ${this.state.maskedWoman.atk3.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
                this.state.battleLog.push(logEntry);
                this.setState({
                    battleLog: this.state.battleLog
                })
                this.state.player.hp -= damageReceived;
                this.setState({
                    player: this.state.player
                })
            }


        }

    }

    render() {
        let nextPage;
        if (this.state.player.hp <= 0) {
            alert('You lose...');
            nextPage = <Page23 />;
        }
        else if (this.state.maskedWoman.hp <= 0) {
            alert('You win!!!');
            nextPage = <Page9 />
        }
        else {
            nextPage = <div className='battle-container'>

                <div className="battle-header">
                <h1>Platinum City - Residential Area</h1>
                </div>

                <div className="battle-description">
                    <p>As you get closer to the person, you realize that they are a woman in a mask. You callout to her, but she doesn't respond. She pulls out two revolvers and points them at you, seemingly challenging you to a duel. Beating her may help you progress further, but she seems to give off an extremely dangerous aura. Be cautious.</p>
                </div>

                <div className="player-hp">
                    <h4>You: {this.state.player.hp}/210</h4>
                </div>

                <div className="enemy-hp">
                    <h4>Masked Woman: {this.state.maskedWoman.hp}/200</h4>
                </div>

                <div className="battle-buttons">                    
                <button name='atk1' onClick={this.handleAttacks}>{this.state.player.atk1.name}</button>
                <button name='atk2' onClick={this.handleAttacks}>{this.state.player.atk2.name}</button>
                <button name='atk3' onClick={this.handleAttacks}>{this.state.player.atk3.name}</button>
                </div>

                <div className='battle-log'>
                    {this.state.battleLog.map(
                        (entry, index) => {
                            return (
                                <div key={index}>
                                    <p>{entry}</p>
                                    <br />
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        }
        return (
            <div>
                {nextPage}
            </div>
        );
    }
}

export default Page24;