import React, {Component} from 'react';
import './UserInfo.css';

class UserInfo extends Component {
    render () {
        const {
            firstName, 
            lastName, 
            age, 
            school,
            major,
            bio,
            img
        } = this.props;
        return (
            <div className="UserInfo">
                <div className="UserInfo-details">
                    <div className="UserInfo-header">
                        <h1>
                            {`
                                ${firstName} 
                                ${lastName}, 
                                ${age}
                            `}
                        </h1>
                        <h3>{school}</h3>
                        <h3>{major}</h3>
                    </div>
                    <div className="UserInfo-bio">
                        <p>{bio}</p>
                    </div>
                </div>
                <img src={img}/>
            </div>
        );
    }
}

export default UserInfo;