import React, { Component } from 'react';
import Page7 from './Page7';
import Page8 from './Page8';

class Page16 extends Component {
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
            nextPage=<Page7/>;
        }
        else if (this.state.goesEast){
            nextPage=<Page8/>;
        }
        else {
            nextPage=<div className="basic-container">
                <div className="basic-header">
                    <h1>Platinum City - Field Entrance</h1>
                </div>

                <div className="basic-description">
                    <p>You've entered a very busy city.  </p>
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
 
export default Page16;