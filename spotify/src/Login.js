import React from "react"
import "./Login.css"

// questa pagina viene mostrata quando viene premuto il btn della HomePage, dopo il login bisogna fare le chiamate alle API
// per ottenere le informazioni riguardanti l'account loggato come le playlist eccetera
const client_id = "f5fc481f3c9f49c8be605ba52786ab33"
const redirect_url = "http://localhost:3000/callback"  // Questo URL deve essere lo stesso che hai configurato nel Dashboard di Spotify

//con gli scopes settati così possiamo lavorare SOLO sulle playlist, dal momento in cui volessimo avere altri pemessi bisogna accodarli a questi

const scope = "playlist-read-private%20playlist-read-collaborative"  // Permessi richiesti, separati da %20 per lo spazio
const UrlBase = "https://accounts.spotify.com/authorize"  // Base URL di Spotify per la login


const Login=()=>{


	const AccessoSpotify = () => {
		const authURL = `${UrlBase}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scope}&response_type=token&show_dialog=true`

		// Naviga alla pagina di autorizzazione di Spotify
		window.location.href = authURL

		//la richiesta di accesso dovrebbe restituire un token di accesso che identifica 
		// univocamente l'utente, ma bisogna vedere come prenderlo
	}

	return (
		// <div id='container'>
		// 	<input type="button" value="Accedi" className="btn" onClick={AccessoSpotify} />
		// </div>

		<div id="container">
			<div className="login-box">
				<img src="/Spotify_Logo_Green.png" alt="Spotify Logo" className="img" />
				<h1>Benvenuto!</h1>
				<p>Accedi con Spotify per esplorare le tue playlist preferite.</p>
				<input type="button" value="Accedi con Spotify" className="btn" onClick={AccessoSpotify} />
				<p className="privacy-text">Accedendo accetti la <a href="https://www.spotify.com/legal/privacy-policy/" target="new" >Privacy Policy di Spotify</a>.</p>
			</div>
		</div>
	)
}

export default Login
