import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../api/axios'
import requests from '../../api/request'

export const Banner = () => {
	const [movie, setMovie] = useState([])

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals)
			setMovie(
				request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
			)

			return requests
		}
		fetchData()
	}, [])

	const truncate = (sting, n) => {
		return sting?.length > n ? sting.substr(0, n - 1) + '...' : sting
	}

	return (
		<header
			className='banner'
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
				backgroundPosition: 'center center',
			}}
		>
			<div className='banner__content'>
				<h1 className='banner__title'>
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className='banner__buttons'>
					<button className='banner__button'>Play</button>
					<button className='banner__button'>MyList</button>
				</div>
				<h2 className='banner__descr'>{truncate(`${movie.overview}`, 170)}</h2>
			</div>
			<div className='banner--fadeBottom' />
		</header>
	)
}
