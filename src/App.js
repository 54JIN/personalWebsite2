import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import UserInfo from './UserInfo';
import WorkExperience from './WorkExperience';
import PersonalProjects from './PersonalProjects';
import Contact from './Contact';
import React, {Component} from 'react';
import photo from './profilePhoto.jpg';

class App extends Component {
  render(){
    const firstName = "Sajin";
    const lastName = "Saju";
    const age = 19;
    const school = "Rutgers New Brunswick";
    const major = "Computer Science";
    const bio = "An experienced backend developer who has honed his skill via practice and execution with the guidance of mentors. Additionally, a leader and mentor to incoming freshmen and amature programmers in an organization titled: RUMAD. Practising backend development via leading mini/major projects with the collaberation of partners programming either or both fronend and backend protion of projects.";
    const work = "Participated in the collaberation of two individual projects - twitter clone and vacation app, created for the puprose to unite communites and deliver a new experience in socilization. Programming the backend of both projects using Node.js and mongoose cloud based data storage, data retrival was accomplished with minimal time. Using Heroku and Github, the cloup based API was publised for the frontend developers to use.";
    const work2 = "Collobrated among a diverse group of individuals to create a (paper money) stock API, capable of predicting future earnings in accordance to past investments and sales of stock.";
    const work3 = "Reduced over two months of manual labor of collecting information on GAF's Competitors' contractors by programming and automating through Python and Robotic Process Automation (RPA). Identified a major data vulnerability in the company customer site that exposed the company's contractor list and other sensitive information. Developed and proposed solutions to the IT and Business stakeholders to protect any information that is easily accessible by external members. Prepared a Process Definition Documentation (PDD) with Business Analysts to map out the process of automating additional surcharge costs before the vendors process a payment. Converted 50+ word processing files of Microsoft Word and Google Docs and ensure no formatting issues. Demoed completed work to stakeholders and explain the impact, benefits, and implementation efforts. Collaborated with colleagues and clients in the design, product management, and process improvement. Worked with vendors from UiPath and internal RPA leaders to discuss complications, irregularities, and potential technical issues with the RPA solutions built on the vendor platform.";
    const project1 = "Pallets allows online users to manifest new colors or the provided default colors build a plethera of colors for an upcoming project they may decide to develope.";
    const project2 = "Personal Website allows online users to have a visual comprehension of my current skillset in front-end development.";
    const project3 = "Task Manager API allows for fellow front end developer to send request to a DBMS to create accounts, make tasks, update/delete events and so forth.";
    return (
      <div>
        <Home 
          firstName={firstName} 
          lastName={lastName} 
        />
        <div id="User-Info">
          <UserInfo 
            firstName={firstName} 
            lastName={lastName} 
            age={age} 
            school={school} 
            major={major} 
            bio={bio} 
            img={photo}
          />
        </div>
        <div id="Personal-Projects">
          <PersonalProjects 
            project1={project1}
            project2={project2}
            project3={project3}
          />
        </div>
        <div id="Work-Experience">
          <WorkExperience
            work={work}
            work2={work2}
            work3={work3}
          />
        </div>
        <Contact />
      </div>
    );
  }
}

export default App;
