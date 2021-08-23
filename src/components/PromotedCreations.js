import React from 'react'
import Cards from './Cards'

function PromotedCreations() {

    const name = "NFC"
    const price = 60
    const user = "Harry"

    return (
        <div>
            Promoted Creations
            <Cards name = {name} price = {price} user = {user}/>
        </div>
    )
}

export default PromotedCreations
