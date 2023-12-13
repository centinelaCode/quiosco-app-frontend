import useQuiosco from '../hooks/useQuisco'
import Category from '../components/Category'

export default function Sidebar() {
   const { categories } = useQuiosco()

   return (
      <aside className="md:w-72">
      
         <div className="m-5 p-4 flex justify-center">
            <img 
               src="/img/logo.svg"
               alt="imagen logotipo" 
               className='w-40'
            />
         </div>

         <div className='mt-10'>
            {categories.map((category) => (     
               <Category
                  key={category.id}
                  category={category}
               />
            ))}
         </div>

         <div className='my-5 px-5'>
            <button
               type='button'
               className='text-center bg-red-600 hover:bg-red-800 w-full p-3 font-bold text-white rounded-md truncate'
            >
               Cancelar Orden
            </button>
         </div>

      </aside>
  )
}
