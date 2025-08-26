import Kit from "../assets/Produtos-Emive2.png"

export default function hero(){
    return (
        <>
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
        </>
    )
}