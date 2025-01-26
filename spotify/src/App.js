import React, { createContext, useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./HomePage"
import Login from "./Login"
import Errore from "./Errore"
import ApiCall from "./ApiCall"
import DashBoard from './DashBoard'

export const UserContext = createContext()

const App = () => {

	const [data, setData] = useState(null)

	return (
		<div>
		{/* avvolgo TUTTE le route con il provider perchè devono avere l'accesso alla risorsa condivisa */}
			<UserContext.Provider value={{ data, setData }}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/login" element={<Login />} />
						<Route path="/callback" element={<ApiCall />} />
						<Route path="/dashboard" element={<DashBoard />} />
						<Route path="*" element={<Errore />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</div>
	)
}

export default App