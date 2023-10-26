from unittest import TestCase
from app import app
from flask import session
from boggle import Boggle



class FlaskTests(TestCase):
    def test_start_game(self):
        with app.test_client() as client:
            res=client.get('/')
            html=res.get_data(as_text=True)

            self.assertEqual(res.status_code,200)
            self.assertIn('<h1>Boggle Game</h1>',html)

    def test_make_board(self):
        with app.test_client() as client:
            res=client.get('/make_board')
            html=res.get_data(as_text=True)

            self.assertEqual(res.status_code,200)
            self.assertIn('<p>Word: <span id="word"></span></p>',html)

    def test_input_board(self):
        with app.test_client() as client:
            res=client.post('/get_input/',data={'a':'ok'})


            self.assertEqual(res.status_code,415)





