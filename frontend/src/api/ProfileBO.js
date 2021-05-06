import NamedBusinessObject from './NamedBusinessObject';


export default class ProfileBO extends NamedBusinessObject {

  
  constructor(aAge, aAdress, aSemester, aDegreeCourse, aPreKnowledge, aPersonId, aFirstname, aLastname) {
    super();
    this.age = aAge;
    this.adress = aAdress;
    this.semester = aSemester;
    this.degree_course = aDegreeCourse;
    this.pre_knowledge = aPreKnowledge;
    this.person_id = aPersonId;
    this.first_name = aFirstname;
    this.last_name = aLastname;
  }

  
  setaAge(aAge) {
    this.age = aAge;
  }

 
  getaAge() {
    return this.age;
  }

  
  setAdress(aAdress) {
    this.adress = aAdress;
  }

  
  getAdress() {
    return this.adress;
  }

  
  setSemester(aSemester) {
    this.semester = aSemester;
  }

  
  getSemester() {
    return this.semester;
  }

  
  setDegreeCourse(aDegreeCourse) {
    this.degree_course = aDegreeCourse;
  }

  
  getDegreeCourse() {
    return this.degree_course;
  }

  
  setPreKnowledge(aPreKnowledge) {
    this.pre_knowledge = aPreKnowledge;
  }

  
  getPreKnowledge() {
    return this.pre_knowledge;
  }

  setPersonId(aPersonId) {
    this.person_id = aPersonId;
  }

  
  getPersonId() {
    return this.person_id;
  }

  setFirstName(aFirstname) {
    this.first_name = aFirstname;
  }

  
  getFirstName() {
    return this.first_name;
  }

 
  setLastName(aLastname) {
    this.last_name = aLastname;
  }

  
  getLastName() {
    return this.last_name;
  }


 static fromJSON(profiles) {
    let result = [];

    if (Array.isArray(profiles)) {
        profiles.forEach((f) => {
        Object.setPrototypeOf(f, ProfileBO.prototype);
        result.push(f);
      })
    } else {
      let f = profiles;
      Object.setPrototypeOf(f, ProfileBO.prototype);
      result.push(f);
    }

    return result;
  }
}