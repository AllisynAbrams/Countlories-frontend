import React, { useState, useEffect } from 'react'
import Form from '../Form/Form'
import Food from '../Food/Food'
import './days.scss'

const Days = (props) => {
	// console.log('this is props', props)
	const url = 'https://countlories.herokuapp.com'
	const emptyFood = {
		foodItem: String,
		calories: Number,
		time: String,
    }
    
    const [food, setFood] = useState([])
    const [selectFood, setSelectFood] = useState

	const getFoods = () => {
		fetch(url + '/food/')
			.then((res) => res.json())
			.then((data) => {
				console.log('this is data', data)
				setFood(data.data)
			})
	}

	useEffect(() => {
		getFoods()
	}, [])

	const handleCreate = (food) => {
		fetch(url + '/food/', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(food),
		})
	}

	const deleteFood = (food) => {
		fetch(url + '/food/' + food._id, {
			method: 'delete',
		}).then((res) => getFoods())
	}

	let displayDays = <h1>Loading...</h1>
	if (props.days[0]) {
		displayDays = props.days.map((days) => {
			return (
				<div className='day' key={days._id}>
					<div className='day-header'>
						<h2>{days.day}</h2>
						<p>test date</p>
						<h4>+</h4>
						<h4>{days.date}</h4>
					</div>
					<div className='day-body'>
						<p>Total</p>
						<p>{days.food}</p>
					</div>
				</div>
			)
		})
	}

	return (
		<div className='Days'>
			{displayDays}
			{/* <Form emptyFood={emptyFood} handleSubmit={handleCreate}/> */}
			{/* <Food food={food} /> */}
		</div>
	)
}

export default Days
