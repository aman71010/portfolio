import './footer.css'
import SocialIcon from '../socialIcon/SocialIcon'

export default function Footer() {
    return (
        <div id="footer">
            <div className="socialLink">
                <SocialIcon />
            </div>
            <div className="copyright">
                <p>Made with ❤ by Aman Gupta</p>
            </div>
        </div>
    )
}
