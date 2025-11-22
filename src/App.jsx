import React, { useState, useEffect } from 'react'
import ProfileCard from './components/ProfileCard'
import ProfileModal from './components/ProfileModal'
import SearchFilters from './components/SearchFilters'
import perfisData from './data/profiles.json'

export default function App() {
  const [busca, setBusca] = useState('')
  const [temaEscuro, setTemaEscuro] = useState(true)
  const [perfilSelecionado, setPerfilSelecionado] = useState(null)
  const [perfis, setPerfis] = useState(perfisData)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', temaEscuro)
  }, [temaEscuro])

  const perfisFiltrados = perfis.filter(p =>
    p.nome.toLowerCase().includes(busca.toLowerCase()) ||
    p.area.toLowerCase().includes(busca.toLowerCase()) ||
    p.localizacao.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div className={"min-h-screen p-6 bg-[var(--bg)] text-white"}>
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Futuro do Trabalho - Global Solution</h1>
        <div className="flex items-center gap-4">
          <button className="px-3 py-2 rounded bg-[var(--card)]" onClick={() => setTemaEscuro(!temaEscuro)}>
            {temaEscuro ? 'Tema: Escuro' : 'Tema: Claro'}
          </button>
        </div>
      </header>

      <SearchFilters busca={busca} setBusca={setBusca} />

      <main className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-6">
        {perfisFiltrados.map(p => (
          <ProfileCard key={p.id} perfil={p} onClick={() => setPerfilSelecionado(p)} />
        ))}
      </main>

      {perfilSelecionado && (
        <ProfileModal perfil={perfilSelecionado} onClose={() => setPerfilSelecionado(null)} />
      )}
    </div>
  )
}
