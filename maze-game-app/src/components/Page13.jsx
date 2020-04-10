import React, { Component } from 'react';
import Page12 from './Page12';
import EndPage from './EndPage';

class Page13 extends Component {
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

            mysteriousFigure: {
                hp: 200,
                atk1: {
                    name: 'Ether Blades',
                    min_dmg: 7,
                    max_dmg: 10
                },
                atk2: {
                    name: 'Soul Surge',
                    min_dmg: 9,
                    max_dmg: 16
                },
                atk3: {
                    name: 'Divine Sword: Null',
                    min_dmg: 7,
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
            this.state.mysteriousFigure.hp -= damageDealt;
            this.setState({
                mysteriousFigure: this.state.mysteriousFigure
            })

            enemyAttackChance = Math.ceil(99 * Math.random() + 1);
            if (enemyAttackChance <= 60) {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.mysteriousFigure.atk1.max_dmg - this.state.mysteriousFigure.atk1.min_dmg) * Math.random() + this.state.mysteriousFigure.atk1.min_dmg) * modifier);
                logEntry = `The Mysterious Figure used ${this.state.mysteriousFigure.atk1.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
                this.state.battleLog.push(logEntry);
                this.setState({
                    battleLog: this.state.battleLog
                })
                this.state.player.hp -= damageReceived;
                this.setState({
                    player: this.state.player
                })
            }
            else if (enemyAttackChance > 60 && enemyAttackChance <= 130) {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.mysteriousFigure.atk2.max_dmg - this.state.mysteriousFigure.atk2.min_dmg) * Math.random() + this.state.mysteriousFigure.atk2.min_dmg) * modifier);
                logEntry = `The Mysterious Figure used ${this.state.mysteriousFigure.atk2.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
                damageReceived = Math.ceil(((this.state.mysteriousFigure.atk3.max_dmg - this.state.mysteriousFigure.atk3.min_dmg) * Math.random() + this.state.mysteriousFigure.atk3.min_dmg) * modifier);
                logEntry = `The Mysterious Figure used ${this.state.mysteriousFigure.atk3.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
            this.state.mysteriousFigure.hp -= damageDealt;
            this.setState({
                mysteriousFigure: this.state.mysteriousFigure
            })

            enemyAttackChance = Math.ceil(99 * Math.random() + 1);
            if (enemyAttackChance <= 60) {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.mysteriousFigure.atk1.max_dmg - this.state.mysteriousFigure.atk1.min_dmg) * Math.random() + this.state.mysteriousFigure.atk1.min_dmg) * modifier);
                logEntry = `The Mysterious Figure used ${this.state.mysteriousFigure.atk1.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
                this.state.battleLog.push(logEntry);
                this.setState({
                    battleLog: this.state.battleLog
                })
                this.state.player.hp -= damageReceived;
                this.setState({
                    player: this.state.player
                })
            }
            else if (enemyAttackChance > 60 && enemyAttackChance <= 130) {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.mysteriousFigure.atk2.max_dmg - this.state.mysteriousFigure.atk2.min_dmg) * Math.random() + this.state.mysteriousFigure.atk2.min_dmg) * modifier);
                logEntry = `The Mysterious Figure used ${this.state.mysteriousFigure.atk2.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
                damageReceived = Math.ceil(((this.state.mysteriousFigure.atk3.max_dmg - this.state.mysteriousFigure.atk3.min_dmg) * Math.random() + this.state.mysteriousFigure.atk3.min_dmg) * modifier);
                logEntry = `The Mysterious Figure used ${this.state.mysteriousFigure.atk3.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
            this.state.mysteriousFigure.hp -= damageDealt;
            this.setState({
                mysteriousFigure: this.state.mysteriousFigure
            })

            enemyAttackChance = Math.ceil(99 * Math.random() + 1);
            if (enemyAttackChance <= 60) {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.mysteriousFigure.atk1.max_dmg - this.state.mysteriousFigure.atk1.min_dmg) * Math.random() + this.state.mysteriousFigure.atk1.min_dmg) * modifier);
                logEntry = `The Mysterious Figure used ${this.state.mysteriousFigure.atk1.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
                this.state.battleLog.push(logEntry);
                this.setState({
                    battleLog: this.state.battleLog
                })
                this.state.player.hp -= damageReceived;
                this.setState({
                    player: this.state.player
                })
            }
            else if (enemyAttackChance > 60 && enemyAttackChance <= 130) {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.mysteriousFigure.atk2.max_dmg - this.state.mysteriousFigure.atk2.min_dmg) * Math.random() + this.state.mysteriousFigure.atk2.min_dmg) * modifier);
                logEntry = `The Mysterious Figure used ${this.state.mysteriousFigure.atk2.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
                damageReceived = Math.ceil(((this.state.mysteriousFigure.atk3.max_dmg - this.state.mysteriousFigure.atk3.min_dmg) * Math.random() + this.state.mysteriousFigure.atk3.min_dmg) * modifier);
                logEntry = `The Mysterious Figure used ${this.state.mysteriousFigure.atk3.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
            nextPage = <Page12 />;
        }
        else if (this.state.mysteriousFigure.hp <= 0) {
            alert('You win!!!');
            nextPage = <EndPage />
        }
        else {
            nextPage = <div className='battle-container'>

                <div className="battle-header">
                <h1>Ruins of Naught - Void Garden</h1>
                </div>

                <div className="battle-description">
                    <p>The mysterious figure appears before you. They congradulate you on making it through the labyrinth to them, but claim that you will not defeat them. Show them what you're made of!</p>
                </div>

                <div className="player-hp">
                    <h4>You: {this.state.player.hp}/210</h4>
                </div>

                <div className="enemy-hp">
                    <h4>Mysterious Figure: {this.state.mysteriousFigure.hp}/200</h4>
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

export default Page13;