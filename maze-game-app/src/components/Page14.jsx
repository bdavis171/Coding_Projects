import React, { Component } from 'react';
import Page1 from './Page1';
import Page15 from './Page15';
import Page18 from './Page18';


class Page14 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goesNorth: false,
            goesEast: false,
            goesSouth: false
        }
    }

    handleDirection = (event) => {
        if (event.target.name === 'north') {
            this.setState({
                goesNorth: true,
                goesEast: false,
                goesSouth: false
            })
        }
        else if (event.target.name === 'east') {
            this.setState({
                goesNorth: false,
                goesEast: true,
                goesSouth: false
            })
        }
        else if (event.target.name === 'south') {
            this.setState({
                goesNorth: false,
                goesEast: false,
                goesSouth: true
            })
        }
    }

    render() {
        let nextPage;

        if (this.state.goesNorth) {
            nextPage = <Page1 />
        }
        else if (this.state.goesEast) {
            nextPage = <Page15 />;
        }
        else if (this.state.goesSouth) {
            nextPage = <Page18 />;
        }
        else {
            nextPage = <div className="basic-container">
                <div className="basic-header">
                    <h1>Dawn Break Forest</h1>
                </div>

                <div className="basic-description">
                    <p>You see what appears to be an open field to the east.</p>
                </div>

                <div className="basic-buttons">
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
 
export default Page14;