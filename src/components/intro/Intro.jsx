import './intro.css'

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgcontainer">
                    <img src="assets/man.png" alt="personal-pic" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper1">
                    <h2>Hi There, I'm</h2>
                    <h1>Aman Gupta</h1>
                    <h3>Full Stack<span>Web Developer</span></h3>
                </div>
            </div>
        </div>
    )
}
