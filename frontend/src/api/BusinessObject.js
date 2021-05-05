export default class BusinessObject {

    
    constructor() {
      this.id = 0;
      this.creation_time = dateTime.now();
    }
  
    
    setID(aId) {
      this.id = aId;
    }
  
    
    getID() {
      return this.id;
    }

    setCreationTime(aCreationTime) {
        this.creation_time = aCreationTime;
      }
    
    getCreationTime() {
        return this.creation_time;
      }
  
    
    toString() {
      let result = '';
      for (var prop in this) {
        result += prop + ': ' + this[prop] + ' ';
      }
      return result;
    }
  }