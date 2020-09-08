import React from 'react'
import MenuCarta from '../components/MenuCarta/MenuCarta'
import MenuLateral from '../components/MenuLateral/MenuLateral'
import MenuPedido from '../components/MenuPedido/MenuPedido'
import MenuAlmuerzo from '../components/MenuAlmuerzo/MenuAlmuerzo'
import MenuEnsaladas from '../components/MenuEnsaladas/MenuEnsaladas'
import MenuLicores from '../components/MenuLicores/MenuLicores'


function PedidosMesero() {
    return(
    <div>
        
        <MenuEnsaladas/>
        <MenuAlmuerzo/>
        <MenuLicores/>
        <MenuCarta/>
        <MenuLateral/>
        <MenuPedido/>
        
    </div> 
    )
}


export default PedidosMesero