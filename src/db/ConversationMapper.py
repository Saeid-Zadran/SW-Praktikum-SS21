from server.nbo.Conversation import Conversation
from server.db.DBMapper import Mapper


class ConversationMapper(Mapper):
    """Mapper-Klasse, die Konversation-Objekte auf eine relationale
    Datenbank abbildet. Hierzu wird eine Reihe von Methoden zur Verfügung
    gestellt, mit deren Hilfe z.B. Objekte gesucht, erzeugt, modifiziert und
    gelöscht werden können.
    """

    def __init__(self):
        super().__init__()

    def find_all(self):
        """Auslesen aller Conversation.

        :return Eine Sammlung mit Modul-Objekten, die sämtliche Conversation repräsentieren.
        """
        result = []
        cursor = self._cnx.cursor()
        cursor.execute("SELECT * from conversation")
        tuples = cursor.fetchall()

        for (id, name, creation_date, edv_number) in tuples:
            conversation = Conversation()
            conversation.set_id(id)
            conversation.set_name(name)
            conversation.set_creation_date(creation_date)
            conversation.set_edv_number(edv_number)
            result.append(conversation)

        self._cnx.commit()
        cursor.close()

        return result

    def find_by_key(self, key):
        """Auslesen aller conversation anhand der ID,
        da diese vorgegeben ist, wird genau ein Objekt zurückgegeben.
        :param key Primärschlüsselattribut
        :return Modul-Objekt, das dem übergebenen Schlüssel entspricht, None bei
        nicht vorhandenem DB-Tupel
        """
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT * FROM conversation WHERE id={}".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()

        if tuples[0] is not None:
            (id, name, creation_date, edv_number) = tuples[0]
            conversation = Conversation()
            conversation.set_id(id)
            conversation.set_name(name)
            conversation.set_creation_date(creation_date)
            conversation.set_edv_number(edv_number)

        result = conversation

        self._cnx.commit()
        cursor.close()

        return result

    def insert(self, conversation):
        """Einfügen eines Person-Objekts in die Datenbank.
        Dabei wird auch der Primärschlüssel des übergebenen Objekts geprüft und ggf.
        berichtigt.
        :param conversation das zu speichernde Objekt
        :return das bereits übergebene Objekt, jedoch mit ggf. korrigierter ID.
        """
        cursor = self._cnx.cursor()
        cursor.execute("SELECT MAX(id) AS maxid FROM conversation ")
        tuples = cursor.fetchall()

        for (maxid) in tuples:
            if maxid[0] is not None:
                """Wenn wir eine maximale ID festellen konnten, zählen wir diese
                um 1 hoch und weisen diesen Wert als ID dem User-Objekt zu."""
                conversation.set_id(maxid[0] + 1)
            else:
                """Wenn wir keine maximale ID feststellen konnten, dann gehen wir
                davon aus, dass die Tabelle leer ist und wir mit der ID 1 beginnen können."""
                conversation.set_id(1)


        command = "INSERT INTO conversation (id, creation_date, name, edv_number) VALUES (%s,%s,%s,%s)"
        data = (conversation.get_id(), conversation.get_creation_date(), conversation.get_name(), conversation.get_edv_number())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()

        return conversation

    def update(self, conversation):
        """Wiederholtes Schreiben eines Objekts in die Datenbank.
        :param conversation das Objekt, das in die DB geschrieben werden soll
        """
        cursor = self._cnx.cursor()

        command = "UPDATE conversation " + "SET name=%s, edv_number=%s WHERE id=%s"
        data = (conversation.get_name(), conversation.get_edv_number(), conversation.get_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()

    def delete(self, conversation):
        """Löschen der Daten eines Projekt-Objekts aus der Datenbank.
        :param conversation das aus der DB zu löschende "Objekt"
        """
        cursor = self._cnx.cursor()

        command = "DELETE FROM conversation WHERE id={}".format(conversation.get_id())
        cursor.execute(command)

        self._cnx.commit()
        cursor.close()

        return conversation

    def find_by_name(self, name):
        """Auslesen aller conversation anhand des Namen.

        :param name Name des zugehörigen Modul.
        :return Modul-Objekt, das dem übergebenen Namen entspricht, None bei
        nicht vorhandenem DB-Tupel
        """
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT id, creation_date, name, edv_number FROM conversation WHERE name LIKE '{}'".format(name)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for (id, creation_date, name, edv_number) in tuples:
            conversation = Conversation()
            conversation.set_id(id)
            conversation.set_creation_date(creation_date)
            conversation.set_name(name)
            conversation.set_edv_number(edv_number)

        result = conversation

        self._cnx.commit()
        cursor.close()

        return result

    def find_by_edv_number(self, edv_number):
        """Auslesen aller conversation anhand der EDV-Nummer.

        :param edv_number EDV-Nummer des zugehörigen Modul.
        :return Modul-Objekt, das der übergebenen EDV-Nummer entspricht, None bei
        nicht vorhandenem DB-Tupel
        """
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT id, creation_date, name, edv_number FROM conversation WHERE edv_number LIKE '{}'".format(edv_number)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for (id, creation_date, name, edv_number) in tuples:
            conversation = Conversation()
            conversation.set_id(id)
            conversation.set_creation_date(creation_date)
            conversation.set_name(name)
            conversation.set_edv_number(edv_number)

        result = conversation


        self._cnx.commit()
        cursor.close()

        return result
