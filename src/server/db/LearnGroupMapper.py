from server.bo.LearnGroup import LearnGroup
from server.db.DBMapper import Mapper
from server.bo.LearnProfile import LearnProfile

class LearnGroupMapper (Mapper):
    """Mapper-Klasse, die Student-Objekte auf eine relationale
    Datenbank abbildet. Hierzu wird eine Reihe von Methoden zur Verfügung
    gestellt, mit deren Hilfe z.B. Objekte gesucht, erzeugt, modifiziert und
    gelöscht werden können.
    """

    def __init__(self):
        super().__init__()

    def find_all(self):
        """Auslesen aller Rollen.
        :return Eine Sammlung mit Rollen-Objekten, die sämtliche Rollen
        des Systems repräsentieren.
        """
        result = []
        cursor = self._cnx.cursor()
        cursor.execute("SELECT * from learngroup")
        tuples = cursor.fetchall()

        for (id, creation_time, name, person_id) in tuples:
            learngroup = LearnGroup()
            learngroup.set_id(id)
            learngroup.set_creation_time(creation_time)
            learngroup.set_name(name)
            learngroup.set_person_id(person_id)
         
            result.append(learngroup)

        self._cnx.commit()
        cursor.close()

        return result

    def find_by_key(self, key):
        """Auslesen aller Rollen anhand der ID,
        da diese vorgegeben ist, wird genau ein Objekt zurückgegeben.
        :param key Primäschlüsselattribut
        :return Rollen-Objekt, das dem übergebenen Schlüssel entspricht, None bei
        nicht vorhandenem DB-Tupel
        """
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT id, creation_time, name, person_id FROM learngroup WHERE id={}".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()

        if tuples[0] is not None:
            (id, creation_time, name, person_id) = tuples[0]
            learngroup = LearnGroup()
            learngroup.set_id(id)
            learngroup.set_creation_time(creation_time)
            learngroup.set_name(name)
            learngroup.set_person_id(person_id)

        result = learngroup

        self._cnx.commit()
        cursor.close()

        return result

    def find_by_name(self, name):
        """Auslesen aller Semester anhand des Semesternamens.

        :param name Name der zugehörigen Rolle.
        :return Rollen-Objekt, das dem übergebenen Namen entspricht, None bei
        nicht vorhandenem DB-Tupel
        """

        result = None

        cursor = self._cnx.cursor()
        command = "SELECT id, creation_time, name FROM learngroup WHERE name LIKE '{}'".format(name)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for (id, creation_time, name,person_id) in tuples:
            learngroup = LearnGroup()
            learngroup.set_id(id)
            learngroup.set_creation_time(creation_time)
            learngroup.set_name(name)
            learngroup.set_person_id(person_id)

        result = learngroup

        self._cnx.commit()
        cursor.close()

        return result

    def insert(self, learngroup):
        """Einfügen eines learngroup-Objekts in die Datenbank.
        Dabei wird auch der Primärschlüssel des übergebenen Objekts geprüft und ggf.
        berichtigt.
        :param learngroup das zu speichernde Objekt
        :return das bereits übergebene Objekt, jedoch mit ggf. korrigierter ID.
        """
        cursor = self._cnx.cursor()
        cursor.execute("SELECT MAX(id) AS maxid FROM learngroup ")
        tuples = cursor.fetchall()

        for (maxid) in tuples:
            if maxid[0] is not None:
                """Wenn wir eine maximale ID festellen konnten, zählen wir diese
                um 1 hoch und weisen diesen Wert als ID dem User-Objekt zu."""
                learngroup.set_id(maxid[0] + 1)
            else:
                """Wenn wir keine maximale ID feststellen konnten, dann gehen wir
                davon aus, dass die Tabelle leer ist und wir mit der ID 1 beginnen können."""
                learngroup.set_id(1)

        command = "INSERT INTO learngroup (id, creation_time,name,person_id) VALUES " \
                  "(%s,%s,%s,%s)"
        data = (learngroup.get_id(),learngroup.get_creation_time(),learngroup.get_name(),learngroup.get_person_id())

        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()
        return learngroup

    def update(self, learngroup):
        """Wiederholtes Schreiben eines Objekts in die Datenbank.
        :param learngroup das Objekt, das in die DB geschrieben werden soll
        """

        cursor = self._cnx.cursor()

        command = ("UPDATE learngroup SET creation_time=%s,name=%s, person_id=%s WHERE id=%s")
        data = (learngroup.get_creation_time(),learngroup.get_name(),learngroup.get_person_id())
             

        cursor.execute(command, data)
        cursor.close()

    def delete(self, learngroup):
        """Löschen des Objekts in der Datenbank
        :param learngroup das zu löschende "Objekt"
        """

        cursor = self._cnx.cursor()

        command = ("DELETE FROM learngroup WHERE id={}".format(learngroup.get_id()))
        cursor.execute(command)

        self._cnx.commit()
        cursor.close()

    def find_by_person(self, person_id):
        result = []

        cursor = self._cnx.cursor()
        command = " SELECT id, creation_time,name,person_id FROM learngroup WHERE person_id ={} ORDER BY id".format(person_id)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for (id, creation_time, name, person_id) in tuples:
            learngroup = LearnGroup()
            learngroup.set_id(id)
            learngroup.set_creation_time(creation_time)
            learngroup.set_name(name)
            learngroup.set_person_id(person_id)
            result.append(learngroup)
        
        self._cnx.commit()
        cursor.close()

        return result

    def remove_member(self, id, person_id):
        ''' Eine Person aus einer Gruppe entfernen '''

        cursor = self._cnx.cursor()
        command = "DELETE FROM learngroup WHERE id=%s AND person_id=%s"
        data = (id, person_id)
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()

    def check_group(self, id):
        ''' Check, ob eine Gruppe noch Mitglieder hat '''

        cursor = self._cnx.cursor()
        command = "SELECT * FROM learngroup WHERE id={}".format(id)
        cursor.execute(command)
        tuples = cursor.fetchall()

        self._cnx.commit()
        cursor.close()

        if len(tuples) > 0:
            return True
        else:
            return False

    def get_matches_learngroup(self, person_id, learnprofile_list, learngroup_list):
        CurrentProfile = person_id
        LearnProfileList = learnprofile_list
        LearnGroupList = learngroup_list

        learngroup_dict = {}
        result =  {}

        compareProfile = LearnProfile()
        for learnprofile in LearnProfileList:
            if(learnprofile.get_person_id() == CurrentProfile):
                compareProfile = learnprofile
        for learngroup in LearnGroupList:
            learngroup_dict[learngroup.get_id()] = learngroup.get_person_id()
        for learnprofile in LearnProfileList:
            if learnprofile.get_person_id() != compareProfile.get_person_id():
                value = 0
                total = 5
                if learnprofile.get_study_status() == compareProfile.get_study_status():
                    value += 1
                if learnprofile.get_frequency() == compareProfile.get_frequency():
                    value += 1
                if learnprofile.get_prev_knowledge() == compareProfile.get_prev_knowledge():
                    value += 1
                if learnprofile.get_group_size() == compareProfile.get_group_size():
                    value += 1
                if learnprofile.get_extroversion() == compareProfile.get_extroversion():
                    value += 1
                else:
                    value += 0
                value = value/total
                value = value * 100
                result[learnprofile.get_person_id()] = value
            else:
                value = 0

        
        #print(result, learngroup_dict)
        #for learnGroup in learngroup_dict:
        #    print(learnGroup, learngroup_dict[learnGroup])
        #    learnProfile = learngroup_dict[learnGroup]
        #    matchingResult = result[learnProfile]
        #    learngroup_dict[learnGroup] = matchingResult
        #print(learngroup_dict)
        final_result  ={}
        for learnGroup in learngroup_dict:
            learnprofile = learngroup_dict[learnGroup]
            if learnprofile in result:
                learngroup_dict[learnGroup] = result[learnprofile]
                final_result[learnGroup] = result[learnprofile]
            else:
                learngroup_dict[learnGroup] = None
        print(final_result)
        return  final_result


        # #mapper.find_by_group_name("profile")
        # print(mapper)
