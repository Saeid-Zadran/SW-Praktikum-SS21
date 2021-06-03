from server.bo.BusinessObject import BusinessObject as bo


class Person(bo):

    def __init__(self):
        super().__init__()
        self._first_name = ""
        self._last_name = ""
        self._google_mail = ""
        self._google_user_id = ""

    def set_first_name(self, first_name):
        self._first_name = first_name

    def get_first_name(self):
        return self._first_name

    def set_last_name(self, last_name):
        self._last_name = last_name

    def get_last_name(self):
        return self._last_name

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
        obj.set_first_name(dictionary["first_name"])
        obj.set_last_name(dictionary["last_name"])
        obj.set_google_user_id(dictionary["google_user_id"])
        obj.set_google_mail(dictionary["google_mail"])

        return obj