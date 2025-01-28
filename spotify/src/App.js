import React, { createContext, useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./HomePage"
import Login from "./Login"
import Errore from "./Errore"
import ApiCall from "./ApiCall"
import DashBoard from './TopArtisti'
import FunctionPage from './HomePage2'

export const UserContext = createContext()

const App = () => {
	const [data, setData] = useState(null)
	let login = false

	return (
		<div>
		{/* avvolgo TUTTE le route con il provider perchè devono avere l'accesso alla risorsa condivisa */}
			<UserContext.Provider value={{ data, setData, login }}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/login" element={<Login />} />
						<Route path="/callback" element={<ApiCall />} />
						<Route path="/top-artisti" element={<DashBoard />} />
						<Route path="/funzioni" element={<FunctionPage />} />
						<Route path="*" element={<Errore />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</div>
	)
}

export default App