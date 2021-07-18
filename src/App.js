import Home from './Home';
import UserInfo from './UserInfo';
import React, {Component} from 'react';

class App extends Component {
  render(){
    const firstName = "Sajin";
    const lastName = "Saju";
    const age = 18;
    const school = "Rutgers New Brunswick";
    const major = "Computer Science";
    const bio = "An experienced backend developer who has honed his skill via practice and execution with the guidance of mentors. Additionally, a leader and mentor to incoming freshmen and amature programmers in an organization titled: RUMAD. Practising backend development via leading mini/major projects with the collaberation of partners programming either or both fronend and backend protion of projects.";
    const imgSrc = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

    return (
      <div>
        <Home 
          firstName={firstName} 
          lastName={lastName} 
        />
        <UserInfo 
          firstName={firstName} 
          lastName={lastName} 
          age={age} 
          school={school} 
          major={major} 
          bio={bio} 
          img={imgSrc}
        />
      </div>
    );
  }
}

export default App;
