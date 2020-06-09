import React, { useState, memo } from 'react'
import styles from './Contact.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';


function Contact({ handleClose }) {
    const [isCopied, setIsCopied] = useState('')
    console.log(" contact mounted " + Date.now());

    const handleCopy = (e) => {
        setIsCopied(e)
        setTimeout(() => {
            setIsCopied('')
        }, 3000);
    }
    return (
        <div className={styles.container}>
            <button className={styles.closebtn} onClick={(e) => handleClose(e)}>X</button>
            <div className={styles.contactMe}>
                <h1>Let's work together:</h1>
                <div className={styles.itemContainer}>
                    <h3>E-mail : iamshubhankarkhare@gmail.com </h3>
                    <CopyToClipboard text="iamshubhankarkhare@gmail.com">
                        <button onClick={() => handleCopy('email')}>{isCopied === 'email' ? "Copied!" : "Copy"}</button>
                    </CopyToClipboard>
                </div>
                <div className={styles.itemContainer}>
                    <h3>Contact no. : 7905077163 </h3>
                    <CopyToClipboard text="7905077163">
                        <button onClick={() => handleCopy('number')}>{isCopied === 'number' ? "Copied!" : "Copy"}</button>
                    </CopyToClipboard>
                </div>
                <div className={styles.itemContainer}>
                    <h3>linkedin : <a href={`https://www.linkedin.com/in/shubhankar-khare-6a5856192`} target="_blank" rel="noopener noreferrer">shubhankar-khare</a></h3>
                    <CopyToClipboard text="https://www.linkedin.com/in/shubhankar-khare-6a5856192">
                        <button onClick={() => handleCopy('linkedin')}>{isCopied === 'linkedin' ? "Copied!" : "Copy"}</button>
                    </CopyToClipboard>
                </div>
            </div>
            <div className={styles.contactBar}>
                <a href={`https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRrkFrSLsWCHKjjlsKLjWlLgpTlGcwvdpjLStSvGcvjHmXMZwKlGxjCbzvJvGKzzbTCPMT`} target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope-square fa-2x"></i> </a>
                <a href={`https://www.linkedin.com/in/shubhankar-khare-6a5856192`} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2x"></i></a>
                <a href={`https://github.com/iamshubhankarkhare`} target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x"></i></a>
                <a href={`https://www.instagram.com/shubhankar_khare/`} target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-2x"></i></a>
            </div>
            <h1>Leave a message :</h1>

            <div className={styles.formStyle}>
                <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <div data-netlify-recaptcha="true"></div>
                    <button type="submit">Send</button>
                </form>
            </div>


        </div>
    )
}

export default memo(Contact)
