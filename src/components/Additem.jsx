import {useState} from 'react'

const Additem = ({addItem}) => {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [qtd, setQtd] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !qtd || !price) return;
    addItem(name, category, qtd, price);
    setName('');
    setCategory('');
    setQtd('');
    setPrice('');

    console.log(name, category, qtd, price);
  };

  return (
    <div className="add_item">
        <h2>Adicionar Item</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Nome do item" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)} >
                <option value="">Selecione a Categoria</option>
                <option value="Grãos">Grãos</option>
                <option value="Laticineos">Laticineos</option>
                <option value="Hortfrut">Hortfrut</option>
                <option value="Higiene">Higiene</option>
                <option value="Limpeza">Limpeza</option>
            </select>
            <input 
            type="number" 
            placeholder="Quantidade"
            value={qtd}
            onChange={(e) => setQtd(e.target.value)}
            />
            <input 
            type="number" 
            placeholder="Preço" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    </div>
  )
}

export default Additem