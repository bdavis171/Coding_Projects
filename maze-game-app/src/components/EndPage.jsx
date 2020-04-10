import React, { Component } from 'react';
import Page1 from './Page1';

class EndPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            doesStart: false
         }
    }

    // handle start button
    handleStart = (event) => {
        this.setState({
            doesStart: true
        });
    }

    // display page
    render() { 
        let beginGame;
        if (this.state.doesStart) {
            beginGame=<Page1/>;
        } 
        else  {
            beginGame= <div id='start-container'>
            <div id="start-end-header">
                <h1>Congradulations!!!</h1>
            </div>

            <div id="start-description">
                <p>You sucessfully made it out of the maze and defeated the mysterious figure. But you wonder who they were and why they wanted your soul in the first place...</p>
            </div>

            <div id="start-button">
                <button onClick={this.handleStart}>Play Again?</button>
            </div>
        </div>
        }

        return ( 
           <div>
               {beginGame}
           </div>
         );
    }
}
export default EndPage;