from os import name
from server.bo.Profile import Profile
from server.db.DBMapper import Mapper


class ProfileMapper(Mapper):
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

        for (id, creation_time, name, age, adress, semester, degree_course, person_id) in tuples:
            profile = Profile()
            profile.set_id(id)
            profile.set_creation_time(creation_time)
            profile.set_name(name)
            profile.set_age(age)
            profile.set_adress(adress)
            profile.set_semester(semester)
            profile.set_degree_course(degree_course)
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
        command = "SELECT id,creation_time, age, adress, semester, degree_course, person_id FROM profile WHERE id={}".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()

        if tuples[0] is not None:
            (id,creation_time, age, adress, semester, degree_course, person_id) = tuples[0]
            profile = Profile()
            profile.set_id(id)
            profile.set_creation_time(creation_time)
            profile.set_age(age)
            profile.set_adress(adress)
            profile.set_semester(semester)
            profile.set_degree_course(degree_course)
            profile.set_person_id(person_id)

        result = profile

        self._cnx.commit()
        cursor.close()

        return result

    def find_by_person_id(self, person_id):
        result = []

        cursor = self._cnx.cursor()
        command = " SELECT id, creation_time, name, age, adress, semester, degree_course, person_id FROM profile WHERE person_id LIKE '{}'".format(person_id)
        cursor.execute(command)
        tuples = cursor.fetchall()

        try:
            (id, creation_time, name, age, adress, semester, degree_course, person_id) = tuples[0]
            profile = Profile()
            profile.set_id(id)
            profile.set_creation_time(creation_time)
            profile.set_name(name)
            profile.set_age(age)
            profile.set_adress(adress)
            profile.set_semester(semester)
            profile.set_degree_course(degree_course)
            profile.set_person_id(person_id)

            result.append(profile)
            

        except IndexError:
            """Der IndexError wird oben beim Zugriff auf tuples[0] auftreten, wenn der vorherige SELECT-Aufruf
            keine Tupel liefert, sondern tuples = cursor.fetchall() eine leere Sequenz zurück gibt."""
            result = None

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

        command = "INSERT INTO profile (id, creation_time,name, age,adress, semester, degree_course, person_id) VALUES (%s,%s,%s,%s,%s,%s,%s,%s)"
        data = (profile.get_id(), profile.get_creation_time(),profile.get_name(),profile.get_age(), profile.get_adress(), profile.get_semester(),
               profile.get_degree_course(),profile.get_person_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()
        return profile

    def update(self, profile):
        """Wiederholtes Schreiben eines Objekts in die Datenbank.
        :param profile das Objekt, das in die DB geschrieben werden soll
        """
        cursor = self._cnx.cursor()
        command = "UPDATE profile  SET creation_time=%s, age=%s, adress=%s, semester=%s, degree_course=%s,person_id=%s  WHERE id=%s"
        data = (profile.get_creation_time(),profile.get_age(),profile.get_adress(),profile.get_semester(), profile.get_degree_course(),profile.get_person_id(),profile.get_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()

    def delete(self, profile):
        """Löschen der Daten eines Projekt-Objekts aus der Datenbank.
        :param profile das aus der DB zu löschende "Objekt"
        """
        cursor = self._cnx.cursor()
        try:
            command = "DELETE chat  FROM chat INNER JOIN learngroup ON chat.learngroup_id=learngroup.id  WHERE learngroup.person_id ={}".format(profile)
            cursor.execute(command)
            tuples = cursor.fetchall()
            for chat in tuples:
                print(chat)
        finally:
            print("nothing to delete")

    

        try:
            command = "DELETE grouprequest  FROM grouprequest  INNER JOIN learngroup ON grouprequest.learngroup_id=learngroup.id  WHERE learngroup.person_id ={}".format(profile)
        finally:
            print("no groups to be deleted")
        cursor.execute(command)


        command = "DELETE FROM learngroup WHERE person_id={}".format(profile)
        cursor.execute(command)


        command = "DELETE FROM learnprofile WHERE person_id={}".format(profile)
        cursor.execute(command)

  
        command = "DELETE FROM profile WHERE id={}".format(profile)
        cursor.execute(command) 

        self._cnx.commit()
        cursor.close()

if (__name__ == "__main__"):
    with ProfileMapper() as mapper:
        result = mapper.find_all()
        print(result)



