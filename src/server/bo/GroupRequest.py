from server.bo.BusinessObject import BusinessObject as bo


class GroupRequest(bo):

    def __init__(self):
        super().__init__()
        self._is_accepted = False
        self._learnprofile_id = 0

    def get_learnprofile_id(self):
        return self.learnprofile

    def set_learnprofile_id(self, value):
        self.learnprofile_id = value

 

    def get_is_accepted(self):
        return self._is_accepted

    def set_is_accepted(self, value):
        self._is_accepted = value

 

    @staticmethod
    def from_dict(dictionary=dict()):
        """Umwandeln eines Python dict() in eine GroupRequest()."""
        obj = GroupRequest()
        obj.set_id(dictionary["id"])
        #obj.set_creation_time(dictionary["creation_time"])
        obj.set_learnprofile_id(dictionary["learnprofile_id"])
        obj.set_is_accepted(dictionary["is_accepted"])

        return obj
