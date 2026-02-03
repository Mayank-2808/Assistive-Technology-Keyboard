# Assisted Tech Keyboard (ATK)

An interactive on-screen keyboard designed to assist individuals with limited mobility or accessibility needs. ATK harnesses text prediction and voice synthesis among other features to simplify and enhance user communication.

## Table of Contents

1. [Demo](#demo)

2. [Installation](#installation)

3. [Reproducing this project](#repro)

4. [Guidance](#guide)

<a name="demo"></a>

## 1. Example demo

[![YouTube](http://i.ytimg.com/vi/9szoGxr0egY/hqdefault.jpg)](https://www.youtube.com/watch?v=9szoGxr0egY)

### What to find where

Explain briefly what files are found where

```bash
Assistive-Technology-Keyboard
├── client                       ## client-side code (React.js)
    ├── public                   ## base HTML file, app metadata (favicon, logo, etc.)
    ├── src                      ## client-side source code
        ├── assets               ## static assets (images, wav files for different keys)
        ├── components           ## React components for the keyboard, output, autocomplete, etc.
        ├── services/restApi.js  ## Helper functions to call the server API
        ├── index.js             ## React app entry point
    ├── package.json             ## npm (javascript) package dependencies
├── server                       ## server-side code
    ├── flaskr                   ## server-side source code
        ├── services             ## services for autocorrect, prediction, etc.  
        ├── views.py             ## API endpoint definitions
    ├── app.py                   ## Flask app entry point
    ├── requirements.txt         ## python package dependencies
    ├── words.txt                ## list of words for autocorrect
    ├── sample.env               ## sample environment variable file
├── README.md                    ## You are here
```
Other files/folders not mentioned here can be safely ignored.

<a name="installation"></a>

## 2. Installation

Provide sufficient instructions to reproduce and install your project.
Provide _exact_ versions, test on CSIL or reference workstations.

Ensure you have python 3.8+ and Node.js 16+ installed.
-   Python 3.8+ (https://www.python.org/downloads/)
    - Check with `python3 --version`
-   Node.js 16+ (https://nodejs.org/en/download/)
    - Check with `node --version`


1. Clone the repository
    1. `git clone https://github.com/sfu-cmpt340/2025_1_project_09.git`
    2. `cd 2025_1_project_09`
2. Setup server (from the root project directory)
    1. `cd server`
    2. `python3 -m venv venv`
    3. `source venv/bin/activate`
    4. `pip install -r requirements.txt`
    5. `export FLASK_APP=app.py`
3. Setup client (from the root project directory)
    1. `cd client`
    2. `npm install`

Project dependencies can be found in `server/requirements.txt` and `client/package.json` for the requirements of the server and client respectively.

<a name="repro"></a>

## 3. Reproduction

Demonstrate how your work can be reproduced, e.g. the results in your report.

Make sure all steps in [installation](#installation) are followed before proceeding.

Note: You will need to set up your Google Generative AI API key in a `.env` file to use the autocorrect feature. You can do this by creating a `.env` file in the `server` directory and adding your API key. See `server/sample.env` for an example of how to set up your `.env` file.

1. Run the server
    1. `cd server`
    2. `python -m flask run`
2. Run the client (from a new terminal)
    1. `cd client`
    2. `npm start`

Navigate to http://localhost:3000 in your browser to view the application.

<a name="guide"></a>

## 4. Guidance

-   Use [git](https://git-scm.com/book/en/v2)
    -   Do NOT use history re-editing (rebase)
    -   Commit messages should be informative:
        -   No: 'this should fix it', 'bump' commit messages
        -   Yes: 'Resolve invalid API call in updating X'
    -   Do NOT include IDE folders (.idea), or hidden files. Update your .gitignore where needed.
    -   Do NOT use the repository to upload data
-   Use [VSCode](https://code.visualstudio.com/) or a similarly powerful IDE
-   Use [Copilot for free](https://dev.to/twizelissa/how-to-enable-github-copilot-for-free-as-student-4kal)
-   Sign up for [GitHub Education](https://educa
