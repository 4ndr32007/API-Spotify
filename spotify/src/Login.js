import React from "react"
import "./Login.css"

const client_id = "f5fc481f3c9f49c8be605ba52786ab33"
// Questo URL deve essere lo stesso che hai configurato nel Dashboard di Spotify
const redirect_url = "http://localhost:3000/callback" 
//con gli scopes settati così possiamo lavorare SOLO sulle playlist, dal momento in cui volessimo 
// avere altri pemessi bisogna accodarli a questi
const scope = "playlist-read-private%20playlist-read-collaborative"
const UrlBase = "https://accounts.spotify.com/authorize"


const Login=()=>{


	const AccessoSpotify = () => {
		const authURL = `${UrlBase}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scope}&response_type=token&show_dialog=true`

		// Naviga alla pagina di autorizzazione di Spotify
		window.location.href = authURL
	}

	return (

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
