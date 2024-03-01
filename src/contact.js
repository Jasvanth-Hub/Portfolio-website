function Contact() {
    return (
        <>
            <section className="contact" id="contact">
                <div className="heading">
                    <h2>Contact</h2>
                    <span>Connect me</span>
                </div>
                <div className="contact-form">
                    <form id="contactForm">
                        <input type="text" id="name" placeholder="Your Name" />
                        <input type="email" id="email" placeholder="Your Email" />
                        <textarea id="message" cols="30" rows="10" placeholder="Write Message Here..."></textarea>
                        <input type="button" value="submit" className="contact-button" id="submitButton" onClick={()=>{
                            var name = document.getElementById('name').value;
                            var email = document.getElementById('email').value;
                            var message = document.getElementById('message').value;
                            if (name.trim() === '' && email.trim() === '' && message.trim() === '') {
                                alert('Please fill in all fields');
                                return false;
                            }
                            if (name.trim() === '') {
                                alert('Please enter the name');
                                return false;
                            }
                            if (name.trim().length < 3) {
                                alert('Name should be at least 3 characters');
                                return false;
                            }
                            if (email.trim() === '') {
                                alert('Please enter the email Id');
                                return false;
                            }
                            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            if (!emailPattern.test(email)) {
                                alert('Please enter a valid email address');
                                return false;
                            }
                            if (message.trim() === '') {
                                alert('Please enter the message');
                                return false;
                            }
                    
                            if (message.trim().length < 15) {
                                alert('message should be atleast 15 characters');
                                return false;
                            }
                    
                            alert('🟢 Message sent successfully! ');
                            document.getElementById('name').value = '';
                            document.getElementById('email').value = '';
                            document.getElementById('message').value = '';
                        }} />
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact