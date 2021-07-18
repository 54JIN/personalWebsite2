import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    render () {
        return (
            <div className="Home">
                <div className="Home-tabs">
                    Home About Me Projects Experience Contact
                </div>
                <div className="Home-content">
                    <h1 style={{fontSize:"180px"}}>{`${this.props.firstName} ${this.props.lastName}`}</h1>
                    <p>Software Engineer | Data Analyst</p>
                </div>
            </div>
        );
    }
}

export default Home;