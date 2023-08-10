import React from 'react'

const Contact = () => {
    return (
        <div className="contact" id="contact">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEpM_5Jz9yrL9eZ_uUBpF4_LcHLIOrk0p7w&usqp=CAU" alt="" />
            <div className="form">
                <h1>Contact Us</h1>
                <div className="inputBx">
                    <p>Enter Name</p>
                    <input type="text" placeholder='Full Name' />
                </div>
                <div className="inputBx">
                    <p>Enter Email</p>
                    <input type="text" placeholder='Full Name' />
                </div>
                <div className="inputBx">
                    <p>Message</p>
                    <textarea placeholder='Type here...'></textarea>
                </div>
                <div className="inputBx">
                    <input type="submit" name='Submit' />
                </div>
            </div>
        </div>
    )
}

export default Contact