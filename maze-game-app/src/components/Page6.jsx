import React, { Component } from 'react';
import Page5 from './Page5';
import Page7 from './Page7';

class Page6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goesNorth: false,
            goesEast: false
        }
    }

    handleDirection = (event) => {
        if (event.target.name === 'north') {
            this.setState({
                goesNorth: true,
                goesEast: false
            })
        }
        else if (event.target.name === 'east') {
            this.setState({
                goesNorth: false,
                goesEast: true
            })
        }
    }

    render() {
        let nextPage;

        if (this.state.goesNorth){
            nextPage=<Page5/>
        }
        else if (this.state.goesEast){
            nextPage=<Page7/>;
        }
        else{
            nextPage=<div className="basic-container">
                <div className="basic-header">
                    <h1>Dawn Break Forest - Deep Forest</h1>
                </div>

                <div className="basic-description">
                    <p>You see lights in the direction of the tall buildings.</p>
                </div>
            </div>
        }
        return (
            <div>
                <h1>Dawn Break Forest - Deep Forest</h1>
            </div>
        );
    }
}

export default Page6;