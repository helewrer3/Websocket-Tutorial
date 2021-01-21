# Web Socket Tutorial

## About
A learning project about web socket technology using [Socket.io](https://www.npmjs.com/package/socket.io) and [NodeJS](https://nodejs.org/en/).

## Usage
Firstly when the app is run, the user is made to fill a username and a password field. \
If the username has not been registered in the server, an account is made with the provided fields and the user is then allowed to log-in. \
If the username has already been registered in the server, then the server checks whether the given password is correct or not, if it is, then the user is allowed to log-in otherwise an alert is generated asking the user to enter details again. \
After a successful log-in, the user can do the following things -> 
+ Send a message to every user using the webapp at that moment.
+ Send a message to a particular user.
+ Read all the messages directed at them.

## Deploying Locally
Clone the repo and run the following commands at the root of the project.
```
npm i
node index
```

## Dependencies
A running [NodeJS](https://nodejs.org/en/) environment is necessary for the project to be deployed locally.

## Expandability
A front-end framework can be utilised to make the whole process appealing to the eyes of the user.