import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./HomePage"
import Login from "./Login"
import Errore from "./Errore"
import ApiCall from "./ApiCall"
import DashBoard from './DashBoard'
import { UserProvider } from './DataContext'

// questo file serve SOLO per gestire le routes

const App = () => {
	return (
		<div>
		{/* avvolgo TUTTE le routs con il provider perchè devono avere l'accesso alla risorsa condivisa */}
			<UserProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/login" element={<Login />} />
						<Route path="/callback" element={<ApiCall />} />
						<Route path="/dashboard" element={<DashBoard />} />
						<Route path="*" element={<Errore />} />
					</Routes>
				</BrowserRouter>
			</UserProvider>
		</div>
	)
}

export default App