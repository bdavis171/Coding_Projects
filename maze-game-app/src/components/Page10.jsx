import React, { Component } from 'react';
import Page9 from './Page9';
import Page11 from './Page11';


class Page10 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            goesSouth: false,
            goesEast: false
        }
    }

    handleDirection = (event) => {
        if (event.target.name === 'south') {
            this.setState({

                goesSouth: true,

                goesEast: false
            })
        }

        else if (event.target.name === 'east') {
            this.setState({

                goesSouth: false,

                goesEast: true
            })
        }
    }
    render() {
        let nextPage;

        if (this.state.goesSouth) {
            nextPage = <Page11 />;
        }

        else if (this.state.goesEast) {
            nextPage = <Page9 />
        }
        else {
            nextPage = <div className="basic-container">
                <div className="basic-header">
                    <h1>Ruins of Naught</h1>
                </div>

                <div className="basic-description">
                    
                </div>

                <div className="basic-buttons">
         
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

export default Page10;