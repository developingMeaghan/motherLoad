# MotherLoad


The focuse of this app is to provide accesible and easy to understand knowledge around building a PC. Looking at the parts themselves and tips, tutorials and any relevant articles. But also having a place where people can share what they have learnt in their build journey.


## Setup

Run the following commands in your terminal:

```sh
npm install
npx knex migrate:latest
npx knex seed:run
```

To run in development:
```sh
npm run dev
```

To run in production:
```sh
npm start
```

## Incoming features and patches June 2019

* Looking into Heroku to get it 100% live. Currently it isn't showing any data from the database. 
* Adding more features for a registered user. Such as: Being able to comment on tips and tutorials, up voting on comments, suggesting articles/edits etc.
* Adding an admin feature to edit tips. Making room for potential features.
* Face-lift.

## The Tech

* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/)
* [Express](https://expressjs.com/en/api.html)
* [Knex.js (SQL)](https://knexjs.org/)
* [JWT Auth (Local)](https://jwt.io/)


## User Stories

### MVP(Completed!)

As a non-registered user: 
  * I want to register for the App under my name.
  * I want to browse tips, tutorials, articles and other knowledge.
  * I ant to be able to filter tips, tutorials and articles by pc parts or general knowledge.
  * I want to have access to information that matches my knowledge.
  * I want access to tools to build my pc and ask for more advanced help.

As a registered user:
  * I want to save tips, tutorials to find them again easily.
  * Be able to post tweets of advice (tips/tutorials).

### Stretch (Completed!)

As a registered user:
  * Have forum where I can ask for help, advice or trouble shoot and have people respond.

  ---

## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | Login | View for user to enter their login credentials |
  | Register | View for user to sign up for the App |
  | Tips | View all the tips |
  | Tutorials| View all recommended tutorials |
  | Articles | View relevant articles |
  | PcParts | View all the info on pc parts |
  | AdviceForm | For a User to add a tip or tutorial |
  


## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |
  | tips | Store the array of tips (from db) |
  | articles | Store the array of articles (from db) |
  | tutorials | Store the array of tutorials (from db) |


## Actions (Client Side)

  | type | data | purpose |
  | --- | --- | --- |
  | GET_TIP | tips | For retreving the tips from the server response |
  | GET_TUTORIAL | tutorials | For retreving the tutorials from the server response |
  | GET_ARTICLES | articles | For retreving the articles from the server response |
  | ADD_TIP | tips | For adding a tip to the client store after is had been added to the db |
  | ADD_TUTROIAL | tutorial | For adding a tutorial to the client store after is had been added to the db |


## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token |
| Get | /api/resource/tip | No | Get the list of tips | Array of Objects (object = A Tip) |
| Get | /api/resource/tutorial| No | Get the list of tutorials | Array of Objects (object = A Tutorial) |
| Get | /api/resource/article| No | Get the list of articles | Array of Objects (object = An Article) |
| Post | /api/addTip | Yes | Add a tip to the db | Your tip was added (as an object) |
| Post | /api/addTutorial | Yes | Add a tutorial to the db | Your tutorial has been added (as an object) |

## DB (Server Side) -

### Resources
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each lost animal |
  | title | String | Name of tip |
  | description | String | The information |
  | type | string | the type of resource |
  | source_url | string | link to resource if applicable |


### category
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each found animal |
  | name | String | Different parts of pc |

### categorise_posts (Join Table M2M)

  Many Users to Many posts

 | Column Name | Data Type | Purpose |
 | --- | --- | --- |
 | id | Integer | Unique identifier for each user |
 | category_id | Integer | takes category.id |
 | posts_id | Integer | takes posts.id |

### Users (Join Table M2M)

  Many Users to Many

 | Column Name | Data Type | Purpose |
 | --- | --- | --- |
 | id | Integer | Unique identifier for each user |
 | user_name | string | Used for login |
 | contact_details | string | displayed for contact information |
 | email_address | string | displayed for contact information |
 | hash | text | hashed login password |
 ---


## WireFrames
These are the wireframes. the login and register pages are on the Home wireframe and then form to add a tip or tutorial is on the resource wireframe.

## Home Page
![Home Page](Images/Home_WireFrame.png)

## Resources
![Resources](Images/Resource_WireFrame.png)
![Resources](Images/CloseUp_Resource_WireFrame.png)

## Close Ups
![Resources](Images/AddTip_WireFrame.png)
![Resources](Images/NotLoggedIn_WireFrame.png)

## Articles
![Article](Images/Article_WireFrame.png)

## PC Parts
![PC Parts](Images/PcPart_WireFrame.png)

## Colors & Fonts


![Color](Images/pallete1.png)![Color](Images/pallete2.png)![Color](Images/pallete3.png)


Possible color palletes for the website.


![Header](Images/HeaderFont.png)![Body](Images/BodyFont.png)

