import { ProductCard } from "../product-cart/product-cart";
import './category-preview.scss'

export function CategoryPreview({ title, products }){
  return (
    <div className='category-preview-container'>
      <h2>
        <span>{title.toUpperCase()}</span>
      </h2>
      <div className='preview'>
        {
          products.filter((_, idx) => idx  < 4)
          .map((product) => <ProductCard key={product.id} product={product}/>)
        }
      </div>
    </div>
  )
}