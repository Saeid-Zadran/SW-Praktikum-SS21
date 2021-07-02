import BusinessObject from './BusinessObject';

/**
 * Represents an GroupRequest object of a person.
 */


export default class GroupRequestBO extends BusinessObject {

   /**
   * Constructs a GroupRequestBO object with a given Accepted, PersonId, LearnGroupId.
   * 
   * @param {String} aAccepted - the accepted of this GroupRequestBO.
   * @param {Integer} aPersonId - the personId of this GroupRequestBO.
   * @param {Integer} aLearnGroupId - the learnGroupId of this GroupRequestBO.
   */

  


  constructor(aAccepted, aPersonId, aLearnGroupId) {
    super();
    this.is_accepted = aAccepted;
    this.person_id = aPersonId;
    this.learngroup_id = aLearnGroupId;
  }

  /**
   * Sets a new accepted.
   * 
   * @param {Bool} aAccepted - the new accepted of this GroupRequestBO.
   */


  setAccepted(aAccepted) {
    this.is_accepted = aAccepted;
  }

  /**
   * Gets the accepted.
   */
  getAccepted() {
    return this.is_accepted;
  }

  /**
   * Sets a new personId.
   * 
   * @param {Integer} aPersonId - the new personId of this GroupRequestBO.
   */

  setPersonId(aPersonId) {
    this.person_id = aPersonId;
  }

  /**
   * Gets the personId.
   */

  getPersonId() {
    return this.person_id;
  }

  /**
   * Sets a new learnGroupId.
   * 
   * @param {Integer} aLearnGroupId - the new learnGroupId of this GroupRequestBO.
   */

  setLearnGroupId(aLearnGroupId) {
    this.learngroup_id = aLearnGroupId;
  }

  /**
   * Gets the learnGroupId.
   */
  
  getLearnGroupId() {
    return this.learngroup_id;
  }

  


  /** 
   * Returns an Array of ChatBOs from a given JSON structure.
   */

  static fromJSON(groupRequests) {
    let result = [];

    if (Array.isArray(groupRequests)) {
        groupRequests.forEach((l) => {
        Object.setPrototypeOf(l, GroupRequestBO.prototype);
        result.push(l);
      })
    } else {
      // Es handelt sich offenbar um ein singuläres Objekt
      let l = groupRequests;
      Object.setPrototypeOf(l, GroupRequestBO.prototype);
      result.push(l);
    }

    return result;
  }
}