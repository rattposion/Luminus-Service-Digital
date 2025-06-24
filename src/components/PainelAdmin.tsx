import React, { useState } from 'react';
import axios from 'axios';

const tabs = [
  { label: 'Header', value: 'header' },
  { label: 'Hero', value: 'hero' },
  { label: 'Sobre', value: 'sobre' },
  { label: 'Serviços', value: 'servicos' },
  { label: 'Projetos', value: 'projetos' },
  { label: 'Depoimentos', value: 'depoimentos' },
  { label: 'Footer', value: 'footer' },
];

interface HeaderLink {
  label: string;
  url: string;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('admin_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const PainelAdmin: React.FC = () => {
  const [tab, setTab] = useState('header');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');

  // Header state
  const [logo, setLogo] = useState<string | null>(null);
  const [titulo, setTitulo] = useState('');
  const [links, setLinks] = useState<HeaderLink[]>([{ label: '', url: '' }]);

  // Hero state
  const [heroTitle, setHeroTitle] = useState('');
  const [heroSubtitle, setHeroSubtitle] = useState('');
  const [heroStats, setHeroStats] = useState([
    { number: '', label: '' },
    { number: '', label: '' },
    { number: '', label: '' },
  ]);

  // Sobre state
  const [sobreTitle, setSobreTitle] = useState('');
  const [sobreParagraphs, setSobreParagraphs] = useState(['']);
  const [sobreFeatures, setSobreFeatures] = useState([
    { title: '', description: '' },
  ]);

  // Serviços state
  const [servicos, setServicos] = useState([
    { title: '', description: '', features: [''] },
  ]);

  // Projetos state
  const [projetos, setProjetos] = useState([
    { title: '', description: '', image: '', tags: [''], metrics: [{ key: '', value: '' }] },
  ]);

  // Depoimentos state
  const [depoimentos, setDepoimentos] = useState([
    { name: '', position: '', company: '', content: '', rating: 5, avatar: '' },
  ]);

  // Footer state
  const [footerText, setFooterText] = useState('');
  const [footerContacts, setFooterContacts] = useState([
    { type: 'email', value: '' },
    { type: 'phone', value: '' },
    { type: 'address', value: '' },
  ]);
  const [footerSocials, setFooterSocials] = useState([
    { name: '', href: '' },
  ]);
  const [footerServices, setFooterServices] = useState(['']);
  const [footerCompanyLinks, setFooterCompanyLinks] = useState(['']);

  // Carregar dados do backend ao iniciar
  React.useEffect(() => {
    setLoading(true);
    api.get('/')
      .then(res => {
        const data = res.data;
        setLogo(data.header.logo || null);
        setTitulo(data.header.titulo || '');
        setLinks(data.header.links || [{ label: '', url: '' }]);
        setHeroTitle(data.hero.title || '');
        setHeroSubtitle(data.hero.subtitle || '');
        setHeroStats(data.hero.stats || [
          { number: '', label: '' },
          { number: '', label: '' },
          { number: '', label: '' },
        ]);
        setSobreTitle(data.sobre.title || '');
        setSobreParagraphs(data.sobre.paragraphs || ['']);
        setSobreFeatures(data.sobre.features || [{ title: '', description: '' }]);
        setServicos(data.servicos || [{ title: '', description: '', features: [''] }]);
        setProjetos(data.projetos || [{ title: '', description: '', image: '', tags: [''], metrics: [{ key: '', value: '' }] }]);
        setDepoimentos(data.depoimentos || [{ name: '', position: '', company: '', content: '', rating: 5, avatar: '' }]);
        setFooterText(data.footer.text || '');
        setFooterContacts(data.footer.contacts || [
          { type: 'email', value: '' },
          { type: 'phone', value: '' },
          { type: 'address', value: '' },
        ]);
        setFooterSocials(data.footer.socials || [{ name: '', href: '' }]);
        setFooterServices(data.footer.services || ['']);
        setFooterCompanyLinks(data.footer.companyLinks || ['']);
      })
      .finally(() => setLoading(false));
  }, []);

  // Função para salvar dados no backend
  const salvarNoBackend = async () => {
    setSaving(true);
    setSaveMsg('Salvando...');
    try {
      await api.put('/', {
        header: { logo, titulo, links },
        hero: { title: heroTitle, subtitle: heroSubtitle, stats: heroStats },
        sobre: { title: sobreTitle, paragraphs: sobreParagraphs, features: sobreFeatures },
        servicos,
        projetos,
        depoimentos,
        footer: {
          text: footerText,
          contacts: footerContacts,
          socials: footerSocials,
          services: footerServices,
          companyLinks: footerCompanyLinks
        }
      });
      setSaveMsg('Salvo com sucesso!');
      setTimeout(() => setSaveMsg(''), 2000);
    } catch (e) {
      setSaveMsg('Erro ao salvar!');
      setTimeout(() => setSaveMsg(''), 2000);
    }
    setSaving(false);
  };

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
        {loading && <div className="text-blue-600 font-bold">Carregando dados...</div>}
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
          {tab === 'hero' && (
            <form className="space-y-6 animate-fade">
              <h2 className="text-xl font-bold mb-4">Editar Hero</h2>
              <div>
                <label className="block font-medium mb-1">Título principal:</label>
                <input type="text" className="w-full border rounded px-3 py-2" value={heroTitle} onChange={e => setHeroTitle(e.target.value)} placeholder="Título do Hero" />
              </div>
              <div>
                <label className="block font-medium mb-1">Subtítulo:</label>
                <input type="text" className="w-full border rounded px-3 py-2" value={heroSubtitle} onChange={e => setHeroSubtitle(e.target.value)} placeholder="Subtítulo do Hero" />
              </div>
              <div>
                <label className="block font-medium mb-1">Estatísticas:</label>
                {heroStats.map((stat, idx) => (
                  <div key={idx} className="flex gap-2 mb-2">
                    <input type="text" className="border rounded px-2 py-1 w-24" value={stat.number} onChange={e => setHeroStats(heroStats.map((s, i) => i === idx ? { ...s, number: e.target.value } : s))} placeholder="Número" />
                    <input type="text" className="border rounded px-2 py-1 flex-1" value={stat.label} onChange={e => setHeroStats(heroStats.map((s, i) => i === idx ? { ...s, label: e.target.value } : s))} placeholder="Legenda" />
                  </div>
                ))}
              </div>
            </form>
          )}
          {tab === 'sobre' && (
            <form className="space-y-6 animate-fade">
              <h2 className="text-xl font-bold mb-4">Editar Sobre</h2>
              <div>
                <label className="block font-medium mb-1">Título:</label>
                <input type="text" className="w-full border rounded px-3 py-2" value={sobreTitle} onChange={e => setSobreTitle(e.target.value)} placeholder="Título da seção Sobre" />
              </div>
              <div>
                <label className="block font-medium mb-1">Parágrafos:</label>
                {sobreParagraphs.map((p, idx) => (
                  <div key={idx} className="flex gap-2 mb-2">
                    <textarea className="border rounded px-2 py-1 flex-1" value={p} onChange={e => setSobreParagraphs(sobreParagraphs.map((v, i) => i === idx ? e.target.value : v))} placeholder="Parágrafo" />
                    <button type="button" className="text-red-500 px-2" onClick={() => setSobreParagraphs(sobreParagraphs.filter((_, i) => i !== idx))} disabled={sobreParagraphs.length === 1}>×</button>
                  </div>
                ))}
                <button type="button" className="mt-2 px-4 py-1 bg-blue-100 text-blue-700 rounded" onClick={() => setSobreParagraphs([...sobreParagraphs, ''])}>+ Adicionar parágrafo</button>
              </div>
              <div>
                <label className="block font-medium mb-1">Diferenciais:</label>
                {sobreFeatures.map((f, idx) => (
                  <div key={idx} className="flex gap-2 mb-2">
                    <input type="text" className="border rounded px-2 py-1 w-40" value={f.title} onChange={e => setSobreFeatures(sobreFeatures.map((v, i) => i === idx ? { ...v, title: e.target.value } : v))} placeholder="Título" />
                    <input type="text" className="border rounded px-2 py-1 flex-1" value={f.description} onChange={e => setSobreFeatures(sobreFeatures.map((v, i) => i === idx ? { ...v, description: e.target.value } : v))} placeholder="Descrição" />
                    <button type="button" className="text-red-500 px-2" onClick={() => setSobreFeatures(sobreFeatures.filter((_, i) => i !== idx))} disabled={sobreFeatures.length === 1}>×</button>
                  </div>
                ))}
                <button type="button" className="mt-2 px-4 py-1 bg-blue-100 text-blue-700 rounded" onClick={() => setSobreFeatures([...sobreFeatures, { title: '', description: '' }])}>+ Adicionar diferencial</button>
              </div>
            </form>
          )}
          {tab === 'servicos' && (
            <form className="space-y-6 animate-fade">
              <h2 className="text-xl font-bold mb-4">Editar Serviços</h2>
              {servicos.map((serv, idx) => (
                <div key={idx} className="border rounded p-4 mb-4">
                  <input type="text" className="w-full border rounded px-3 py-2 mb-2" value={serv.title} onChange={e => setServicos(servicos.map((s, i) => i === idx ? { ...s, title: e.target.value } : s))} placeholder="Título do serviço" />
                  <input type="text" className="w-full border rounded px-3 py-2 mb-2" value={serv.description} onChange={e => setServicos(servicos.map((s, i) => i === idx ? { ...s, description: e.target.value } : s))} placeholder="Descrição" />
                  <label className="block font-medium mb-1">Features:</label>
                  {serv.features.map((f, fidx) => (
                    <div key={fidx} className="flex gap-2 mb-2">
                      <input type="text" className="border rounded px-2 py-1 flex-1" value={f} onChange={e => setServicos(servicos.map((s, i) => i === idx ? { ...s, features: s.features.map((fv, fi) => fi === fidx ? e.target.value : fv) } : s))} placeholder="Feature" />
                      <button type="button" className="text-red-500 px-2" onClick={() => setServicos(servicos.map((s, i) => i === idx ? { ...s, features: s.features.filter((_, fi) => fi !== fidx) } : s))} disabled={serv.features.length === 1}>×</button>
                    </div>
                  ))}
                  <button type="button" className="mt-2 px-4 py-1 bg-blue-100 text-blue-700 rounded" onClick={() => setServicos(servicos.map((s, i) => i === idx ? { ...s, features: [...s.features, ''] } : s))}>+ Adicionar feature</button>
                  <button type="button" className="ml-2 px-4 py-1 bg-red-100 text-red-700 rounded" onClick={() => setServicos(servicos.filter((_, i) => i !== idx))} disabled={servicos.length === 1}>Remover serviço</button>
                </div>
              ))}
              <button type="button" className="mt-2 px-4 py-1 bg-blue-100 text-blue-700 rounded" onClick={() => setServicos([...servicos, { title: '', description: '', features: [''] }])}>+ Adicionar serviço</button>
            </form>
          )}
          {tab === 'projetos' && (
            <form className="space-y-6 animate-fade">
              <h2 className="text-xl font-bold mb-4">Editar Projetos</h2>
              {projetos.map((proj, idx) => (
                <div key={idx} className="border rounded p-4 mb-4">
                  <input type="text" className="w-full border rounded px-3 py-2 mb-2" value={proj.title} onChange={e => setProjetos(projetos.map((p, i) => i === idx ? { ...p, title: e.target.value } : p))} placeholder="Título do projeto" />
                  <input type="text" className="w-full border rounded px-3 py-2 mb-2" value={proj.description} onChange={e => setProjetos(projetos.map((p, i) => i === idx ? { ...p, description: e.target.value } : p))} placeholder="Descrição" />
                  <input type="text" className="w-full border rounded px-3 py-2 mb-2" value={proj.image} onChange={e => setProjetos(projetos.map((p, i) => i === idx ? { ...p, image: e.target.value } : p))} placeholder="URL da imagem" />
                  <label className="block font-medium mb-1">Tags:</label>
                  {proj.tags.map((t, tidx) => (
                    <div key={tidx} className="flex gap-2 mb-2">
                      <input type="text" className="border rounded px-2 py-1 flex-1" value={t} onChange={e => setProjetos(projetos.map((p, i) => i === idx ? { ...p, tags: p.tags.map((tv, ti) => ti === tidx ? e.target.value : tv) } : p))} placeholder="Tag" />
                      <button type="button" className="text-red-500 px-2" onClick={() => setProjetos(projetos.map((p, i) => i === idx ? { ...p, tags: p.tags.filter((_, ti) => ti !== tidx) } : p))} disabled={proj.tags.length === 1}>×</button>
                    </div>
                  ))}
                  <button type="button" className="mt-2 px-4 py-1 bg-blue-100 text-blue-700 rounded" onClick={() => setProjetos(projetos.map((p, i) => i === idx ? { ...p, tags: [...p.tags, ''] } : p))}>+ Adicionar tag</button>
                  <label className="block font-medium mb-1 mt-2">Métricas:</label>
                  {proj.metrics.map((m, midx) => (
                    <div key={midx} className="flex gap-2 mb-2">
                      <input type="text" className="border rounded px-2 py-1 w-32" value={m.key} onChange={e => setProjetos(projetos.map((p, i) => i === idx ? { ...p, metrics: p.metrics.map((mv, mi) => mi === midx ? { ...mv, key: e.target.value } : mv) } : p))} placeholder="Chave" />
                      <input type="text" className="border rounded px-2 py-1 flex-1" value={m.value} onChange={e => setProjetos(projetos.map((p, i) => i === idx ? { ...p, metrics: p.metrics.map((mv, mi) => mi === midx ? { ...mv, value: e.target.value } : mv) } : p))} placeholder="Valor" />
                      <button type="button" className="text-red-500 px-2" onClick={() => setProjetos(projetos.map((p, i) => i === idx ? { ...p, metrics: p.metrics.filter((_, mi) => mi !== midx) } : p))} disabled={proj.metrics.length === 1}>×</button>
                    </div>
                  ))}
                  <button type="button" className="mt-2 px-4 py-1 bg-blue-100 text-blue-700 rounded" onClick={() => setProjetos(projetos.map((p, i) => i === idx ? { ...p, metrics: [...p.metrics, { key: '', value: '' }] } : p))}>+ Adicionar métrica</button>
                  <button type="button" className="ml-2 px-4 py-1 bg-red-100 text-red-700 rounded" onClick={() => setProjetos(projetos.filter((_, i) => i !== idx))} disabled={projetos.length === 1}>Remover projeto</button>
                </div>
              ))}
              <button type="button" className="mt-2 px-4 py-1 bg-blue-100 text-blue-700 rounded" onClick={() => setProjetos([...projetos, { title: '', description: '', image: '', tags: [''], metrics: [{ key: '', value: '' }] }])}>+ Adicionar projeto</button>
            </form>
          )}
          {tab === 'depoimentos' && (
            <form className="space-y-6 animate-fade">
              <h2 className="text-xl font-bold mb-4">Editar Depoimentos</h2>
              {depoimentos.map((dep, idx) => (
                <div key={idx} className="border rounded p-4 mb-4">
                  <input type="text" className="w-full border rounded px-3 py-2 mb-2" value={dep.name} onChange={e => setDepoimentos(depoimentos.map((d, i) => i === idx ? { ...d, name: e.target.value } : d))} placeholder="Nome" />
                  <input type="text" className="w-full border rounded px-3 py-2 mb-2" value={dep.position} onChange={e => setDepoimentos(depoimentos.map((d, i) => i === idx ? { ...d, position: e.target.value } : d))} placeholder="Cargo" />
                  <input type="text" className="w-full border rounded px-3 py-2 mb-2" value={dep.company} onChange={e => setDepoimentos(depoimentos.map((d, i) => i === idx ? { ...d, company: e.target.value } : d))} placeholder="Empresa" />
                  <textarea className="w-full border rounded px-3 py-2 mb-2" value={dep.content} onChange={e => setDepoimentos(depoimentos.map((d, i) => i === idx ? { ...d, content: e.target.value } : d))} placeholder="Depoimento" />
                  <input type="number" min={1} max={5} className="w-24 border rounded px-3 py-2 mb-2" value={dep.rating} onChange={e => setDepoimentos(depoimentos.map((d, i) => i === idx ? { ...d, rating: Number(e.target.value) } : d))} placeholder="Nota (1-5)" />
                  <input type="text" className="w-full border rounded px-3 py-2 mb-2" value={dep.avatar} onChange={e => setDepoimentos(depoimentos.map((d, i) => i === idx ? { ...d, avatar: e.target.value } : d))} placeholder="URL do avatar" />
                  <button type="button" className="ml-2 px-4 py-1 bg-red-100 text-red-700 rounded" onClick={() => setDepoimentos(depoimentos.filter((_, i) => i !== idx))} disabled={depoimentos.length === 1}>Remover depoimento</button>
                </div>
              ))}
              <button type="button" className="mt-2 px-4 py-1 bg-blue-100 text-blue-700 rounded" onClick={() => setDepoimentos([...depoimentos, { name: '', position: '', company: '', content: '', rating: 5, avatar: '' }])}>+ Adicionar depoimento</button>
            </form>
          )}
          {tab === 'footer' && (
            <form className="space-y-6 animate-fade">
              <h2 className="text-xl font-bold mb-4">Editar Footer</h2>
              <div>
                <label className="block font-medium mb-1">Texto do Footer:</label>
                <input type="text" className="w-full border rounded px-3 py-2" value={footerText} onChange={e => setFooterText(e.target.value)} placeholder="Texto do Footer" />
              </div>
              <div>
                <label className="block font-medium mb-1">Contatos:</label>
                {footerContacts.map((c, idx) => (
                  <div key={idx} className="flex gap-2 mb-2">
                    <select className="border rounded px-2 py-1" value={c.type} onChange={e => setFooterContacts(footerContacts.map((v, i) => i === idx ? { ...v, type: e.target.value } : v))}>
                      <option value="email">Email</option>
                      <option value="phone">Telefone</option>
                      <option value="address">Endereço</option>
                    </select>
                    <input type="text" className="border rounded px-2 py-1 flex-1" value={c.value} onChange={e => setFooterContacts(footerContacts.map((v, i) => i === idx ? { ...v, value: e.target.value } : v))} placeholder="Valor" />
                    <button type="button" className="text-red-500 px-2" onClick={() => setFooterContacts(footerContacts.filter((_, i) => i !== idx))} disabled={footerContacts.length === 1}>×</button>
                  </div>
                ))}
                <button type="button" className="mt-2 px-4 py-1 bg-blue-100 text-blue-700 rounded" onClick={() => setFooterContacts([...footerContacts, { type: 'email', value: '' }])}>+ Adicionar contato</button>
              </div>
              <div>
                <label className="block font-medium mb-1">Redes Sociais:</label>
                {footerSocials.map((s, idx) => (
                  <div key={idx} className="flex gap-2 mb-2">
                    <input type="text" className="border rounded px-2 py-1 w-32" value={s.name} onChange={e => setFooterSocials(footerSocials.map((v, i) => i === idx ? { ...v, name: e.target.value } : v))} placeholder="Nome" />
                    <input type="text" className="border rounded px-2 py-1 flex-1" value={s.href} onChange={e => setFooterSocials(footerSocials.map((v, i) => i === idx ? { ...v, href: e.target.value } : v))} placeholder="URL" />
                    <button type="button" className="text-red-500 px-2" onClick={() => setFooterSocials(footerSocials.filter((_, i) => i !== idx))} disabled={footerSocials.length === 1}>×</button>
                  </div>
                ))}
                <button type="button" className="mt-2 px-4 py-1 bg-blue-100 text-blue-700 rounded" onClick={() => setFooterSocials([...footerSocials, { name: '', href: '' }])}>+ Adicionar rede social</button>
              </div>
              <div>
                <label className="block font-medium mb-1">Serviços no Footer:</label>
                {footerServices.map((s, idx) => (
                  <div key={idx} className="flex gap-2 mb-2">
                    <input type="text" className="border rounded px-2 py-1 flex-1" value={s} onChange={e => setFooterServices(footerServices.map((v, i) => i === idx ? e.target.value : v))} placeholder="Serviço" />
                    <button type="button" className="text-red-500 px-2" onClick={() => setFooterServices(footerServices.filter((_, i) => i !== idx))} disabled={footerServices.length === 1}>×</button>
                  </div>
                ))}
                <button type="button" className="mt-2 px-4 py-1 bg-blue-100 text-blue-700 rounded" onClick={() => setFooterServices([...footerServices, ''])}>+ Adicionar serviço</button>
              </div>
              <div>
                <label className="block font-medium mb-1">Links da Empresa:</label>
                {footerCompanyLinks.map((l, idx) => (
                  <div key={idx} className="flex gap-2 mb-2">
                    <input type="text" className="border rounded px-2 py-1 flex-1" value={l} onChange={e => setFooterCompanyLinks(footerCompanyLinks.map((v, i) => i === idx ? e.target.value : v))} placeholder="Link" />
                    <button type="button" className="text-red-500 px-2" onClick={() => setFooterCompanyLinks(footerCompanyLinks.filter((_, i) => i !== idx))} disabled={footerCompanyLinks.length === 1}>×</button>
                  </div>
                ))}
                <button type="button" className="mt-2 px-4 py-1 bg-blue-100 text-blue-700 rounded" onClick={() => setFooterCompanyLinks([...footerCompanyLinks, ''])}>+ Adicionar link</button>
              </div>
            </form>
          )}
        </section>
        <div className="flex justify-end w-full max-w-2xl mt-4">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition disabled:opacity-50"
            onClick={salvarNoBackend}
            disabled={saving || loading}
          >
            {saving ? 'Salvando...' : 'Salvar alterações'}
          </button>
          {saveMsg && <span className="ml-4 text-green-600 font-semibold">{saveMsg}</span>}
        </div>
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