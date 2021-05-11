import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Container, ThemeProvider, CssBaseline } from '@material-ui/core';
import LoadingProgress from './components/dialogs/LoadingProgress';
import ContextErrorMessage from './components/dialogs/ContextErrorMessage';
import About from './components/pages/About';
import SignIn from './components/pages/SignIn';
import Header from './components/layout/Header';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './Firebaseconfig';
import Theme from './Theme';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			currentUser: null,
			currentUserRole: null,
			appError: null,
			authError: null,
			authLoading: false
		};
	}

	
	static getDerivedStateFromError(error) {
		return { appError: error };
	}

	handleAuthStateChange = user => {
		if (user) {
			this.setState({
				authLoading: true
			});
			user.getIdToken().then(token => {
			
				document.cookie = `token=${token};path=/`;

				this.setState({
					currentUser: user,
					authError: null,
					authLoading: false
				});
			}).catch(e => {
				this.setState({
					authError: e,
					authLoading: false
				});
			});
		} else {
			document.cookie = 'token=;path=/';

			this.setState({
				currentUser: null,
				authLoading: false
			});
		}
	}

  
	handleSignIn = () => {
		this.setState({
			authLoading: true
		});
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithRedirect(provider);
	}

	
	componentDidMount() {
		firebase.initializeApp(firebaseConfig);
		firebase.auth().languageCode = 'en';
		firebase.auth().onAuthStateChanged(this.handleAuthStateChange);
	}

	render() {
		const { currentUser, appError, authError, authLoading } = this.state;

		return (
			<ThemeProvider theme={Theme}>
				{/* Global CSS reset and browser normalization. CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Router basename={process.env.PUBLIC_URL}>
					<Container>
						{
							// Is a user signed in?
						        currentUser ?

								<>
									<Redirect from='/' to='start' />
									<Route exact path='/start'>
										<Start />
									</Route>
									<Route path='/profile'>
										<Header/>
									</Route>
									
								</>
								:

								<>
									<Redirect to='/index.html' />
									<SignIn onSignIn={this.handleSignIn} />
								</>
						}
						<LoadingProgress show={authLoading} />
						<ContextErrorMessage error={authError} contextErrorMsg={`Something went wrong during sighn in process.`} onReload={this.handleSignIn} />
						<ContextErrorMessage error={appError} contextErrorMsg={`Something went wrong inside the app. Please reload the page.`} />
					</Container>
				</Router>
			</ThemeProvider>
		);
	}
}

export default App;