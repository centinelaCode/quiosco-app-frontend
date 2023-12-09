
export default function Register() {
   return (
      <>
         <h1 className="text-4xl font-black">Crea tu Cuenta</h1>
         <p>Crea tu cuenta llenando el formulario</p>

         <div className="bg-white-100 shadow-md rounded-md mt-5 px-5 py-10">
            <form>

               <div className="mb-4">
                  <label 
                  className="text-slate-900 font-bold"
                  htmlFor="name"
                  >Nombre:</label>

                  <input 
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 w-full p-3 bg-gray-100  border-2 rounded-md"
                  placeholder="Tu Nombre"
                  />
               </div>

               <div className="mb-4">
                  <label 
                  className="text-slate-900 font-bold"
                  htmlFor="email"
                  >Email:</label>

                  <input 
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 w-full p-3 bg-gray-100  border-2 rounded-md"
                  placeholder="Tu Email"
                  />
               </div>

               <div className="mb-4">
                  <label 
                  className="text-slate-900 font-bold"
                  htmlFor="password"
                  >Password:</label>

                  <input 
                  type="password"
                  id="password"
                  name="password"
                  className="mt-2 w-full p-3 bg-gray-100  border-2 rounded-md"
                  placeholder="Tu Password"
                  />
               </div>

               <div className="mb-4">
                  <label 
                  className="text-slate-900 font-bold"
                  htmlFor="password_confirmation"
                  >Repetir Password:</label>

                  <input 
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
                  className="mt-2 w-full p-3 bg-gray-100  border-2 rounded-md"
                  placeholder="Repertir Password"
                  />
               </div>

               <input 
                  type="submit"
                  value="Crear Cuenta"
                  className="bg-indigo-600 hover:bg-indigo-800 text-white w-full rounded-md mt-5 p-3 font-bold cursor-pointer"
               />

            </form>
         </div>

         
      </>
   )
}
