import ChatBO from "./ChatBO";
import ChatMessageBO from "./ChatMessageBO";
import LearnGroupBO from "./LearnGroupBO";
import LearnProfileBO from "./LearnProfileBO";
import PersonBO from "./PersonBO";
import ProfileBO from "./ProfileBO";
import SuggestionBO from "./SuggestionBO";

/**
 * Abstracts the REST interface of the Python backend with convenient access methods.
 * The class is implemented as a singleton.
 */
export default class AppApi {
  // Singelton instance
  static #api = null;

  // Local Python backend
  #AppServerBaseURL = "http://localhost:5000/app";

  // Local http-fake-backend
  // #AppServerBaseURL = '/AppApi/app';

  //Person Related
  #getPersonsURL = () => `${this.#AppServerBaseURL}/persons`;
  #getPersonURL = (google_user_id) => `${this.#AppServerBaseURL}/person-by-google-user-id/${google_user_id}`;
  #addPersonURL = () => `${this.#AppServerBaseURL}/persons`;
  #updatePersonURL = (google_user_id) =>`${this.#AppServerBaseURL}/persons/${google_user_id}`;
  #deletePersonURL = (id) => `${this.#AppServerBaseURL}/persons/${id}`;

  //Profile

  #getProfilesURL = () => `${this.#AppServerBaseURL}/profiles`;
  #addProfileURL = () => `${this.#AppServerBaseURL}/profile`;
  #updateProfileURL = (id) => `${this.#AppServerBaseURL}/profile/${id}`;
  #deleteProfileURL = (id) => `${this.#AppServerBaseURL}/profile/${id}`;

  //Suggestion
  #getSuggestionsURL = () => `${this.#AppServerBaseURL}/suggestions`;
  #addSuggestionURL = () => `${this.#AppServerBaseURL}/suggestions`;
  #updateSuggestionURL = () => `${this.#AppServerBaseURL}/suggestions`;
  #deleteSuggestionURL = (id) => `${this.#AppServerBaseURL}/suggestions/${id}`;

  //LearnProfile
  #getLearnProfilesURL = () => `${this.#AppServerBaseURL}/learnprofiles`;
  #addLearnProfileURL = () => `${this.#AppServerBaseURL}/learnprofiles`;
  #updateLearnProfileURL = () => `${this.#AppServerBaseURL}/learnprofiles`;
  #deleteLearnProfileURL = (id) =>`${this.#AppServerBaseURL}/learnprofiles/${id}`;

  //Chat
  #getChatsURL = () => `${this.#AppServerBaseURL}/chats`;
  #addChatURL = () => `${this.#AppServerBaseURL}/chats`;
  #updateChatURL = () => `${this.#AppServerBaseURL}/chats`;
  #deleteChatURL = (id) => `${this.#AppServerBaseURL}/chats/${id}`;

  //ChatMessage
  #getChatMessagesURL = () => `${this.#AppServerBaseURL}/chatmessages`;
  #addChatMessageURL = () => `${this.#AppServerBaseURL}/chatmessages`;
  #updateChatMessageURL = () => `${this.#AppServerBaseURL}/chatmessages`;
  #deleteChatMessageURL = (id) =>`${this.#AppServerBaseURL}/chatmessages/${id}`;

  //LearnGroup
  #getLearnGroupsURL = () => `${this.#AppServerBaseURL}/learngroups`;
  #addLearnGroupURL = () => `${this.#AppServerBaseURL}/learngroups`;
  #updateLearnGroupURL = () => `${this.#AppServerBaseURL}/learngroups`;
  #deleteLearnGroupURL = (id) => `${this.#AppServerBaseURL}/learngroups/${id}`;

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
    return this.#fetchAdvanced(this.#getPersonURL(person)).then((responseJSON) => {
      // console.log(responseJSON)
      
      // We always get an array of PersonBOs.fromJSON, but only need one object
      let responsePersonBO = PersonBO.fromJSON(responseJSON);
      // console.info(responsePersonBO);
      return new Promise(function (resolve) {
        resolve(responsePersonBO);
      })
    })
  }

  createPerson(plainName, googleMail, googleUserId) {
    let p = new PersonBO();
    p.setGoogleMail(googleMail);
    p.setGoogleUserId(googleUserId);
    p.setName(plainName)
    return this.#fetchAdvanced(this.#addPersonURL(), {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-type": "application/json",
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

  updatePerson(personBO) {
    return this.#fetchAdvanced(
      this.#updatePersonURL(personBO.getGoogleUserId()),
      {
        method: "PUT",
        headers: {
          Accept: "application/json, text/plain",
          "Content-type": "application/json",
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
   * Deletes the given participation and returns a Promise, which resolves to an ParticipationBO
   *
   * @param id to be deleted
   * @public
   */
  deletePerson(id) {
    return this.#fetchAdvanced(this.#deletePersonURL(id), {
      method: "DELETE",
    }).then((responseJSON) => {
      // We always get an array of ParticipationBO.fromJSON, but only need one object
      let personBOs = PersonBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(personBOs);
      });
    });
  }

  // Profile related
  getProfiles() {
    return this.#fetchAdvanced(this.#getProfilesURL()).then((responseJSON) => {
      let profileBOs = ProfileBO.fromJSON(responseJSON);
      return new Promise(function (resolve) {
        resolve(profileBOs);
      });
    });
  }

  /**
   * Returns a Promise, which resolves to a ProfileBO
   *
   * @param {Number} profileID to be retrieved
   * @public
   */

  addProfile(profile) {

    return this.#fetchAdvanced(this.#addProfileURL(), {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-type": "application/json",
      },
      body: JSON.stringify(profile),
    }).then((responseJSON) => {
      console.log(responseJSON);
      // We always get an array of ProfileBOs.fromJSON, but only need one object
      let responseProfileBO = ProfileBO.fromJSON(responseJSON)[0];
      // console.info(ProfileBOs);
      return new Promise(function (resolve) {
        resolve(responseProfileBO)
      });
    });
  }

  updateProfile(id) {
    return this.#fetchAdvanced(this.#updateProfileURL(id), {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain",
        "Content-type": "application/json",
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
   * Deletes the given profile and returns a Promise, which resolves to an ParticipationBO
   *
   * @param id to be deleted
   * @public
   */
  deleteProfile(id) {
    return this.#fetchAdvanced(this.#deleteProfileURL(id), {
      method: "DELETE",
    }).then((responseJSON) => {
      // We always get an array of ProfileBO.fromJSON, but only need one object
      let profileBOs = ProfileBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(profileBOs);
      });
    });
  }


  // Suggestion related
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
   * Returns a Promise, which resolves to a SuggestionBO
   *
   * @param {Number} suggestionID to be retrieved
   * @public
   */

  addSuggestion(suggestion) {
    return this.#fetchAdvanced(this.#addSuggestionURL(), {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-type": "application/json",
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

  updateSuggestion(id) {
    return this.#fetchAdvanced(this.#updateSuggestionURL(id), {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain",
        "Content-type": "application/json",
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
   * Deletes the given Suggestion and returns a Promise, which resolves to an ParticipationBO
   *
   * @param id to be deleted
   * @public
   */
  deleteSuggestion(id) {
    return this.#fetchAdvanced(this.#deleteSuggestionURL(id), {
      method: "DELETE",
    }).then((responseJSON) => {
      // We always get an array of SuggestionBO.fromJSON, but only need one object
      let suggestionBOs = SuggestionBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(suggestionBOs);
      });
    });
  }

  // LearnProfile related
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
   * Returns a Promise, which resolves to a ProfileBO
   *
   * @param {Number} learnProfileID to be retrieved
   * @public
   */

  addLearnProfile(learnProfile) {
    return this.#fetchAdvanced(this.#addLearnProfileURL(), {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-type": "application/json",
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

  updateLearnProfile(id) {
    return this.#fetchAdvanced(this.#updateLearnProfileURL(id), {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain",
        "Content-type": "application/json",
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
   * Deletes the given profile and returns a Promise, which resolves to an ParticipationBO
   *
   * @param id to be deleted
   * @public
   */
  deleteLearnProfile(id) {
    return this.#fetchAdvanced(this.#deleteLearnProfileURL(id), {
      method: "DELETE",
    }).then((responseJSON) => {
      // We always get an array of LearnProfileBO.fromJSON, but only need one object
      let learnProfileBOs = LearnProfileBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(learnProfileBOs);
      });
    });
  }

  // Chat
  getChats() {
    return this.#fetchAdvanced(this.#getChatsURL()).then((responseJSON) => {
      let chatBOs = ChatBO.fromJSON(responseJSON);
      return new Promise(function (resolve) {
        resolve(chatBOs);
      });
    });
  }

  /**
   * Returns a Promise, which resolves to a ChatBO
   *
   * @param {Number} chatID to be retrieved
   * @public
   */

  addChat(chat) {
    return this.#fetchAdvanced(this.#addChatURL(), {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-type": "application/json",
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

  updateChat(id) {
    return this.#fetchAdvanced(this.#updateChatURL(id), {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain",
        "Content-type": "application/json",
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
      method: "DELETE",
    }).then((responseJSON) => {
      // We always get an array of ChatBO.fromJSON, but only need one object
      let chatBOs = ChatBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(chatBOs);
      });
    });
  }

  //ChatMessage

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
   * Returns a Promise, which resolves to a ChatBO
   *
   * @param {Number} chatmessageID to be retrieved
   * @public
   */

  addChatMessage(chatmessage) {
    return this.#fetchAdvanced(this.#addChatMessageURL(), {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-type": "application/json",
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

  updateChatMessage(id) {
    return this.#fetchAdvanced(this.#updateChatMessageURL(id), {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain",
        "Content-type": "application/json",
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
      method: "DELETE",
    }).then((responseJSON) => {
      // We always get an array of ChatBO.fromJSON, but only need one object
      let chatmessageBOs = ChatMessageBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(chatmessageBOs);
      });
    });
  }

  // LearnGroup related
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
   * Returns a Promise, which resolves to a ProfileGroupBO
   *
   * @param {Number} learnGroupID to be retrieved
   * @public
   */

  addLearnGroup(learnGroup) {
    return this.#fetchAdvanced(this.#addLearnGroupURL(), {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-type": "application/json",
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

  updateLearnGroup(id) {
    return this.#fetchAdvanced(this.#updateLearnGroupURL(id), {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain",
        "Content-type": "application/json",
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
   * Deletes the given profileGroup and returns a Promise, which resolves to an ParticipationBO
   *
   * @param id to be deleted
   * @public
   */
  deleteLearnGroup(id) {
    return this.#fetchAdvanced(this.#deleteLearnGroupURL(id), {
      method: "DELETE",
    }).then((responseJSON) => {
      // We always get an array of LearnGroupBO.fromJSON, but only need one object
      let learnGroupBOs = LearnGroupBO.fromJSON(responseJSON)[0];
      return new Promise(function (resolve) {
        resolve(learnGroupBOs);
      });
    });
  }
}
