import { useState } from "react"
import Merch from "./Merch"
export default function Cart({basket}){

    return(
        <>
            <div>
                {basket.map((item, index) => {
                    return(
                        <div key={index}>
                            <p>{item.name}</p>
                            <p>Price: {item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}