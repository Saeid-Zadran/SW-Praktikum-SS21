'''Unser Service basiert auf Flask'''
from flask import Flask
'''Auf Flask aufbauend nutzen wir RestX'''
from flask_restx import Api, Resource, fields
'''Wir benutzen noch eine Flask-Erweiterung für Cross-Origin Resource Sharing'''
from flask_cors import CORS
'''Wir greifen natürlich auf unsere Applikationslogik inkl. BusinessObject-Klassen zurück'''

from server.Administration import Administration
from server.bo.Chat import Chat
from server.bo.ChatMessage import ChatMessage
from server.bo.LearnGroup import LearnGroup
from server.bo.LearnProfile import LearnProfile
from server.bo.Person import Person
from server.bo.Profile import Profile
from server.bo.Suggestion import Suggestion

'''Außerdem nutzen wir einen selbstgeschriebenen Decorator, der die Authentifikation übernimmt'''
"""from SecurityDecorator import secured"""

"""Hier wird Flask instanziert"""
app = Flask(__name__)

"""Flask-Erweiterung für Cross-Origin Resource Sharing"""
CORS(app, resources=r'/app/*')

api = Api(app, version='1.0', title='Studymatch api', #Name?
          description='Eine rudimentäre Demo-API für Listenerstellung.')

"""Namespaces"""
studymatch = api.namespace('app', description="Funktionen der App") #Name der App?

"""Nachfolgend werden analog zu unseren BusinessObject-Klassen transferierbare Strukturen angelegt.

BusinessObject dient als Basisklasse."""

bo = api.model('BusinessObjects', {
    'id': fields.Integer(attribute='_id',description='Der Unique Identifier eines Business Object'),
    'creation_date': fields.DateTime(attribute='_creation_date',description='Erstellungsdatum des BOs wird durch Unix Time Stamp ermittlet',
                                     dt_format='iso8601'),
    'last_updated': fields.DateTime(attribute='_last_updated',
                                    description='Änderungsdatum des BOs, wird durch' 'Unix Time Stamp ermittlet',
                                    dt_format="iso8601")
})

"""NamedBusinessObject, Person, Profile, LearnProfile & LearnGroup sind BusinessObjects"""

nbo = api.inherit('NamedBusinessObjects', bo, {
    'name': fields.String(attribute='_name', description='Nachname bei Personen oder Profilen' 'Name bzw. Bezeichnung von LearnProfile & LearnGroup')
})

#NamedBusinessObjekts




person = api.inherit('Person', nbo, {
    'google_user_id': fields.String(attribute='_google_user_id', description='Google User ID einer Person'),
    'google_mail': fields.String(attribute='_google_mail', description='Google Mail einer Person')
})

profile = api.inherit('Profile', nbo, {
    'age': fields.Integer(attribute='_age', description='Alter einer Person'),
    'adress': fields.String(attribute='_adress', description='Anschrift einer Person'),
    'semester': fields.Integer(attribute='_semester', description='Semester einer Person'),
    'degree_course': fields.String(attribute='_degree_course', description='Kurs einer Person'),
    'pre_knowledge': fields.String(attribute='_pre_knowledge', description='Vorkenntnisse einer Person'),
    'person_id': fields.Integer(attribute='_person_id', description='ID einer Person')
})

suggestion = api.inherit('Suggestion', nbo, {
    'person_id': fields.Integer(attribute='_person_id', description='ID einer Person'),
    'learn_group_id': fields.Integer(attribute='_learn_group_id',description='ID einer Learngroup'),
})

learnprofile = api.inherit('LearnProfile', nbo, {
    'study_status': fields.Boolean(attribute='_study_status', description='Zeigt den Status einer Person an'),
    'frequency': fields.String(attribute='_frequency', description='Zeigt an wie häufig eine Person lernt'),
    'prev_knowledge': fields.String(attribute='_prev_knowledge',description='Vorkenntnisse einer Person'),
    'extroversion': fields.Boolean(attribute='_extroversion', description='Zeigt an wie ob die Person extrovertiert ist'),
    'person_id': fields.Integer(attribute='_person_id', description='ID einer Person')
})

learngroup = api.inherit('LearnGroup', nbo, {
    'participant': fields.Integer(attribute='_participant', description='Teilnehmeranzahl einer Gruppe'),
    'profile_id': fields.Integer(attribute='_profile_id', description='ID eines Profils'),
    'learn_profile_id': fields.Integer(attribute='_learn_group_id', description='ID eines Lernprofils'),
})

#BusinessObjekts

chat = api.inherit('Chat', bo, {
    'chat_id': fields.Integer(attribute='_chat_id',description='ID des Chats'),
    'is_accepted': fields.Boolean(attribute='_is_accepted',description='Anfragestatus eines Chats'),  # richtig?
    'source_id': fields.Integer(attribute='_source_id', description='Absender der Nachricht'),
    'target_id': fields.Integer(attribute='_target_id', description='Empfänger der Nachricht'),
})

chatmessage = api.inherit('_ChatMessage', bo, {
    'text': fields.String(attribute='_text', description= 'Inhalt der Nachricht'),
    'person_id': fields.Integer(attribute='_person_id', description= 'Id einer Person'),
    'received': fields.Date(attribute= '_received', description ='Datum der Ankunft einer Nachricht'),
    'read': fields.Date(attribute= '_read', description ='Nachricht gelesen oder nicht')
})

# Person related
@studymatch.route('/persons')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
class PersonOperations(Resource):
    @studymatch.marshal_list_with(person)
    @secured
    def get(self):
        """Auslesen aller Person-Objekte.
        Sollten keine Person-Objekte verfügbar sein, so wird eine leere Sequenz zurückgegeben."""
        adm = Administration()
        persons = adm.get_all_persons()
        return persons

    @studymatch.marshal_with(person, code=200)
    @studymatch.expect(person)  #Wir erwarten ein Person-Objekt von Client-Seite.
    @secured
    def post(self):
        """Anlegen eines neuen Person-Objekts.
        **ACHTUNG:** Wir fassen die vom Client gesendeten Daten als Vorschlag auf.
        So ist zum Beispiel die Vergabe der ID nicht Aufgabe des Clients.
        Selbst wenn der Client eine ID in dem Proposal vergeben sollte, so
        liegt es an der Administration (Businesslogik), eine korrekte ID
        zu vergeben. *Das korrigierte Objekt wird schließlich zurückgegeben.*
        """
        adm = Administration()
        proposal = Person.from_dict(api.payload)
        """RATSCHLAG: Prüfen Sie stets die Referenzen auf valide Werte, bevor Sie diese verwenden!"""
        if proposal is not None:
            """ Das serverseitig erzeugte Objekt ist das maßgebliche und 
            wird auch dem Client zurückgegeben. 
            """
            p = adm.create_person(proposal.get_first_name(), proposal.get_google_user_id(), proposal.get_google_email())
            return p, 200
        else:
            ''' Wenn irgendetwas schiefgeht, dann geben wir nichts zurück und werfen einen Server-Fehler.'''
            return '', 500

    @studymatch.marshal_with(person, code=200)
    @studymatch.expect(person)  # Wir erwarten ein Person-Objekt von Client-Seite.
    @secured
    def put(self):
        """Update eines bestimmten Person-Objekts."""
        adm = Administration()
        print(api.payload)
        p = Person.from_dict(api.payload)
        if p is not None:
            adm.save_person_by_id(p)
            return p, 200
        else:
            return '', 500
    
@studymatch.route('/persons/<int:id>')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
@studymatch.param('id', 'id des Person-Objekts')
class PersonDeleteOperation(Resource):
    @studymatch.marshal_with(person)
    @secured
    def delete(self, id):
        """Löschen eines bestimmten Person-Objekts.
        Das zu löschende Objekt wird durch die ```id``` in dem URI bestimmt.
        """
        adm = Administration()
        pers = adm.get_person_by_id(id)
        adm.delete_person(pers)
        return '', 200




#Profile related
@studymatch.route('/profiles')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
class ProfileOperations(Resource):
    @studymatch.marshal_list_with(profile)
    @secured
    def get(self):
        """Auslesen aller Person-Objekte.
        Sollten keine Person-Objekte verfügbar sein, so wird eine leere Sequenz zurückgegeben."""
        adm = Administration()
        profiles = adm.get_all_profiles()
        return profiles

    @studymatch.marshal_with(profile, code=200)
    @studymatch.expect(profile)  #Wir erwarten ein Profile-Objekt von Client-Seite.
    @secured
    def post(self):
        """Anlegen eines neuen Person-Objekts.
        **ACHTUNG:** Wir fassen die vom Client gesendeten Daten als Vorschlag auf.
        So ist zum Beispiel die Vergabe der ID nicht Aufgabe des Clients.
        Selbst wenn der Client eine ID in dem Proposal vergeben sollte, so
        liegt es an der Administration (Businesslogik), eine korrekte ID
        zu vergeben. *Das korrigierte Objekt wird schließlich zurückgegeben.*
        """
        adm = Administration()
        proposal = Profile.from_dict(api.payload)
        """RATSCHLAG: Prüfen Sie stets die Referenzen auf valide Werte, bevor Sie diese verwenden!"""
        if proposal is not None:
            """ Das serverseitig erzeugte Objekt ist das maßgebliche und 
            wird auch dem Client zurückgegeben. 
            """
            p = adm.create_profile(proposal.get_age(), proposal.get_adress(), proposal.get_semsester(), proposal.get_degree_course, proposal.get_pre_knowledge, proposal.get_person_id())
            return p, 200
        else:
            ''' Wenn irgendetwas schiefgeht, dann geben wir nichts zurück und werfen einen Server-Fehler.'''
            return '', 500

    @studymatch.marshal_with(profile, code=200)
    @studymatch.expect(profile)  # Wir erwarten ein Profile-Objekt von Client-Seite.
    @secured
    def put(self,id):
        """Update eines bestimmten Profile-Objekts."""
        adm = Administration()
        print(api.payload)
        p = Profile.from_dict(api.payload)
        if p is not None:
            p.set_id(id)
            adm.save_profile_by_id(p)
            return p, 200
        else:
            return '', 500
    
@studymatch.route('/profiles/<int:id>')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
@studymatch.param('id', 'id des Person-Objekts')
class PersonDeleteOperation(Resource):
    @studymatch.marshal_with(profile)
    @secured
    def delete(self, id):
        """Löschen eines bestimmten Profile-Objekts.
        Das zu löschende Objekt wird durch die ```id``` in dem URI bestimmt.
        """
        adm = Administration()
        p = adm.get_profile_by_id(id)
        adm.delete_profie(p)
        return '', 200



if __name__ == '__main__':
    app.run(debug=True)



