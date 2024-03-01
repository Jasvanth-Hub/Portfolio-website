function Portfolio() {
    return (
        <>
            <section className="portfolio" id="portfolio">
                <div className="heading">
                    <h2>Portfolio</h2>
                    <span>My Projects</span>
                </div>
                <div className="portfolio-content">
                    <div className="portfolio-img">
                        <img src="./to-do-list-apps.png" alt="" />
                        <div className="card-details">
                            <h2>To-Do List App</h2>
                            <p>A simple To-Do List App designed to help users organize and manage their tasks efficiently. Users can add, edit, and delete tasks, mark them as completed, and prioritize their activities.</p>
                            <p><b>Technologies Used: HTML, CSS, JavaScript and React</b></p>
                        </div>
                    </div>
                    <div className="portfolio-img">
                        <img src="./weather.jpg" alt="" />
                        <div className="card-details">
                            <h2>Weather App</h2>
                            <p>An intuitive Weather App that provides real-time weather information based on user locations or manually entered locations. Users can check current weather conditions, forecasts, and additional.</p>
                            <p><b>Technologies Used: HTML, CSS, JavaScript and Weather API</b></p>
                        </div>
                    </div>
                    <div className="portfolio-img">
                        <img src="./registration.png" alt="" />
                        <div className="card-details">
                            <h2>Form Validation</h2>
                            <p>A Form Validation App designed to enhance user input accuracy and data integrity. The app validates user input in real-time, providing instant feedback on form fields. It ensures that users submit valid data according to specified criteria.</p>
                            <p><b>Technologies Used: HTML, CSS, JavaScript, Bootstrap and React</b></p>
                        </div>
                    </div>
                    <div className="portfolio-img">
                        <img src="./code1.png" alt="" />
                        <div className="card-details">
                            <h2>QR Code Generator</h2>
                            <p>The QR Code Generator App allows users to create QR codes for various purposes, such as sharing URLs, contact information, or Wi-Fi credentials.Users can customize QR code styles and encode information dynamically.</p>
                            <p><b>Technologies Used: HTML, CSS, JavaScript and QR code API </b></p>
                        </div>
                    </div>
                    <div className="portfolio-img">
                        <img src="./captcha verification.jpg" alt="" />
                        <div className="card-details">
                            <h2>Captcha Verification</h2>
                            <p>The Captcha Verification App enhances online security by implementing effective captcha challenges in web forms. It helps prevent automated bots from submitting forms and interactions are carried out by real users.</p>
                            <p><b>Technologies Used: HTML, CSS, JavaScript</b></p>
                        </div>
                    </div>
                    <div className="portfolio-img">
                        <img src="./calculaor app.jpg" alt="" />
                        <div className="card-details">
                            <h2>Simple Calculator</h2>
                            <p>The Simple Calculator App provides basic arithmetic functionality for users to perform calculations easily. It supports addition, subtraction, multiplication, and division, making it a handy tool for quick computations.</p>
                            <p><b>Technologies Used: HTML, CSS, JavaScript</b></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio