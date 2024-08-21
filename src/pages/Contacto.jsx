import React, { useEffect } from 'react'

const Contacto = () => {

    useEffect(() => {
      document.title = 'Contacto'
    }, [])
    
  return (
    <div className='container'>
        <h1 className='display-1 text-danger'>Contacto</h1>
        <hr />
    </div>
  )
}

export default Contacto