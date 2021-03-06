from server.bo.BusinessObject import BusinessObject as bo


class GroupRequest(bo):

    def __init__(self):
        super().__init__()
        self._is_accepted = False
        self._learngroup_id = 0
        self._person_id = 0

    def get_learngroup_id(self):
        """Auslesen der Lerngruppen ID"""
        return self._learngroup_id

    def set_learngroup_id(self, learngroup_id):
        """Setzen der Lerngruppen ID"""
        self._learngroup_id = learngroup_id

    def get_is_accepted(self):
        """Auslesen ob die Anfrage akzeptiert wurde"""
        return self._is_accepted

    def set_is_accepted(self, is_accepted):
        """Anfrage als Akzeptert setzen"""
        self._is_accepted = is_accepted
    
    def get_person_id(self):
        """Auslesen der Person ID"""
        return self._person_id

    def set_person_id(self, person_id):
        """Setzen der Person ID"""
        self._person_id = person_id

 

    @staticmethod
    def from_dict(dictionary=dict()):
        """Umwandeln eines Python dict() in eine GroupRequest()."""
        obj = GroupRequest()
        obj.set_id(dictionary["id"])
        obj.set_is_accepted(dictionary["is_accepted"])
        obj.set_learngroup_id(dictionary["learngroup_id"])
        obj.set_person_id(dictionary["person_id"])
       

        return obj
