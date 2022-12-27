import {useState} from 'react'

function NuevoPresupuesto({setPresupuesto,presupuesto,setIsValid}) {
  const [error, setError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    

    //Validando presupuesto
    if (presupuesto <= 0 || isNaN(presupuesto)) {
      setError(true)
      return
    }

    
    //Reseteando valores
    setError(false)
    setIsValid(true)
  } 


  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handleSubmit} className='formulario' >
          <div className="campo">
            <label htmlFor="nuevoPresupuesto">Definir Presupuesto</label>
            <input 
                id='nuevoPresupuesto' 
                type="number" 
                className='nuevo-presupuesto' 
                placeholder='Añade tu Presupuesto'
                onChange={e => setPresupuesto(Number(e.target.value))} />
          </div>
          <input id='añadirPresupuesto' type="submit" value="Añadir" />
          {
            error && 
            <div className='alerta error'>El presupuesto no es valido</div>
          }
        </form>
    </div>
  )
}

export default NuevoPresupuesto