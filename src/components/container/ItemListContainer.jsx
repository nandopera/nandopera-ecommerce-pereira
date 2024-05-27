import './ItemListContainer.css';

export function ItemListContainer({ greeting }) {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div>Lista de Itens</div>
    </div>
  )
}