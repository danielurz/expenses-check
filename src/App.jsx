import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconoNuevoGasto from '../recursos/Materiales App de Gastos/img/nuevo-gasto.svg'
import ListadoGastos from './components/ListadoGastos'
import Filtros from './components/Filtros'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [gastos, setGastos] = useState([])
  const [isValid, setIsValid] = useState(false)
  const [modal, setModal] = useState(false)
  const [gastoEditar, setGastoEditar] = useState({})
  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  useEffect(() => {
    if(filtro) {
      const gastosFiltro = gastos.filter(gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastosFiltro)
    } else {
      setGastosFiltrados([])
    }
  }, [filtro])  

  useEffect(() => {
    if (Object.values(gastoEditar).length > 0) {
      setModal(true)

    }
}, [gastoEditar])


const generarId = () => {
  const random = Math.random().toString(36).substr(2)
  const date = Date.now().toString(36)

  return date + random
}

  const guardarGastos = gasto => {
    if (gasto.id) {
      console.log('editando gasto')
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
    } else {
      console.log('Creando gasto');
      gasto.id = generarId()
      setGastos([...gastos,gasto])
    }
  }

   
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValid={isValid}
          setIsValid={setIsValid}
          gastos={gastos}
          filtro={filtro}
          gastosFiltrados={gastosFiltrados}
          setGastos={setGastos} />
      {
        isValid &&
          <>
              <main>
                <Filtros
                    filtro={filtro}
                    setFiltro={setFiltro} />
                <ListadoGastos
                    setGastoEditar={setGastoEditar}
                    gastos={gastos}
                    gastosFiltrados={gastosFiltrados}
                    filtro={filtro}
                    setGastos={setGastos} />
              </main>
              <div className="nuevo-gasto">
                  <img src={IconoNuevoGasto} alt="Icono nuevo gasto" onClick={() => setModal(true)}/>
              </div>
          </>
      }
      {
        modal &&
          <Modal 
              setModal={setModal}
              setGastos={setGastos}
              gastos={gastos}
              guardarGastos={guardarGastos}
              setGastoEditar={setGastoEditar}
              gastoEditar={gastoEditar} />
      }
    </div>
  )
}

export default App
