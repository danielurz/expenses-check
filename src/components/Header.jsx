import NuevoPresupuesto from './NuevoPresupuesto'
import ControlGastos from './ControlGastos'

function Header({setPresupuesto,presupuesto,setIsValid,isValid,gastos,filtro,gastosFiltrados,setGastos}) {
  return (
    <header>
        <h1>Planificador de gastos</h1>
        {
          !isValid ?
          <NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              setIsValid={setIsValid} />
              :
           <ControlGastos
              presupuesto={presupuesto}
              gastos={gastos}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
              setGastos={setGastos}
              setPresupuesto={setPresupuesto}
              setIsValid={setIsValid} /> 
        }
    </header>
  )
}

export default Header