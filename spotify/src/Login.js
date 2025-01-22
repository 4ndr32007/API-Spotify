import React from "react"

// questa pagina viene mostrata quando viene premuto il btn della HomePage, dopo il login bisogna fare le chiamate alle API
// per ottenere le informazioni riguardanti l'account loggato come le playlist eccetera
const client_id = "f5fc481f3c9f49c8be605ba52786ab33";
const redirect_url = "http://localhost:3000/callback";  // Questo URL deve essere lo stesso che hai configurato nel Dashboard di Spotify

//con gli scopes settati così possiamo lavorare SOLO sulle playlist, dal momento in cui volessimo avere altri pemessi bisogna accodarli a questi

const scope = "playlist-read-private%20playlist-read-collaborative";  // Permessi richiesti, separati da %20 per lo spazio
const UrlBase = "https://accounts.spotify.com/authorize";  // Base URL di Spotify per la login


const Login=()=>{


	const AccessoSpotify = () => {
		const authURL = `${UrlBase}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scope}&response_type=token&show_dialog=true`;

		// Naviga alla pagina di autorizzazione di Spotify
		window.location.href = authURL;

		//la richiesta di accesso dovrebbe restituire un token di accesso che identifica 
		// univocamente l'utente, ma bisogna vedere come prenderlo
	}

	return (
		<div>
			<input type="button" value="Accedi" className="btn" onClick={AccessoSpotify} />
		</div>
	)
}

export default Login;
