import React, { Component } from 'react';
import Page3 from './Page3';


class Page17 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            goesWest: false
         }
    }

    // handle directions
    handleDirection = (event) => {
        if (event.target.name === 'west'){
            this.setState({
                goesWest: true
            })
        }
        
    }

    render() { 
        let nextPage;

        if (this.state.goesWest){
            nextPage=<Page3/>;
        }
        else {
            nextPage=<div className="basic-container">
                <div className="basic-header">
                    <h1>Ruins of Naught</h1>
                </div>

                <div className="basic-description">
                    <p>It's a dead end</p>
                </div>

                <div className="basic-buttons">
                    <button name='west'onClick={this.handleDirection}>Go West</button>
                  
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
 
export default Page17;