import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import AboutMe from './component/AboutMe';
import Interests from './component/Interests';
import Experience from './component/Experience';
import Portfolio from './component/Portfolio';
import Testimonials from './component/Testimonials';
import Contacts from './component/Contacts';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Header />
        <AboutMe />
        <Interests />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Contacts />
        <Footer />
      </>
    </div>
  );
}

export default App;
