import React, {useState} from 'react'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import './navbar.scss'

const NavBar = () => {

	const [collapsed, setCollapsed] = useState(true)

	const toggleNavbar = () => setCollapsed(!collapsed)

	return (
		<>
			<Navbar color='faded' light className='color-nav'>
				<NavbarBrand href='/' className='mr-auto'>
					<img src='https://i.imgur.com/mL0La8x.png' alt='brand logo' />
				</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} className='mr-2' />
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href='/'>Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/team'>Team</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/about'>About</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</>
	)
}

export default NavBar
