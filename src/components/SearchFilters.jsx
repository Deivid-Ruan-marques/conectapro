import React from 'react'

export default function SearchFilters({ busca, setBusca }) {
  return (
    <div className="flex gap-4 items-center">
      <input
        value={busca}
        onChange={e => setBusca(e.target.value)}
        placeholder="Buscar por nome, área ou cidade..."
        className="px-3 py-2 rounded bg-[var(--card)] w-full max-w-lg"
      />
    </div>
  )
}
