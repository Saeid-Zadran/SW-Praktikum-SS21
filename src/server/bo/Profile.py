from server.bo.NamedBusinessObject import NamedBusinessObject as nbo

class Profile(nbo):
    def __init__(self):
        super().__init__()
        self._age = 0
        self._adress = ""
        self._semester = 0
        self._degree_course = ""
        self._preferences = ""
        self._person_id = None


    def set_age(self, age):
        self._age = age

    def get_age(self):
        return self._age

    def set_adress(self, adress):
        self._adress = adress

    def get_adress(self):
        return self._adress
    
    def set_semester(self, semester):
        self._semester = semester

    def get_semester(self):
        return self._semester

    def set_degree_course(self, degree_course):
        self._degree_course = degree_course

    def get_degree_course(self):
        return self._degree_course   

    def set_preferences(self, pre_knowledge):
        self._preferences = pre_knowledge

    def get_preferences(self):
        return self._preferences

    def set_person_id(self, person_id):
        self._person_id = person_id

    def get_person_id(self):
        return self._person_id


    # def __str__(self): #age adress semester degree_course preferences person_id
    #     """Erzeugen einer einfachen textuellen Darstellung der jeweiligen Instanz."""
    #     return "Profil: {}, {}, {}, Semester: {}, Studiengang: {} , {}".format(self.get_id(),self.get_name(), self.get_age(), self.get_adress(),
    #                                                 self.get_creation_time(), self.get_degree_course(),
    #                                                 self.get_preferences(), self.get_person_id())
    @staticmethod
    def from_dict(dictionary=dict()):
        """Umwandeln eines Python dict() in ein Rating()."""
        obj = Profile()
        """print(dictionary)"""
        obj.set_id(dictionary["id"])  # eigentlich Teil von BusinessObject !
        obj.set_name(dictionary["name"])
        obj.set_age(dictionary["age"])
        obj.set_adress(dictionary["adress"])
        obj.set_semester(dictionary["semester"])
        obj.set_degree_course(dictionary["degree_course"])
        obj.set_preferences(dictionary["preferences"])
        obj.set_person_id(dictionary["person_id"])

        return obj
