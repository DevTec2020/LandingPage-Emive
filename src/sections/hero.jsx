import Kit from "../assets/Produtos-Emive2.png"

export default function hero(){
    return (
        <>
        {/* Section 1: Hero (Chamativa) */}
            <section id="home" className="primary-bg text-white py-30 md:py-46">
                <div className="container flex flex-col md:flex-row justify-center items-center mx-auto px-4">
                    <div className="md:w-2xl text-center md:text-justify">
                        <h1 className="text-center text-3xl md:text-justify md:text-6xl font-semibold">
                            <span className="text-brand-yellow">A MAIOR NO MERCADO DE SEGURANÇA.</span> Mais de 45 anos protegendo famílias e empresas com confiança e inovação.
                        </h1>                     
                                             
        
                        <div className="flex flex-col md:flex-row mt-10 md:mt-20 gap-4">
                            <a href="#contato" className="bg-brand-yellow hover:bg-white text-black font-bold py-3 px-8 rounded-full transition duration-300">Solicitar Orçamento</a>
                            <a href="https://wa.me/5521967406645?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20ser%20franqueado%20da%20Emive" target="_blank" 
                                className="bg-transparent hover:bg-white hover:text-black border-2 border-white text-white font-bold py-3 px-8 rounded-full transition duration-300">
                                    Seja Franqueado
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-10 md:mt-0">
                        <img src={Kit} alt="Kit de Segurança" />
                    </div>
                </div>
            </section>
        </>
    )
}