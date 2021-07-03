import NamedBusinessObject from './NamedBusinessObject';

/**
 * Represents an Suggestion object of a Suggestion.
 */


export default class SuggestionBO extends NamedBusinessObject {

   /**
   * Constructs a new SuggestionBO object with a given PersonId, LernGroupId.
   * 
   * @param {Integer} aPersonId - the PersonId of this SuggestionBO.
   * @param {Integer} aLernGroupId - the LernGroupId of this SuggestionBO.
   * 
   */



  constructor(aPersonId, aLernGroupId) {
    super();
    this.person_id = aPersonId;
    this.learngroup_id = aLernGroupId;

  }

  /**
   * Sets the PersonId of this SuggestionBO.
   * 
   * @param {Integer} aPersonId - the new PersonId of this SuggestionBO.
   */

  setPersonId(aPersonId) {
    this.person_id = aPersonId;
  }

  /**
   * Gets the PersonId of this SuggestionBO.
   */

  getPersonId() {
    return this.person_id;
  }

  /**
   * Sets the LernGroupId of this SuggestionBO.
   * 
   * @param {Integer} aLernGroupId - the new LernGroupId of this SuggestionBO.
   */

  setLernGroupId(aLernGroupId) {
    this.learngroup_id = aLernGroupId;
  }

  /**
   * Gets the LernGroupId of this SuggestionBO.
   */

  getLernGroupId() {
    return this.learngroup_id;
  }


   /**
   * Returns an Array of SuggestionBOs from a given JSON structure
   */
  static fromJSON(suggestions) {
    let result = [];

    if (Array.isArray(suggestions)) {
        suggestions.forEach((s) => {
        Object.setPrototypeOf(s, SuggestionBO.prototype);
        result.push(s);
      })
    } else {

      let s = suggestions;
      Object.setPrototypeOf(s, SuggestionBO.prototype);
      result.push(s);
    }

    return result;
  }
} 