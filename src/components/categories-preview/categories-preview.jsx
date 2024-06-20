import { useContext } from "react"
import { useEffect } from "react"
import { addCollentionAndDocuments, getCategoriesAndDocuments } from "../../utils/firebase"
import { CategoriesContext } from "../../context/categoriesContext"
import { CategoryPreview } from "../category-preview/category-preview"
import { SHOP_DATA } from "../../shop-data"

export function CategoriesPreview() {

  const { categoriesMap } = useContext(CategoriesContext)

  // useEffect(() => {
  //   addCollentionAndDocuments('categories', SHOP_DATA)
  // },[])

  return (
    <>
      {
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title]
          return <CategoryPreview key={title} title={title} products={products} />
        })
      }
    </>
  )
}