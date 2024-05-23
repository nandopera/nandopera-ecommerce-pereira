import './category.scss'

export function Category({ category }){
    const { imageUrl, title } = category
    return (
      <div>
        <div>
          <h2>{title}</h2>
          <p>Comprar Agora</p>
        </div>
      </div>
    )
  }