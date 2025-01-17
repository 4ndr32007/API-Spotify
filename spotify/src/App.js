import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./HomePage"
import Login from "./Login"
import CercaArtista from "./CercaArtista"
import CercaTraccia from "./CercaTraccia"
import Errore from "./Errore"

// questo file serve SOLO per gestire le route

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/artist-search" element={<CercaArtista />} />
					<Route path="/track-search" element={<CercaTraccia />} />
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<Errore />} />
				</Routes>
			</BrowserRouter>

		</div>
	)
}

export default App