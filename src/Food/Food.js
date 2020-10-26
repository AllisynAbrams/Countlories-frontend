import React from 'react'
import './food.scss'

const Food = (props) => {
    const {food} = props



    const loaded = () => {

        {food.map((food) => {
            <div>
			    <p>{food.time}</p>
				<p>{food.foodItem}</p>
				<p>{food.calories}</p>


                  <button onClick={() => {
            props.selectFood(food) /*bc we're in a map, we know the "food to update when we click the edit button is the food being passed through in this instance/round of mapping*/
            // props.history.push('/edit') /*Push back to home page after clicking on edit button (changes the url back to just "/") / history a method found within router props */
          }}>Edit</button>

                <button onClick={() => {props.deleteFood(food)}}>X</button>

			</div>;
        })}
    }


    return food.length > 0 ? loaded() : <h1>LOADING...</h1>
}

export default Food;