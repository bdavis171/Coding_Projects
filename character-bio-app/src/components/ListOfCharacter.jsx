import React, {Component, Fragment} from 'react';

class ListOfCharacters extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <div>
                    <p>Name: {this.props.character.name}</p>
                    <p>Gender: {this.props.character.gender}</p>
                    <p>Date of Birth: {this.props.character.dob}</p>
                    <p>Age: {this.props.character.age}</p>
                    <p>Bio: {this.props.character.bio}</p>
                    <hr/>
                </div>
            </Fragment>
        )
    }
}

export default ListOfCharacters;