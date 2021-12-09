import "./home.css"
import { useEffect, useRef } from "react"
import { init } from "ityped"

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
                    <img src="assets/man.png" alt="personal-pic" />
                </div>
            </div>
            <div className="right">
                <div className="wrapHeading">
                    <h2>Hi There, I'm</h2>
                    <h1>Aman Gupta</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="downArrowImg"/>
                </a>
            </div>
        </div>
    )
}
