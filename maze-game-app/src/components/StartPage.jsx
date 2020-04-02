import React, { Component } from 'react';
import Page1 from './Page1';

class StartPage extends Component {
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
            <div id="start-header">
                <h1>Labyrinth of Naught</h1>
            </div>

            <div id="start-description">
                <p>A mysterious figure appears before you one day. You ask who they are, but they responed by taking your soul and transporting you to a mysterious labyrinth. You must navigate your way through the maze and reclaim what's yours. But be careful, who knows what lurks in there...</p>
            </div>

            <div id="start-button">
                <button onClick={this.handleStart}>Let the Game Begin</button>
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
 
export default StartPage;