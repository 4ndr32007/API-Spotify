//questo file dovrebbe permettere di passare lo stato userData tra tutti i componenti così che il JSON sia visibile tra tutti
import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
	//questo è lo stato che verrà condiviso con tutti i componenti
	const [userData, setUserdata] = useState(null)

	return (
		<UserContext.Provider value={{ userData, setUserdata }}>
			{children}
		</UserContext.Provider>
	)
}

export const useUser = () => useContext(UserContext)
