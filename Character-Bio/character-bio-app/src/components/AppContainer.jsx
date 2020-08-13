import React, { Component, Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import ListOfCharacters from './ListOfCharacter';
import CharacterForm from './CharacterForm';
import '../App.css';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterList: []
        }
    }

    //update the list of characters
    updateCharacterList = (newList) => {
        this.setState(
            {
                characterList: newList
            }
        )
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div id='header'>
                        <Header />
                    </div>

                    <div id="character-list">
                        <h2>List of Characters</h2>
                        {this.state.characterList.map(
                            (character, inx) => {
                                return (
                                    <ListOfCharacters character={character} key={inx} />
                                )
                            }
                        )}
                    </div>

                    <div id='character-form'>
                        <CharacterForm updateCharacterList={this.updateCharacterList} />
                    </div>
                    <div id='footer'>
                        <Footer />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AppContainer;