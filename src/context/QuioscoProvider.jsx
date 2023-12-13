import { createContext, useState } from 'react'
import { categories as categoriesDB } from '../data/categories'

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
   //! state for  categories
   const [categories, setCategoriesState] = useState(categoriesDB)

   // console.log(categories)
   
   
   return (
      <QuioscoContext.Provider
         value={{
            categories
         }}
      >
         { children }
      </QuioscoContext.Provider>
   )
}

export {
   QuioscoProvider
}

export default QuioscoContext