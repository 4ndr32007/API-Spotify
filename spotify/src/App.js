import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./HomePage"
import Login from "./Login"
import Errore from "./Errore"
import ApiCall from "./ApiCall"

// questo file serve SOLO per gestire le routes

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/callback" element={<ApiCall />} />
					<Route path="*" element={<Errore />} />
				</Routes>
			</BrowserRouter>

		</div>
	)
}

export default App