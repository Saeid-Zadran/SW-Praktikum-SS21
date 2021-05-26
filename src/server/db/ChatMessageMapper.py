from server.db.DBMapper import Mapper
from server.bo.ChatMessage import ChatMessage


class ChatMessageMapper(Mapper):
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
        cursor.execute("SELECT * from chatmessage")
        tuples = cursor.fetchall()

        for (id, creation_time, text, person_id, received, read) in tuples:
            chatmessage = ChatMessage()
            chatmessage.set_id(id)
            chatmessage.set_creation_time(creation_time)
            chatmessage.set_text(text)
            chatmessage.set_person_id(person_id)
            chatmessage.set_received(received)
            chatmessage.set_read(read)

            result.append(chatmessage)

        self._cnx.commit()
        cursor.close()

        return result


    def find_by_key(self, key):
        """Auslesen aller Studierenden anhand der message ID,
        da diese vorgegeben ist, wird genau ein Objekt zurückgegeben.
        :param key Primärschlüsselattribut
        :return chatmessage-Objekt, das dem übergebenen Schlüssel entspricht, None bei
        nicht vorhandenem DB-Tupel
        """
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT * FROM chatmessage WHERE id={}".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()

        if tuples[0] is not None:
            (id, creation_time, text, person_id, received, read) = tuples[0]
            chatmessage = ChatMessage()
            chatmessage.set_id(id)
            chatmessage.set_creation_time(creation_time)
            chatmessage.set_text(text)
            chatmessage.set_person_id(person_id)
            chatmessage.set_received(received)
            chatmessage.set_read(read)

        result = chatmessage

        self._cnx.commit()
        cursor.close()

        return result

    def insert(self, chatmessage):
        """Einfügen eines chatmessage-Objekts in die Datenbank.
        Dabei wird auch der Primärschlüssel des übergebenen Objekts geprüft und ggf.
        berichtigt.

        :param chatmessage das zu speichernde Objekt
        :return das bereits übergebene Objekt, jedoch mit ggf. korrigierter ID.
        """

        cursor = self._cnx.cursor()
        cursor.execute("SELECT MAX (id) AS maxid FROM chatmessage")
        tuples = cursor.fetchall()

        for (maxid) in tuples:
            if maxid[0] is not None:
                """Wenn wir eine maximale ID festellen konnten, zählen wir diese
                um 1 hoch und weisen diesen Wert als ID dem User-Objekt zu."""
                chatmessage.set_id(maxid[0] + 1)
            else:
                """Wenn wir keine maximale ID feststellen konnten, dann gehen wir
                davon aus, dass die Tabelle leer ist und wir mit der ID 1 beginnen können."""
                chatmessage.set_id(1)

        command = "INSERT INTO chatmessage (id, creation_time, text, person_id, received, read)" \
                  " VALUES (%s,%s,%s,%s,%s,%s)"
        data = (chatmessage.get_id(), chatmessage.get_text(), chatmessage.get_person_id,
                chatmessage.get_received(), chatmessage.get_read())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()
        return chatmessage


    def update(self, chatmessage):
        """Wiederholtes Schreiben eines Objekts in die Datenbank.
        :param chatmessage das Objekt, das in die DB geschrieben werden soll
        """

        cursor = self._cnx.cursor()

        command = "UPDATE chatmessage " + "SET text=%s, person_id=%s WHERE id=%s"
        data = (chatmessage.get_text(), chatmessage.get_id(), chatmessage.get_person_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()

        return chatmessage



    def delete(self, chatmessage):
        """Löschen der Daten eines message-Objekts aus der Datenbank.
        :param chatmessage das aus der DB zu löschende "Objekt"
        """

        cursor = self._cnx.cursor()
        command = "DELETE FROM chatmessage WHERE id={}".format(chatmessage.get_id()) #Primary
        cursor.execute(command)

        self._cnx.commit()

        cursor.close()

        return chatmessage






