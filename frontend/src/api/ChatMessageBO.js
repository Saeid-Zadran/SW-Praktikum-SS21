import BusinessObject from './BusinessObject';

 /**
 * Represents an ChatMessage object of a Chat.
 */

export default class ChatMessageBO extends BusinessObject {

  /**
   * Constructs a new ChatMessageBO object with a given Text, PersonId and ChatId.
   * 
   * @param {String} aText - the Text of this ChatMessageBO.
   * @param {Integer} aPersonId - the PersonId of this ChatMessageBO.
   * @param {Integer} aChatId - the ChatId of this ChatMessageBO.
   */

 

  constructor(aText, aPersonId, aChatId) {
    super();
    this.text = aText;
    this.person_id = aPersonId;
    this.chat_id = aChatId;
  }

  /**
   * Sets the text of this ChatMessageBO.
   * 
   * @param {String} aText - the new owner of this ChatMessageBO.
   */

  setText(aText) {
    this.text = aText;
  }

  /**
   * Gets the text of this ChatMessageBO.
   */

  getText() {
    return this.text;
  }

  /**
   * Sets the PersonId of this ChatMessageBO.
   * 
   * @param {Integer} aPersonId - the new Person Id of this ChatMessageBO.
   */
  
  setPersonId(aPersonId) {
    this.person_id = aPersonId;
  }

  /**
   * Gets the Person Id of this ChatMessageBO.
   */
  getPersonId() {
    return this.person_id;
  }

  /**
   * Sets the aChatId of this ChatMessageBO.
   * 
   * @param {Integer} aChatId - the new Chat Id of this ChatMessageBO.
   */
  setChatId(aChatId) {
    this.chat_id = aChatId;
  }

  /**
   * Gets the Chat Id of this ChatMessageBO.
   */

  getChatId() {
    return this.chat_id;
  }



  /**
   * Returns an Array of ChatMessageBO from a given JSON structure
   */

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