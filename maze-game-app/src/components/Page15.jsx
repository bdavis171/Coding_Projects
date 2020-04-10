import React, { Component } from 'react';
import Page14 from './Page14';
import Page16 from './Page16';

class Page15 extends Component {
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

            reaper: {
                hp: 200,
                atk1: {
                    name: 'Death Scythe',
                    min_dmg: 10,
                    max_dmg: 14
                },
                atk2: {
                    name: 'Force Break',
                    min_dmg: 9,
                    max_dmg: 13
                },
                atk3: {
                    name: 'Sigil of Death',
                    min_dmg: 10,
                    max_dmg: 18
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
            this.state.reaper.hp -= damageDealt;
            this.setState({
                reaper: this.state.reaper
            })

            enemyAttackChance = Math.ceil(99 * Math.random() + 1);
            if (enemyAttackChance <= 60) {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.reaper.atk1.max_dmg - this.state.reaper.atk1.min_dmg) * Math.random() + this.state.reaper.atk1.min_dmg) * modifier);
                logEntry = `The Reaper used ${this.state.reaper.atk1.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
                damageReceived = Math.ceil(((this.state.reaper.atk2.max_dmg - this.state.reaper.atk2.min_dmg) * Math.random() + this.state.reaper.atk2.min_dmg) * modifier);
                logEntry = `The Reaper used ${this.state.reaper.atk2.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
                damageReceived = Math.ceil(((this.state.reaper.atk3.max_dmg - this.state.reaper.atk3.min_dmg) * Math.random() + this.state.reaper.atk3.min_dmg) * modifier);
                logEntry = `The Reaper used ${this.state.reaper.atk3.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
            this.state.reaper.hp -= damageDealt;
            this.setState({
                reaper: this.state.reaper
            })

            enemyAttackChance = Math.ceil(99 * Math.random() + 1);
            if (enemyAttackChance <= 60) {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.reaper.atk1.max_dmg - this.state.reaper.atk1.min_dmg) * Math.random() + this.state.reaper.atk1.min_dmg) * modifier);
                logEntry = `The Reaper used ${this.state.reaper.atk1.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
                damageReceived = Math.ceil(((this.state.reaper.atk2.max_dmg - this.state.reaper.atk2.min_dmg) * Math.random() + this.state.reaper.atk2.min_dmg) * modifier);
                logEntry = `The Reaper used ${this.state.reaper.atk2.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
                damageReceived = Math.ceil(((this.state.reaper.atk3.max_dmg - this.state.reaper.atk3.min_dmg) * Math.random() + this.state.reaper.atk3.min_dmg) * modifier);
                logEntry = `The Reaper used ${this.state.reaper.atk3.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
            this.state.reaper.hp -= damageDealt;
            this.setState({
                reaper: this.state.reaper
            })

            enemyAttackChance = Math.ceil(99 * Math.random() + 1);
            if (enemyAttackChance <= 60) {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.reaper.atk1.max_dmg - this.state.reaper.atk1.min_dmg) * Math.random() + this.state.reaper.atk1.min_dmg) * modifier);
                logEntry = `The Reaper used ${this.state.reaper.atk1.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
                damageReceived = Math.ceil(((this.state.reaper.atk2.max_dmg - this.state.reaper.atk2.min_dmg) * Math.random() + this.state.reaper.atk2.min_dmg) * modifier);
                logEntry = `The Reaper used ${this.state.reaper.atk2.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
                damageReceived = Math.ceil(((this.state.reaper.atk3.max_dmg - this.state.reaper.atk3.min_dmg) * Math.random() + this.state.reaper.atk3.min_dmg) * modifier);
                logEntry = `The Reaper used ${this.state.reaper.atk3.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
            nextPage = <Page14 />;
        }
        else if (this.state.reaper.hp <= 0) {
            alert('You win!!!');
            nextPage = <Page16 />
        }
        else {
            nextPage = <div className='battle-container'>

                <div className="battle-header">
                <h1>Dawn Break Forest - Field</h1>
                </div>

                <div className="battle-description">
                    <p>Night begins to creep on you. You feel a sudden chill down you spine. A blade is swong at you as you barely dodge it. A Reaper blocks your path. You should defeat it quickly, though you don't have a soul for it to claim.</p>
                </div>

                <div className="player-hp">
                    <h4>You: {this.state.player.hp}/210</h4>
                </div>

                <div className="enemy-hp">
                    <h4>Reaper: {this.state.reaper.hp}/200</h4>
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

export default Page15;