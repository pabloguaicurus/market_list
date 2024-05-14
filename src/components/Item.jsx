import React from 'react'

const Item = ({item, removeItem, checkItem}) => {
  return (
    <div className="item"
     style={{backgroundColor: item.checked ? '#16960a' : ''}}>
        <div className="conteudo">
            <p>{item.text}</p>
            <p className='categoria'>{item.category}</p>
            <p className='qtd'>Quantidade:{item.qtd}</p>
            <p className='preco'>Preço R$:{item.price}</p>
        </div>
        <div className="botoes">
            <button className='Chek' onClick={() => checkItem(item.id)}>Chek!</button>
            <button className='editar'>Editar</button>
            <button className='remover' onClick={() => removeItem(item.id)}>X</button>
        </div>
    </div>
  )
}

export default Item