import NamedBusinessObject from './NamedBusinessObject';


export default class LearnProfileBO extends NamedBusinessObject {

  
  constructor(aStudyStatus, aFrequency, aPrevKnowledge, aExtroversion, aProfileId) {
    super();
    this.study_status = aStudyStatus;
    this.frequency = aFrequency;
    this.prev_knowledge = aPrevKnowledge;
    this.extroversion = aExtroversion;
    this.profile_id = aProfileId;
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

  
  setExtroversion(aExtroversion) {
    this.extroversion = aExtroversion;
  }

  
  getExtroversion() {
    return this.extroversion;
  }

  
  setProfileId(aProfileId) {
    this.profile_id = aProfileId;
  }

  
  getProfileId() {
    return this.profile_id;
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