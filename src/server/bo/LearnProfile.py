from server.bo.NamedBusinessObject import NamedBusinessObject as nbo

class LearnProfile(nbo):
    def __init__(self):
        super().__init__()
        self._study_status = 0
        self._frequency = 0
        self._prev_knowledge = ""
        self._extroversion = 0
        self._profile_id = None


    def set_study_status(self, study_status):
        self._study_status = study_status

    def get_study_status(self):
        return self.study_status

    def set_frequency(self, frequency):
        self._frequency = frequency 

    def get_frequency(self):
        return self._frequency

    def set_prev_knowledge(self, prev_knowledge):
        self._prev_knowledge = prev_knowledge

    def get_prev_knowledge(self):
        return self._prev_knowledge

    def set_extroversion(self, extroversion ):
        self._extroversion = extroversion

    def get_extroversion(self):
        return self._extroversion

    def set_profile_id(self, profile_id):
        self._profile_id = profile_id

    def get_profile_id(self):
        return self._profile_id



    @staticmethod
    def from_dict(dictionary=dict()):
        """Umwandeln eines Python dict() in ein Rating()."""
        obj = LearnProfile()
        """print(dictionary)"""
        obj.set_id(dictionary["id"])  # eigentlich Teil von BusinessObject !
        obj.set_creation_time(dictionary["creation_time"])
        obj.set_name(dictionary["name"]) 
        obj.set_study_status(dictionary["study_status"])
        obj.set_frequency(dictionary["frequency"])
        obj.set_prev_knowledge(dictionary["prev_knowledge"])
        obj.set_extroversion(dictionary["extroversion"])
        obj.set_profile_id(dictionary["profile_id"])

        return obj