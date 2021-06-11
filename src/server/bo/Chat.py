from server.bo.BusinessObject import BusinessObject as bo


class Chat(bo):

    def __init__(self):
        super().__init__()
        self._is_accepted = 0
        learngroup_id = 0


    def set_learngroup_id(self, learngroup_id):
        self._learngroup_id = learngroup_id

    def get_learngroup_id(self):
        return self._learngroup_id

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
        obj.set_learngroup_id(dictionary["learngroup_id"])
        obj.set_is_accepted(dictionary["is_accepted"])

        return obj