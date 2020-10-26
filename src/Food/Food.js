import React, {useState, useEffect} from 'react'
import './food.scss'

const Food = (props) => {
    console.log('Food props - ', props)
    // const {food} = props

    // useEffect (() => props.getFoods(), [])

    const loaded = () => {
        props.food.map((food) => {
            <div className='food'>

			    <p>{food.time}</p>
				<p>{food.foodItem}</p>
				<p>{food.calories}</p>

                <button onClick={() => {props.selectFood(food) }}>Edit</button>

                <button onClick={() => {props.deleteFood(food)}}>X</button>

			</div>;
        })
    }


    return props.food.length > 0 ? loaded() : <h1>LOADING...</h1>;
}

export default Food;