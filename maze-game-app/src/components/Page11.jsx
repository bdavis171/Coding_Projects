import React, { Component } from 'react';
import Page12 from './Page12';
import Page26 from './Page26';
import Page10 from './Page10';

class Page11 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goesNorth: false,
            goesSouth: false,
            goesEast: false
        }
    }

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
            nextPage = <Page10 />;
        }
        else if (this.state.goesSouth) {
            nextPage = <Page26 />;
        }
        
        else if (this.state.goesEast){
            nextPage = <Page12/>
        }
        else {
            nextPage = <div className="basic-container">
                <div className="basic-header">
                    <h1>Ruins of Naught</h1>
                </div>

                <div className="basic-description">
                    <p>As you go deeper into the ruins, you begin to sense something familiar. You're soul must be near by, but that also means that the mysterious figure is nearby.</p>
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

export default Page11;