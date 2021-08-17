# MERNPortal

A basic portal for user and admin login/register using JWT Authentication.

## Getting Started

### Installing

* After cloning the repository run command "npm i" in backend and frontend folders.
* In ./backend/ create a .env file and define 
  ```
  MERN_DB_URI=mongodb://localhost:27017/Try2Portal
  
  JWT_SECRET=SomeKeyForSecurity
  ```
* In ./frontend/src/ create a config.js file and define 
  ```
  export const apiBaseURL = "http://localhost:5000/api/v1";
  ```


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
