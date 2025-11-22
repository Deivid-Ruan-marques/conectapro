import React from 'react'

export default function ProfileModal({ perfil, onClose }) {
  if (!perfil) return null
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-[var(--card)] rounded-lg p-6 w-full max-w-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex gap-6">
          <img src={perfil.foto} alt={perfil.nome} className="w-28 h-28 rounded-full" />
          <div>
            <h2 className="text-2xl font-semibold">{perfil.nome}</h2>
            <p className="text-sm text-[var(--muted)]">{perfil.cargo} • {perfil.localizacao}</p>
            <p className="mt-3">{perfil.resumo}</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Habilidades técnicas</h3>
            <p className="text-sm">{perfil.habilidadesTecnicas.join(', ')}</p>
            <h3 className="font-semibold mt-3">Soft skills</h3>
            <p className="text-sm">{perfil.softSkills.join(', ')}</p>
          </div>
          <div>
            <h3 className="font-semibold">Formação</h3>
            {perfil.formacao.map((f,i)=>(<p key={i} className="text-sm">{f.curso} - {f.instituicao} ({f.ano})</p>))}
            <h3 className="font-semibold mt-3">Projetos</h3>
            {perfil.projetos.map((pr,i)=>(<p key={i} className="text-sm">{pr.titulo} - {pr.descricao}</p>))}
          </div>
        </div>

        <div className="mt-6 flex gap-3 justify-end">
          <button className="px-4 py-2 rounded bg-[var(--accent)]">Recomendar</button>
          <button className="px-4 py-2 rounded border border-[var(--muted)]" onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  )
}
