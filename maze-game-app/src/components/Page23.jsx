import React, { Component } from 'react';
import Page21 from './Page21';
import Page8 from './Page8';
import Page24 from './Page24';

class Page5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goesNorth: false,
            goesSouth: false,
            goesWest: false
        }
    }

    handleDirection = (event) => {
        if (event.target.name === 'north') {
            this.setState({
                goesNorth: true,
                goesSouth: false,
                goesWest: false
            })
        }
        else if (event.target.name === 'south') {
            this.setState({
                goesNorth: false,
                goesSouth: true,
                goesWest: false
            })
        }
        else if (event.target.name === 'west') {
            this.setState({
                goesNorth: false,
                goesSouth: false,
                goesWest: true
            })
        }
    }

    render() {
        let nextPage;

        if (this.state.goesNorth) {
            nextPage = <Page24 />;
        }
        else if (this.state.goesSouth) {
            nextPage = <Page8 />;
        }
        else if (this.state.goesWest) {
            nextPage = <Page21 />;
        }
        else {
            nextPage = <div className="basic-container">
                <div className="basic-header">
                    <h1>Platinum City - Residential Area</h1>
                </div>

                <div className="basic-description">
                    <p>You look around and admire the housing here. Most of them are two-floor houses. You look down the street and see a person looking in your direction. Should you walk up to them?</p>
                </div>

                <div className="basic-buttons">
                    <button name='north' onClick={this.handleDirection}>Go North</button>
                    <button name='south' onClick={this.handleDirection}>Go South</button>
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

export default Page5;