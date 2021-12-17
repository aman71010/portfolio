import "./home.css"
import { useEffect, useRef } from "react"
import { init } from "ityped"
import { resumeLink } from '../../data'
import SocialIcon from '../socialIcon/SocialIcon'
import FileCopyIcon from '@material-ui/icons/FileCopy'

export default function Home() {
    
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1000,
            strings: ["Full Stack Web Developer", "Competitive Coder"] 
        })
    }, [])

    return (
        <div className="home" id="home">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/homeimg-removebg new.png" alt="personal-pic" />
                </div>
            </div>
            <div className="right">
                <div className="wrapHeading">
                    <h2>Hi There, I'm</h2>
                    <h1>Aman Gupta</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <div style={{margin: "20px 50px"}}>
                    <SocialIcon />
                </div>
                <div className="resume-btn">
                    <a className="resume-link" href={resumeLink} target="_blank" rel="noreferrer">
                        <button className="btn"><FileCopyIcon style={{paddingRight: "5px"}}/>My Resume</button>
                    </a>
                </div>
                <div>
                    <a className="a-downarrow" href="#portfolio">
                        <img src="assets/down.png" alt="downArrowImg"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
