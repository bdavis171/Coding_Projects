import React, { Component } from 'react';
import Page5 from './Page5';
import Page7 from './Page7';


class Page19 extends Component {
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

            greatSunsetTree: {
                hp: 200,
                atk1: {
                    name: 'Nature Blitz',
                    min_dmg: 6,
                    max_dmg: 14
                },
                atk2: {
                    name: 'Dawn Break Roots',
                    min_dmg: 8,
                    max_dmg: 13
                },
                atk3: {
                    name: 'Frenzied Forest',
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
            this.state.greatSunsetTree.hp -= damageDealt;
            this.setState({
                greatSunsetTree: this.state.greatSunsetTree
            })

            enemyAttackChance = Math.ceil(99 * Math.random() + 1);
            if (enemyAttackChance <= 60) {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.greatSunsetTree.atk1.max_dmg - this.state.greatSunsetTree.atk1.min_dmg) * Math.random() + this.state.greatSunsetTree.atk1.min_dmg) * modifier);
                logEntry = `The Great Sunset Forest used ${this.state.greatSunsetTree.atk1.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
                damageReceived = Math.ceil(((this.state.greatSunsetTree.atk2.max_dmg - this.state.greatSunsetTree.atk2.min_dmg) * Math.random() + this.state.greatSunsetTree.atk2.min_dmg) * modifier);
                logEntry = `The Great Sunset Forest used ${this.state.greatSunsetTree.atk2.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
                damageReceived = Math.ceil(((this.state.greatSunsetTree.atk3.max_dmg - this.state.greatSunsetTree.atk3.min_dmg) * Math.random() + this.state.greatSunsetTree.atk3.min_dmg) * modifier);
                logEntry = `The Great Sunset Forest used ${this.state.greatSunsetTree.atk3.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
            this.state.greatSunsetTree.hp -= damageDealt;
            this.setState({
                greatSunsetTree: this.state.greatSunsetTree
            })

            enemyAttackChance = Math.ceil(99 * Math.random() + 1);
            if (enemyAttackChance <= 60) {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.greatSunsetTree.atk1.max_dmg - this.state.greatSunsetTree.atk1.min_dmg) * Math.random() + this.state.greatSunsetTree.atk1.min_dmg) * modifier);
                logEntry = `The Great Sunset Forest used ${this.state.greatSunsetTree.atk1.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
                damageReceived = Math.ceil(((this.state.greatSunsetTree.atk2.max_dmg - this.state.greatSunsetTree.atk2.min_dmg) * Math.random() + this.state.greatSunsetTree.atk2.min_dmg) * modifier);
                logEntry = `The Great Sunset Forest used ${this.state.greatSunsetTree.atk2.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
                damageReceived = Math.ceil(((this.state.greatSunsetTree.atk3.max_dmg - this.state.greatSunsetTree.atk3.min_dmg) * Math.random() + this.state.greatSunsetTree.atk3.min_dmg) * modifier);
                logEntry = `The Great Sunset Forest used ${this.state.greatSunsetTree.atk3.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
            this.state.greatSunsetTree.hp -= damageDealt;
            this.setState({
                greatSunsetTree: this.state.greatSunsetTree
            })

            enemyAttackChance = Math.ceil(99 * Math.random() + 1);
            if (enemyAttackChance <= 60) {
                let criticalChance = Math.ceil(99 * Math.random() + 1);
                if (criticalChance <= 5) {
                    modifier = this.state.criticalModfier;
                    criticalMessage = 'It was a critical hit!';
                }
                damageReceived = Math.ceil(((this.state.greatSunsetTree.atk1.max_dmg - this.state.greatSunsetTree.atk1.min_dmg) * Math.random() + this.state.greatSunsetTree.atk1.min_dmg) * modifier);
                logEntry = `The Great Sunset Forest used ${this.state.greatSunsetTree.atk1.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
                damageReceived = Math.ceil(((this.state.greatSunsetTree.atk2.max_dmg - this.state.greatSunsetTree.atk2.min_dmg) * Math.random() + this.state.greatSunsetTree.atk2.min_dmg) * modifier);
                logEntry = `The Great Sunset Forest used ${this.state.greatSunsetTree.atk2.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
                damageReceived = Math.ceil(((this.state.greatSunsetTree.atk3.max_dmg - this.state.greatSunsetTree.atk3.min_dmg) * Math.random() + this.state.greatSunsetTree.atk3.min_dmg) * modifier);
                logEntry = `The Great Sunset Forest used ${this.state.greatSunsetTree.atk3.name}! ${criticalMessage} Dealt ${damageReceived} damage!`;
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
            nextPage = <Page5 />;
        }
        else if (this.state.greatSunsetTree.hp <= 0) {
            alert('You win!!!');
            nextPage = <Page7 />
        }
        else {
            nextPage = <div className='battle-container'>

                <div className="battle-header">
                <h1>Dawn Break Forest - Deep Forest</h1>
                </div>

                <div className="battle-description">
                    <p>As you explore the forest, you come across a giant tree. The tree begins to speak to you, claiming that it knows why you have ventured into the labyrinth. The tree agrees to help you if you can defeat it.</p>
                </div>

                <div className="player-hp">
                    <h4>You: {this.state.player.hp}/210</h4>
                </div>

                <div className="enemy-hp">
                    <h4>The Great Sunset Tree: {this.state.greatSunsetTree.hp}/200</h4>
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

export default Page19;