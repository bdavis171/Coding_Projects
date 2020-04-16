import React, { Component } from 'react';
import Botamon from './Botamon';


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Botamon/>
            </div>
         );
    }
}
 
export default AppContainer;