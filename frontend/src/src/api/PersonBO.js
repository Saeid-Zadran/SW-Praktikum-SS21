import NamedBusinessObject from './NamedBusinessObject';


export default class PersonBO extends NamedBusinessObject {


  constructor(aGoogleMail, aGoogleUserId) {
    super();
    this.google_mail = aGoogleMail;
    this.google_user_id = aGoogleUserId;

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