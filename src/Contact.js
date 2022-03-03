import React, {Component} from 'react';
import './Contact.css';
import github from './image2.png';
import linkedin from './image3.png';
import email from './image4.png';

class Contact extends Component {

    render () {
        return (
            <div className="Contact">
                <h3>Contact</h3>
                <div className="Contact-content">
                    <img src={email} alt="email logo" style={{cursor:"pointer", height: "9vh", marginRight: "2vw"}} onClick={() =>  navigator.clipboard.writeText('sajinsaju2002@gmail.com')}/>
                    <a href="https://www.linkedin.com/in/sajin-saju-917117200/"><img src={linkedin} alt="linkedin logo" style={{height: "9vh", marginRight: "2vw"}}/></a>
                    <a href="https://github.com/54JIN"><img src={github} alt="github logo" style={{height: "9vh"}}/></a>
                </div>
            </div>
        );
    }
}

export default Contact;