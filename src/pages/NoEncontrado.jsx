import React, { useEffect } from 'react'

const NoEncontrado = () => {

    useEffect(() => {
        document.title = 'No Encontrado - 404'
      }, [])

  return (
    <>
      <h1 className='alert alert-danger p-5 mt-4'>No Encontrado - 404</h1>
    </>
  )
}

export default NoEncontrado