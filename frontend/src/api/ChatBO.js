import BusinessObject from './BusinessObject';


export default class ChatBO extends BusinessObject {


  constructor(aLearnGroupId,aIsAccepted,aSender,aMessage,aOrder) {
    super();
    this.learngroup_id = aLearnGroupId;
    this.is_accepted = aIsAccepted;
    this.sender = aSender
    this.message = aMessage
    this.order = aOrder



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

  setSender(aSender) {
    this.sender = aSender;
  }


  getSender() {
    return this.sender;
  }

  setMessage(aMessage) {
    this.message = aMessage;
  }


  getMessage() {
    return this.message;
  }

  setOrder(aOrder) {
    this.order = aOrder;
  }


  getOrder() {
    return this.order;
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