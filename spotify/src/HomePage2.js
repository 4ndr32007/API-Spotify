import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage2.css'

const SecondHomePage = () => {

	const apri = useNavigate()
	
	//IMPLEMENTARE TUTTA LA LOGICA DI CONTROLLO DEL LOGIN

	// Funzione per gestire il click su un'opzione e fare il redirect
	const Naviga = (pag) => {
		apri(`/${pag}`)
	}

	return (
		<div id="contanier">
			<h1>Benvenuto nella Dashboard</h1>
			<p>Seleziona una delle opzioni per esplorare le funzionalità del sito:</p>
			<input type="button" value="Visualizza Artisti Preferiti" className="btn" onClick={() => Naviga('top-artisti')} />

		{/*CREARE LE ALTRE PAGINE PER OGNI FUNZIONE E MODIFICARE IL PARAMETRO ALLA NAVIGA*/}

			<input type="button" value="Visualizza Album" className="btn" onClick={() => Naviga('/')} />
			<input type="button" value="Visualizza Playlist" className="btn" onClick={() => Naviga('/')} />
			<input type="button" value="Visualizza Profilo Utente" className="btn" onClick={() => Naviga('/')} />

		</div>
	)
}

export default SecondHomePage
