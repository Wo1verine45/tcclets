import './Title.css'

export function Title ({ size, children }) {
 if (size === 1) {
   return (
     <h1 className='Title-title'>{children}</h1>
   )
 } else if (size === 2) {
    return (
      <h2 className='Title-title'>{children}</h2>
    )
  } else if (size === 3) {
      return (
        <h3 className='Title-title'>{children}</h3>
      )
    } else {
        return (
          <h4 className='Title-title'>{children}</h4>
        )
      } 
}