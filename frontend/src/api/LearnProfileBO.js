import NamedBusinessObject from './NamedBusinessObject';

/**
 * Represents an learnProfile object of a Profile.
 */


export default class LearnProfileBO extends NamedBusinessObject {


  constructor(aStudyStatus, aFrequency, aPrevKnowledge,aGroupSize, aExtroversion, aProfileId) {
    super();
    this.study_status = aStudyStatus;
    this.frequency = aFrequency;
    this.prev_knowledge = aPrevKnowledge;
    this.group_size = aGroupSize;
    this.extroversion = aExtroversion;
    this.person_id = aProfileId;
  }


  setStudyStatus(aStudyStatus) {
    this.study_status = aStudyStatus;
  }


  getStudyStatus() {
    return this.study_status;
  }


  setFrequency(aFrequency) {
    this.frequency = aFrequency;
  }


  getFrequency() {
    return this.frequency;
  }


  setPrevKnowledge(aPrevKnowledge) {
    this.prev_knowledge = aPrevKnowledge;
  }


  getPrevKnowledge() {
    return this.prev_knowledge;
  }

  setGroupSize(aGroupSize) {
    this.group_size = aGroupSize;
  }

  getGroupSize() {
    return this.group_size;
  }

  setExtroversion(aExtroversion) {
    this.extroversion = aExtroversion;
  }

  getExtroversion() {
    return this.extroversion;
  }


  setProfileId(aProfileId) {
    this.person_id = aProfileId;
  }


  getProfileId() {
    return this.person_id;
  }


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