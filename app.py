from boggle import Boggle
from flask import Flask, render_template, flash, session, request, redirect,jsonify


app = Flask(__name__)
app.secret_key = 'bogglemebonkers'
app.static_folder = 'static'
game = Boggle()


@app.route('/')
def start_game():

    return render_template('start.html')


@app.route('/make_board')
def start_bogle():
    '''creates a game board'''

    board = game.make_board()
    session['key'] = board
    msg = flash('Play Boggle')
    return render_template('board.html', game=game, board=board, messages=msg)


@app.route('/get_input/', methods=['POST'])
def get_input():
    guess = request.json.get("word")
    session['guess'] = guess
    print(f'{guess} sent to the backend')
    board = session['key']
    is_valid = game.check_valid_word(board, guess)

    if is_valid == 'ok':
        print(f'word is valid status: {is_valid}')
    else:
        print( f'word is invalid status: {is_valid}')
    return jsonify(is_valid=is_valid)


