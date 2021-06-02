from server.bo.BusinessObject import BusinessObject as bo


class GroupRequest(bo):

    def __init__(self):
        super().__init__()
        self.learngroup_id = 0
        self._source_id = None
        self._target_id = None
        self._is_accepted = True

    def get_learngroup_id(self):
        return self.learngroup_id

    def set_learngroup_id(self, value):
        self.learngroup_id = value

    def get_source_id(self):
        return self._source_id

    def set_source_id(self, value):
        self._source_id = value

    def get_target_id(self):
        return self._target_id

    def set_target_id(self, value):
        self._target_id = value

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
        obj.set_learngroup_id(dictionary["learngroup_id"])
        obj.set_source_id(dictionary["source_id"])
        obj.set_target_id(dictionary["target_id"])
        obj.set_is_accepted(dictionary["is_accepted"])

        return obj
