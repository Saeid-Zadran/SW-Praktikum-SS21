import NamedBusinessObject from './NamedBusinessObject';


export default class LearnGroupBO extends NamedBusinessObject {


  constructor(aName,aParticipant, aProfileId, aGroupRequestLearnProfileId) {
    super();
    this.name = aName;
    this.participant = aParticipant;
    this.profile_id = aProfileId;
    this.grouprequest_learnprofile_id = aGroupRequestLearnProfileId;
  }

  setName(aName) {
    this.name = aName;
  }


  getName() {
    return this.name;
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


  setGroupRequestLearnProfileId(aGroupRequestLearnProfileId) {
    this.grouprequest_learnprofile_id = aGroupRequestLearnProfileId;
  }


  getGroupRequestLearnProfileId() {
    return this.grouprequest_learnprofile_id;
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