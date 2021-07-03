import ChatBO from './ChatBO';
import ChatMessageBO from './ChatMessageBO';
import GroupRequestBO from './GroupRequestBO';
import LearnGroupBO from './LearnGroupBO';
import LearnProfileBO from './LearnProfileBO';
import PersonBO from './PersonBO';
import ProfileBO from './ProfileBO';
import SuggestionBO from './SuggestionBO';

/**
 * Abstracts the REST interface of the Python backend with convenient access methods.
 * The class is implemented as a singleton.
 */
export default class AppApi {
  // Singelton instance
  static #api = null;

  // Local Python backend
  #AppServerBaseURL = 'http://localhost:5000/app';

  
  // #AppServerBaseURL = '/AppApi/app';

  //Person Related
  #getPersonsURL = () => `${this.#AppServerBaseURL}/persons`;
  #getPersonURL = (google_user_id) => `${this.#AppServerBaseURL}/person-by-google-user-id/${google_user_id}`;
  #addPersonURL = () => `${this.#AppServerBaseURL}/persons`;
  #updatePersonURL = (google_user_id) =>`${this.#AppServerBaseURL}/persons/${google_user_id}`;
  #deletePersonURL = (id) => `${this.#AppServerBaseURL}/persons/${id}`;

  //Profile Related

  #getProfilesURL = () => `${this.#AppServerBaseURL}/profiles`;
  #addProfileURL = () => `${this.#AppServerBaseURL}/profile`;
  #updateProfileURL = (id) => `${this.#AppServerBaseURL}/profile/${id}`;
  #deleteProfileURL = (id) => `${this.#AppServerBaseURL}/profile/${id}`;
  #getProfileViaURL = (id) => `${this.#AppServerBaseURL}/profile-by-person-id/${id}`;

  //Suggestion Related
  #getSuggestionsURL = () => `${this.#AppServerBaseURL}/suggestions`;
  #addSuggestionURL = () => `${this.#AppServerBaseURL}/suggestions`;
  #updateSuggestionURL = () => `${this.#AppServerBaseURL}/suggestions`;
  #deleteSuggestionURL = (id) => `${this.#AppServerBaseURL}/suggestions/${id}`;

  //LearnProfile Related
  #getLearnProfilesURL = () => `${this.#AppServerBaseURL}/learnprofiles`;
  #addLearnProfileURL = () => `${this.#AppServerBaseURL}/learnprofiles`;
  #updateLearnProfileURL = () => `${this.#AppServerBaseURL}/learnprofiles`;
  #deleteLearnProfileURL = (id) => `${this.#AppServerBaseURL}/learnprofiles/${id}`;
  #getLearnProfileViaURL = (id) => `${this.#AppServerBaseURL}/learnprofile/${id}`;

  //Chat Related
  #getChatsByLearnGroupIdURL = (learngroup_id) => `${this.#AppServerBaseURL}/chat/${learngroup_id}`;
  #getChatsURL = () => `${this.#AppServerBaseURL}/chats`;
  #addChatURL = () => `${this.#AppServerBaseURL}/chats`;
  #updateChatURL = () => `${this.#AppServerBaseURL}/chats`;
  #deleteChatURL = (id) => `${this.#AppServerBaseURL}/chats/${id}`;

  //ChatMessage Related
  #getChatMessagesURL = () => `${this.#AppServerBaseURL}/chatmessages`;
  #addChatMessageURL = () => `${this.#AppServerBaseURL}/chatmessages`;
  #updateChatMessageURL = () => `${this.#AppServerBaseURL}/chatmessages`;
  #deleteChatMessageURL = (id) =>`${this.#AppServerBaseURL}/chatmessages/${id}`;

  //LearnGroup Related
  #getLearnGroupByIdURL = (id) => `${this.#AppServerBaseURL}/learngroups/${id}`;
  #getLearnGroupsURL = () => `${this.#AppServerBaseURL}/learngroups`;
  #addLearnGroupURL = () => `${this.#AppServerBaseURL}/learngroups`;
  #updateLearnGroupURL = () => `${this.#AppServerBaseURL}/learngroups`;
  #deleteLearnGroupURL = (id) => `${this.#AppServerBaseURL}/learngroups/${id}`;
  #getLearnGroupByPersonIdURL = (person_id) =>`${this.#AppServerBaseURL}/learngroup/${person_id}`;
  #LeaveLearnGroupURL = (person_id) => `${this.#AppServerBaseURL}/learngroup/${person_id}`;

  //GroupRequest Related
  #getGroupRequestByPersonIdURL = (person_id) =>`${this.#AppServerBaseURL}/grouprequest-by-person_id/${person_id}`;
  #getGroupRequestByLearnGroupIdURL = (learngroup_id) =>`${this.#AppServerBaseURL}/grouprequest-by-learngroup_id/${learngroup_id}`;
  #getGroupRequestByAcceptedURL = (is_accepted) => `${this.#AppServerBaseURL}/grouprequest-by-accepted/${is_accepted}`;
  #deleteGroupRequestByIdURL = (id) =>`${this.#AppServerBaseURL}/grouprequest/${id}`;
  #addGroupRequestURL = () => `${this.#AppServerBaseURL}/grouprequests`;
  #updateGroupRequestURL = (is_accepted, id) =>`${this.#AppServerBaseURL}/grouprequest-update/${is_accepted}/${id}`;

  //matches Related
  #getMatchesByPersonURL = (id) =>`${this.#AppServerBaseURL}/person-matching/${id}`;
  #getMatchesByLearnGroupURL = (id) =>`${this.#AppServerBaseURL}/learngroup-matching/${id}`;

  

  /**
   * Get the Singelton instance
   *
   * @public
   *
   */
  static getApi() {
    if (this.#api == null) {
      this.#api = new AppApi();
    }
    return this.#api;
  }

  /**
   *  Returns a Promise which resolves to a json object.
   *  The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500.
   *  fetchAdvanced throws an Error also an server status errors
   *
   *
   * add this to the decorator TODO
   * {credentials: 'include'},
   */

  #fetchAdvanced = (url, init) =>
    fetch(url, init).then((res) => {
      // The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500.
      if (!res.ok) {
        console.log(`${res.status} ${res.statusText} ${res}`);
      }
      return res.json();
    });

  // Person related

   /**
   * Returns a Promise, which resolves to an Array of PersonBOs (Multiple Persons)
   * 
   * @public
   */
  
  getPersons() {
    return this.#fetchAdvanced(this.#getPersonsURL()).then((responseJSON) => {
      let personBOs = PersonBO.fromJSON(responseJSON);
      console.log(responseJSON);
      return new Promise(function (resolve) {
        resolve(personBOs);
      });
    });
  }

  /**
   * Returns a Promise, which resolves to a PersonBO  
   *
   * @param {Number} personID to be retrieved
   * @public
   */

  getPersonByGoogleId(person) {
    //console.log(google_user_id)
    return this.#fetchAdvanced(this.#getPersonURL(person)).then(
      (responseJSON) => {
        // console.log(responseJSON)

        // We always get an array of PersonBOs.fromJSON, but only need one object
        let responsePersonBO = PersonBO.fromJSON(responseJSON);
        // console.info(responsePersonBO);
        return new Promise(function (resolve) {
          resolve(responsePersonBO);
        });
      }
    );
  }

  /**
   * Returns a Promise, which resolves to a PersonBO and creates a New PersonBO
   *
   * @param {String} plainName googleMail googleUserId to be retrieved
   * @public
   */

  createPerson(plainName, googleMail, googleUserId) {
    let p = new PersonBO();
    p.setGoogleMail(googleMail);
    p.setGoogleUserId(googleUserId);
    p.setName(plainName);
    return this.#fetchAdvanced(this.#addPersonURL(), {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(p),
    }).then((responseJSON) => {
      // We always get an array of PersonBOs.fromJSON, but only need one object
      let responsePersonBO = PersonBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(responsePersonBO);
      });
    });
  }

  /**
   * Updates a person and returns a Promise, which resolves to a PersonBOs.
   * 
   * @param {personBOs} PersonBO to be updated
   * @public
   */

  updatePerson(personBO) {
    return this.#fetchAdvanced(
      this.#updatePersonURL(personBO.getGoogleUserId()),
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json, text/plain',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(personBO),
      }
    ).then((responseJSON) => {
      // We always get an array of PersonBOs.fromJSON, but only need one object
      // kommt bei put überhaupt ein PersonenBO zurück??????????????
      let responsePersonBO = PersonBO.fromJSON(responseJSON)[0];
      // console.info(participationBOs);
      return new Promise(function (resolve) {
        resolve(responsePersonBO);
      });
    });
  }

  /**
   * Deletes the given person and returns a Promise, which resolves to an PersonBO
   *
   * @param id to be deleted
   * @public
   */
  deletePerson(id) {
    return this.#fetchAdvanced(this.#deletePersonURL(id), {
      method: 'DELETE',
    }).then((responseJSON) => {
      // We always get an array of ParticipationBO.fromJSON, but only need one object
      let personBOs = PersonBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(personBOs);
      });
    });
  }

  // Profile related

  /**
   * Returns a Promise, which resolves to an Array of ProfileBOs (Multiple Profiles)
   * 
   * @public
   */
  
  getProfiles() {
    return this.#fetchAdvanced(this.#getProfilesURL()).then((responseJSON) => {
      let profileBOs = ProfileBO.fromJSON(responseJSON);
      return new Promise(function (resolve) {
        resolve(profileBOs);
      });
    });
  }

  /**
   * Returns a Promise, which resolves to a ProfileBO (The Person posseses a sessionId and pass the sessionId of the Person to the Profile. 
   * That means that the Person who is creating the Profile, is the only one that have an access to this Profile)  
   *
   * @param {Number} sessionId to be retrieved
   * @public
   */
  
  getProfileViaUrl(sessionId) {
    return this.#fetchAdvanced(this.#getProfileViaURL(sessionId)).then(
      (responseJSON) => {
        console.log(responseJSON, 'response');
        let profileBOs = ProfileBO.fromJSON(responseJSON);
        return new Promise(function (resolve) {
          resolve(profileBOs);
        });
      }
    );
  }

  
   /**
   * Adds a Profile and returns a Promise, which resolves to a new ProfileBO which was create by a PersonBO 
   * object.
   * 
   * @param {ProfileBO} profileBO to be added. The profile of the new Profile is set by the backend
   * @public
   */

  addProfile(profile) {
    return this.#fetchAdvanced(this.#addProfileURL(), {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(profile),
    }).then((responseJSON) => {
      console.log(responseJSON);
      // We always get an array of ProfileBOs.fromJSON, but only need one object
      let responseProfileBO = ProfileBO.fromJSON(responseJSON)[0];
      // console.info(ProfileBOs);
      return new Promise(function (resolve) {
        resolve(responseProfileBO);
      });
    });
  }


   /**
   * Updates a profile and returns a Promise, which resolves to a ProfileBOs.
   * 
   * @param {profileBOs} ProfileBO to be updated
   * @public
   */
  
  updateProfile(id) {
    return this.#fetchAdvanced(this.#updateProfileURL(id), {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(id),
    }).then((responseJSON) => {
      // We always get an array of PersonBOs.fromJSON, but only need one object
      let responseProfileBO = ProfileBO.fromJSON(responseJSON)[0];
      // console.info(profileBOs);
      return new Promise(function (resolve) {
        resolve(responseProfileBO);
      });
    });
  }

  /**
   * Deletes the given profile and returns a Promise, which resolves to an ProfileBO
   *
   * @param id to be deleted
   * @public
   */
  deleteProfile(id) {
    return this.#fetchAdvanced(this.#deleteProfileURL(id), {
      method: 'DELETE',
    }).then((responseJSON) => {
      // We always get an array of ProfileBO.fromJSON, but only need one object
      let profileBOs = ProfileBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(profileBOs);
      });
    });
  }

  // Suggestion related
   
  /**
   * Returns a Promise, which resolves to an Array of SuggestionBO (Multiple Suggestions)
   * 
   * @public
   */
  
  getSuggestions() {
    return this.#fetchAdvanced(this.#getSuggestionsURL()).then(
      (responseJSON) => {
        let suggestionBOs = SuggestionBO.fromJSON(responseJSON);
        return new Promise(function (resolve) {
          resolve(suggestionBOs);
        });
      }
    );
  }

 /**
   * Adds a Suggestion and returns a Promise, which resolves to a new SugestionBO which was create by a PersonBO 
   * object.
   * 
   * @param {SuggestionBO} suggestionBO to be added.  
   * @public
   */

  addSuggestion(suggestion) {
    return this.#fetchAdvanced(this.#addSuggestionURL(), {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(suggestion),
    }).then((responseJSON) => {
      console.log(responseJSON);
      // We always get an array of SuggestionBOs.fromJSON, but only need one object
      let responseSuggestionBO = SuggestionBO.fromJSON(responseJSON)[0];
      // console.info(SuggestionBOs);
      return new Promise(function (resolve) {
        resolve(responseSuggestionBO);
      });
    });
  }

  
  /**
   * Updates a suggestions and returns a Promise, which resolves to a SuggestionBOs.
   * 
   * @param {suggestionBOs} SuggestionBO to be updated
   * @public
   */
  
  updateSuggestion(id) {
    return this.#fetchAdvanced(this.#updateSuggestionURL(id), {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(id),
    }).then((responseJSON) => {
      // We always get an array of SuggestionBOs.fromJSON, but only need one object
      let responseSuggestionBO = SuggestionBO.fromJSON(responseJSON)[0];
      // console.info(SuggestionBO);
      return new Promise(function (resolve) {
        resolve(responseSuggestionBO);
      });
    });
  }

  /**
   * Deletes the given Suggestion and returns a Promise, which resolves to an SuggestionBO
   *
   * @param id to be deleted
   * @public
   */
  deleteSuggestion(id) {
    return this.#fetchAdvanced(this.#deleteSuggestionURL(id), {
      method: 'DELETE',
    }).then((responseJSON) => {
      // We always get an array of SuggestionBO.fromJSON, but only need one object
      let suggestionBOs = SuggestionBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(suggestionBOs);
      });
    });
  }

  // LearnProfile related

  /**
   * Returns a Promise, which resolves to an Array of LearnProfilesBOs
   * 
   * @public
   */
  
  getLearnProfiles() {
    return this.#fetchAdvanced(this.#getLearnProfilesURL()).then(
      (responseJSON) => {
        let learnProfileBOs = LearnProfileBO.fromJSON(responseJSON);
        return new Promise(function (resolve) {
          resolve(learnProfileBOs);
        });
      }
    );
  }

  /**
   * Returns a Promise, which resolves to a LearnProfileBO (The Profile posseses a sessionId and pass the sessionId of the Person to the LearnProfile. 
   * That means that the Person who is creating the Profile, is the only one that have an access to this LearnProfile)  
   *
   * @param {Number} sessionId to be retrieved
   * @public
   */
  
  
  getLearnProfileViaUrl(sessionId) {
    return this.#fetchAdvanced(this.#getLearnProfileViaURL(sessionId)).then(
      (responseJSON) => {
        console.log(responseJSON, 'response');
        let profileBOs = ProfileBO.fromJSON(responseJSON);
        return new Promise(function (resolve) {
          resolve(profileBOs);
        });
      }
    );
  }

  /**
   * Adds a LearnProfile and returns a Promise, which resolves to a new LearnProfileBO which was create by a PersonBO 
   * object.
   * 
   * @param {LearnProfileBO} LearnProfileBO to be added. The learnprofile of the new LearnProfile is set by the backend
   * @public
   */

  addLearnProfile(learnProfile) {
    return this.#fetchAdvanced(this.#addLearnProfileURL(), {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(learnProfile),
    }).then((responseJSON) => {
      console.log(responseJSON);
      // We always get an array of LearnProfileBOs.fromJSON, but only need one object
      let responseLearnProfileBO = LearnProfileBO.fromJSON(responseJSON)[0];
      // console.info(ProfileBOs);
      return new Promise(function (resolve) {
        resolve(responseLearnProfileBO);
      });
    });
  }

  /**
   * Updates a learnprofile and returns a Promise, which resolves to a learnProfileBOs.
   * 
   * @param {learnprofileBOs} learnProfileBO to be updated
   * @public
   */
  
  updateLearnProfile(id) {
    return this.#fetchAdvanced(this.#updateLearnProfileURL(id), {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(id),
    }).then((responseJSON) => {
      // We always get an array of PersonBOs.fromJSON, but only need one object
      let responseLearnProfileBO = LearnProfileBO.fromJSON(responseJSON)[0];
      // console.info(profileBOs);
      return new Promise(function (resolve) {
        resolve(responseLearnProfileBO);
      });
    });
  }

  /**
   * Deletes the given learnprofile and returns a Promise, which resolves to an LearnProfileBO
   *
   * @param id to be deleted
   * @public
   */
  deleteLearnProfile(id) {
    return this.#fetchAdvanced(this.#deleteLearnProfileURL(id), {
      method: 'DELETE',
    }).then((responseJSON) => {
      // We always get an array of LearnProfileBO.fromJSON, but only need one object
      let learnProfileBOs = LearnProfileBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(learnProfileBOs);
      });
    });
  }

  // Chat

  /**
   * Returns a Promise, which resolves to an Array of ChatBOs
   * 
   * @public
   */

  getChats() {
    return this.#fetchAdvanced(this.#getChatsURL()).then((responseJSON) => {
      let chatBOs = ChatBO.fromJSON(responseJSON);
      return new Promise(function (resolve) {
        resolve(chatBOs);
      });
    });
  }

    /**
   * Returns a Promise, which resolves to an ChatBOs
   * 
   * @param {Number} personID for which the the person should be added to
   * @public
   */
  addChat(chat) {
    return this.#fetchAdvanced(this.#addChatURL(), {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(chat),
    }).then((responseJSON) => {
      console.log(responseJSON);
      // We always get an array of ChatBOs.fromJSON, but only need one object
      let responseChatBO = ChatBO.fromJSON(responseJSON)[0];
      // console.info(ChatBOs);
      return new Promise(function (resolve) {
        resolve(responseChatBO);
      });
    });
  }

  
  /**
   * Updates a chat and returns a Promise, which resolves to a ChatBO.
   * 
   * @param {ChatBO} chatBO to be updated
   * @public
   */
  
  updateChat(id) {
    return this.#fetchAdvanced(this.#updateChatURL(id), {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(id),
    }).then((responseJSON) => {
      // We always get an array of ChatBOs.fromJSON, but only need one object
      let responseChatBO = ChatBO.fromJSON(responseJSON)[0];
      // console.info(ChatBO);
      return new Promise(function (resolve) {
        resolve(responseChatBO);
      });
    });
  }

  /**
   * Deletes the given Chat and returns a Promise, which resolves to an ChatBO
   *
   * @param id to be deleted
   * @public
   */
  deleteChat(id) {
    return this.#fetchAdvanced(this.#deleteChatURL(id), {
      method: 'DELETE',
    }).then((responseJSON) => {
      // We always get an array of ChatBO.fromJSON, but only need one object
      let chatBOs = ChatBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(chatBOs);
      });
    });
  }

  //ChatMessage

  /**
   * Returns a Promise, which resolves to an Array of ChatMessageBOs
   * 
   * @public
   */
  
  getChatMessages() {
    return this.#fetchAdvanced(this.#getChatMessagesURL()).then(
      (responseJSON) => {
        let chatMessageBOs = ChatMessageBO.fromJSON(responseJSON);
        return new Promise(function (resolve) {
          resolve(chatMessageBOs);
        });
      }
    );
  }

  /**
   * Returns a Promise, which resolves to a ChatMessageBO
   *
   * @param {Number} chatmessage to be retrieved
   * @public
   */

  addChatMessage(chatmessage) {
    return this.#fetchAdvanced(this.#addChatMessageURL(), {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(chatmessage),
    }).then((responseJSON) => {
      console.log(responseJSON);
      // We always get an array of ChatGroupBOs.fromJSON, but only need one object
      let responeChatMessageBO = ChatMessageBO.fromJSON(responseJSON)[0];
      // console.info(ChatBOs);
      return new Promise(function (resolve) {
        resolve(responeChatMessageBO);
      });
    });
  }

  /**
   * Updates a ChatMessage and returns a Promise, which resolves to a ChatMessageBO.
   * 
   * @param {ChatMessageBO} chatMessageBO to be updated
   * @public
   */
  
  updateChatMessage(id) {
    return this.#fetchAdvanced(this.#updateChatMessageURL(id), {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(id),
    }).then((responseJSON) => {
      // We always get an array of ChatBOs.fromJSON, but only need one object
      let responseChatMessageBO = ChatMessageBO.fromJSON(responseJSON)[0];
      // console.info(ChatBO);
      return new Promise(function (resolve) {
        resolve(responseChatMessageBO);
      });
    });
  }

  /**
   * Deletes the given Chat and returns a Promise, which resolves to an ChatBO
   *
   * @param id to be deleted
   * @public
   */
  deleteChatMessage(id) {
    return this.#fetchAdvanced(this.#deleteChatMessageURL(id), {
      method: 'DELETE',
    }).then((responseJSON) => {
      // We always get an array of ChatBO.fromJSON, but only need one object
      let chatmessageBOs = ChatMessageBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(chatmessageBOs);
      });
    });
  }

  
  /**
   * Returns a Promise, which resolves to an Array of ChatBOs
   * 
   * @param {Number} learngroupId for which the the Chats should be retrieved
   * @public
   */
  
  
  
  getChatsByLearnGroupId(learngroup_id) {
    return this.#fetchAdvanced(
      this.#getChatsByLearnGroupIdURL(learngroup_id)
    ).then((responseJSON) => {
      let chatBOs = ChatBO.fromJSON(responseJSON);
      // console.info(chatBos);
      return new Promise(function (resolve) {
        resolve(chatBOs);
      });
    });
  }

  // LearnGroup related
  
  /**
   * Returns a Promise, which resolves to an Array of LearnGroupBOs
   * 
   * @public
   */
  
  getLearnGroups() {
    return this.#fetchAdvanced(this.#getLearnGroupsURL()).then(
      (responseJSON) => {
        let learnGroupBOs = LearnGroupBO.fromJSON(responseJSON);
        return new Promise(function (resolve) {
          resolve(learnGroupBOs);
        });
      }
    );
  }

  
  /**
   * Returns a Promise, which resolves to a LearnGroupBO
   *
   * @param {Number} id to be retrieved
   * @public
   */
  
  
  
  getLearnGroupById(id) {
    //console.log()
    return this.#fetchAdvanced(this.#getLearnGroupByIdURL(id)).then(
      (responseJSON) => {
        // console.log(responseJSON)

        let responseLearnGroupByIdBOs = LearnGroupBO.fromJSON(responseJSON);
        // console.info();
        return new Promise(function (resolve) {
          resolve(responseLearnGroupByIdBOs);
        });
      }
    );
  }

  /**
   * Adds a LearnGroup and returns a Promise, which resolves to a new LearnGroupBO object 
   * 
   * @param {LearnGroupBO} learnGroupBO to be added. The ID of the new learnGroup is set by the backend
   * @public
   */

  addLearnGroup(learnGroup) {
    return this.#fetchAdvanced(this.#addLearnGroupURL(), {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(learnGroup),
    }).then((responseJSON) => {
      console.log(responseJSON);
      // We always get an array of LearnProfileBOs.fromJSON, but only need one object
      let responseLearnGroupBO = LearnGroupBO.fromJSON(responseJSON)[0];
      // console.info(ProfileBOs);
      return new Promise(function (resolve) {
        resolve(responseLearnGroupBO);
      });
    });
  }

  /**
   * Updates a LearnGroup and returns a Promise, which resolves to a LearnGroupBO.
   * 
   * @param {LearnGroupBO} learnGroupBO to be updated
   * @public
   */
  
  updateLearnGroup(id) {
    return this.#fetchAdvanced(this.#updateLearnGroupURL(id), {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(id),
    }).then((responseJSON) => {
      // We always get an array of PersonBOs.fromJSON, but only need one object
      let responseLearnGroupBO = LearnGroupBO.fromJSON(responseJSON)[0];
      // console.info(profilegroupBOs);
      return new Promise(function (resolve) {
        resolve(responseLearnGroupBO);
      });
    });
  }

  /**
   * Deletes the given learnGroup and returns a Promise, which resolves to an learnGroupBO
   *
   * @param id to be deleted
   * @public
   */
  deleteLearnGroup(id) {
    return this.#fetchAdvanced(this.#deleteLearnGroupURL(id), {
      method: 'DELETE',
    }).then((responseJSON) => {
      // We always get an array of LearnGroupBO.fromJSON, but only need one object
      let learnGroupBOs = LearnGroupBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(learnGroupBOs);
      });
    });
  }



  /**
   * Returns a Promise, which resolves to an Array of LearnGroupBOs
   * 
   * @param {Number} personId for which the the LearnGroup should be retrieved
   * @public
   */
  
  getLearnGroupByPersonId(person_id) {
    //console.log(google_user_id)
    return this.#fetchAdvanced(
      this.#getLearnGroupByPersonIdURL(person_id)
    ).then((responseJSON) => {
      // console.log(responseJSON)

      // We always get an array of PersonBOs.fromJSON, but only need one object
      let responseLearnGroupByPersonBOs = LearnGroupBO.fromJSON(responseJSON);
      // console.info(responsePersonBO);
      return new Promise(function (resolve) {
        resolve(responseLearnGroupByPersonBOs);
      });
    });
  }

  updateLeaveLearnGroup(person_id) {
    // Lerngruppe verlassen
    return this.#fetchAdvanced(this.#LeaveLearnGroupURL(person_id), {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({'learngroup': learnGroupBO, 'person': personBO})
      
    })
  }

  //GroupRequest


  /**
   * Returns a Promise, which resolves to an Array of GroupRequestBOs
   * 
   * @param {Number} personId for which the the GroupRequest should be retrieved
   * @public
   */

  getGroupRequestByPersonId(person_id) {
    //console.log()
    return this.#fetchAdvanced(
      this.#getGroupRequestByPersonIdURL(person_id)
    ).then((responseJSON) => {
      // console.log(responseJSON)

      let responseGroupRequestByPersonBOs =
        GroupRequestBO.fromJSON(responseJSON);
      // console.info();
      return new Promise(function (resolve) {
        resolve(responseGroupRequestByPersonBOs);
      });
    });
  }



  /**
   * Returns a Promise, which resolves to an Array of GroupRequestBOs
   * 
   * @param {Number} learngroupId for which the the GroupRequest should be retrieved
   * @public
   */

  getGroupRequestByLearnGroupId(learngroup_id) {
    //console.log()
    return this.#fetchAdvanced(
      this.#getGroupRequestByLearnGroupIdURL(learngroup_id)
    ).then((responseJSON) => {
      // console.log(responseJSON)

      let responseGroupRequestByLearnGroupBOs =
        GroupRequestBO.fromJSON(responseJSON);
      // console.info();
      return new Promise(function (resolve) {
        resolve(responseGroupRequestByLearnGroupBOs);
      });
    });
  }

  
  
  /**
   * Returns a Promise, which resolves to an Array of GroupRequestBOs
   * 
   * @param {Boollean} isAccepted for which the the GroupRequest should be retrieved
   * @public
   */
  
  getGroupRequestByAccepted(is_accepted) {
    //console.log()
    return this.#fetchAdvanced(
      this.#getGroupRequestByAcceptedURL(is_accepted)
    ).then((responseJSON) => {
      // console.log(responseJSON)

      let responseGroupRequestByAcceptedBOs =
        GroupRequestBO.fromJSON(responseJSON);
      // console.info();
      return new Promise(function (resolve) {
        resolve(responseGroupRequestByAcceptedBOs);
      });
    });
  }

  
  
   /**
   * Deletes the given GroupRequest and returns a Promise, which resolves to an GroupRequestBO
   * 
   * @param id to be deleted
   * @public
   */
  
  deleteGroupRequestById(id) {
    return this.#fetchAdvanced(this.#deleteGroupRequestByIdURL(id), {
      method: 'DELETE',
    }).then((responseJSON) => {
      // We always get an array of ProfileBO.fromJSON, but only need one object
      let groupRequestBOs = GroupRequestBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(groupRequestBOs);
      });
    });
  }

  
  
   /**
   * Adds a GroupRequest and returns a Promise
   * 
   * @param {GroupRequestBO} groupRequestBO to be added. The ID of the new GroupRequest is set by the backend
   * @public
   */
  
  addGroupRequest(groupRequest) {
    return this.#fetchAdvanced(this.#addGroupRequestURL(), {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(groupRequest),
    }).then((responseJSON) => {
      console.log(responseJSON);
      // We always get an array of ProfileBOs.fromJSON, but only need one object
      let responseGroupRequestBO = GroupRequestBO.fromJSON(responseJSON)[0];
      // console.info(responseGroupRequestBO);
      return new Promise(function (resolve) {
        resolve(responseGroupRequestBO);
      });
    });
  }




  
  /**
   * Updates a GroupRequest and returns a Promise, which resolves to a GroupRequestBO.
   * 
   * @param {GroupRequestBO} groupRequestBO to be updated
   * @public
   */

  updateGroupRequest(is_accepted, id) {
    return this.#fetchAdvanced(this.#updateGroupRequestURL(is_accepted, id), {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(is_accepted, id),
    }).then((responseJSON) => {
      console.log(responseJSON);
      // We always get an array of ProfileBOs.fromJSON, but only need one object
      let responseGroupRequestBO = GroupRequestBO.fromJSON(responseJSON)[0];
      // console.info(responseGroupRequestBO);
      return new Promise(function (resolve) {
        resolve(responseGroupRequestBO);
      });
    });
  }

  //matches

  /**
   * Returns a Promise, which resolves to an Array of MatchesBOs
   * 
   * @param {Number} ID for which the the Matches should be retrieved
   * @public
   */
  
  getMatchesByPersonURL(id) {
    //console.log()
    return this.#fetchAdvanced(this.#getMatchesByPersonURL(id)).then(
      (responseJSON) => {
        // console.log(responseJSON)

        let responseMatchesByPersonBOs = responseJSON;
        // console.info();
        return new Promise(function (resolve) {
          resolve(responseMatchesByPersonBOs);
        });
      }
    );
  }

  
  
  
  
   /**
   * Returns a Promise, which resolves to an Array of MatchesBOs
   * 
   * @param {Number} ID for which the the Matches should be retrieved
   * @public
   */
  
  
  
  getMatchesByLearnGroup(id) {
    //console.log()
    return this.#fetchAdvanced(this.#getMatchesByLearnGroupURL(id)).then(
      (responseJSON) => {
        // console.log(responseJSON)

        let responseMatchesByLearnGroupBOs =
          LearnGroupBO.fromJSON(responseJSON);
        // console.info();
        return new Promise(function (resolve) {
          resolve(responseMatchesByLearnGroupBOs);
        });
      }
    );
  }
}
