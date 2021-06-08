from server.bo.NamedBusinessObject import NamedBusinessObject as nbo


class Person(nbo):

    def __init__(self):
        super().__init__()
        self._name = ""
        self._google_mail = ""
        self._google_user_id = ""

    def set_name(self, name):
        self._name = name

    def get_name(self):
        return self._name



    def set_google_mail(self, google_mail):
        self._google_mail = google_mail

    def get_google_mail(self):
        return self._google_mail

    def set_google_user_id(self, google_user_id):
        self._google_user_id = google_user_id

    def get_google_user_id(self):
        return self._google_user_id


    @staticmethod
    def from_dict(dictionary=dict()):
        """Umwandeln eines Python dict() in ein Rating()."""
        obj = Person()
        obj.set_id(dictionary["id"])  # eigentlich Teil von BusinessObject !
        obj.set_name(dictionary["name"])
        obj.set_google_user_id(dictionary["google_user_id"])
        obj.set_google_mail(dictionary["google_mail"])

        return obj