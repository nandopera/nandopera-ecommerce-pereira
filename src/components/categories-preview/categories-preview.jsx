import { useContext } from "react"
import { CategoriesContext } from "../../categoriesContext"
import { CategoryPreview } from "../category-preview/category-preview"

export function CategoriesPreview() {

  const [categories, setCategories] = useState({})

  // useEffect(() => {
  //   addCollentionAdDocuments('categories', SHOP_DATA)
  // },[])

  return (
    <>
      {
        Object.keys(categories).map(title => {
          const products = categories[title]
          return <CategoryPreview key={title} title={title} products={products} />
        })
      }
    </>
  )
}