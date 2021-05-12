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
  #AppServerBaseURL = "/app";

  // Local http-fake-backend
  // #AppServerBaseURL = '/AppApi/app';

  // Person Related
  #getPersonsURL = () => `${this.#AppServerBaseURL}/persons`;
  #addPersonURL = () => `${this.#AppServerBaseURL}/persons`;
  #updatePersonURL = (google_id) =>
    `${this.#AppServerBaseURL}/persons/${google_id}`;
  #deletePersonURL = (id) => `${this.#AppServerBaseURL}/persons/${id}`;

  // Profile
  #getProfilesURL = () => `${this.#AppServerBaseURL}/profiles`;
  #addProfileURL = () => `${this.#AppServerBaseURL}/profiles`;
  #updateProfileURL = () => `${this.#AppServerBaseURL}/profiles`;
  #deleteProfileURL = (id) => `${this.#AppServerBaseURL}/profiles/${id}`;

  /**
   * Get the Singelton instance
   *
   * @public
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
   */
  #fetchAdvanced = (url, init) =>
    fetch(url, init).then((res) => {
      // The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500.
      if (!res.ok) {
        throw Error(`${res.status} ${res.statusText}`);
      }
      return res.json();
    });

  // Person related
  getPersons() {
    return this.#fetchAdvanced(this.#getPersonsURL()).then((responseJSON) => {
      let PersonBOs = PersonBO.fromJSON(responseJSON);
      return new Promise(function (resolve) {
        resolve(PersonBOs);
      });
    });
  }

  /**
   * Returns a Promise, which resolves to a PersonBO
   *
   * @param {Number} personID to be retrieved
   * @public
   */

  createPerson(GoogleMail, GoogleUserId) {
    let p = new PersonBO();
    p.setGoogleMail(GoogleMail);
    p.setGoogleUserId(GoogleUserId);

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
      let ProfileBOs = ProfileBO.fromJSON(responseJSON);
      return new Promise(function (resolve) {
        resolve(ProfileBOs);
      });
    });
  }

  /**
   * Returns a Promise, which resolves to a ProfileBO
   *
   * @param {Number} profileID to be retrieved
   * @public
   */

  createProfile(profile) {
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
        resolve(responseProfileBO);
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
}
