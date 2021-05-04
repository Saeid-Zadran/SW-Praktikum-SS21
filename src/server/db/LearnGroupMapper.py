from server.bo.LearnGroup import LearnGroup
from server.db.DBMapper import Mapper

class LearnGroup (Mapper):
    """Mapper-Klasse, die Student-Objekte auf eine relationale
    Datenbank abbildet. Hierzu wird eine Reihe von Methoden zur Verfügung
    gestellt, mit deren Hilfe z.B. Objekte gesucht, erzeugt, modifiziert und
    gelöscht werden können.
    """

    def __init__(self):
        super().__init__()

    def find_all(self):
        """Auslesen aller Rollen.
        :return Eine Sammlung mit Rollen-Objekten, die sämtliche Rollen
        des Systems repräsentieren.
        """
        result = []
        cursor = self._cnx.cursor()
        cursor.execute("SELECT * from learngroup")
        tuples = cursor.fetchall()

        for (id, creation_date, name) in tuples:
            learngroup = LearnGroup()
            learngroup.set_id(id)
            learngroup.set_creation_date(creation_date)
            learngroup.set_name(name)
            result.append(learngroup)

        self._cnx.commit()
        cursor.close()

        return result

    def find_by_key(self, key):
        """Auslesen aller Rollen anhand der ID,
        da diese vorgegeben ist, wird genau ein Objekt zurückgegeben.
        :param key Primäschlüsselattribut
        :return Rollen-Objekt, das dem übergebenen Schlüssel entspricht, None bei
        nicht vorhandenem DB-Tupel
        """
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT id, creation_date, name FROM learngroup WHERE id={}".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()

        if tuples[0] is not None:
            (id, creation_date,name) = tuples[0]
            learngroup = LearnGroup()
            learngroup.set_id(id)
            learngroup.set_creation_date(creation_date)
            learngroup.set_name(name)

        result = learngroup

        self._cnx.commit()
        cursor.close()

        return result


    def find_by_name(self, name):
        """Auslesen aller Semester anhand des Semesternamens.

        :param name Name der zugehörigen Rolle.
        :return Rollen-Objekt, das dem übergebenen Namen entspricht, None bei
        nicht vorhandenem DB-Tupel
        """

        result = None

        cursor = self._cnx.cursor()
        command = "SELECT id, creation_date, name FROM learngroup WHERE name LIKE '{}'".format(name)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for (id, creation_date, name) in tuples:
            learngroup = LearnGroup()
            learngroup.set_id(id)
            learngroup.set_creation_date(creation_date)
            learngroup.set_name(name)

        result = learngroup

        self._cnx.commit()
        cursor.close()

        return result


    def insert(self, learngroup):
        """Anlegen einer Rolle"""
        pass


    def update(self, learngroup):
        """Wiederholtes Schreiben eines Objekts in die Datenbank.
        :param learngroup das Objekt, das in die DB geschrieben werden soll
        """

        cursor = self._cnx.cursor()

        command = ("UPDATE learngroup" + "SET name=%s WHERE id=%s")
        data = (learngroup.get_id(),
                learngroup.get_name())
        cursor.execute(command, data)
        cursor.close()


    def delete(self, learngroup):
        """Löschen des Objekts in der Datenbank
        :param learngroup das zu löschende "Objekt"
        """

        cursor = self._cnx.cursor()

        command = ("DELETE FROM learngroup WHERE id={}".format(learngroup.get_id()))
        cursor.execute(command)

        self._cnx.commit()
        cursor.close()
