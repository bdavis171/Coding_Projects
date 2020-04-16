import React, { Component } from 'react';


class Botamon extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let digimons = require('./digimon-json');
        return ( 
            <div>
                {digimons.map(
                    (digimon,index) => {
                        return (
                            <div key={index}>
                                <p>Name: {digimon.name}</p>
                                <p>Generation: {digimon.generation}</p>
                                <p>Attribute: {digimon.attribute}</p>
                                <p>Prior Form: {digimon.priorForm}</p>
                                <p>Next Form: {digimon.nextForm}</p>
                                <p>{digimon.description}</p>
                                <img src={digimon.img} alt=""/>
                            </div>
                        )
                    }
                )}
            </div>
         );
    }
}
 
export default Botamon;