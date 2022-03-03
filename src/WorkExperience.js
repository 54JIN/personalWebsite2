import React, {Component} from 'react';
import './WorkExperience.css';

class WorkExperience extends Component {
    render () {
        const {
            work,
            work2
        } = this.props;
        return (
            <div className="WorkExperience">
                <br></br>
                <h1 className="WorkExperience-title">Work Experience</h1>
                <div className="WorkExperience-past">
                    <div style={{paddingBottom: "80px"}}>
                        <h2 style={{float: "left"}}>Backend Developer</h2>
                        <h2 style={{float: "right"}}>SPRING 2021</h2>
                    </div>
                    <div>
                        <h3 style={{float: "left"}}>RUMAD</h3>
                        <h3 style={{float: "right"}}>RUTGERS</h3>
                    </div>
                    <p style={{float: "right"}}>{work}</p>
                </div>
                <div className="WorkExperience-past">
                    <div style={{paddingBottom: "193px"}}>
                        <h2 style={{float: "left"}}>Backend Developer</h2>
                        <h2 style={{float: "right"}}>FALL 2020 - SPRING 2021</h2>
                    </div>
                    <div>
                        <h3 style={{float: "left"}}>HACKATHON</h3>
                        <h3 style={{float: "right"}}>RUTGERS</h3>
                    </div>
                    <p style={{float: "right"}}>{work2}</p>
                </div>
            </div>
        );
    }
}

export default WorkExperience;