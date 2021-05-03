from server.bo.NamedBusinessObject import NamedBusinessObject as nbo


class LearnGroup(nbo):

    def __init__(self):
        super().__init__()
        self._participant = None
        self._profile_id = None
        self._learn_profile_id = None

    def get_participant(self):
        return self._participant

    def set_participant(self, participant):
        self._participant = participant

    def get_profile_id(self):
        return self._profile_id

    def set_profile_id(self, profile_id):
        self._profile_id = profile_id

    def get_learn_profile_id(self):
        return self._learn_profile_id

    def set_learn_profile_id(self, learn_profile_id):
        self._learn_profile_id= learn_profile_id

    @staticmethod
    def from_dict(dictionary=dict()):
        """Umwandeln eines Python dict() in ein Rating()."""
        obj = LearnGroup()
        """print(dictionary)"""
        obj.set_id(dictionary["id"])  # eigentlich Teil von BusinessObject !
        obj.set_creation_time(dictionary["creation_time"])
        obj.set_name(dictionary["name"])
        obj.set_participant(dictionary["participant"])
        obj.set_profile_id(dictionary["profile_id"])
        obj.set_learn_profile_id(dictionary["learn_profile_id"])

        return obj