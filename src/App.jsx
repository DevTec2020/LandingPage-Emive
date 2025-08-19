import { useState, useEffect } from "react";

import LogoEmive from "./assets/LogoEmive.png"
import SuporteImg from "./assets/Suporte.png"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight, faCircleCheck as farCircleCheck } from "@fortawesome/free-regular-svg-icons";

function App() {
    const [scroll, setScroll] = useState(false);

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
    <div className="hidden sm:flex justify-end items-center gap-10 bg-gray-800">
        <div className="flex space-x-4">
            <a href="https://wa.me/5521967406645?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20de%20segurança" target="_blank" className="text-gray-400 hover:text-white flex items-center">
                <FontAwesomeIcon icon={faWhatsapp} className="mr-1 text-xl" /> (21) 96740-6645
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
    <header className="fixed mt-7 top-0 left-0 w-full z-50">
        <div className="container flex justify-between items-center mx-auto rounded-full shadow-md p-2 bg-black/50 backdrop-blur-md text-white">
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
                    <a href="#contato" className="bg-brand-yellow text-primary hover:bg-white py-3 px-5 rounded-full transition duration-300">
                        <span>Fale conosco</span>
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2"/>
                    </a>
                </nav>
                <button className="md:hidden text-xl">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
        </div>

    </header>

    {/* Section 1: Hero (Chamativa) */}
    <section id="home" className="hero-bg text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-yellow">Proteja o que é mais importante</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Soluções completas em segurança eletrônica para sua casa ou comércio. Tecnologia avançada e monitoramento 24h.</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
                <a href="#contato" className="bg-brand-yellow hover:bg-yellow-500 text-primary font-bold py-3 px-8 rounded-full transition duration-300">Solicitar Orçamento</a>
                <a href="#contato" className="bg-transparent hover:bg-white hover:text-primary border-2 border-white text-white font-bold py-3 px-8 rounded-full transition duration-300">Seja Franqueado</a>
            </div>
        </div>
    </section>

    {/* Section 2: Proteção (Proposta de valor) */}
    <section id="protecao" className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-yellow mb-12">Nossas Soluções de Proteção</h2>
            
            <div className="flex flex-col md:flex-row gap-12 mb-16">
                <div className="md:w-1/2">
                    <img src={SuporteImg} 
                         alt="Nosso Especialista" className="w-full h-full rounded-lg shadow-lg border-4 border-brand-yellow"/>
                </div>
                <div className="md:w-1/2 font-semibold">
                    <h3 className="text-2xl font-bold text-brand-yellow mb-6">Segmentos que Atendemos</h3>
                    <ul className="space-y-4 text-lg">
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
                </div>
            </div>

            
            
            <div className="mt-12 text-center">
                <p className="text-lg max-w-3xl mx-auto mb-8">Nossos sistemas são personalizados para atender às necessidades específicas de cada cliente, garantindo a melhor relação custo-benefício do mercado.</p>
                <a href="#contato" className="bg-brand-yellow hover:bg-secondary text-black font-bold py-3 px-8 rounded-2xl transition duration-300 inline-block">Falar com Vinícios Hafner</a>
            </div>
        </div>
    </section>

    {/* Section 3: Depoimentos */}
    <section id="depoimentos" className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="testimonial-card bg-secondary rounded-lg p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xl">J</div>
                        <div className="ml-4">
                            <h4 className="font-bold">João Silva</h4>
                            <p className="text-sm text-gray-300">Dono de Loja</p>
                        </div>
                    </div>
                    <p className="italic">"Depois de instalar o sistema da SecureTech, me sinto muito mais seguro. O atendimento foi excelente e o sistema funciona perfeitamente."</p>
                    <div className="mt-4 text-accent">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                
                {/* Testimonial 2 */}
                <div className="testimonial-card bg-secondary rounded-lg p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xl">M</div>
                        <div className="ml-4">
                            <h4 className="font-bold">Maria Oliveira</h4>
                            <p className="text-sm text-gray-300">Residencial</p>
                        </div>
                    </div>
                    <p className="italic">"A equipe foi muito atenciosa e explicou tudo sobre o funcionamento. Já recomendei para vários vizinhos e todos estão satisfeitos."</p>
                    <div className="mt-4 text-accent">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                
                {/* Testimonial 3 */}
                <div className="testimonial-card bg-secondary rounded-lg p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xl">C</div>
                        <div className="ml-4">
                            <h4 className="font-bold">Carlos Souza</h4>
                            <p className="text-sm text-gray-300">Franqueado</p>
                        </div>
                    </div>
                    <p className="italic">"Ser franqueado da SecureTech foi a melhor decisão que tomei. O suporte é excelente e os produtos têm qualidade comprovada."</p>
                    <div className="mt-4 text-accent">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
            
            <div className="mt-12 text-center">
                <a href="#contato" className="bg-accent hover:bg-yellow-500 text-primary font-bold py-3 px-8 rounded-full transition duration-300 inline-block">Quero Proteção Também</a>
            </div>
        </div>
    </section>

    {/* Section 4: Formulário */}
    <section id="contato" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/2 bg-primary text-white p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
                        <p className="mb-6">Preencha o formulário ao lado e nossa equipe entrará em contato para oferecer a melhor solução em segurança para sua necessidade.</p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <i className="fas fa-phone-alt mr-4 text-accent"></i>
                                <span>(11) 9999-9999</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-envelope mr-4 text-accent"></i>
                                <span>contato@securetech.com.br</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-map-marker-alt mr-4 text-accent"></i>
                                <span>Av. Paulista, 1000 - São Paulo/SP</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12">
                        <form id="leadForm" className="space-y-4">
                            <div>
                                <label for="nome" className="block text-gray-700 font-medium mb-2">Nome Completo</label>
                                <input type="text" id="nome" name="nome" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required/>
                            </div>
                            <div>
                                <label for="email" className="block text-gray-700 font-medium mb-2">E-mail</label>
                                <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required/>
                            </div>
                            <div>
                                <label for="telefone" className="block text-gray-700 font-medium mb-2">Telefone</label>
                                <input type="tel" id="telefone" name="telefone" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required/>
                            </div>
                            <div>
                                <label for="tipo" className="block text-gray-700 font-medium mb-2">Você é:</label>
                                <select id="tipo" name="tipo" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required>
                                    <option value="" disabled selected>Selecione uma opção</option>
                                    <option value="residencial">Proprietário Residencial</option>
                                    <option value="comercial">Dono de Comércio</option>
                                    <option value="franqueado">Interessado em Franquia</option>
                                </select>
                            </div>
                            <div>
                                <label for="mensagem" className="block text-gray-700 font-medium mb-2">Mensagem</label>
                                <textarea id="mensagem" name="mensagem" rows="3" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <button type="submit" name="cotacao" className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex-1">
                                    Solicitar Cotação
                                </button>
                                <button type="submit" name="franquia" className="bg-accent hover:bg-yellow-500 text-primary font-bold py-3 px-6 rounded-lg transition duration-300 flex-1">
                                    Quero Ser Franqueado
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <i className="fas fa-shield-alt text-accent text-2xl"></i>
                        <span className="text-xl font-bold">SecureTech</span>
                    </div>
                    <p className="text-gray-400">Soluções completas em segurança eletrônica para residências e comércios.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
                    <ul className="space-y-2">
                        <li><a href="#home" className="text-gray-400 hover:text-white transition">Início</a></li>
                        <li><a href="#protecao" className="text-gray-400 hover:text-white transition">Soluções</a></li>
                        <li><a href="#depoimentos" className="text-gray-400 hover:text-white transition">Depoimentos</a></li>
                        <li><a href="#contato" className="text-gray-400 hover:text-white transition">Contato</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Produtos</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition">Câmeras de Segurança</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition">Alarmes</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition">Cercas Elétricas</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition">Monitoramento</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white text-xl transition"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white text-xl transition"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white text-xl transition"><i className="fab fa-linkedin"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white text-xl transition"><i className="fab fa-youtube"></i></a>
                    </div>
                    <div className="mt-4">
                        <a href="https://wa.me/5511999999999" className="text-gray-400 hover:text-white flex items-center">
                            <i className="fab fa-whatsapp mr-2 text-green-500"></i> (11) 99999-9999
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                <p>&copy; 2023 SecureTech. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>

    
    </>
  )
}

export default App;
