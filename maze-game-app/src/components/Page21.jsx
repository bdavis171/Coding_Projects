import React, { Component } from 'react';
import Page23 from './Page23';
import Page20 from './Page20';
import Page22 from './Page22';


class Page21 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goesNorth: false,
            
            goesEast: false,
            goesWest: false
        }
    }

    handleDirection = (event) => {
        if (event.target.name === 'north') {
            this.setState({
                goesNorth: true,
                
                goesWest: false,
                goesEast: false
            })
        }
      
        else if (event.target.name === 'west') {
            this.setState({
                goesNorth: false,
                
                goesWest: true,
                goesEast: false
            })
        }
        else if (event.target.name === 'east') {
            this.setState({
                goesNorth: false,
                
                goesWest: false,
                goesEast: true
            })
        }
    }
    render() {
        let nextPage;

        if (this.state.goesNorth) {
            nextPage = <Page22 />;
        }
        
        else if (this.state.goesWest) {
            nextPage = <Page20 />;
        }
        else if (this.state.goesEast){
            nextPage = <Page23/>
        }
        else {
            nextPage = <div className="basic-container">
                <div className="basic-header">
                    <h1>Platinum City - Central Street</h1>
                </div>

                <div className="basic-description">
                    <p></p>
                </div>

                <div className="basic-buttons">
                    <button name='north' onClick={this.handleDirection}>Go North</button>
                    
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

export default Page21;