import NamedBusinessObject from './NamedBusinessObject';


export default class SuggestionBO extends NamedBusinessObject {


  constructor(aPersonId, aLernGroupId) {
    super();
    this.person_id = aPersonId;
    this.learn_group_id = aLernGroupId;

  }


  setPersonId(aPersonId) {
    this.person_id = aPersonId;
  }


  getPersonId() {
    return this.person_id;
  }


  setLernGroupId(aLernGroupId) {
    this.learn_group_id = aLernGroupId;
  }


  getLernGroupId() {
    return this.learn_group_id;
  }



  static fromJSON(suggestions) {
    let result = [];

    if (Array.isArray(suggestions)) {
        suggestions.forEach((s) => {
        Object.setPrototypeOf(s, SuggestionBO.prototype);
        result.push(s);
      })
    } else {

      let s = suggestions;
      Object.setPrototypeOf(s, SuggestionBO.prototype);
      result.push(s);
    }

    return result;
  }
} 