## Simple Chat Application.
#### Tools / Tech used
    * Mocha      (test)
    * React      (view)
    * Redux      (frontend state sync)
    * Socket.IO  (websocket / data transport)
    * Express    (server / HTTP)
    * JSPM       (frontend package management)
    * Node.js

#### Spec
    * Users should be able to visit the application, select a username, and begin chatting.  Don’t worry about creating accounts, etc.  Keep it simple; don’t use a database or other forms of permanent persistence.  Store your chat messages in memory on the server.  This is obviously not scalable but is easy to do and will be good for the demo.
    * The chat room will only have one “channel”.  There’s just one, publicly accessible “channel”.
    * Show off your knowledge of Javascript, ES6, and CSS.  The interface should be simple, clean and intuitive.
    * Zip your app (with the git repo) and send it to me.
    * Deploy your app to Heroku (or something similar) so we can see your app in action.
    * Commit often to demonstrate a healthy workflow.  The process is as important as the product.
    * Use TDD, React and, preferably, Redux.
### Design Sketch

![Auth View](https://docs.google.com/drawings/d/1zjKZiaJBM9t__oVtLdvIUGUSxOqXFCg2dQ5srRUUxHY/pub?w=960&h=720 "Auth View")

![Chat View](https://docs.google.com/drawings/d/18bELhv4-Ow2iKleRENHMlkh7UNYYNy3_QV75qsK8XvI/pub?w=960&h=720 "Chat View")

#### Install
```bash
npm install
jspm install
```
#### Test
```bash
npm test
```

#### Run
```bash
npm start
```
