import React, { useState, useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Form from '../Form/Form'
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
	const [selectedFood, setSelectedFood] = useState(emptyFood)

	const getFoods = () => {
		fetch(url + '/food/')
			.then((res) => res.json())
			.then((data) => {
				console.log('this is data', data)
				setFood(data)
			})
	}

	useEffect(() => {
		getFoods()
	}, [])

	const handleCreate = (food) => {
		fetch(url, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(food),
		}).then(() => getFoods())
	}

	const handleUpdate = (food) => {
		fetch(url + '/food/' + food._id, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(food),
		}).then(() => getFoods())
	}

	const deleteFood = (food) => {
		fetch(url + '/food/' + food._id, {
			method: 'delete',
		}).then(() => getFoods())
	}

	const selectFood = (food) => {
		setSelectedFood(food)
	}

	let displayDays = <h1>Loading...</h1>
	if (props.days[0]) {
		displayDays = props.days.map((days) => {
			return (
				<div className='day' key={days._id}>
					<div className='day-header'>
						<p>{days.day}</p>
						<p>test date</p>
						<h4>{days.date}</h4>
					</div>
					<Link to='/create'>
						<p className='add'>+</p>
					</Link>
					<div className='day-body'>
						<p className='total'>Total</p>
						<p className='total-amount'>###</p>
						<p className='foods'>Food</p>
						<p className='calories'>Calories</p>
						{days.food.map((food) => {
							return (
								<>
									<p className='foods'>{food.foodItem}</p>
									<p className='calories'>{food.calories}</p>
									<p className='edit'>Edit</p>
									<p className='x'>X</p>
								</>
							)
						})}
					</div>
				</div>
			)
		})
	}

	return (
		<div className='Days'>
			{displayDays}
			<Switch>
				<Route
					exact
					path='/create'
					render={(rp) => (
						<Form
							{...rp}
							label='create'
							food={emptyFood}
							handleSubmit={handleCreate}
						/>
					)}
				/>
				<Route
					exact
					path='/edit'
					render={(rp) => (
						<Form
							{...rp}
							label='update'
							food={selectedFood}
							handleSubmit={handleUpdate}
						/>
					)}
				/>
			</Switch>
		</div>
	)
}

export default Days
