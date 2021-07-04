from server.bo.BusinessObject import BusinessObject as bo


class Suggestion(bo):

    def __init__(self):
        super().__init__()
        self._person_id = 0
        self._learn_group_id = 0


    def set_person_id(self, person_id):
        self._person_id = person_id

    def get_person_id(self):
        return self._person_id

    def set_learn_group_id(self, learn_group_id):
        self._learn_group_id = learn_group_id

    def get_learn_group_id(self):
        return self._learn_group_id



    @staticmethod
    def from_dict(dictionary=dict()):
        """Umwandeln eines Python dict() in ein Suggestion()."""
        obj = Suggestion()
        obj.set_id(dictionary["id"])  # eigentlich Teil von BusinessObject !
        #obj.set_name(dictionary["name"])                    # Teil von BO
        obj.set_person_id(dictionary["person_id"])
        obj.set_learn_group_id(dictionary["learn_group_id"])

        return obj
