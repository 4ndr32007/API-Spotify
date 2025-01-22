import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./HomePage.css"



// Questa è la prima pagina che viene mostrata appena si apre il sito momentaneamente c'è un btn 
// che quando viene premuto dovrebbe portare alla pagina di login di spotify

const HomePage = () => {
	let apri=useNavigate()

	const Controlla=()=>{
		apri("/login")
	}

	return (
		<div>
			<div id='spotifyThings'>
				<div id="HomePage" className="container">
					
					<img id="img" src="/Spotify_Logo_Green.png" alt="Spotify logo" />
					<h1 id="titolo">Progetto Spotify</h1>
					<h4>Accedi al tuo profilo Spotify per ottenere tutte le funzionalità del sito</h4>
					<input type="button" value="Accedi" onClick={Controlla} className="btn" />
					
				</div>
				
			</div>
			<div id='piede'>
				<div className="footer-content">
					<div className="footer-section about">
							<h3>Gruppo composta</h3>
							<p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
					</div>

					<div className="footer-section links">
							<h3>Social</h3>
							<p>Instagram</p>
							<div id="ig">
								<i className="fa-brands fa-instagram"></i>
							</div>

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