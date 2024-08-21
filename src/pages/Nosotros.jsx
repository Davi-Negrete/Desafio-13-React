import React, { useEffect } from 'react'

const Nosotros = () => {

    useEffect(() => {
        document.title = 'Nosotros'
      }, [])

  return (
    <div className='container'>
        <h1 className='display-1 text-danger'>Nosotros</h1>
        <hr />
    </div>
  )
}

export default Nosotros