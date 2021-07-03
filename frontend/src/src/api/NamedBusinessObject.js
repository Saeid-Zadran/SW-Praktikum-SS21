import  BusinessObject from './BusinessObject';

/**
 * Base class for all BusinessObjects, which has an ID field by default.
 */


export default class NamedBusinessObjectBO extends BusinessObject {


  constructor() {
    super();
    this.name = '';

  }

  /**
   * Sets the Name of this NamedBusinessObject.
   * 
   * @param {String} aName - the new Name of this NamedBusinessObject
   */

  setName(aName) {
  this.name = aName;
  }

  /**
   * Returns the Name of this BusinessObject.
   */

  getName() {
    return this.name;
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
