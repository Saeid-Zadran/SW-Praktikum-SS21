from server.bo.BusinessObject import BusinessObject as bo


class LearnGroup(bo):

    def __init__(self):
        super().__init__()
        self._participant = 0
        self._profile_id = 0
        self._grouprequest_learnprofile_id = 0
        self._name= ""
    

    def get_name(self):
        return self._name

    def set_name(self, _name):
        self._name = _name

    def get_participant(self):
        return self._participant

    def set_participant(self, participant):
        self._participant = participant


    def get_grouprequest_learnprofile_id(self):
        return self._grouprequest_learnprofile_id

    def set_grouprequest_learnprofile_id(self, grouprequest_learnprofile_id):
        self._grouprequest_learnprofile_id= grouprequest_learnprofile_id

    @staticmethod
    def from_dict(dictionary=dict()):
        """Umwandeln eines Python dict() in ein Rating()."""
        obj = LearnGroup()
        """print(dictionary)"""
        obj.set_id(dictionary["id"])  # eigentlich Teil von BusinessObject !
        #obj.set_creation_time(dictionary["creation_time"])
        obj.set_name(dictionary["name"])
        obj.set_participant(dictionary["participant"])
        obj.set_grouprequest_learnprofile_id(dictionary["grouprequest_learnprofile_id"])

        return obj