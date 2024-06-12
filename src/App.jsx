import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes.jsx";
import Featured from './components/Featured.jsx';
import Cards from "./components/Cards.jsx";


const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
        <Navbar/>
        <LandingPage/>
        <Marquee/>
        <About/>
        <Eyes/>
        <Featured/>
        <Cards/>
    </div>
  )
}

export default App

