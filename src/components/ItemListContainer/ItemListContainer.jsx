import { useState, useEffect } from "react"
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Spinner from "../Spinner/Spinner"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = () => {

  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)

  const {categoryId} = useParams();

  useEffect(() => {

    setLoading(true);

    const db = getFirestore();

    const myProducts = categoryId ? query(collection(db, "item"), where("category", "==", categoryId)) : collection(db, "item");

    getDocs(myProducts).then((res) => {
      const newProducts = res.docs.map((doc) => {
        const data =doc.data();
        return {id: doc.id, ...data};
      });
      setProducts(newProducts);
    })
    .catch((error) => console.log("Error", error))
    .finally(() => setLoading(false));
  }, [categoryId])

return (
  <div className="container">

    {loading ? <Spinner/> : <ItemList products={products}/>}

  </div>
)
}

export default ItemListContainer