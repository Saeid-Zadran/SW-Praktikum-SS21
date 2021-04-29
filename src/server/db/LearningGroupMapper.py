from server.nbo.LearningGroup import LearningGroup
from server.db.DBMapper import Mapper

class LearningGroup (Mapper):
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
        cursor.execute("SELECT * from learning_group")
        tuples = cursor.fetchall()

        for (id, creation_date, name) in tuples:
            learning_group = LearningGroup()
            learning_group.set_id(id)
            learning_group.set_creation_date(creation_date)
            learning_group.set_name(name)
            result.append(learning_group)

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
        command = "SELECT id, creation_date, name FROM learning_group WHERE id={}".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()

        if tuples[0] is not None:
            (id, creation_date,name) = tuples[0]
            learning_group = LearningGroup()
            learning_group.set_id(id)
            learning_group.set_creation_date(creation_date)
            learning_group.set_name(name)

        result = learning_group

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
        command = "SELECT id, creation_date, name FROM learning_group WHERE name LIKE '{}'".format(name)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for (id, creation_date, name) in tuples:
            learning_group = LearningGroup()
            learning_group.set_id(id)
            learning_group.set_creation_date(creation_date)
            learning_group.set_name(name)

        result = learning_group

        self._cnx.commit()
        cursor.close()

        return result


    def insert(self, learning_group):
        """Anlegen einer Rolle"""
        pass


    def update(self, learning_group):
        """Wiederholtes Schreiben eines Objekts in die Datenbank.
        :param learning_group das Objekt, das in die DB geschrieben werden soll
        """

        cursor = self._cnx.cursor()

        command = ("UPDATE learning_group" + "SET name=%s WHERE id=%s")
        data = (learning_group.get_id(),
                learning_group.get_name())
        cursor.execute(command, data)
        cursor.close()


    def delete(self, learning_group):
        """Löschen des Objekts in der Datenbank
        :param learning_group das zu löschende "Objekt"
        """

        cursor = self._cnx.cursor()

        command = ("DELETE FROM learning_group WHERE id={}".format(learning_group.get_id()))
        cursor.execute(command)

        self._cnx.commit()
        cursor.close()
