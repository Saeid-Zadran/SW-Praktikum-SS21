import React from "react";
import {  Router, Route, Redirect, useHistory } from "react-router-dom";
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
import MessageList from "./components/chatFunction/MessageList";
import history from './history'


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
                console.log("existing", personObj)
                let session_id = personObj.id
                console.log(session_id)
                // wenn dieser call positiv ist und ein profil erstellt folgt zweiter call
                //app.getProfileByID(session_id).then((profiles)=>
                //{
                 // console.log(profiles)

                this.setAuthStatePositive(user)

                app.getProfileViaUrl(session_id).then((profile)=> 
                {

                  console.log()
                //})
                let learnProfilesAvailabe = false
                  if(profile[0].adress)
                {
                  this.setAuthStatePositive(user)
                  
                  app.getLearnProfileViaUrl(session_id).then((profile)=>
                  {
                    let learnProfile = profile[0].creation_time

                    if(learnProfile)
                    {
                      history.push('/SecondPage/SendMessage');
                    }
                    else
                    {
                      history.push('/SecondPage/CreateLearnProfile');
                    }
                  })
 
                }
                else{

                  history.push('/StartPage/CreateProfile');
                }
                }) 
               
                
     
              }
              else{
                console.log("new created", personObj.name)
                app.createPerson(user.displayName, user.email, user.uid).then((person)=>
                {
                  console.log(person)
                }

                )
                this.setState({
                  currentUser: user,
                  authError: null,
                  authLoading: false,
                  firstTime: true
                });
              }
            }
            catch{
          app.createPerson(user.displayName, user.email, user.uid)
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

  setAuthStatePositive = (user) => {
    this.setState({
      currentUser: user,
      authError: null,
      authLoading: false,
      firstTime: false,
    });
  };




 


  componentDidMount() {
    this.setState({
      authLoading: true,
    });
    firebase.initializeApp(firebaseConfig);
    firebase.auth().languageCode = "en";
    firebase.auth().onAuthStateChanged(  this.handleAuthStateChange);

  }

  /** Renders the whole app */
  render() {
    const { currentUser, appError, authError, authLoading } = this.state;

    return (
      <Router history={history}>

      <ThemeProvider theme={Theme}>
        {/* Global CSS reset and browser normalization. CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
          <Container maxWidth="md">
           <Header user={currentUser} />
            

            {
              //   Is a user signed in?
              currentUser && !authLoading ? (
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
                  <Route path='/SecondPage/MessageList'>
                    <MessageList/>
                  </Route>
                </>
              ) :
              !currentUser && !authLoading ?  (
                // else show the sign in page
                <>
                  <Redirect to="/index.html" />
                  <SignIn onSignIn={this.handleSignIn} />
                </>
              ):
              (            <LoadingProgress show={true} />
                )
            }
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
      </ThemeProvider>
      </Router>
    );
  }
}

export default App;
