// Questa è la prima pagina che viene mostrata appena si apre il sito 
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./HomePage.css"

const HomePage = () => {
	let apri=useNavigate()

	const AccessoSpotify=()=>{
		apri("/login")
	}

	const handleNavigation = (event) => {
		apri(event.target.value)
	}

	return (
		<div>

			<div className="navbar-container">
				<div className="navbar-select">
					<select onChange={handleNavigation}>
						<option value="">Vai a...</option>
						<option value="/">Home</option>
						<option value="/login">Login</option>
						<option value="/callback">Callback</option>
						<option value="/errore">Errore</option>
					</select>
				</div>
			</div>

			<div id="container">
				<div className="login-box">
					<img src="/Spotify_Logo_Green.png" alt="Spotify Logo" className="img" />
					<h1>Benvenuto!</h1>
					<p>Accedi con Spotify per ottenere tutte le funzionalità della web-app.</p>
					<input type="button" value="Accedi con Spotify" className="btn" onClick={AccessoSpotify} />
					<p className="privacy-text">Accedendo accetti la <a href="https://www.spotify.com/legal/privacy-policy/" target="new" >Privacy Policy di Spotify</a>.</p>
				</div>
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