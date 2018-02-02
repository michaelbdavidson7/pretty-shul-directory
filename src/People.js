
import React from 'react';
import  PersonCard  from './PersonCard';

export default class People extends React.Component {
    constructor(props) {
        super(props);
        this.sampleDirectory = [{ name: 'Dergus Bergus', joinYear: 2012 }, { name: 'Tergus Nergus', joinYear: 2012 }, { name: 'Plergus Nergus', joinYear: 2012 }, { name: 'Flerg Blergson', joinYear: 2012 }, { name: 'Dergus Bergus', joinYear: 2012 }, { name: 'Tergus Nergus', joinYear: 2012 }, { name: 'Plergus Nergus', joinYear: 2012 }, { name: 'Flerg Blergson', joinYear: 2012 }];

    }
    render() {
        return (
            <div className="col-md-10">
                <div className="card-columns offset-md-3">
                    {this.sampleDirectory.map((person) => {
                        return <PersonCard person={person} />
                    })}
                </div>
            </div>
        )
    }
}