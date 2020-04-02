import React, { Component } from 'react';
import Page3 from './Page3';
import Page5 from './Page5';

class Page4 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            goesNorth: false,
            goesEast: false
         }
    }

    // handle directions
    handleDirection = (event) => {
        if (event.target.name === 'north'){
            this.setState({
                goesNorth: true,
                goesEast: false
            })
        }
        else if (event.target.name === 'east'){
            this.setState({
                goesNorth: false,
                goesEast: true
            })
        }
    }

    render() { 
        let nextPage;

        if (this.state.goesNorth){
            nextPage=<Page3/>;
        }
        else if (this.state.goesEast){
            nextPage=<Page5/>;
        }
        else {
            nextPage=<div className="basic-container">
                <div className="basic-header">
                    <h1>Dawn Break Forest - Deep Forest</h1>
                </div>

                <div className="basic-description">
                    <p>You've gone deeper into the forest. You see what appears to be tall buildings to the east. You wonder if there is a city nearby.</p>
                </div>

                <div className="basic-buttons">
                    <button name='north'onClick={this.handleDirection}>Go North</button>
                    <button name='east' onClick={this.handleDirection}>Go East</button>
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
 
export default Page4;