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
        cursor.execute("SELECT * from chat_message")
        tuples = cursor.fetchall()

        for (id, creation_time, text, person_id, sent, read) in tuples:
            chat_message = ChatMessage()
            chat_message.set_id(id)
            chat_message.set_creation_time(creation_time)
            chat_message.set_text(text)
            chat_message.set_person_id(person_id)
            chat_message.set_sent(sent)
            chat_message.set_read(read)

            result.append(chat_message)

        self._cnx.commit()
        cursor.close()

        return result


    def find_by_key(self, key):
        """Auslesen aller Studierenden anhand der message ID,
        da diese vorgegeben ist, wird genau ein Objekt zurückgegeben.
        :param key Primärschlüsselattribut
        :return chat_message-Objekt, das dem übergebenen Schlüssel entspricht, None bei
        nicht vorhandenem DB-Tupel
        """
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT * FROM chat_message WHERE id={}".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()

        if tuples[0] is not None:
            (id, creation_time, text, person_id, sent, read)  = tuples[0]
            chat_message = ChatMessage()
            chat_message.set_id(id)
            chat_message.set_creation_time(creation_time)
            chat_message.set_text(text)
            chat_message.set_person_id(person_id)
            chat_message.set_sent(sent)
            chat_message.set_read(read)

        result = chat_message

        self._cnx.commit()
        cursor.close()

        return result

    def insert(self, chat_message):
        """Einfügen eines chat_message-Objekts in die Datenbank.
        Dabei wird auch der Primärschlüssel des übergebenen Objekts geprüft und ggf.
        berichtigt.

        :param chat_message das zu speichernde Objekt
        :return das bereits übergebene Objekt, jedoch mit ggf. korrigierter ID.
        """

        cursor = self._cnx.cursor()
        cursor.execute("SELECT MAX(id) AS maxid FROM chat_message ")
        tuples = cursor.fetchall()

        for (maxid) in tuples:
            if maxid[0] is not None:
                """Wenn wir eine maximale ID festellen konnten, zählen wir diese
                um 1 hoch und weisen diesen Wert als ID dem User-Objekt zu."""
                chat_message.set_id(maxid[0] + 1)
            else:
                """Wenn wir keine maximale ID feststellen konnten, dann gehen wir
                davon aus, dass die Tabelle leer ist und wir mit der ID 1 beginnen können."""
                chat_message.set_id(1)

        command = "INSERT INTO chat_message (id, creation_time, text, person_id, sent, read)" \
                  " VALUES (%s,%s,%s,%s,%s,%s)"
        data = (chat_message.get_id(), chat_message.get_text(), chat_message.get_person_id,
                chat_message.get_sent(), chat_message.get_read())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()
        return chat_message


    def update(self, chat_message):
        """Wiederholtes Schreiben eines Objekts in die Datenbank.
        :param chat_message das Objekt, das in die DB geschrieben werden soll
        """

        cursor = self._cnx.cursor()

        command = "UPDATE chat_message " + "SET text=%s, person_id=%s WHERE id=%s"
        data = (chat_message.get_text(), chat_message.get_id(), chat_message.get_person_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()

        return chat_message



    def delete(self, chat_message):
        """Löschen der Daten eines message-Objekts aus der Datenbank.
        :param chat_message das aus der DB zu löschende "Objekt"
        """

        cursor = self._cnx.cursor()
        command = "DELETE FROM chat_message WHERE id={}".format(chat_message.get_id()) #Primary
        cursor.execute(command)

        self._cnx.commit()

        cursor.close()

        return chat_message






