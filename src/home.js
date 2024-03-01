
function Home() {
    return (
        <>
            <section className="home" id="home">
                <div className="social">
                    <a href="https://www.twitter.com" rel="noreferrer" target="_blank" title="twitter" ><i className='bx bxl-twitter'></i></a>
                    <a href="https://www.youtube.com/channel/UCFqULNQqD9wpsG96gwsAbwA" rel="noreferrer" target="_blank" title="youtube" ><i className='bx bxl-youtube' ></i></a>
                    <a href="https://www.whatsapp.com" rel="noreferrer" target="_blank" title="whatsapp" ><i className='bx bxl-whatsapp' ></i></a>
                </div>
                <div className="home-img">
                    <img src="./profile3.jpeg" alt="" />
                </div>
                <div className="home-text">
                    <span>Hello, I'm</span>
                    <h1>Jasvanth Bhukya</h1>
                    <h2>Pursuing a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering.</h2>
                    <p>Proficient in web technologies like HTML, CSS, JavaScript and React Js. Demonstrated problem-solving
                        skills and creative thinking in overcoming design and development challenges.  Read more...</p>
                    <a href="#portfolio" className="btn">Go to Portfolio</a>
                </div>
            </section>
        </>
    )
}

export default Home