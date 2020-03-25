import React, { Component, Fragment } from 'react';
import '../App.css';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const keybladeData = require('../keybladeData.js');
        console.log(keybladeData);
        return (
            <Fragment>
                <h1>Keyblades App</h1>
                {keybladeData.map(
                    (keyblade, inx) => {
                        return (
                            <div className='container' key={inx}>
                                <div id="keyblade-img">
                                    <img src={keyblade.img} alt={keyblade.name} width="200px" />
                                </div>

                                <div id="keyblade-info">
                                    <p>{keyblade.name}</p>
                                    <p>Str: {keyblade.stats.str}, Mag: {keyblade.stats.mag}</p>
                                    <p>Description: {keyblade.description}</p>
                                </div>
                                <br />
                            </div>
                        )
                    }
                )}
                <h3>Designed By Brandon Davis</h3>
            </Fragment>
        );
    }
}

export default AppContainer;