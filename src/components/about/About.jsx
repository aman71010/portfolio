import './about.css'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import SchoolIcon from '@material-ui/icons/School'
import { resumeLink } from '../../data'

export default function About() {

    return (
        <div className="about" id="about">
            <div className="a-wrapper">
                <div className="a-left">
                    <div className="l-circle">
                        <img className="l-img" src="assets/my2.jpg" alt="my-pic" />
                    </div>
                    <h1 className="l-heading">Aman Gupta</h1>
                    <p className="l-para">Student</p>
                    <a className="resume-link" href={resumeLink} target="_blank" rel="noreferrer">
                        <button className="btn"><FileCopyIcon style={{paddingRight: "5px"}}/>Resume</button>
                    </a>
                </div>
                <div className="a-right">
                    <h1 className="r-heading">About Me</h1>
                    <p className="r-para">I am a 3rd year student at National Institute of Technology Agatala, pursuing B.Tech in Electrical Engineering. 
                    I’m proficient in HTML, CSS, JavaScript, and Bootstrap and have intermediate-level proficiency in ReactJs, Node.js and MongoDB.
                    </p>
                    <h1 className="r-heading">Education</h1>
                    <div className="E-section">
                        <SchoolIcon />
                        <div className="E-section-child">
                            <p className="para1">B.Tech - Electrical Engineering, 2023</p>
                            <p className="para2">National Institute of Technology Agatala</p>
                        </div>
                    </div>
                    <div className="E-section">
                        <SchoolIcon />
                        <div className="E-section-child">
                            <p className="para1">High School, 2018</p>
                            <p className="para2">Param Gyan Niketan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
