import BusinessObject from './BusinessObject';


export default class ChatMessageBO extends BusinessObject {


  constructor(aText, aPersonId, aChatId) {
    super();
    this.text = aText;
    this.person_id = aPersonId;
    this.chat_id = aChatId;
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


  setChatId(aChatId) {
    this.chat_id = aChatId;
  }


  getChatId() {
    return this.chat_id;
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