import { PropTypes } from "prop-types"
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({category}) => {
  const { images, isLoading } = useFetchGifs ( category )
   return (
      <>
        <h3> {category} </h3>
        {
          isLoading && ( <h2> Cargando ...</h2> ) // esto es un and logico una condicion enuna sola linea
        }
        {/*<h5>{counter}</h5>
        <button onClick={ () => setCounter(counter +1 ) } >+1</button> */}
        <div className="card-grid">
          {
            images.map( image => (
                < GifItem  
                  key={ image.id }
                  { ...image }
                />
              ))
          }
        </div>
      </>
  )
}
GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}