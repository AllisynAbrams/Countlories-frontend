import React, { useState } from 'react'
import './about.scss'
import { motion } from 'framer-motion'

const About = () => {
	const [isToggled, setIsToggled] = useState(0)

	return (
		<div className='about'>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
				onClick={() =>
					setIsToggled((prevValue) => {
						return prevValue ? 0 : 1
					})
				}>
				What is Countlories?
			</motion.h1>
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: isToggled }}
				transition={{ duration: 1 }}>
				Countlories is an all purpose food/calorie tracker. This response web
				app help user track and count their daily food and calorie consumption
				by displaying food/calories and total calories by day. It incorporates a
				form which allows a user to add a new food and its calories to a given
				day, as well as edit a food. As a user adds new foods, the daily total
				calorie intake will increase. This app can be used to track
				foods/calories as consumed or as a weekly food/calorie planner.
			</motion.p>
			<motion.img
				initial={{ opacity: 0 }}
				animate={{ opacity: isToggled }}
				transition={{ duration: 2 }}
				src='https://vavista.com/wp-content/uploads/2019/07/calories-count-vegetables-750x400.jpg'
				alt='img'
			/>
		</div>
	)
}

export default About
