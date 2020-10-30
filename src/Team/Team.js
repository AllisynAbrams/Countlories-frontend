import React, { useState } from 'react'
import './team.scss'
import { motion, AnimatePresence } from 'framer-motion'
import Allisyn from './Allisyn'
import Lien from './Lien'
import Jake from './Jake'

const Team = () => {
	// toggle state to set mount element on and off screen using opacity levels (Framer Motion library)
	// team memeber state to show member info
	// onClick of eaach team memeber will update 1. toggle state and change the opacity value 2. show member information
	const [toggle, setToggle] = useState(true);
	const [allisyn, setAllisyn] = useState(false);
	const [lien, setLien] = useState(false);
	const [jake, setJake] = useState(false);

	return (
		<>
			<div className='team-page'>
				{/* animate presence is a component from Framer Motion that mounts and dismounts html elements - one for each team member; anything between AnimatePresence component is considered a child of the component and can be passed down as a prop named {children} */}
				<AnimatePresence>
					{toggle && (
						<>
							<motion.div
								className='memeber'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								onClick={() => {
									setToggle(false);
									setAllisyn(true);
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
									setToggle(false);
									setLien(true);
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
									setToggle(false);
									setJake(true);
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
										Hi there! I'm Allisyn, an aspiring software developer. My
										background in e-commerce/retail buying and planning has led
										me to develop a user-first/customer-first and analytical
										mindset, which I carry with me throughout my work. My goal
										as a software developer is to bring a sense of ease and
										human connection to our screens through the creation of
										thoughtful, solution-oriented products with intuitive
										functionality.
									</p>
									<br />
									<p>
										For the Countlories project I took on the role of team
										coordinator/tech lead. I was responsible for managing our
										GitHub project repositories, back end and front end
										deployment/testing, and the overall Git and project
										workflows. I helped to maintain a smooth workflow and task
										delegation process through consistent team communication and
										the use of our team collaboration tool on Notion.
										Additionally, I created our UI wireframes using MockFlow,
										helped test backend routes in Postman, de-bugged front end
										issues, worked on the feature to select a date, and did some
										styling with SCSS.
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
										Hello! I'm Lien. Prior to the world of software development,
										my professional background was in finance. I've always been
										interested in tech and figure it was a perfect time to
										pursue my dream. As a current student of General Assembly, I
										am excited to incoporate my financial experience with
										software development.
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
										delete food items. Implemented the use of Framer Motion, an
										animation library, to add animation effects and modals to
										our team and home page.
									</p>
								</div>
							</Jake>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
}

export default Team
