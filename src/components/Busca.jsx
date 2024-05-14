const Busca = ({busca, setBusca}) => {
  return (
    <div className="busca_comp">   
      <p>Busque por um item</p>   
      <input 
      type="text"
      value={busca}
      onChange={(e) => setBusca(e.target.value)}
      placeholder="Pesquise por um item..."
      />      
    </div>
  )
}

export default Busca