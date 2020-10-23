import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import './navbar.scss'

const NavBar = () => {
	return (
		<>
			<Navbar className='color-nav' expand='lg' sticky='top'>
				<Navbar.Brand href='/'>
					<img src='https://i.imgur.com/mL0La8x.png' alt='brand logo' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link className='link' href='/'>
							Home
						</Nav.Link>
						<Nav.Link className='link' href='/about'>
							About
						</Nav.Link>
						<Nav.Link className='link' href='/team'>
							Team
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}

export default NavBar
