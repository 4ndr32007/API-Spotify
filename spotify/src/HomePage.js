import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./HomePage.css"


// Questa è la prima pagina che viene mostrata appena si apre il sito momentaneamente c'è un btn 
// che quando viene premuto dovrebbe portare alla pagina di login di spotify

const HomePage = () => {
	let apri=useNavigate()

	const Controlla=()=>{
		apri("/login")
	}

	return (
		<div>
			<div id="HomePage" className="container">

				<img id="img" src="/Spotify_Logo_Green.png" alt="Spotify logo" />
				<h1 id="titolo">Progetto Spotify</h1>
				<h4>Accedi al tuo profilo Spotify per ottenere tutte le funzionalità del sito</h4>
				<input type="button" value="Accedi" onClick={Controlla} className="btn" />

			</div>

		</div>
	)
}

export default HomePage