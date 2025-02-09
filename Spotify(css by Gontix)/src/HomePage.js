// Questa è la prima pagina che viene mostrata appena si apre il sito 
import React, { useContext } from 'react'
import { UserContext } from "./App.js"
import { useNavigate } from 'react-router-dom'
import "./HomePage.css"

const HomePage = () => {
	let { token } = useContext(UserContext)
	
	let apri=useNavigate()

	const Spotify = () => {
		window.open("https://www.spotify.com/it/", "_blank");
	}

	const handleNavigation = (event) => {
		if((token == null || token == "") && (event.target.value == "/funzioni")){
			alert("Devi effettuare prima il login!!!")
		}else{
			apri(event.target.value)
		}
	}

	return (
		<div>
			<div className="navbar-container">
				<div id='container-img'><img src='/Spotify_Logo_Green.png' alt='Spotify Logo' id='SpotifyLogo' onClick={Spotify}></img></div>
					<div className="selezione">
						<select onChange={handleNavigation}>
							<option value="/">Home</option>
							<option value="/login">Login</option>
							<option value="/funzioni">Pagina funzionalità</option>
						</select>
					</div>
			</div>

			<div id="container-intestazione">
				<h1>Benvenuto su Sound JS</h1>
				<h2>Esplora il mondo della musica in un click</h2>
				<p>Sound JS è un'applicazione web che ti permette di esplorare il vasto universo musicale attraverso l'integrazione con le API di Spotify</p>
				<p>Cerca i tuoi artisti preferiti, scopri nuove tracce e crea playlist personalizzate per ogni momento</p>
				<p ><b id="disclaimer">Effettua il login per accedere a tutte le funzionalità della web-APP</b></p>
				<input type="button" id='btn' value="Inizia ora" onClick={() => apri('/login')}></input>
			</div>

			<div id='piede'>
				<div className="footer-content">
					<div className="footer-section about">
							<h3>Chi siamo:</h3>
							<h4>eravamo 3 studenti ma siamo stati ritotti a 2 per una perdita causata dall'estenuate fase di programmazione</h4>
					</div>

					<div className="footer-section-links">
							<h3>Instagram:</h3>
							<h4 className="ig-text"><a href="https://www.instagram.com/ale_gonte?igsh=MXV3ZXBic2UwNnIyYg==" target="new" >ale_gonte</a> - <a href="https://www.instagram.com/andr3.apk?igsh=dDI0dHlueGllNXJm" target="new" >andr3.apk</a> - <a href="https://www.instagram.com/mongeraffaelee?igsh=MW1wMWVpOXY1N2xodQ==" target="new" >mongeraffaelee</a></h4>
					</div>

				</div>
				<div className="footer-bottom">
					<p>&copy; 2025 Sound Js</p>
				</div>
			</div>
		</div>
	)
}

export default HomePage