import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";
import Details from "./About";

const App = () => {
	
return (
	<>
	<BrowserRouter>
	<Routes>
		<Route exact path="/" element={<Home/>}/>
		<Route exact path="/details" element={<Details/>}/>
	</Routes>
	</BrowserRouter>
	</>
);
}

export default App;
