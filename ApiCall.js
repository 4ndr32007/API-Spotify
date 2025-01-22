/*
questa pagina viene mostrata dopo che l'utente ha fatto l'accesso con il suo account
*/
import React, { useEffect } from 'react'

const BaseUrl="https://api.spotify.com/v1/me"

const ApiCall = () => {
	useEffect(() => {
		/*
Appena viene redirezionato verso questa pagina avverrà la chiamata alle API, il token va recuperato dall'URL e mi permette di prendere la stringa che compone il token a partire dal "#" che segnala l'inizio del token
  */
		const rawToken = window.location.hash;
		console.log(rawToken)
		
		if (rawToken) {
			//Rimuovo il simbolo '#' e ottiengo il token, ma ci sono ancora altri parametri che non servono
			
/*
La funzione URLSearchParams() permette di analizzare automaticamente l'URL che gli viene  passato e in automantico ne restituisce i rispettivi chave valore, in maniera tale da facilitare la ricerca del token
*/
			const parametri = new URLSearchParams(rawToken.substring(1));
			//cerca nel URL quindi in parametri una chiave di valore "access_token" e ne restituisci il valore nella variabile accessToken
			const accessToken = parametri.get("access_token");
			console.log("Access Token:", accessToken);
			//una volta ottenuto il token si può fare la chiamata alle API		
		}

		//API call
		fetch(BaseUrl,{
			//GET perchè ho bisgono di ricevere un JSON
			method:"GET",
			headers:{
				//per fare la chiamata alle API bisogna passare l'access token
				"Authorization":`Bearer ${accessToken}`
			}
		})
		.then()
		.then()

	}, [])

return (
	<div></div>
)
}

export default ApiCall