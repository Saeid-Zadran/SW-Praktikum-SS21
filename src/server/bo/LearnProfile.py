from server.bo.BusinessObject import BusinessObject as bo


class LearnProfile(bo):
    def __init__(self):
        super().__init__()
        self._study_status = 0
        self._frequency = 0
        self._prev_knowledge = 0
        self._group_size = 0
        self._extroversion = 0
        self._person_id = 0

    def set_study_status(self, study_status):
        """Setzen des Status"""
        self._study_status = study_status

    def get_study_status(self):
        """Auslesen des Status"""
        return self._study_status

    def set_frequency(self, frequency):
        """Setzen der Frequenz"""
        self._frequency = frequency 

    def get_frequency(self):
        """Auslesen der Frequenz"""
        return self._frequency

    def set_prev_knowledge(self, prev_knowledge):
        """Setzen der Vorkenntnisse"""
        self._prev_knowledge = prev_knowledge

    def get_prev_knowledge(self):
        """Auslesen der Vorkenntnisse"""
        return self._prev_knowledge

    def set_group_size(self, group_size):
        """Setzen der bevorzugten Gruppengröße"""
        self._group_size = group_size

    def get_group_size(self):
        """Auslesen der bevorzugten Gruppengröße"""
        return self._group_size

    def set_extroversion(self, extroversion):
        """Setzen der Extroversität"""
        self._extroversion = extroversion

    def get_extroversion(self):
        """Auslese der Extroversität"""
        return self._extroversion

    def set_person_id(self, person_id):
        """Setzen der Person ID"""
        self._person_id = person_id

    def get_person_id(self):
        """Auslesen der Person ID"""
        return self._person_id

    @staticmethod
    def from_dict(dictionary=dict()):
        """Umwandeln eines Python dict() in ein Rating()."""
        obj = LearnProfile()
        """print(dictionary)"""
        obj.set_id(dictionary["id"])  # eigentlich Teil von BusinessObject !
        obj.set_study_status(dictionary["study_status"])
        obj.set_frequency(dictionary["frequency"])
        obj.set_prev_knowledge(dictionary["prev_knowledge"])
        obj.set_group_size(dictionary["group_size"])
        obj.set_extroversion(dictionary["extroversion"])
        obj.set_person_id(dictionary["person_id"])

        return obj