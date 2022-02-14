import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    birthday = () => {
        this.setState({ age: this.state.age + 1 });
    }
    render() {
        return (
            <div className="PersonCard">
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={() => this.birthday()}>Birthday Button {this.props.firstName} {this.props.lastName}</button>
            </div>
        )
    }
}

export default PersonCard;