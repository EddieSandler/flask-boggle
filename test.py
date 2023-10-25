from unittest import TestCase
from app import app
from flask import session
from boggle import Boggle


class FlaskTests(TestCase):

    # TODO -- write tests for every view function / feature!


    def test_start_game(self):
        with app.test_client() as client:
            import pdb
            pdb.set_trace()

    

   