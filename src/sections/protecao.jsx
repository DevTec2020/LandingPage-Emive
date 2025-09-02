import CardSolucao from "../components/card_solucao.jsx";
import CardProduto from "../components/card_produto.jsx"

//PRODUTOS
import ProdApp from "../assets/Produtos/APP.webp";
import ProdAlarme from "../assets/Produtos/ALARME.JPG";
import ProdCamera from "../assets/Produtos/CAMERA.JPG";
import ProdControle from "../assets/Produtos/CONTROLE.JPG";
import ProdMagnetico from "../assets/Produtos/SENSOR_MAGNETICO.JPG";
import ProdPresenca from "../assets/Produtos/SENSOR_PRESENCA.JPG";
import ProdSirene from "../assets/Produtos/SIRENE.JPG";


import SuporteImg from "../assets/Suporte.png"
import MaletaImg from "../assets/Maleta.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faLock, faFingerprint, faEye, faCircle, faPeopleGroup, faShield, faClock, faMobile } from "@fortawesome/free-solid-svg-icons";

export default function Protecao(){
    return(
        <>
        {/* Section 2: Proteção (Proposta de valor) */}
            <section id="protecao" className="py-16 bg-white text-black">

                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-brand-yellow mb-12">Nossas Soluções de Proteção</h2>
                    
                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 items-stretch justify-items-center p-4">
                        {/* Coluna da imagem */}
                        <div className="flex justify-center items-center h-full">
                            <img 
                            src={SuporteImg} 
                            alt="Nosso Especialista" 
                            className="max-h-96 w-auto object-cover rounded-lg shadow-lg border-4 border-brand-yellow"
                            />
                        </div>

                        {/* Coluna do texto */}
                        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left font-semibold max-w-xl gap-6">
                            <h3 className="text-3xl md:text-5xl mt-7">
                            Alta tecnologia para segurança pessoal e patrimonial.
                            </h3>
                            <p className="text-2xl md:text-3xl font-normal max-w-4/5">
                            Instalação rápida em 28 minutos, sem obras e sem sujeira.
                            </p>
                            <a href="#contato" className="bg-brand-yellow hover:bg-black hover:transition text-black hover:text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
                            Faça seu Orçamento
                            </a>
                        </div>
                    </div>
   
                    
                    {/* Cards */}
                    <div className="md:flex mt-15 justify-center">
                        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
                            <CardSolucao icone={faEye} text="Patrimônio monitorado 24H"/>
                            <CardSolucao icone={faCircle} text="Botão de pânico para emergências"/>
                            <CardSolucao icone={faPeopleGroup} text="Gestão fluxo de pessoas e equipe"/>
                            <CardSolucao icone={faShield} text="Uso da marca EMIVE como fator inibitivo"/>
                            <CardSolucao icone={faVideo} text="Gerenciamento remoto via vídeo com áudio"/>
                            <CardSolucao icone={faLock} text="Para sua residência ou empresa"/>
                            <CardSolucao icone={faClock} text="Suporte técnico 24H"/>
                            <CardSolucao icone={faMobile} text="Aplicativo EMIVE. Segurança na palma da mão"/>
                        </div>
                        
                    </div>
                        
                    {/* APRESENTAÇÃO KIT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start justify-items-center p-6 mt-24">
                    
                        {/* Coluna da maleta */}
                        <div className="flex flex-col items-center text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-gray max-w-md">
                            NOSSO KIT SMART PRONTO PARA USO ESTÁ PREPARADO PARA TE PROTEGER DE TODAS AS MANEIRAS
                            </h2>
                            <img 
                            src={MaletaImg} 
                            className="h-72 md:h-96 mt-8 object-contain" 
                            alt="Maleta Kit" 
                            />
                        </div>

                        {/* Coluna dos produtos */}
                        <div className="w-full max-w-lg">
                            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 max-h-[650px] overflow-y-auto pr-2">
                                <CardProduto prod={ProdApp} title="APLICATIVO" desk="MAIS SEGURA COM REDUNDÂNCIA."/>
                                <CardProduto prod={ProdAlarme} title="CENTRAL DE ALARME" desk="MAIS SEGURA COM REDUNDÂNCIA."/>
                                <CardProduto prod={ProdCamera} title="CÂMERA DE SEGURANÇA" desk="MAIS SEGURA COM REDUNDÂNCIA."/>
                                <CardProduto prod={ProdControle} title="CONTROLE REMOTO" desk="MAIS SEGURA COM REDUNDÂNCIA."/>
                                <CardProduto prod={ProdMagnetico} title="SENSOR MAGNÉTICO" desk="MAIS SEGURA COM REDUNDÂNCIA."/>
                                <CardProduto prod={ProdPresenca} title="SENSOR DE PRESENÇA" desk="MAIS SEGURA COM REDUNDÂNCIA."/>
                                <CardProduto prod={ProdSirene} title="SIRENE DE ALTA POTÊNCIA" desk="MAIS SEGURA COM REDUNDÂNCIA."/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center">
                     <p className="text-xl md:text-3xl mt-12 text-center font-semibold max-w-3xl mx-auto mb-8">Nossos sistemas são personalizados para atender às necessidades específicas de cada cliente, garantindo a melhor relação custo-benefício do mercado.</p>
                     <a href="#contato" className="bg-brand-yellow hover:bg-black hover:transition text-black hover:text-white font-bold py-3 px-8 rounded-2xl transition duration-300 inline-block">Faça seu Orçamento</a>
                    </div>
                </div>
            </section>
        </>
    )
}