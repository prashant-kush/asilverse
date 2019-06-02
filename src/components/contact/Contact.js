import React from "react";
import Button from "./../button/Button.js";
import "./contact.css";
class Contact extends React.Component
{
    constructor()
    {
        super();
    }
    onClick=()=>
    {
        const ele = document.getElementsByClassName("contact")[0];
        ele.style.visibility="hidden";
        document.getElementsByClassName("contact_card")[0].style.width="0vw";
        document.getElementsByClassName("contact_card")[0].style.height="0vw";
        document.getElementsByClassName("contact_card")[0].style.marginLeft="50vw";
    }
    render()
    {
        return(
                <div className="contact" >
                    <div className="contact_card">
                            <div className="cut" onClick={this.onClick}>
                                {"X"}
                            </div>
                        <div className="name_subject_wrapper">
                            <div className="name">
                                <p>Name</p>
                                <input className="name_subject_input"></input>
                            </div>
                            <div className="subject">
                                <p>Subject</p>
                                <input className="name_subject_input"></input>
                            </div>
                        </div>
                        <div className="message">
                            <p>Message</p>
                            <textarea className="message_input"></textarea>
                        </div>
                        <div className="contact_button_wrapper">
                        <Button title="Send" marginLeft="7.45vw" marginTop="1.5vw" background="#ffffff" color="#BB5959" height="2.5vw" width="9vw" fontSize="0.9vw" fontWeight="550"/>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Contact;