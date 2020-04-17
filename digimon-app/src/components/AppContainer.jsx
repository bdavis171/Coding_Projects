import React, { Component, Fragment } from 'react';



class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let digimons = require('./digimon-json');
        return (
            <Fragment>
                <h1>Digimon App</h1>
                <div className='container'>
                    {digimons.map(
                        (digimon, index) => {
                            return (
                                <div className='entry' key={index}>
                                    <p id='name'>{digimon.name}</p>
                                    <p id='generation'>Generation: {digimon.generation}</p>
                                    <p id='attribute'>Attribute: {digimon.attribute}</p>
                                    <p id='prior-form'>Prior Form: {digimon.priorForm}</p>
                                    <p id='next-form'>Next Form: {digimon.nextForm}</p>
                                    <p id='description'>{digimon.description}</p>
                                    <img src={digimon.img} alt={digimon.name} />
                                </div>
                            )
                        }
                    )}
                </div>
            </Fragment>
        );
    }
}

export default AppContainer;