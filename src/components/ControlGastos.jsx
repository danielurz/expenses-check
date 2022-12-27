import {useState,useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'


function ControlGastos({presupuesto,gastos,filtro,gastosFiltrados,setGastos,setPresupuesto,setIsValid}) {
  const [gastado, setGastado] = useState(0)
  const [gastadoFiltrado, setGastadoFiltrado] = useState(0)
  const [porcentaje, setPorcentaje] = useState(0)
  const [porcentajeFiltrado, setPorcentajeFiltrado] = useState(0)


  
  useEffect(() => {
    const totalGastos = gastos.reduce((acum,gasto) => gasto.cantidad + acum, 0)
    setGastado(totalGastos)

    const nuevoPocentaje = (totalGastos / presupuesto * 100).toFixed(2)
    setPorcentaje(nuevoPocentaje)
  }, [gastos])
  

  useEffect(() => {
      const totalGastosFiltrados = gastosFiltrados.reduce((acum,gastofiltrado) => gastofiltrado.cantidad + acum,0)
      setGastadoFiltrado(totalGastosFiltrados)

      const nuevoPocentajeFiltrado = (totalGastosFiltrados / presupuesto * 100).toFixed(2)
      setPorcentajeFiltrado(nuevoPocentajeFiltrado)
  }, [gastosFiltrados])
  



  const formatearCantidad = cantidad => (
    cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency : 'USD'
    })
  )

   
  const handleReset = () => {
    const resultado = confirm('¿Desear reiciar presupuesto y gastos?')
    
    if(resultado) {
      setGastos([])
      setPresupuesto(0)
      setIsValid(false)
    }
  }



  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
          <CircularProgressbar
              styles={buildStyles({
                pathColor: "#3b82f6",
                trailColor: "#f5f5f5",
                textColor: "#3b82f6"
              })}
              value={filtro ? porcentajeFiltrado : porcentaje}
              text={`${filtro ? porcentajeFiltrado : porcentaje}% Gastado`}/>
        </div>
        <div className="contenido-presupuesto">
          <button 
              className='reset-app' 
              type='button'
              onClick={handleReset}>Resetear App</button>
          <p><span>Presupuesto: </span>{formatearCantidad(presupuesto)}</p>
          <p><span>Gastado: </span>{filtro ? formatearCantidad(gastadoFiltrado) : formatearCantidad(gastado)}</p>
          <p><span>Disponible: </span>{formatearCantidad(presupuesto - gastado)}</p>
        </div>
    </div>
  )
}

export default ControlGastos