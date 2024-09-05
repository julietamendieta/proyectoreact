import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext/CartProvider'
import { collection, addDoc, updateDoc, doc, getDoc, getFirestore } from 'firebase/firestore'
import './Checkout.css'

const Checkout = () => {
    const {cart, getTotal, getTotalProducts, clearCart} = useContext(CartContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");
    

    const handleForm = (e) => {
        e.preventDefault();
        
        if(!nombre || !apellido || !telefono || !email) {
            setError("Por favor, completá todos los campos");
            return;
        }

        const db = getFirestore();

        const order = {
            items: cart.map((product) =>({
                id: product.product.id,
                name: product.product.name,
                quantity: product.quantity,
                stock: product.product.stock
            })),
            total: getTotal(),
            date: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        Promise.all(
            order.items.map(async(productOrder) => {
                const productRef = doc(db, "item", productOrder.id);
                const productDoc = await getDoc(productRef);
                const stock = productDoc.data().stock;

                await updateDoc(productRef, {
                    stock: stock - productOrder.quantity
                })
            })
        ).then(() => {
            addDoc(collection(db, "orders"), order)
            .then((docRef) => {
                setOrderId(docRef.id);
                clearCart();
            })
            .catch((error) => {
                console.log("Error en actualización de stock", error)
                setError("No se puede actualizar el stock, inténtelo nuevamente.")
            });
        })
        .catch((error) => {
            console.log("Error en actualización de stock", error)
            setError("No se puede actualizar el stock, inténtelo nuevamente.")
        })
    };
  return (
    <div className='checkout'>
        <div>
            <h2>Ingresá tus datos</h2>
            <h3>Por favor, revisalos bien antes de finalizar la compra.</h3>  
        </div>
        <div className='infoContainer'>
           <div>
           <h3>Tu compra</h3>
           {cart.map((product) => (
                <div className="checkoutDetail" key={product.product.id}>
                        <h4>{product.quantity}</h4> 
                        <h4>{product.product.name}</h4> 
                        <h4>$ {product.product.price * product.quantity}</h4>
                </div>
            ))} 
            </div>
            <form onSubmit={handleForm}>
                <div className='formFields'>
                    <label htmlFor="">Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)}/>
                </div>
                <div className='formFields'>
                    <label htmlFor="">Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)}/>
                </div>
                <div className='formFields'>
                    <label htmlFor="">Teléfono</label>
                    <input type="number" onChange={(e) => setTelefono(e.target.value)}/>
                </div>
                <div className='formFields'>
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>

                {error && <p>{error}</p>}
                
                <button type='submit'>Comprar</button>

                {orderId && (<h4>¡Gracias por tu compra! El código de tu orden es {orderId}</h4>)}
            </form> 
        </div>
    </div>
  )
}

export default Checkout