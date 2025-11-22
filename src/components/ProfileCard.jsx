import React from 'react'

export default function ProfileCard({ perfil, onClick }) {
  return (
    <div onClick={onClick} className="cursor-pointer bg-[var(--card)] rounded-lg p-4 hover:scale-105 transition">
      <div className="flex items-center gap-4">
        <img src={perfil.foto} alt={perfil.nome} className="w-16 h-16 rounded-full" />
        <div>
          <h2 className="font-semibold">{perfil.nome}</h2>
          <p className="text-sm text-[var(--muted)]">{perfil.cargo}</p>
          <p className="text-xs text-[var(--muted)]">{perfil.localizacao}</p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {perfil.habilidadesTecnicas.slice(0,3).map((h,i) => (
          <span key={i} className="text-xs px-2 py-1 rounded-full bg-[var(--accent)]/20">{h}</span>
        ))}
      </div>
    </div>
  )
}
