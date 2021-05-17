import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Container, ThemeProvider, CssBaseline, Paper } from "@material-ui/core";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseconfig";
import Theme from "./Theme";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import SignIn from "./components/pages/SignIn";
import ProfileList from "./components/ProfileList";
import LoadingProgress from "./components/dialogs/LoadingProgress";
import ContextErrorMessage from "./components/dialogs/ContextErrorMessage";
<<<<<<< HEAD
import AppApi from "./api/AppApi"; 

=======
import Start from "./components/pages/Start";
>>>>>>> Saeid
class App extends React.Component {
  /** Constructor of the app, which initializes firebase  */
  #firebaseConfig = {
    apiKey: "AIzaSyDKW0LRef6MNcjDTyEre_W_BsJ3Gvc6aWw",
    authDomain: "sw-praktikum-studymatch.firebaseapp.com",
    projectId: "sw-praktikum-studymatch",
    storageBucket: "sw-praktikum-studymatch.appspot.com",
    messagingSenderId: "770470355902",
    appId: "1:770470355902:web:4e88c0b5a8b0063ec18fef"
  };
  constructor(props) {
    super(props);

    // Init an empty state
    this.state = {
      currentUser: null,
      currentUserRole: null,
      appError: null,
      authError: null,
      authLoading: false,
    };
  }

  /**
   * Create an error boundary for this app and recieve all errors from below the component tree.
   *
   * @See See Reacts [Error Boundaries](https://reactjs.org/docs/error-boundaries.html)
   */
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { appError: error };
  }

  /** Handles firebase users logged in state changes  */
  handleAuthStateChange = (user) => {
    if (user) {
      this.setState({
        authLoading: true,
      });
      // The user is signed in
      user
        .getIdToken()
        .then((token) => {
          // Add the token to the browser's cookies. The server will then be
          // able to verify the token against the API.
          // SECURITY NOTE: As cookies can easily be modified, only put the
          // token (which is verified server-side) in a cookie; do not add other
          // user information.
          document.cookie = `token=${token};path=/`;

          // Set the user not before the token arrived
          this.setState({
            currentUser: user,
            authError: null,
            authLoading: false,
          });
        })
        .catch((e) => {
          this.setState({
            authError: e,
            authLoading: false,
          });
        });
    } else {
      // User has logged out, so clear the id token
      document.cookie = "token=;path=/";

      // Set the logged out user to null
      this.setState({
        currentUser: null,
        authLoading: false,
      });
    }
  };

  /**
   * Handles the sign in request of the SignIn component uses the firebase.auth() component to sign in.
   * @see See Google [firebase.auth()](https://firebase.google.com/docs/reference/js/firebase.auth.Auth)
   * @see See Google [firebase.auth().signInWithRedirect](https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signinwithredirect)
   */
  handleSignIn = () => {
    this.setState({
      authLoading: true,
    });
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  /**
   * Lifecycle method, which is called when the component gets inserted into the browsers DOM.
   * Initializes the firebase SDK.
   *
   * @see See Googles [firebase init process](https://firebase.google.com/docs/web/setup)
   */

  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().languageCode = "en";
    firebase.auth().onAuthStateChanged(this.handleAuthStateChange);
  }

  /** Renders the whole app */
  render() {
    const { currentUser, appError, authError, authLoading } = this.state;

    return (
      <ThemeProvider theme={Theme}>
        {/* Global CSS reset and browser normalization. CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
        <Router basename={process.env.PUBLIC_URL}>
          <Container>
            {
              // Is a user signed in?
              currentUser ? (
                <>
                </>
              ) : (
                // else show the sign in page
                <>
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
