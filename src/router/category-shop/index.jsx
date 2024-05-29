import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCategoriesAndDocuments } from "../../utils/firebase"
import { ProductCard } from "../../components/product-card/product-card"
import { CategoryContainer, TitleCategoryShop } from "./style"

export function CategoryShop(){

  const { category } = useParams()

  const [categoriesMap, setCategoriesMap] = useState({})
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap)
    }

    getCategories()
  },[])

  useEffect(() =>  {
    setProducts(categoriesMap[category])
  },[category, categoriesMap])

  return (
    <>
      <TitleCategoryShop>{category.toUpperCase()}</TitleCategoryShop>
      <CategoryContainer>
        {
          products && products.map((product) => <ProductCard key={product.id} product={product} />)
        }
      </CategoryContainer>
        
     
    </>
  )
}