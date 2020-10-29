import React, { useState, useEffect } from 'react'
import Days from '../Days/Days'
import { Route } from 'react-router-dom'
import './home.scss'

const Home = () => {
	const url = 'https://countlories.herokuapp.com'

	//  state to set day "cards" and the data they hold inside of them
	const [days, setDays] = useState([])

	//  making the API call to deployed backend URL
	const getDays = () => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				// console.log('this is data', data.data)
				setDays(data.data)
			})
	}

	// show seeded empty week on mount
	useEffect(() => {
		getDays()
	}, [])

	// console.log('this is days', days)

	// delete all days
	const deleteDays = () => {
		fetch(url, {
			method: 'delete',
		}).then(() => getDays())
	}

	// re-seeding empty week
	const createDays = (day) => {
		fetch(url + '/seed', {
			method: 'get',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(day),
		}).then(() => getDays())
	}

	return (
		<div className='Home'>
			<div className='home-buttons'>
				<div className='delete-week' onClick={() => deleteDays()}>
					<p>Clear</p>
					<i class='far fa-calendar-minus'></i>
				</div>
				<div className='new-week' onClick={() => createDays()}>
					<p>Add New Week</p>
					<i class='far fa-calendar-plus'></i>
				</div>
			</div>

			<Route
				exact
				path='/'
				render={(rp) => <Days {...rp} days={days} getDays={getDays} />}
			/>
		</div>
	);
}

export default Home
