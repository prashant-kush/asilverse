import React from "react";
import Button from "./../button/Button.js";
import "./contact.css";
const Contact=()=>
{
    return(
            <div className="contact">
                <div className="contact_card">
                    <div className="name_subject_wrapper">
                        <div className="name">
                            <p>Name</p>
                            <input className="name_subject_input"></input>
                        </div>
                        <div className="Subject">
                            <p>Subject</p>
                            <input className="name_subject_input"></input>
                        </div>
                    </div>
                    <div className="message">
                        <input className="message_input"></input>
                    </div>
                    <Button title={Send}/>
                </div>
            </div>
    );
}
export default Contact;