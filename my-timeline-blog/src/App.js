import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Main } from './Main';

const theme = createTheme({
	palette: {
		primary: {
			light: '#33c9dc',
			main: '#FF5722',
			dark: '#d50000',
			contrastText: '#fff'
		}
  }
});


const App = (props) => {

  	return (
		<ThemeProvider theme={theme}>
			
				<div>
					<Main {...props} />
				</div>

		</ThemeProvider>
	);
  
}


export default App;