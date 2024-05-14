import { useState } from 'react'
import './App.css'

import Item from './components/Item';
import Additem from './components/Additem';
import Busca from './components/Busca';
import Filtro from './components/Filtro';



function App() {
  const [itens, setItens] = useState(
    [
      { id: 1, text: 'Arroz', category: 'Grãos', qtd: 1, price: 5.00, checked: false },
      { id: 2, text: 'Queijo', category: 'Laticineos', qtd: 1, price: 9.00, checked: false },
      { id: 3, text: 'Brocolis', category: 'Hortfrut', qtd: 1, price: 3.00, checked: false },
      { id: 4, text: 'Sabonete', category: 'Higiene', qtd: 1, price: 2.50, checked: false },
      { id: 5, text: 'Detergente', category: 'Limpeza', qtd: 1, price: 2.00, checked: false },
    ]
  )

  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState('todos');

  const addItem = (text, category, qtd, price) => { 
    const newItem = [...itens, { 
      id: itens.length + 1, // Posso mudar para uma função que gera numero aleatório
      text, 
      category, 
      qtd, 
      price, 
      checked: false },];
    setItens(newItem);
    }

    const removeItem = (id) => {
      const newItem = [...itens];
      const filteredItem = newItem.filter((item) => item.id !== id ? item : null);
      setItens(filteredItem);
    };

    const checkItem = (id) => {
      const newItem = [...itens];
      newItem.map((item) => item.id === id ? item.checked = !item.checked : item)
      setItens(newItem);
    }

  return (
    <div className="app">
      <h1>Lista de compras</h1>
      <div className="busca">
        <Busca busca={busca} setBusca={setBusca} />
        <Filtro filtro ={filtro} setFiltro={setFiltro} />
      </div>
      <div className="lista_compras">
        {itens
        .filter((item) => filtro === 'todos' ? true: filtro === item.category) 
        .filter((item) => item.text.toLowerCase().includes(busca.toLowerCase()))
        .map((item) => (
        <Item key={item.id} item={item} removeItem={removeItem} checkItem={checkItem} />
        ))}
      </div>
      <Additem addItem ={addItem}/>
    </div>    
    );
}

export default App
