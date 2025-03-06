from app import app

@app.route('/')
def index():
    print("views.py has been imported!")
    return 'Hello World!'