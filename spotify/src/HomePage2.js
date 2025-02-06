import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage2.css'

const SecondHomePage = () => {
	const apri = useNavigate()

	const Naviga = (pag) => {
		apri(`/${pag}`)
	}

	return (
		<div id="contanier">
			
			<div id="testo">
				<h1 id="titolo">Benvenuto nella Dashboard</h1>
				<p>Seleziona una delle opzioni per esplorare le funzionalità del sito</p>
				<input type="button" value="Visualizza Artisti Preferiti" className="btn" onClick={() => Naviga('top-artisti')} />
				<input type="button" value="Brani consigliati" className="btn" onClick={() => Naviga('canzoni-consigliate')} />
			</div>
		
		</div>
	)
}

export default SecondHomePage


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