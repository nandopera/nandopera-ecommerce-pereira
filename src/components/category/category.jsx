import './category.scss'
import { useNavigate } from 'react-router-dom'

export function Category({ category }) {
  const navigate = useNavigate()
  const { imageUrl , title } = category

  const goToCategoryPage = () => {
    navigate(`/shop/${title.toLowerCase()}`)
  }

  return (
    <div className="category-container" onClick={goToCategoryPage}>
      <div 
        className="background-image" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Comprar Agora</p>
      </div>
    </div>
  )
}