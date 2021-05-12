import BusinessObject from './BusinessObject';


export default class ChatBO extends BusinessObject {


  constructor(aSourceId, aTargetId, aIsAccepted) {
    super();
    this.source_id = aSourceId;
    this.target_id = aTargetId;
    this.is_accepted = aIsAccepted;
  }


  setSourceId(aSourceId) {
    this.source_id = aSourceId;
  }


  getSourceId() {
    return this.source_id;
  }


  setTargetId(aTargetId) {
    this.target_id = aTargetId;
  }


  getTargetId() {
    return this.target_id;
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