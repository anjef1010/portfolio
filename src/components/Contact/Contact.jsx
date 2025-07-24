import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const ContactWindow = ({ onClose }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5v7pq0m",         // Your EmailJS Service ID
      "template_q80y747",        // Your Template ID
      form.current,
      "i12AXwY1UiLm8XwIB"   // Replace with your EmailJS Public Key
    ).then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Try again later.");
        console.error(error);
      }
    );
  };

  return (
    <div className="contact-window-overlay">
      <div className="contact-window fade-in">
        <div className="contact-header">
          <div className="contact-title">Contact</div>
          <div className="window-controls">
            <button className="window-btn yellow" title="Minimize" />
            <button className="window-btn green" title="Maximize" />
            <button className="window-btn red" onClick={onClose} title="Close" />
          </div>
        </div>

        <div className="contact-content">
          <h2>Contact Me</h2>
          <p>
            I'm <strong>Anjef Dangol</strong>,a dedicated React developer specializing in building dynamic and user-centric web applications.
             Whether you have a project proposal, collaboration opportunity, or any inquiries, 
            I welcome the chance to connect and explore how we can create impactful solutions together. Please feel free to reach out.I look forward to hearing from you.
          </p>

          <div className="contact-icons">
            <a href="https://www.linkedin.com/in/anjef-dangol-916804369/" target="_blank" rel="noopener noreferrer" className="contact-icon" title="Visit my LinkedIn">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/anjef1010" target="_blank" rel="noopener noreferrer" className="contact-icon" title="Visit my GitHub">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
            </a>
            <a href="mailto:danjefff1001@gmail.com?subject=Let's Connect" target="_blank" rel="noopener noreferrer" className="contact-icon email-icon" title="Send me an Email">
              <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />
            </a>
          </div>
          <a href="/assets/Resume.pdf" download className="download-resume" title="Download Resume">
            📄 Download Resume
          </a>

          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          
        </div>
      </div>
    </div>
  );
};

export default ContactWindow;
