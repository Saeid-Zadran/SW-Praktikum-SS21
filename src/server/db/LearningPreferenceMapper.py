from server.nbo.LearningPreferences import LearningPreferences
from server.db.DBMapper import Mapper

class LearningPreferencesMapper (Mapper):
    """Mapper-Klasse, die Student-Objekte auf eine relationale
    Datenbank abbildet. Hierzu wird eine Reihe von Methoden zur Verfügung
    gestellt, mit deren Hilfe z.B. Objekte gesucht, erzeugt, modifiziert und
    gelöscht werden können.
    """

    def __init__(self):
        super().__init__()

    def find_all(self):
        """Auslesen aller Projekte.
        :return Eine Sammlung mit Projekt-Objekten, die sämtliche Projekte
        repräsentieren."""

        result = []
        cursor = self._cnx.cursor()
        cursor.execute("SELECT * from learning_preferences")
        tuples = cursor.fetchall()

        for (id, weekly_flag, name, ) in tuples:
            learning_preferences = LearningPreferences()
            learning_preferences.set_id(id)

            learning_preferences.set_()

            result.append(learning_preferences)

        self._cnx.commit()
        cursor.close()

        return result


    def find_by_key(self, key):
        """Auslesen aller Projekte anhand der ID,
        da diese vorgegeben ist, wird genau ein Objekt zurückgegeben.
        :param key Primärschlüsselattribut
        :return Projekt-Objekt, das dem übergebenen Schlüssel entspricht, None bei
        nicht vorhandenem DB-Tupel
        """
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT * FROM learning_preferences WHERE id={}".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()

        if tuples[0] is not None:
            (id, weekly_flag, name,  ) = tuples[0]
            learning_preferences = LearningPreferences()
            learning_preferences.set_id(id)
            learning_preferences.set_weekly_flag(weekly_flag)
            learning_preferences.set_name(name)

            learning_preferences.set_()

        result = learning_preferences

        self._cnx.commit()
        cursor.close()

        return result


    def find_by_person_id(self, person_id):
        """Auslesen aller Projekte anhand der Person_ID.
        :param person_id Person_ID der zugehörigen Projekte.
        :return eine Sammlung mit Projekt-Objekten, die sämtliche Projekte
        des Systems repräsentiert
        """
        result = []

        cursor = self._cnx.cursor()
        command = "SELECT * FROM learning_preferences WHERE person_id={}".format(person_id)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for(id, weekly_flag, name ) in tuples:
            learning_preferences = LearningPreferences()
            learning_preferences.set_id(id)
            learning_preferences.set_weekly_flag(weekly_flag)
            learning_preferences.set_name(name)
            learning_preferences.set_creation_date(creation_date)

            learning_preferences.set_()

            result.append(learning_preferences)

        self._cnx.commit()
        cursor.close()

        return result


    def insert(self, learning_preferences):
        """Einfügen eines Projekt-Objekts in die Datenbank.
        Dabei wird auch der Primärschlüssel des übergebenen Objekts geprüft und ggf.
        berichtigt.
        :param learning_preferences das zu speichernde Objekt
        :return das bereits übergebene Objekt, jedoch mit ggf. korrigierter ID.
        """
        cursor = self._cnx.cursor()
        cursor.execute("SELECT MAX(id) AS maxid FROM learning_preferences ")
        tuples = cursor.fetchall()

        for (maxid) in tuples:
            if maxid[0] is not None:
                """Wenn wir eine maximale ID festellen konnten, zählen wir diese
                um 1 hoch und weisen diesen Wert als ID dem User-Objekt zu."""
                learning_preferences.set_id(maxid[0] + 1)
            else:
                """Wenn wir keine maximale ID feststellen konnten, dann gehen wir
                davon aus, dass die Tabelle leer ist und wir mit der ID 1 beginnen können."""
                learning_preferences.set_id(1)

        command = "INSERT INTO learning_preferences (id, weekly_flag, name, creation_date " \
                  "VALUES (%s,%s,%s,%s)"
        data = (learning_preferences.get_id(), learning_preferences.get_weekly_flag(), learning_preferences.get_name(), learning_preferences.get_creation_date())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()
        return learning_preferences


    def update(self, learning_preferences):
        """Wiederholtes Schreiben eines Objekts in die Datenbank.
        :param learning_preferences das Objekt, das in die DB geschrieben werden soll
        """
        cursor = self._cnx.cursor()

        command = "UPDATE learning_preferences " + "SET weekly_flag=%s, name=%s WHERE id=%s"
        data = (learning_preferences.get_weekly_flag(), learning_preferences.get_name(),
                learning_preferences.get_prefered_block_days(),learning_preferences.get_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()




    def delete(self, learning_preferences):
        """Löschen der Daten eines Projekt-Objekts aus der Datenbank.
        :param learning_preferences das aus der DB zu löschende "Objekt"
        """
        cursor = self._cnx.cursor()

        command = "DELETE FROM learning_preferences WHERE id={}".format(learning_preferences.get_id())
        cursor.execute(command)

        self._cnx.commit()
        cursor.close()

        return learning_preferences

    def find_by_name(self, name):
        """Auslesen aller Projekte anhand des Projektnamens.

        :param name Name des zugehörigen Projekts.
        :return Projekt-Objekt, das dem übergebenen Namen entspricht, None bei
        nicht vorhandenem DB-Tupel
        """
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT id, weekly_flag, name, creation_date FROM learning_preferences WHERE name LIKE '{}'".format(
            name)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for (id, weekly_flag, name, creation_date ) in tuples:
            learning_preferences = LearningPreferences()
            learning_preferences.set_id(id)
            learning_preferences.set_weekly_flag(weekly_flag)
            learning_preferences.set_name(name)
            learning_preferences.set_creation_date(creation_date)

        result = learning_preferences

        self._cnx.commit()
        cursor.close()

        return result


  



