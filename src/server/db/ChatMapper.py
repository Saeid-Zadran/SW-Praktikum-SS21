from server.bo.Chat import Chat
from server.db.DBMapper import Mapper


class ChatMapper(Mapper):
    """Mapper-Klasse, die Konversation-Objekte auf eine relationale
    Datenbank abbildet. Hierzu wird eine Reihe von Methoden zur Verfügung
    gestellt, mit deren Hilfe z.B. Objekte gesucht, erzeugt, modifiziert und
    gelöscht werden können.
    """

    def __init__(self):
        super().__init__()

    def find_all(self):
        """Auslesen aller Chat.

        :return Eine Sammlung mit Modul-Objekten, die sämtliche Chat repräsentieren.
        """
        result = []
        cursor = self._cnx.cursor()
        cursor.execute("SELECT * from chat")
        tuples = cursor.fetchall()

        for (id, creation_time,learngroup_id, is_accepted,sender, message, ) in tuples:
            chat = Chat()
            chat.set_id(id)
            chat.set_creation_time(creation_time)
            chat.set_learngroup_id(learngroup_id)
            chat.set_is_accepted(is_accepted)
            chat.set_sender(sender)
            chat.set_message(message)
            result.append(chat)
           

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
        result = []

        cursor = self._cnx.cursor()
        command = "SELECT * FROM chat WHERE learngroup_id={}".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()
        for (id, creation_time,learngroup_id, is_accepted,sender, message, ) in tuples:
            chat = Chat()
            chat.set_id(id)
            chat.set_creation_time(creation_time)
            chat.set_learngroup_id(learngroup_id)
            chat.set_is_accepted(is_accepted)
            chat.set_sender(sender)
            chat.set_message(message)
            result.append(chat)
    
        self._cnx.commit()
        cursor.close()
        return result

    def insert(self, chat):
        """Einfügen eines Chat-Objekts in die Datenbank.
        Dabei wird auch der Primärschlüssel des übergebenen Objekts geprüft und ggf.
        berichtigt.
        :param chat das zu speichernde Objekt
        :return das bereits übergebene Objekt, jedoch mit ggf. korrigierter ID.
        """
        cursor = self._cnx.cursor()
        cursor.execute("SELECT MAX(id) AS maxid FROM chat ")
        tuples = cursor.fetchall()

        for (maxid) in tuples:
            if maxid[0] is not None:
                """Wenn wir eine maximale ID festellen konnten, zählen wir diese
                um 1 hoch und weisen diesen Wert als ID dem User-Objekt zu."""
                chat.set_id(maxid[0] + 1)
            else:
                """Wenn wir keine maximale ID feststellen konnten, dann gehen wir
                davon aus, dass die Tabelle leer ist und wir mit der ID 1 beginnen können."""
                chat.set_id(1)


        command = "INSERT INTO chat (id, creation_time, learngroup_id, is_accepted, sender, message) VALUES (%s,%s,%s,%s,%s,%s)"
        data = (chat.get_id(), chat.get_creation_time(),chat.get_learngroup_id(),chat.get_is_accepted(),  chat.get_sender(),chat.get_message())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()

        return chat

    def update(self, chat):
        """Wiederholtes Schreiben eines Objekts in die Datenbank.
        :param chat das Objekt, das in die DB geschrieben werden soll
        """
        cursor = self._cnx.cursor()

        command = "UPDATE chat SET learngroup_id=%s,is_accepted=%s, sender=%s, message=%s  WHERE id=%s"
        data = (chat.get_learngroup_id(),chat.get_is_accepted(),chat.get_sender(),chat.get_message(), chat.get_id())

        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()

    def delete(self, chat):
        """Löschen der Daten eines Projekt-Objekts aus der Datenbank.
        :param chat das aus der DB zu löschende "Objekt"
        """
        cursor = self._cnx.cursor()

        command = "DELETE FROM chat WHERE id={}".format(chat.get_id())
        cursor.execute(command)

        self._cnx.commit()
        cursor.close()

        return chat
    
    def find_by_learngroup(self, learngroup_id):
        result = []

        cursor = self._cnx.cursor()
        command = " SELECT id, creation_time,  learngroup_id, is_accepted,sender, message FROM chat WHERE learngroup_id ={} ORDER BY id".format(learngroup_id)
        cursor.execute(command)
        tuples = cursor.fetchall()

       
        for (id, creation_time,  learngroup_id, is_accepted,sender, message) in tuples:
            chat = Chat()
            chat.set_id(id)
            chat.set_creation_time(creation_time)
            chat.set_learngroup_id(learngroup_id)
            chat.set_is_accepted(is_accepted)
            chat.set_sender(sender)
            chat.set_message(message)
            result.append(chat)

           
            

        self._cnx.commit()
        cursor.close()

        return result



