import React from "react";
import {defaultCarsType, filterType} from "./AlternativeAffairs";
import {Car} from "./Car";

type CarsType = {
    data: defaultCarsType[],
    deleteCar:(id:number)=>void
    setFilter:(value:filterType)=>void
}

export const Cars: React.FC<CarsType> = (props) => {

    const mapingCar = props.data.map((m: defaultCarsType) => (<Car key={m.id} data={m} deleteCar={props.deleteCar}/>))

    const set1mln = () => {props.setFilter(700000)}
    const set2mln = () => {props.setFilter(1000000)}
    const set3mln = () => {props.setFilter(2000000)}
    const set4mln = () => {props.setFilter(3000000)}
    const set5mln = () => {props.setFilter(4000000)}

    return (
        <div>
            <div>Model Auto:</div>
            <div>{mapingCar}</div>

            <button onClick={set1mln}>Auto up to 1 million</button>
            <button onClick={set2mln}>Auto up to 2 million</button>
            <button onClick={set3mln}>Auto up to 3 million</button>
            <button onClick={set4mln}>Auto up to 4 million</button>
            <button onClick={set5mln}>Auto up to 5 million</button>
        </div>
    )
}