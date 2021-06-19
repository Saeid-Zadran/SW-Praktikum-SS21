from server.bo.BusinessObject import BusinessObject as bo


class LearnGroup(bo):

    def __init__(self):
        super().__init__()

        self._name= ""
        self._person_id = 0
        
    

    def get_name(self):
        return self._name

    def set_name(self, name):
        self._name = name
    
    def get_person_id(self):
        return self._person_id

    def set_person_id(self, person_id):
        self._person_id = person_id

    


  

    @staticmethod
    def from_dict(dictionary=dict()):
        """Umwandeln eines Python dict() in ein Rating()."""
        obj = LearnGroup()
        """print(dictionary)"""
        obj.set_id(dictionary["id"])  # eigentlich Teil von BusinessObject !
        #obj.set_creation_time(dictionary["creation_time"])
        obj.set_name(dictionary["name"])
        obj.set_person_id(dictionary["person_id"])
 

        return obj