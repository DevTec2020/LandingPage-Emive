export default function CardProduto({ prod, title }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-brand-gray-light flex items-center gap-4 w-full h-36">
      
      {/* Imagem com tamanho fixo */}
      <div className="flex justify-center items-center h-24 w-24">
        <img 
          src={prod} 
          alt={title} 
          className="max-h-20 max-w-full object-contain"
        />
      </div>

      {/* Texto alinhado à esquerda com largura fixa */}
      <div className="flex flex-col justify-center text-left w-48">
        <h1 className="text-lg font-bold text-brand-gray-dark leading-tight">
          {title}
        </h1>
      </div>
    </div>
  );
}
