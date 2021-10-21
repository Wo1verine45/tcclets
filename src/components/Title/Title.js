import './Title.css'

export function Title ({ size, children }) {
 if (size === 1) {
   return (
     <h1 className='Title-title-1'>{children}</h1>
   )
 } else if (size === 2) {
    return (
      <h2 className='Title-title-2'>{children}</h2>
    )
  } else if (size === 3) {
      return (
        <h3 className='Title-title-3'>{children}</h3>
      )
    } else {
        return (
          <h4 className='Title-title-4'>{children}</h4>
        )
      } 
}