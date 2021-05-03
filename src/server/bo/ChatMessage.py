from server.bo.BusinessObject import BusinessObject as bo


class ChatMessage(bo):

    def __init__(self):
        super().__init__()
        self._text = None
        self._person_id = None
        self._received= None
        self._read = 0

    def set_text(self, text):
        self._text = text

    def get_text(self):
        return self._text

    def set_person_id(self, person_id):
        self._person_id = person_id

    def get_person_id(self):
        return self._person_id

    def set_received(self, received):
        self._received = received

    def get_received(self):
        return self._received

    def set_read(self, read):
        self._read= read

    def get_read(self):
        return self._read

    @staticmethod
    def from_dict(dictionary=dict()):
        """Umwandeln eines Python dict() in ein Rating()."""
        obj = ChatMessage()
        """print(dictionary)"""
        obj.set_id(dictionary["id"])  # eigentlich Teil von BusinessObject !
        obj.set_creation_time(dictionary["creation_time"])
        obj.set_text(dictionary["text"])
        obj.set_person_id(dictionary["person_id"])
        obj.set_received(dictionary["received"])
        obj.set_read(dictionary["read"])
        return obj






