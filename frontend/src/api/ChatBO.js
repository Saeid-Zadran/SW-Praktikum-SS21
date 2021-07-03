import BusinessObject from './BusinessObject';

/**
 * Represents an chat object of a person.
 */


export default class ChatBO extends BusinessObject {

  /**
   * Constructs a new ChatBO object with a given learnGroupId, is Accepted, sender, message, order.
   * 
   * @param {Integer} aLearnGroupId - the learnGroupId of this ChatBO.
   * @param {Bool} aIsAccepted - the is Accepted of this ChatBO.
   * @param {String} aSender - the Sender of this ChatBO.
   * @param {String} aMessage - the Message of this ChatBO.
   * @param {String} aOrder - the Order of this ChatBO.
   */
   


  constructor(aLearnGroupId,aIsAccepted,aSender,aMessage,aOrder) {
    super();
    this.learngroup_id = aLearnGroupId;
    this.is_accepted = aIsAccepted;
    this.sender = aSender
    this.message = aMessage
    this.order = aOrder



  }

  /**
   * Sets the LearnGroupId of this ChatBO.
   * 
   * @param {Number} aLearnGroupId - the new aLearnGroupId of this ChatBO.
   */


  setLearnGroupId(aLearnGroupId) {
    this.learngroup_id = aLearnGroupId;
  }

  /**
   * Gets the LearnGroupId of this ChatBO.
   */


  getLearnGroupId() {
    return this.learngroup_id;
  }


  
  /**
   * Sets the aIsAccepted of this ChatBO.
   * 
   * @param {Bool} aIsAccepted - the new aIsAccepted of this ChatBO.
   */

  setIsAccepted(aIsAccepted) {
    this.is_accepted = aIsAccepted;
  }

  /**
   * Gets the is accepted of this ChatBO.
   */

  getIsAccepted() {
    return this.is_accepted;
  }


  /**
   * Sets the aSender of this ChatBO.
   * 
   * @param {Integer} aSender - the new aSender of this ChatBO.
   */

  setSender(aSender) {
    this.sender = aSender;
  }

  /**
   * Gets the is sender of this ChatBO.
   */

  getSender() {
    return this.sender;
  }

  /**
   * Sets the aSender of this ChatBO.
   * 
   * @param {String} aSender - the new aSender of this ChatBO.
   */

  setMessage(aMessage) {
    this.message = aMessage;
  }

  /**
   * Gets the is message of this ChatBO.
   */

  getMessage() {
    return this.message;
  }

  
  /**
   * Sets the aOrder of this ChatBO.
   * 
   * @param {String} aOrder - the new aOrder of this ChatBO.
   */

  setOrder(aOrder) {
    this.order = aOrder;
  }

  /**
   * Gets the is order of this ChatBO.
   */
  
  getOrder() {
    return this.order;
  }


 /**
   * Returns an Array of ChatBOs from a given JSON structure
   */

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