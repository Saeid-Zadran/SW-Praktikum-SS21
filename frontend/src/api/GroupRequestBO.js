import BusinessObject from './BusinessObject';


export default class GroupRequestBO extends BusinessObject {


  constructor(aAccepted, aPersonId, aLearnGroupId) {
    super();
    this.is_accepted = aAccepted;
    this.person_id = aPersonId;
    this.learngroup_id = aLearnGroupId;
  }


  setAccepted(aAccepted) {
    this.is_accepted = aAccepted;
  }


  getAccepted() {
    return this.is_accepted;
  }


  setPersonId(aPersonId) {
    this.person_id = aPersonId;
  }


  getPersonId() {
    return this.person_id;
  }


  setLearnGroupId(aLearnGroupId) {
    this.learngroup_id = aLearnGroupId;
  }


  getLearnGroupId() {
    return this.learngroup_id;
  }

  



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