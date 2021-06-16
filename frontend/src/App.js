import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import {Container,ThemeProvider,CssBaseline,Paper,} from "@material-ui/core";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseconfig";
import Theme from "./Theme";
import SignIn from "./components/pages/SignIn";
import CreateProfile from "./components/create/CreateProfile";
import LoadingProgress from "./components/dialogs/LoadingProgress";
import ContextErrorMessage from "./components/dialogs/ContextErrorMessage";
import Start from "./components/pages/Start";
import ProfileDropDown from "./components/dialogs/ProfileDropDown";
import CreateLearnProfile from "./components/create/CreateLearnProfile";
import CreateLearnGroup from "./components/create/CreateLearnGroup";
import AppApi from "./api/AppApi";
import HeaderCreateProfile from "./components/pages/HeaderCreateProfile";
import HeaderX from "./components/pages/HeaderX";
import ProfileList from "./components/lists/ProfileList";
import LearnProfileList from "./components/lists/LearnProfileList";
import LearnGroupList from "./components/lists/LearnGroupList";
import SendMessage from "./components/chatFunction/SendMessage";
import Header from "./components/pages/Header";



class App extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      appError: null,
      authError: null,
      authLoading: false,
      firstTime: false,
      profileComplete: false,
    };
  }

  
  static getDerivedStateFromError(error) {
    return { appError: error };
  }

  handleAuthStateChange =  async (user) => {
    if (user) {
      this.setState({
        authLoading: true,
      });
      user
        .getIdToken()
        .then((token) => {
          console.log(user)
          document.cookie = `token=${token};path=/`;
          document.cookie = `email=${user.email};path=/`;
          document.cookie = `name=${user.displayName};path=/`;
          document.cookie = `uid=${user.uid};path=/`;
          let app = new AppApi()
          /* check if user already exists if not create */ 
          app.getPersonByGoogleId(user.uid).then((response) =>
          {
            try
            {
              let personObj = response[0]
              if(personObj.name)
              {
                this.setState({
                  currentUser: user,
                  authError: null,
                  authLoading: false,
                  firstTime: false,

                });
              }
            }
            catch{
          app.createPerson(user.displayName, user.email, user.uid, token)
                this.setState({
                  currentUser: user,
                  authError: null,
                  authLoading: false,
                  firstTime: true

                });
            }
          }
          )

        
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
        currentUser: null,
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

 


  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().languageCode = "en";
    firebase.auth().onAuthStateChanged(  this.handleAuthStateChange);

  }

  /** Renders the whole app */
  render() {
    const { currentUser, appError, authError, authLoading } = this.state;

    return (
      <ThemeProvider theme={Theme}>
        {/* Global CSS reset and browser normalization. CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
        <Router basename={process.env.PUBLIC_URL}>
          <Container maxWidth="md">
           <Header user={currentUser} />
            

            {
              // Is a user signed in?
              currentUser ? (
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
                  <Route path='/SecondPage/ProfileList'>
                    <ProfileList/>
                  </Route>
                  <Route path='/SecondPage/LearnProfileList'>
                    <LearnProfileList/>
                  </Route>
                  <Route path='/SecondPage/LearnGroupList'>
                    <LearnGroupList/>
                  </Route>
                  <Route path='/SecondPage/SendMessage'>
                    <SendMessage/>
                  </Route>
                 
                 


                </>
              ) : (
                // else show the sign in page
                <>
                  <Redirect to="/index.html" />
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
