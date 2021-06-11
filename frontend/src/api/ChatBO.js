import BusinessObject from './BusinessObject';


export default class ChatBO extends BusinessObject {


  constructor(aLearnGroupId,aIsAccepted) {
    super();
    this.learngroup_id = aLearnGroupId;
    
    this.is_accepted = aIsAccepted;
  }


  setLearnGroupId(aLearnGroupId) {
    this.learngroup_id = aLearnGroupId;
  }


  getLearnGroupId() {
    return this.learngroup_id;
  }


  

  setIsAccepted(aIsAccepted) {
    this.is_accepted = aIsAccepted;
  }


  getIsAccepted() {
    return this.is_accepted;
  }



  static fromJSON(chats) {
    let result = [];

    if (Array.isArray(chats)) {
      chats.forEach((c) => {
        Object.setPrototypeOf(c, ChatBO.prototype);
        result.push(c);
      })
    } else {
      // Es handelt sich offenbar um ein singuläres Objekt
      let c = chats;
      Object.setPrototypeOf(c, ChatBO.prototype);
      result.push(c);
    }

    return result;
  }
} 