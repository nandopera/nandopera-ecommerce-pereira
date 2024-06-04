import { Category } from "../category/category"

export function Categories( { categories } ){
    
    return (
      <div>
       {
        categories.map((category) => {
            return (
                <Category category={category} />
            )
        } )
        }
      </div>
    )
  }