import React, { useState, useEffect } from 'react'
import "./Suggerimento.css"

//API key della seconda API
const API_KEY = 'd19e34ff4a77f9cc70aebc4869223dca'

const Suggerimento = () => {

	const [artista, setArtista] = useState('')
	const [canzone, setCanzone] = useState('')
	const [data, setData] = useState([])	//riceve il JSON dal API
	const [flag, setFlag] = useState(false)

	useEffect(() => {
		if ( !artista || !canzone ) return

		setData([]) // Pulizia della lista prima della nuova ricerca
		const url = `https://ws.audioscrobbler.com/2.0/?method=track.getSimilar&artist=${encodeURIComponent(artista)}&track=${encodeURIComponent(canzone)}&api_key=${API_KEY}&format=json&limit=60`

		fetch(url)
			.then((testo) => testo.json())
			.then((data) => {
				console.log(data) // Aggiungi un log per esaminare la struttura dei dati
				if ( data.similartracks && data.similartracks.track ) {
					setData(data.similartracks.track) // Accedi correttamente ai brani simili
				} else {
					alert("Nessun risultato")
				}
				})
			.finally(() => {
				setFlag(false)
			})
	}, [flag])

	const Cerca = () => {
		setFlag(true)
	}

	return (
		<div id="container">
			<h2 id="titolo">Trova brani simili</h2>
			<div id="dati">
				<input type="text" className='txt' placeholder="Artista" onChange={(e) => setArtista(e.target.value)} />
				<input type="text" className='txt' placeholder="Brano" onChange={(e) => setCanzone(e.target.value)} />
				<input type="button" value="Cerca" className='btn' onClick={Cerca} />
			</div>

			<div className="cards">
			{data.length > 0 ? (
				data.map((el, i) => (
					<div className="cardArtista" key={i}>
						<div className="canzone-info">
							<h2 className="canzone-nome">{el.name}</h2>
							<h3 className="canzone-Artista">Artista:{el.artist.name}</h3>
							<h4 className='canzone-riproduzioni'>Riproduzioni del brano:{el.playcount || "N/A"}</h4>
							<a className="canzone-link" href={el.url} target="_blank" rel="noopener noreferrer">Vai al profilo Last.fm</a>
						</div>
					</div>
				))
			) : (
				<p>Nessun risultato trovato</p>
			)}
			</div>
		</div>
	)
}

export default Suggerimento
