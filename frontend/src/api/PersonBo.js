import NamedBusinessObject from './NamedBusinessObject';


export default class PersonBO extends NamedBusinessObject {

  
  constructor(aFirstname, aLastname, aGoogleMail, aGoogleUserId) {
    super();
    this.first_name = aFirstname;
    this.last_name = aLastname;
    this.google_mail = aGoogleMail;
    this.google_user_id = aGoogleUserId;

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

  
  setGoogleMail(aGoogleMail) {
    this.google_mail = aGoogleMail;
  }

  
  getGoogleMail() {
    return this.google_mail;
  }


  setGoogleUserId(aGoogleUserId) {
    this.google_user_id = aGoogleUserId;
  }

  
  getGoogleUserId() {
    return this.google_user_id;
  }

 
  static fromJSON(persons) {
    let result = [];

    if (Array.isArray(persons)) {
        persons.forEach((n) => {
        Object.setPrototypeOf(n, PersonBO.prototype);
        result.push(n);
      })
    } else {
      let n = persons;
      Object.setPrototypeOf(n, PersonBO.prototype);
      result.push(n);
    }

    return result;
  }
}

