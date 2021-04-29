from server.bo.Profile import Profile
from server.db.DBMapper import Mapper


class ProfileMapper (Mapper):
    """Mapper-Klasse, die Profil-Objekte auf eine relationale
    Datenbank abbildet. Hierzu wird eine Reihe von Methoden zur Verfügung
    gestellt, mit deren Hilfe z.B. Objekte gesucht, erzeugt, modifiziert und
    gelöscht werden können.
    """

    def __init__(self):
        super().__init__()

    def find_all(self):
        """Auslesen aller Profile.

        :return Eine Sammlung mit Profil-Objekten, die sämtliche Benotungen repräsentieren.
        """
        result = []
        cursor = self._cnx.cursor()
        cursor.execute("SELECT * from profile")
        tuples = cursor.fetchall()

        for (id, name, creation_date, person_id) in tuples:
            profile = Profile()
            profile.set_id(id)
            profile.set_creation_date(creation_date)
            profile.set_name(name)
            profile.set_person_id(person_id)
            result.append(profile)

        self._cnx.commit()
        cursor.close()

        return result

    def find_by_key(self, key):
        """Auslesen aller Benotungen anhand der ID,
        da diese vorgegeben ist, wird genau ein Objekt zurückgegeben.
        :param key Primärschlüsselattribut
        :return Profile-Objekt, das dem übergebenen Schlüssel entspricht, None bei
        nicht vorhandenem DB-Tupel
        """
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT id, creation_date, person_id FROM profile WHERE id={}".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()

        if tuples[0] is not None:
            (id, name, creation_date, person_id) = tuples[0]
            profile = Profile()
            profile.set_id(id)
            profile.set_creation_date(creation_date)
            profile.set_()
            profile.set_person_id(person_id)

        result = profile

        self._cnx.commit()
        cursor.close()

        return result

    def find_by_person_id(self, person_id):
        """Auslesen aller Module anhand des Namen.

        :param person_id Teilnahme-ID des zugehörigen profiles.
        :return profile-Objekt, das der übergebenen Teilnahme-ID entspricht, None bei
        nicht vorhandenem DB-Tupel
        """
        result = None
        cursor = self._cnx.cursor()
        command = "SELECT id, creation_date, , person_id FROM profile WHERE person_id={} ORDER BY id".format(person_id)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for (id, creation_date, person_id) in tuples:
            profile = profile()
            profile.set_id(id)
            profile.set_creation_date(creation_date)
            profile.set_()
            profile.set_person_id(person_id)

            result = profile

        self._cnx.commit()
        cursor.close()

        return result


    def insert(self, profile):
        """Einfügen eines profile-Objekts in die Datenbank.
        Dabei wird auch der Primärschlüssel des übergebenen Objekts geprüft und ggf.
        berichtigt.
        :param profile das zu speichernde Objekt
        :return das bereits übergebene Objekt, jedoch mit ggf. korrigierter ID.
        """
        cursor = self._cnx.cursor()
        cursor.execute("SELECT MAX(id) AS maxid FROM profile ")
        tuples = cursor.fetchall()

        for (maxid) in tuples:
            if maxid[0] is not None:
                """Wenn wir eine maximale ID festellen konnten, zählen wir diese
                um 1 hoch und weisen diesen Wert als ID dem User-Objekt zu."""
                profile.set_id(maxid[0] + 1)
            else:
                """Wenn wir keine maximale ID feststellen konnten, dann gehen wir
                davon aus, dass die Tabelle leer ist und wir mit der ID 1 beginnen können."""
                profile.set_id(1)

        command = "INSERT INTO profile (id, creation_date, name , person_id) VALUES (%s,%s,%s,%s)"
        data = (profile.get_id(), profile.get_creation_date(), profile.get_(), profile.get_person_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()
        return profile

    def update(self, profile):
        """Wiederholtes Schreiben eines Objekts in die Datenbank.
        :param profile das Objekt, das in die DB geschrieben werden soll
        """
        cursor = self._cnx.cursor()
        command = "UPDATE profile " + "SET =%s, person_id=%s WHERE id=%s"
        data = (profile.get_(), profile.get_person_id(), profile.get_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()

    def delete(self, profile):
        """Löschen der Daten eines Projekt-Objekts aus der Datenbank.
        :param profile das aus der DB zu löschende "Objekt"
        """
        cursor = self._cnx.cursor()

        command = "DELETE FROM profile WHERE id={}".format(profile.get_id())
        cursor.execute(command)

        self._cnx.commit()
        cursor.close()

if (__name__ == "__main__"):
    with ProfileMapper() as mapper:
        result = mapper.find_by_person_id('0')
        print(result)



