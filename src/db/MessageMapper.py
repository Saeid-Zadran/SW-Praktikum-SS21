from server.db.DBMapper import Mapper
from server.nbo.Message import Message


class MessageMapper(Mapper):
    """Mapper-Klasse, die message-Objekte auf eine relationale
    Datenbank abbildet. Hierzu wird eine Reihe von Methoden zur Verfügung
    gestellt, mit deren Hilfe z.B. Objekte gesucht, erzeugt, modifiziert und
    gelöscht werden können.
    """

    def __init__(self):
        super().__init__()

    def find_all(self):
        """Auslesen aller Studierenden.
        :return Eine Sammlung mit messageen-Objekten, die sämtliche messageen
        des Systems repräsentieren.
        """
        result = []
        cursor = self._cnx.cursor()
        cursor.execute("SELECT * from message")
        tuples = cursor.fetchall()

        for (id, degree_course, creation_date, matriculation_number, person_id) in tuples:
            message = Message()
            message.set_id(id)
            message.set_creation_date(creation_date)
            message.set_degree_course(degree_course)
            message.set_matriculation_number(matriculation_number)
            message.set_person_id(person_id)
            result.append(message)

        self._cnx.commit()
        cursor.close()

        return result


    def find_by_key(self, key):
        """Auslesen aller Studierenden anhand der message ID,
        da diese vorgegeben ist, wird genau ein Objekt zurückgegeben.
        :param key Primärschlüsselattribut
        :return message-Objekt, das dem übergebenen Schlüssel entspricht, None bei
        nicht vorhandenem DB-Tupel
        """
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT id, degree_course, creation_date, matriculation_number, person_id FROM message WHERE id={}".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()

        if tuples[0] is not None:
            (id, degree_course, creation_date, matriculation_number, person_id) = tuples[0]
            message = Message()
            message.set_id(id)
            message.set_
            message.set_
            message.set_
            message.set_person_id(person_id)

        result = message

        self._cnx.commit()
        cursor.close()

        return result

    def insert(self, message):
        """Einfügen eines message-Objekts in die Datenbank.
        Dabei wird auch der Primärschlüssel des übergebenen Objekts geprüft und ggf.
        berichtigt.

        :param message das zu speichernde Objekt
        :return das bereits übergebene Objekt, jedoch mit ggf. korrigierter ID.
        """

        cursor = self._cnx.cursor()
        cursor.execute("SELECT MAX(id) AS maxid FROM message ")
        tuples = cursor.fetchall()

        for (maxid) in tuples:
            if maxid[0] is not None:
                """Wenn wir eine maximale ID festellen konnten, zählen wir diese
                um 1 hoch und weisen diesen Wert als ID dem User-Objekt zu."""
                message.set_id(maxid[0] + 1)
            else:
                """Wenn wir keine maximale ID feststellen konnten, dann gehen wir
                davon aus, dass die Tabelle leer ist und wir mit der ID 1 beginnen können."""
                message.set_id(1)

        command = "INSERT INTO message (id, degree_course, creation_date, matriculation_number, person_id)" \
                  " VALUES (%s,%s,%s,%s,%s)"
        data = (message.get_id(), message.get_degree_course(), message.get_creation_date(),
                message.get_matriculation_number(), message.get_person_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()
        return message


    def update(self, message):
        """Wiederholtes Schreiben eines Objekts in die Datenbank.
        :param message das Objekt, das in die DB geschrieben werden soll
        """

        cursor = self._cnx.cursor()

        command = "UPDATE message " + "SET matriculation_number=%s, degree_course=%s WHERE id=%s"
        data = (message.get_matriculation_number(), message.get_degree_course(), message.get_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()

        return message

        """cursor = self._cnx.cursor()

        command = "UPDATE message " + "SET  google_user_id, degree_course=%s WHERE id=%s"
        data = (message.get_degree_course(), message.get_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()"""

    def delete(self, message):
        """Löschen der Daten eines message-Objekts aus der Datenbank.
        :param message das aus der DB zu löschende "Objekt"
        """

        cursor = self._cnx.cursor()
        command = "DELETE FROM message WHERE id={}".format(message.get_id()) #Primary
        cursor.execute(command)

        self._cnx.commit()

        cursor.close()

        return message






