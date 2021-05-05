import NamedBusinessObject from './NamedBusinessObject';


export default class LearnGroupBO extends NamedBusinessObject {

  
  constructor(aParticipant, aProfileId, aLearnProfileId) {
    super();
    this.participant = aParticipant;
    this.profile_id = aProfileId;
    this.learn_profile_id = aLearnProfileId;
  }

  
  setFirstName(aParticipant) {
    this.participant = aParticipant;
  }

 
  getFirstName() {
    return this.participant;
  }

  
  setLastName(aProfileId) {
    this.profile_id = aProfileId;
  }

  
  getLastName() {
    return this.profile_id;
  }

  
  setLastName(aLearnProfileId) {
    this.learn_profile_id = aLearnProfileId;
  }

  
  getLastName() {
    return this.learn_profile_id;
  }



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