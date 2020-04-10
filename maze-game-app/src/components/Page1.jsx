import React, { Component } from 'react';
import Page2 from './Page2';
import Page14 from './Page14';
import './forest-style.css';


class Page1 extends Component {
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
            nextPage=<Page2/>;
        }
        else if (this.state.goesSouth) {
            nextPage=<Page14/>;
        }
        else {
            nextPage=<div className='basic-container'>
                <div className="basic-header">
                    <h1>Dawn Break Forest - Entrance</h1>
                </div>

                <div className="basic-description">
                    <p>You enter a mysterious forest. You see a sword lodged into the ground near by. You pull it out and feel a surge of energy flow throughout your body. This sword should be useful in getting your soul back.</p>
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
 
export default Page1;