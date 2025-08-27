import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./sections/footer.jsx";
import Wpp_button from "./components/wpp_button.jsx";
import Top_bar from "./components/top_bar.jsx";
import Header from "./sections/header.jsx";
import Hero from "./sections/hero.jsx";
import Protecao from "./sections/protecao.jsx";
import Clientes from "./sections/clientes.jsx";
import Contato from "./sections/contato.jsx";




function App() {
  return (
    <>
    <Wpp_button/>    
    <Top_bar/>
    <Header/>
    <Hero/>
    <Protecao/>
    <Clientes/>
    <ToastContainer position="top-right" autoClose={3000} />
    <Contato/> 
    <Footer/>
    </>
  )
}

export default App;
