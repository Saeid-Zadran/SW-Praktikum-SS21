from server.bo.Person import Person
from server.bo.Chat import Chat
from server.bo.ChatMessage import ChatMessage
from server.bo.LearnProfile import LearnProfile
from server.bo.Profile import Profile
from server.bo.Suggestion import Suggestion
from server.bo.LearnGroup import LearnGroup


#from server.db.PersonMapper import PersonMapper
#from server.db.ChatMapper import ChatMapper
#from server.db.ChatMessageMapper import ChatMessageMapper
from server.db.PersonMapper import PersonMapper
from server.db.ProfileMapper import ProfileMapper
#from server.db.SuggestionMapper import SuggestionMapper
#from server.bo.LearnGroupMapper import LearnGroupMapper







class Administration(object):

    def __init__(self):
        pass

    """person-spezifische Methoden"""

    def create_person(self, google_mail, google_user_id):
        """Eine Person anlegen"""
        p = Person()
        p.set_id(1)
        p.set_google_mail(google_mail)
        p.set_google_user_id(google_user_id)


        with PersonMapper() as mapper:
            return mapper.insert(p)



    def get_person_by_id(self, id):
        """Die Person mit der gegebenen ID auslesen."""
        with PersonMapper() as mapper:
            return mapper.find_by_id(id)


    def get_person_by_google_user_id(self, google_id):
        """Die Person mit der gegebenen Google ID auslesen."""
        with PersonMapper() as mapper:
            return mapper.find_by_google_user_id(google_id)

    def get_person_by_google_mail(self, google_mail):
        """Die Person mit der gegebenen Google ID auslesen."""
        with PersonMapper() as mapper:
            return mapper.find_by_email(google_mail)

    def get_all_persons(self):
        """Alle Personen auslesen."""
        with PersonMapper() as mapper:
            return mapper.find_all()

    def save_person(self, p):
        """Die gegebene Person speichern."""
        with PersonMapper() as mapper:
            return mapper.update(p)


    def delete_person(self, person):
        """Die gegebenen Person aus unserem System löschen."""
        with PersonMapper() as mapper:
            mapper.delete(person)



    def create_profile(self, age , adress, semester,degree_course):
        """Ein Modul anlegen"""
        profile = Profile()
        profile.set_age(age)
        profile.set_adress(adress)
        profile.set_semester(semester)
        profile.set_degree_course(degree_course)
        profile.set_id(1)

        with ProfileMapper() as mapper:
            return mapper.insert(profile)

    def get_all_profiles(self):
        with ProfileMapper() as mapper:
            return mapper.find_all()

    def save_profile(self, id):
        """das gebebene Profil speichern."""
        with ProfileMapper() as mapper:
            return mapper.update(id)


    def delete_profile(self, p):

        with ProfileMapper() as mapper:
            mapper.delete(p)


    def get_profile_by_id(self, id):
        with ProfileMapper() as mapper:
            return mapper.find_by_id(id)

    def create_learn_profile(self, study_status, frequency, prev_knowledge, extroversion, person_id):
        """Ein Modul anlegen"""
        learn_profile = Profile()
        learn_profile.set_study_status(study_status)
        learn_profile.set_frequency(frequency)
        learn_profile.set_prev_knowledge(prev_knowledge)
        learn_profile.set_extroversion(extroversion)
        learn_profile.set_person_id(person_id)
        learn_profile.set_id(1)

        with ProfileMapper() as mapper:
            return mapper.insert(learn_profile)






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
            return mapper.insert_google_user(p)

    """User speichern"""
    def save_user(self, user):
        """Den gegebenen Benutzer speichern."""
        with PersonMapper() as mapper:
            mapper.update_google_user(user)



