import React from "react";
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import UserContext from './context/UserContext'
import BlogDetail from './pages/BlogDetail/BlogDetail'
import Write from './pages/Write/Write'
import Header from './components/header/Header'
import Home from './pages/Home/Home'
import './app.css'

function App() {
	const [userId] = useState(1);
	const [isLogin, setIsLogin] = useState(true);


	return (
		<UserContext.Provider value={{userId, isLogin, setIsLogin}}>
			<Header/>
			<Routes>
				<Route 
					path="/" 
					element={<Home/>}
				/>
				<Route 
					path="/blog/:id"
					element={<BlogDetail/>}
				/>
				<Route 
					path="/write"
					element={<Write/>}
				/>
			</Routes>
		</UserContext.Provider>
	)
}

export default App;
