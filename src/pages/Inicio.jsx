import React, { useEffect } from 'react'

const Inicio = () => {

    useEffect(() => {
        document.title = 'Inicio'
      }, [])

  return (
    <div className='container'>
        <h1 className='display-1 text-danger'>Inicio</h1>
        <hr />
    </div>
  )
}

export default Inicio