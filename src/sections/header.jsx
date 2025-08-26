import { useState, useEffect} from "react";

import LogoEmive from "../assets/LogoEmive.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";

export default function(){
    const [scroll, setScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        
    },[]);

    return( 
        <>
        {/* Header/Top Bar/Navbar */}
        <header className="fixed mt-8 top-0 left-0 w-full z-50 font-din font-normal">
            <div className="container flex justify-between items-center max-w-6xl mx-auto rounded-full shadow-md p-2 bg-brand-black/70 backdrop-blur-md text-white">
                {/* Navbar */}
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div>
                        <a href="#" className="flex items-center space-x-2">
                            <img src={LogoEmive} alt="Logo-Emive" className="h-14" />
                        </a>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8 font-bold">
                        <a href="#home" className="hover:text-brand-yellow transition">Início</a>
                        <a href="#protecao" className="hover:text-brand-yellow transition">Proteção</a>
                        <a href="#depoimentos" className="hover:text-brand-yellow transition">Depoimentos</a>
                        <a href="https://wa.me/5521967406645?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20de%20segurança" target="_blank" 
                            className="bg-brand-yellow text-black hover:bg-white py-3 px-5 rounded-full transition duration-300"
                        >
                                <span>Fale conosco</span>
                                <FontAwesomeIcon icon={faArrowRight} className="ml-2"/>
                        </a>
                    </nav>
    
                    {/* Mobile Menu button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-xl">
                        <FontAwesomeIcon icon={faBars} className="text-3xl"/>
                    </button>
                </div>
            </div>
    
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-brand-black/90 text-white py-6 px-4 mt-2 space-y-4 text-center text-xl font-semibold">
                    <a href="#home" onClick={() => setIsOpen(!isOpen)} className="block hover:text-brand-yellow transition">Início</a>
                    <a href="#protecao" onClick={() => setIsOpen(!isOpen)} className="block hover:text-brand-yellow transition">Proteção</a>
                    <a href="#depoimentos" onClick={() => setIsOpen(!isOpen)} className="block hover:text-brand-yellow transition">Depoimentos</a>
                    <a href="https://wa.me/5521967406645?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20de%20segurança" 
                        target="_blank" onClick={() => setIsOpen(!isOpen)} 
                        className="bg-brand-yellow text-black hover:bg-white py-3 px-5 rounded-full transition duration-300 inline-block">
                        Fale conosco
                    </a>
    
                </div>
            )}
    
        </header>
        </>
    )
}