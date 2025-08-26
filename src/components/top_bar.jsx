import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function top_bar(){
    {/* Top Bar */}
    <div className="hidden sm:flex justify-end items-center gap-10 bg-black/90">
        <div className="flex space-x-4">
            <a href="https://wa.me/5521967406645?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20de%20segurança" target="_blank" className="text-gray-400 hover:text-white flex items-center">
                <FontAwesomeIcon icon={faWhatsapp} className="mr-1 text-xl" /> 
                <span>(21) 96740-6645</span>
            </a>

            <a href="mailto:teste@teste.com" className="text-gray-400 hover:text-white flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-xl" />
                <span>contato@teste.com.br</span>
            </a>
        </div>

        <div className="flex space-x-3 me-5">
            <a href="https://www.instagram.com/viniciushafner.franqueado" target="_blank" className="text-gray-400 hover:text-white text-xl transition"><FontAwesomeIcon icon={faInstagram} className="text-xl" /></a>
            <a href="https://www.linkedin.com/in/vinicius-hafner-segurancaeletronica" target="_blank" className="text-gray-400 hover:text-white text-xl transition"><FontAwesomeIcon icon={faLinkedin} className="text-xl" /></a>
            <a href="https://wa.me/5521967406645?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20de%20segurança" target="_blank" className="text-gray-400 hover:text-white text-xl transition"><FontAwesomeIcon icon={faWhatsapp} className="text-xl" /></a>
        </div>
    </div>
}