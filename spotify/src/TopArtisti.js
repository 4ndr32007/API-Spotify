import React, { useContext } from 'react'
import { UserContext } from './App.js'
import './TopArtisti.css'
import { useNavigate } from 'react-router-dom'

const DashBoard = () => {
const apri = useNavigate()

const { data } = useContext(UserContext)

const Visualizza = () => {

	return data.items.map((el, i) => {
		return (
		<div className="artista" key={i}>
			<div className="cardArtista">
				<img className="artista-img" src={el.images[0].url} alt={el.name}/>
				<div className="artista-info">
					<h2 className="artista-name">{el.name}</h2>
					<p className="artista-followers">  Follower: {el.followers.total.toLocaleString()}</p>
					<p className="artista-genres">  Generi: {el.genres.length > 0 ? el.genres.join(', ') : 'N/A'}</p>
					<a className="artista-link"  href={el.external_urls.spotify}  target="_blank"> Vai al profilo Spotify</a>
				</div>
			</div>
		</div>
		)
	})
}

const goBack = () => {
	apri(-1)
}

return (
	<div className="DashBoard">
		{console.log('oggetto: ', data)}
		<h1 id="titolo">I tuoi artisti preferiti sono...</h1>
		<div className="artisti-container">{Visualizza()}</div>

		<div id="frecce">
			<input type='button' value="←" onClick={goBack} id="freccia" />
		</div>

	</div>
)
}


export default DashBoard
