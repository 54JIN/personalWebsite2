import React, {Component} from 'react';
import './WorkExperience.css';

class WorkExperience extends Component {
    render () {
        const {
            work,
            work2,
            work3
        } = this.props;
        return (
            <div className="WorkExperience">
                <br></br>
                <h1 className="WorkExperience-title">Work Experience</h1>
                <div className="WorkExperience-past">
                    <div style={{paddingBottom: "2vh", display: "flex", justifyContent: "space-between",width: "100%", height: "2vh"}}>
                        <p style={{color: "#A1841E", fontSize: "3vh"}}>DATA & RPA ANALYST/INTERN</p>
                        <p style={{color: "#E87F1E"}}>Jun. 2022 - Aug. 2022 & Sept. 2022 - Current</p>
                    </div>
                    <div style={{paddingBottom: "3vh", display: "flex", justifyContent: "space-between",width: "100%", height: "2vh"}}>
                        <p style={{color: "#A1841E", fontSize: "2.8vh"}}>GAF Materials Corporation</p>
                        <p style={{color: "#E87F1E"}}>Parsippany, New Jersey</p>
                    </div>
                    <p >{work3}</p>
                </div>
                <div className="WorkExperience-past">
                    <div style={{paddingBottom: "2vh", display: "flex", justifyContent: "space-between",width: "100%", height: "2vh"}}>
                        <p style={{color: "#A1841E", fontSize: "3vh"}}>Backend Developer</p>
                        <p style={{color: "#E87F1E"}}>SPRING 2021</p>
                    </div>
                    <div style={{paddingBottom: "3vh", display: "flex", justifyContent: "space-between",width: "100%", height: "2vh"}}>
                        <p style={{color: "#A1841E", fontSize: "2.8vh"}}>RUMAD</p>
                        <p style={{color: "#E87F1E"}}>Rutgers New Brunswick</p>
                    </div>
                    <p >{work}</p>
                </div>
                <div className="WorkExperience-past">
                    <div style={{paddingBottom: "2vh", display: "flex", justifyContent: "space-between",width: "100%", height: "2vh"}}>
                        <p style={{color: "#A1841E", fontSize: "3vh"}}>Backend Developer</p>
                        <p style={{color: "#E87F1E"}}>FALL 2020 - SPRING 2021</p>
                    </div>
                    <div style={{paddingBottom: "3vh", display: "flex", justifyContent: "space-between",width: "100%", height: "2vh"}}>
                        <p style={{color: "#A1841E", fontSize: "2.8vh"}}>HACKATHON</p>
                        <p style={{color: "#E87F1E"}}>Rutgers New Brunswick</p>
                    </div>
                    <p >{work2}</p>
                </div>
                {/* <div className="WorkExperience-past">
                    <div style={{paddingBottom: "4vh", backgroundColor: "blue"}}>
                        <h2 style={{float: "left", fontSize: "3vh", backgroundColor: "violet"}}>DATA & RPA ANALYST/INTERN</h2>
                        <h4 style={{float: "right", fontSize: "2.2vh"}}>Jun. 2022 - Aug. 2022 & Sept. 2022 - Current</h4>
                    </div>
                    <div>
                        <h3 style={{float: "left"}}>GAF Materials Corporation</h3>
                        <h3 style={{float: "right"}}>Parsippany, New Jersey</h3>
                    </div>
                    <p style={{float: "right"}}>{work3}</p>
                </div> */}
                {/* <div className="WorkExperience-past">
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
                </div> */}
            </div>
        );
    }
}

export default WorkExperience;