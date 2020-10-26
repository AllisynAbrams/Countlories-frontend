import React, { useState, useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
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
		fetch(url + '/food/', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(food),
		}).then((response) => getFoods)
	}

	const handleUpdate = (food) => {
		fetch(url + '/food/' + food._id, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(food),
		}).then((response) => getFoods)
	}

	const deleteFood = (food) => {
		fetch(url + '/food/' + food._id, {
			method: 'delete',
		}).then((res) => getFoods())
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

			{/* <Route
				exact
				path='/'
				render={(rp) => (
					<Food
						{...rp}
						food={food}
						selectFood={selectFood}
						deleteFood={deleteFood}
						getFoods={getFoods}
					/>
				)}
			/> */}

			<Switch>
				<Food
					food={food}
					selectFood={selectFood}
					deleteFood={deleteFood}
					getFoods={getFoods}
				/>
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