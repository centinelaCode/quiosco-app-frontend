import { products } from '../data/products'
import Product from '../components/Product'

export default function Inicio() {

   return (
      <>         
         <h1 className='text-4xl my-5 font-black'>Inicio</h1>
         <p className='text-2xl my-10'>
         Elige y personaliza tu pedido con los siguientes productos.
         </p>

         <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
            {products.map((product) => (
               <Product 
                  key={product.imagen}
                  product={product}
               />
            ))}
         </div>
      </>
   )
}
