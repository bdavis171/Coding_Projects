import React, { Component } from 'react';
import Page21 from './Page21';
import Page7 from './Page7';



class Page20 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            goesEast: false,
            goesSouth: false
         }
    }

    // handle direction buttons
    handleDirection = (event) => {
        if (event.target.name === 'east'){
            this.setState({
                goesEast: true,
                goesSouth: false
            })
        }
        else if(event.target.name === 'south') {
            this.setState({
                goesEast: false,
                goesSouth: true
            })
        }
    }

    render() { 
        let nextPage;

        if (this.state.goesEast) {
            nextPage=<Page21/>;
        }
        else if (this.state.goesSouth) {
            nextPage=<Page7/>;
        }
        else {
            nextPage=<div className='basic-container'>
                <div className="basic-header">
                    <h1>Platinum City - Central City</h1>
                </div>

                <div className="basic-description">
                    <p>It seems you've made it to Central Street. There are a lot of people here.</p>
                </div>

                <div className="basic-buttons">
                    <button name='east' onClick={this.handleDirection}>Go East</button>
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
 
export default Page20;