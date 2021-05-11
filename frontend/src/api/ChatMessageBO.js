import BusinessObject from './BusinessObject';


export default class ChatMessageBO extends BusinessObject {


  constructor(aText, aPersonId, aReceived, aRead) {
    super();
    this.text = aText;
    this.person_id = aPersonId;
    this.received = aReceived;
    this.read = aRead;
  }


  setText(aText) {
    this.text = aText;
  }


  getText() {
    return this.text;
  }


  setPersonId(aPersonId) {
    this.person_id = aPersonId;
  }


  getPersonId() {
    return this.person_id;
  }


  setReceived(aReceived) {
    this.received = aReceived;
  }


  getReceived() {
    return this.received;
  }


  setRead(aRead) {
    this.read = aRead;
  }


  getRead() {
    return this.read;
  }






  static fromJSON(chatMessages) {
    let result = [];

    if (Array.isArray(chatMessages)) {
        chatMessages.forEach((m) => {
        Object.setPrototypeOf(m, ChatMessageBO.prototype);
        result.push(m);
      })
    } else {
      // Es handelt sich offenbar um ein singuläres Objekt
      let m = chatMessages;
      Object.setPrototypeOf(m, ChatMessageBO.prototype);
      result.push(m);
    }

    return result;
  }
}