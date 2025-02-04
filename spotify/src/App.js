import React, { createContext, useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./HomePage"
import Login from "./Login"
import Errore from "./Errore"
import ApiCall from "./ApiCall"
import DashBoard from './TopArtisti'
import FunctionPage from './HomePage2'
import Suggerimento from './Suggerimento'

export const UserContext = createContext()

const App = () => {
	//questi dati devono essere visibili a tutti i file
	const [data, setData] = useState(null)
	const [token, setToken] = useState(null)
	
	return (
		<div>
		{/* avvolgo TUTTE le route con il provider perchè devono avere l'accesso alla risorsa condivisa */}
			<UserContext.Provider value={{ data, setData, token, setToken }}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/login" element={<Login />} />
						<Route path="/callback" element={<ApiCall />} />
						<Route path="/top-artisti" element={<DashBoard />} />
						<Route path="/funzioni" element={<FunctionPage />} />
						<Route path="/canzoni-consigliate" element={<Suggerimento />} />
						<Route path="/*" element={<Errore />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</div>
	)
}

export default App