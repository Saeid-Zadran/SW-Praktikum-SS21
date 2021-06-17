import BusinessObject from './BusinessObject';


export default class LearnGroupBO extends BusinessObject {


  constructor(aName, aPersonId) {
    super();
    this.name = aName;
    this.person_id = aPersonId;
  }

  setName(aName) {
    this.name = aName;
  }


  getName() {
    return this.name;
  }

  
  setPersonId(aPersonId) {
    this.person_id = aPersonId;
  }


  getPersonId() {
    return this.person_id;
  }


 static fromJSON(learnGroups) {
    let result = [];

    if (Array.isArray(learnGroups)) {
        learnGroups.forEach((g) => {
        Object.setPrototypeOf(g, LearnGroupBO.prototype);
        result.push(g);
      })
    } else {

      let g = learnGroups;
      Object.setPrototypeOf(g, LearnGroupBO.prototype);
      result.push(g);
    }

    return result;
  }
}