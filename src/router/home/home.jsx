import { Categories } from "../../components/categories/categories"

const categories = [
  {
    "id": 1,
    "title": "Hats",
    "label": 'Chapéus',
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 2,
    "title": "Jackets",
    "label": "Jaquetas",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    "id": 3,
    "title": "Sneakers",
    "label": "Tênis",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 4,
    "title": "Womens",
    "label": "Mulheres",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "Mens",
    "label": "Homens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  }
]

export function Home() {
  return (
    <div>
      <Categories categories={categories} />
    </div>
  )
}