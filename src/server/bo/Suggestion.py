from server.bo.NamedBusinessObject import NamedBusinessObject as nbo

class Suggestion(nbo):

    def __init__(self):
        super().__init__()
        self._person_id = None
        self._learn_group_id = None


    def set_person_id(self, person_id):
        self._person_id = person_id

    def get_person_id(self):
        self._person_id

    def set_learn_group_id(self, learn_group_id):
        self._learn_group_id = learn_group_id

    def get_learn_group_id(self):
        self._learn_group_id


@staticmethod
def from_dict(dictionary=dict()):
    """Umwandeln eines Python dict() in ein Rating()."""
    obj = Suggestion()
    """print(dictionary)"""
    obj.set_id(dictionary["id"])  # eigentlich Teil von BusinessObject !
    obj.set_creation_time(dictionary["creation_time"])  # Teil von BO
    obj.set_name(dictionary["name"])                    # Teil von BO
    obj.set_person_id(dictionary["person_id"])
    obj.set_learn_group_id(dictionary["learn_group_id"])

    return obj
