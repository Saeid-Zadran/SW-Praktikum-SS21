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

    def create_person(self, first_name, last_name, google_user_id, google_mail):
        """Eine Person anlegen"""
        person = Person()
        person.set_first_name(first_name)
        person.set_last_name(last_name)
        person.set_google_user_id(google_user_id)
        person.set_google_mail(google_mail)


        adm = ProjectAdministration()
        person_exists = adm.get_person_by_google_id(google_id)

        if person_exists is not None:
            adm.save_person(person)
        else:
            with PersonMapper() as mapper:
                return mapper.insert(person)



    def get_person_by_id(self, id):
        """Die Person mit der gegebenen ID auslesen."""
        with PersonMapper() as mapper:
            return mapper.find_by_key(id)


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


    def delete_person(self, person):
        """Die gegebenen Person aus unserem System löschen."""
        with PersonMapper() as mapper:
            mapper.delete(person)



    def create_profile(self, age, name, adress, semester,degree_course,preferences,person_id):
        """Ein Profil anlegen"""
        profile = Profile()
        profile.set_age(age)
        profile.set_name(name)
        profile.set_adress(adress)
        profile.set_semester(semester)
        profile.set_degree_course(degree_course)
        profile.set_preferences(preferences)
        profile.set_person_id(person_id)

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

    def create_learnprofile(self,creation_time, study_status, frequency, prev_knowledge, group_size,extroversion, profile_id):
        """Ein lernprofil anlegen"""
        learnprofile = LearnProfile()
        learnprofile.set_creation_time(creation_time)
        learnprofile.set_study_status(study_status)
        learnprofile.set_frequency(frequency)
        learnprofile.set_prev_knowledge(prev_knowledge)
        learnprofile.set_group_size(group_size)
        learnprofile.set_extroversion(extroversion)
        learnprofile.set_profile_id(profile_id)
        learnprofile.set_id(1)

        with LearnProfileMapper() as mapper:
            return mapper.insert(learnprofile)


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

    def create_chat(self, source_id, target_id, is_accepted):
        chat = Chat()
        chat.set_source_id(source_id)
        chat.set_target_id(target_id)
        chat.set_is_accepted(is_accepted)
        chat.set_id(0)

        with ChatMapper() as mapper:
            return mapper.insert(chat)

    def save_chat(self,chat):
        with ChatMapper() as mapper:
            return mapper.update(chat)

    def get_chat_by_id(self, id):
        with ChatMapper() as mapper:
            return mapper.find_by_key(id)

    def delete_chat(self,chat):
        with ChatMapper() as mapper:
            mapper.delete(chat)


    def get_all_chatmessages(self):
        with ChatMessageMapper() as mapper:
            return mapper.find_all()

    def create_chatmessage(self, text, person_id, received):
        chatmessage = ChatMessage()
        chatmessage.set_text(text)
        chatmessage.set_person_id(person_id)
        chatmessage.set_received(received)

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


    def create_learngroup(self,creation_time,name, participant, profile_id,learn_profile_id):
        """Eine Lerngruppe anlegen"""
        learngroup = LearnGroup()
        learngroup.set_creation_time(creation_time)
        learngroup.set_name(name)
        learngroup.set_participant(participant)
        learngroup.set_profile_id(profile_id)
        learngroup.set_learn_profile_id(learn_profile_id)
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

    """GroupRequest-Methoden"""

    def create_grouprequest(self,learngroup_id ,source_id,target_id, is_accepted,):
        grouprequest = GroupRequest()
        grouprequest.set_source_id(source_id)
        grouprequest.set_target_id(target_id)
        grouprequest.set_learngroup_id(learngroup_id)
        grouprequest.set_is_accepted(is_accepted)
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
    
    def get_grouprequest_by_learn_group_id(self, learngroup_id):
        with GroupRequestMapper() as mapper:
            return mapper.find_all_grouprequests_by_LearnGroup(learngroup_id)

    def get_grouprequests_by_source_id(self, source_id):
        with GroupRequestMapper() as mapper:
            return mapper.find_all_group_grouprequests_by_source_id(source_id)

    def get_grouprequests_by_target_id(self, target_id):
        with GroupRequestMapper() as mapper:
            return mapper.find_all_group_grouprequests_by_target_id(target_id)




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


    """User erstellt"""

    def create_user(self, name, email, google_user_id):
        p = Person()
        p.set_id(1)
        p.set_name(name)
        p.set_email(email)
        p.set_google_user_id(google_user_id)
        with PersonMapper() as mapper:
            return mapper.insert_google_user_id(p)

    """user speichern"""
    def save_user(self, id):
        """Den gegebenen Benutzer speichern."""
        with PersonMapper() as mapper:
            mapper.update_google_user_id(id)

    





