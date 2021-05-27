from abc import ABC

from server.bo.BusinessObject import BusinessObject as bo

""" in dieser Klasse werden alle BusinessObject die einen Namen besitzen mit dem Attribut name ergänzt"""


class NamedBusinessObject(bo, ABC):

    def __init__(self):
        super().__init__()
        self._name = ""  # Name der Instanz dieser Klasse

    def get_name(self):
        """Setzen des Namens"""
        return self._name

    def set_name(self, name):
        """Auslesen des Namens"""
        self._name = name

    # def __str__(self):
    #     """Erzeugen einer einfachen textuellen Darstellung der jeweiligen Instanz"""
    #     return self._name
