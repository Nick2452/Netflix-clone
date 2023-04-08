import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {
	const [show, setHendleShow] = useState(false)

	const navigate = useNavigate()

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			setHendleShow(true)
		} else {
			setHendleShow(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', transitionNavBar)
		return () => window.removeEventListener('scroll', transitionNavBar)
	}, [])

	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<div className='nav__content'>
				<img
					onClick={() => navigate('/')}
					className='nav__logo'
					src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
					alt='logo'
				/>
				<img
					onClick={() => navigate('/profile')}
					className='nav__avatar'
					src='https://www.pngkit.com/png/full/25-258694_cool-avatar-transparent-image-cool-boy-avatar.png'
					alt='avatar'
				/>
			</div>
		</div>
	)
}
