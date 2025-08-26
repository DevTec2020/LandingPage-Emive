import Vinivius from "../assets/Vinicius.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer(){
    return(
    <footer className="bg-black/95 text-white py-8">
        <div className="container mx-auto px-4">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <div className="flex items-center mb-4">
                        <img src={Vinivius} alt="Img Vinicius" className="w-10 h-10 md:h-50 md:w-50 rounded-full border-4 border-brand-yellow mr-3" />
                        <div className="flex flex-col ">
                            <span className="text-xl font-bold text-brand-gray-dark">MVX CONSULTORIA</span>
                            <span className="text-4xl font-bold">Vinicius Hafner</span>
                            <span className="text-md font-bold text-brand-yellow">Franqueado Especialista em Segurança</span>
                        </div>
                    </div>
                    <p className="text-gray-400 max-w-xs">Soluções completas em segurança eletrônica para residências e comércios.</p>
                </div>
                
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-white transition">Início</a></li>
                            <li><a href="#protecao" className="text-gray-400 hover:text-white transition">Proteção</a></li>
                            <li><a href="#depoimentos" className="text-gray-400 hover:text-white transition">Depoimentos</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contato</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faPhone} className="mr-2 text-sm text-brand-yellow" />
                                <span className="text-gray-400">(21) 96740-6645</span>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-sm text-brand-yellow" />
                                <span className="text-gray-400">vinicius.hafner@mvxconsultoria.com.br</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Redes Sociais</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                            </a>
                            <a href="https://wa.me/5521967406645" target="_blank" className="text-gray-400 hover:text-white transition">
                                <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="text-center md:text-left">
                        <p className="text-gray-400 text-sm">MVX CONSULTORIA LTDA - CNPJ: 49.867.783/0001-02</p>
                    </div>
                    
                    <div className="mt-4 md:mt-0 text-center md:text-right">
                        <p className="text-gray-400 text-sm">&copy; 2026 MVX Consultoria. Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}