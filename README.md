# Project-Mjaarns branch MJAARNS-2
<img src="https://images.squarespace-cdn.com/content/5959429eff7c50228e412bf1/1607561881703-9EE9CN7L551HJPITP9XB/AII+LOGO.png?format=1500w&content-type=image%2Fpng" width="500" height="400">
This project is in relation with the African Impact Challenge, an initiative to build a better Africa by investing in and helping aspiring entrepreneurs.
In particular, this application serves as a combination of a learning and social media platform for entrepreneurs to learn, network, and collaborate on their product and entrepreneurial ideas.
The application will be use in the second stage of the challenge to help entrepreneurs meet other entrepreneurs and investors as well as learn with the help of instructors.<br />
<br />

## Installation <br />
### Frontend-Client
&nbsp;&nbsp;&nbsp;&nbsp;**Prerequisites:** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- NodeJs <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Npm <br />

&nbsp;&nbsp;&nbsp;&nbsp;**How to run (after you have cloned the repo):** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. `$ cd /project-mjaarns/src/` <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. `$ npm run client-install` <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. `$ npm run client` <br />

---

### Backend-Server
&nbsp;&nbsp;&nbsp;&nbsp;**Prerequisites:** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- NodeJs <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Npm <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- MongoDB <br />

&nbsp;&nbsp;&nbsp;&nbsp;**How to run (after you have cloned the repo):** <br /><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Database (Mongo):* <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. `$ systemctl start mongod` <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. `$ mongo` <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. `> use african-impact-challenge` <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. `> db.temp.insert({})` <br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Server:* <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. `$ cd /project-mjaarns/src/` <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. `$ npm install` <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. `$ npm run start` <br />

---

### Running frontend and backend concurrently
&nbsp;&nbsp;&nbsp;&nbsp;This assumes you have the capability to run the backend and frontend separately already.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Steps:* <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. `$ cd /project-mjaarns/src/`<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. `$ npm run dev`

## Contribution <br />
The team follows git flow, and so to work on feature, you will be working on a particular branch. We are using JIRA to keep track of features and tickets.<br />
Our branch names generally follow the JIRA the tickets.<br />
