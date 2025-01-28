// Questa è la prima pagina che viene mostrata appena si apre il sito 
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./HomePage.css"

const HomePage = () => {
	let apri=useNavigate()


	const Spotify = () => {
		window.open("https://www.spotify.com/it/", "_blank");
	}

	const handleNavigation = (event) => {
		apri(event.target.value)
	}

	return (
		<div>
			<div className="navbar-container">
				<div id='container-img'><img src='/Spotify_Logo_Green.png' alt='Spotify Logo' id='SpotifyLogo' onClick={Spotify}></img></div>
					<div className="selezione">
						<select onChange={handleNavigation}>
							<option value="">Naviga</option>
							<option value="/">Home</option>
							<option value="/login">Login</option>
							<option value="/funzioni">Pagina funzionalità</option>
						</select>
					</div>
			</div>


			<div id="container-intestazione">
				<h1>Benvenuto su Sound JS</h1>
				<h2>Esplora il mondo della musica in un click</h2>
				<p>Sound JS è un'applicazione web che ti permette di esplorare il vasto universo musicale attraverso l'integrazione con le API di Spotify.</p>
				<p>Cerca i tuoi artisti preferiti, scopri nuove tracce e crea playlist personalizzate per ogni momento.</p>
				<p ><b id="disclaimer">Effettua il login per accedere a tutte le funzionalità della web-APP</b></p>
				<input type="button" id='btn' value="Inizia ora" onClick={() => apri('/login')}></input>
			</div>

			<div id='piede'>
				<div className="footer-content">
					<div className="footer-section about">
							<h3>Chi siamo</h3>
							<p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
					</div>

					<div className="footer-section links">
							<h3>Social</h3>
					</div>

					<div className="footer-section contact">
							<h3>Contatti</h3>
							<p>Email: info@esempio.com</p>
							<p>Telefono: +39 012 345 6789</p>
							<p>Indirizzo: Via Roma, 123, Milano</p>
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
