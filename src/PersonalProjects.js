import React, {Component} from 'react';
import './PersonalProjects.css';
import Pallets from './Pallets';

class PersonalProjects extends Component {
    render () {
        const {
            project1,
            project2,
            project3
        } = this.props;
        return (
            <div className="PersonalProjects">
                <br></br>
                <h1 className="PersonalProjects-title">Personal Projects</h1>
                <div className="PersonalProjects-pallets">
                    <Pallets 
                        title="Pallets"
                        language="React.js"
                        description={project1}
                    />
                    <Pallets 
                        title="Personal Website"
                        language="React.js"
                        description={project2}
                    />
                    <Pallets 
                        title="Task Manager"
                        language="Node.js | React.js"
                        description={project3}
                    />
                </div>
            </div>
        );
    }
}

export default PersonalProjects;