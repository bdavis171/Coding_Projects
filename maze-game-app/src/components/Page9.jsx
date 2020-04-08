import React, { Component } from 'react';
import Page10 from './Page10';
import Page25 from './Page25';

class Page9 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            goesEast: false,
            goesWest: false
        }
    }

    handleDirection = (event) => {
        if (event.target.name === 'west') {
            this.setState({

                goesWest: true,
                goesEast: false
            })
        }
        else if (event.target.name === 'east') {
            this.setState({

                goesWest: false,
                goesEast: true
            })
        }
    }
    render() {
        let nextPage;

        if (this.state.goesWest) {
            nextPage = <Page10 />;
        }
        else if (this.state.goesEast) {
            nextPage = <Page25 />
        }
        else {
            nextPage = <div className="basic-container">
                <div className="basic-header">
                    <h1>Ruins of Naught - Entrance</h1>
                </div>

                <div className="basic-description">
                    <p>You've arrived at the ruins. </p>
                </div>

                <div className="basic-buttons">
                 
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

export default Page9;