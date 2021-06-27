from server.db.DBMapper import Mapper
from server.bo.GroupRequest import GroupRequest


class GroupRequestMapper(Mapper):

    def __init__(self):
        super().__init__()


    def find_all(self):
        """Auslesen aller GroupRequest.
        :return Eine Sammlung mit GroupRequest-Objekten, die sämtliche GroupRequest
        des Systems repräsentieren.
        """
        result = []
        cursor = self._cnx.cursor()
        cursor.execute("SELECT * from grouprequest")
        tuples = cursor.fetchall()

        for (id, creation_time,is_accepted,learngroup_id, person_id) in tuples:
            grouprequest = GroupRequest()
            grouprequest.set_id(id)
            grouprequest.set_creation_time(creation_time)
            grouprequest.set_is_accepted(is_accepted)
            grouprequest.set_learngroup_id(learngroup_id)
            grouprequest.set_person_id(person_id)

            result.append(grouprequest)
             
           
        self._cnx.commit()
        cursor.close()

        return result   
        
            

           

        

    def find_by_key(self, key):
        """Auslesen aller GroupRequest anhand der ID,
        da diese vorgegeben ist, wird genau ein Objekt zurückgegeben.
        :param key Primäschlüsselattribut
        :return GroupRequest-Objekt, das dem übergebenen Schlüssel entspricht, None bei
        nicht vorhandenem DB-Tupel
        """
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT id, creation_time,is_accepted,learngroup_id, person_id FROM grouprequest WHERE id={}".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()

        if tuples[0] is not None:
            (id, creation_time,is_accepted,learngroup_id, person_id) = tuples[0]
            grouprequest = GroupRequest()
            grouprequest.set_id(id)
            grouprequest.set_creation_time(creation_time)
            grouprequest.set_is_accepted(is_accepted)
            grouprequest.set_learngroup_id(learngroup_id)
            grouprequest.set_person_id(person_id)
           
            

        result = grouprequest

        self._cnx.commit()
        cursor.close()

        return result


    def find_by_name(self, name):
        """Auslesen aller Semester anhand des Semesternamens.

        :param name Name der zugehörigen Rolle.
        :return GroupRequest-Objekt, das dem übergebenen Namen entspricht, None bei
        nicht vorhandenem DB-Tupel
        """

        result = None

        cursor = self._cnx.cursor()
        command = "SELECT id, creation_time,is_accepted,learngroup_id, person_id FROM grouprequest WHERE name LIKE '{}'".format(name)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for (id, creation_time,is_accepted,learngroup_id, person_id) in tuples:
            grouprequest = GroupRequest()
            grouprequest.set_id(id)
            grouprequest.set_creation_time(creation_time)
            grouprequest.set_is_accepted(is_accepted)
            grouprequest.set_learngroup_id(learngroup_id)
            grouprequest.set_person_id(person_id)
 
           

        result = grouprequest

        self._cnx.commit()
        cursor.close()

        return result


    def insert(self, grouprequest):
        """Einfügen eines profile-Objekts in die Datenbank.
        Dabei wird auch der Primärschlüssel des übergebenen Objekts geprüft und ggf.
        berichtigt.
        :param profile das zu speichernde Objekt
        :return das bereits übergebene Objekt, jedoch mit ggf. korrigierter ID.
        """
        cursor = self._cnx.cursor()
        cursor.execute("SELECT MAX(id) AS maxid FROM grouprequest ")
        tuples = cursor.fetchall()

        for (maxid) in tuples:
            if maxid[0] is not None:
                """Wenn wir eine maximale ID festellen konnten, zählen wir diese
                um 1 hoch und weisen diesen Wert als ID dem id-Objekt zu."""
                grouprequest.set_id(maxid[0] + 1)
            else:
                """Wenn wir keine maximale ID feststellen konnten, dann gehen wir
                davon aus, dass die Tabelle leer ist und wir mit der ID 1 beginnen können."""
                grouprequest.set_id(1)

        command = "INSERT INTO grouprequest (id, creation_time,is_accepted,learngroup_id, person_id) VALUES " \
                  "(%s,%s,%s,%s,%s)"
        data = (grouprequest.get_id(),grouprequest.get_creation_time(),grouprequest.get_is_accepted(),grouprequest.get_learngroup_id(),grouprequest.get_person_id())

        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()
        return grouprequest

    def update(self, grouprequest):
        """Wiederholtes Schreiben eines Objekts in die Datenbank.
        :param grouprequest das Objekt, das in die DB geschrieben werden soll
        """

        cursor = self._cnx.cursor()

        command = ("UPDATE grouprequest SET creation_time=%s, is_accepted=%s, learngroup_id=%s,person_id=%s  WHERE id=%s")
        data = (grouprequest.get_creation_time(),grouprequest.get_is_accepted(),
                grouprequest.get_learngroup_id(),grouprequest.get_person_id(),grouprequest.get_id())

        cursor.execute(command, data)
        cursor.close()


    def delete(self, grouprequest):
        """Löschen des Objekts in der Datenbank
        :param grouprequest das zu löschende "Objekt"
        """

        cursor = self._cnx.cursor()

        command = ("DELETE FROM grouprequest WHERE id={}".format(grouprequest.get_id()))
        cursor.execute(command)

        self._cnx.commit()
        cursor.close()
    
    def find_all_grouprequests_by_learngroup_id(self, learngroup_id):#funktioniert-auf alle anderen adaptieren!

        result = []

        cursor = self._cnx.cursor()
        command = "SELECT id, creation_time,is_accepted,learngroup_id, person_id FROM grouprequest WHERE learngroup_id LIKE '{}'".format(learngroup_id)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for (id, creation_time,is_accepted,learngroup_id, person_id) in tuples:
            grouprequest = GroupRequest()
            grouprequest.set_id(id)
            grouprequest.set_creation_time(creation_time)
            grouprequest.set_is_accepted(is_accepted)
            grouprequest.set_learngroup_id(learngroup_id)
            grouprequest.set_person_id(person_id)

         
            result.append(grouprequest)


        self._cnx.commit()
        cursor.close()

        return result

      
    
    def find_all_grouprequests_person_id(self,person_id):#funktioniert-auf alle anderen adaptieren!

        result = []

        cursor = self._cnx.cursor()
        command = "SELECT * FROM grouprequest WHERE person_id LIKE '{}'".format(person_id)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for (id, creation_time,is_accepted,learngroup_id, person_id) in tuples:
            grouprequest = GroupRequest()
            grouprequest.set_id(id)
            grouprequest.set_creation_time(creation_time)
            grouprequest.set_is_accepted(is_accepted)
            grouprequest.set_learngroup_id(learngroup_id)
            grouprequest.set_person_id(person_id)

         
            result.append(grouprequest)


        self._cnx.commit()
        cursor.close()

        return result

    def find_all_group_grouprequests_is_accepted(self, is_accepted):#funktioniert-auf alle anderen adaptieren!

        result = []

        cursor = self._cnx.cursor()
        command = "SELECT id, creation_time,is_accepted,learngroup_id, person_id FROM grouprequest WHERE learngroup_id LIKE '{}'".format(is_accepted)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for (id, creation_time,is_accepted,learngroup_id, person_id) in tuples:
            grouprequest = GroupRequest()
            grouprequest.set_id(id)
            grouprequest.set_creation_time(creation_time)
            grouprequest.set_is_accepted(is_accepted)
            grouprequest.set_learngroup_id(learngroup_id)
            grouprequest.set_person_id(person_id)

         
            result.append(grouprequest)


        self._cnx.commit()
        cursor.close()

        return result

if (__name__ == "__main__"):
    with GroupInvitationMapper() as mapper:
        #Nach mapper jegliche Methode dieser Klasse

        invi = GroupInvitation()
        invi.set_id(1)
        invi.set_is_accepted(0)
        invi.set_source_id(1)
        invi.set_target_id(3)
        invi.set_grouprequest_id(3)
        mapper.insert(invi)

