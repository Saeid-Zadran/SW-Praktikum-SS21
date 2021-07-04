from server.bo.BusinessObject import BusinessObject as bo


class Chat(bo):

    def __init__(self):
        super().__init__()
        self._learngroup_id = 0
        self._is_accepted = 1
        self._sender= None
        self._message= None

    def set_learngroup_id(self, learngroup_id):
        """Setzen der Lerngruppen ID"""
        self._learngroup_id = learngroup_id

    def get_learngroup_id(self):
        """Auslesen der Lerngruppen ID"""
        return self._learngroup_id

    def get_is_accepted(self):
        """Auslesen ob die Anfrage akzeptiert wurde"""
        return self._is_accepted

    def set_is_accepted(self, is_accepted):
        """Anfrage als Akzeptert setzen"""
        self._is_accepted = is_accepted
    
    def get_sender(self):
        """Sender auslesen """
        return self._sender

    def set_sender(self, sender):
        """Sender setzen"""
        self._sender = sender

    def get_message(self):
        """Nachricht Auslesen"""
        return self._message

    def set_message(self, message):
        """Nachricht setzen"""
        self._message = message



    
    
    
    
    


    

    



    @staticmethod
    def from_dict(dictionary=dict()):
        """Umwandeln eines Python dict() in ein Rating()."""
        obj = Chat()
        """print(dictionary)"""
        obj.set_id(dictionary["id"])  # eigentlich Teil von BusinessObject !
        obj.set_learngroup_id(dictionary["learngroup_id"])
        obj.set_is_accepted(dictionary["is_accepted"])
        obj.set_sender(dictionary["sender"])
        obj.set_message(dictionary["message"])


        return obj