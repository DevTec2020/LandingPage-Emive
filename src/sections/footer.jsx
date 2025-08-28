import Vinivius from "../assets/Vinicius.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer(){
    return(
    <footer className="bg-black/95 text-white py-8">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="mb-6 md:mb-0">
                    <div className="flex flex-col items-center mb-4 text-center">
                        <img src={Vinivius} alt="Img Vinicius" className="w-52 h-52 md:h-58 md:w-58 rounded-full border-4 border-brand-yellow" />
                        <div className="flex flex-col text-center mt-3">
                            <span className="text-xl font-bold text-brand-gray-light">MVX CONSULTORIA</span>
                            <span className="text-4xl font-bold">Vinicius Hafner</span>
                            <span className="text-2xl font-semibold text-brand-yellow max-w-xl">Franqueado Especialista <p>em Segurança</p></span>
                            <div className="flex justify-center space-x-3 mt-3">
                                <a href="#contato" className="text-gray-400 hover:text-white transition">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                                </a>
                                <a href="https://www.instagram.com/viniciushafner.franqueado" target="_blank" className="text-gray-400 hover:text-white transition">
                                    <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                                </a>
                                <a href="https://wa.me/5521967406645?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20de%20segurança" target="_blank" 
                                    className="text-gray-400 hover:text-white transition">
                                    <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                                </a>
                                <a href="https://www.linkedin.com/in/vinicius-hafner-segurancaeletronica" target="_blank" className="text-gray-400 hover:text-white transition">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center max-w-2xl space-y-12 md:space-y-20">
                    <h1 className="text-center text-3xl md:text-start md:text-5xl font-semibold">
                        AGENDE AGORA SUA <span className="text-brand-yellow">CONSULTORIA GRATUITA COM O ESPECIALISTA EM SEGURANÇA</span> E PROTEJA QUEM MAIS IMPORTA.
                    </h1>
                    <div className="w-full flex md:justify-start justify-center">
                        <a href="https://wa.me/5521967406645?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20de%20segurança" target="_blank" 
                            className="bg-black/80 text-white border-2 border-brand-yellow hover:bg-brand-yellow hover:border-black hover:text-black hover:shadow-lg/50 hover:shadow-brand-yellow  py-5 px-14 rounded-full transition duration-700">
                                <span className="font-bold">Faça seu Orçamento</span>
                        </a>
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