from server.bo.LearnGroup import LearnGroup
from server.db.DBMapper import Mapper

class LearnGroupMapper (Mapper):
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

        for (id, creation_time, name, person_id) in tuples:
            learngroup = LearnGroup()
            learngroup.set_id(id)
            learngroup.set_creation_time(creation_time)
            learngroup.set_name(name)
            learngroup.set_person_id(person_id)
         
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
        command = "SELECT * FROM learngroup WHERE id={}".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()

        if tuples[0] is not None:
            (id, creation_time, name, person_id) = tuples[0]
            learngroup = LearnGroup()
            learngroup.set_id(id)
            learngroup.set_creation_time(creation_time)
            learngroup.set_name(name)
            learngroup.set_person_id(person_id)

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
        command = "SELECT id, creation_time, name FROM learngroup WHERE name LIKE '{}'".format(name)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for (id, creation_time, name,person_id) in tuples:
            learngroup = LearnGroup()
            learngroup.set_id(id)
            learngroup.set_creation_time(creation_time)
            learngroup.set_name(name)
            learngroup.set_person_id(person_id)
          

        result = learngroup

        self._cnx.commit()
        cursor.close()

        return result


    def insert(self, learngroup):
        """Einfügen eines profile-Objekts in die Datenbank.
        Dabei wird auch der Primärschlüssel des übergebenen Objekts geprüft und ggf.
        berichtigt.
        :param profile das zu speichernde Objekt
        :return das bereits übergebene Objekt, jedoch mit ggf. korrigierter ID.
        """
        cursor = self._cnx.cursor()
        cursor.execute("SELECT MAX(id) AS maxid FROM learngroup ")
        tuples = cursor.fetchall()

        for (maxid) in tuples:
            if maxid[0] is not None:
                """Wenn wir eine maximale ID festellen konnten, zählen wir diese
                um 1 hoch und weisen diesen Wert als ID dem User-Objekt zu."""
                learngroup.set_id(maxid[0] + 1)
            else:
                """Wenn wir keine maximale ID feststellen konnten, dann gehen wir
                davon aus, dass die Tabelle leer ist und wir mit der ID 1 beginnen können."""
                learngroup.set_id(1)

        command = "INSERT INTO learngroup (id, creation_time,name,person_id) VALUES " \
                  "(%s,%s,%s,%s)"
        data = (learngroup.get_id(),learngroup.get_creation_time(),learngroup.get_name(),learngroup.get_person_id())
            

        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()
        return learngroup

    def update(self, learngroup):
        """Wiederholtes Schreiben eines Objekts in die Datenbank.
        :param learngroup das Objekt, das in die DB geschrieben werden soll
        """

        cursor = self._cnx.cursor()

        command = ("UPDATE learngroup SET creation_time=%s,name=%s, person_id=%s WHERE id=%s")
        data = (learngroup.get_creation_time(),learngroup.get_name(),learngroup.get_person_id())
             

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


    def find_by_person(self, person_id):
        result = []

        cursor = self._cnx.cursor()
        command = " SELECT id, creation_time,name,person_id FROM learngroup WHERE person_id LIKE '{}'".format(person_id)
        cursor.execute(command)
        tuples = cursor.fetchall()

        try:
            (id, creation_time,name,person_id) = tuples[0]
            learngroup = LearnGroup()
            learngroup.set_id(id)
            learngroup.set_creation_time(creation_time)
            learngroup.set_name(name)
            learngroup.set_person_id(person_id)

            result.append(learngroup)
            

        except IndexError:
            """Der IndexError wird oben beim Zugriff auf tuples[0] auftreten, wenn der vorherige SELECT-Aufruf
            keine Tupel liefert, sondern tuples = cursor.fetchall() eine leere Sequenz zurück gibt."""
            result = None

        self._cnx.commit()
        cursor.close()

        return result


        #mapper.find_by_group_name("profile")
        print(mapper)
