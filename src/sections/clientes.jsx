import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";

export default function Clientes(){
    return (
        <>
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
                            <p className="italic min-h-18">"Depois de instalar o sistema da Emive, me sinto muito mais seguro. O atendimento com Vinicius foi excelente e o sistema funciona perfeitamente."</p>
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
                            <p className="italic min-h-18">"O Vinicius foi muito atencioso e explicou tudo sobre o funcionamento. Já recomendei para vários vizinhos e todos estão satisfeitos."</p>
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
        </>
    )
}