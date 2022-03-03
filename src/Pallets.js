import React, {Component} from 'react';
import './Pallets.css';

class Pallets extends Component {
    render () {
        const {
            title,
            language,
            description
        } = this.props;
        return (
            <div className="Pallets">
                <h1>{title}</h1>
                <h2>{language}</h2>
                <p>{description}</p>
            </div>
        );
    }
}

export default Pallets;