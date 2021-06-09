import 'css/main.css';
import { Component, useState } from 'react'
import React from 'react'

import Profile1 from 'components/Profile1'

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

  /* Fetches */
  //const [error, setError] = useState(null);
  //const [isLoaded, setIsLoaded] = useState(false);

  const [user, setUser] = useState({
      id: "4",
      name: "Bob",
      email: "Will",
      username: "bwill",
      password: "fsdf",
      typeOfUser: "Insr",
      typeUser: {
        classes: ["B07", "CSCC01"],
        image: "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
        biography: "Lorem djklakldsal"
      }



      
  });

  React.useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      //body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
  
    fetch('http://localhost:3001/profile/60bf978d35a4fe124eaa39ff', requestOptions)
        .then(response => response.json())
        .then(data => setUser({
          id: data._id,
          name: data.name,
          email: data.email,
          username: data.username,
          password: data.password,
          typeOfUser: data.typeOfUser,
          typeUser: data.typeUser
        }))

  }, [])

  
      

  return (
    <div className="App">
      <Profile1/>
    </div>
  );
}

export default App;
