import React, { Component } from 'react';

import Page11 from './Page11';
import Page13 from './Page13';


class Page12 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            goesSouth: false,
            
            goesWest: false
        }
    }

    handleDirection = (event) => {
       if (event.target.name === 'south') {
            this.setState({
               
                goesSouth: true,
                goesWest: false
            })
        }
        else if (event.target.name === 'west') {
            this.setState({
                
                goesSouth: false,
                goesWest: true
            })
        }
       
    }
    render() {
        let nextPage;

        if (this.state.goesSouth) {
            nextPage = <Page13 />;
        }
        else if (this.state.goesWest) {
            nextPage = <Page11 />;
        }

        else {
            nextPage = <div className="basic-container">
                <div className="basic-header">
                    <h1>Ruins of Naught</h1>
                </div>

                <div className="basic-description">
                    <p>You feel even closer to your soul. You calm your nerves as you prepare to face your enemy. It's time to get back what's yours.</p>
                </div>

                <div className="basic-buttons">

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

export default Page12;