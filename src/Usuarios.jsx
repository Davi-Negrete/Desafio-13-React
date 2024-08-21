import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Tabla from "./components/Tabla"

// Contenedor
const Usuarios = () => {

  const url = import.meta.env.VITE_API_USUARIOS
  const [users, setUsers] = useState(null)

  const [usuarioAEditar, setUsuarioAEditar] = useState(null)

  useEffect(() => {
    document.title = 'Usuarios'
    //console.log('se monta el componente en pantalla')
    obtenerTodosLosUsuarios()
  }, [])

  const obtenerTodosLosUsuarios = async () => {

    // Mostar todos los usuarios del Back (GetALL)

    try {
      
      const res = await fetch(url)

      if (!res.ok) {
        throw new Error(`No se pudo obtener los usuarios ${res.status}`)
      }

      const data = await res.json()

      //console.log(data)

      // Seteo los usuarios del back para que me los renderize en el html.
      setUsers(data)
      

    } catch (error) {
      console.error('[obtenerTodosLosUsuarios]', error)
    }

  }
  
  const agregarUsuario = async (usuario) => {

    // 1. Hacer la peticion para el guardado del usuario en el back

    try {

      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' }, 
        body: JSON.stringify(usuario)
      }

      const res = await fetch(url, options)

      if (!res.ok) {
        throw new Error(`No se pudo crear el usuario ${res.status}`)
      }

      const dataNuevoUsuario = await res.json()

      //console.log(dataNuevoUsuario)

      // 2. Cambiar el estado de React para que vuelva a renderizar incluyendo el nuevo usuario que agrego.

      const nuevoEstadoUsuarios = [...users, dataNuevoUsuario]
      setUsers(nuevoEstadoUsuarios)
      
      
    } catch (error) {
      console.error('[agregarUsuario]', error)
    }


  }  

  const eliminarUsuario = async (id) => {

    try {

      // 1. Peticion asincronica para borrar el usuario.

      const urlEliminacion = url + id 

      const options = {
        method: 'DELETE'
      }

      const res = await fetch(urlEliminacion, options)

      if (!res.ok) {
        throw new Error(`No se pudo borrar el usuario ${res.status}`)
      }

      const dataEliminado = await res.json()

      const data = {
        id: id, 
        usuario: dataEliminado
      }

      // 2. Modificar el estado users de React para eliminar el usuario con el id recibido

      const nuevoEstadoUsuarios = users.filter( user => user.id !== data.id)
      setUsers(nuevoEstadoUsuarios)

    } catch (error) {
      console.error('[eliminarUsuario]', error) 
    }

    
  }

  const editarUsuario = async (usuarioEditado) => {

    try {
      
      // 1. Peticion asincrinica para actualizar el backend con el nuevo usuario.

      const urlEdicion = url + usuarioEditado.id

      const options = {
        method: 'PUT', 
        headers: { 'content-type': 'application/json'}, 
        body: JSON.stringify(usuarioEditado)
      }

      const res = await fetch(urlEdicion, options)

      if (!res.ok) {
        throw new Error(`No se pudo editar el usuario ${res.status}`)
      }

      const dataEditado = await res.json()

      // 2. Actualizo el estado basado en el producto editado que me llega del backend.

      const nuevoEstadoUsuarios = users.map(
        user =>
          (user.id === usuarioEditado.id) //condicion
          ?
            usuarioEditado
            :
            user
          )

      setUsers(nuevoEstadoUsuarios)

    } catch (error) {
      console.error('[editarUsuario]', error)
    }

  }


  return (
    <div className="container">
      <Formulario 
        agregarUsuario={agregarUsuario} 
        usuarioAEditar={usuarioAEditar}
        setUsuarioAEditar={setUsuarioAEditar}
        editarUsuario={editarUsuario}
      />
      <Tabla 
        users={users} 
        eliminarUsuario={eliminarUsuario}
        setUsuarioAEditar={setUsuarioAEditar}
      />
    </div>
  )
}

export default Usuarios