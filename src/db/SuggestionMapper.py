from server.nbo.Suggestion import Suggestion
from server.db.DBMapper import Mapper

class SuggestionMapper (Mapper):
    """Mapper-Klasse, die Student-Objekte auf eine relationale
    Datenbank abbildet. Hierzu wird eine Reihe von Methoden zur Verfügung
    gestellt, mit deren Hilfe z.B. Objekte gesucht, erzeugt, modifiziert und
    gelöscht werden können.
    """
    def __init__(self):
        super().__init__()


    def find_all(self):
        """Auslesen aller Projekttypen.
        :return Eine Sammlung mit Projekttyp-Objekten, die sämtliche Projekt-Typen
        repräsentieren."""

        result = []
        cursor = self._cnx.cursor()
        cursor.execute("SELECT * from suggestion")
        tuples = cursor.fetchall()

        for (id, name, creation_date, sws, ects) in tuples:
            suggestion = Suggestion()
            suggestion.set_id(id)
            suggestion.set_name(name)
            suggestion.set_creation_date(creation_date)

            result.append(suggestion)

        self._cnx.commit()
        cursor.close()

        return result


    def find_by_key(self, key):
        """Auslesen aller Projekttypen anhand der ID,
        da diese vorgegeben ist, wird genau ein Objekt zurückgegeben.
        :param key Primärschlüsselattribut
        :return Projekttyp-Objekt, das dem übergebenen Schlüssel entspricht, None bei
        nicht vorhandenem DB-Tupel
        """

        result = None

        cursor = self._cnx.cursor()
        command = "SELECT * FROM suggestion WHERE id={}".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()

        if tuples[0] is not None:
            (id, name, creation_date, ects, sws) = tuples[0]
            suggestion = Suggestion()
            suggestion.set_id(id)
            suggestion.set_creation_date(creation_date)
            suggestion.set_name(name)
            suggestion.set_ects(ects)
            suggestion.set_sws(sws)

        result = suggestion

        self._cnx.commit()
        cursor.close()

        return result

    def insert(self, suggestion):
        """Einfügen eines Projekttyp-Objekts in die Datenbank.
        Dabei wird auch der Primärschlüssel des übergebenen Objekts geprüft und ggf.
        berichtigt.

        :param suggestion das zu speichernde Objekt
        :return das bereits übergebene Objekt, jedoch mit ggf. korrigierter ID.
        """
        cursor = self._cnx.cursor()
        cursor.execute("SELECT MAX(id) AS maxid FROM suggestion ")
        tuples = cursor.fetchall()

        for (maxid) in tuples:
            if maxid[0] is not None:
                """Wenn wir eine maximale ID festellen konnten, zählen wir diese
                um 1 hoch und weisen diesen Wert als ID dem User-Objekt zu."""
                suggestion.set_id(maxid[0]+1)
            else:
                """Wenn wir keine maximale ID feststellen konnten, dann gehen wir
                davon aus, dass die Tabelle leer ist und wir mit der ID 1 beginnen können."""
                suggestion.set_id(1)

        command = "INSERT INTO suggestion (id, name, creation_date, sws, ects) VALUES (%s,%s,%s,%s,%s)"
        data = (suggestion.get_id(), suggestion.get_name(), suggestion.get_creation_date(), suggestion.get_sws(), suggestion.get_ects())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()
        return suggestion

    def update(self, suggestion):
        """Wiederholtes Schreiben eines Objekts in die Datenbank.
        :param suggestion das Objekt, das in die DB geschrieben werden soll
        """
        cursor = self._cnx.cursor()

        command = "UPDATE suggestion " + "SET name=%s, sws=%s, ects=%s WHERE id=%s"
        data = (suggestion.get_name(), suggestion.get_sws(), suggestion.get_ects(), suggestion.get_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()


    def delete(self, suggestion):
        """Löschen der Daten eines Projekttyp-Objekts aus der Datenbank.
        :param suggestion das aus der DB zu löschende "Objekt"
        """
        cursor = self._cnx.cursor()

        command = "DELETE FROM suggestion WHERE id={}".format(suggestion.get_id())
        cursor.execute(command)

        self._cnx.commit()
        cursor.close()

    def find_by_name(self, name):
        """Auslesen aller Projekttypen anhand des Proojekttypnamens.

        :param name Name des zugehörigen Projekttyps.
        :return Projekttyp-Objekt, das dem übergebenen Namen entspricht, None bei
        nicht vorhandenem DB-Tupel
        """
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT id, name, creation_date, sws, ects FROM suggestion WHERE name LIKE '{}'".format(name)
        cursor.execute(command)
        tuples = cursor.fetchall()

        if tuples[0] is not None:
            (id, name, creation_date, sws, ects) = tuples[0]
            suggestion = Suggestion()
            suggestion.set_id(id)
            suggestion.set_creation_date(creation_date)
            suggestion.set_name(name)
            suggestion.set_ects(ects)
            suggestion.set_sws(sws)

        result = suggestion

        self._cnx.commit()
        cursor.close()

        return result

