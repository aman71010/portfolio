import "./socialIcon.css"
import { socialMediaIcons } from "../../data";

export default function SocialIcon() {
    return (
        <div className="social-icon-container">
            {socialMediaIcons.map(item => (
                <div className="social-icon" style={{backgroundColor: `${item.backgroundColor}`}}>
                    <a href={item.socialLink} target="_blank" rel="noreferrer">
                        <span class="iconify" data-icon={item.fontAwesomeClassname} data-width="22px" data-height="22px" ></span>
                    </a>
                </div>
            ))}
        </div>
    )
}
