import SuporteImg from "../assets/Suporte.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faLock, faFingerprint } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck as farCircleCheck } from "@fortawesome/free-regular-svg-icons";

export default function Protecao(){
    return(
        <>
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
                                <div className="grid md:grid-cols-3 gap-8">
                                    {/* Product 1 */}
                                    <div className="bg-brand-yellow p-2 rounded-lg shadow-md border-2 border-accent text-center flex flex-col justify-center">
                                        <div className="text-black mb-3">
                                            <FontAwesomeIcon icon={faVideo} className="text-4xl text-black"/>
                                        </div>
                                        <h3 className="text-md font-bold text-black mb-2">Sistema de CFTV</h3>
                                    </div>
                                    
                                    {/* Product 2 */}
                                    <div className="bg-brand-yellow p-2 rounded-lg shadow-md border-2 border-accent text-center flex flex-col justify-center">
                                        <div className="text-black mb-4">
                                            <FontAwesomeIcon icon={faLock} className="text-4xl text-black"/>
                                        </div>
                                        <h3 className="text-xl font-bold text-black mb-3">Alarme Monitorado</h3>
                                    </div>
                                    
                                    {/* Product 3 */}
                                    <div className="bg-brand-yellow p-2 rounded-lg shadow-md border-2 border-accent text-center flex flex-col justify-center">
                                        <div className="text-black mb-4">
                                            <FontAwesomeIcon icon={faFingerprint} className="text-4xl text-black"/>
                                        </div>
                                        <h3 className="text-xl font-bold text-black mb-3">Controle de Acesso</h3>
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
        </>
    )
}