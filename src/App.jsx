import { HomeScreen } from './Screens/HomeScreen/HomeScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './global.css'
import { LoginScreen } from './Screens/LoginScreen/LoginScreen'
import { useEffect } from 'react'
import { auth } from '../firebase'
import { login, logout, selectUser } from './redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ProFileScreen } from './Screens/ProfileScreen/ProFileScreen'

function App() {
	const user = useSelector(selectUser)

	const dispatch = useDispatch()

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			if (userAuth) {
				//logged In
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				)
			} else {
				//logged out
				dispatch(logout())
			}
		})
		return unsubscribe
	}, [dispatch])

	return (
		<div className='app'>
			<BrowserRouter>
				{!user ? (
					<LoginScreen />
				) : (
					<Routes>
						<Route path='/profile' element={<ProFileScreen />} />
						<Route path='/' element={<HomeScreen />} />
					</Routes>
				)}
			</BrowserRouter>
		</div>
	)
}

export default App
