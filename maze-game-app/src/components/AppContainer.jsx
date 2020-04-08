import React, { Component } from 'react';
import Page9 from './Page9';


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                {/* <StartPage/> */}
               <Page9/>
                <footer>
                    <h3>Designed by Brandon Davis</h3>
                </footer>
            </div>
         );
    }
}
 
export default AppContainer;