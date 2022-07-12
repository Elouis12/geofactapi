#USING GEO FACTS API


## 1. Get All Countries and Facts
    ex. https://geofactsapi.herokuapp.com/countries/
## 2. Get Facts by Specific Country
    ex. https://geofactsapi.herokuapp.com/countries/{COUNTRY_NAME}

## 3. Get Facts by Specific Country and Difficulty
    ex. https://geofactsapi.herokuapp.com/countries/{COUNTRY_NAME}/{DIFFICULTY}

## 4. Get Facts by Specific Country, Difficulty, and Amount
    ex. https://geofactsapi.herokuapp.com/countries/{COUNTRY_NAME}/{DIFFICULTY}/{AMOUNT_TO_RETURN}






#UPLOADING TO HEROKU

1. Download the CLI [here](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli)
2. open CMD line
3. run command | $ heroku login
4. run command | $ heroku git:remote -a <app name>
5. open GIT BASH to project folder
6. run command | $ git remote add heroku <heroku's app git> <branch>
6. run command | $ git add .
7. run command | $ git commit -am "message"
7. run command | $ git push heroku master "message"