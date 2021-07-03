import NamedBusinessObject from './NamedBusinessObject';

/**
 * Represents an LearnProfile object of a LearnProfile.
 */


export default class LearnProfileBO extends NamedBusinessObject {

  /**
   * Constructs a new LearnProfileBO object with a given StudyStatus, Frequency, PrevKnowledge,GroupSize, Extroversion, ProfileId.
   * 
   * @param {Boolean} aStudyStatus - the StudyStatus of this LearnProfileBO.
   * @param {Integer} aFrequency - the Frequency of this LearnProfileBO.
   * @param {String} aPrevKnowledge - the PrevKnowledge of this LearnProfileBO.
   * @param {Integer} aGroupSize - the GroupSize of this LearnProfileBO.
   * @param {Boolean} aExtroversion - the Extroversion of this LearnProfileBO.
   * @param {Integer} aProfileId - the ProfileId of this LearnProfileBO.
   * 
   */


  constructor(aStudyStatus, aFrequency, aPrevKnowledge, aGroupSize, aExtroversion, aProfileId) {
    super();
    this.study_status = aStudyStatus;
    this.frequency = aFrequency;
    this.prev_knowledge = aPrevKnowledge;
    this.group_size = aGroupSize;
    this.extroversion = aExtroversion;
    this.person_id = aProfileId;
  }

 /**
   * Sets the text of this LearnProfileBO.
   * 
   * @param {Boolean} aStudyStatus - the new StudyStatus of this LearnProfileBO.
   */

  setStudyStatus(aStudyStatus) {
    this.study_status = aStudyStatus;
  }

  /**
   * Gets the text of this LearnProfileBO.
   */

  getStudyStatus() {
    return this.study_status;
  }

  /**
   * Sets the text of this LearnProfileBO.
   * 
   * @param {Integer} aFrequency - the new Frequency of this LearnProfileBO.
   */
  setFrequency(aFrequency) {
    this.frequency = aFrequency;
  }

   /**
   * Gets the frequency of this LearnProfileBO.
   */
  getFrequency() {
    return this.frequency;
  }

  /**
   * Sets the prev knowledge of this LearnProfileBO.
   * 
   * @param {String} aPrevKnowledge - the new PrevKnowledge of this LearnProfileBO.
   */

  setPrevKnowledge(aPrevKnowledge) {
    this.prev_knowledge = aPrevKnowledge;
  }

  /**
   * Gets the prev_knowledge of this LearnProfileBO.
   */
  getPrevKnowledge() {
    return this.prev_knowledge;
  }

   /**
   * Sets the prev groupSize of this LearnProfileBO.
   * 
   * @param {Integer} GroupSize - the new groupSize of this LearnProfileBO.
   */
  setGroupSize(aGroupSize) {
    this.group_size = aGroupSize;
  }

  /**
   * Gets the group_size of this LearnProfileBO.
   */
  getGroupSize() {
    return this.group_size;
  }

   /**
   * Sets the  Extroversion of this LearnProfileBO.
   * 
   * @param {Boolean} Extroversion - the new Extroversion of this LearnProfileBO.
   */
  setExtroversion(aExtroversion) {
    this.extroversion = aExtroversion;
  }

  /**
   * Gets the extroversion of this LearnProfileBO.
   */
  getExtroversion() {
    return this.extroversion;
  }

  /**
   * Sets the  ProfileId of this LearnProfileBO.
   * 
   * @param {Integer} ProfileId - the new ProfileId of this LearnProfileBO.
   */
  setProfileId(aProfileId) {
    this.person_id = aProfileId;
  }

  /**
   * Gets the ProfileId of this LearnProfileBO.
   */

  getProfileId() {
    return this.person_id;
  }

  /**
   * Returns an Array of LearnProfileBO from a given JSON structure
   */
 static fromJSON(learnProfiles) {
    let result = [];

    if (Array.isArray(learnProfiles)) {
        learnProfiles.forEach((p) => {
        Object.setPrototypeOf(p, LearnProfileBO.prototype);
        result.push(p);
      })
    } else {

      let p = learnProfiles;
      Object.setPrototypeOf(p, LearnProfileBO.prototype);
      result.push(p);
    }

    return result;
  }
} 