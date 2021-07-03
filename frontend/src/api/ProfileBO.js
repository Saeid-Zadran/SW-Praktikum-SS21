import NamedBusinessObject from "./NamedBusinessObject";

/**
 * Represents an Profile object of a Profile.
 */

export default class ProfileBO extends NamedBusinessObject {
  
  /**
   * Constructs a new LearnProfileBO object with a given Age, Adress, Semester,DegreeCourse, PersonId.
   * 
   * @param {String} aAge - the Age of this ProfileBO.
   * @param {String} aAdress - the Adress of this ProfileBO.
   * @param {String} aSemester - the Semester of this ProfileBO.
   * @param {String} aDegreeCourse - the DegreeCourse of this ProfileBO.
   * @param {Integer} aPersonId - the PersonId of this ProfileBO.
   * 
   */

  
  constructor(aAge,aAdress,aSemester,aDegreeCourse,aPersonId) {
    super();
    this.age = aAge;
    this.adress = aAdress;
    this.semester = aSemester;
    this.degree_course = aDegreeCourse;
    this.person_id = aPersonId;
  }

  /**
   * Sets the Age of this ProfileBO.
   * 
   * @param {String} aAge - the new Age of this ProfileBO.
   */

  setAge(aAge) {
    this.age = aAge;
  }

  /**
   * Gets the Age of this ProfileBO.
   */
  
  getAge() {
    return this.age;
  }

  /**
   * Sets the Adress of this ProfileBO.
   * 
   * @param {String} aAdress - the new Adress of this ProfileBO.
   */

  setAdress(aAdress) {
    this.adress = aAdress;
  }

   /**
   * Gets the Adress of this ProfileBO.
   */

  getAdress() {
    return this.adress;
  }

  /**
   * Sets the Semester of this ProfileBO.
   * 
   * @param {String} aSemester - the new Semester of this ProfileBO.
   */

  setSemester(aSemester) {
    this.semester = aSemester;
  }

   /**
   * Gets the Semester of this ProfileBO.
   */

  getSemester() {
    return this.semester;
  }

  /**
   * Sets the DegreeCourse of this ProfileBO.
   * 
   * @param {String} aDegreeCourse - the new DegreeCourse of this ProfileBO.
   */

  setDegreeCourse(aDegreeCourse) {
    this.degree_course = aDegreeCourse;
  }

  /**
   * Gets the DegreeCourse of this ProfileBO.
   */

  getDegreeCourse() {
    return this.degree_course;
  }

 
/**
   * Sets the PersonId  of this ProfileBO.
   * 
   * @param {Integer} aPersonId - the new PersonId  of this ProfileBO.
   */

  setPersonId(aPersonId) {
    this.person_id = aPersonId;
  }

  /**
   * Gets the PersonId of this ProfileBO.
   */

  getPersonId() {
    return this.person_id;
  }

  /**
   * Returns an Array of ProfileBOs from a given JSON structure
   */

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
