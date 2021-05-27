from server.bo.Person import Person
from server.db.DBMapper import Mapper


class PersonMapper (Mapper):

    def __init__(self):
        super().__init__()

    def find_all(self):
        """Auslesen aller Personen.
        :return Eine Sammlung mit Personen-Objekten, die sämtliche Personen repräsentieren."""

        result = []
        cursor = self._cnx.cursor()
        cursor.execute("SELECT * from person")
        tuples = cursor.fetchall()

        for (id, creation_time, google_mail, google_user_id) in tuples:
            person = Person()
            person.set_id(id)
            person.set_creation_time(creation_time)
            person.set_google_mail(google_mail)
            person.set_google_user_id(google_user_id)
            result.append(person)

        self._cnx.commit()
        cursor.close()

        return result

    def find_by_key(self, key):
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT * FROM person WHERE id={}".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()

        if tuples[0] is not None:
            (id, creation_time, google_mail, google_user_id) = tuples[0]
            person = Person()
            person.set_id(id)
            person.set_creation_time(creation_time)
            person.set_google_mail(google_mail)
            person.set_google_user_id(google_user_id)

        result = person

        self._cnx.commit()
        cursor.close()

        return result

    def insert(self, person):
        cursor = self._cnx.cursor()
        cursor.execute("SELECT MAX(id) AS maxid FROM person ")
        tuples = cursor.fetchall()

        for (maxid) in tuples:
            if maxid[0] is not None:
                person.set_id(maxid[0] + 1)
            else:
                person.set_id(1)


        command = "INSERT INTO person (id, creation_time, google_mail, google_user_id) " \
                  "VALUES (%s,%s,%s,%s)"
        data = (person.get_id(), person.get_creation_time(), person.get_google_mail(), person.get_google_user_id())


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
        command = "SELECT * WHERE google_user_id LIKE '{}'".format(google_user_id)
        cursor.execute(command)
        tuples = cursor.fetchall()

        try:
            (id, creation_time, google_mail, google_user_id) = tuples[0]
            person = Person()
            person.set_id(id)
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

        command = "UPDATE person SET name=%s, email=%s, google_user_id=%s WHERE id=%s"
        data = (person.get_name(), person.get_email(), person.get_google_user_id(), person.get_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()






"""if (__name__ == "__main__"):
    with PersonMapper() as mapper:
        result = mapper.find_all()
        for p in result:
            print(p)"""






