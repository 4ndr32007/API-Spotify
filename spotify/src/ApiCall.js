//questa pagina viene mostrata dopo che l'utente ha fatto l'accesso con il suo account
import React, { useEffect } from 'react'

const ApiCall = () => {
	useEffect(() => {
		//appena viene redirezionato verso questa pagina avverrà la chiamata alle API, il token va recuperato dall'URL

		//mi permette di prendere la stringa che compone il token a partire dal "#" che segnala l'inizio del token
		const rawToken = window.location.hash;
		console.log(rawToken)
		
		if (rawToken) {
			// Rimuovo il simbolo '#' e ottiengo il token, ma ci sono ancora altri parametri che non servono
			const parametri = new URLSearchParams(rawToken.substring(1));

			//ottengo l'access token dai parametri passati tramite l'URL dal API
			const accessToken = parametri.get("access_token");

			if (accessToken) {
				console.log("Access Token:", accessToken);
				//una volta ottenuto il token si può fare la chiamata alle API
			}
		}
	}, [])

return (
	<div></div>
)
}

export default ApiCall