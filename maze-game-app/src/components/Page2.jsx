import React, { Component } from 'react';
import Page1 from './Page1';
import Page3 from './Page3';


class Page2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            goesWest: false,
            goesSouth: false
         }
    }

    // handle direction buttons
    handleDirection = (event) => {
        if (event.target.name === 'west'){
            this.setState({
                goesWest: true,
                goesSouth: false
            })
        }
        else if (event.target.name === 'south'){
            this.setState({
                goesWest: false,
                goesSouth: true
            })
        }
    }

    render() { 
        let nextPage;
        
        if(this.state.goesWest){
            nextPage=<Page1/>;
        }
        else if(this.state.goesSouth){
            nextPage=<Page3/>;
        }
        else{
            nextPage=<div className='basic-container'>
                <div id="basic-header">
                    <h1>Dawn Break Forest</h1>
                </div>

                <div id="basic-description">
                    <p>You hear the wind blowing through the trees</p>
                </div>

                <div className="basic-buttons">
                    <button name='west' onClick={this.handleDirection}>Go West</button>
                    <button name='south' onClick={this.handleDirection}>Go South</button>
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
 
export default Page2;