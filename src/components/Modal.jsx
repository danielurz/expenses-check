import { useState, useEffect } from 'react'
import CerrarBtn from '../../recursos/Materiales App de Gastos/img/cerrar.svg'

function Modal({setModal,guardarGastos,setGastoEditar,gastoEditar,conjuntoGastos}) {

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [id, setId] = useState('')
  const [error, setError] = useState(false)






  useEffect(() => {
    if (Object.values(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setId(gastoEditar.id)
    } 
}, [gastoEditar])
  



  const handleSubmit = e => {
    e.preventDefault()

    //Validar formulario 
    if ([nombre,cantidad,categoria].includes('')) {
      setError(true)

      setTimeout(() => {
        setError(false)
      }, 5000);
      return
    }

    guardarGastos({nombre,cantidad,categoria,id, fecha : Date.now()})
    


    //Reseteando valores
    setNombre('')
    setCantidad('')
    setCategoria('')
    setModal(false)
    setError(false)
    setGastoEditar({})
  }

  const handleCerrar = () => {
    setModal(false)
    setGastoEditar({})
  }

  return (
    <div className='modal'>
        <div className="cerrar-modal">
          <img src={CerrarBtn} alt="cerrar modal" onClick={handleCerrar} />
        </div>

        <form className='formulario animar' onSubmit={handleSubmit}>
          <legend>{Object.values(gastoEditar).length > 0 ? 'Editar gasto' : 'Nuevo gasto'}</legend>
          <div className="campo">
              <label htmlFor="nombre">Nombre Gasto</label>
              <input 
                  id='nombre' 
                  type="text" 
                  placeholder='Añade el nombre del gasto'
                  onChange={e => setNombre(e.target.value)}
                  value={nombre} />
          </div>
          <div className="campo">
              <label htmlFor="cantidad">Cantidad</label>
              <input 
                  id='cantidad' 
                  type="text" 
                  placeholder='Añade la cantidad del gasto: ej. 300'
                  onChange={e => setCantidad(Number(e.target.value))}
                  value={cantidad} />
          </div>
          <div className="campo">
            <label htmlFor="categoria">Categoria</label>
            <select 
                id="categoria"
                onChange={e => setCategoria(e.target.value)}
                value={categoria}>
                    <option value="">-- Seleccione --</option>
                    <option value="Ahorro">Ahorro</option>
                    <option value="Comida">Comida</option>
                    <option value="Casa">Casa</option>
                    <option value="Gastos">Gastos Varios</option>
                    <option value="Ocio">Ocio</option>
                    <option value="Salud">Salud</option>
                    <option value="Suscripciones">Suscripciones</option>
            </select>
          </div>
          <input 
              type="submit" 
              value={Object.values(gastoEditar).length > 0 ? 'Guardar cambios' : 'Añadir gasto'} />
          {
            error && 
              <div className='alerta error'>Registra todos los campos</div>
          }
        </form>
    </div>
  )
}

export default Modal