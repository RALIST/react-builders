import React from "react";
import Header from "../header";
import Footer from "../footer";
import ModalCall from "../modals/modal_call";
import ErrorBoundary from "../error_boundary";

import { Provider } from 'react-redux';
import store from '../../store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "../../routes";

const App = () => {
	return(
		<Provider store={store}>
			<Router>
				<ErrorBoundary>
					<Header/>
					<Routes/>
					<Footer/>
					<ModalCall/>
				</ErrorBoundary>
			</Router>
		</Provider>
	)
}

export default App;
