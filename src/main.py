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
from server.bo.GroupRequest import GroupRequest

'''Außerdem nutzen wir einen selbstgeschriebenen Decorator, der die Authentifikation übernimmt'''
from SecurityDecorator import secured

"""Hier wird Flask instanziert"""
app = Flask(__name__)

"""Flask-Erweiterung für Cross-Origin Resource Sharing"""
CORS(app, resources=r'/app/*',supports_credentials=True)

api = Api(app, version='1.0', title='Studymatch api', #Name?
          description='Eine rudimentäre Demo-Api für Listenerstellung.')

"""Namespaces"""
studymatch = api.namespace('app', description="Funktionen der App") #Name der App?

"""Nachfolgend werden analog zu unseren BusinessObject-Klassen transferierbare Strukturen angelegt.

BusinessObject dient als Basisklasse."""

bo = api.model('BusinessObjects', {
    'id': fields.Integer(attribute='_id',description='Der Unique Identifier eines Business Object'),
    'creation_time': fields.DateTime(attribute='_creation_time',description='Erstellungsdatum des BOs wird durch Unix Time Stamp ermittlet')

})

"""NamedBusinessObject, Person, Profile, LearnProfile & LearnGroup sind BusinessObjects"""

nbo = api.inherit('NamedBusinessObjects', bo, {
    'name': fields.String(attribute='_name', description='Nachname bei Personen oder Profilen' 'Name bzw. Bezeichnung von LearnProfile & LearnGroup')
})

#NamedBusinessObjekts




person = api.inherit('Person', nbo, {
    
    'name': fields.String(attribute='_name', description='Nachname einer Person'),
    'google_user_id': fields.String(attribute='_google_user_id', description='Google id ID einer Person'),
    'google_mail': fields.String(attribute='_google_mail', description='Google Mail einer Person')
})

profile = api.inherit('Profile', bo, nbo, {
    'name': fields.String(attribute='_name', description='Name eines Profils'),
    'age': fields.Integer(attribute='_age', description='Alter einer Person'),
    
    'adress': fields.String(attribute='_adress', description='Anschrift einer Person'),
    'semester': fields.Integer(attribute='_semester', description='Semester einer Person'),
    'degree_course': fields.String(attribute='_degree_course', description='Kurs einer Person'),
    'person_id': fields.Integer(attribute='_person_id', description='ID einer Person')
})

suggestion = api.inherit('Suggestion', bo, {
    'person_id': fields.Integer(attribute='_person_id', description='ID einer Person'),
    'learn_group_id': fields.Integer(attribute='_learn_group_id',description='ID einer Learngroup')
})

learnprofile = api.inherit('LearnProfile', bo, {
    'study_status': fields.Integer(attribute='_study_status', description='Zeigt den Status einer Person an'),
    'frequency': fields.Integer(attribute='_frequency', description='Zeigt an wie häufig eine Person lernt'),
    'prev_knowledge': fields.String(attribute='_prev_knowledge',description='Vorkenntnisse einer Person'),
    'group_size': fields.Integer(attribute='_group_size',description='Gruppengrößen Vorliebe einer Person'),
    'extroversion': fields.Integer(attribute='_extroversion', description='Zeigt an wie ob die Person extrovertiert ist'),
    'person_id': fields.Integer(attribute='person_id', description='ID einer Person')
})

learngroup = api.inherit('LearnGroup', bo, {
    'name': fields.String(attribute='_name', description='ID eines Lernprofils'),
    'person_id': fields.Integer(attribute='_person_id', description='Person_id einer Gruppe'),
  
    
})
grouprequest = api.inherit('GroupRequest', bo, {
    'id':fields.Integer(attribute='_id', description='Fremschlüssel ID Person'),
    'is_accepted':fields.Boolean(attribute='_is_accepted', description='Akzeptiert'),
    'learngroup_id':fields.Integer(attribute='_learngroup_id', description='Fremschlüssel  der Lerngruppe'),
    'person_id':fields.Integer(attribute='_person_id', description='Fremschlüssel ID Person')
})

#BusinessObjekts

chat = api.inherit('Chat', bo, {
    'learngroup_id': fields.Integer(attribute='_learngroup_id', description='ID de der lerngruppe'),
    
    'is_accepted': fields.Integer(attribute='_is_accepted',description='Anfragestatus eines Chats'),
    'sender': fields.String(attribute='_sender', description= 'Inhalt der Nachricht'),
    'message': fields.String(attribute='_message', description= 'Id eines Chats'),
    


})

chatmessage = api.inherit('_ChatMessage', bo, {
    'text': fields.String(attribute='_text', description= 'Inhalt der Nachricht'),
    'chat_id': fields.Integer(attribute='_chat_id', description= 'Id eines Chats'),
    'person_id': fields.Integer(attribute='_person_id', description= 'Id einer Person')
    
})

# Person related
@studymatch.route('/persons')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
class PersonListOperations(Resource):
    @studymatch.marshal_list_with(person)
    #@secured
    def get(self):
        """Auslesen aller Person-Objekte.
        Sollten keine Person-Objekte verfügbar sein, so wird eine leere Sequenz zurückgegeben."""
        adm = Administration()
        pers = adm.get_all_persons()
        return pers

    @studymatch.marshal_with(person, code=200)
    @studymatch.expect(person)  #Wir erwarten ein Person-Objekt von Client-Seite.
    #@secured
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
            p = adm.create_person(proposal.get_name(),proposal.get_google_user_id(), proposal.get_google_mail())
            return p, 200
        else:
            ''' Wenn irgendetwas schiefgeht, dann geben wir nichts zurück und werfen einen Server-Fehler.'''
            return '', 500

@studymatch.route('/persons/<int:id>')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
@studymatch.param('id', 'ID der Person')
class PersonOperations(Resource):
    @studymatch.marshal_list_with(person)
    #@secured
    def get(self):
        """Auslesen aller Person-Objekte.
        Sollten keine Person-Objekte verfügbar sein, so wird eine leere Sequenz zurückgegeben."""
        adm = Administration()
        pers = adm.get_all_persons()
        return pers

    @studymatch.marshal_with(person, code=200)
    @studymatch.expect(person)  # Wir erwarten ein Person-Objekt von Client-Seite.
    #@secured
    def put(self, id):
        """Update eines bestimmten Person-Objekts."""
        adm = Administration()
        print(api.payload)
        p = Person.from_dict(api.payload)
        if p is not None:
            p.set_id(id)
            adm.save_person(p)
            return p, 200

        else:
            return '', 500


@studymatch.route('/person/<string:email>')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
@studymatch.param('email', 'Die Mail des Person-Objekts')
class PersonOperations(Resource):
    @studymatch.marshal_with(person)
    #@secured
    def get(self, email):
        """Auslesen einer bestimmten Person-BO.

        Objekt wird durch die id in bestimmt.
        """
        adm = Administration()
        pers = adm.get_person_by_google_mail(email)
        return pers

@studymatch.route('/person-by-google-user-id/<string:google_user_id>')
@studymatch.response(500, 'when server has problems')
class idGoogleOperations(Resource):
    @studymatch.marshal_with(person)
    #@secured
    def get(self, google_user_id):
        adm = Administration()
        persons = adm.get_person_by_google_user_id(google_user_id)
        return persons

@studymatch.route('/person/<int:id>')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
@studymatch.param('id', 'id des Person-Objekts')
class PersonDeleteOperation(Resource):

    @studymatch.marshal_with(person)
    #@secured
    def get(self, id):
        """Auslesen eines bestimmten Projekts.

        Auszulesende Projekt wird durch id bestimmt.
        """
        adm = Administration()
        pers = adm.get_person_by_id(id)
        return pers



    @studymatch.marshal_with(person)
    #@secured
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
    #@secured
    def get(self):
        print("blabla")
        """Auslesen aller Person-Objekte.
        Sollten keine Person-Objekte verfügbar sein, so wird eine leere Sequenz zurückgegeben."""
        adm = Administration()
        profiles = adm.get_all_profiles()
        #print(profiles.get__all_profiles())
        return profiles

@studymatch.route('/profile')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
class ProfileOperations(Resource):

    @studymatch.marshal_with(profile, code=200)
    @studymatch.expect(profile)
    #@secured
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
            p = adm.create_profile(proposal.get_name(),proposal.get_age(), proposal.get_adress(), proposal.get_semester(), proposal.get_degree_course(), proposal.get_person_id())
            return p, 200
        else:
            ''' Wenn irgendetwas schiefgeht, dann geben wir nichts zurück und werfen einen Server-Fehler.'''
            return '', 500


   


@studymatch.route('/profile/<int:id>')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
@studymatch.param('id', 'id des Person-Objekts')
class ProfileDeleteOperation(Resource):

    @studymatch.marshal_with(profile)
    #@secured
    def get(self, id):
        """Auslesen eines bestimmten Projekts.

        Auszulesende Projekt wird durch id bestimmt.
        """
        adm = Administration()
        prof = adm.get_profile_by_id(id)
        return prof
    

    @studymatch.marshal_with(profile, code=200)
    @studymatch.expect(profile)  # Wir erwarten ein Profile-Objekt von Client-Seite.
    # #@secured
    def put(self, id ):
        """Update eines bestimmten Profile-Objekts."""
        adm = Administration()
        print(api.payload)
        p = Profile.from_dict(api.payload)
        if p is not None:
            p.set_id(id)
            adm.save_profile(p)
            return p, 200
        else:
            return '', 500


    @studymatch.marshal_with(profile)
    #@secured
    def delete(self, id):
        """Löschen eines bestimmten Profile-Objekts.
        Das zu löschende Objekt wird durch die ```id``` in dem URI bestimmt.
        """
        adm = Administration()
        p = adm.get_profile_by_id(id)
        adm.delete_profile(p)
        return '', 200
    
    @studymatch.marshal_with(profile)
    ##@secured
    def get(self, id):
        """Auslesen eines bestimmten Projekts.

        Auszulesende Projekt wird durch id bestimmt.
        """
        adm = Administration()
        prof = adm.get_profile_by_id(id)
        return prof

@studymatch.route('/profile-by-person-id/<int:person_id>')
@studymatch.response(500, 'when server has problems')
class ProfileByPersonIDOperations(Resource):
    @studymatch.marshal_with(profile)
    #@secured
    def get(self, person_id):
        adm = Administration()
        pe = adm.get_profile_by_person_id(person_id)
        return pe
#Suggestion related
@studymatch.route('/suggestions')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
class SuggestionListOperations(Resource):
    @studymatch.marshal_list_with(suggestion)
    #@secured
    def get(self):
        """Auslesen aller suggestion-Objekte.
        Sollten keine suggestion-Objekte verfügbar sein, so wird eine leere Sequenz zurückgegeben."""
        adm = Administration()
        s = adm.get_all_suggestions()
        return s

    @studymatch.marshal_with(suggestion, code=200)
    @studymatch.expect(suggestion)  #Wir erwarten ein suggestion-Objekt von Client-Seite.
    #@secured
    def post(self):
        """Anlegen eines neuen suggestion-Objekts.
        **ACHTUNG:** Wir fassen die vom Client gesendeten Daten als Vorschlag auf.
        So ist zum Beispiel die Vergabe der ID nicht Aufgabe des Clients.
        Selbst wenn der Client eine ID in dem Proposal vergeben sollte, so
        liegt es an der Administration (Businesslogik), eine korrekte ID
        zu vergeben. *Das korrigierte Objekt wird schließlich zurückgegeben.*
        """
        adm = Administration()
        proposal = Suggestion.from_dict(api.payload)
        """RATSCHLAG: Prüfen Sie stets die Referenzen auf valide Werte, bevor Sie diese verwenden!"""
        if proposal is not None:
            """ Das serverseitig erzeugte Objekt ist das maßgebliche und 
            wird auch dem Client zurückgegeben. 
            """
            s = adm.create_suggestion(proposal.get_creation_time(),proposal.get_person_id(),proposal.learn_group_id())
            return s, 200
        else:
            ''' Wenn irgendetwas schiefgeht, dann geben wir nichts zurück und werfen einen Server-Fehler.'''
            return '', 500

@studymatch.route('/suggestion/<int:id>')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
@studymatch.param('id', 'id des Suggestion-Objekts')
class SuggestionOperation(Resource):

    @studymatch.marshal_with(suggestion)
    # #@secured
    def get(self, id):
        """Auslesen einer bestimmten Suggestion.
        Auszulesende Suggestion wird durch id bestimmt.
        """
        adm = Administration()
        s = adm.get_suggestion_by_id(id)
        return s

    @studymatch.marshal_with(suggestion, code=200)
    @studymatch.expect(suggestion)  # Wir erwarten ein suggestion-Objekt von Client-Seite.
    #@secured
    def put(self,id):
        """Update eines bestimmten suggestion-Objekts."""
        adm = Administration()
        s = Suggestion.from_dict(api.payload)
        if s is not None:
            s.set_id(id)
            adm.save_suggestion(s)
            return s, 200

        else:
            return '', 500



@studymatch.route('/suggestion/<int:id>')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
@studymatch.param('id', 'id des Suggestion-Objekts')
class SuggestionDeleteOperation(Resource):

    @studymatch.marshal_with(suggestion)
    #@secured
    def get(self, id):
        """Auslesen einer bestimmten Suggestion.
        Auszulesende Suggestion wird durch id bestimmt.
        """
        adm = Administration()
        s = adm.get_suggestion_by_id(id)
        return s



    @studymatch.marshal_with(suggestion)
    #@secured
    def delete(self, id):
        """Löschen eines bestimmten Person-Objekts.
        Das zu löschende Objekt wird durch die ```id``` in dem URI bestimmt.
        """
        adm = Administration()
        s = adm.get_suggestion_by_id(id)
        adm.delete_suggestion(s)
        return '', 200


#Learnprofile related
@studymatch.route('/learnprofiles')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
class LearnProfileListOperations(Resource):
    @studymatch.marshal_list_with(learnprofile)
    #@secured
    def get(self):
        """Auslesen aller learnprofile-Objekte.
        Sollten keine learnprofile-Objekte verfügbar sein, so wird eine leere Sequenz zurückgegeben."""
        adm = Administration()
        lp = adm.get_all_learnprofiles()
        return lp

    @studymatch.marshal_with(learnprofile, code=200)
    @studymatch.expect(learnprofile)  #Wir erwarten ein learnprofile-Objekt von Client-Seite.
    #@secured
    def post(self):
        """Anlegen eines neuen learnprofile-Objekts.
        **ACHTUNG:** Wir fassen die vom Client gesendeten Daten als Vorschlag auf.
        So ist zum Beispiel die Vergabe der ID nicht Aufgabe des Clients.
        Selbst wenn der Client eine ID in dem Proposal vergeben sollte, so
        liegt es an der Administration (Businesslogik), eine korrekte ID
        zu vergeben. *Das korrigierte Objekt wird schließlich zurückgegeben.*
        """
        adm = Administration()
        proposal = LearnProfile.from_dict(api.payload)
        """RATSCHLAG: Prüfen Sie stets die Referenzen auf valide Werte, bevor Sie diese verwenden!"""
        if proposal is not None:
            """ Das serverseitig erzeugte Objekt ist das maßgebliche und 
            wird auch dem Client zurückgegeben. 
            """
            lp = adm.create_learnprofile(proposal.get_creation_time(),proposal.get_study_status(), proposal.get_frequency(),
            proposal.get_prev_knowledge(),proposal.get_group_size(), proposal.get_extroversion(), proposal.get_person_id())
            return lp, 200
        else:
            ''' Wenn irgendetwas schiefgeht, dann geben wir nichts zurück und werfen einen Server-Fehler.'''
            return '', 500

@studymatch.route('/learnprofiles/<int:id>')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
@studymatch.param('id', 'id des LearnProfile-Objekts')
class LearnProfileOperations(Resource):
    @studymatch.marshal_list_with(learnprofile)
    #@secured
    def get(self):
        """Auslesen aller learnprofile-Objekte.
        Sollten keine learnprofile-Objekte verfügbar sein, so wird eine leere Sequenz zurückgegeben."""
        adm = Administration()
        lp = adm.get_all_learnprofiles()
        return lp

    @studymatch.marshal_with(learnprofile, code=200)
    @studymatch.expect(learnprofile)  # Wir erwarten ein learnprofile-Objekt von Client-Seite.
    #@secured
    def put(self, id):
        """Update eines bestimmten learnprofile-Objekts."""
        adm = Administration()
        print(api.payload)
        lp = LearnProfile.from_dict(api.payload)
        if lp is not None:
            lp.set_id(id)
            adm.save_learnprofile(lp)
            return lp, 200

        else:
            return '', 500
@studymatch.route('/learnprofile/<int:person_id>')
@studymatch.response(500, 'when server has problems')
class ProfileByPersonIDOperations(Resource):
    @studymatch.marshal_with(learnprofile)
    #@secured
    def get(self, person_id):
        adm = Administration()
        pe = adm.get_learnprofile_person_id(person_id)
        return pe
        



@studymatch.route('/learnprofile/<int:id>')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
@studymatch.param('id', 'id des LearnProfile-Objekts')
class LearnProfileDeleteOperation(Resource):

    @studymatch.marshal_with(learnprofile)
    #@secured
    def get(self, id):
        """Auslesen einer bestimmten learnprofile.
        Auszulesende learnprofile wird durch id bestimmt.
        """
        adm = Administration()
        lp = adm.get_learnprofile_by_id(id)
        return lp



    @studymatch.marshal_with(learnprofile)
    #@secured
    def delete(self, id):
        """Löschen eines bestimmten learnprofile-Objekts.
        Das zu löschende Objekt wird durch die ```id``` in dem URI bestimmt.
        """
        adm = Administration()
        lp = adm.get_learnprofile_by_id(id)
        adm.delete_learnprofile(lp)
        return '', 200


#Chat related
@studymatch.route('/chats')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
@studymatch.param('id', 'id des Chat-Objekts')
class ChatListOperations(Resource):
    @studymatch.marshal_list_with(chat)
    #@secured
    def get(self):
        """Auslesen aller chat-Objekte.
        Sollten keine chat-Objekte verfügbar sein, so wird eine leere Sequenz zurückgegeben."""
        adm = Administration()
        c = adm.get_all_chats()
        return c

    @studymatch.marshal_with(chat, code=200)
    @studymatch.expect(chat)  #Wir erwarten ein chat-Objekt von Client-Seite.
    #@secured
    def post(self):
        """Anlegen eines neuen chat-Objekts.
        **ACHTUNG:** Wir fassen die vom Client gesendeten Daten als Vorschlag auf.
        So ist zum Beispiel die Vergabe der ID nicht Aufgabe des Clients.
        Selbst wenn der Client eine ID in dem Proposal vergeben sollte, so
        liegt es an der Administration (Businesslogik), eine korrekte ID
        zu vergeben. *Das korrigierte Objekt wird schließlich zurückgegeben.*
        """
        adm = Administration()
        proposal = Chat.from_dict(api.payload)
        """RATSCHLAG: Prüfen Sie stets die Referenzen auf valide Werte, bevor Sie diese verwenden!"""
        if proposal is not None:
            """ Das serverseitig erzeugte Objekt ist das maßgebliche und 
            wird auch dem Client zurückgegeben. 
            """
            c = adm.create_chat(proposal.get_learngroup_id(), 
            proposal.get_is_accepted(), proposal.get_sender(), proposal.get_message())
            return c, 200
        else:
            ''' Wenn irgendetwas schiefgeht, dann geben wir nichts zurück und werfen einen Server-Fehler.'''
            return '', 500


@studymatch.route('/chats/<int:id>')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
@studymatch.param('id', 'id des Chat-Objekts')
class ChatOperation(Resource):

    @studymatch.marshal_with(chat)
    #@secured
    def get(self, id):
        """Auslesen einer bestimmten chat.
        Auszulesende chat wird durch id bestimmt.
        """
        adm = Administration()
        c = adm.get_chat_by_id(id)
        return c

    @studymatch.marshal_with(chat, code=200)
    @studymatch.expect(chat)  # Wir erwarten ein chat-Objekt von Client-Seite.
    # #@secured
    def put(self, id):
        """Update eines bestimmten chat-Objekts."""

        adm = Administration()
        c = Chat.from_dict(api.payload)

        if c is not None:

            c.set_id(id)
            adm.save_chat(c)
            return 'c', 200
        else:
            return '', 500

@studymatch.route('/chats/<int:id>')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
@studymatch.param('id', 'id des Chat-Objekts')
class ChatListOperations(Resource):

    @studymatch.marshal_with(chat)
    #@secured
    def get(self, id):
        """Auslesen einer bestimmten chat.
        Auszulesende chat wird durch id bestimmt.
        """
        adm = Administration()
        c = adm.get_chat_by_id(id)
        return c



    @studymatch.marshal_with(chat)
    #@secured
    def delete(self, id):
        """Löschen eines bestimmten chat-Objekts.
        Das zu löschende Objekt wird durch die ```id``` in dem URI bestimmt.
        """
        adm = Administration()
        c = adm.get_chat_by_id(id)
        adm.delete_chat(c)
        return '', 200

#chatbylearngroupid
@studymatch.route('/chat/<int:learngroup_id>')
@studymatch.response(500, 'when server has problems')
class ChatListOperation(Resource):
    @studymatch.marshal_with(chat)
    #@secured
    def get(self, learngroup_id):
        adm = Administration()
        pe = adm.get_chat_by_learngroup_id(learngroup_id)
        return pe



#ChatMessage related
@studymatch.route('/chatmessages')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
class ChatMessageListOperations(Resource):
    @studymatch.marshal_list_with(chatmessage)
    #@secured
    def get(self):
        """Auslesen aller chatmessage-Objekte.
        Sollten keine chatmessage-Objekte verfügbar sein, so wird eine leere Sequenz zurückgegeben."""
        adm = Administration()
        cm = adm.get_all_chatmessages()
        return cm

    @studymatch.marshal_with(chatmessage, code=200)
    @studymatch.expect(chatmessage)  #Wir erwarten ein chatmessage-Objekt von Client-Seite.
    #@secured
    def post(self):
        """Anlegen eines neuen chatmessage-Objekts.
        **ACHTUNG:** Wir fassen die vom Client gesendeten Daten als Vorschlag auf.
        So ist zum Beispiel die Vergabe der ID nicht Aufgabe des Clients.
        Selbst wenn der Client eine ID in dem Proposal vergeben sollte, so
        liegt es an der Administration (Businesslogik), eine korrekte ID
        zu vergeben. *Das korrigierte Objekt wird schließlich zurückgegeben.*
        """
        adm = Administration()
        proposal = ChatMessage.from_dict(api.payload)
        """RATSCHLAG: Prüfen Sie stets die Referenzen auf valide Werte, bevor Sie diese verwenden!"""
        if proposal is not None:
            """ Das serverseitig erzeugte Objekt ist das maßgebliche und 
            wird auch dem Client zurückgegeben. 
            """
            cm = adm.create_chatmessage(proposal.get_text(),proposal.get_chat_id(), proposal.get_person_id())
                                       
            return cm, 200
        else:
            ''' Wenn irgendetwas schiefgeht, dann geben wir nichts zurück und werfen einen Server-Fehler.'''
            return '', 500

@studymatch.route('/chatmessages/<int:id>')
@studymatch.response(500, 'Im Falle eines Server-seritigen Fehlers.')
@studymatch.param('id', 'ID der Nachricht')
class ChatMessageOperations(Resource):
    @studymatch.marshal_with(chatmessage)
    #@secured
    def get(self,id):
        """Auslesen eines ChatMessage Objekts anhand seiner ID"""
        adm = Administration()
        cm = adm.get_chatmessage_by_id(id)
        return cm


    @studymatch.marshal_with(chatmessage, code=200)
    @studymatch.expect(chatmessage)  # Wir erwarten ein chatmessage-Objekt von Client-Seite.
    #@secured
    def put(self,id):
        """Update eines bestimmten chatmessage-Objekts."""
        adm = Administration()
        cm = ChatMessage.from_dict(api.payload)

        if cm is not None:

            cm.set_id(id)
            adm.save_chatmessage(cm)
            return '', 200

        else:
            return '', 500



@studymatch.route('/chatmessage/<int:id>')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
@studymatch.param('id', 'id des ChatMessage-Objekts')
class ChatMessageDeleteOperation(Resource):

    @studymatch.marshal_with(chatmessage)
    #@secured
    def get(self, id):
        """Auslesen einer bestimmten chatmessage.
        Auszulesende learnprofile wird durch id bestimmt.
        """
        adm = Administration()
        cm = adm.get_chatmessage_by_id(id)
        return cm



    @studymatch.marshal_with(chatmessage)
    #@secured
    def delete(self, id):
        """Löschen eines bestimmten learnprofile-Objekts.
        Das zu löschende Objekt wird durch die ```id``` in dem URI bestimmt.
        """
        adm = Administration()
        cm = adm.get_chatmessage_by_id(id)
        adm.delete_chatmessage(cm)
        return '', 200

#LearnGroup related
@studymatch.route('/learngroups')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
class LearnGroupListOperations(Resource):
    @studymatch.marshal_list_with(learngroup)
    #@secured
    def get(self):
        """Auslesen aller LearnGroup-Objekte.
        Sollten keine LearnGroup-Objekte verfügbar sein, so wird eine leere Sequenz zurückgegeben."""
        adm = Administration()
        lp = adm.get_all_learngroups()
        return lp

    @studymatch.marshal_with(learngroup, code=200)
    @studymatch.expect(learngroup)  #Wir erwarten ein learngroup-Objekt von Client-Seite.
    #@secured
    def post(self):
        """Anlegen eines neuen learngroup-Objekts.
        **ACHTUNG:** Wir fassen die vom Client gesendeten Daten als Vorschlag auf.
        So ist zum Beispiel die Vergabe der ID nicht Aufgabe des Clients.
        Selbst wenn der Client eine ID in dem Proposal vergeben sollte, so
        liegt es an der Administration (Businesslogik), eine korrekte ID
        zu vergeben. *Das korrigierte Objekt wird schließlich zurückgegeben.*
        """
        adm = Administration()
        proposal = LearnGroup.from_dict(api.payload)
        """RATSCHLAG: Prüfen Sie stets die Referenzen auf valide Werte, bevor Sie diese verwenden!"""
        if proposal is not None:
            """ Das serverseitig erzeugte Objekt ist das maßgebliche und 
            wird auch dem Client zurückgegeben. 
            """
            lg = adm.create_learngroup(proposal.get_creation_time(),proposal.get_name(), proposal.get_person_id())
            return lg, 200
        else:
            ''' Wenn irgendetwas schiefgeht, dann geben wir nichts zurück und werfen einen Server-Fehler.'''
            return '', 500

@studymatch.route('/learngroups/<int:id>')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
@studymatch.param('id', 'ID der Lerngruppe')
class LearnGroupOperations(Resource):
    @studymatch.marshal_with(learngroup)
    #@secured
    def get(self,id):
        """Auslesen aller LearnGroup-Objekte.
        Sollten keine LearnGroup-Objekte verfügbar sein, so wird eine leere Sequenz zurückgegeben."""
        adm = Administration()
        lp = adm.get_learngroup_by_id(id)
        return lp

    @studymatch.marshal_with(learngroup, code=200)
    @studymatch.expect(learngroup)  # Wir erwarten ein learngroup-Objekt von Client-Seite.
    #@secured
    def put(self, id):
        """Update eines bestimmten learngroup-Objekts."""
        adm = Administration()
        lg = LearnGroup.from_dict(api.payload)
        if lg is not None:

            lg.set_id(id)
            adm.save_learngroup(lg)
            return lg, 200

        else:
            return '', 500
    
    @studymatch.marshal_with(learngroup)
    #@secured
    def delete(self, id):
        """Löschen eines bestimmten learngroup-Objekts.
        Das zu löschende Objekt wird durch die ```id``` in dem URI bestimmt.
        """
        adm = Administration()
        lg = adm.get_learngroup_by_id(id)
        adm.delete_learngroup(lg)
        return '', 200

#learngroupbypersonid
@studymatch.route('/learngroup/<int:person_id>')
@studymatch.response(500, 'when server has problems')
class LearnGroupListByPersonOperations(Resource):
    @studymatch.marshal_with(learngroup)
    #@secured
    def get(self, person_id):
        adm = Administration()
        pe = adm.get_learngroup_by_person_id(person_id)
        return pe
    
    def put(self, id):
        ''' Eine Gruppe verlassen '''
        adm = Administration()
        learngroup = LearnGroup.from_dict(api.payload['learngroup'])
        person = Person.from_dict(api.payload['person'])
        if group and person:
            adm.leave_group(learngroup, person)
            return '', 200
        else:
            return '', 500


#----GroupRequest--------

@studymatch.route('/grouprequests')
@studymatch.response(500, 'when server has problems')
class GroupRequestListOperations(Resource):
    @studymatch.marshal_list_with(grouprequest)
    def get(self):
        adm = Administration()
        grouprequests = adm.get_all_grouprequests()
        return grouprequests

    @studymatch.marshal_with(grouprequest)
    @studymatch.expect(grouprequest)  
    def post(self):
     
        adm = Administration()
        
        gr = GroupRequest.from_dict(api.payload)
        
        if gr is not None:
  
            s = adm.create_grouprequest(gr.get_creation_time(),gr.get_is_accepted(),gr.get_learngroup_id(),gr.get_person_id())

            return s, 200
        else:
       
            return '', 500
   


@studymatch.route('/grouprequest/<int:id>')
@studymatch.response(500, 'when server has problems')
@studymatch.param('id', 'ID der Gruppenanfrage')
class GroupRequestnOperations(Resource):
    @studymatch.marshal_with(grouprequest)
    def get(self, id):
        adm = Administration()
        grouprequest = adm.get_grouprequest_by_id(id)
        return grouprequest

    

    def delete(self, id):
        adm = Administration()
        grouprequest= adm.get_person_by_id(id)
        adm.delete_grouprequest(grouprequest)
        return '', 200


@studymatch.route('/grouprequest-update/<int:is_accepted>/<int:id>')
@studymatch.response(500, 'when server has problems')
@studymatch.param('is_accepted', 'ID der Gruppenanfrage')

class GroupRequestUpdateOperations(Resource):    
    @studymatch.marshal_with(grouprequest)
    @studymatch.expect(grouprequest) 
    def put(self,id,is_accepted):
        adm = Administration()
        updated = adm.save_grouprequest(id,is_accepted)
        if  updated != None:
            return updated, 200
        
        else:
         
            return '', 500



@studymatch.route('/grouprequest-by-learngroup_id/<int:learngroup_id>')
@studymatch.response(500, 'when server has problems')
class ChatByTargetOperations(Resource):
    @studymatch.marshal_list_with(grouprequest)
    def get(self, learngroup_id):
       
        adm = Administration()
        grouprequest_by_learn_group_id = adm.get_grouprequest_by_learngroup_id(learngroup_id)
        return grouprequest_by_learn_group_id


@studymatch.route('/grouprequest-by-person_id/<int:person_id>')
@studymatch.response(500, 'when server has problems')
class GroupRequestByPersonOperations(Resource):
    @studymatch.marshal_list_with(grouprequest)
    def get(self, person_id):
    
        adm = Administration()
        rb= adm.get_grouprequests_person_id(person_id)
        return rb

@studymatch.route('/grouprequest-by-accepted/<int:is_accepted>')
@studymatch.response(500, 'when server has problems')
class GroupRequestBySourceOperations(Resource):
    @studymatch.marshal_list_with(grouprequest)
    def get(self, is_accepted):
  
        adm = Administration()
        grouprequest_is_accepted = adm.get_grouprequests_by_is_accepted(is_accepted)
        return grouprequest_is_accepted



@studymatch.route('/person-matching/<int:id>')
@studymatch.response(500, 'Internal Server Error')
@studymatch.param('id', 'ID der Person')
class PersonMatchOperations(Resource):
    def get(self, id):
        adm = Administration()
        matchmakingList = adm.get_match(id)
        return matchmakingList

# Gruppe matchen
@studymatch.route('/learngroup-matching/<int:id>')
@studymatch.response(500, 'Internal Server Error')
@studymatch.param('id', 'ID der Lerngruppe')
class LearnGroupMa(Resource):
    @studymatch.marshal_with(learngroup)
    def get(self, id):
       
        adm = Administration()
        matchmakingList = adm.get_match(id)
        return matchmakingList[1]


if __name__ == '__main__':
    app.run(debug=True)







