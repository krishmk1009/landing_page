
import Content from "./components/Content";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/navbar"
import Temp from "./components/Temp";
import "./index.css";

function App() {


  return (
    <div >
      <Navbar />
      {/* <Temp /> */}
      <Hero />
      <Features />
      <Content />


    </div>
  )
}

export default App
