<div align="center">

![Planet Logo](/app/public/img/favicon.ico)
# neuPlanet 🌒 
 <h2>Private Microblogging for the Post Connoisseur</h2>

![GitHub license](https://img.shields.io/badge/License-MIT-orange)
### This responsive web app started as a bootcamp exercise and grew into a larger collaborative project, [devlr](https://devlr.herokuapp.com). With some new knowledge, I went back and restyled my initial starting point for personal use. A mini blog, just for you and your world.
</div>

## *Table of Contents*

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Questions](#questions)

## *Description*
neuPlanet is a personal microblogging platform for the late stage internet user — sometimes you just need to post into the void. This application uses an Express server and sources data using a Sequelize ORM and MySQL database.

## *Installation*
### Open the repository folder in your prefered code editor and pull up the built-in terminal. You will need Node.js installed to run this application.
- Type `npm i` to pull the project dependencies to your local.
- Navigate to the `/config` folder and update `connection.js` to match your own Workbench root information. You will need to create the `sequelize_planet` database to continue.

## *Usage*
### This app is not deployed, as it's currently designed for personal use on a local server. Clone the repo to start editing.
- To start the development server, type `npm start` in your terminal.
- To add a new post to the database, click into `username` and enter your posting alias.
- Then, enter your post body (255 char limit) in `What's on your mind?` and click `Post`.
- Delete entries by clicking the trash icon. Note that as of now, you cannot delete a post directly after making it because I'm a noob. The work continues and contributions are welcome. 😅

## *Screenshots*

Mobile / Vertical View            |  Desktop / Landscape View
:-------------------------:|:-------------------------:
![Demo of Mobile Layout](/app/public/img/vert.PNG)  |  ![Demo of Homepage](/app/public/img/ss.PNG)


## *Questions?*
🌒 Links in Bio: [katsign](https://github.com/katsign)

---
This project is MIT licensed. &copy; 2021
