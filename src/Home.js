import React, {Component} from 'react';
import './Home.css';
import Tabs from "./Tabs";
import { animateScroll as scroll } from 'react-scroll';

class Home extends Component {

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
        return (
            <div className="Home">
                <div className="Home-tabs">
                    <Tabs>
                        <div label="Home" tabClick={onClickHome}></div>
                        <div label="About Me" tabClick={onClickAbout}></div>
                        <div label="Projects" tabClick={onClickProjects}></div>
                        <div label="Experience" tabClick={onClickExperience}></div>
                        <div label="Contact" tabClick={onClickContact}></div>
                    </Tabs>
                </div>
                <div className="Home-content">
                    <h1 style={{fontSize:"180px"}}>
                        {`${this.props.firstName} ${this.props.lastName}`}
                    </h1>
                    <p>
                        Software Engineer | Data Analyst | Rutgers New Brunswick
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;