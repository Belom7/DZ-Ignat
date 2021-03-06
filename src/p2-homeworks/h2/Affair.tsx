import React from 'react'
import {AffairType, filterAffairs} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div>
            <button onClick={deleteCallback}>X</button>

            {props.affair.name}
        </div>
    )
}

export default Affair
