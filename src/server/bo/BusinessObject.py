from abc import ABC
from datetime import datetime


class BusinessObject(ABC):

    """Oberklasse aller BusinessObject-Klassen in diesem Projekt .

    Jedes Objekt bestizt eine eindeutigte ID, welches als Primärschlüssel bei der relationen
    Datenbank dient
    """

    def __init__(self):
        self._id = 0
        self._creation_time = datetime.now()

    def get_id(self):
        """ID auslesen"""
        return self._id

    def set_id(self, value):
        """ID setzen"""
        self._id = value

    def get_creation_time(self):
        """Auslesen der des Erstellungsdatum"""
        return self._creation_time

    def set_creation_time(self, creation_time):
        """Setzen der des Erstellungsdatum"""
        self._creation_time = creation_time
