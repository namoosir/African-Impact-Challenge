# Project-Mjaarns branch MJAARNS-2
<img src="https://images.squarespace-cdn.com/content/5959429eff7c50228e412bf1/1607561881703-9EE9CN7L551HJPITP9XB/AII+LOGO.png?format=1500w&content-type=image%2Fpng" width="500" height="400">
This project is in relation with the African Impact Challenge, an initiative to build a better Africa by investing in and helping aspiring entrepreneurs.
In particular, this application serves as a combination of a learning and social media platform for entrepreneurs to learn, network, and collaborate on their product and entrepreneurial ideas.
The application will be use in the second stage of the challenge to help entrepreneurs meet other entrepreneurs and investors as well as learn with the help of instructors.<br />
<br />

## Installation <br />
### Frontend-Client
**Prerequisites:**
- NodeJs
- Npm

**How to run (after you have cloned the repo):**
1. `$ cd /project-mjaarns/src/`
2. `$ npm run client-install`
3. `$ npm run client`

---

### Backend-Server
**Prerequisites:**
- NodeJs 
- Npm
- MongoDB

**How to run (after you have cloned the repo):** <br /><br />
*Database (Mongo):*
1. `$ systemctl start mongod`
2. `$ mongo`
3. `> use african-impact-challenge`
4. `> db.temp.insert({})`

*Server:*
1. `$ cd /project-mjaarns/src/`
2. `$ npm install`
3. `$ npm run start`

---

### Running frontend and backend concurrently
This assumes you have the capability to run the
backend and frontend separately already

*Steps:*
1. `$ cd /project-mjaarns/src/`
2. `$ npm run dev`

## Contribution <br />
The team follows git flow, and so to work on feature, you will be working on a particular branch. We are using JIRA to keep track of features and tickets.<br />
Our branch names generally follow the JIRA the tickets.<br />
