import React, { Component } from 'react';
import Page21 from './Page21';


class Page22 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            goesSouth: false
         }
    }

    // handle directions
    handleDirection = (event) => {
        if (event.target.name === 'south'){
            this.setState({
                goesSouth: true
            })
        }
        
    }

    render() { 
        let nextPage;

        if (this.state.goesSouth){
            nextPage=<Page21/>;
        }
        else {
            nextPage=<div className="basic-container">
                <div className="basic-header">
                    <h1>Platinum City - Alley</h1>
                </div>

                <div className="basic-description">
                    <p>It's a dead end</p>
                </div>

                <div className="basic-buttons">
                    <button name='south'onClick={this.handleDirection}>Go South</button>
                  
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
 
export default Page22;