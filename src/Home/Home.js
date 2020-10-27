import React, { useState, useEffect } from 'react'
import Days from '../Days/Days'

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
			<Days days={days} />
		</div>
	)
}

export default Home
