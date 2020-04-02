import React, { Component } from 'react';
import Page2 from './Page2';
import Page4 from './Page4';
import Page17 from './Page17';


class Page3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goesNorth: false,
            goesSouth: false,
            goesEast: false
        }
    }

    // handle directions
    handleDirection = (event) => {
        if (event.target.name === 'north') {
            this.setState({
                goesNorth: true,
                goesSouth: false,
                goesEast: false
            })
        }
        else if (event.target.name === 'south') {
            this.setState({
                goesNorth: false,
                goesSouth: true,
                goesEast: false
            })
        }
        else if (event.target.name === 'east') {
            this.setState({
                goesNorth: false,
                goesSouth: false,
                goesEast: true
            })
        }
    }

    render() {
        let nextPage;

        if (this.state.goesNorth) {
            nextPage = <Page2 />;
        }
        else if (this.state.goesSouth) {
            nextPage = <Page4 />;
        }
        else if (this.state.goesEast) {
            nextPage = <Page17 />;
        }
        else {
            nextPage=<div className='basic-container'>
                <div className="basic-header">
                    <h1>Dawn Break Forest</h1>
                </div>

                <div className="basic-description">
                    <p>You look around the forest, realizing that the sun has begun to set.</p>
                </div>

                <div className="basic-container">
                    <button name='north' onClick={this.handleDirection}>Go North</button>
                    <button name='south' onClick={this.handleDirection}>Go South</button>
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

export default Page3;