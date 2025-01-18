import React from "react";
import { useNavigate } from "react-router-dom";

// questa pagina viene mostrata quando viene premuto il btn della HomePage, dopo il login bisogna fare le chiamate alle API
// per ottenere le informazioni riguardanti l'account loggato come le playlist eccetera

const client_id = "f5fc481f3c9f49c8be605ba52786ab33";
const redirect_uri = "http://localhost:3000/callback";
const scope = "user-read-private user-read-email";

const Login=()=>{
	const apri = useNavigate();

	const AccessoSpotify = () => {
		const authURL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=${encodeURIComponent(
		scope
		)}`;
		
		// Naviga alla pagina di autorizzazione di Spotify
		apri(authURL, { replace: true });
};

return (
	<div>
		<input type="button" value="Accedi" className="btn" onClick={AccessoSpotify} />
	</div>
);
}

export default Login;
