import React, { Component } from 'react';
import Page8 from './Page8';
import Page6 from './Page6';
import Page16 from './Page16';
import Page20 from './Page20';
import './city-style.css';

class Page7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goesNorth: false,
            goesSouth: false,
            goesEast: false,
            goesWest: false
        }
    }

    handleDirection = (event) => {
        if (event.target.name === 'north') {
            this.setState({
                goesNorth: true,
                goesSouth: false,
                goesWest: false,
                goesEast: false
            })
        }
        else if (event.target.name === 'south') {
            this.setState({
                goesNorth: false,
                goesSouth: true,
                goesWest: false,
                goesEast: false
            })
        }
        else if (event.target.name === 'west') {
            this.setState({
                goesNorth: false,
                goesSouth: false,
                goesWest: true,
                goesEast: false
            })
        }
        else if (event.target.name === 'east') {
            this.setState({
                goesNorth: false,
                goesSouth: false,
                goesWest: false,
                goesEast: true
            })
        }
    }
    render() {
        let nextPage;

        if (this.state.goesNorth) {
            nextPage = <Page20 />;
        }
        else if (this.state.goesSouth) {
            nextPage = <Page16 />;
        }
        else if (this.state.goesWest) {
            nextPage = <Page6 />;
        }
        else if (this.state.goesEast){
            nextPage = <Page8/>
        }
        else {
            nextPage = <div className="basic-container">
                <div className="basic-header">
                    <h1>Platinum City - Forest Entrance</h1>
                </div>

                <div className="basic-description">
                    <p>You've arrived at a busy city with lights everywhere. A lady tells you about some ruins to the south, but warns you of a guardian protecting the entrance. You wonder if you'll find the mysterious figure there.</p>
                </div>

                <div className="basic-buttons">
                    <button name='north' onClick={this.handleDirection}>Go North</button>
                    <button name='south' onClick={this.handleDirection}>Go South</button>
                    <button name='east' onClick={this.handleDirection}>Go East</button>
                    <button name='west' onClick={this.handleDirection}>Go West</button>
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

export default Page7;