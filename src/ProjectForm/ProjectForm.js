import React, { Component } from 'react';
import './ProjectForm.scss';

class ProjectForm extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return(
            <form className="project_form">
                <input className="project_input"/>
                <button className="project_btn">Submit Project</button>
            </form>
        )
    }
}

export default ProjectForm;
