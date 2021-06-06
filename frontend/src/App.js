import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import {Container,ThemeProvider,CssBaseline,Paper,} from "@material-ui/core";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseconfig";
import Theme from "./Theme";
import SignIn from "./components/pages/SignIn";
import CreateProfile from "./components/CreateProfile";
import LoadingProgress from "./components/dialogs/LoadingProgress";
import ContextErrorMessage from "./components/dialogs/ContextErrorMessage";
import Start from "./components/pages/Start";
import ProfileDropDown from "./components/dialogs/ProfileDropDown";
import CreateLearnProfile from "./components/CreateLearnProfile";
import CreateLearnGroup from "./components/CreateLearnGroup";
import AppApi from "./api/AppApi";
import HeaderCreateProfile from "./components/pages/HeaderCreateProfile";
import HeaderX from "./components/pages/HeaderX";
class App extends React.Component {
  #firebaseConfig = {
    apiKey: "AIzaSyDKW0LRef6MNcjDTyEre_W_BsJ3Gvc6aWw",
    authDomain: "sw-praktikum-studymatch.firebaseapp.com",
    projectId: "sw-praktikum-studymatch",
    storageBucket: "sw-praktikum-studymatch.appspot.com",
    messagingSenderId: "770470355902",
    appId: "1:770470355902:web:4e88c0b5a8b0063ec18fef",
  };
  constructor(props) {
    super(props);

    this.state = {
      person: null,
      appError: null,
      authError: null,
      authLoading: false,
    };
  }

  
  static getDerivedStateFromError(error) {
    return { appError: error };
  }

  handleAuthStateChange = (person) => {
    if (person) {
      this.setState({
        authLoading: true,
      });
      person
        .getIdToken()
        .then((token) => {
         
          document.cookie = `token=${token};path=/`;

          this.setState({
            person: person,
            authError: null,
            authLoading: false,
          });
          this.getPersonByGoogleId(person.uid);
        })
        .catch((e) => {
          this.setState({
            authError: e,
            authLoading: false,
          });
        });
    } else {
      document.cookie = "token=;path=/";

      this.setState({
        person: null,
        authLoading: false,
      });
    }
  };

  
  handleSignIn = () => {
    this.setState({
      authLoading: true,
    });
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

 

  getPersonByGoogleId = (google_id) => {
    var api = AppApi.getApi();
    api.getPersonByGoogleId(google_id).then((person) => {
      this.setState(
        {
          person: person,
        },
      );
    });
  };


  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().languageCode = "en";
    firebase.auth().onAuthStateChanged(this.handleAuthStateChange);
  }

  /** Renders the whole app */
  render() {
    const { person, appError, authError, authLoading } = this.state;

    return (
      <ThemeProvider theme={Theme}>
        {/* Global CSS reset and browser normalization. CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
        <Router basename={process.env.PUBLIC_URL}>
          <Container maxWidth="md">
            

            {
              // Is a user signed in?
              person ? (
                <>
                  <Redirect from="/" to="start" />
                  <Route exact path="/start">
                    <Start />
                  </Route>

                  <Route path='/StartPage'>
										<HeaderCreateProfile/>
									</Route>
                  <Route path='/StartPage/CreateProfile'>
                    <CreateProfile/>
                  </Route>

                  <Route path='/SecondPage'>
										<HeaderX/>
									</Route>
                  <Route path='/SecondPage/CreateLearnGroup'>
                    <CreateLearnGroup/>
                  </Route>
                  <Route path='/SecondPage/CreateLearnProfile'>
                    <CreateLearnProfile/>
                  </Route>
                 
                 


                </>
              ) : (
                // else show the sign in page
                <>
                  <Redirect to="/SignIn" />
                  <SignIn onSignIn={this.handleSignIn} />
                </>
              )
            }
            <LoadingProgress show={authLoading} />
            <ContextErrorMessage
              error={authError}
              contextErrorMsg={`Something went wrong during sighn in process.`}
              onReload={this.handleSignIn}
            />
            <ContextErrorMessage
              error={appError}
              contextErrorMsg={`Something went wrong inside the app. Please reload the page.`}
            />
          </Container>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
