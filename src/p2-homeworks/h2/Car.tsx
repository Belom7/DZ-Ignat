import React from "react";
import {defaultCarsType} from "./AlternativeAffairs";

type CarType = {
    data:defaultCarsType,
    deleteCar:(id:number)=>void
}


export const Car: React.FC<CarType> = (props) => {
    return (
        <div key={props.data.id}>
            <div>
                <button onClick={()=>props.deleteCar(props.data.id)}>X</button>{props.data.id}) {props.data.model}
            </div>
        </div>
    )
}