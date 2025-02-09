import React, { useContext, useState } from "react"
import { UserContext } from "./App.js"
import "./TopCanzoni.css"
import { useNavigate } from 'react-router-dom'


const TopCanzoni = () => {
	const apri = useNavigate()
	const [tracks, setTracks] = useState([])
	const [loading, setLoading] = useState(false)
	const [timeRange, setTimeRange] = useState("medium_term")

	let { data, setData, token, setToken } = useContext(UserContext)

	const Chiamata =()=> {
		setLoading(true)

		let URL=`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=10`

		fetch(URL,{
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then(testo=>testo.json())
		.then((myJson)=>{
			if(myJson.items.length > 0){
				console.log(myJson)
				setTracks(myJson.items)
			}else{
				setTracks([])
			}
		})
	}

	const goBack = () => {
		apri(-1)
	}

	return (
		<div className="top-tracks-container">
				<h2>🎵 Le Tue Canzoni Più Ascoltate 🎵</h2>

				{/* Select per scegliere il filtro */}
				<div className="filters">
					<label>Seleziona il periodo:</label>
					<select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
						<option value="short_term">Ultime 4 settimane</option>
						<option value="medium_term">Ultimi 6 mesi</option>
						<option value="long_term">Di sempre</option>
					</select>
					<button onClick={Chiamata}>🔍 Cerca</button>
				</div>

				

				{/* Lista delle canzoni */}
				<ul className="track-list">
					{tracks.length > 0 ? (
						tracks.map((track, index) => (
								<li key={index} className="track-item">
									<img src={track.album.images[0].url} alt={track.name} />
									<div className="track-info">
										<p className="track-name">{track.name}</p>
										<p className="track-artist">
												{track.artists.map((artist) => artist.name).join(", ")}
										</p>
									</div>
								</li>
						))
					) : (
						!loading && <p>🔍 Nessuna traccia trovata, premi "Cerca".</p>
					)}
				</ul>
			<div id="frecce">
				<input type='button' value="←" onClick={goBack} id="freccia" />
			</div>
		</div>
	)
}

export default TopCanzoni
