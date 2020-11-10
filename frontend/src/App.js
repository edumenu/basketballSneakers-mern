import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import orange from '@material-ui/core/colors/orange';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
	const theme = createMuiTheme({
		palette: {
			type: 'dark',
			primary: {
				// light: will be calculated from palette.primary.main,
				main: '#212121'
				// dark: will be calculated from palette.primary.main,
				// contrastText: will be calculated to contrast with palette.primary.main
			},
			secondary: orange
		}
	});

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<div className='App'>
					<Navbar />
					<Paper style={{ height: '100vh', width: '100%' }}>
						<Home />
					</Paper>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
