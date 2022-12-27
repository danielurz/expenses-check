import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import iconoAhorro from '../../recursos/Materiales App de Gastos/img/icono_ahorro.svg'
import iconoCasa from '../../recursos/Materiales App de Gastos/img/icono_casa.svg'
import iconoComida from '../../recursos/Materiales App de Gastos/img/icono_comida.svg'
import iconoGastos from '../../recursos/Materiales App de Gastos/img/icono_gastos.svg'
import iconoOcio from '../../recursos/Materiales App de Gastos/img/icono_ocio.svg'
import iconoSalud from '../../recursos/Materiales App de Gastos/img/icono_salud.svg'
import iconoSuscripciones from '../../recursos/Materiales App de Gastos/img/icono_suscripciones.svg'

const iconos = {
  Ahorro: iconoAhorro,
  Casa: iconoCasa,
  Comida: iconoComida,
  Gastos: iconoGastos,
  Ocio: iconoOcio,
  Salud: iconoSalud,
  Suscripciones: iconoSuscripciones
}



function Gasto({gasto,setGastoEditar,handleEliminar}) {
  
  const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES',opciones)
  }
  
    const leadingActions = () => (
      <LeadingActions>
          <SwipeAction onClick={() => setGastoEditar(gasto)}>
            Editar
          </SwipeAction>
      </LeadingActions>
    )
    

    const trailingActions = () => (
      <TrailingActions>
          <SwipeAction destructive={true} onClick={() => handleEliminar(gasto.id)}>
            Eliminar
          </SwipeAction>
      </TrailingActions>
    )
  





  return (
    <SwipeableList>
        <SwipeableListItem 
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}>
              <div className="gasto sombra">
                <div className="contenido-gasto">
                  <img src={iconos[gasto.categoria]} alt="iconos" />
                  <div className="descripcion-gasto">
                      <p className="categoria">{gasto.categoria}</p>
                      <p className="nombre-gasto">{gasto.nombre}</p>
                      <p className="fecha-gasto">Agregado el: <span>{formatearFecha(gasto.fecha)}</span></p>
                  </div>
                </div>
                <p className="cantidad-gasto">${gasto.cantidad}</p>
              </div>
        </SwipeableListItem>
      </SwipeableList>
  )
}

export default Gasto