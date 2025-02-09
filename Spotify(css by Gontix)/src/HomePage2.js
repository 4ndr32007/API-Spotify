import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage2.css'

const HomePage2 = () => {
	const apri = useNavigate()

	const Naviga = (pag) => {
		apri(`/${pag}`)
	}

	return (
		<div id="container">
				<header id="header">
					<h1 id="titolo">Benvenuto nella Dashboard Musicale</h1>
					<p>Esplora i tuoi artisti preferiti, scopri nuove canzoni e rimani aggiornato con le ultime classifiche</p>
				</header>

				<div id="opzioni">
					<div className="card" onClick={() => Naviga('top-artisti')}>
						<h2>🎤 Artisti Preferiti</h2>
						<p>Scopri i tuoi artisti<br/>preferiti e più ascoltati</p>
					</div>

					<div className="card" onClick={() => Naviga('canzoni-consigliate')}>
						<h2>🎶 Brani Consigliati</h2>
						<p>Ascolta nuove canzoni<br/>basate sui tuoi gusti</p>
					</div>

					<div className="card" onClick={() => Naviga('classifiche')}>
						<h2>📈 Brani Preferiti</h2>
						<p>Scopri le canzoni che<br/>hai ascoltato di più</p>
					</div>
				</div>

		</div>
	)
}

export default HomePage2


/*
	->🌍 Ottieni le classifiche globali
			-Recupera le playlist più ascoltate di un paese
				Endpoint: /v1/browse/categories/{category_id}/playlists
	->📊 Scoprire contenuti popolari
			-Recupera le playlist editoriali di Spotify
				Endpoint: /v1/browse/featured-playlists
			
			-Recupera i nuovi album pubblicati
				Endpoint: /v1/browse/new-releases
			
			-Recupera le categorie di Spotify (es: "rock", "hip-hop", "chill")
				Endpoint: /v1/browse/categories
			
*/