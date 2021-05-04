'''Unser Service basiert auf Flask'''
from flask import Flask
'''Auf Flask aufbauend nutzen wir RestX'''
from flask_restx import Api, Resource, fields
'''Wir benutzen noch eine Flask-Erweiterung für Cross-Origin Resource Sharing'''
from flask_cors import CORS
'''Wir greifen natürlich auf unsere Applikationslogik inkl. BusinessObject-Klassen zurück'''

from server.ProjectAdministration import ProjectAdministration
from server.bo.Chat import Chat
from server.bo.ChatMessage import ChatMessage
from server.bo.LearnGroup import LearnGroup
from server.bo.LearnProfile import LearnProfile
from server.bo.Person import Person
from server.bo.Profile import Profile
from server.bo.Suggestion import Suggestion

'''Außerdem nutzen wir einen selbstgeschriebenen Decorator, der die Authentifikation übernimmt'''
from SecurityDecorator import secured

"""Hier wird Flask instanziert"""
app = Flask(__name__)

"""Flask-Erweiterung für Cross-Origin Resource Sharing"""
CORS(app, resources=r'/app/*')

api = Api(app, version='1.0', title='Prochecked api', #Name?
          description='Eine rudimentäre Demo-API für Listenerstellung.')

"""Namespaces"""
prochecked = api.namespace('app', description="Funktionen der App") #Name der App?

"""Nachfolgend werden analog zu unseren BusinessObject-Klassen transferierbare Strukturen angelegt.

BusinessObject dient als Basisklasse."""

bo = api.model('BusinessObjects', {
    'id': fields.Integer(attribute='_id',
                         description='Der Unique Identifier eines Business Object'),
    'creation_date': fields.DateTime(attribute='_creation_date',
                                     description='Erstellungsdatum des BOs, wird '
                                                 'durch Unix Time Stamp ermittlet',
                                     dt_format='iso8601'),
    'last_updated': fields.DateTime(attribute='_last_updated',
                                    description='Änderungsdatum des BOs, wird durch'
                                                'Unix Time Stamp ermittlet',
                                    dt_format="iso8601")
})

"""NamedBusinessObject, Person, Profile, LearnProfile & LearnGroup sind BusinessObjects"""

nbo = api.inherit('NamedBusinessObjects', bo, {
    'name': fields.String(attribute='_name',
                          description='Nachname bei Personen oder Profilen' 
                                      'Name bzw. Bezeichnung von LearnProfile & LearnGroup')
})

#NamedBusinessObjekts

person = api.inherit('Person', nbo, {
    'first_name': fields.String(attribute='_first_name',
                           description='Vorname einer Person'),
    'last_name': fields.String(attribute='_last_name',
                            description='Nachname einer Person'),
    'google_user_id': fields.String(attribute='_google_user_id',
                            description='Google User ID einer Person'),  
    'google_mail': fields.String(attribute='_google_mail',
                            description='Google Mail einer Person')
})

profile = api.inherit('Profile', nbo, {
    'age': fields.Integer(attribute='_age',
                           description='Alter einer Person'),
    'adress': fields.String(attribute='_adress',
                            description='Anschrift einer Person'),
    'semester': fields.Integer(attribute='_semester',
                            description='Semester einer Person'),  
    'degree_course': fields.String(attribute='_degree_course',
                            description='Kurs einer Person')
    'pre_knowledge': fields.String(attribute='_pre_knowledge',      #Fehler?
                            description='Vorkenntnisse einer Person')
    'person_id': fields.Integer(attribute='_person_id',
                            description='ID einer Person')                         
})

suggestion = api.inherit('Suggestion', nbo, {
    'person_id': fields.Integer(attribute='_person_id',
                           description='ID einer Person'),
    'learn_group_id': fields.Integer(attribute='_learn_group_id',
                            description='ID einer Learngroup'),
})

learnprofile = api.inherit('LearnProfile', nbo, {
    'study_status': fields.Boolean(attribute='_study_status',
                           description='Zeigt den Status einer Person an'),
    'frequency': fields.String(attribute='_frequency',
                            description='Zeigt an wie häufig eine Person lernt'),  
    'prev_knowledge': fields.String(attribute='_prev_knowledge',     # doppelt?
                            description='Vorkenntnisse einer Person')
    'extroversion': fields.Boolean(attribute='_extroversion',
                            description='Zeigt an wie ob die Person extrovertiert ist'),
    'person_id': fields.Integer(attribute='_person_id',
                            description='ID einer Person')                         
})

learngroup = api.inherit('LearnGroup', nbo, {
    'participant': fields.Integer(attribute='_participant',
                           description='Teilnehmeranzahl einer Gruppe')
    'profile_id': fields.Integer(attribute='_profile_id',
                           description='ID eines Profils'),
    'learn_profile_id': fields.Integer(attribute='_learn_group_id',
                            description='ID eines Lernprofils'),
})

#BusinessObjekts

chat = api.inherit('Chat', bo, {
    'chat_id': fields.Integer(attribute='_chat_id',
                                 description='ID des Chats'),
    'is_accepted': fields.Boolean(attribute='_is_accepted',
                                description='Anfragestatus eines Chats'),  # richtig?
    'source_id': fields.Integer(attribute='_source_id',
                                 description='Absender der Nachricht'),
    'target_id': fields.Integer(attribute='_target_id',
                                 description='Empfänger der Nachricht'),
})

chatmessage = api.inherit('_ChatMessage', bo, {
    'text': fields.String(attribute='_text',
                            description= 'Inhalt der Nachricht'),
    'person_id': fields.Integer(attribute='_person_id',
                            description= 'Id einer Person'),
    'received': fields.Date(attribute= '_received',
                            description ='Datum der Ankunft einer Nachricht')
    'read': fields.Date(attribute= '_read',
                            description ='Nachricht gelesen oder nicht')
})