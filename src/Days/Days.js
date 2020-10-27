import React, { useState, useEffect } from 'react'
import './days.scss'
import Modal from '../Modal/Modal'
import { motion, AnimatePresence } from 'framer-motion'

const Days = (props) => {
	// console.log('this is props', props)
	console.log('day id props', props.days)
	const url = 'https://countlories.herokuapp.com'
	const emptyFood = {
		foodItem: String,
		calories: Number,
		time: String,
	}

	const [food, setFood] = useState([])
	const [currentDay, setCurrentDay] = useState('')
	const [selectedFood, setSelectedFood] = useState(emptyFood)
	const [formData, setFormData] = useState({})
	const [isToggled, setToggle] = useState(false)
	const [dayToggle, setDayToggle] = useState(true)

	const handleCreate = (newFood) => {
		console.log('create', currentDay)
		fetch(`https://countlories.herokuapp.com/${currentDay}`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newFood),
		}).then(() => props.getDays())
	}

	const handleUpdate = (food) => {
		fetch(url + '/food/' + food._id, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(food),
		}).then(() => props.getDays())
	}

	const deleteFood = (food) => {
		fetch(url + '/food/' + food._id, {
			method: 'delete',
		}).then(() => props.getDays())
	}

	const selectFood = (food) => {
		setSelectedFood(food)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		handleCreate(formData)
	}

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	let displayDays = <h1>Loading...</h1>
	if (props.days[0]) {
		displayDays = props.days.map((days) => {
			return (
				<AnimatePresence>
					{dayToggle && (
						<motion.div
							className='day'
							key={days._id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}>
							<div className='day-header'>
								<p>{days.day}</p>
								<input type='date' />
								<h4>{days.date}</h4>
							</div>
							<p
								className='add'
								onClick={(e) => {
									setToggle(true)
									setDayToggle(false)
									setCurrentDay(days._id)
								}}>
								+
							</p>
							<div className='day-body'>
								<p className='total'>Total</p>
								<p className='total-amount'></p>
								<p className='foods'>Food</p>
								<p className='calories'>Calories</p>
								{days.food.map((food) => {
									return (
										<>
											<p className='foods'>{food.foodItem}</p>
											<p className='calories'>{food.calories}</p>
											<p className='edit'>Edit</p>
											<p className='x' onClick={() => deleteFood(food)}>
												X
											</p>
										</>
									)
								})}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			)
		})
	}

	return (
		<motion.div
			className='Days'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}>
			<Modal isToggled={isToggled} setToggle={setToggle} setDayToggle={setDayToggle}>
				<div className='form'>
					<form onSubmit={handleSubmit} food={emptyFood}>
						<p>What did you eat?</p>
						<input
							type='text'
							name='foodItem'
							// value={formData.foodItem}
							onChange={handleChange}
							placeholder='Food Item'
						/>
						<p>How many calories?</p>
						<input
							type='number'
							name='calories'
							// value={formData.calories}
							onChange={handleChange}
							placeholder='Calories'
						/>
						<p>What time did you eat this?</p>
						<input
							type='text'
							name='time'
							// value={formData.time}
							onChange={handleChange}
							placeholder='Time (eg: 2:00pm)'
						/>
						<input
							className='countlories-btn'
							type='submit'
							value='COUNTLORIES'
						/>
					</form>
				</div>
			</Modal>
			{displayDays}
		</motion.div>
	)
}

export default Days
