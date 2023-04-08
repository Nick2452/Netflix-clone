import React from 'react'
import './ProFileScreen.css'
import { NavBar } from '../../components/Nav/NavBar'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/userSlice'
import { auth } from '../../../firebase'

export const ProFileScreen = () => {
	const user = useSelector(selectUser)

	return (
		<div className='profileScreen'>
			<NavBar />
			<div className='profileScreen__body'>
				<h2>Edit Profile</h2>
				<div className='profileScreen__info'>
					<img
						className='profileScreen__img'
						src='https://www.pngkit.com/png/full/25-258694_cool-avatar-transparent-image-cool-boy-avatar.png'
						alt='avatar'
					/>
					<div className='profileScreen__details'>
						<h2>{user.email}</h2>
						<div className='profileScreen__plans'>
							<h3>Plans (Current Plan: premium )</h3>
							<button onClick={() => auth.signOut()} className='profileScreen__signOut'>
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
