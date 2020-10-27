import React, { useState, useEffect } from 'react'
import Days from '../Days/Days'
import { Route } from 'react-router-dom';

const Home = () => {
	const url = 'https://countlories.herokuapp.com'

	const [days, setDays] = useState([])

	const getDays = () => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				// console.log('this is data', data.data)
				setDays(data.data)
			})
	}

	useEffect(() => {
		getDays()
	}, [])

	return (
		<div className='Home'>
			<Route exact path='/' render={(rp) => ( <Days {...rp} days={days} getDays={getDays}/>)} />
		</div>
	)
}

export default Home
