import React, {Component, Fragment} from 'react';
import '../App.css';

class CharacterForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            gender:'',
            age:0,
            dob:'',
            bio:'',
            listOfCharacters: []
        }
    }

    //handle changes to fields
    handleChange = (event) => {
        if (event.target.name === 'name') {
            this.setState({name: event.target.value});
        } 
        else if (event.target.name === 'gender') {
            this.setState({gender: event.target.value});
        } 
        else if (event.target.name === 'age') {
            this.setState({age: event.target.value});
        } 
        else if (event.target.name === 'dob') {
            this.setState({dob: event.target.value});
        } 
        else if (event.target.name === 'bio') {
            this.setState({bio: event.target.value});
        }
    }

    //handle submission
    handleSubmission = (event) => {
        let character = {name: this.state.name, gender:this.state.gender, age: this.state.age, dob: this.state.dob, bio:this.state.bio}
        this.state.listOfCharacters.push(character);
        this.setState({listOfCharacters: this.state.listOfCharacters});
        this.props.updateCharacterList(this.state.listOfCharacters);
        this.setState({
            name:'',
            gender:'',
            age:0,
            dob:'',
            bio:''
        })
        event.preventDefault();
    }

    render(){
        return(
            <Fragment>
                <form action="" >
                    <fieldset className='gold-background'>
                        <legend><strong>Character Form</strong></legend>

                        <div className="formGroup">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' id='name' onChange={this.handleChange} value={this.state.name}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="gender">Gender:</label>
                            <select name="gender" id="gender" onChange={this.handleChange}>
                                <option value={this.state.gender}>--</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="age">Age:</label>
                            <input type="number" name='age' id='age' onChange={this.handleChange} value={this.state.age}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="dob">Date of Birth:</label>
                            <input type="date" name='dob' id='dob' onChange={this.handleChange} value={this.state.dob}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="bio">Bio:</label><br/>
                            <textarea name="bio" id="bio" onChange={this.handleChange} value={this.state.bio} cols="30" rows="10"></textarea>
                        </div>

                        <div className="formGroup">
                            <button onClick={this.handleSubmission}>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </Fragment>
        )
    }
}

export default CharacterForm;