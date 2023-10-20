from boggle import Boggle
from flask import Flask,render_template,flash,session



app=Flask(__name__)

@app.route('/')
def start_bogle():
    game = Boggle()
    board=game.make_board()

    return render_template('board.html',game=game,board=board)



