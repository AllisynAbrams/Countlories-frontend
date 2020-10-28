import React from 'react'
import './team.scss'

const Team = () => {
	return (
		<>
			<div className='team-page'>
				<div className='memeber'>
					<h3>Allisyn Abrams</h3>
					<img
						src='https://res.cloudinary.com/dv7inaqe9/image/upload/v1600220941/tfstGTz_nzv8ly.jpg'
						alt='allisyn'
					/>
					<div>
						<p>
							Hi there! I'm Allisyn, an aspiring software developer. I am
							passionate about usability, visual aesthetics, and bringing a
							sense of ease and human connection to our screens through the
							creation of thoughtful, solution-oriented products and intuitive
							functionality. My background in retail buying and planning has
							helped me develop a user-first/customer-first mindset which I carry with me throughout all my work.
						</p>
						<br />
						<p>
							I took on the role of team coordinator, acting as the GitHub
							gatekeeper for our project repos and helping to maintain smooth
							process flows and task delegations through consistent
							communication and the use of our collaboration tool, Notion. I
							helped develop the UI/UX concepts and created our wireframes with
							MockFlow. Additionally.....[add more - help test in postman, debug edit food button, select date, some styling]
						</p>
					</div>
				</div>
				<div className='memeber'>
					<h3>Lien Nguyen</h3>
					<img
						src='https://res.cloudinary.com/lienguyen317/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1600186273/profilepic_skbuus.png'
						alt='lien'
					/>
					<div>
						<p>
							Hello! I'm an aspired full stack software engineer student at
							General Assembly.
						</p>
						<br />
						<p>
							For this project, I set up the backend server, models and
							controllers using Express, Mongo, and Mongoose. I used Postman to
							test the backend routes and made sure that things are running
							smoothly. Additionally, I also helped set up the frontend React
							architecture and templates.
						</p>
					</div>
				</div>
				<div className='memeber'>
					<h3>Jake Nguyen</h3>
					<img src='https://i.imgur.com/uCzjr9m.jpg' alt='jake' />
					<div>
						<p>
							Hi! I was an optician who wanted a career change and came to
							General Assembly to start that. I love playing video games during
							my free time and wish to pursue a career in game design one day.
						</p>
						<br />
						<p>
							For Countlories I handled a lot of the frontend design and
							functionalities. I worked on majority of the styling for the
							webpage and setting up some of the CRUD to link towards our
							backend database.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Team
