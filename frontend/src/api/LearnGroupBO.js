import BusinessObject from './BusinessObject';

/**
 * Represents an LearnGroup object of a Person.
 */

export default class LearnGroupBO extends BusinessObject {

  /**
   * Constructs a new LearnGroupBO object with a given Name and PersonId .
   * 
   * @param {String} aName - the name of this LearnGroupBO.
   * @param {String} aPersonId - the person Id of this LearnGroupBO.
   */


  constructor(aName, aPersonId) {
    super();
    this.name = aName;
    this.person_id = aPersonId;
  }

  /**
   * Sets a new name.
   * 
   * @param {String} aName - the new name of this LearnGroupBO.
   */

  setName(aName) {
    this.name = aName;
  }

  /**
   * Gets the name.
   */
  getName() {
    return this.name;
  }

  /**
   * Sets a new person Id.
   * 
   * @param {Integer} aPersonId - the new person Id of this LearnGroupBO.
   */
  setPersonId(aPersonId) {
    this.person_id = aPersonId;
  }

  /**
   * Gets the person Id.
   */

  getPersonId() {
    return this.person_id;
  }

  /** 
   * Returns an Array of LearnGroupBO from a given JSON structure.
   */
 static fromJSON(learnGroups) {
    let result = [];

    if (Array.isArray(learnGroups)) {
        learnGroups.forEach((g) => {
        Object.setPrototypeOf(g, LearnGroupBO.prototype);
        result.push(g);
      })
    } else {

      let g = learnGroups;
      Object.setPrototypeOf(g, LearnGroupBO.prototype);
      result.push(g);
    }

    return result;
  }
}