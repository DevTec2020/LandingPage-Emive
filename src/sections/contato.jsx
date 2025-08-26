import { useState, useEffect} from "react";
import emailjs from "@emailjs/browser"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faVideo, faBell, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Contato(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [perfil, setPerfil] = useState("");
    const [message, setMessage] = useState("");


    const sendEmail = (e) => {
        e.preventDefault();

        if (!name || !email || !phone || !perfil || !message) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const templateParams = {
            from_name: name,
            from_email: email,
            phone_number: phone,
            interested_in: perfil,
            message: message 
        }
         
        emailjs.send(
            "service_6eoetiq", // gerado no painel do EmailJS
            "template_3st42w3", // modelo criado no EmailJS
            templateParams,
            "22s_EbuM_em6dITRv" // chave pública do EmailJS
        )
        .then((response) => {
            console.log("Email enviado:", response);
            console.log(templateParams)
            
            setName("")
            setEmail("")
            setPhone("")
            setPerfil("")
            setMessage("")
            
            alert("Email enviado com sucesso!");


        }, (error) => {
            console.log("Erro:", error);
            alert("Erro ao enviar email. Por favor, tente novamente.");
        });
        
    };

    
    return(
        <>
        {/* Section 4: Formulário */}
        <section id="contato" className="py-16 bg-brand-gray-dark">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2 primary-bg text-white p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-yellow text-center">Sua tranquilidade em primeiro lugar.</h2>
                        
                            <div className="flex flex-col items-center justify-center space-y-4 mt-24 text-xl">
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faVideo} className="mr-2 text-brand-yellow" />
                                    <span>Câmeras de Segurança</span>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faBell} className="mr-2 text-brand-yellow" />
                                    <span>Alarme Monitorado</span>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faEye} className="mr-2 text-brand-yellow" />
                                    <span>Monitoramento 24H</span>
                                </div>
                                
                            </div>
                            <div className="flex justify-center space-x-3 me-5 mt-24">
                                <a href="https://www.instagram.com/viniciushafner.franqueado" target="_blank" className="text-gray-400 hover:text-white text-xl transition">
                                    <FontAwesomeIcon icon={faInstagram} className="text-4xl" />
                                </a>
                                <a href="https://www.linkedin.com/in/vinicius-hafner-segurancaeletronica" target="_blank" className="text-gray-400 hover:text-white text-xl transition">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-4xl" />
                                </a>
                                <a href="https://wa.me/5521967406645?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20de%20segurança" target="_blank" className="text-gray-400 hover:text-white text-xl transition">
                                    <FontAwesomeIcon icon={faWhatsapp} className="text-4xl" />
                                </a>
                            </div>
                        </div>

                        <div className="md:w-1/2 p-8 md:p-12">
                            <form onSubmit={sendEmail} className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Nome Completo</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">E-mail</label>
                                    <input 
                                        type="email" 
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Telefone</label>
                                    <input 
                                        type="tel" 
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                                        onChange={(e) => setPhone(e.target.value)}
                                        value={phone}
                                        required/>
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Interessado em:</label>
                                    <select  
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                                        onChange={(e) => setPerfil(e.target.value)}
                                        value={perfil}
                                        required>
                                        
                                        <option value="" disabled>Selecione uma opção</option>
                                        <option value="Proteção Residencial">Proteção Residencial</option>
                                        <option value="Proteção Comercial">Proteção Comercial</option>
                                        <option value="Franquia">Franquia</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Mensagem</label>
                                    <textarea 
                                        rows="3" 
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        onChange={(e) => setMessage(e.target.value)}
                                        value={message}
                                        required
                                    />
                                </div>
                                <div className="text-center">
                                    
                                    <button 
                                        type="submit" 
                                        className="bg-brand-yellow hover:bg-yellow-500 text-black font-bold w-full py-3 px-6 rounded-lg transition duration-300 flex-1 cursor-pointer">
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}