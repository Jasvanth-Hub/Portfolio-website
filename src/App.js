import './App.css';
import Footer from './Footer';
import Contact from './contact';
import Home from './home';
import Navbar from './navbar';
import Portfolio from './portfolio';
import Skills from './skills';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
      <div className="copyright">
        <p>Create By <a href="#home">Jasvanth</a> | <b>Copyright &copy;</b> | All Right Reserved.</p>
      </div>
    </>
  )
}

export default App;
