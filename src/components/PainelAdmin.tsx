import React, { useState } from 'react';

const tabs = [
  { label: 'Header', value: 'header' },
  { label: 'Footer', value: 'footer' },
  { label: 'Projetos', value: 'projetos' },
  { label: 'Depoimentos', value: 'depoimentos' },
];

interface HeaderLink {
  label: string;
  url: string;
}

const PainelAdmin: React.FC = () => {
  const [tab, setTab] = useState('header');

  // Header state
  const [logo, setLogo] = useState<string | null>(null);
  const [titulo, setTitulo] = useState('');
  const [links, setLinks] = useState<HeaderLink[]>([{ label: '', url: '' }]);

  // Função para upload de logo
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setLogo(ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Funções para manipular links
  const handleLinkChange = (idx: number, field: keyof HeaderLink, value: string) => {
    setLinks((prev) => prev.map((l, i) => i === idx ? { ...l, [field]: value } : l));
  };
  const addLink = () => setLinks((prev) => [...prev, { label: '', url: '' }]);
  const removeLink = (idx: number) => setLinks((prev) => prev.filter((_, i) => i !== idx));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col">
      {/* Cabeçalho fixo */}
      <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between sticky top-0 z-10">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700">Painel Administrativo</h1>
        <span className="text-xs md:text-sm text-gray-400">/CWpainel</span>
      </header>

      {/* Abas */}
      <nav className="flex justify-center mt-6 mb-8 gap-2 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t.value}
            className={`px-6 py-2 rounded-t-lg font-semibold transition-all duration-200 border-b-2 focus:outline-none
              ${tab === t.value
                ? 'bg-white shadow text-blue-700 border-blue-600'
                : 'bg-blue-100 text-blue-500 border-transparent hover:bg-white hover:text-blue-700 hover:border-blue-300'}`}
            onClick={() => setTab(t.value)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      {/* Conteúdo das abas */}
      <main className="flex-1 flex flex-col items-center">
        <section
          className="bg-white rounded-lg shadow p-6 md:p-8 w-full max-w-2xl mx-auto min-h-[300px] transition-all duration-300"
          key={tab}
        >
          {tab === 'header' && (
            <form className="space-y-6 animate-fade">
              <h2 className="text-xl font-bold mb-4">Editar Header</h2>
              {/* Logo */}
              <div>
                <label className="block font-medium mb-1">Logo:</label>
                <input type="file" accept="image/*" onChange={handleLogoChange} />
                {logo && (
                  <div className="mt-2">
                    <img src={logo} alt="Logo preview" className="h-16 object-contain" />
                  </div>
                )}
              </div>
              {/* Título */}
              <div>
                <label className="block font-medium mb-1">Título:</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  value={titulo}
                  onChange={e => setTitulo(e.target.value)}
                  placeholder="Digite o título do site"
                />
              </div>
              {/* Links de navegação */}
              <div>
                <label className="block font-medium mb-1">Links de navegação:</label>
                <div className="space-y-2">
                  {links.map((link, idx) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <input
                        type="text"
                        className="border rounded px-2 py-1 flex-1"
                        value={link.label}
                        onChange={e => handleLinkChange(idx, 'label', e.target.value)}
                        placeholder="Nome do link"
                      />
                      <input
                        type="text"
                        className="border rounded px-2 py-1 flex-1"
                        value={link.url}
                        onChange={e => handleLinkChange(idx, 'url', e.target.value)}
                        placeholder="URL do link"
                      />
                      <button
                        type="button"
                        className="text-red-500 hover:text-red-700 px-2"
                        onClick={() => removeLink(idx)}
                        disabled={links.length === 1}
                        title="Remover link"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="mt-2 px-4 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                    onClick={addLink}
                  >
                    + Adicionar link
                  </button>
                </div>
              </div>
            </form>
          )}
          {tab === 'footer' && <div className="animate-fade">Aqui você poderá editar o <b>Footer</b> do site. (em breve)</div>}
          {tab === 'projetos' && <div className="animate-fade">Aqui você poderá editar os <b>Projetos</b> do site. (em breve)</div>}
          {tab === 'depoimentos' && <div className="animate-fade">Aqui você poderá editar os <b>Depoimentos</b> do site. (em breve)</div>}
        </section>
      </main>

      {/* Rodapé */}
      <footer className="text-center text-xs text-gray-400 py-4 mt-8">
        &copy; {new Date().getFullYear()} Painel Administrativo Luminus. Todos os direitos reservados.
      </footer>

      {/* Animação fade-in */}
      <style>{`
        .animate-fade {
          animation: fadeIn 0.5s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default PainelAdmin; 