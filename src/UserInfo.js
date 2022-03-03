import React, {Component} from 'react';
import './UserInfo.css';
import Tabs from "./Tabs";
import { animateScroll as scroll } from 'react-scroll';

class UserInfo extends Component {

    onClickContact = () => {
        scroll.scrollToBottom();
    }

    onClickHome = () => {
        scroll.scrollToTop();
    }

    onClickAbout = () => {
        const anchor = document.querySelector('#User-Info')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    onClickProjects = () => {
        const anchor = document.querySelector('#Personal-Projects')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    onClickExperience = () => {
        const anchor = document.querySelector('#Work-Experience')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    render () {
        const {
            onClickContact,
            onClickHome,
            onClickAbout,
            onClickProjects,
            onClickExperience
        } = this;

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
                <div className="Users-tabs">
                    <Tabs>
                        <div label="Home" tabClick={onClickHome}></div>
                        <div label="About Me" tabClick={onClickAbout}></div>
                        <div label="Projects" tabClick={onClickProjects}></div>
                        <div label="Experience" tabClick={onClickExperience}></div>
                        <div label="Contact" tabClick={onClickContact}></div>
                    </Tabs>
                </div>
                <div className="UserInfo-alignment">
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
                    <img src={img} alt="deer"/>
                </div>
            </div>
        );
    }
}

export default UserInfo;