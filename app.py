from boggle import Boggle
from flask import Flask,render_template,flash,session





app=Flask(__name__)
app.secret_key='bogglemebonkers'

@app.route('/')

def start_bogle():
    '''instantiates an instance of Boggle and creates a game board'''
    game = Boggle()
    board=game.make_board()
    session['key']=board
    msg=flash('Play Boggle')
    return render_template('board.html',game=game,board=board,messages=msg)



