from flask import Flask
from flask import render_template


app = Flask(__name__)


@app.route('/')
def home_page():
    return render_template('home.html')


@app.route('/contact')
def contact_page():
    return render_template('contact.html')


@app.route('/about_us')
def about_us_page():
    return render_template('about_us.html')


if __name__ == '__main__':
    app.run(debug=True)
