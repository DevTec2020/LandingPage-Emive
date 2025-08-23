import { useState, useEffect} from "react";
import emailjs from "@emailjs/browser"

import LogoEmive from "./assets/LogoEmive.png"
import SuporteImg from "./assets/Suporte.png"
import Kit from "./assets/Produtos-Emive2.png"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowRight, faPhone, faBars, faVideo, faLock, faFingerprint, faStar, faStarHalfAlt, faCamera, faBell, faEye } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck as farCircleCheck } from "@fortawesome/free-regular-svg-icons";

function App() {
    const [scroll, setScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
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

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        
    },[]);

  return (
    <>
    {/* WhatsApp Float Button */}
    <div className="floating-whatsapp">
        <a href="https://wa.me/5521967406645?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20de%20segurança" 
           className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
           target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} className="text-2xl"/>
        </a>
    </div>

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

    {/* Section 1: Hero (Chamativa) */}
    <section id="home" className="primary-bg text-white py-30 md:py-42">
        <div className="container flex flex-col md:flex-row justify-center items-center mx-auto px-4">
            <div className="md:w-1/2">
                <h1 className="text-4xl font-bold mb-5 text-brand-yellow">
                    <span>CONHEÇA O NOVO CONCEITO</span>
                    <p>
                        <span className="text-white">SMART </span>
                        PRONTO PARA USO.                        
                    </p>
                </h1>
                <h2 className="mb-10 md:mb-20">
                    Residência | Comércio | Indústria
                </h2>

                <div className="flex flex-col md:flex-row  gap-4">
                    <a href="#contato" className="bg-brand-yellow hover:bg-white text-black font-bold py-3 px-8 rounded-full transition duration-300">Solicitar Orçamento</a>
                    <a href="#contato" className="bg-transparent hover:bg-white hover:text-black border-2 border-white text-white font-bold py-3 px-8 rounded-full transition duration-300">Seja Franqueado</a>
                </div>
            </div>
            <div className="md:w-1/2">
                <img src={Kit} alt="" />
            </div>
        </div>
    </section>

    {/* Section 2: Proteção (Proposta de valor) */}
    <section id="protecao" className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-brand-yellow mb-12">Nossas Soluções de Proteção</h2>
            
            <div className="flex flex-col md:flex-row gap-40 mb-16">
                <div className="md:w-1/2">
                    <img src={SuporteImg} 
                         alt="Nosso Especialista" 
                         className="w-full h-full rounded-lg shadow-lg border-4 border-brand-yellow"
                    />
                </div>

                <div className="md:w-1/2 font-semibold flex flex-col justify-center items-center text-center md:block md:text-left">
                    <h3 className="text-3xl font-bold text-brand-yellow mb-6">Segmentos que Atendemos</h3>
                    
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={farCircleCheck} className="mr-3 mt-1 text-brand-yellow"/>
                            <span>Residências e Condomínios</span>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={farCircleCheck} className="mr-3 mt-1 text-brand-yellow"/>
                            <span>Comércios e Lojas</span>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={farCircleCheck} className="mr-3 mt-1 text-brand-yellow"/>
                            <span>Indústrias e Galpões</span>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={farCircleCheck} className="mr-3 mt-1 text-brand-yellow"/>
                            <span>Escritórios Corporativos</span>
                        </li>
                    </ul>
                    
                    {/* Cards */}
                    <div className=" hidden md:flex mt-24">
                        <div class="grid md:grid-cols-3 gap-8">
                            {/* Product 1 */}
                            <div class="bg-brand-yellow p-2 rounded-lg shadow-md border-2 border-accent text-center flex flex-col justify-center">
                                <div class="text-black mb-3">
                                    <FontAwesomeIcon icon={faVideo} className="text-4xl text-black"/>
                                </div>
                                <h3 class="text-md font-bold text-black mb-2">Sistema de CFTV</h3>
                            </div>
                            
                            {/* Product 2 */}
                            <div class="bg-brand-yellow p-2 rounded-lg shadow-md border-2 border-accent text-center flex flex-col justify-center">
                                <div class="text-black mb-4">
                                    <FontAwesomeIcon icon={faLock} className="text-4xl text-black"/>
                                </div>
                                <h3 class="text-xl font-bold text-black mb-3">Alarme Monitorado</h3>
                            </div>
                            
                            {/* Product 3 */}
                            <div class="bg-brand-yellow p-2 rounded-lg shadow-md border-2 border-accent text-center flex flex-col justify-center">
                                <div class="text-black mb-4">
                                    <FontAwesomeIcon icon={faFingerprint} className="text-4xl text-black"/>
                                </div>
                                <h3 class="text-xl font-bold text-black mb-3">Controle de Acesso</h3>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            
            
            <div className="mt-12 text-center">
                <p className="text-lg max-w-3xl mx-auto mb-8">Nossos sistemas são personalizados para atender às necessidades específicas de cada cliente, garantindo a melhor relação custo-benefício do mercado.</p>
                <a href="#contato" className="bg-brand-yellow hover:bg-white hover:transition text-black font-bold py-3 px-8 rounded-2xl transition duration-300 inline-block">Faça seu Orçamento</a>
            </div>
        </div>
    </section>

    {/* Section 3: Depoimentos */}
    <section id="depoimentos" className="primary-bg py-16 text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-brand-yellow mb-12">O que nossos clientes dizem</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="testimonial-card bg-brand-gray-dark rounded-lg p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center text-black font-bold text-xl">J</div>
                        <div className="ml-4">
                            <h4 className="font-bold">João Silva</h4>
                            <p className="text-sm text-brand-gray-light">Dono de Loja</p>
                        </div>
                    </div>
                    <p className="italic min-h-18">"Depois de instalar o sistema da Emive, me sinto muito mais seguro. O atendimento com Vinícius foi excelente e o sistema funciona perfeitamente."</p>
                    <div className="mt-4 text-brand-yellow">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                </div>
                
                {/* Testimonial 2 */}
                <div className="testimonial-card bg-brand-gray-dark rounded-lg p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center text-black font-bold text-xl">M</div>
                        <div className="ml-4">
                            <h4 className="font-bold">Maria Oliveira</h4>
                            <p className="text-sm text-brand-gray-light">Residencial</p>
                        </div>
                    </div>
                    <p className="italic min-h-18">"O Vinícius foi muito atenciosa e explicou tudo sobre o funcionamento. Já recomendei para vários vizinhos e todos estão satisfeitos."</p>
                    <div className="mt-4 text-brand-yellow">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                </div>
                
                {/* Testimonial 3 */}
                <div className="testimonial-card bg-brand-gray-dark rounded-lg p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center text-black font-bold text-xl">C</div>
                        <div className="ml-4">
                            <h4 className="font-bold">Carlos Souza</h4>
                            <p className="text-sm text-brand-gray-light">Franqueado</p>
                        </div>
                    </div>
                    <p className="italic min-h-18">"Ser franqueado da Emive foi a melhor decisão que tomei. O suporte é excelente e os produtos têm qualidade comprovada."</p>
                    <div className="mt-4 text-brand-yellow">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStarHalfAlt}/>
                    </div>
                </div>
            </div>
            
            <div className="mt-12 text-center">
                <a href="#contato" className="bg-brand-yellow hover:bg-white hover:transition text-black font-bold py-3 px-8 rounded-2xl transition duration-300 inline-block">Quero Proteção Também</a>
            </div>
        </div>
    </section>

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
                                    
                                    <option value="" disabled selected>Selecione uma opção</option>
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

    {/* Footer */}
    <footer className="bg-black/95 text-white py-8">
        <div className="container mx-auto px-4">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
                            <i className="fas fa-shield-alt text-gray-900 text-lg"></i>
                        </div>
                        <span className="text-xl font-bold">MVX CONSULTORIA</span>
                    </div>
                    <p className="text-gray-400 max-w-xs">Soluções completas em segurança eletrônica para residências e comércios.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
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
                            <a href="https://wa.me/5521967406645" target="_blank" class="text-gray-400 hover:text-white transition">
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

    </>
  )
}

export default App;
