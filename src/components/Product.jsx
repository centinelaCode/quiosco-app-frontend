
export default function Product({product}) {
   const {nombre, imagen, precio} = product

   return (
      <div className="border p-3 shadow bg-white">
         <img 
            src={`/img/${imagen}.jpg`} 
            alt={`imagen ${nombre}`} 
            className="w-full"
         />

         <div className="p-5">
            <h3 className="text-2xl font-bold">{nombre}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500">{precio}</p>
         </div>
      </div>
   )
}
