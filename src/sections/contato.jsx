import { useState, useEffect} from "react";
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faInstagram, faFacebookF, faYoutube} from '@fortawesome/free-brands-svg-icons'

export default function Contato() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [perfil, setPerfil] = useState("");
    const [message, setMessage] = useState("");

    const formatPhone = (value) => {
        if (!value) return "";

        // remove tudo que não for número
        value = value.replace(/\D/g, "");
        
        // limita no máximo 11 dígitos
        if (value.length > 11) value = value.slice(0, 11);

        if (value.length <= 2) {
            return `(${value}`;
        } else if (value.length <= 6) {
            return value.replace(/^(\d{2})(\d+)/, "($1) $2");
        } else if (value.length <= 10) {
            return value.replace(/^(\d{2})(\d{4})(\d+)/, "($1) $2-$3");
        } else {
            return value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
        }
    };


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
            setName("")
            setEmail("")
            setPhone("")
            setPerfil("")
            setMessage("")
            
            toast.success("Email enviado com sucesso!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });

            


        }, (error) => {
            console.log("Erro:", error);
            toast.error("Erro ao enviar email. Por favor, tente novamente.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        });
        
    };

    return (
        <section id="contato" className="py-16 bg-brand-gray-light">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-12">Entre em Contato</h2>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2 ">
                        <form onSubmit={sendEmail} className="bg-white p-8 rounded-xl shadow-md">
                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Nome Completo</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    required
                                />
                            </div>
                            
                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">E-mail</label>
                                <input 
                                    type="email" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                />
                            </div>
                            
                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Telefone</label>
                                <input 
                                    type="tel" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                                    value={phone}
                                    required    
                                />
                            </div>
                            <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-2">Interessado em:</label>
                                    <select  
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow" 
                                        onChange={(e) => setPerfil(e.target.value)}
                                        value={perfil}
                                        required>
                                        
                                        <option value="" disabled>Selecione uma opção</option>
                                        <option value="Proteção Residencial" className="hover:text-brand-yellow">Proteção Residencial</option>
                                        <option value="Proteção Comercial">Proteção Comercial</option>
                                        <option value="Franquia">Franquia</option>
                                    </select>
                                </div>
                            
                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Mensagem</label>
                                <textarea 
                                    rows={4} 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    required
                                />
                            </div>
                            
                            <button type="submit" className="w-full bg-brand-yellow border-2 text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-300 cursor-pointer">Enviar Mensagem</button>
                        </form>
                    </div>
                    
                    <div className="lg:w-1/2 animate__animated animate__fadeInRight">
                        <div className="bg-white p-8 rounded-xl shadow-md h-full">
                            <h3 className="text-xl font-bold text-black mb-6">Nossas Informações</h3>
                            
                            
                            
                            <div className="flex items-start mb-8">
                                <div className="bg-brand-yellow p-3 rounded-lg mr-4 text-black">
                                    <FontAwesomeIcon icon={faPhoneAlt} className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Telefone</h4>
                                    <p className="text-gray-600">(21) 96740-6645 (WhatsApp)</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start mb-8">
                                <div className="bg-brand-yellow p-3 rounded-lg mr-4 text-black">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                                </div>
                                <div className="w-0 flex-1"> {/* garante que o conteúdo respeite o container */}
                                    <h4 className="font-bold text-gray-800">E-mail</h4>
                                    <a 
                                    href="mailto:Marcus.hafner@emivefranquia.com.br" 
                                    className="text-gray-600 break-all hover:underline"
                                    >
                                    Marcus.hafner@emivefranquia.com.br
                                    </a>
                                </div>
                            </div>

                            
                            <div className="flex items-start">
                                <div className="bg-brand-yellow p-3 rounded-lg mr-4 text-black">
                                    <FontAwesomeIcon icon={faClock} className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Horário de Atendimento</h4>
                                    <p className="text-gray-600">Segunda à Sexta: 6h às 22h</p><p></p>
                                </div>
                            </div>
                            
                            <div className="mt-12">
                                <h4 className="font-bold text-gray-800 mb-4">Siga-nos</h4>
                                <div className="flex space-x-4">
                                    <a href="https://www.linkedin.com/in/vinicius-hafner-segurancaeletronica/" target='_blank' className="w-10 h-10 bg-brand-yellow/70 rounded-full flex items-center justify-center text-brand-gray-dark hover:bg-brand-yellow transition">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                    <a href="https://www.instagram.com/viniciushafner.franqueado" target='_blank' className="w-10 h-10 bg-brand-yellow/70 rounded-full flex items-center justify-center text-brand-gray-dark hover:bg-brand-yellow transition">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="#" target='_blank' className="w-10 h-10 bg-brand-yellow/70 rounded-full flex items-center justify-center text-brand-gray-dark hover:bg-brand-yellow transition">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                    <a href="#" target='_blank' className="w-10 h-10 bg-brand-yellow/70 rounded-full flex items-center justify-center text-brand-gray-dark hover:bg-brand-yellow transition">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}