import React, { useState } from 'react'
import './team.scss'
import { motion, AnimatePresence } from 'framer-motion'
import Allisyn from './Allisyn'
import Lien from './Lien'
import Jake from './Jake'

const Team = () => {
	const [toggle, setToggle] = useState(true)
	const [allisyn, setAllisyn] = useState(false)
	const [lien, setLien] = useState(false)
	const [jake, setJake] = useState(false)

	return (
		<>
			<div className='team-page'>
				<AnimatePresence>
					{toggle && (
						<>
							<motion.div
								className='memeber'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								onClick={() => {
									setToggle(false)
									setAllisyn(true)
								}}>
								<h3>Allisyn Abrams</h3>
								<img
									src='https://res.cloudinary.com/dv7inaqe9/image/upload/v1600220941/tfstGTz_nzv8ly.jpg'
									alt='allisyn'
								/>
							</motion.div>
							<motion.div
								className='memeber'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								onClick={() => {
									setToggle(false)
									setLien(true)
								}}>
								<h3>Lien Nguyen</h3>
								<img
									src='https://res.cloudinary.com/lienguyen317/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1600186273/profilepic_skbuus.png'
									alt='lien'
								/>
							</motion.div>
							<motion.div
								className='memeber'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								onClick={() => {
									setToggle(false)
									setJake(true)
								}}>
								<h3>Jake Nguyen</h3>
								<img src='https://i.imgur.com/uCzjr9m.jpg' alt='jake' />
							</motion.div>
						</>
					)}
				</AnimatePresence>
				<AnimatePresence>
					{allisyn && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}>
							<Allisyn
								setToggle={setToggle}
								allisyn={allisyn}
								setAllisyn={setAllisyn}>
								<div>
									<p>
										Hi there! I'm Allisyn, an aspiring software developer. I am
										passionate about usability, visual aesthetics, and bringing
										a sense of ease and human connection to our screens through
										the creation of thoughtful, solution-oriented products and
										intuitive functionality. My background in retail buying and
										planning has helped me develop a user-first/customer-first
										mindset which I carry with me throughout all my work.
									</p>
									<br />
									<p>
										I took on the role of team coordinator, acting as the GitHub
										gatekeeper for our project repos and helping to maintain
										smooth process flows and task delegations through consistent
										communication and the use of our collaboration tool, Notion.
										I helped develop the UI/UX concepts and created our
										wireframes with MockFlow. Additionally.....[add more - help
										test in postman, debug edit food button, select date, some
										styling]
									</p>
								</div>
							</Allisyn>
						</motion.div>
					)}
				</AnimatePresence>
				<AnimatePresence>
					{lien && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}>
							<Lien setToggle={setToggle} lien={lien} setLien={setLien}>
								<div>
									<p>
										Hello! I'm Lien. Prior to the world of software development, my professional background was in finance. I've always been interested in tech and figure it was a perfect time to pursue my dream. As a current student of General Assembly, I am excited to incoporate my financial experience with software development.  
									</p>
									<br />
									<p>
										For this project, I set up the backend server, models and
										controllers using Express, Mongo, and Mongoose. I used
										Postman to test the backend routes and made sure that things
										are running smoothly. Additionally, I also helped set up the
										frontend React architecture and templates.
									</p>
								</div>
							</Lien>
						</motion.div>
					)}
				</AnimatePresence>
				<AnimatePresence>
					{jake && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}>
							<Jake setToggle={setToggle} jake={jake} setJake={setJake}>
								<div>
									<p>
										Hi! I was an optician who wanted a career change and came to
										General Assembly to start that process. I love playing video
										games during my free time and wish to pursue a career in
										game design one day.
									</p>
									<br />
									<p>
										I spent most of my time on this project working on the
										frontend for Countlories. I did the basic React component
										structures, majority of the styling, as well as some of the
										functionality to connect to our backend to create, edit, and
										delete food items.
									</p>
								</div>
							</Jake>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	)
}

export default Team
