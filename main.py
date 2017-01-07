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


class Signup(Handler):
    def get(self):
        self.render("signup.html")

    def post(self):
        username = self.request.get("username")
        email = self.request.get("email")
        password = self.request.get("password")
        verify_password = self.request.get("verify_password")
        self.write("hello")

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
