import React, { Component } from 'react';
import Page4 from './Page4';
import Page6 from './Page6';
import Page19 from './Page19';

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
            nextPage = <Page19 />;
        }
        else if (this.state.goesSouth) {
            nextPage = <Page6 />;
        }
        else if (this.state.goesWest) {
            nextPage = <Page4 />;
        }
        else {
            nextPage = <div className="basic-container">
                <div className="basic-header">
                    <h1>Dawn Break Forest - Deep Forest</h1>
                </div>

                <div className="basic-description">
                    <p>As night begins to set in, you find yourself thinking about the mysterious figure. You wonder if you'll be able to find them anywhere.</p>
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