import NamedBusinessObject from "./NamedBusinessObject";

export default class ProfileBO extends NamedBusinessObject {
  constructor(aAge,aAdress,aSemester,aDegreeCourse,aPersonId) {
    super();
    this.age = aAge;
    this.adress = aAdress;
    this.semester = aSemester;
    this.degree_course = aDegreeCourse;
    this.person_id = aPersonId;
  }

  setAge(aAge) {
    this.age = aAge;
  }

  getAge() {
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

 

  setPersonId(aPersonId) {
    this.person_id = aPersonId;
  }

  getPersonId() {
    return this.person_id;
  }

  static fromJSON(profiles) {
    let result = [];

    if (Array.isArray(profiles)) {
      profiles.forEach((f) => {
        Object.setPrototypeOf(f, ProfileBO.prototype);
        result.push(f);
      });
    } else {
      let f = profiles;
      Object.setPrototypeOf(f, ProfileBO.prototype);
      result.push(f);
    }

    return result;
  }
}
