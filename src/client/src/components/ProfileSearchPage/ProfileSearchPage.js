import React from "react";
import { Component, useState, useEffect } from "react";
import ProfileCards from "./ProfileCards/ProfileCards";
import SearchHeader from "./SearchHeader";
import { connect } from "react-redux";
import AuthHeader from "../AuthHeader"

const ProfileSearchPage = ({ user, isAuthenticated, history }) => {
  const [users, setUsers] = useState([
    {
      id: "4",
      name: "ABob-Entrepreneur",
      email: "Will",
      username: "bwill",
      password: "fsdf",
      typeOfUser: "Entrepreneur",
      typeUser: {
        classes: ["B07", "CSCC01"],
        image:
          "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
        biography: "Lorem djklakldsal",
        lookingFunding: true,
      },
    },

    {
      id: "5",
      name: "Bob1-Company",
      email: "Will",
      username: "bwill",
      password: "fsdf",
      typeOfUser: "Company",
      location: "Hillsbury Mecleveins",
      typeUser: {
        classes: ["B07", "CSCC01"],
        image:
          "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
        biography: "Lorem djklakldsal",
        lookingFunding: true,
      },
    },

    {
      id: "6",
      name: "CBob2-Instructor",
      email: "Will",
      username: "bwill",
      password: "fsdf",
      location: "Ontario Toronto",
      typeOfUser: "Instructor",
      typeUser: {
        classes: ["B07", "CSCC01"],
        image:
          "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
        biography: "Lorem djklakldsal",
        lookingFunding: false,
      },
    },

    {
      id: "7",
      name: "DBob7-Company",
      email: "Will",
      username: "bwill",
      password: "fsdf",
      typeOfUser: "Company",
      typeUser: {
        classes: ["B07", "CSCC01"],
        image:
          "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
        biography: "Lorem djklakldsal",
        lookingFunding: true,
      },
    },

    {
      id: "8",
      name: "EBob8-Company",
      email: "Will",
      username: "bwill",
      password: "fsdf",
      typeOfUser: "Company",
      location: "Hillsbury Mecleveins",
      typeUser: {
        classes: ["B07", "CSCC01"],
        image:
          "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
        biography: "Lorem djklakldsal",
        lookingFunding: true,
      },
    },

    {
      id: "9",
      name: "FBob9-Entrepreneur",
      email: "Will",
      username: "bwill",
      password: "fsdf",
      location: "Ontario Toronto",
      typeOfUser: "Entrepreneur",
      typeUser: {
        classes: ["B07", "CSCC01"],
        image:
          "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
        biography: "Lorem djklakldsal",
        lookingFunding: false,
      },
    },

    {
      id: "10",
      name: "GBob10-Company",
      email: "Will",
      username: "bwill",
      password: "fsdf",
      typeOfUser: "Company",
      typeUser: {
        classes: ["B07", "CSCC01"],
        image:
          "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
        biography: "Lorem djklakldsal",
        lookingFunding: false,
      },
    },

    {
      id: "11",
      name: "HBob11-Company",
      email: "Will",
      username: "bwill",
      password: "fsdf",
      typeOfUser: "Company",
      location: "Hillsbury Mecleveins",
      typeUser: {
        classes: ["B07", "CSCC01"],
        image:
          "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
        biography: "Lorem djklakldsal",
        lookingFunding: true,
      },
    },

    {
      id: "12",
      name: "IBob12-Partner",
      email: "Will",
      username: "bwill",
      password: "fsdf",
      location: "Ontario Toronto",
      typeOfUser: "Partner",
      typeUser: {
        classes: ["B07", "CSCC01"],
        image:
          "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
        biography: "Lorem djklakldsal",
        lookingFunding: false,
      },
    },

    {
      id: "13",
      name: "JBob13-Partner",
      email: "Will",
      username: "bwill",
      password: "fsdf",
      typeOfUser: "Partner",
      typeUser: {
        classes: ["B07", "CSCC01"],
        image:
          "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
        biography: "Lorem djklakldsal",
        lookingFunding: true,
      },
    },

    {
      id: "14",
      name: "KBob14-Instructor",
      email: "Will",
      username: "bwill",
      password: "fsdf",
      typeOfUser: "Instructor",
      location: "Hillsbury Mecleveins",
      typeUser: {
        classes: ["B07", "CSCC01"],
        image:
          "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
        biography: "Lorem djklakldsal",
        lookingFunding: true,
      },
    },

    {
      id: "15",
      name: "LBob15-Company",
      email: "Will",
      username: "bwill",
      password: "fsdf",
      location: "Ontario Toronto",
      typeOfUser: "Company",
      typeUser: {
        classes: ["B07", "CSCC01"],
        image:
          "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg",
        biography: "Lorem djklakldsal",
        lookingFunding: false,
      },
    },
  ]);

  const [users2, setUsers2] = useState([]);
  const [isOnce, setIsOnce] = useState(true);

  //useEffect(() => {

  console.log("hello");
  if (isOnce) {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("http://localhost:3001/profile/getUsers", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setUsers([...data]);
        setUsers2([...data]);
      });

    setIsOnce(false);
  }

  //})

  return (
      <>
      <AuthHeader user={user} isAuthenticated={isAuthenticated} history={history}/>
    <div className="profile_search">
      <SearchHeader
        users={users}
        setUsers={setUsers}
        users2={users2}
        setUsers2={setUsers2}
        history={history}
      />
      <ProfileCards users={users2} history={history} />
    </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user.sentUser,
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, {})(ProfileSearchPage);
