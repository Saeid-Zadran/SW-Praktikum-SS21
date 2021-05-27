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
    'google_user_id': fields.String(attribute='_google_user_id', description='Google User ID einer Person'),
    'google_mail': fields.String(attribute='_google_mail', description='Google Mail einer Person')
})

profile = api.inherit('Profile', bo, nbo, {
    'age': fields.Integer(attribute='_age', description='Alter einer Person'),
    'adress': fields.String(attribute='_adress', description='Anschrift einer Person'),
    'semester': fields.Integer(attribute='_semester', description='Semester einer Person'),
    'degree_course': fields.String(attribute='_degree_course', description='Kurs einer Person'),
    'preferences': fields.String(attribute='_preferences', description='Vorkenntnisse einer Person'),
    'person_id': fields.Integer(attribute='_person_id', description='ID einer Person')
})

suggestion = api.inherit('Suggestion', bo, {
    'person_id': fields.Integer(attribute='_person_id', description='ID einer Person'),
    'learn_group_id': fields.Integer(attribute='_learn_group_id',description='ID einer Learngroup')
})

learnprofile = api.inherit('LearnProfile', bo, {
    'study_status': fields.Boolean(attribute='_study_status', description='Zeigt den Status einer Person an'),
    'frequency': fields.Integer(attribute='_frequency', description='Zeigt an wie häufig eine Person lernt'),
    'prev_knowledge': fields.String(attribute='_prev_knowledge',description='Vorkenntnisse einer Person'),
    'extroversion': fields.Boolean(attribute='_extroversion', description='Zeigt an wie ob die Person extrovertiert ist'),
    'profile_id': fields.Integer(attribute='profile_id', description='ID einer Person')
})

learngroup = api.inherit('LearnGroup', nbo, {
    'participant': fields.Integer(attribute='_participant', description='Teilnehmeranzahl einer Gruppe'),
    'profile_id': fields.Integer(attribute='_profile_id', description='ID eines Profils'),
    'learn_profile_id': fields.Integer(attribute='_learn_profile_id', description='ID eines Lernprofils'),
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
            p = adm.create_person(proposal.get_google_user_id(), proposal.get_google_mail())
            return p, 200
        else:
            ''' Wenn irgendetwas schiefgeht, dann geben wir nichts zurück und werfen einen Server-Fehler.'''
            return '', 500


    @studymatch.marshal_with(person, code=200)
    @studymatch.expect(person)  # Wir erwarten ein Person-Objekt von Client-Seite.
    #@secured
    def put(self):
        """Update eines bestimmten Person-Objekts."""
        adm = Administration()
        print(api.payload)
        p = Person.from_dict(api.payload)
        if p is not None:
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
class UserGoogleOperations(Resource):
    @studymatch.marshal_with(person)
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
        """Auslesen aller Person-Objekte.
        Sollten keine Person-Objekte verfügbar sein, so wird eine leere Sequenz zurückgegeben."""
        adm = Administration()
        profiles = adm.get_all_profiles()
        #print(profiles.get__all_profiles())
        return profiles

    @studymatch.marshal_with(profile, code=200)
    @studymatch.expect(profile)  #Wir erwarten ein Profile-Objekt von Client-Seite.
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
            p = adm.create_profile(proposal.get_age(), proposal.get_adress(), proposal.get_semester(), proposal.get_degree_course(), proposal.get_preferences(), proposal.get_person_id())
            return p, 200
        else:
            ''' Wenn irgendetwas schiefgeht, dann geben wir nichts zurück und werfen einen Server-Fehler.'''
            return '', 500

    @studymatch.marshal_with(profile, code=200)
    @studymatch.expect(profile)  # Wir erwarten ein Profile-Objekt von Client-Seite.
    #@secured
    def put(self):
        """Update eines bestimmten Profile-Objekts."""
        adm = Administration()
        print(api.payload)
        p = Profile.from_dict(api.payload)
        if p is not None:
            adm.save_profile(p)
            return p, 200
        else:
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


    @studymatch.marshal_with(suggestion, code=200)
    @studymatch.expect(suggestion)  # Wir erwarten ein suggestion-Objekt von Client-Seite.
    #@secured
    def put(self):
        """Update eines bestimmten suggestion-Objekts."""
        adm = Administration()
        s = Suggestion.from_dict(api.payload)
        if s is not None:
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
            proposal.get_prev_knowledge(), proposal.get_extroversion(), proposal.get_profile_id())
            return lp, 200
        else:
            ''' Wenn irgendetwas schiefgeht, dann geben wir nichts zurück und werfen einen Server-Fehler.'''
            return '', 500


    @studymatch.marshal_with(learnprofile, code=200)
    @studymatch.expect(learnprofile)  # Wir erwarten ein learnprofile-Objekt von Client-Seite.
    #@secured
    def put(self):
        """Update eines bestimmten learnprofile-Objekts."""
        adm = Administration()
        print(api.payload)
        lp = LearnProfile.from_dict(api.payload)
        if lp is not None:
            adm.save_learnprofile(lp)
            return lp, 200

        else:
            return '', 500



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
class ChatOperations(Resource):
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
            c = adm.create_chat(proposal.get_source_id(), proposal.get_target_id(), 
            proposal.get_is_accepted())
            return c, 200
        else:
            ''' Wenn irgendetwas schiefgeht, dann geben wir nichts zurück und werfen einen Server-Fehler.'''
            return '', 500


    @studymatch.marshal_with(chat, code=200)
    @studymatch.expect(chat)  # Wir erwarten ein chat-Objekt von Client-Seite.
    #@secured
    def put(self):
        """Update eines bestimmten chat-Objekts."""
        adm = Administration()
        print(api.payload)
        c = Chat.from_dict(api.payload)
        if c is not None:
            adm.save_chat(c)
            return c, 200

        else:
            return '', 500



@studymatch.route('/chat/<int:id>')
@studymatch.response(500, 'Falls es zu einem Server-seitigen Fehler kommt.')
@studymatch.param('id', 'id des Chat-Objekts')
class ChatDeleteOperation(Resource):

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
            cm = adm.create_chatmessage(proposal.get_text(), proposal.get_person_id(), 
            proposal.get_received(), proposal.get_read())
            return cm, 200
        else:
            ''' Wenn irgendetwas schiefgeht, dann geben wir nichts zurück und werfen einen Server-Fehler.'''
            return '', 500


    @studymatch.marshal_with(chatmessage, code=200)
    @studymatch.expect(chatmessage)  # Wir erwarten ein chatmessage-Objekt von Client-Seite.
    #@secured
    def put(self):
        """Update eines bestimmten chatmessage-Objekts."""
        adm = Administration()
        print(api.payload)
        cm = ChatMessage.from_dict(api.payload)
        if cm is not None:
            adm.save_chatmessage(cm)
            return cm, 200

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

if __name__ == '__main__':
    app.run(debug=True)







