import Gasto from './Gasto'

function ListadoGastos({gastos,setGastoEditar,setGastos,gastosFiltrados,filtro}) {


  const handleEliminar = gastoId => {
      const gastoFiltrado = gastos.filter(gasto => gasto.id !== gastoId)
      setGastos(gastoFiltrado)
      console.log(`Eliminando ${gastoId}`);
  }

return (
  <div className="listado-gastos contenedor">
        {
          filtro ? 
          <>
              <h2 className='title-gastos'>{gastosFiltrados.length > 0 ? 'Gastos' : 'No tienes gastos en esta categoria'}</h2> 
              {
                gastosFiltrados.map(gasto => (
                  <Gasto
                      key={gasto.id}
                      gasto={gasto}
                      setGastoEditar={setGastoEditar}
                      handleEliminar={handleEliminar}/>
                ))
              }
            </>
          :  
          <>
              <h2 className='title-gastos'>{gastos.length > 0 ? 'Gastos' : 'No tienes gastos aun'}</h2> 
              {
                gastos.map(gasto => (
                  <Gasto
                      key={gasto.id}
                      gasto={gasto}
                      setGastoEditar={setGastoEditar}
                      handleEliminar={handleEliminar}/>
                ))
              }
          </>
        }
    </div>
  )
}


export default ListadoGastos