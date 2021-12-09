import './contact.css'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import SendRoundedIcon from '@material-ui/icons/SendRounded'

export default function Contact() {

    const formRef = useRef();
    const [done, setDone] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ez36qfv', 'template_2kjyzgi', formRef.current, 'user_x727KIAnPyIQwX9GqVjnW')
        .then((result) => {
            console.log(result.text);
            setDone(true);
            formRef.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (

        <div className="contact" id="contact">
            <div className="contact-wrapper">
                <div className="left-container">
                    <img className="contact-img" src="assets/shake.svg" alt="" />
                </div>
                <div className="right-container">
                    <h1 className="contact-heading">Contact Me</h1>
                    <form id="c-form" ref={formRef} onSubmit={submitHandler}>
                        <input type="text" placeholder="Name" name="userName" required/>
                        <input type="email" placeholder="email" name="userEmail" required/>
                        <input type="text" placeholder="subject" name="userSubject"/>
                        <textarea  rows="5" placeholder="message" name="message"/>
                        <button className="contact-button">send <SendRoundedIcon className="send-icon"/></button>
                    </form>
                    {done && <p className="c-para">Thanks I will reply ASAP.</p>}
                </div>
            </div>
        </div>
    )
};
