import "./App.css";
import About from "./Component/About";
import Faq from "./Component/Faq";
import Feature from "./Component/Feature";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Feature />
      <About />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
