#!/usr/bin/env python

import os
import re
from google.appengine.ext import db
from string import letters

import jinja2
import webapp2

template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir), autoescape = True)

class Posts(db.Model):
     title = db.StringProperty(required = True)
     imageurl = db.StringProperty(required = True)
     content = db.TextProperty( required = True)
     author = db.StringProperty(required = True)
     created = db.DateTimeProperty(auto_now_add = True)
     last_modified = db.DateTimeProperty(auto_now = True)
     likes = db.IntegerProperty(required = True)


class Handler(webapp2.RequestHandler):
    def write(self, *a, **kw):
        self.response.out.write(*a, **kw)

    def render_str(self, template, **params):
        t = jinja_env.get_template(template)
        return t.render(params)

    def render(self, template, **kw):
        self.write(self.render_str(template, **kw))


# regex expressions to check for validations
USER_RE = re.compile(r"^[a-zA-Z0-9_-]{1,10}$")
def valid_username(username):
    return username and USER_RE.match(username)

EMAIL_RE  = re.compile(r'^[\S]+@[\S]+\.[\S]+$')
def valid_email(email):
    return not email or EMAIL_RE.match(email)

#handler to manage signup page
class Signup(Handler):
    def get(self):
        self.render("signup.html")

    def post(self):
        username = self.request.get("username")
        email = self.request.get("email")
        password = self.request.get("password")
        verify_password = self.request.get("verify_password")
        params = dict()
        params['username'] = username
        params['email'] = email
        params['password'] = password


        # server side validations
        # for required values
        if (username == "" or password == "" or verify_password==""):
            params['error'] =  "Required Fields can't be Empty"
            self.render("signup.html", **params)

        # for valid username
        if not valid_username(username):
            params['error'] = "That's not a valid username."
            self.render("signup.html", **params)

        # for valid email
        if email !="" and not valid_email(email):
            params['error'] = "That's not a valid email."
            self.render("signup.html", **params)

        # for password
        if password != verify_password and password != "" and verify_password != "":
            params['error'] = "Your passwords didn't match."
            self.render("signup.html", **params)

        self.write("You have sucessfully signedup :)")


class Login(Handler):
    def get(self):
        self.render("login.html")

    def post(self):
        username = self.request.get("username")
        password = self.request.get("passwd")
        self.write("You have sucessfully logged in")

class MainPage(Handler):

    def get(self):
        self.render("post.html")


app = webapp2.WSGIApplication([
    ('/', MainPage),
    ('/signup', Signup),
    ('/login', Login)
], debug=True)
