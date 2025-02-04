// import React, { useContext, useEffect, useState } from "react"
// import { UserContext } from "./App.js"

// const UrlRec="https://api.spotify.com/v1/recommendations"

// const Suggerimento = () => {
// 	let canzone=""
// 	let { token } = useContext(UserContext)
// 	let arrayID=[] //questo è l'array contente gli ID delle canzoni inserite dal utente che poi sarà usato come parametro del API
// 	const [data, setData] = useState([]) //contiene le canzoni restituite dal API
// 	const [flag, setFlag] = useState(false)
	
// 	useEffect(() => {
// 		if(arrayID.length > 0){
// 			let strSeed= arrayID.join(",")
// 			console.log(strSeed)
// 			const recommendationsURL = `${UrlRec}?seed_tracks=${strSeed}&limit=5`
// 			console.log(recommendationsURL)

// 			fetch(recommendationsURL,{
// 				headers:{
// 					"Authorization": `Bearer ${token}`
// 				}
// 			})
// 			.then(response => response.json())
// 			.then(data => {
// 				console.log(data)
// 				setData(data.tracks)
// 				setFlag(false) // Resetta il flag dopo la chiamata
// 			})
// 		}
// 	}, [flag])
	
// 	const Carica=()=>{
// 		if(canzone == ""){
// 			alert("NON hai scritto nulla...")
// 		}else{
// 			if(arrayID.length == 5){
// 				//se l'utete ha inserito 5 canzoni allora effettuo la chiamata
// 				setFlag(true)
// 			}
// 			if(arrayID.length < 5 ){
// 				let URL= `https://api.spotify.com/v1/search?q=${encodeURIComponent(canzone)}&type=track&limit=1`
// 				fetch(URL,{
// 					headers:{
// 					"Authorization":`Bearer ${token}`
// 				}})
// 				.then(testo=>testo.json())
// 				.then((data)=>{
// 					if (data.error) {
// 						console.log("API Error:", data.error)
// 					} else {
// 						let traccia= data.tracks.items[0].id
// 						console.log(data)
// 						arrayID.push(traccia)
// 						console.log(arrayID)
// 					}
// 				})
// 			}else{
// 				alert("Hai raggiunto il limite di canzoni")
// 			}
// 		}
// 	}

// 	return (
// 		<div>
// 			<div id="intestazione">
// 				<h2>Inserisci FINO a 5 canzoni per ricevere dei brani consigliati</h2>
// 				<input type="text" placeholder="Inserisci la canzone" onChange={(e)=>canzone=e.target.value} />
// 				<input type="button" value="Carica" onClick={Carica} disabled={arrayID.length > 5} />
// 			</div>
// 		</div>
// 	)
// }

// export default Suggerimento


import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "./App.js"

const UrlRec = "https://api.spotify.com/v1/recommendations"


const Suggerimento = () => {
	const [canzone, setCanzone] = useState("") // Stato per la canzone
	const [arrayID, setArrayID] = useState([]) // Stato per memorizzare gli ID delle canzoni
	const [data, setData] = useState([]) // Stato per memorizzare le canzoni consigliate
	const [flag, setFlag] = useState(false) // Flag per scatenare la chiamata API
	const { token } = useContext(UserContext)

	// Effettua la chiamata per le raccomandazioni quando flag è true
	// useEffect(() => {
	// 	if (flag && arrayID.length > 0) {
	// 		// Crea la stringa degli ID separati da virgola per il parametro "seed_tracks"
	// 		const strSeed = arrayID.join(",")
	// 		console.log("String:" + strSeed)

	// 		// Costruisci l'URL per la richiesta delle raccomandazioni
	// 		const recommendationsURL = `${UrlRec}?seed_tracks=${strSeed}&limit=20`
	// 		console.log("URL:" + recommendationsURL)

	// 		// Effettua la chiamata API
	// 		fetch(recommendationsURL, {
	// 		headers: {
	// 			"Authorization": `Bearer ${token}`
	// 		}
	// 		})
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			// Gestisci la risposta
	// 			setData(data.tracks)  // Memorizza i brani consigliati nello stato
	// 			setFlag(false)  // Resetta il flag dopo la chiamata
	// 		})
	// 		.catch(error => {
	// 			console.log("Errore nella chiamata alle raccomandazioni", error)
	// 		})
	// 	}
	// }, [flag])



	useEffect(() => {
		if (flag && arrayID.length > 0) {
			 const strSeed = arrayID.join(",");
			 console.log("Stringa seed:", strSeed);
  
			 // Aggiungi il parametro market (ad esempio, "IT" per l'Italia)
			 const recommendationsURL = `${UrlRec}?seed_tracks=${strSeed}&limit=20&market=IT`;
			 console.log("URL:", recommendationsURL);
  
			 fetch(recommendationsURL, {
				  headers: {
						"Authorization": `Bearer ${token}`
				  }
			 })
			 .then(response => {
				  if (!response.ok) {
						throw new Error(`Errore HTTP! Stato: ${response.status}`);
				  }
				  return response.json();
			 })
			 .then(data => {
				  console.log("Dati restituiti:", data);
				  setData(data.tracks);
				  setFlag(false);
			 })
			 .catch(error => {
				  console.log("Errore nella chiamata alle raccomandazioni:", error);
			 });
		}
  }, [flag]);



	// Funzione per caricare la canzone
	const Carica = () => {
		if (canzone === "") {
			alert("NON hai scritto nulla...")
		} else {
			if (arrayID.length < 5) {
			// Chiamata API per cercare la canzone
			let URL = `https://api.spotify.com/v1/search?q=${encodeURIComponent(canzone)}&type=track&limit=1`
			fetch(URL, {
				headers: {
					"Authorization": `Bearer ${token}`
				}
			})
				.then(response => response.json())
				.then(data => {
					if (data.tracks.items.length > 0) {
						const traccia = data.tracks.items[0].id
						console.log("Canzone aggiunga!!" + traccia)
						setArrayID([...arrayID, traccia])
					} else {
						console.log("Canzone non trovata")
					}
				})
				.catch(error => {
					console.log("Errore durante la chiamata:", error)
				})
			} else {
			alert("Hai raggiunto il limite di canzoni (5).")
			}
		}
	}

	const Invia=()=>{
		setFlag(true)
	}

	useEffect(() => {
		// Quando l'arrayID ha 5 canzoni, attiva la chiamata alle raccomandazioni
		if (arrayID.length === 5) {
			setFlag(true) // Scateniamo la chiamata API per le raccomandazioni
		}
	}, [arrayID])

	return (
		<div>
			<div id="intestazione">
				<h2>Inserisci FINO a 5 canzoni per ricevere dei brani consigliati</h2>
				<input type="text" placeholder="Inserisci la canzone" onChange={(e) => setCanzone(e.target.value)} />
				<input type="button" value="Carica" onClick={Carica} disabled={arrayID.length >= 5} />
				<input type="button" value="Invia" onClick={Invia} />

			</div>

			{data.length > 0 && (
			<div>
				<h3>Brani consigliati:</h3>
				<ul>
					{data.map((track, index) => (
					<li key={index}>
						{track.name} - {track.artists[0].name}
					</li>
					))}
				</ul>
			</div>
			)}
		</div>
	)
}

export default Suggerimento
