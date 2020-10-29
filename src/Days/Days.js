import React, { useState } from 'react'
import './days.scss'
import Modal from '../Modal/Modal'
import DateModal from '../DateModal/DateModal'
import { motion, AnimatePresence } from 'framer-motion'

const Days = (props) => {
	// console.log('this is props', props)
	// console.log('day id props', props.days)
	const url = 'https://countlories.herokuapp.com'

	const emptyFood = {
		foodItem: String,
		calories: Number,
		time: String,
	}

	const [currentDay, setCurrentDay] = useState('')
	const [selectedFood, setSelectedFood] = useState(emptyFood)
	const [formData, setFormData] = useState({})
	const [isToggled, setToggle] = useState(false)
	const [isDateToggled, setDateToggle] = useState(false)
	const [dayToggle, setDayToggle] = useState(true)
	const [create, setCreate] = useState(false)
	const [currentFood, setCurrentFood] = useState('')
	const [date, setDate] = useState('')

	const handleCreate = (newFood) => {
		// console.log('create', currentDay)
		fetch(`https://countlories.herokuapp.com/${currentDay}`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newFood),
		}).then(() => props.getDays())
	}

	const handleSelectDate = (date) => {
		// console.log('create', currentDay)
		fetch(`https://countlories.herokuapp.com/${currentDay}`, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(date),
		}).then(() => props.getDays())
	}

	const handleUpdate = (food) => {
		fetch(url + '/food/' + currentFood, {
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

	const handleSubmit = (e) => {
		e.preventDefault()
		create === true ? handleCreate(formData) : handleUpdate(formData)
		setDayToggle(true)
		setToggle(false)
	}

	const handleSubmitDate = (e) => {
		e.preventDefault()
		handleSelectDate(formData)
		setDayToggle(true)
		setDateToggle(false)
	}

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
		console.log('form data', formData)
	}

	let displayDays = (
		<h4>
			Get ready for next week's food journey by clicking the Add New Week button
			above.
		</h4>
	)
	if (props.days[0]) {
		displayDays = props.days.map((days) => {
			console.log('food', days.food)
			let totalCalories = days.food.reduce(
				(accum, item) => accum + item.calories,
				0
			)

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
								<p
									className='select-date'
									onClick={() => {
										setDateToggle(true)
										setDayToggle(false)
										setCreate(false)
										setCurrentDay(days._id)
										setFormData(date)
										setDate(days.date)
									}}>
									Select Date
								</p>
								<h4 className='display-date'>{days.date}</h4>
							</div>

							<p
								className='add'
								onClick={() => {
									setCreate(true)
									setFormData(emptyFood)
									setCurrentDay(days._id)
									setToggle(true)
									setDayToggle(false)
								}}>
								{/* + */}
								{/* <i class="fas fa-plus-circle"></i> */}
								<p className='add-food'>Add Food</p>
								<i class='far fa-plus-square'></i>
							</p>
							<div className='day-body'>
								<p className='total'>Total</p>
								<p className='total-amount'>{totalCalories}</p>
								<p className='foods'>Food</p>
								<p className='calories'>Calories</p>
								<p className='time'>Time</p>
								{days.food.map((food) => {
									return (
										<>
											<p className='foods'>{food.foodItem}</p>
											<p className='calories'>{food.calories}</p>
											<p className='time'>{food.time}</p>
											<p
												className='edit'
												onClick={() => {
													setCreate(false)
													setCurrentFood(food._id)
													setFormData(selectedFood)
													setToggle(true)
													setDayToggle(false)
												}}>
												<i class='fas fa-edit'></i>
											</p>
											<p className='x' onClick={() => deleteFood(food)}>
												<i class='far fa-trash-alt'></i>
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
			<Modal
				isToggled={isToggled}
				setToggle={setToggle}
				setDayToggle={setDayToggle}>
				<div className='form'>
					<form
						food={emptyFood}
						selectFood={selectedFood}
						onSubmit={handleSubmit}>
						<p>What did you eat?</p>
						<input
							type='text'
							name='foodItem'
							onChange={handleChange}
							placeholder='Food Item'
						/>
						<p>How many calories?</p>
						<input
							type='number'
							name='calories'
							onChange={handleChange}
							placeholder='Calories'
						/>
						<p>What time did you eat this?</p>
						<input
							type='text'
							name='time'
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
			<DateModal
				isDateToggled={isDateToggled}
				setDateToggle={setDateToggle}
				setDayToggle={setDayToggle}>
				<div className='date-form'>
					<form onSubmit={handleSubmitDate}>
						<p>What is the date?</p>
						<input
							type='date'
							name='date'
							onChange={handleChange}
							placeholder='date'
						/>
						<input
							className='date-submit-button'
							type='submit'
							value='Submit Date'
						/>
					</form>
				</div>
			</DateModal>
		</motion.div>
	)
}

export default Days
