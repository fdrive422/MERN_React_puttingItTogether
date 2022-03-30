import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageUp: this.props.age,
        };
    }

    render() {
        const { firstName, lastName, hairColor } = this.props;

        return (
            <div >
                <h2>  {lastName}, {firstName} </h2>
                <p>Age: {this.state.ageUp}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={() => this.setState({ ageUp: this.state.ageUp + 1 })}>
                    Birthday Button for {firstName} {lastName}
                </button>
            </div>
        );
    }
}

export default PersonCard;