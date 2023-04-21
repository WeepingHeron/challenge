import React from 'react'
import { BrowserRouter, Routes, Route } from '@remix-run/router'
import Home from '../pages/Home'
import Detail from '../pages/Detail'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/:id' element={<Detail />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
