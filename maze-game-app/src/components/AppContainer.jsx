import React, { Component } from 'react';
import StartPage from './StartPage';



class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <StartPage/>
                
               
                <footer>
                    <h3>Designed by Brandon Davis</h3>
                </footer>
            </div>
         );
    }
}
 
export default AppContainer;