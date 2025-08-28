import Kit from "../assets/Produtos-Emive2.png"

export default function hero(){
    return (
        <>
        {/* Section 1: Hero (Chamativa) */}
            <section id="home" className="primary-bg text-white py-30 md:py-42">
                <div className="container flex flex-col md:flex-row justify-center items-center mx-auto px-4">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-7xl md:text-8xl font-extrabold text-brand-yellow leading-tight">A Nº1</h1>
                        <h2 className="text-2xl md:text-3xl font-semibold mt-2">EM SEGURANÇA ELETRÔNICA NA AMÉRICA LATINA</h2>
                        <p className="text-lg md:text-xl mt-4 text-brand-gray-light">protegendo milhares de famílias e empresas todos os dias.</p>
                        
        
                        <div className="flex flex-col md:flex-row mt-10 md:mt-20 gap-4">
                            <a href="#contato" className="bg-brand-yellow hover:bg-white text-black font-bold py-3 px-8 rounded-full transition duration-300">Solicitar Orçamento</a>
                            <a href="#contato" className="bg-transparent hover:bg-white hover:text-black border-2 border-white text-white font-bold py-3 px-8 rounded-full transition duration-300">Seja Franqueado</a>
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