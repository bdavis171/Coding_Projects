import React, { Component } from 'react';

class Page7 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            goesNorth: false,
            goesSouth: false,
            goesEast: false,
            goesWest: false
         }
    }

    handleDirection = (event) => {
        if (event.target.name === 'north') {
            this.setState({
                goesNorth: true,
                goesSouth: false,
                goesWest: false
            })
        }
        else if (event.target.name === 'south') {
            this.setState({
                goesNorth: false,
                goesSouth: true,
                goesWest: false
            })
        }
        else if (event.target.name === 'west') {
            this.setState({
                goesNorth: false,
                goesSouth: false,
                goesWest: true
            })
        }
        else if (event.target.name === 'east'){
            
        }
    }
    render() { 
        return ( 
            <div>
                <h1>Platinum City - Forest Entrance</h1>
            </div>
         );
    }
}
 
export default Page7;