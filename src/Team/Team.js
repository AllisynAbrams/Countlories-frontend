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
					<p>About Allisyn</p>
					<p>What Allisyn did for Countlories</p>
				</div>
				<div className='memeber'>
					<h3>Lien Nguyen</h3>
					<img
						src='https://res.cloudinary.com/lienguyen317/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1600186273/profilepic_skbuus.png'
						alt='lien'
					/>
					<p>About Lien</p>
					<p>What Lien did for Countlories</p>
				</div>
				<div className='memeber'>
					<h3>Jake Nguyen</h3>
					<img src='https://i.imgur.com/uCzjr9m.jpg' alt='jake' />
					<p>About Jake</p>
					<p>What Jake did for Countlories</p>
				</div>
			</div>
		</>
	)
}

export default Team
