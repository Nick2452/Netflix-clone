import React from 'react'
import './HomeScreen.css'
import { NavBar } from '../../components/Nav/NavBar'
import { Banner } from '../../components/Banner/Banner'
import requests from '../../api/request'
import { Row } from '../../components/Row/Row'
export const HomeScreen = () => {
	return (
		<div className='homeScreen'>
			<NavBar />

			<Banner />

			<Row
				title='Netflix Original'
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title='Trending Now' fetchUrl={requests.fetchTrending} />
			<Row title='Top Rate' fetchUrl={requests.fetchTopRated} />
			<Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
			<Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
			<Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
			<Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
			<Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
		</div>
	)
}
