import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<>
			<h1>Modal Site made by HoiLen</h1>

			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/register">Register</Link></li>
					<li><Link to="/login/">--Login--</Link></li>
				</ul>
			</nav>
		</>
	)
}

export default Header