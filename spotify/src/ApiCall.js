// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { UserContext } from "./App.js"

// const URL="https://api.spotify.com/v1/me"

// const ApiCall = () => {

// 	const [flag, setFlag] = useState(false)
// 	const { data, setData } = useContext(UserContext)
// 	const apri=useNavigate()
// 	let token = null

// 	useEffect(() => {
// 		/*
// 		Appena viene redirezionato verso questa pagina avverrà la chiamata alle API, il token va recuperato dall'URL e mi permette
// 		di prendere la stringa che compone il token a partire dal "#" che segnala l'inizio del token
// 		*/
// 		const rawToken = window.location.hash
// 		console.log("URL preso e stampato come lo restituisce l'API" + "\n" + rawToken)
		
// 		if (rawToken != null && rawToken != "") {
// 			//Rimuovo il simbolo '#' e ottiengo il token, ma ci sono ancora altri parametri che non servono				
// 			//La funzione URLSearchParams() permette di analizzare automaticamente l'URL che gli viene  passato e in automantico ne 
// 			//restituisce i rispettivi chave valore, in maniera tale da facilitare la ricerca del token
			
// 			const parametri = new URLSearchParams(rawToken.substring(1))
// 			//cerca nel URL quindi in parametri una chiave di valore "access_token" e ne restituisci il valore nella variabile token
// 			token = parametri.get("access_token")
// 			console.log("Token pronto per l'uso:", token)
// 			//una volta ottenuto il token si può fare la chiamata alle API		
// 		}

// 		//chiamta al API
// 		fetch(URL,{
// 			//GET perchè ho bisgono di ricevere un JSON
// 			method:"GET",
// 			headers:{
// 				//per fare la chiamata alle API bisogna passare l'access token
// 				"Authorization":`Bearer ${token}`
// 			}
// 		})
// 		.then(testo=>testo.json())
// 		.then((testoJson)=>{
// 			console.log("oggetto: " , testoJson)
// 			setData(testoJson)
// 			//dato che il JSON è stato correttamente caricato posso reindirizzare l'utente
// 		})
		
// 		// fetch(data.href,{
// 		// 	method:"GET",
// 		// 	headers:{
// 		// 		//per fare la chiamata alle API bisogna passare l'access token
// 		// 		"Authorization":`Bearer ${token}`
// 		// 	}
// 		// })
// 		// .then(testo=>testo.json())
// 		// .then((testoJson)=>{
// 		// 	console.log("Oggetto seconda fetch: " , JSON.stringify(testoJson))
// 		// 	setFlag(true)
// 		// })

// 	}, [])

// 	// Naviga una volta che i dati sono stati caricati
// 	useEffect(() => {
// 		if (flag) {
// 			apri("/dashboard")
// 		}
// 	}, [flag])

// return (
// 	<div></div>
// )
// }

// export default ApiCall
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from "./App.js"

const URL = "https://api.spotify.com/v1/me"
const URL2 = "https://api.spotify.com/v1/me/top/artists"

const ApiCall = () => {
	const [flag, setFlag] = useState(false)
	const [userData, setUserData] = useState(null)
	const [token, setToken] = useState(null)
	const { data, setData } = useContext(UserContext)
	const apri = useNavigate()

	// Extract token from URL hash
	useEffect(() => {
		/*
			Appena viene redirezionato verso questa pagina avverrà la chiamata alle API, il token va recuperato dall'URL e mi permette
			di prendere la stringa che compone il token a partire dal "#" che segnala l'inizio del token
		*/
		const rawToken = window.location.hash
		const parametri = new URLSearchParams(rawToken.substring(1))
		const extractedToken = parametri.get("access_token")
		setToken(extractedToken)

		fetch(URL, {
			method: "GET",
			headers: {
				"Authorization": `Bearer ${token}`,
			},
		})
		.then((testo) => testo.json())
		.then((dati) => {
			setData(dati)
			setUserData(dati)
			console.log("Risposta prima fetch:", dati)
		})
	}, [])


	useEffect(() => {
		fetch(URL2, {
			method: "GET",
			headers: {
				"Authorization": `Bearer ${token}`
			},
		})
		.then((testo) => testo.json())
		.then((dati) => {
			setFlag(true)
		})
	}, [userData])


	useEffect(() => {
		if (flag) {
			apri("/dashboard")
		}
	}, [flag])//reindirizza l'utente alla dashboard SOLAMENTE quando il flag passa a

	return(
		<div></div>
	)
}

export default ApiCall

/*
	IMPORTANTE:
		- Questa pagina è necessaria per effettuare la chiamata alle API di Spotify e ottenere i dati dell'utente
		- La chiamata alle API viene effettuata in due fasi:
			1. Viene effettuata una chiamata per ottenere i dati dell'utente
			2. Viene effettuata una chiamata per ottenere i dati relativi agli artisti preferiti dell'utente
		- Una volta ottenuti i dati relativi agli artisti preferiti dell'utente, l'utente viene reindirizzato alla dashboard
		- Questa pagina non ha un componente visuale, quindi non mostra nulla
		- Questa pagina è necessaria per ottenere i dati dell'utente e reindirizzarlo alla dashboard

		INOLTRE:
			-dal momento in cui vogliamo ottenere dati più precisi sul utente va fatta un altra chiamata con un altro URL
				Artisti:
					->GET https://api.spotify.com/v1/artists/{id} 	Recupera informazioni su un artista specifico.
					->Album:

					->GET https://api.spotify.com/v1/albums/{id 	Ottiene dettagli su un album specifico.
					
				Tracce:
					->GET https://api.spotify.com/v1/tracks/{id} 	Recupera informazioni su una traccia specifica.
				
				Playlist:
					->GET https://api.spotify.com/v1/me/playlists	 Elenca le playlist dell'utente autenticato.
					->POST https://api.spotify.com/v1/users/{user_id}/playlists 	Crea una nuova playlist per un utente.
					->GET https://api.spotify.com/v1/playlists/{playlist_id}	 Ottiene dettagli su una playlist specifica.
					->PUT https://api.spotify.com/v1/playlists/{playlist_id} 	Modifica una playlist esistente.
					->POST https://api.spotify.com/v1/playlists/{playlist_id}/tracks 	Aggiunge tracce a una playlist.
					->DELETE https://api.spotify.com/v1/playlists/{playlist_id}/tracks 	Rimuove tracce da una playlist.
					->Libreria Utente:

					->GET https://api.spotify.com/v1/me/tracks 	Recupera le tracce salvate nella libreria dell'utente.
					->PUT https://api.spotify.com/v1/me/tracks 	Salva tracce nella libreria dell'utente.
					->DELETE https://api.spotify.com/v1/me/tracks 	Rimuove tracce dalla libreria dell'utente.
				
				Riproduzione:
					->PUT https://api.spotify.com/v1/me/player/play 	Avvia o riprende la riproduzione sul dispositivo attivo dell'utente.
					->PUT https://api.spotify.com/v1/me/player/pause 	Mette in pausa la riproduzione.
					->POST https://api.spotify.com/v1/me/player/next 	Salta alla traccia successiva.
					->POST https://api.spotify.com/v1/me/player/previous 	Torna alla traccia precedente.
				
					Ricerca:
					->GET https://api.spotify.com/v1/search 	Cerca contenuti (tracce, album, artisti, playlist) nel catalogo Spotify.
*/