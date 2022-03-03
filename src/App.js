import Home from './Home';
import UserInfo from './UserInfo';
import WorkExperience from './WorkExperience';
import PersonalProjects from './PersonalProjects';
import Contact from './Contact';
import React, {Component} from 'react';
import photo from './deer.JPG';

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
    const project1 = "Pallets allows online users to manifest new colors or the provided default colors build a plethera of colors for an upcoming project they may decide to develope.";
    const project2 = "Pallets allows online users to manifest new colors or the provided default colors build a plethera of colors for an upcoming project they may decide to develope.";
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
          />
        </div>
        <Contact />
      </div>
    );
  }
}

export default App;
