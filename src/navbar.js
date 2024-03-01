function Navbar() {
    let darkmode = document.querySelector('#darkmode');
    return (
        <>
            <header>
                <a href="##" className="logo">JA</a>
                <div className="bx bx-menu" id="menu-icon"></div>
                <ul className="navbar" >
                    <li><a href="#home">Home</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <div className="bx bx-moon" id="darkmode" onClick={()=>{
                        if(darkmode.classList.contains('bx-moon')){
                            darkmode.classList.replace('bx-moon','bx-sun');
                            document.body.classList.add('active');
                        }else{
                            darkmode.classList.replace('bx-sun','bx-moon');
                            document.body.classList.remove('active');
                        }
                    }}></div>
                </ul>
            </header>
        </>
    )
}

export default Navbar