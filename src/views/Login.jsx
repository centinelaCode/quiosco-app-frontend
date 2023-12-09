
export default function Login() {
  return (
    <>
      <h1 className="text-4xl font-black">Iniciar Seción</h1>
      <p>Para realizar un pedido debes iniciar sesión</p>

      <div className="bg-white-100 shadow-md rounded-md mt-5 px-5 py-10">
        <form>

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

          <input 
            type="submit"
            value="Iniciar Sesión"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full rounded-md mt-5 p-3 font-bold cursor-pointer"
          />

        </form>        
      </div>  

      
    </>
  )
}
