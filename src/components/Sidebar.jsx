
export default function Sidebar() {
   return (
      <aside className="md:w-72">
      
         <div className="m-5 p-4 flex justify-center">
            <img 
               src=""
               alt="imagen logotipo" 
               className='w-40'
            />
         </div>

         <div className='mt-10'>
            {/* {categories.map((category) => (            
               <Categoria 
                  key={category.id}
                  category={category}
               />
            ))} */}
         </div>

         <div className='my-5 px-5'>
            <button
               type='button'
               className='text-center bg-red-500 hover:bg-red-700 w-full p-3 font-bold text-white rounded-md truncate'
            >
               Cancelar Orden
            </button>
         </div>

      </aside>
  )
}
