import React, {useState} from 'react'
import {Cars} from "./Cars";

//type
export type defaultCarsType = { id: number, model: string, price: number }
export type priceType = 700000 | 1000000 | 2000000 | 3000000 | 4000000
export type filterType = 5000000 | priceType

const defaultCars = [
    {id: 1, model: 'VAZ', price: 700000},
    {id: 2, model: 'Hyndai', price: 1000000},
    {id: 3, model: 'Skoda', price: 2000000},
    {id: 4, model: 'Audi', price: 3000000},
    {id: 5, model: 'BMW', price: 4000000}
]

function AlternativeAffairs() {

    const [cars, setCars] = useState<defaultCarsType[]>(defaultCars)
    const [filter, setFilter] = useState<filterType>(5000000)

    const filterCarsOfPrice = (cars: defaultCarsType[], filter: filterType) => {
        return filter < 1000000 ? cars.filter(f => f.price < 1000000) :
            filter < 2000000 ? cars.filter(f => f.price < 2000000) :
                filter < 3000000 ? cars.filter(f => f.price < 3000000) :
                    filter < 4000000 ? cars.filter(f => f.price < 4000000) :
                        cars.filter(f => f.price < 5000000)
    }

    const deleteCar = (id: number) => {
        setCars(cars.filter(f => f.id != id))
    }
    const filteredCars = filterCarsOfPrice(cars, filter)


    return (
        <div>
            <h3>Auto market</h3>
            <Cars data={filteredCars} deleteCar={deleteCar} setFilter={setFilter}/>
        </div>
    )
}

export default AlternativeAffairs
