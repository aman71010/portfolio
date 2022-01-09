import './skills.css'
import { skills } from '../../data'

export default function Skills() {
    return (
        <div className="skills" id="skills">
            <div className="skills-wrapper">
                <div className="s-left">
                    <img className="skills-img" src="assets/SKILLS.png" alt="" />
                </div>
                <div className="s-right">
                    <h1 className="s-heading">Skills</h1>
                    <div className="s-container">
                        { skills.map((skill) => (
                            <div className="s-box">
                                <div className="s-circle">   
                                    <span class="iconify" data-icon={skill.fontAwesomeClassname} data-width="48" data-height="48"></span>
                                </div>
                                <div className="s-name">
                                    {skill.skillName}
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
