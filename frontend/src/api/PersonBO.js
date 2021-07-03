import NamedBusinessObject from './NamedBusinessObject';

/**
 * Represents an Person object of a Project.
 */




export default class PersonBO extends NamedBusinessObject {

   /**
   * Constructs a new LearnProfileBO object with a given StudyStatus, Frequency, PrevKnowledge,GroupSize, Extroversion, ProfileId.
   * 
   * @param {String} aGoogleMail - the GoogleMail of this PersonBO.
   * @param {Integer} aGoogleUserId - the GoogleUserId of this PersonBO.
   * 
   */


  constructor(aGoogleMail, aGoogleUserId) {
    super();
    this.google_mail = aGoogleMail;
    this.google_user_id = aGoogleUserId;

  }

   /**
   * Sets the GoogleMail of this PersonBO.
   * 
   * @param {String} aGoogleMail - the new GoogleMail of this PersonBO.
   */

  setGoogleMail(aGoogleMail) {
    this.google_mail = aGoogleMail;
  }

  /**
   * Gets the text of this PersonBO.
   */

  getGoogleMail() {
    return this.google_mail;
  }

  /**
   * Sets the GoogleUserId of this PersonBO.
   * 
   * @param {Integer} aGoogleUserId - the new GoogleUserId of this PersonBO.
   */

  setGoogleUserId(aGoogleUserId) {
    this.google_user_id = aGoogleUserId;
  }

  /**
   * Gets the GoogleUserId of this PersonBO.
   */
  getGoogleUserId() {
    return this.google_user_id;
  }

  /**
   * Returns an Array of PersonBOs from a given JSON structure
   */
  static fromJSON(persons) {
    let result = [];

    if (Array.isArray(persons)) {
        persons.forEach((n) => {
        Object.setPrototypeOf(n, PersonBO.prototype);
        result.push(n);
      })
    } else {
      let n = persons;
      Object.setPrototypeOf(n, PersonBO.prototype);
      result.push(n);
    }

    return result;
  }
}