from server.bo.LearnProfile import LearnProfile
from server.db.DBMapper import Mapper

class LearnProfileMapper (Mapper):
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
        cursor.execute("SELECT id, creation_time, study_status,frequency, prev_knowledge, extroversion, profile_id FROM learnprofile")
        tuples = cursor.fetchall()

        for (id, creation_time, study_status, frequency, prev_knowledge, extroversion, profile_id) in tuples:
            learnprofile = LearnProfile()
            learnprofile.set_id(id)
            learnprofile.set_creation_time(creation_time)
            learnprofile.set_study_status(study_status)
            learnprofile.set_frequency(frequency)
            learnprofile.set_prev_knowledge(prev_knowledge)
            learnprofile.set_extroversion(extroversion)
            learnprofile.set_profile_id(profile_id)

            result.append(learnprofile)

        self._cnx.commit()
        cursor.close()

        return result


    def find_by_id(self, id):
        """Auslesen aller Projekte anhand der ID,
        da diese vorgegeben ist, wird genau ein Objekt zurückgegeben.
        :param key Primärschlüsselattribut
        :return Projekt-Objekt, das dem übergebenen Schlüssel entspricht, None bei
        nicht vorhandenem DB-Tupel
        """
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT * FROM learnprofile WHERE id={}".format(id)
        cursor.execute(command)
        tuples = cursor.fetchall()

        if tuples[0] is not None:
            (id,creation_time, study_status, frequency, prev_knowledge, extroversion, profile_id) = tuples[0]
            learnprofile = LearnProfile()
            learnprofile.set_id(id)
            learnprofile.set_creation_time(creation_time)
            learnprofile.set_study_status(study_status)
            learnprofile.set_frequency(frequency)
            learnprofile.set_prev_knowledge(prev_knowledge)
            learnprofile.set_extroversion(extroversion)
            learnprofile.set_profile_id(profile_id)




        result = learnprofile

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
        command = "SELECT * FROM learnprofile WHERE person_id={}".format(person_id)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for(id,creation_time, study_status, frequency,prev_knowledge, extroversion,profile_id) in tuples:
            learnprofile = LearnProfile()
            learnprofile.set_id(id)
            learnprofile.set_creation_time(creation_time)
            learnprofile.set_study_status(study_status)
            learnprofile.set_frequency(frequency)
            learnprofile.set_prev_knowledge(prev_knowledge)
            learnprofile.set_extroversion(extroversion)
            learnprofile.set_profile_id(profile_id)

            result.append(learnprofile)



        self._cnx.commit()
        cursor.close()

        return result


    def insert(self, learnprofile):
        """Einfügen eines Projekt-Objekts in die Datenbank.
        Dabei wird auch der Primärschlüssel des übergebenen Objekts geprüft und ggf.
        berichtigt.
        :param learnprofile das zu speichernde Objekt
        :return das bereits übergebene Objekt, jedoch mit ggf. korrigierter ID.
        """
        cursor = self._cnx.cursor()
        cursor.execute("SELECT MAX(id) AS maxid FROM learnprofile ")
        tuples = cursor.fetchall()

        for (maxid) in tuples:
            if maxid[0] is not None:
                """Wenn wir eine maximale ID festellen konnten, zählen wir diese
                um 1 hoch und weisen diesen Wert als ID dem User-Objekt zu."""
                learnprofile.set_id(maxid[0] + 1)
            else:
                """Wenn wir keine maximale ID feststellen konnten, dann gehen wir
                davon aus, dass die Tabelle leer ist und wir mit der ID 1 beginnen können."""
                learnprofile.set_id(1)

        command = "INSERT INTO learnprofile (id,creation_time, study_status, frequency, prev_knowledge,extroversion,profile_id) " \
                  "VALUES (%s,%s,%s,%s,%s,%s,%s)"
        data = (learnprofile.get_id(),learnprofile.get_creation_time(), learnprofile.get_study_status(), learnprofile.get_frequency(),
                learnprofile.get_prev_knowledge(),learnprofile.get_extroversion(),learnprofile.get_profile_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()
        return learnprofile


    def update(self, learnprofile):
        """Wiederholtes Schreiben eines Objekts in die Datenbank.
        :param learnprofile das Objekt, das in die DB geschrieben werden soll
        """
        cursor = self._cnx.cursor()

        command = "UPDATE learnprofile " + "SET creation_time= %s, study_status=%s, frequency=%s, prev_knowledge=%s WHERE id=%s"
        data = (learnprofile.get_id(), learnprofile.get_creation_time(), learnprofile.get_study_status, learnprofile.get_frequency,
                learnprofile.get_prev_knowledge)
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()




    def delete(self, learnprofile):
        """Löschen der Daten eines Projekt-Objekts aus der Datenbank.
        :param learnprofile das aus der DB zu löschende "Objekt"
        """
        cursor = self._cnx.cursor()

        command = "DELETE FROM learnprofile WHERE id={}".format(learnprofile.get_id())
        cursor.execute(command)

        self._cnx.commit()
        cursor.close()

        return learnprofile

    def find_by_name(self, name):
        """Auslesen aller Projekte anhand des Projektnamens.

        :param name Name des zugehörigen Projekts.
        :return Projekt-Objekt, das dem übergebenen Namen entspricht, None bei
        nicht vorhandenem DB-Tupel
        """
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT * FROM learnprofile WHERE name LIKE '{}'".format(name)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for (id,creation_time, study_status, frequency, profile_id, name, prev_knowledge) in tuples:
            learnprofile = LearnProfile()
            learnprofile.set_id(id)
            learnprofile.set_creation_time(creation_time)
            learnprofile.set_study_status(study_status)
            learnprofile.set_frequency(frequency)
            learnprofile.set_profile_id(profile_id)
            learnprofile.set_name(name)
            learnprofile.set_prev_knowledge(prev_knowledge)

            result.append(learnprofile)

        self._cnx.commit()
        cursor.close()

        return result


  



