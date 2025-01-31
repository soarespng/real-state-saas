import PropertyList from "./components/PropertyList";

export default async function Home() {
  const res = await fetch('http://localhost:3001/properties', { cache: 'no-store' });
  const data = await res.json();

  return (
    <div>
      <header className="bg-gray-100 text-center py-20 bg-[url('https://zkmtielejawbbmmlqzot.supabase.co/storage/v1/object/public/banner/banner.jpeg')]">
        <h1 className="text-4xl font-bold">Forma fácil de encontrar a propriedade perfeita</h1>
        <p className="mt-4">Oferecemos um serviço completo para venda, compra e aluguel de imóveis.</p>
        <div className="mt-8 flex justify-center space-x-4">
          <div className="relative w-1/3">
            <input
              className="border p-3 rounded w-full pl-10"
              placeholder="Buscar por localização..."
            />
            <span className="absolute left-3 top-3 text-gray-500">
              <i className="fas fa-map-marker-alt"></i>
            </span>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded hover:opacity-80">
            <i className="fas fa-search mr-2"></i> Buscar
          </button>
        </div>
      </header>

      <div className="container mx-auto my-10">
        <h2 className="text-2xl font-bold mb-4">Propriedades recentemente adicionadas</h2>
        <PropertyList properties={data.properties} numItems={6} />
      </div>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Encontre seu melhor Imóvel</h3>
            <p>Oferecemos um serviço mundial para venda, compra e aluguel de propriedades.</p>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 mt-4 rounded hover:opacity-80">
              Entre em Contato
            </button>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Nossa Empresa</h3>
            <ul>
              <li><a href="#" className="text-gray-400">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400">Carreiras</a></li>
              <li><a href="#" className="text-gray-400">Blog</a></li>
              <li><a href="#" className="text-gray-400">Política de Privacidade</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Entre em Contato</h3>
            <p className="text-gray-400">123 Avenida Imobiliária, Nova York, NY</p>
            <p className="text-gray-400">Telefone: +1 800 123 456</p>
            <p className="text-gray-400">Email: info@realestate.com</p>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500">© 2024 Imobiliária. Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}
