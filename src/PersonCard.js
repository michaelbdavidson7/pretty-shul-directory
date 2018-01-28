import React from 'react';
import placeholderImg from './placeholder.svg';

export default class PersonCard extends React.Component {
    render() {
        let person = this.props.person;
       return <div className="card" style={{ width: "20rem" }}>
            <img className="card-img-top" src={placeholderImg} style={{ maxheight: 286, maxwidth: 180 }} alt="Member" />
            <div className="card-body">
                <h4 className="card-title">{person.name}</h4>
                <a href="/" className="btn btn-secondary">See more</a>
            </div>
            <div className="card-footer text-muted">Member since: {person.joinYear}</div>
        </div>
    }
}