import NamedBusinessObject from './NamedBusinessObject';


export default class LearnGroupBO extends NamedBusinessObject {


  constructor(aParticipant, aProfileId, aLearnProfileId) {
    super();
    this.participant = aParticipant;
    this.profile_id = aProfileId;
    this.learn_profile_id = aLearnProfileId;
  }


  setParticipant(aParticipant) {
    this.participant = aParticipant;
  }


  getParticipant() {
    return this.participant;
  }


  setProfileId(aProfileId) {
    this.profile_id = aProfileId;
  }


  getProfileId() {
    return this.profile_id;
  }


  LearnProfileId(aLearnProfileId) {
    this.learn_profile_id = aLearnProfileId;
  }


  getLearnProfileId() {
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