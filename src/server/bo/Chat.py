from server.bo.BusinessObject import BusinessObject as bo

class Chat(bo):

    def __init__(self):
        super().__init__()
        self._source_id = None
        self._target_id = None
        self._is_accepted = 0

    def get_source_id(self):
        return self._source_id
    def set_source_id(self, source_id):
        self._source_id = source_id

    def set_target_id(self, target_id):
        self._source_id = target_id

    def get_target_id(self):
        return self._target_id

    def get_is_accepted(self):
        return self._is_accepted

    def set_is_accepted(self, is_accepted):
        self._is_accepted = is_accepted



    @staticmethod
    def from_dict(dictionary=dict()):
        """Umwandeln eines Python dict() in ein Rating()."""
        obj = Chat()
        """print(dictionary)"""
        obj.set_id(dictionary["id"])  # eigentlich Teil von BusinessObject !
        obj.set_creation_time(dictionary["creation_time"])
        obj.set_source_id(dictionary["source_id"])
        obj.set_target_id(dictionary["target_id"])
        obj.set_is_accepted(dictionary["is_accepted"])

        return obj