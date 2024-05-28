import PropTypes from 'prop-types'

export const GifItem = ( {title,url,id} ) => {
  return (
    <li className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </li>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

// GifItem.defaultProps = {
//   title : "Hola no hay titulo",
//   url : "Hola no hay URL",
// }