from server.db.DBMapper import Mapper
from server.bo.ChatRequest import ChatRequest


class ChatRequestMapper(Mapper):
    """Mapper-Klasse, die message-Objekte auf eine relationale
    Datenbank abbildet. Hierzu wird eine Reihe von Methoden zur Verfügung
    gestellt, mit deren Hilfe z.B. Objekte gesucht, erzeugt, modifiziert und
    gelöscht werden können.
    """

    def __init__(self):
        super().__init__()

    def find_all(self):
        """Auslesen aller Studierenden.
        :return Eine Sammlung mit Chat Message-Objekten, die sämtliche messageen
        des Systems repräsentieren.
        """
        result = []
        cursor = self._cnx.cursor()
        cursor.execute("SELECT * from chat_request")
        tuples = cursor.fetchall()

        for (id, creation_time, chat_id, source_id, target_id, is_accepted) in tuples:
            chat_request = ChatRequest()
            chat_request.set_id(id)
            chat_request.set_creation_time(creation_time)
            chat_request.set_chat_id(chat_id)
            chat_request.set_source_id(source_id)
            chat_request.set_target_id(target_id)
            chat_request.set_is_accepted(is_accepted)
            result.append(chat_request)

        self._cnx.commit()
        cursor.close()

        return result


    def find_by_key(self, key):
        """Auslesen aller Studierenden anhand der message ID,
        da diese vorgegeben ist, wird genau ein Objekt zurückgegeben.
        :param key Primärschlüsselattribut
        :return chat_request-Objekt, das dem übergebenen Schlüssel entspricht, None bei
        nicht vorhandenem DB-Tupel
        """
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT * FROM chat_request WHERE id={}".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()

        if tuples[0] is not None:
            (id, creation_time, chat_id, source_id, target_id, is_accepted)  = tuples[0]
            chat_request = ChatRequest()
            chat_request.set_id(id)
            chat_request.set_creation_time(creation_time)
            chat_request.set_chat_id(chat_id)
            chat_request.set_source_id(source_id)
            chat_request.set_target_id(target_id)
            chat_request.set_is_accepted(is_accepted)
            result.append(chat_request)

        result = chat_request

        self._cnx.commit()
        cursor.close()

        return result

    def insert(self, chat_request):
        """Einfügen eines chat_request-Objekts in die Datenbank.
        Dabei wird auch der Primärschlüssel des übergebenen Objekts geprüft und ggf.
        berichtigt.

        :param chat_request das zu speichernde Objekt
        :return das bereits übergebene Objekt, jedoch mit ggf. korrigierter ID.
        """

        cursor = self._cnx.cursor()
        cursor.execute("SELECT MAX(id) AS maxid FROM chat_request ")
        tuples = cursor.fetchall()

        for (maxid) in tuples:
            if maxid[0] is not None:
                """Wenn wir eine maximale ID festellen konnten, zählen wir diese
                um 1 hoch und weisen diesen Wert als ID dem User-Objekt zu."""
                chat_request.set_id(maxid[0] + 1)
            else:
                """Wenn wir keine maximale ID feststellen konnten, dann gehen wir
                davon aus, dass die Tabelle leer ist und wir mit der ID 1 beginnen können."""
                chat_request.set_id(1)

        command = "INSERT INTO chat_request (id, creation_time, chat_id, source_id, target_id, is_accepted)" \
                  " VALUES (%s,%s,%s,%s,%s,%s)"
        data = (chat_request.get_id(), chat_request.get_creation_time(), chat_request.get_chat_id(), chat_request.get_source_id(),
                chat_request.get_target_id(), chat_request.get_is_accepted())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()
        return chat_request


    def update(self, chat_request):
        """Wiederholtes Schreiben eines Objekts in die Datenbank.
        :param chat_request das Objekt, das in die DB geschrieben werden soll
        """

        cursor = self._cnx.cursor()

        command = "UPDATE chat_request " + "SET is_accepted=%s WHERE id=%s"
        data = (chat_request.get_id(), chat_request.get_is_accepted())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()

        return chat_request



    def delete(self, chat_request):
        """Löschen der Daten eines message-Objekts aus der Datenbank.
        :param chat_request das aus der DB zu löschende "Objekt"
        """

        cursor = self._cnx.cursor()
        command = "DELETE FROM chat_request WHERE id={}".format(chat_request.get_id()) #Primary
        cursor.execute(command)

        self._cnx.commit()

        cursor.close()

        return chat_request






