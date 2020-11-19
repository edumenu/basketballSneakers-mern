import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import { getInitialMode } from './HelperFunctions/HelperFunction1';

function App() {
	const [ darkMode, setDarkMode ] = useState(getInitialMode());

	useEffect(
		() => {
			localStorage.setItem('dark', JSON.stringify(darkMode));
		},
		[ darkMode ]
	);

	const darkTheme = createMuiTheme({
		palette: {
			type: 'dark',
			primary: {
				light: '#c95145',
				main: '#931F1D',
				dark: '#5f0000'
			},
			secondary: {
				light: '#ffcd55',
				main: '#E99C20',
				dark: '#b26e00'
			},
			background: {
				paper: '#17141d',
				custom: '#201d26'
			},
			text: {
				primary: '#ffffff',
				secondary: '#000000'
			}
		}
	});

	const lightTheme = createMuiTheme({
		palette: {
			type: 'light',
			primary: {
				light: '#c95145',
				main: '#931F1D',
				dark: '#5f0000'
			},
			secondary: {
				light: '#ffcd55',
				main: '#E99C20',
				dark: '#b26e00'
			}
		}
	});

	const switchChange = () => {
		setDarkMode(!darkMode);
	};

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<Router>
				<div className='App'>
					<Navbar darkMode={darkMode} switchChange={switchChange} />
					<Home darkMode={darkMode} />
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
