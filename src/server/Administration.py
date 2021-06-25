from server.bo.Person import Person
from server.bo.Chat import Chat
from server.bo.ChatMessage import ChatMessage
from server.bo.LearnProfile import LearnProfile
from server.bo.Profile import Profile
from server.bo.Suggestion import Suggestion
from server.bo.LearnGroup import LearnGroup
from server.bo.GroupRequest import GroupRequest



from server.db.ChatMapper import ChatMapper
from server.db.ChatMessageMapper import ChatMessageMapper
from server.db.PersonMapper import PersonMapper
from server.db.ProfileMapper import ProfileMapper
from server.db.SuggestionMapper import SuggestionMapper
from server.db.LearnGroupMapper import LearnGroupMapper
from server.db.LearnProfileMapper import LearnProfileMapper
from server.db.GroupRequestMapper import GroupRequestMapper







class Administration(object):

    def __init__(self):
        pass

    """Person-Spezifische Methoden"""

    def create_person(self, name, google_user_id, google_mail):
        """Eine Person anlegen"""
        person = Person()
        person.set_name(name)
        person.set_google_user_id(google_user_id)
        person.set_google_mail(google_mail)

        with PersonMapper() as mapper:
            return mapper.insert(person)



    def get_person_by_id(self, id):
        """Die Person mit der gegebenen ID auslesen."""
        with PersonMapper() as mapper:
            return mapper.find_by_key(id)


    def check_if_person_exists(self, uid):
        """Überprüfe erst ob dieser Account schon angelegt ist """
        check = self.get_person_by_id(uid)
        if check != True:
            """Schreibe den neuen User in die Datenbank"""
        return check 
        

    def get_person_by_google_user_id(self,google_user_id):
        """Die Person mit der gegebenen Google ID auslesen."""
        with PersonMapper() as mapper:
            return mapper.find_by_google_user_id(google_user_id)

    def get_person_by_google_mail(self, google_mail):
        """Die Person mit der gegebenen Google ID auslesen."""
        with PersonMapper() as mapper:
            return mapper.find_by_email(google_mail)

    def get_all_persons(self):
        """Alle Personen auslesen."""
        with PersonMapper() as mapper:
            return mapper.find_all()

    def save_person(self, person):
        """Die gegebene Person speichern."""
        with PersonMapper() as mapper:
            return mapper.update(person)
    
    def save_person(self, person):
        """Den gegebenen Benutzer speichern."""
        with PersonMapper() as mapper:
            mapper.update_google_user(person)


    def delete_person(self, person):
        """Die gegebenen Person aus unserem System löschen."""
        with PersonMapper() as mapper:
            mapper.delete(person)


    def create_profile(self, age, name, adress, semester,degree_course,person_id):
        """Ein Profil anlegen"""

        profile = Profile()
        profile.set_age(age)
        profile.set_name(name)
        profile.set_adress(adress)
        profile.set_semester(semester)
        profile.set_degree_course(degree_course)
        profile.set_person_id(person_id)
        profile.set_id(1)
   

       

        with ProfileMapper() as mapper:
            return mapper.insert(profile)

    def get_all_profiles(self):
        with ProfileMapper() as mapper:
            return mapper.find_all()

    def save_profile(self,profile):
        """das gebebene Profil speichern."""
        with ProfileMapper() as mapper:
            return mapper.update(profile)


    def delete_profile(self, profile):

        with ProfileMapper() as mapper:
            mapper.delete(profile)


    def get_profile_by_id(self, id):
        with ProfileMapper() as mapper:
            return mapper.find_by_key(id)
     
    def get_profile_by_person_id(self,person_id):
        """Das Profil mit dem Fremschlüssel person_id auslesen."""
        with ProfileMapper() as mapper:
            return mapper.find_by_person_id(person_id)

    def create_learnprofile(self,creation_time, study_status, frequency, prev_knowledge, group_size,extroversion, person_id):
        """Ein lernprofil anlegen"""
        learnprofile = LearnProfile()
        learnprofile.set_creation_time(creation_time)
        learnprofile.set_study_status(study_status)
        learnprofile.set_frequency(frequency)
        learnprofile.set_prev_knowledge(prev_knowledge)
        learnprofile.set_group_size(group_size)
        learnprofile.set_extroversion(extroversion)
        learnprofile.set_person_id(person_id)
        learnprofile.set_id(1)

        with LearnProfileMapper() as mapper:
            return mapper.insert(learnprofile)
    
    def get_learnprofile_person_id(self,person_id):
        """Die Person mit der person_id auslesen."""
        with LearnProfileMapper() as mapper:
            return mapper.find_by_person(person_id)


    def get_all_learnprofiles(self):
        with LearnProfileMapper() as mapper:
            return mapper.find_all()

    def save_learnprofile(self,learnprofile):
        with LearnProfileMapper() as mapper:
            return mapper.update(learnprofile)

    def get_learnprofile_by_id(self, id):
        with LearnProfileMapper() as mapper:
            return mapper.find_by_key(id)

    def delete_learnprofile(self,learnprofile):
        with LearnProfileMapper() as mapper:
            mapper.delete(learnprofile)

    def create_suggestion(self, person_id, learn_group_id):
        """Ein Vorschlag anlegen"""
        suggestion = Suggestion()
        suggestion.set_person_id(person_id)
        suggestion.set_learn_group_id(learn_group_id)
        suggestion.set_id(1)


        with SuggestionMapper() as mapper:
            return mapper.insert(suggestion)

    def save_suggestion(self,suggestion):
        """den gebebene Vorschlag speichern."""
        with SuggestionMapper() as mapper:
            return mapper.update(suggestion)

    def get_all_suggestions(self):
        with SuggestionMapper() as mapper:
            return mapper.find_all()

    def get_suggestion_by_id(self, id):
        with SuggestionMapper() as mapper:
            return mapper.find_by_key(id)

    def delete_suggestion(self, suggestion):

        with SuggestionMapper() as mapper:
            mapper.delete(suggestion)
    def get_suggestion_by_person_id(self,person_id):
        
        with SuggestionMapper() as mapper:
            return mapper.find_by_person_id(person_id)




    def get_all_chats(self):
        """Auslesen aller Chats"""
        with ChatMapper() as mapper:
            return mapper.find_all()

    def create_chat(self, learngroup_id, is_accepted,sender, message):
        chat = Chat()
        chat.set_learngroup_id(learngroup_id)
        chat.set_is_accepted(is_accepted)
        chat.set_sender(sender)
        chat.set_message(message)
        chat.set_id(1) # Warum 0? 1 Richtig?

        with ChatMapper() as mapper:
            return mapper.insert(chat)

    def save_chat(self,chat):
        with ChatMapper() as mapper:
            return mapper.update(chat)

    def get_chat_by_id(self, id):
        with ChatMapper() as mapper:
            return mapper.find_by_key(id)

    def get_chat_by_learngroup_id(self,learngroup_id):
        with ChatMapper() as mapper:
            return mapper.find_by_learngroup(learngroup_id)



    def delete_chat(self,chat):
        with ChatMapper() as mapper:
            mapper.delete(chat)


    def get_all_chatmessages(self):
        with ChatMessageMapper() as mapper:
            return mapper.find_all()

    def create_chatmessage(self, text,chat_id, person_id):
        chatmessage = ChatMessage()
        chatmessage.set_text(text)
        chatmessage.set_chat_id(chat_id)
        chatmessage.set_person_id(person_id)
        

        with ChatMessageMapper() as mapper:
            return mapper.insert(chatmessage)

    def save_chatmessage(self,chatmessage):
        with ChatMessageMapper() as mapper:
            return mapper.update(chatmessage)

    def get_chatmessage_by_id(self, id):
        with ChatMessageMapper() as mapper:
            return mapper.find_by_key(id)

    def delete_chatmessage(self,chatmessage):
        with ChatMessageMapper() as mapper:
            mapper.delete(chatmessage)


    def create_learngroup(self,creation_time,name,person_id):
        """Eine Lerngruppe anlegen"""
        learngroup = LearnGroup()
        learngroup.set_creation_time(creation_time)
        learngroup.set_name(name)
        learngroup.set_person_id(person_id)
        learngroup.set_id(1)

        with LearnGroupMapper() as mapper:
            return mapper.insert(learngroup)

    def get_all_learngroups(self):
        with LearnGroupMapper() as mapper:
            return mapper.find_all()


    def save_learngroup(self,learngroup):
        with LearnGroupMapper() as mapper:
            return mapper.update(learngroup)

    def get_learngroup_by_id(self, id):
        with LearnGroupMapper() as mapper:

            return mapper.find_by_key(id)

    def delete_learngroup(self,learngroup):
        with LearnGroupMapper() as mapper:
            mapper.delete(learngroup)
    
    def get_learngroup_by_person_id(self,person_id):
        """Die lerngruppe mit der person_id auslesen."""
        with LearnGroupMapper() as mapper:
            return mapper.find_by_person(person_id)

    """GroupRequest-Methoden"""

    def create_grouprequest(self,creation_time, learngroup_id ,is_accepted,person_id):
        grouprequest = GroupRequest()
        grouprequest.set_creation_time(creation_time)
        grouprequest.set_learngroup_id(learngroup_id)
        grouprequest.set_is_accepted(is_accepted)
        grouprequest.set_person_id(person_id)
        grouprequest.set_id(1)

        with GroupRequestMapper() as mapper:
            return mapper.insert(grouprequest)
    
    def get_all_grouprequests(self):
        with GroupRequestMapper() as mapper:
            return mapper.find_all()

    def save_grouprequest(self, grouprequest):
        with GroupRequestMapper() as mapper:
            mapper.update(grouprequest)

    def delete_grouprequest(self, grouprequest):
  
        with GroupRequestMapper() as mapper:
            mapper.delete(grouprequest)

    def get_grouprequest_by_id(self,id):
        with GroupRequestMapper() as mapper:
            return mapper.find_by_key(id)
    
    def get_grouprequest_by_learngroup_id(self, learngroup_id):
        with GroupRequestMapper() as mapper:
            return mapper.find_all_grouprequests_by_learngroup_id(learngroup_id)

    def get_grouprequests_by_is_accepted(self, is_accepted):
        with GroupRequestMapper() as mapper:
            return mapper.find_all_group_grouprequests_is_accepted(is_accepted)

    def get_grouprequests_person_id(self, person_id):
        with GroupRequestMapper() as mapper:
            return mapper.find_all_group_grouprequests_person_id(person_id)
   



    #def get_learn_profile_by_person_id(self, person_id):
       #with LearnProfileMapper() as mapper:
          # return mapper.find_by_person_id(person_id)

    #def match(self, profile_id_a, profile_id__b):
        #beide profile aus der Datebank holen
        #get_learn_profile_by_id
        #learnprofile_frequency von profil a mit profil b vergleichen
        #frequency felder vergleichen, jede überinstimmung eine 1 zurückgeben

        #count= 0
        #total = 4

        #if afreqquenc == bfrequency:

            #count++

        #...
        #return count/total*100



   #def get_learn_profile_by_matching(self,):


    





