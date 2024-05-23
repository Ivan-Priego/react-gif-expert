import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GiftExpertApp = () => {
  const [ categories, setCategories ] = useState(['One Punch'])
  const onAddCategory = ( newCategory ) => {
    if (categories.includes(newCategory)) return;
    //console.log(newCategory)
    setCategories ( [  newCategory, ...categories] )
  }
  return (
    <>
      {/* <p>https://es.legacy.reactjs.org/docs/faq-structure.html</p> */}
      {/* totulo */}
      <h1>GiftExpertApp</h1>
      {/* input */}
      < AddCategory 
        //setCategories={setCategories} 
        onNewCategory = { onAddCategory }
      />
      {/* listado */}
        {/* <ol> */}
          {
            categories.map( (category) => (
              <GifGrid 
                key={category}
                category={category}
              />
            ))
          }
        {/* </ol> */}
        {/* gif Item */}
    </>    
  )
}
