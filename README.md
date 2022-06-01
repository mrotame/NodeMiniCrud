# NodeMiniCrud

Welcome to the Node Mini Crud Project.
This project was developed for a job interview, you are free to use this project as an example of how to use AXIOS and EXPRESS.

## Getting Started

First, install all the dependencies from *package.json*.

```
npm install
```

After that, you can start the application.

```
npm run dev
```
or
```
npm run start
```

## Setting the configs

There are some basic configs you should do before starting making the requests.

### Database Config

At *src/config/database.js* you may change the presets to meet your database settings.

```
dialect: database_type, # ex: 'mysql', 'postgresql'
host: 'host_uri', # ex: 'localhost', 'myurl.com/db'
username: 'database_username', # ex: 'admin', 'paul_32
password: 'database_password', # ex: 'admin', '12sfbA4551GD
database: 'database_name', # ex: 'my_application_db'
```

### API Config

At *src/config/apiSettings.js* you may change the presets to meet the API you are trying to make a request.

```
 endpoint : "api_url", # ex: 'https://url.com/api"
 token: "random_key" # ex: "KFHV5jUPMk25T"
```

## Making Requests

Right now, this application has two endpoints, within a total of three requests.

### Home Endpoint

The index of the application receives two HTTP methods:

#### GET

This method takes no parameter.
By requesting to *localhost:3000/* (index of the page) with the GET method, you will be able to retrieve all data inserted into the local DB.

#### POST

This method takes no parameter.
By requesting to *localhost:3000/* (index of the page) with the POST method, the application will scan the API defined in the *API CONFIG*, and store all the data found inside the local DB

### Users endpoint

#### POST

By requesting to *localhost:3000/users* with the correct parameters, you will be able to manually insert a row into the local DB

Parameters:
  * "Content-Type": "application/json"
  * "id": INTEGER
  * "ref_id": STRING
  * "twitch_user_id": STRING
  * "login": STRING
  * "display_name": STRING
  * "type": STRING
  * "broadcast_type": STRING
  * "description": STRING,
  * "profile_image_url": STRING
  * "offline_image_url": STRING
  * "view_count": INTEGER
  * "channel_created_at": DATE_STRING
