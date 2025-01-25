//questa pagina viene mostrata dopo il login, quindi è qua dentro che bisogna dare le possibilità di compiere azioni con l'APP
import React from 'react'
import {useUser} from "./DataContext"
import "./DashBoard.css"

const DashBoard = () => {
	//destrutturazione dello stato con il JSON, è solo da usare perchè è tutto pronto
	const {userData, setUserdata} = useUser()
	
	return (
		<div id='container'>SEI ENTRATO NELLA DASHBOAD</div>
	)
}

export default DashBoard