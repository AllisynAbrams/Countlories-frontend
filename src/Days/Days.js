import React, { useState } from 'react'
import './days.scss'
import Modal from '../Modal/Modal'
import DateModal from '../DateModal/DateModal'
import { motion, AnimatePresence } from 'framer-motion'

const Days = (props) => {
	// console.log('this is props', props)
	// console.log('day id props', props.days)
	const url = 'https://countlories.herokuapp.com';

	const emptyFood = {
		foodItem: String,
		calories: Number,
		time: String,
	};

	// on click of the Add Food and Select Date buttons within each "day card" sets currentDay and add foods and date to the backend DB
	const [currentDay, setCurrentDay] = useState('');
	// sets formData to empty object
	const [formData, setFormData] = useState({});
	// toggle between day cards and add new food and edit food forms
	const [isToggled, setToggle] = useState(false);
	// toggle between day cards and select date form
	const [isDateToggled, setDateToggle] = useState(false);
	// toggle between day cards and food or date form
	const [dayToggle, setDayToggle] = useState(true);
	// used to determine whether we are submitting a create or edit fetch call
	const [create, setCreate] = useState(false);
	// set the food we are editing and send edits to the backend DB
	const [currentFood, setCurrentFood] = useState('');
	// set the date we are editing
	const [date, setDate] = useState('');

	const handleCreate = (newFood) => {
		// console.log('create', currentDay)
		fetch(`https://countlories.herokuapp.com/${currentDay}`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newFood),
		}).then(() => props.getDays());
	};

	const handleSelectDate = (date) => {
		// console.log('create', currentDay)
		fetch(`https://countlories.herokuapp.com/${currentDay}`, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(date),
		}).then(() => props.getDays());
	};

	// onClick of edit button we change the state of currentFood to be that food's unique _id and then use that _id in our fetch call based on the defined backend controller route for editing an individual food
	const handleUpdate = (food) => {
		fetch(url + '/food/' + currentFood, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(food),
		}).then(() => props.getDays());
	};

	const deleteFood = (food) => {
		fetch(url + '/food/' + food._id, {
			method: 'delete',
		}).then(() => props.getDays());
	};

	// if create state is true then use the handleCreate function in handleSubmit()/onSubmit(), if create is false then use handleUpdate function in handleSubmit()/onSubmit()
	const handleSubmit = (e) => {
		e.preventDefault();
		create === true ? handleCreate(formData) : handleUpdate(formData);
		setDayToggle(true);
		setToggle(false);
	};

	// sets the selected date
	const handleSubmitDate = (e) => {
		e.preventDefault();
		handleSelectDate(formData);
		setDayToggle(true);
		setDateToggle(false);
	};


	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		// console.log('form data', formData);
	};

	// if there is no data in the days array (state props from Home comp) then render the h4, otherwise render days and food data
	let displayDays = (
		<h4>
			Get ready for next week's food journey by clicking the Add New Week button
			above.
		</h4>
	);
	if (props.days[0]) {
		displayDays = props.days.map((days) => {
			// console.log('food', days.food);
			// reduce function takes the current calories value and adds it to the next item (days) as we loop through the array (first argument is current value, second argument is item we are looping through)
			let totalCalories = days.food.reduce(
				(accum, item) => accum + item.calories,
				0
			);

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
										setDateToggle(true);
										setDayToggle(false);
										setCreate(false);
										setCurrentDay(days._id);
										setFormData(date);
										setDate(days.date);
									}}>
									Select Date
								</p>
								<h5 className='display-date'>{days.date}</h5>
							</div>

							<p
								className='add'
								onClick={() => {
									setCreate(true);
									setFormData(emptyFood);
									setCurrentDay(days._id);
									setToggle(true);
									setDayToggle(false);
								}}>
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
													setCreate(false);
													setCurrentFood(food._id);
													setToggle(true);
													setDayToggle(false);
												}}>
												<i class='fas fa-edit'></i>
											</p>
											<p className='x' onClick={() => deleteFood(food)}>
												<i class='far fa-trash-alt'></i>
											</p>
										</>
									);
								})}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			);
		});
	}

	return (
		<motion.div
			className='Days'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}>
			{/* Modal component to render the food/edit form */}
			<Modal
				isToggled={isToggled}
				setToggle={setToggle}
				setDayToggle={setDayToggle}>
				<div className='form'>
					{/* part of handleSubmit function is determined by ternary operator (to either create/post or edit/put */}
					<form food={emptyFood} onSubmit={handleSubmit}>
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
			{/* DateModal component to render the select date form */}
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
	);
}

export default Days
