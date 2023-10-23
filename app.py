from boggle import Boggle
from flask import Flask,render_template,flash,session,request,redirect



game = Boggle()

app=Flask(__name__)
app.secret_key='bogglemebonkers'
app.static_folder = 'static'

@app.route('/')
def start_game():

    return render_template('start.html')


@app.route('/make_board')
def start_bogle():
    '''instantiates an instance of Boggle and creates a game board'''

    board=game.make_board()
    session['key']=board
    msg=flash('Play Boggle')
    return render_template('board.html',game=game,board=board,messages=msg)

@app.route('/get_input/',methods=['POST'])
def get_input():
    guess = request.json.get("word")
    session['guess'] = guess
    print(f'{guess} sent to the backend')


    return guess

