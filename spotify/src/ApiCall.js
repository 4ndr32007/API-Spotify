/*
questa pagina viene mostrata dopo che l'utente hafatto l'accesso con il suo account
*/
import React, { useEffect, useState } from 'react'

const URL="https://api.spotify.com/v1/me"

//BISOGNA CAPIRE COME CONDIVIDERE TRA I FILE IL JSON
//CHE E' AL INTERNO DELLO STATO DATA, DATO CHE QUEL JSON CONTIENE 
// LE INFORMAZIONI DELL'UTENTE

const ApiCall = () => {

	//stato per contenere il JSON, lo dichiaro a null perchè spotify restituisce un oggetto JSON
	const [data, setData] = useState(null)

	let token = null

	useEffect(() => {
/*
Appena viene redirezionato verso questa pagina avverrà la chiamata alle API, il token va recuperato dall'URL e mi permette
 di prendere la stringa che compone il token a partire dal "#" che segnala l'inizio del token
*/
	const rawToken = window.location.hash;
	console.log("URL preso e stampato come lo restituisce l'API" + "\n" + rawToken)
	
	if (rawToken != null && rawToken != "") {
		//Rimuovo il simbolo '#' e ottiengo il token, ma ci sono ancora altri parametri che non servono		
		/*
		La funzione URLSearchParams() permette di analizzare automaticamente l'URL che gli viene  passato e in automantico ne 
		restituisce i rispettivi chave valore, in maniera tale da facilitare la ricerca del token
		*/
		const parametri = new URLSearchParams(rawToken.substring(1));
		//cerca nel URL quindi in parametri una chiave di valore "access_token" e ne restituisci il valore nella variabile token
		token = parametri.get("access_token");
		console.log("Token pronto per l'uso:", token);
		//una volta ottenuto il token si può fare la chiamata alle API		
	}

		//chiamta al API
		fetch(URL,{
			//GET perchè ho bisgono di ricevere un JSON
			method:"GET",
			headers:{
				//per fare la chiamata alle API bisogna passare l'access token
				"Authorization":`Bearer ${token}`
			}
		})
		.then(testo=>testo.json())
		.then((responseJson)=>{
			console.log("Risposta FUORI dallo stato: " , responseJson)
			setData(responseJson)
		})

	}, [])

return (
	<div></div>
)
}

export default ApiCall