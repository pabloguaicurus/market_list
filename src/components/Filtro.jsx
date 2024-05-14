const Filtro = (filtro, setFiltro) => {
  return (
    <div className="filtro">
            <p>Busque por Categoria</p>
            <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                <option value="todos">Todos</option>
                <option value="graos">Grãos</option>
                <option value="laticineos">Laticineos</option>
                <option value="hortfrut">Hortifruti</option>
                <option value="higiene">Higiene</option>
                <option value="limpeza">Limpeza</option>
            </select>
        </div>
  )
}

export default Filtro