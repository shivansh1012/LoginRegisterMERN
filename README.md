# MERNPortal

A basic portal for user and admin login/register.

## Getting Started

### Installing

* After cloning the repository run command "npm i" in backend and frontend folders.
* In ./backend/ create a .env file and define 
  ```
  MERN_DB_URI=mongodb://localhost:27017/FormsDB
  
  PORT = 5000
  
  FORM_NS=FormSubmission


### Executing program

* To start server, Go  in ./backend and execute
  ```
  npm run dev
  ```
* To start client, Go into ./frontend and execute
  ```
  npm start
  ```
* !The Client and Server has to run together for it to work.

### Functioning

* Admin  
    - Can create a new User
* User
    - Can Login
