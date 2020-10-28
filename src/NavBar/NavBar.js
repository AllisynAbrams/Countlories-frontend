import React, {useState} from 'react'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import './navbar.scss'

const NavBar = () => {

	const [collapsed, setCollapsed] = useState(true)

	const toggleNavbar = () => setCollapsed(!collapsed)

	return (
		<>
			<Navbar color='faded' light className='color-nav' sticky='top' expand='lg'>
				<NavbarBrand href='/' className='mr-auto'>
					<img src='https://i.imgur.com/mL0La8x.png' alt='brand logo' />
				</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} className='mr-2' />
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href='/'><b>Home</b>&nbsp;<i className="fas fa-home" style={{color: "#76e9ff"}}></i></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/team'><b>Team</b>&nbsp;<i class="fas fa-users" style={{color: "#76e9ff"}}></i></NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/about'><b>About</b>&nbsp;<i class="fas fa-info-circle" style={{color: "#76e9ff"}}></i></NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</>
	)
}

export default NavBar
