import 'css/main.css';
import { Component, useState } from 'react'

import ProfilePage from 'components/ProfilePage/ProfilePage'
import Footer from 'components/Footer'

function App() {
  

  /* STATIC INFO */
  const [companyPro, setCompanyPro] = useState([
    {
      id: "1",
      name: "Bob",
      administrator: "Will",
      employees: ["bwill", "ewill"],
      numEmployees: "2",
      biography: "Lorem djklakldsal",
      lookingFunding: false,
      location: "Toronto",
      image: "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg"
    }
  ])
  const [enterpreneurPro, setEnterpreneurPro] = useState([
    {
      id: "2",
      firstName: "BobEntr",
      lastName: "WillEnrt",
      username: "bwillENtr",
      age: 10,
      biography: "Lorem djklakldsal",
      image: "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
      location: "Toronto",


    }
  ])
  const [partnerPro, setPartnerPro] = useState([
    {
      id: "3",
      firstName: "Bob",
      lastName: "Will",
      username: "bwill",
      company: "DSN",
      role: "Head",
      image: "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg"
    
    }
  ])
  const [instructorPro, setInstructorPro] = useState([
    {
      id: "4",
      firstName: "Bob",
      lastName: "Will",
      username: "bwill",
      classes: ["B07", "CSCC01"],
      image: "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
      biography: "Lorem djklakldsal"

    }
  ])
  const [userPro, setUserPro] = useState(
    {
      id: "5",
      firstName: "Bob",
      lastName: "Will",
      username: "bwill",
      typeUser: "instructor"
    }
  )

  return (
    <div className="App">

      <ProfilePage/>
      {/*<Footer/>*/}

    </div>
    
  );
}

export default App;
