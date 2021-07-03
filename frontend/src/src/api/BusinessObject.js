

export default class BusinessObject {

    /**
   * The null constructor.
   */

    constructor() {
      this.id = 0;
      this.creation_time = null
    }

    
     /**
   * Sets the ID of this BusinessObject.
   * 
   * @param {Number} aId - the new ID of this BusinessObject
   */

    setID(aId) {
      this.id = aId;
    }

    /**
   * Returns the ID of this BusinessObject.
   */
    getID() {
      return this.id;
    }
    
    setCreationTime(aCreationTime) {
        this.creation_time = aCreationTime;
      }

    getCreationTime() {
        return this.creation_time;
      }

    /**
   * Returns a string representation of this Object. This is useful for debugging purposes.
   */
    toString() {
      let result = '';
      for (var prop in this) {
        result += prop + ': ' + this[prop] + ' ';
      }
      return result;
    }
  }