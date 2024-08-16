import { useState, useEffect } from "react"
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Spinner from "../Spinner/Spinner"

const ItemListContainer = () => {

  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)

  const {categoryId} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch('/products.json')
        const data = await response.json()

        const filteredProducts = categoryId ? data.filter((p) => p.category === categoryId) : data;

        setProducts(filteredProducts)
        
      }catch(error){
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
    fetchData()
  }, [categoryId])

return (
  <div className="container">

    {loading ? <Spinner/> : <ItemList products={products}/>}

  </div>
)
}

export default ItemListContainer