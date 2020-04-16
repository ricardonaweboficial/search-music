import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './global.css';

import Home from './pages/Home';
import Music from './pages/Music';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/music/:idVideo" component={Music}/>
			</Switch>
		</BrowserRouter>
	);
}