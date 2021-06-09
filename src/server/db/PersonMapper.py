from os import name
from server.bo.Person import Person
from server.db.DBMapper import Mapper


class PersonMapper(Mapper):

    def __init__(self):
        super().__init__()

    def find_all(self):
        """Auslesen aller Personen.
        :return Eine Sammlung mit Personen-Objekten, die sämtliche Personen repräsentieren."""

        result = []
        cursor = self._cnx.cursor()
        cursor.execute("SELECT id, creation_time,name, google_user_id, google_mail  from person")
        tuples = cursor.fetchall()

        for (id, creation_time, name, google_user_id, google_mail) in tuples:
            person = Person()
            person.set_id(id)
            person.set_creation_time(creation_time)
            person.set_name(name)
            person.set_google_user_id(google_user_id)
            person.set_google_mail(google_mail)
         
            result.append(person)

        self._cnx.commit()
        cursor.close()

        return result

    def find_by_key(self, key):

        result = None

        cursor = self._cnx.cursor()
        command = "SELECT id, creation_time, name, google_user_id, google_mail  FROM person WHERE id={}".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()

        if tuples[0] is not None:
            (id, creation_time, name, google_user_id, google_mail) = tuples[0]
            person = Person()
            person.set_id(id)
            person.set_name(name)
            person.set_creation_time(creation_time)
            person.set_google_mail(google_mail)
            person.set_google_user_id(google_user_id)

        result = person

        self._cnx.commit()
        cursor.close()

        return result

    def insert(self, person):
        cursor = self._cnx.cursor()
        cursor.execute("SELECT MAX(id) AS maxid FROM person")
        tuples = cursor.fetchall()

        for (maxid) in tuples:
            if maxid[0] is not None:
                """Wenn wir eine maximale ID festellen konnten, zählen wir diese
                um 1 hoch und weisen diesen Wert als ID dem User-Objekt zu."""
                person.set_id(maxid[0] + 1)
            else:
                """Wenn wir keine maximale ID feststellen konnten, dann gehen wir
                davon aus, dass die Tabelle leer ist und wir mit der ID 1 beginnen können."""
                person.set_id(1)

        command = "INSERT INTO person (id, creation_time, name, google_user_id, google_mail) VALUES (%s,%s,%s,%s,%s)"
        data = (person.get_id(), person.get_creation_time(),person.get_name(), person.get_google_user_id(),
                person.get_google_mail())

        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()

        return person

    def update(self, person):
        cursor = self._cnx.cursor()

        command = "UPDATE person " + "SET google_mail = %s, google_user_id=%s WHERE id=%s"
        data = (person.get_google_mail(),
                person.get_google_user_id(), person.get_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()

    def delete(self, person):
        cursor = self._cnx.cursor()
        command = "DELETE FROM person WHERE id={}".format(person.get_id())
        cursor.execute(command)

        self._cnx.commit()
        cursor.close()

        return person

    def find_by_google_user_id(self, google_user_id):
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT id, creation_time, name, google_user_id, google_mail FROM person WHERE google_user_id LIKE '{}'".format(google_user_id)
        cursor.execute(command)
        tuples = cursor.fetchall()

        try:
            (id, creation_time,name, google_user_id, google_mail) = tuples[0]
            person = Person()
            person.set_id(id)
            person.set_name(name)
            person.set_creation_time(creation_time)
            person.set_google_mail(google_mail)
            person.set_google_user_id(google_user_id)
            result = person
            

        except IndexError:
            """Der IndexError wird oben beim Zugriff auf tuples[0] auftreten, wenn der vorherige SELECT-Aufruf
            keine Tupel liefert, sondern tuples = cursor.fetchall() eine leere Sequenz zurück gibt."""
            result = None

        self._cnx.commit()
        cursor.close()

        return result


    def update_google_user(self, person):

        cursor = self._cnx.cursor()

        command = "UPDATE person SET  name=%s, google_user_id=%s, google_mail=%s WHERE id=%s"
        data = (person.get_name(), person.get_google_mail(), person.get_google_user_id(), person.get_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()

    def find_by_email(self, email):
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT id, creation_time, first_name, last_name, google_user_id, google_mail FROM person WHERE google_mail LIKE '{}'".format(email)
        cursor.execute(command)
        tuples = cursor.fetchall()

        try:
            (id, creation_time, first_name, last_name, google_user_id, google_mail) = tuples[0]
            person = Person()
            person.set_id(id)
            person.set_first_name(first_name)
            person.set_last_name(last_name)
            person.set_creation_time(creation_time)
            person.set_google_mail(google_mail)
            person.set_google_user_id(google_user_id)
            result = person


        except IndexError:
            """Der IndexError wird oben beim Zugriff auf tuples[0] auftreten, wenn der vorherige SELECT-Aufruf
            keine Tupel liefert, sondern tuples = cursor.fetchall() eine leere Sequenz zurück gibt."""
            result = None

        self._cnx.commit()
        cursor.close()

        return result




if (__name__ == "__main__"):
    with PersonMapper() as mapper:
        result = mapper.insert( 0)
        for p in result:
            print(p)






