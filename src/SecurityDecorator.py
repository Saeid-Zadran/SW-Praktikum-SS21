from flask import request
from google.auth.transport import requests
import google.oauth2.id_token

from server.Administration import Administration


def secured(function):
    """Decorator zur Google Firebase-basierten Authentifizierung von Benutzern

    Da es sich bei diesem System um eine basale Fallstudie zu Lehrzwecken handelt, wurde hier
    bewusst auf ein ausgefeiltes Berechtigungskonzept verzichtet. Vielmehr soll dieses Decorator
    einen Weg aufzeigen, wie man technisch mit vertretbarem Aufwand in eine Authentifizierung
    einsteigen kann.

    POLICY: Die hier demonstrierte Policy ist, dass jeder, der einen durch Firebase akzeptierten
    Account besitzt, sich an diesem System anmelden kann. Bei jeder Anmeldung werden Klarname,
    Mail-Adresse sowie die Google User ID in unserem System gespeichert bzw. geupdated. Auf diese
    Weise könnte dann für eine Erweiterung des Systems auf jene Daten zurückgegriffen werden.
    """
    firebase_request_adapter = requests.Request()

    def wrapper(*args, **kwargs):
        # Verify Firebase auth.
        id_token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImRjNGQwMGJjM2NiZWE4YjU0NTMzMWQxZjFjOTZmZDRlNjdjNTFlODkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQmF5Ym9yYSBHw7xsZWMiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKd2psSFRoRlBaQTZWTkppMFlqSkFoNG5qZWNnSlphcXA1cmZaSF89czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3ctcHJha3Rpa3VtLXN0dWR5bWF0Y2giLCJhdWQiOiJzdy1wcmFrdGlrdW0tc3R1ZHltYXRjaCIsImF1dGhfdGltZSI6MTYyMzc5Mzg4NSwidXNlcl9pZCI6IkkzOVllVGFHYkVoM2ZDZU1GaWhMeDdtNDViWTIiLCJzdWIiOiJJMzlZZVRhR2JFaDNmQ2VNRmloTHg3bTQ1YlkyIiwiaWF0IjoxNjIzNzkzODg1LCJleHAiOjE2MjM3OTc0ODUsImVtYWlsIjoiYmF5Ym9yYWd1bGVjQGdvb2dsZW1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDM2NDg2NjMxOTgyMDgyMDExNjkiXSwiZW1haWwiOlsiYmF5Ym9yYWd1bGVjQGdvb2dsZW1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.CaDiLogtXyJm9d9gZ81wRb_E4KFc2qNklTI3Hq9L3I8BmiojLfhwJSnU4myxqa3pjDindQRfEjGtUpJhVzJ-3s4JaQIPgllmeu9xsb-6xRyLhONIEPmlzcAk8rSDQ7h8l41WP-FBXi-LN9X4xnET4B8HPtKZaa_5xmLvgRhIvCVmYwVz7wI2yasqEIf1fQxole2VkrL3M4OVaquyo1NIblElrdVqflSR9FCNqJM6S9u5mRmtF0vTrSYqVesRA-AmhZyDvwnJpLxNn7HlcH_VNKglWPVtRB4DXGXQ_qu9GLZPmjEhp1S7J3jSmOPFGwWxbA_UfstNJxS-76tWInkuAQ" #"request.cookies.get("token")"
        error_message = None
        claims = None
        objects = None
        #print("token",id_token)
        if id_token:
            try:
                
                # Verify the token against the Firebase Auth Api. This example
                # verifies the token on each page load. For improved performance,
                # some applications may wish to cache results in an encrypted
                # session store (see for instance
                # http://flask.pocoo.org/docs/1.0/quickstart/#sessions).
                claims = google.oauth2.id_token.verify_firebase_token(
                    id_token, firebase_request_adapter)

                if claims is not None:
                    adm = Administration()
                    name= claims.get("name")
                    google_user_id = claims.get("user_id")
                    email = claims.get("email")

                    person = adm.get_person_by_google_user_id(google_user_id)
                    if person is not None:
                        """Fall: Der Benutzer ist unserem System bereits bekannt.
                        Wir gehen davon aus, dass die google_user_id sich nicht ändert.
                        Wohl aber können sich der zugehörige Klarname (name) und die
                        E-Mail-Adresse ändern. Daher werden diese beiden Daten sicherheitshalber
                        in unserem System geupdated."""
                        person.set_google_mail(email)
                        person.set_name(name)
                        adm.save_person(person)
                    else:
                        """Fall: Der Benutzer war bislang noch nicht eingelogged. 
                        Wir legen daher ein neues User-Objekt an, um dieses ggf. später
                        nutzen zu können.
                        """
                        person = adm.create_person(name, google_user_id, email)

                    print(request.method, request.path, "angefragt durch:", name, email)

                    objects = function(*args, **kwargs)
                    return objects
                else:
                    return '', 401  # UNAUTHORIZED !!!
            except ValueError as exc:
                # This will be raised if the token is expired or any other
                # verification checks fail.
                error_message = str(exc)
                return exc, 401  # UNAUTHORIZED !!!

        return '', 401  # UNAUTHORIZED !!!

    return wrapper


