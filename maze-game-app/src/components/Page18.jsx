import React, { Component } from 'react';
import Page14 from './Page14';


class Page18 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            goesNorth: false
         }
    }

    // handle directions
    handleDirection = (event) => {
        if (event.target.name === 'north'){
            this.setState({
                goesNorth: true
            })
        }
        
    }

    render() { 
        let nextPage;

        if (this.state.goesNorth){
            nextPage=<Page14/>;
        }
        else {
            nextPage=<div className="basic-container">
                <div className="basic-header">
                    <h1>Dawn Break Forest</h1>
                </div>

                <div className="basic-description">
                    <p>It's a dead end</p>
                </div>

                <div className="basic-buttons">
                    <button name='north'onClick={this.handleDirection}>Go North</button>
                  
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
 
export default Page18;